-- Financial Analytics Dashboard case study + link to portfolio project

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
    'Financial data was scattered and reports took days to compile',
    'Our client''s finance team relied on disconnected spreadsheets, legacy exports, and manual reconciliation. Leadership lacked a single source of truth — and every reporting cycle became a bottleneck.',
    ARRAY[
      'Data fragmented across spreadsheets, CRM exports, and legacy databases',
      'Analysts spent days manually compiling weekly and monthly reports',
      'No predictive capability — decisions driven by lagging indicators only',
      'Executives had no real-time view of portfolio performance or risk'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    need_id,
    'A unified analytics platform with intelligence built in',
    'The client needed a single platform that would give analysts and leadership live visibility into financial performance — with automated reporting and predictive models to support faster, data-driven decisions.',
    ARRAY[
      'Real-time dashboards replacing static spreadsheet workflows',
      'Automated report generation to free analyst capacity',
      'Predictive models for revenue forecasting and risk signals',
      'Natural language insights so non-technical stakeholders can ask questions'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    solution_id,
    'An AI-powered analytics stack from ingestion to insight',
    'We designed and built a full-stack financial analytics platform — unifying data pipelines, TensorFlow predictive models, interactive React dashboards, and an AI agent for on-demand insights.',
    ARRAY[
      'FastAPI backend — high-performance APIs for aggregation and model serving',
      'TensorFlow models — revenue forecasting, anomaly detection, and risk scoring',
      'React dashboards — role-based views with live charts and drill-downs',
      'AI insight agent — natural language queries over financial metrics'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    implementation_id,
    'Built in phases with the client team embedded throughout',
    'We delivered the platform incrementally — starting with data unification, then models, then dashboards, and finally AI automation — so the client could validate each layer before moving forward.',
    ARRAY[
      'Multi-source data pipelines with validation and scheduled refresh',
      'ML training pipeline with backtesting and scheduled model retraining',
      'Executive and analyst dashboard views with granular access controls',
      'Automated PDF and email report delivery on configurable schedules'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    results_id,
    'Faster decisions, smarter forecasts, less manual work',
    'The platform replaced days of manual reporting with live dashboards and automated delivery. Leadership now acts on predictive signals instead of waiting for end-of-month summaries.',
    NULL,
    '[
      {"value": "85%", "label": "Reduction in report prep time"},
      {"value": "Real-time", "label": "Data refresh across dashboards"},
      {"value": "3", "label": "Predictive models in production"}
    ]'::jsonb
  );

  INSERT INTO case_studies (
    id, slug, team_staff, timeline, client, impact,
    problem_id, need_id, solution_id, implementation_id, results_id,
    title, tagline, category, tags, updated_at
  )
  VALUES (
    new_case_study_id,
    'financial-analytics-dashboard',
    '2 Full-stack Engineers + 1 Data Engineer',
    '10 weeks',
    'FinTech Investment Team',
    'Real-time financial intelligence at scale',
    problem_id, need_id, solution_id, implementation_id, results_id,
    'Financial Analytics Dashboard',
    'AI-powered analytics with predictive modeling, automated reporting, and intelligent insights',
    'AI Agents Integration',
    ARRAY['Python', 'TensorFlow', 'React', 'FastAPI', 'Predictive Analytics', 'Real-time Data'],
    now()
  );

  UPDATE projects
  SET
    case_study_id = new_case_study_id,
    updated_at = now()
  WHERE name = 'financial-analytics-dashboard';
END $$;
