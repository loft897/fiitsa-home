import { supabaseServer } from "@/lib/supabaseServer";
import type { Post, Review } from "@/lib/types";

export type PostListOptions = {
  query?: string;
  tag?: string;
  category?: string;
  sort?: "recent" | "popular";
  page?: number;
  pageSize?: number;
};

export async function listPosts(options: PostListOptions = {}) {
  const { query, tag, category, sort = "recent", page = 1, pageSize = 9 } = options;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  if (sort === "popular") {
    const { data, error } = await supabaseServer.rpc("get_popular_posts", {
      limit_count: pageSize,
      offset_count: from,
    });

    if (error) throw error;
    return { data: (data || []) as Post[], count: null };
  }

  let queryBuilder = supabaseServer
    .from("posts")
    .select(
      "id, slug, title, description, cover_url, author_name, tags, category_slug, published_at, updated_at, reading_time, is_published",
      { count: "exact" }
    )
    .eq("is_published", true);

  if (query) {
    queryBuilder = queryBuilder.or(
      `title.ilike.%${query}%,description.ilike.%${query}%`
    );
  }

  if (tag) {
    queryBuilder = queryBuilder.contains("tags", [tag]);
  }

  if (category) {
    queryBuilder = queryBuilder.eq("category_slug", category);
  }

  const { data, error, count } = await queryBuilder
    .order("published_at", { ascending: false })
    .range(from, to);

  if (error) throw error;
  return { data: (data || []) as Post[], count };
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabaseServer
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) throw error;
  return data as Post;
}

export async function getAllPostSlugs() {
  const { data, error } = await supabaseServer
    .from("posts")
    .select("slug")
    .eq("is_published", true);

  if (error) throw error;
  return (data || []).map((item) => item.slug) as string[];
}

export async function getCategories() {
  const { data, error } = await supabaseServer
    .from("posts")
    .select("category_slug")
    .eq("is_published", true)
    .not("category_slug", "is", null);

  if (error) throw error;
  const unique = new Set<string>();
  (data || []).forEach((item) => {
    if (item.category_slug) unique.add(item.category_slug);
  });
  return Array.from(unique);
}

export async function getTags() {
  const { data, error } = await supabaseServer
    .from("posts")
    .select("tags")
    .eq("is_published", true);

  if (error) throw error;
  const tags = new Set<string>();
  (data || []).forEach((item) => {
    (item.tags || []).forEach((tag: string) => tags.add(tag));
  });
  return Array.from(tags);
}

export async function getSimilarPosts(post: Post, limit = 3) {
  if (!post.category_slug && (!post.tags || post.tags.length === 0)) return [];

  let queryBuilder = supabaseServer
    .from("posts")
    .select("id, slug, title, description, cover_url, author_name, tags, category_slug, published_at, updated_at, reading_time, is_published")
    .eq("is_published", true)
    .neq("slug", post.slug);

  if (post.category_slug) {
    queryBuilder = queryBuilder.eq("category_slug", post.category_slug);
  } else if (post.tags && post.tags.length > 0) {
    queryBuilder = queryBuilder.contains("tags", [post.tags[0]]);
  }

  const { data, error } = await queryBuilder
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return (data || []) as Post[];
}

export async function listApprovedReviews(postSlug: string, page = 1, pageSize = 6) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabaseServer
    .from("reviews")
    .select("id, post_slug, rating, name, message, created_at", { count: "exact" })
    .eq("post_slug", postSlug)
    .eq("is_approved", true)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw error;
  return { data: (data || []) as Review[], count };
}
