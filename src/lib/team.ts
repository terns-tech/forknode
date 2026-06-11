export type TeamMember = {
  name: string;
  role: string;
  work: string;
  study?: string;
  image?: string;
  initials: string;
  /** CSS object-position to keep crop focused on the face */
  portraitFocus?: string;
};

const omkar: TeamMember = {
  name: "Omkar Kondhalkar",
  role: "Head of Management",
  work: "Computer Vision & AI Engineering, reGround.systems GmbH",
  study: "MSc Data Science & AI, Universität Hamburg",
  image: "/omkar.bg.png",
  portraitFocus: "center 12%",
  initials: "OK",
};

const elias: TeamMember = {
  name: "Elias Tilmes",
  role: "Head of Finance",
  work: "Pettoo & MRBL Studios",
  study: "Economics, University of Hamburg",
  image: "/elias-bg.png",
  portraitFocus: "center 14%",
  initials: "ET",
};

const sebastian: TeamMember = {
  name: "Sebastian Steltzer",
  role: "PMO & Investor Relations",
  work: "Business Development & Investor Relations, reGround.systems GmbH · Board, American Club of Hamburg",
  image: "/sebstian-bg.png",
  portraitFocus: "center 18%",
  initials: "SS",
};

const luna: TeamMember = {
  name: "Luna Cathrine Schreiner",
  role: "Policy Advisor & Government Relations",
  work: "Deutscher Bundestag (German Federal Parliament)",
  study: "MA Political Science, Ludwig-Maximilians-Universität München",
  image: "/luna-bg.png",
  portraitFocus: "center 16%",
  initials: "LS",
};

const yash: TeamMember = {
  name: "Yash Pawar",
  role: "Head of Operations (Volunteer)",
  work: "AI & HPC Engineer, C-DAC PARAM National Supercomputing Facility",
  study: "PG Diploma in AI & Data Analytics, CDAC Pune",
  image: "/yash-bg.png",
  portraitFocus: "center 12%",
  initials: "YP",
};

const antje: TeamMember = {
  name: "Antje Ute Bauer",
  role: "Advisor, Consulting & Community (Pune)",
  work: "Transformation Consultant & Coach, StrengthMiner® Consulting LLP",
  image: "/antja-bg.png",
  portraitFocus: "center 15%",
  initials: "AB",
};

export const teamRowOne: TeamMember[] = [omkar, elias, sebastian];
export const teamRowTwo: TeamMember[] = [luna, yash, antje];
