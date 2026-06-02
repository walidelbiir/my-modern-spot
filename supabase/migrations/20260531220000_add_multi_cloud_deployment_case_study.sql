-- Multi-Cloud Deployment case study + link to portfolio project

DO $$
DECLARE
  problem_id UUID := gen_random_uuid();
  need_id UUID := gen_random_uuid();
  solution_id UUID := gen_random_uuid();
  implementation_id UUID := gen_random_uuid();
  results_id UUID := gen_random_uuid();
  new_case_study_id UUID := gen_random_uuid();
BEGIN
  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    problem_id,
    'A single cloud created a single point of failure',
    'Our client ran entirely on one cloud provider in one region. Vendor lock-in, opaque costs, and no failover path meant any outage or regional issue could take the entire platform offline.',
    ARRAY[
      'Vendor lock-in — workloads tightly coupled to one cloud provider''s services',
      'No automated failover — regional outages caused full platform downtime',
      'Unpredictable cloud costs with no cross-provider optimization',
      'Geographic limitations blocking expansion into new markets'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    need_id,
    'Resilience, visibility, and cost control across clouds',
    'The client needed a multi-cloud strategy that would keep services running through regional failures, provide unified monitoring across providers, and optimize spend without sacrificing performance.',
    ARRAY[
      'Automated failover between cloud providers with minimal downtime',
      'Kubernetes-native workloads portable across AWS and Azure',
      'Unified monitoring and alerting across all cloud environments',
      'Cost optimization with visibility into spend per provider and service'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    solution_id,
    'Kubernetes orchestration across AWS and Azure',
    'We designed a multi-cloud deployment architecture — Docker containers on Kubernetes clusters in both AWS and Azure, with automated traffic routing, health-based failover, and centralized observability.',
    ARRAY[
      'Kubernetes — cloud-agnostic orchestration for all application workloads',
      'AWS — primary region for compute, storage, and high-traffic services',
      'Azure — secondary region for failover, DR, and EU data residency',
      'Docker — consistent container images deployed identically on both clouds'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    implementation_id,
    'Built and tested failover before going live',
    'We provisioned both cloud environments via infrastructure-as-code, deployed workloads to both clusters, and ran controlled failover drills — ensuring the client''s team could operate and maintain the multi-cloud setup independently.',
    ARRAY[
      'IaC provisioning of identical K8s clusters on AWS and Azure',
      'DNS-based traffic routing with health checks and automatic failover',
      'Prometheus and Grafana dashboards for cross-cloud observability',
      'Cost allocation tags and monthly optimization reviews per cloud provider'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    results_id,
    'Resilient infrastructure with lower costs',
    'The platform now survives regional outages with automated failover. Operations has a single pane of glass across both clouds, and optimized resource allocation reduced overall cloud spend.',
    NULL,
    '[
      {"value": "99.99%", "label": "Platform uptime achieved"},
      {"value": "<30s", "label": "Automated failover time"},
      {"value": "28%", "label": "Cloud cost reduction"}
    ]'::jsonb
  );

  INSERT INTO case_studies (
    id, slug, team_staff, timeline, client, impact,
    problem_id, need_id, solution_id, implementation_id, results_id,
    title, tagline, category, tags, updated_at
  )
  VALUES (
    new_case_study_id,
    'multi-cloud-deployment',
    '2 DevOps Engineers + 1 Cloud Architect',
    '12 weeks',
    'SaaS Platform Team',
    'Multi-cloud resilience with cost optimization',
    problem_id, need_id, solution_id, implementation_id, results_id,
    'Multi-Cloud Deployment',
    'Scalable multi-cloud strategy with automated failover, monitoring, and cost optimization',
    'DevOps Projects',
    ARRAY['Docker', 'Kubernetes', 'AWS', 'Azure', 'IaC', 'Failover'],
    now()
  );

  UPDATE projects
  SET
    case_study_id = new_case_study_id,
    updated_at = now()
  WHERE name = 'multi-cloud-deployment';
END $$;
