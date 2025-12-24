export type Post = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  cover_url: string | null;
  author_name: string | null;
  tags: string[] | null;
  category_slug: string | null;
  published_at: string | null;
  updated_at: string | null;
  reading_time: number | null;
  is_published: boolean;
};

export type Review = {
  id: string;
  post_slug: string;
  rating: number;
  name: string | null;
  message: string;
  created_at: string;
};
