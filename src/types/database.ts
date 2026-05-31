export type DbProject = {
  id: string;
  name: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  case_study_id: string | null;
  case_studies: { slug: string } | null;
};

export type DbTestimony = {
  id: string;
  full_name: string;
  testimony: string;
  service_chosen: string;
  title: string;
  rating: number;
};

export type DbGeneralInformation = {
  id: string;
  email: string;
  phone_number: string;
  location: string;
  book_meeting_link: string;
  linkedin_link: string;
};

export type DbCaseStudySection = {
  id: string;
  title: string;
  description: string;
  items: string[] | null;
  stats: { value: string; label: string }[] | null;
};

export type DbCaseStudy = {
  id: string;
  slug: string;
  title: string | null;
  tagline: string | null;
  category: string | null;
  tags: string[] | null;
  team_staff: string;
  timeline: string;
  client: string;
  impact: string;
  problem: DbCaseStudySection;
  need: DbCaseStudySection;
  solution: DbCaseStudySection;
  implementation: DbCaseStudySection;
  results: DbCaseStudySection;
};
