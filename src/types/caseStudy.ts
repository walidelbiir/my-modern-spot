export type CaseStudySection = {
  id: "problem" | "need" | "solution" | "implementation" | "results";
  label: string;
  headline: string;
  body: string;
  visual: "icon" | "stat" | "list" | "diagram";
  items?: string[];
  stats?: { value: string; label: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  heroColor: string;
  overview?: {
    client: string;
    timeline: string;
    team: string;
    impact: string;
  };
  sections: CaseStudySection[];
};
