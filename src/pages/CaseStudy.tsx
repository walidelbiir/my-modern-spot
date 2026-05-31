import { useParams } from "react-router-dom";
import { useCaseStudy } from "@/hooks/useSiteData";
import { CaseStudyLoading, CaseStudyNotFound } from "@/components/case-study/CaseStudyShell";
import { getCaseStudyTemplate } from "@/pages/case-studies/registry";

const CaseStudy = () => {
  const { slug } = useParams();
  const { data: study, isLoading } = useCaseStudy(slug);

  if (isLoading) return <CaseStudyLoading />;
  if (!study) return <CaseStudyNotFound />;

  const Template = getCaseStudyTemplate(study.slug);
  if (!Template) return <CaseStudyNotFound />;

  return <Template study={study} />;
};

export default CaseStudy;
