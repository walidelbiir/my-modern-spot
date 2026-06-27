import { useParams } from "react-router-dom";
import { useCaseStudy } from "@/hooks/useSiteData";
import { CaseStudyNotFound } from "@/components/case-study/CaseStudyShell";
import { DossierCaseStudy } from "@/components/case-study/DossierCaseStudy";

const CaseStudy = () => {
  const { slug } = useParams();
  const { data: study } = useCaseStudy(slug);

  if (!study) return <CaseStudyNotFound />;

  return <DossierCaseStudy study={study} />;
};

export default CaseStudy;
