// ─── Edit this file to update site content — no component changes needed ───

export const profile = {
  name: 'Thisara Dhammika Eranga',
  shortName: 'Thisara Eranga',
  title: 'Sr. Product Owner | Product Manager',
  tagline: 'A Product Owner who ships code — and AI agents.',
  location: 'Atlanta, Georgia',
  email: 'thisara.dhammikaeranga@gmail.com',
  phone: '(320) 316-6458',
  github: 'https://github.com/Thisara-DE',
  linkedin: 'https://www.linkedin.com/in/thisaradh/',
  resume: 'Resume_Thisara.pdf',
  // Formspree form — https://formspree.io/f/mlgyobeq
  formspreeId: 'mlgyobeq',
  // GoatCounter analytics (free, privacy-friendly) — sign up at goatcounter.com,
  // pick a site code (e.g. "thisara-de"), and paste it here. Empty = analytics off.
  goatcounterCode: 'thisara-de',
  summary: [
    'Senior Product Owner with 11+ years turning complex, regulated systems into products teams can ship — core loan accounting, payments, fraud, and data platforms at banks including AgFirst, US Bank, and Capital One. I lead Agile/SAFe teams, own roadmaps end to end, and keep delivery tied to business outcomes.',
    'What sets me apart: I speak both languages. As a certified full-stack developer (React, Node.js, REST/GraphQL APIs), I work with engineers at the technical level — reviewing API designs in Swagger, testing endpoints in Postman, and writing requirements developers can build without ambiguity.',
    'Today I build with AI, not just about it. Certified in Building Agentic AI Applications and Beyond Vibe Coding: Engineering Production-Grade AI Code, I ship RAG systems, multi-agent workflows, and a Claude-vision app — using AI coding agents with the guardrails real products need: tests, CI/CD, code review, and security gates. That is the judgment I bring to leading AI product initiatives.',
  ],
};

export const stats = [
  { value: '11+', label: 'Years in Product & BA roles' },
  { value: '4', label: 'Banks where I’ve owned delivery — AgFirst, US Bank, Capital One, Standard Chartered' },
  { value: '7', label: 'AI projects shipped — RAG, multi-agent systems, a Claude-vision app' },
  { value: 'SAFe', label: 'Certified PO/PM & Scrum Master' },
];

export const experience = [
  {
    company: 'AgFirst Farm Credit Bank',
    role: 'Product Owner',
    period: 'Nov 2020 – Present',
    domain: 'Enterprise Banking · Loan Accounting Systems',
    highlights: [
      'Own roadmaps and backlogs for the DNA Service Layer, DNA Extract, and ACBS/CLS platforms — sequencing upgrades and maintenance releases alongside bank-wide initiatives (IRS reporting, disaster recovery, nCino/Salesforce, DNA upgrades).',
      'Led the Fiserv DNA data conversion team, moving loan accounting data off legacy mainframe systems onto Fiserv DNA — owning the backlog, definition of done, and acceptance criteria, and driving mock-conversion milestones with business stakeholders.',
      'Optimized IRS data transfer through "IRSConnect," a UI-, API-, and service-based application — eliminating manual upload of 500+ files to the vendor system and drastically reducing effort and risk of error.',
      'Drove design-first RESTful API development for account maintenance, payments, and loan booking — including RabbitMQ event messaging — to power the bank’s nCino/Salesforce implementation, and gave downstream API consumers an Azure DevOps dashboard to track deployments and report issues.',
      'Led the team’s Agile Scrum adoption: trained 15 staff, established ceremonies and backlog practices, and mentored onshore/offshore analysts on test automation and ETL.',
    ],
  },
  {
    company: 'US Bank',
    role: 'RPA Business Analyst',
    period: 'Sept 2020 – Nov 2020',
    domain: 'Corporate Payments Automation',
    highlights: [
      'Redesigned a fully automated corporate payment process (CRPS/CPMS) using Automation Anywhere; facilitated PI events in a SAFe environment.',
    ],
  },
  {
    company: 'Capital One Bank',
    role: 'Product Owner / RPA Business Systems Analyst',
    period: 'Jan 2018 – July 2020',
    domain: 'Fraud Analysis & Automation',
    highlights: [
      'Facilitated the enhancement and redesign of the legacy fraud analysis system with backend web services and APIs, increasing fraud-analysis efficacy with richer customer online-activity data.',
      'Served as system subject-matter expert and primary point of contact for IT functions under SAFe/Scrum.',
    ],
  },
  {
    company: 'Whirlpool Corporation',
    role: 'Business Analyst / Scrum Master',
    period: 'Sept 2016 – Dec 2017',
    domain: 'Cloud Data Warehouse Migration',
    highlights: [
      'Spearheaded a centralized cloud data storage system for sales and logistics; drove process design changes through business and systems analysis.',
    ],
  },
  {
    company: 'HCSC – Blue Cross Blue Shield',
    role: 'Business Analyst',
    period: 'May 2015 – Aug 2016',
    domain: 'Patient Information Portal',
    highlights: [
      'Directed the redesign of a legacy patient-management portal, digitizing medical records and integrating insurance services, claims, and appeals; led SME interviews to improve UX.',
    ],
  },
  {
    company: 'Standard Chartered Bank',
    role: 'Business Analyst',
    period: 'May 2013 – July 2014',
    domain: 'Loan Origination System',
    highlights: [
      'Built the Power-Loaner (PoLo) system automating loan modification for one of the region’s largest international banks.',
    ],
  },
];

export const skills = [
  {
    group: 'AI & Agentic Systems',
    items: ['Generative AI', 'LLM APIs (Claude, OpenAI)', 'Vision LLMs', 'RAG', 'RAG Evaluation', 'Vector DBs (ChromaDB, Pinecone)', 'LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Tool Calling', 'Model Context Protocol (MCP)', 'Prompt Engineering', 'n8n', 'Responsible AI'],
  },
  {
    group: 'AI-Assisted Engineering',
    items: ['Claude Code', 'Spec-Driven Development', 'AI Code Review', 'Automated Testing (Playwright, pytest)', 'GitHub Actions CI/CD', 'Docker', 'Security Gates'],
  },
  {
    group: 'Product & Agile',
    items: ['SAFe', 'Scrum', 'Kanban', 'Backlog Management', 'Product Roadmapping', 'MVP Definition', 'Stakeholder Management', 'Agile Coaching', 'User Stories & Acceptance Criteria'],
  },
  {
    group: 'Development',
    items: ['Python', 'FastAPI', 'TypeScript', 'JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'REST APIs', 'GraphQL', 'MySQL', 'MongoDB', 'Git'],
  },
  {
    group: 'Tools & Platforms',
    items: ['Azure DevOps', 'JIRA', 'Confluence', 'Postman', 'Swagger', 'ServiceNow', 'Visio', 'Balsamiq', 'VersionOne'],
  },
  {
    group: 'Data & BI',
    items: ['SQL', 'Power BI', 'Tableau', 'OLTP/OLAP', 'Data Marts', 'Informatica', 'Talend', 'Crystal Reports'],
  },
  {
    group: 'Automation & Testing',
    items: ['UiPath', 'Automation Anywhere', 'Selenium', 'Cucumber', 'Jest', 'Insomnia', 'TDD/BDD'],
  },
];

export const certifications = [
  { name: 'Beyond Vibe Coding: Engineering Production-Grade AI Code', org: 'Codecademy', id: '6ABEACB55E' },
  { name: 'Building Agentic AI Applications', org: 'Codecademy', id: '69B0227DEF' },
  { name: 'AI Fundamentals', org: 'Google · Coursera', id: 'OUBYB5JL3Y64' },
  { name: 'SAFe Product Owner / Product Manager', org: 'Scaled Agile', id: '548677176542' },
  { name: 'Certified Scrum Master', org: 'Scrum Alliance' },
  { name: 'Full-Stack Web Development', org: 'University of Minnesota' },
  { name: 'RPA Business Analyst', org: 'UiPath' },
  { name: 'RPA Business Analyst', org: 'Automation Anywhere' },
];

export const education = [
  { degree: 'MSc in Information Assurance', school: 'St. Cloud State University, MN (USA)' },
  { degree: 'Bachelor of Business Management in Marketing', school: 'University of Kelaniya (Sri Lanka)' },
];

// import.meta.glob keeps images working after the Vite build
const covers = import.meta.glob('./assets/projects/*.{png,svg}', { eager: true, import: 'default' });
const cover = (f) => covers[`./assets/projects/${f}`];

export const projects = [
  {
    name: 'NASA Space Science RAG Chatbot',
    badge: 'Agentic AI',
    description:
      'Production RAG chatbot over NASA space-science articles: automated web scraping, ChromaDB vector indexing, hybrid semantic + keyword retrieval, synthetic Q&A generation, and Groq-powered answers with source attribution — deployed live on Streamlit.',
    github: 'https://github.com/Thisara-DE/NASA_Space_Science_RAG_Chatbot',
    live: 'https://nasaragchatbot.streamlit.app/',
    img: cover('ai-nasa.svg'),
    tech: ['Python', 'RAG', 'ChromaDB', 'Groq LLM', 'Streamlit'],
  },
  {
    name: 'SaReGaMaPic',
    badge: 'AI Vision · Full-stack PWA',
    description:
      'Turns photos of handwritten sargam music sheets into faithful digital notation with Claude vision, then puts a human in the loop: a side-by-side correction editor, misread warnings, and transposition across all 12 keys. Google sign-in, per-user data isolation, recognition-accuracy metrics, and a CI/CD pipeline from Dev → UAT → Production.',
    github: 'https://github.com/Thisara-DE/saregamaPIC',
    img: cover('ai-saregama.svg'),
    tech: ['Claude Vision', 'FastAPI', 'React + TypeScript', 'Docker', 'GitHub Actions'],
  },
  {
    name: 'JARVIS — AI Assistant Agent',
    badge: 'Agentic AI · n8n',
    description:
      'Single-agent workflow in n8n: a supervisor agent with conversation memory and an OpenAI chat model that autonomously calls live tools — weather lookup, YouTube search, news search, and forex rates — to answer user requests.',
    github: 'https://github.com/Thisara-DE/n8n-JARVIS-single_agent_workflow',
    img: cover('ai-jarvis.svg'),
    tech: ['n8n', 'OpenAI', 'Agent Tools', 'HTTP APIs'],
  },
  {
    name: 'RAG Pipeline & Chatbot (n8n)',
    badge: 'Agentic AI · n8n',
    description:
      'End-to-end RAG workflow in n8n: form-triggered document ingestion through OpenAI and HuggingFace embeddings into a Pinecone vector store, queried by a chat agent with conversation memory for grounded answers.',
    github: 'https://github.com/Thisara-DE/n8n-RAG_workflow_HF_Pinecone',
    img: cover('ai-n8n-rag.svg'),
    tech: ['n8n', 'Pinecone', 'HuggingFace', 'OpenAI', 'RAG'],
  },
  {
    name: 'Multi-Agent Research Crew',
    badge: 'Agentic AI · Certification build',
    description:
      'Collaborating AI agents — researcher, analyst, writer — coordinated with CrewAI to autonomously produce research reports, with role design, task delegation, and tool use. Built during the Codecademy Agentic AI certification.',
    img: cover('ai-crew.svg'),
    tech: ['Python', 'CrewAI', 'LLMs', 'Agent Orchestration'],
  },
  {
    name: 'Agentic Workflow Orchestrator',
    badge: 'Agentic AI · Certification build',
    description:
      'Stateful agent graph built with LangGraph — planning, tool-calling, and reflection loops with conditional branching, plus a no-code workflow variant of the same pattern. Built during the Codecademy Agentic AI certification.',
    img: cover('ai-graph.svg'),
    tech: ['Python', 'LangGraph', 'Tool Calling', 'No-code Workflows'],
  },
  {
    name: 'dateLime',
    badge: '2026 Rebuild · PWA',
    description:
      'Dinner-and-a-movie planner, rebuilt from my 2022 bootcamp app: an audit logged 44 defects, then a ground-up rewrite fixed every one, each guarded by a regression test. Mood-based movie picks, cuisine pairing, a shareable "Admit Two" ticket, optional Google/email accounts, and offline support.',
    github: 'https://github.com/Thisara-DE/dateLime',
    live: 'https://thisara-de.github.io/dateLime/',
    img: cover('datelime.svg'),
    tech: ['JavaScript (ES modules)', 'Firebase', 'Playwright', 'TMDB API', 'PWA'],
  },
  {
    name: "Tic-Tac-Toe on Rubik's",
    badge: 'AI · 3D Game',
    description:
      "Browser game fusing Tic-Tac-Toe with a fully rotatable 3D Rubik's cube — place a mark, and your opponent must twist the layer it sits on. Includes a three-difficulty AI opponent using adversarial 1-ply minimax. Zero dependencies, playable live.",
    github: 'https://github.com/Thisara-DE/Tic-Tac-Toe-on-Rubiks',
    live: 'https://thisara-de.github.io/Tic-Tac-Toe-on-Rubiks/',
    img: cover('rubiks.svg'),
    tech: ['Three.js', 'JavaScript', 'Minimax AI', 'WebGL'],
  },
  {
    name: 'Perspective News',
    description: 'Full-stack news platform that surfaces multiple perspectives on the same story.',
    github: 'https://github.com/ItzGuled/perspective-news',
    img: cover('6.png'),
    tech: ['React', 'Node.js', 'Express', 'GraphQL'],
  },
  {
    name: 'Deep Thoughts',
    description: 'Social platform for sharing thoughts, with JWT auth and a GraphQL API.',
    github: 'https://github.com/Thisara-DE/deep-thoughts',
    img: cover('5.png'),
    tech: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Gameporium',
    description: 'E-commerce storefront for games built on the MVC pattern with session auth.',
    github: 'https://github.com/Thisara-DE/Gameporium',
    img: cover('4.png'),
    tech: ['Handlebars', 'MySQL', 'Sequelize', 'Express'],
  },
  {
    name: 'Tech Chronicle',
    description: 'CMS-style tech blog where developers publish posts and comment.',
    github: 'https://github.com/Thisara-DE/tech-chronicle',
    img: cover('3.png'),
    tech: ['Handlebars', 'Node.js', 'MySQL', 'Sequelize'],
  },
  {
    name: 'Employee CMS',
    description: 'Command-line content management system for employee records.',
    github: 'https://github.com/Thisara-DE/employee-tracker',
    img: cover('1.png'),
    tech: ['Node.js', 'Inquirer', 'MySQL'],
  },
];
