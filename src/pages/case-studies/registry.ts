import type { ComponentType } from "react";
import type { CaseStudy } from "@/types/caseStudy";
import PreviewSystemCaseStudy from "./PreviewSystemCaseStudy";
import GcpMigrationCaseStudy from "./GcpMigrationCaseStudy";
import EcommercePlatformCaseStudy from "./EcommercePlatformCaseStudy";
import MultiCloudDeploymentCaseStudy from "./MultiCloudDeploymentCaseStudy";

export type CaseStudyTemplateProps = { study: CaseStudy };

const CASE_STUDY_TEMPLATES: Record<string, ComponentType<CaseStudyTemplateProps>> = {
  "preview-system-design": PreviewSystemCaseStudy,
  "gcp-cloud-migration": GcpMigrationCaseStudy,
  "e-commerce-platform": EcommercePlatformCaseStudy,
  "multi-cloud-deployment": MultiCloudDeploymentCaseStudy,
};

export function getCaseStudyTemplate(slug: string) {
  return CASE_STUDY_TEMPLATES[slug] ?? null;
}
