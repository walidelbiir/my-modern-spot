-- GCP Cloud Migration case study + replace Healthcare project card

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
    'Over-reliance on DigitalOcean created operational drag',
    'Our client was too dependent on DigitalOcean, which created compounding problems across their engineering organization — slowing delivery and limiting their ability to scale.',
    ARRAY[
      'Cloud ecosystem was weak — limited managed services and integrations',
      'Engineers were not familiar with this cloud provider, slowing onboarding',
      'Compliance issues and data privacy law constraints blocked expansion'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    need_id,
    'Unlock team velocity with the right cloud foundation',
    'The client needed a new cloud provider to unlock the velocity their team required. The existing ecosystem made developing new features more costly and slower than it should be.',
    ARRAY[
      'Faster feature delivery without infrastructure friction',
      'Stronger cloud ecosystem and first-class tooling',
      'Compliance-ready infrastructure for regulated markets',
      'Engineer familiarity and a broader hiring pool'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    solution_id,
    'GCP chosen through rigorous multi-criteria evaluation',
    'We assisted our client in choosing a new cloud provider based on their needs and future scalability — Google Cloud Platform — weighing dynamic variables across dev experience, ecosystem depth, actual needs, and multi-cloud adaptability.',
    ARRAY[
      'Dev Experience — strong SDKs, CLI, and local emulation tooling',
      'Cloud Ecosystem — rich managed services, marketplace, and observability',
      'Scalability — room to grow workloads without replatforming',
      'Multi-Cloud Adaptability — portable architecture patterns and open standards'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    implementation_id,
    'Meticulous zero-downtime migration with client ownership',
    'Our team crafted a meticulous migration plan to move services and databases with zero downtime. Client team involvement was built in from day one — ensuring rapid recovery capability and full ownership of ongoing maintenance.',
    ARRAY[
      'Gradual migration with phased workload cutover and validation gates',
      'Blue-green deployment strategy for risk-free traffic switching',
      'Database replication with tested cutover windows and rollback paths',
      'CI/CD chains rebuilt step-by-step to support migration and long-term ops'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    results_id,
    'Smooth migration, robust new platform',
    'The migration completed without operational risk to end users. The client now runs on GCP with a modern CI/CD foundation and a team fully equipped to maintain it.',
    NULL,
    '[
      {"value": "0", "label": "Downtime for end users"},
      {"value": "100%", "label": "Database integrity preserved"},
      {"value": "12 wks", "label": "Full migration timeline"}
    ]'::jsonb
  );

  INSERT INTO case_studies (
    id, slug, team_staff, timeline, client, impact,
    problem_id, need_id, solution_id, implementation_id, results_id,
    title, tagline, category, tags, updated_at
  )
  VALUES (
    new_case_study_id,
    'gcp-cloud-migration',
    '2 DevOps Engineers + Client SRE',
    '12 weeks',
    'SaaS Product Team',
    'Zero-downtime cloud migration',
    problem_id, need_id, solution_id, implementation_id, results_id,
    'Cloud & Database Migration',
    'Zero-downtime migration from DigitalOcean to Google Cloud Platform',
    'DevOps Projects',
    ARRAY['GCP', 'Cloud SQL', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Blue-Green'],
    now()
  );

  UPDATE projects
  SET
    name = 'gcp-cloud-migration',
    title = 'Cloud & Database Migration',
    description = 'Zero-downtime migration from DigitalOcean to GCP — services, databases, and CI/CD rebuilt for scale and compliance.',
    technologies = ARRAY['GCP', 'Cloud SQL', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Blue-Green'],
    case_study_id = new_case_study_id,
    updated_at = now()
  WHERE name = 'healthcare-management-system';
END $$;
