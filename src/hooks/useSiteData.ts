import { useQuery } from "@tanstack/react-query";
import {
  fetchCaseStudyBySlug,
  fetchGeneralInformation,
  fetchProjects,
  fetchTestimonies,
} from "@/lib/site-data";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}

export function useTestimonies() {
  return useQuery({
    queryKey: ["testimonies"],
    queryFn: fetchTestimonies,
  });
}

export function useGeneralInformation() {
  return useQuery({
    queryKey: ["general-information"],
    queryFn: fetchGeneralInformation,
  });
}

export function useCaseStudy(slug: string | undefined) {
  return useQuery({
    queryKey: ["case-study", slug],
    queryFn: () => fetchCaseStudyBySlug(slug!),
    enabled: Boolean(slug),
  });
}
