-- Smart Manufacturing IoT case study + link to portfolio project

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
    'Manufacturing ran blind until something broke',
    'Our client operated multiple production lines with no unified view of machine health. Maintenance was reactive, quality checks were manual, and sensor data sat in silos — leading to costly unplanned downtime.',
    ARRAY[
      'Unplanned downtime from equipment failures with no early warning',
      'Reactive maintenance — fix-on-fail instead of scheduled prevention',
      'Manual quality inspections missing defects until late in production',
      'Sensor data scattered across systems with no central analytics layer'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    need_id,
    'Predictive operations powered by IoT and AI',
    'The client needed a connected factory platform — real-time visibility into every production line, AI-driven maintenance scheduling, and automated quality control that catches issues before they become failures.',
    ARRAY[
      'Real-time monitoring of machine health across all production lines',
      'Predictive maintenance to reduce unplanned downtime',
      'Automated quality control with ML-based defect detection',
      'AI agents that act on sensor data and recommend interventions'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    solution_id,
    'An IoT platform with AI agents at the edge and in the cloud',
    'We built a smart manufacturing system — IoT sensors streaming to InfluxDB, Python ML models for anomaly detection, and AI agents that orchestrate maintenance and quality workflows autonomously.',
    ARRAY[
      'IoT sensor network — vibration, temperature, and pressure on every critical asset',
      'InfluxDB — high-throughput time-series storage for sensor telemetry',
      'ML models — failure prediction and quality anomaly detection in Python',
      'AI agents — autonomous maintenance scheduling and QC alert routing'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    implementation_id,
    'Deployed line by line without disrupting production',
    'We rolled out the platform incrementally — starting with one production line as a pilot, validating models against historical data, then expanding across the factory floor with the client''s operations team embedded throughout.',
    ARRAY[
      'Edge gateways collecting and buffering sensor data with failover',
      'Real-time dashboards with line-level health scores and trend charts',
      'Alert routing to maintenance teams via configurable thresholds and AI triggers',
      'Model retraining pipeline on new failure events to improve accuracy over time'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    results_id,
    'Less downtime, fewer defects, smarter operations',
    'The platform shifted the factory from reactive to predictive. Maintenance is scheduled before failures occur, quality issues are caught early, and operations leadership has live visibility across every line.',
    NULL,
    '[
      {"value": "47%", "label": "Reduction in unplanned downtime"},
      {"value": "62%", "label": "Defects caught before final QC"},
      {"value": "42", "label": "IoT sensors deployed across lines"}
    ]'::jsonb
  );

  INSERT INTO case_studies (
    id, slug, team_staff, timeline, client, impact,
    problem_id, need_id, solution_id, implementation_id, results_id,
    title, tagline, category, tags, updated_at
  )
  VALUES (
    new_case_study_id,
    'smart-manufacturing-iot',
    '2 IoT Engineers + 1 ML Engineer',
    '16 weeks',
    'Manufacturing Client',
    'Predictive factory operations at scale',
    problem_id, need_id, solution_id, implementation_id, results_id,
    'Smart Manufacturing IoT',
    'IoT-enabled manufacturing optimization with AI agents for predictive maintenance and quality control',
    'AI Agents Integration',
    ARRAY['Python', 'IoT', 'ML', 'InfluxDB', 'Predictive Maintenance', 'AI Agents'],
    now()
  );

  UPDATE projects
  SET
    case_study_id = new_case_study_id,
    updated_at = now()
  WHERE name = 'smart-manufacturing-iot';
END $$;
