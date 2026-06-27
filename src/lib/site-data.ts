import { supabase } from "@/lib/supabase";
import { projectGradient, projectInitials, testimonyAccent } from "@/lib/projectStyle";
import type { CaseStudy, CaseStudySection } from "@/types/caseStudy";
import type {
  DbCaseStudy,
  DbCaseStudySection,
  DbGeneralInformation,
  DbProject,
  DbTestimony,
} from "@/types/database";

export type ProjectCard = {
  id: string;
  name: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  slug: string;
  gradient: string;
  initials: string;
};

export type TestimonyCard = {
  id: string;
  name: string;
  content: string;
  service: string;
  position: string;
  company: string;
  rating: number;
  accent: string;
};

const SECTION_META: Record<
  CaseStudySection["id"],
  { label: string; visual: CaseStudySection["visual"] }
> = {
  problem: { label: "The Problem", visual: "list" },
  need: { label: "The Need", visual: "list" },
  solution: { label: "The Solution", visual: "diagram" },
  implementation: { label: "The Implementation", visual: "icon" },
  results: { label: "The Results", visual: "stat" },
};

function mapSection(
  key: CaseStudySection["id"],
  section: DbCaseStudySection
): CaseStudySection {
  const meta = SECTION_META[key];
  return {
    id: key,
    label: meta.label,
    headline: section.title,
    body: section.description,
    visual: meta.visual,
    items: section.items?.length ? section.items : undefined,
    stats: section.stats?.length ? section.stats : undefined,
  };
}

const HERO_COLORS: Record<string, string> = {
  "preview-system-design": "#0ea5e9",
  "gcp-cloud-migration": "#4285F4",
  "e-commerce-platform": "#f43f5e",
  "multi-cloud-deployment": "#6366f1",
};

function mapCaseStudy(row: DbCaseStudy): CaseStudy {
  return {
    slug: row.slug,
    title: row.title ?? row.slug,
    tagline: row.tagline ?? "",
    category: row.category ?? "DevOps Projects",
    tags: row.tags ?? [],
    heroColor: HERO_COLORS[row.slug] ?? "#0ea5e9",
    overview: {
      client: row.client,
      timeline: row.timeline,
      team: row.team_staff,
      impact: row.impact,
    },
    sections: [
      mapSection("problem", row.problem),
      mapSection("need", row.need),
      mapSection("solution", row.solution),
      mapSection("implementation", row.implementation),
      mapSection("results", row.results),
    ],
  };
}

function parseTestimonyTitle(title: string) {
  const parts = title.split("·").map((p) => p.trim());
  return {
    position: parts[0] ?? title,
    company: parts[1] ?? "",
  };
}

export async function fetchProjects(): Promise<ProjectCard[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, case_studies(slug)")
    .order("created_at", { ascending: true });

  if (error) throw error;

  return (data as DbProject[]).map((project, index) => ({
    id: project.id,
    name: project.name,
    type: project.type,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    slug: project.case_studies?.slug ?? project.name,
    gradient: projectGradient(project.type, index),
    initials: projectInitials(project.title),
  }));
}

export async function fetchTestimonies(): Promise<TestimonyCard[]> {
  const { data, error } = await supabase
    .from("testimonies")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw error;

  return (data as DbTestimony[]).map((row, index) => {
    const { position, company } = parseTestimonyTitle(row.title);
    return {
      id: row.id,
      name: row.full_name,
      content: row.testimony,
      service: row.service_chosen,
      position,
      company,
      rating: row.rating,
      accent: testimonyAccent(row.service_chosen, index),
    };
  });
}

export async function fetchGeneralInformation(): Promise<DbGeneralInformation> {
  const { data, error } = await supabase
    .from("general_informations")
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!data) throw new Error("General information not found");
  return data as DbGeneralInformation;
}

export async function fetchCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const { data, error } = await supabase
    .from("case_studies")
    .select(
      `
      *,
      problem:case_study_sections!case_studies_problem_id_fkey(*),
      need:case_study_sections!case_studies_need_id_fkey(*),
      solution:case_study_sections!case_studies_solution_id_fkey(*),
      implementation:case_study_sections!case_studies_implementation_id_fkey(*),
      results:case_study_sections!case_studies_results_id_fkey(*)
    `
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return mapCaseStudy(data as DbCaseStudy);
}
