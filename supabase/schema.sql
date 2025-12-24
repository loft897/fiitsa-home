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
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null references public.posts (slug) on delete cascade,
  rating integer not null check (rating >= 1 and rating <= 5),
  name text,
  email text,
  message text not null,
  is_approved boolean default false,
  created_at timestamptz default now()
);

create index if not exists reviews_post_slug_idx on public.reviews (post_slug);
create index if not exists reviews_is_approved_idx on public.reviews (is_approved);

-- Daily views
create table if not exists public.post_views (
  post_slug text not null references public.posts (slug) on delete cascade,
  day date not null default current_date,
  views integer not null default 0,
  primary key (post_slug, day)
);

-- RLS
alter table public.posts enable row level security;
alter table public.reviews enable row level security;
alter table public.post_views enable row level security;

-- Posts: public read only for published
create policy "posts_read_published"
  on public.posts
  for select
  using (is_published = true);

-- Reviews: public read approved
create policy "reviews_read_approved"
  on public.reviews
  for select
  using (is_approved = true);

-- Reviews: allow public insert, force moderation
create policy "reviews_insert_public"
  on public.reviews
  for insert
  with check (is_approved = false);

-- Views: no public access (service role only)

-- Function: increment daily views
create or replace function public.increment_post_view(post_slug text)
returns void
language plpgsql
security definer
as $$
begin
  insert into public.post_views (post_slug, day, views)
  values (post_slug, current_date, 1)
  on conflict (post_slug, day)
  do update set views = public.post_views.views + 1;
end;
$$;

-- Function: popular posts (7 days)
create or replace function public.get_popular_posts(limit_count integer, offset_count integer default 0)
returns setof public.posts
language sql
stable
as $$
  select p.*
  from public.posts p
  left join (
    select post_slug, sum(views) as views_7d
    from public.post_views
    where day >= current_date - interval '7 days'
    group by post_slug
  ) v on v.post_slug = p.slug
  where p.is_published = true
  order by v.views_7d desc nulls last, p.published_at desc
  limit limit_count offset offset_count;
$$;
