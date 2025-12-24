-- Enable extensions
create extension if not exists "pgcrypto";

-- Posts
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  content text not null,
  cover_url text,
  author_name text,
  tags text[] default '{}'::text[],
  category_slug text,
  published_at timestamptz,
  updated_at timestamptz,
  reading_time integer,
  is_published boolean default false,
  created_at timestamptz default now()
);

create index if not exists posts_category_slug_idx on public.posts (category_slug);
create index if not exists posts_published_at_idx on public.posts (published_at desc);
create index if not exists posts_tags_gin_idx on public.posts using gin (tags);

-- Reviews
create table if not exists public.post_reviews (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts (id) on delete cascade,
  rating integer not null check (rating >= 1 and rating <= 5),
  name text,
  email text,
  message text not null,
  is_approved boolean default false,
  created_at timestamptz default now()
);

create index if not exists post_reviews_post_id_idx on public.post_reviews (post_id);
create index if not exists post_reviews_is_approved_idx on public.post_reviews (is_approved);

-- Views (analytics + daily aggregate)
create table if not exists public.post_views (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts (id) on delete cascade,
  day date not null default current_date,
  views integer not null default 1,
  viewed_at timestamptz default now(),
  ip text,
  user_agent text,
  referrer text,
  country text,
  region text,
  city text,
  timezone text,
  lat double precision,
  lon double precision,
  location jsonb
);

create index if not exists post_views_post_id_day_idx on public.post_views (post_id, day);
create index if not exists post_views_post_id_ip_day_idx on public.post_views (post_id, ip, day);
create index if not exists post_views_viewed_at_idx on public.post_views (viewed_at desc);

-- RLS
alter table public.posts enable row level security;
alter table public.post_reviews enable row level security;
alter table public.post_views enable row level security;

-- Posts: public read only for published
drop policy if exists "posts_read_published" on public.posts;
create policy "posts_read_published"
  on public.posts
  for select
  using (is_published = true);

-- Reviews: public read approved
drop policy if exists "post_reviews_read_approved" on public.post_reviews;
create policy "post_reviews_read_approved"
  on public.post_reviews
  for select
  using (is_approved = true);

-- Reviews: allow public insert, force moderation
drop policy if exists "post_reviews_insert_public" on public.post_reviews;
create policy "post_reviews_insert_public"
  on public.post_reviews
  for insert
  with check (is_approved = false);

-- Views: no public access (service role only)

-- Function: increment daily views
-- Function removed: view events are stored per visit in post_views.

-- Function: popular posts (7 days)
create or replace function public.get_popular_posts(limit_count integer, offset_count integer default 0)
returns setof public.posts
language sql
stable
security invoker
set search_path = public
as $$
  select p.*
  from public.posts p
  left join (
    select post_id, sum(views) as views_7d
    from public.post_views
    where day >= current_date - interval '7 days'
    group by post_id
  ) v on v.post_id = p.id
  where p.is_published = true
  order by v.views_7d desc nulls last, p.published_at desc
  limit limit_count offset offset_count;
$$;
