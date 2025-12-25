export type Database = {
  public: {
    Views: Record<string, never>;
    Tables: {
      posts: {
        Row: {
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
          created_at: string | null;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description?: string | null;
          content: string;
          cover_url?: string | null;
          author_name?: string | null;
          tags?: string[] | null;
          category_slug?: string | null;
          published_at?: string | null;
          updated_at?: string | null;
          reading_time?: number | null;
          is_published?: boolean;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["posts"]["Insert"]>;
        Relationships: [];
      };
      post_reviews: {
        Row: {
          id: string;
          post_id: string;
          rating: number;
          name: string | null;
          email: string | null;
          message: string;
          is_approved: boolean;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          post_id: string;
          rating: number;
          name?: string | null;
          email?: string | null;
          message: string;
          is_approved?: boolean;
          created_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["post_reviews"]["Insert"]>;
        Relationships: [];
      };
      post_views: {
        Row: {
          id: string;
          post_id: string;
          viewed_at: string | null;
          day: string;
          views: number;
          ip: string | null;
          user_agent: string | null;
          referrer: string | null;
          country: string | null;
          region: string | null;
          city: string | null;
          timezone: string | null;
          lat: number | null;
          lon: number | null;
          location: Record<string, unknown> | null;
        };
        Insert: {
          id?: string;
          post_id: string;
          viewed_at?: string | null;
          day?: string;
          views?: number;
          ip?: string | null;
          user_agent?: string | null;
          referrer?: string | null;
          country?: string | null;
          region?: string | null;
          city?: string | null;
          timezone?: string | null;
          lat?: number | null;
          lon?: number | null;
          location?: Record<string, unknown> | null;
        };
        Update: Partial<Database["public"]["Tables"]["post_views"]["Insert"]>;
        Relationships: [];
      };
    };
    Functions: {
      get_popular_posts: {
        Args: { limit_count: number; offset_count?: number };
        Returns: Database["public"]["Tables"]["posts"]["Row"][];
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
