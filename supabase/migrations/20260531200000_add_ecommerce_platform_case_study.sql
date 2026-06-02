-- E-Commerce Platform case study + link to portfolio project

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
    'A legacy store that couldn''t keep up with growth',
    'Our client was running on a monolithic e-commerce stack with outdated UX, unreliable inventory sync, and no personalization. As traffic grew, checkout failures and stock discrepancies became daily problems.',
    ARRAY[
      'Monolithic architecture — slow releases and hard-to-scale bottlenecks',
      'Inventory out of sync across web and warehouse channels',
      'Clunky checkout flow causing cart abandonment',
      'No product recommendations — every shopper saw the same catalog'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    need_id,
    'A modern storefront built to convert and scale',
    'The client needed a platform that could handle growing traffic, keep inventory accurate in real time, and deliver a shopping experience that feels personal — from discovery through checkout.',
    ARRAY[
      'Fast, responsive storefront optimized for mobile and desktop',
      'Real-time inventory visibility across all sales channels',
      'Streamlined checkout with trusted payment integration',
      'AI-powered recommendations to increase average order value'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    solution_id,
    'Microservices architecture with AI at the core',
    'We designed and built a modern e-commerce platform — decomposing the monolith into focused Node.js services, a React storefront, PostgreSQL for transactional data, and an AI recommendation engine.',
    ARRAY[
      'React storefront — fast, accessible UI with server-driven product pages',
      'Node.js microservices — catalog, cart, orders, and inventory as independent services',
      'PostgreSQL — reliable transactional data with real-time stock tracking',
      'AI recommendations — behavior-based product suggestions at browse and checkout'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    implementation_id,
    'Delivered in phases with zero disruption to live sales',
    'We migrated the platform incrementally — launching the new storefront alongside legacy systems, then cutting over services one by one while the client''s team validated each release.',
    ARRAY[
      'Dockerized services deployed with CI/CD for independent release cycles',
      'Real-time inventory sync with event-driven updates across channels',
      'Payment gateway integration with retry logic and order confirmation flows',
      'Recommendation pipeline trained on browsing and purchase history'
    ],
    NULL
  );

  INSERT INTO case_study_sections (id, title, description, items, stats)
  VALUES (
    results_id,
    'Higher conversion, accurate stock, happier shoppers',
    'The new platform replaced a fragile monolith with a scalable foundation. Checkout is faster, inventory is trustworthy, and personalized recommendations drive repeat purchases.',
    NULL,
    '[
      {"value": "34%", "label": "Increase in conversion rate"},
      {"value": "99.9%", "label": "Inventory accuracy across channels"},
      {"value": "<2s", "label": "Average page load time"}
    ]'::jsonb
  );

  INSERT INTO case_studies (
    id, slug, team_staff, timeline, client, impact,
    problem_id, need_id, solution_id, implementation_id, results_id,
    title, tagline, category, tags, updated_at
  )
  VALUES (
    new_case_study_id,
    'e-commerce-platform',
    '2 Full-stack Engineers + 1 UI Designer',
    '14 weeks',
    'Retail Brand',
    'Scalable commerce with AI personalization',
    problem_id, need_id, solution_id, implementation_id, results_id,
    'E-Commerce Platform',
    'Modern e-commerce with microservices, real-time inventory, and AI-powered recommendations',
    'Design & Development',
    ARRAY['React', 'Node.js', 'PostgreSQL', 'Docker', 'Microservices', 'AI Recommendations'],
    now()
  );

  UPDATE projects
  SET
    case_study_id = new_case_study_id,
    updated_at = now()
  WHERE name = 'e-commerce-platform';
END $$;
