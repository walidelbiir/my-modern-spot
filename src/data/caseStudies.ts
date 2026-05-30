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
  category: "DevOps Projects" | "Design & Development" | "AI Agents Integration";
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

export const caseStudies: CaseStudy[] = [
  {
    slug: "preview-system-design",
    title: "Preview System Design",
    tagline:
      "Per-PR cloud environments for web and mobile — zero setup for reviewers",
    category: "DevOps Projects",
    tags: ["GitHub Actions", "Docker", "IaC", "Expo OTA", "CI/CD", "Cloud"],
    heroColor: "#0ea5e9",
    overview: {
      client: "SaaS Product Team",
      timeline: "6 weeks",
      team: "1 DevOps Engineer",
      impact: "0 min reviewer setup time",
    },
    sections: [
      {
        id: "problem",
        label: "The Problem",
        headline: "Every code review required a full local setup",
        body: "Testing new features meant every reviewer — manager, QA, or fellow developer — had to manually check out the branch, install all dependencies, and spin up the full application stack locally. This demanded powerful hardware, consumed hours, and created a steep barrier to collaboration. On mobile, the situation was worse: issuing an Expo test build manually, then distributing it across the team, turned every QA cycle into a coordination bottleneck.",
        visual: "list",
        items: [
          "Needs 16GB RAM minimum to run locally",
          "30–45 min setup time per reviewer",
          "Manual Expo builds block mobile QA",
        ],
      },
      {
        id: "need",
        label: "The Need",
        headline: "One link. Instant preview. Web and mobile.",
        body: "The team needed a system that would make any PR instantly testable by anyone — without a local environment. It had to cover both web applications and mobile apps, be shareable with external clients as a live status update, and integrate naturally into the existing code review workflow. Zero friction, zero setup, zero hardware requirements for the reviewer.",
        visual: "list",
        items: [
          "No local setup required for reviewers",
          "Web + mobile preview in one environment",
          "Shareable with external clients",
          "Fits naturally into GitHub PR workflow",
          "Isolated — no cross-PR contamination",
        ],
      },
      {
        id: "solution",
        label: "The Solution",
        headline: "Per-PR preview environments, fully automated",
        body: "We built a comprehensive CI/CD pipeline on top of GitHub Actions that automatically provisions a fully isolated cloud environment for every qualifying pull request — web apps, mobile OTA update, and a dedicated seeded database included. One PR = one complete, shareable, production-like environment.",
        visual: "diagram",
      },
      {
        id: "implementation",
        label: "The Implementation",
        headline: "GitHub Actions + IaC + OTA — stitched into one pipeline",
        body: "The system builds on the client's existing GitHub Actions setup, extending it with infrastructure automation, container orchestration, database seeding, and Expo OTA updates.",
        visual: "icon",
      },
      {
        id: "results",
        label: "The Results",
        headline: "Every PR now has its own live environment in minutes",
        body: "",
        visual: "stat",
        stats: [
          { value: "~0 min", label: "Setup time for reviewers" },
          { value: "100%", label: "Mobile testing accessible to QA" },
          { value: "OTA", label: "No full rebuild needed per PR" },
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

// Slug map for existing portfolio cards
export const portfolioSlugMap: Record<string, string> = {
  "E-Commerce Platform": "e-commerce-platform",
  "Financial Analytics Dashboard": "financial-analytics-dashboard",
  "Cloud Infrastructure Migration": "preview-system-design",
  "Healthcare Management System": "healthcare-management-system",
  "Smart Manufacturing IoT": "smart-manufacturing-iot",
  "Multi-Cloud Deployment": "multi-cloud-deployment",
};
