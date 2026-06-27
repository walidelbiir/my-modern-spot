import { projectGradient, projectInitials } from "@/lib/projectStyle";
import type { CaseStudy } from "@/types/caseStudy";

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
  badge: string;
};

export type TestimonyCard = {
  id: string;
  name: string;
  content: string;
  service: string;
  position: string;
  company: string;
  rating: number;
};

export const STATIC_CONTACT = {
  email: "hello@bir.tech",
  phone_number: "+1 (415) 000-0000",
  location: "San Francisco, CA — Global",
  book_meeting_link: "https://cal.com/bir",
  linkedin_link: "https://linkedin.com/company/bir-tech",
};

export const STATIC_PROJECTS: ProjectCard[] = [
  {
    id: "1",
    name: "preview-system-design",
    type: "AI Product Engineering",
    title: "Preview System",
    description:
      "Real-time preview infrastructure for a developer platform — built and hardened AI-first. Per-PR cloud environments for web and mobile.",
    technologies: ["React", "WebSockets", "GitHub Actions", "Docker", "IaC"],
    slug: "preview-system-design",
    gradient: projectGradient("AI Product Engineering", 0),
    initials: projectInitials("Preview System"),
    badge: "3× faster to launch",
  },
  {
    id: "2",
    name: "gcp-cloud-migration",
    type: "AI-Accelerated DevOps",
    title: "GCP Migration",
    description:
      "Zero-downtime migration of a monolith to Google Cloud, with AI-generated migration scripts and reproducible infrastructure.",
    technologies: ["Terraform", "GKE", "Cloud Build", "Helm", "Prometheus"],
    slug: "gcp-cloud-migration",
    gradient: projectGradient("AI-Accelerated DevOps", 1),
    initials: projectInitials("GCP Migration"),
    badge: "0 downtime",
  },
  {
    id: "4",
    name: "e-commerce-platform",
    type: "AI Product Engineering",
    title: "E-Commerce Platform",
    description:
      "Full-stack commerce platform with AI-assisted search, recommendations, and inventory management. Ships with 90%+ test coverage.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "TypeScript"],
    slug: "e-commerce-platform",
    gradient: projectGradient("AI Product Engineering", 3),
    initials: projectInitials("E-Commerce Platform"),
    badge: "AI-assisted",
  },
  {
    id: "6",
    name: "multi-cloud-deployment",
    type: "AI-Accelerated DevOps",
    title: "Multi-Cloud Deployment",
    description:
      "Unified deployment pipeline across AWS, GCP, and Azure with automated failover, cost optimisation, and compliance guardrails.",
    technologies: ["Pulumi", "AWS", "GCP", "Azure", "ArgoCD"],
    slug: "multi-cloud-deployment",
    gradient: projectGradient("AI-Accelerated DevOps", 5),
    initials: projectInitials("Multi-Cloud"),
    badge: "3-cloud",
  },
];

export const STATIC_TESTIMONIALS: TestimonyCard[] = [
  {
    id: "1",
    name: "Sarah Chen",
    content:
      "B!R delivered a full preview system in six weeks — something we'd been trying to scope for a quarter. The AI-first approach was visible in the pace, and the quality bar held throughout.",
    service: "AI Product Engineering",
    position: "VP Engineering",
    company: "Stellar.io",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Reid",
    content:
      "Zero downtime on a live monolith migration. The Terraform they wrote was the cleanest IaC I'd reviewed in years. We didn't lose a single request.",
    service: "AI-Accelerated DevOps",
    position: "CTO",
    company: "QuantumLabs",
    rating: 5,
  },
  {
    id: "4",
    name: "Tom Wilder",
    content:
      "Senior team means senior output. Every decision was documented and defensible. The codebase they handed off was in better shape than when they started.",
    service: "AI Product Engineering",
    position: "Founder",
    company: "ByteForge",
    rating: 5,
  },
];

export const STATIC_CASE_STUDIES: Record<string, CaseStudy> = {
  "preview-system-design": {
    slug: "preview-system-design",
    title: "Preview System Design",
    tagline: "Per-PR cloud environments for web and mobile — zero setup for reviewers.",
    category: "AI Product Engineering",
    tags: ["GitHub Actions", "Docker", "IaC", "Expo OTA", "React"],
    heroColor: "#C25733",
    overview: {
      client: "Dev Platform",
      timeline: "6 weeks",
      team: "2 engineers",
      impact: "~0 min setup",
    },
    sections: [
      {
        id: "problem",
        label: "The Problem",
        headline: "Reviewing one PR meant rebuilding the whole stack locally.",
        body: "The barrier to looking at a change was higher than the change itself. 16 GB of RAM, 45 minutes of setup, and manual Expo builds before a reviewer could see anything.",
        visual: "list",
        items: [
          "16 GB RAM required just to run locally",
          "45-minute setup per reviewer, per PR",
          "Manual Expo builds for every QA cycle",
        ],
      },
      {
        id: "need",
        label: "The Need",
        headline: "Anyone opens one link and sees the change.",
        body: "Before any pipeline work, we fixed the bar: engineer, QA, or client — one URL, no local setup, isolated from every other open PR.",
        visual: "list",
        items: [
          "No local setup required for reviewers",
          "Web + mobile preview in one environment",
          "Shareable with external clients",
          "Isolated — no cross-PR contamination",
        ],
      },
      {
        id: "solution",
        label: "The Solution",
        headline: "AI-first pipeline: PR open → live environment in minutes.",
        body: "Opening a PR triggers GitHub Actions, which builds every app image, provisions infrastructure as code, seeds an isolated database, and posts the links straight back on the pull request.",
        visual: "diagram",
      },
      {
        id: "implementation",
        label: "The Implementation",
        headline: "Five pieces, all automated.",
        body: "Each stage is reproducible, idempotent, and torn down automatically when the PR closes.",
        visual: "icon",
        items: [
          "GitHub Actions triggered on PR open, sync, and close",
          "All app images built and pushed per PR",
          "Reproducible cloud resources defined as code",
          "Mobile preview via OTA — no full build cost",
          "Web + mobile links posted in a PR comment",
        ],
      },
      {
        id: "results",
        label: "The Results",
        headline: "Setup time eliminated. Review velocity tripled.",
        body: "The team went from multi-hour reviewer onboarding to instant previews.",
        visual: "stat",
        stats: [
          { value: "~0 min", label: "Setup time for reviewers" },
          { value: "100%", label: "Mobile testing accessible to QA" },
          { value: "none · OTA", label: "Full rebuilds per PR" },
        ],
      },
    ],
  },
  "gcp-cloud-migration": {
    slug: "gcp-cloud-migration",
    title: "GCP Cloud Migration",
    tagline: "Zero-downtime migration of a monolith to Google Cloud.",
    category: "AI-Accelerated DevOps",
    tags: ["Terraform", "GKE", "Cloud Build", "Helm", "Prometheus"],
    heroColor: "#4285F4",
    overview: {
      client: "SaaS Platform",
      timeline: "10 weeks",
      team: "3 engineers",
      impact: "0 downtime",
    },
    sections: [
      {
        id: "problem",
        label: "The Problem",
        headline: "A monolith outgrowing its infrastructure.",
        body: "Traffic had tripled in 18 months. The existing on-prem setup couldn't scale, costs were unpredictable, and deployments required manual coordination.",
        visual: "list",
        items: [
          "On-prem infrastructure at capacity",
          "Manual deployment process taking 4+ hours",
          "No horizontal scaling capability",
        ],
      },
      {
        id: "need",
        label: "The Need",
        headline: "Move to GCP without dropping a single request.",
        body: "The migration had to be live — no maintenance windows, no user-visible disruption. The destination had to be more elastic and cheaper to operate.",
        visual: "list",
        items: [
          "Zero-downtime cutover",
          "Reproducible infrastructure-as-code",
          "Automated deployment pipeline",
          "Full observability from day one",
        ],
      },
      {
        id: "solution",
        label: "The Solution",
        headline: "Parallel run, traffic shift, clean cutover.",
        body: "We ran old and new infrastructure in parallel, used AI to generate migration scripts from the existing schema, and shifted traffic incrementally using load-balancer weights.",
        visual: "diagram",
      },
      {
        id: "implementation",
        label: "The Implementation",
        headline: "IaC-first, automated end to end.",
        body: "Every resource defined in Terraform. AI-generated migration scripts validated against a shadow copy of production data before any traffic moved.",
        visual: "icon",
        items: [
          "Full GKE cluster defined in Terraform",
          "AI-generated SQL migration scripts, validated on shadow DB",
          "Cloud Build CI/CD pipeline replacing Jenkins",
          "Helm charts for every service",
          "Prometheus + Grafana observability stack",
        ],
      },
      {
        id: "results",
        label: "The Results",
        headline: "Live, on GCP, no incidents.",
        body: "The migration completed on schedule with no user-visible downtime.",
        visual: "stat",
        stats: [
          { value: "0", label: "Incidents during cutover" },
          { value: "60%", label: "Infrastructure cost reduction" },
          { value: "< 5 min", label: "Deployment time (was 4 hr)" },
        ],
      },
    ],
  },
  "e-commerce-platform": {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    tagline: "Full-stack commerce with AI-powered search and recommendations.",
    category: "AI Product Engineering",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis", "TypeScript"],
    heroColor: "#f43f5e",
    overview: {
      client: "Retail Brand",
      timeline: "12 weeks",
      team: "4 engineers",
      impact: "+35% conversion",
    },
    sections: [
      {
        id: "problem",
        label: "The Problem",
        headline: "A legacy platform blocking growth.",
        body: "The existing Shopify customisation had hit its limits. Search was keyword-only, recommendations were rule-based, and mobile performance was poor.",
        visual: "list",
        items: [
          "Keyword-only search missing intent",
          "Rule-based recommendations not personalising",
          "3.4s mobile page load (industry avg: 1.8s)",
        ],
      },
      {
        id: "need",
        label: "The Need",
        headline: "A custom platform, AI-native from day one.",
        body: "They needed full control over the stack, semantic search, and personalisation — without the six-month enterprise timeline.",
        visual: "list",
        items: [
          "Semantic search with vector embeddings",
          "Real-time personalised recommendations",
          "Sub-2s mobile performance",
          "Stripe-native checkout, no third-party cart",
        ],
      },
      {
        id: "solution",
        label: "The Solution",
        headline: "Next.js + pgvector + AI-generated product intelligence.",
        body: "We built semantic search on pgvector, a recommendation engine on purchase graph data, and an AI-assisted catalogue tool that auto-tags and enriches product listings.",
        visual: "diagram",
      },
      {
        id: "implementation",
        label: "The Implementation",
        headline: "Type-safe, end to end.",
        body: "AI wrote the first draft of every domain module. Senior engineers owned the architecture decisions and the quality bar.",
        visual: "icon",
        items: [
          "Next.js App Router with React Server Components",
          "pgvector for semantic product search",
          "Purchase-graph recommendation engine",
          "AI-assisted product enrichment pipeline",
          "Stripe Checkout with custom cart state",
        ],
      },
      {
        id: "results",
        label: "The Results",
        headline: "Faster site, better discovery, more revenue.",
        body: "Launched on schedule. Conversion rate up in the first month.",
        visual: "stat",
        stats: [
          { value: "+35%", label: "Conversion rate improvement" },
          { value: "1.4s", label: "Mobile page load (was 3.4s)" },
          { value: "90%+", label: "Test coverage at launch" },
        ],
      },
    ],
  },
  "multi-cloud-deployment": {
    slug: "multi-cloud-deployment",
    title: "Multi-Cloud Deployment",
    tagline: "Unified pipeline across AWS, GCP, and Azure with automated failover.",
    category: "AI-Accelerated DevOps",
    tags: ["Pulumi", "AWS", "GCP", "Azure", "ArgoCD"],
    heroColor: "#6366f1",
    overview: {
      client: "Enterprise SaaS",
      timeline: "16 weeks",
      team: "4 engineers",
      impact: "3 clouds, 1 pipeline",
    },
    sections: [
      {
        id: "problem",
        label: "The Problem",
        headline: "Three cloud vendors, three separate pipelines.",
        body: "Regulatory requirements mandated multi-cloud. The result was three separate deployment pipelines, three monitoring setups, and triple the operational overhead.",
        visual: "list",
        items: [
          "3 siloed CI/CD pipelines with no shared abstractions",
          "No automated failover between clouds",
          "Compliance audit took weeks per cloud",
        ],
      },
      {
        id: "need",
        label: "The Need",
        headline: "One pipeline, any cloud, automated failover.",
        body: "A single deployment abstraction that could target any of the three providers, with health-based traffic routing and compliance guardrails baked in.",
        visual: "list",
        items: [
          "Single pipeline definition, multi-cloud target",
          "Health-based automated failover",
          "Unified compliance reporting",
          "Cost visibility across all three clouds",
        ],
      },
      {
        id: "solution",
        label: "The Solution",
        headline: "Pulumi for IaC, ArgoCD for delivery, AI for drift detection.",
        body: "We unified all infrastructure in Pulumi with provider-agnostic abstractions, used ArgoCD for GitOps delivery, and added an AI-assisted drift detection layer.",
        visual: "diagram",
      },
      {
        id: "implementation",
        label: "The Implementation",
        headline: "GitOps-native, compliance-ready.",
        body: "Every infrastructure change is a Git commit. Compliance reports are generated automatically on every deploy.",
        visual: "icon",
        items: [
          "Pulumi with shared component library for all three clouds",
          "ArgoCD for GitOps delivery across clusters",
          "AI drift detection comparing desired vs. actual state",
          "Automated failover with health-check thresholds",
          "Unified cost dashboard across AWS, GCP, Azure",
        ],
      },
      {
        id: "results",
        label: "The Results",
        headline: "One pipeline. Three clouds. No manual ops.",
        body: "First automated failover triggered in week 3 of production and completed in under 90 seconds.",
        visual: "stat",
        stats: [
          { value: "< 90s", label: "Automated failover time" },
          { value: "1", label: "Pipeline for all three clouds" },
          { value: "−65%", label: "Ops overhead reduction" },
        ],
      },
    ],
  },
};
