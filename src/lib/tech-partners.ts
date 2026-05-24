export type TechPartner = {
  id: string;
  name: string;
  logo: string;
  /** Keep original brand colors (e.g. Lovable gradient) */
  colored?: boolean;
  offset?: string;
};

export const techPartners: TechPartner[] = [
  {
    id: "cursor",
    name: "Cursor",
    logo: "/logos/cursor.svg",
    offset: "md:col-start-1 md:row-start-1",
  },
  {
    id: "openai",
    name: "OpenAI",
    logo: "/logos/openai.svg",
    offset: "md:col-start-2 md:row-start-1 md:translate-y-10",
  },
  {
    id: "lovable",
    name: "Lovable",
    logo: "/logos/lovable-color.svg",
    colored: true,
    offset: "md:col-start-3 md:row-start-1 md:translate-y-3",
  },
  {
    id: "manus",
    name: "Manus",
    logo: "/logos/manus.svg",
    offset: "md:col-start-2 md:row-start-2 md:-translate-y-2",
  },
];

export const techPartnersMore = {
  id: "more",
  label: "and more",
  offset: "md:col-start-3 md:row-start-2 md:translate-y-6",
};
