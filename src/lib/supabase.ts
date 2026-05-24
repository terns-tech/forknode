import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function createServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

export type Database = {
  public: {
    Tables: {
      site_pages: {
        Row: {
          id: string;
          slug: string;
          status: "draft" | "published";
          seo_title: string | null;
          seo_description: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      page_sections: {
        Row: {
          id: string;
          page_slug: string;
          section_key: string;
          title: string | null;
          subtitle: string | null;
          body_markdown: string | null;
          cta_primary_label: string | null;
          cta_primary_url: string | null;
          cta_secondary_label: string | null;
          cta_secondary_url: string | null;
          order_index: number;
          visibility: "public" | "hidden";
          created_at: string;
          updated_at: string;
        };
      };
      faq_items: {
        Row: {
          id: string;
          event_slug: string;
          question: string;
          answer_markdown: string;
          order_index: number;
          visibility: "public" | "hidden";
        };
      };
      partners: {
        Row: {
          id: string;
          type: "challenge_partner" | "sponsor" | "tech_partner" | "community_partner";
          status: "in_conversation" | "announced" | "hidden";
          name: string;
          logo_url: string | null;
          website_url: string | null;
          blurb: string | null;
          order_index: number;
        };
      };
      speakers: {
        Row: {
          id: string;
          status: "invite_sent" | "tentative" | "announced" | "hidden";
          name: string;
          photo_url: string | null;
          bio: string | null;
          talk_title: string | null;
          tags: string[];
          order_index: number;
        };
      };
      events: {
        Row: {
          id: string;
          slug: string;
          year: number;
          location_text: string;
          date_text: string;
          luma_url: string | null;
          discord_url: string | null;
          slack_url: string | null;
          applications_open: boolean;
          applications_close_text: string | null;
        };
      };
      applications_participants: {
        Row: {
          id: string;
          created_at: string;
          event_slug: string;
          status: "new" | "reviewing" | "accepted" | "rejected";
          email: string;
          full_name: string;
          organization: string | null;
          data: Record<string, unknown>;
        };
      };
    };
  };
};
