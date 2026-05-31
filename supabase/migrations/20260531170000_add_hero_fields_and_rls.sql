-- Hero fields on case studies
ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS tagline TEXT;
ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS category TEXT;
ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';

-- Rich section content
ALTER TABLE case_study_sections ADD COLUMN IF NOT EXISTS items TEXT[] DEFAULT '{}';
ALTER TABLE case_study_sections ADD COLUMN IF NOT EXISTS stats JSONB;

-- Preview System Design hero + sections
UPDATE case_studies
SET
  title = 'Preview System Design',
  tagline = 'Per-PR cloud environments for web and mobile — zero setup for reviewers',
  category = 'DevOps Projects',
  tags = ARRAY['GitHub Actions', 'Docker', 'IaC', 'Expo OTA', 'CI/CD', 'Cloud']
WHERE slug = 'preview-system-design';

UPDATE case_study_sections css
SET items = ARRAY[
  'Needs 16GB RAM minimum to run locally',
  '30–45 min setup time per reviewer',
  'Manual Expo builds block mobile QA'
]
FROM case_studies cs
WHERE cs.problem_id = css.id AND cs.slug = 'preview-system-design';

UPDATE case_study_sections css
SET items = ARRAY[
  'No local setup required for reviewers',
  'Web + mobile preview in one environment',
  'Shareable with external clients',
  'Fits naturally into GitHub PR workflow',
  'Isolated — no cross-PR contamination'
]
FROM case_studies cs
WHERE cs.need_id = css.id AND cs.slug = 'preview-system-design';

UPDATE case_study_sections css
SET stats = '[
  {"value": "~0 min", "label": "Setup time for reviewers"},
  {"value": "100%", "label": "Mobile testing accessible to QA"},
  {"value": "OTA", "label": "No full rebuild needed per PR"}
]'::jsonb
FROM case_studies cs
WHERE cs.results_id = css.id AND cs.slug = 'preview-system-design';

-- Public read access for the marketing site
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonies ENABLE ROW LEVEL SECURITY;
ALTER TABLE general_informations ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_study_sections ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read projects" ON projects;
CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read testimonies" ON testimonies;
CREATE POLICY "Public read testimonies" ON testimonies FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read general_informations" ON general_informations;
CREATE POLICY "Public read general_informations" ON general_informations FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read case_studies" ON case_studies;
CREATE POLICY "Public read case_studies" ON case_studies FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read case_study_sections" ON case_study_sections;
CREATE POLICY "Public read case_study_sections" ON case_study_sections FOR SELECT USING (true);
