import {
  STATIC_PROJECTS,
  STATIC_TESTIMONIALS,
  STATIC_CONTACT,
  STATIC_CASE_STUDIES,
  type ProjectCard,
  type TestimonyCard,
} from "@/lib/static-data";
import type { CaseStudy } from "@/types/caseStudy";

// Static hooks — no network calls, no Supabase

export function useProjects() {
  return {
    data: STATIC_PROJECTS as ProjectCard[],
    isLoading: false,
    isError: false,
  };
}

export function useTestimonies() {
  return {
    data: STATIC_TESTIMONIALS as TestimonyCard[],
    isLoading: false,
    isError: false,
  };
}

export function useGeneralInformation() {
  return {
    data: STATIC_CONTACT,
    isLoading: false,
    isError: false,
  };
}

export function useCaseStudy(slug: string | undefined) {
  const study: CaseStudy | null =
    slug && STATIC_CASE_STUDIES[slug] ? STATIC_CASE_STUDIES[slug] : null;
  return {
    data: study,
    isLoading: false,
    isError: false,
  };
}
