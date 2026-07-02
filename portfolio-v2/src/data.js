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
  summary: [
    'Strategic Product Owner and Product Manager with 11+ years of experience driving digital transformation and full lifecycle product delivery in enterprise banking environments. Proven success leading Agile teams, implementing SAFe frameworks, and aligning product roadmaps with business goals.',
    'What sets me apart: I speak both languages. As a certified full-stack developer (React, Node.js, REST/GraphQL APIs), I collaborate with engineering teams at the technical level — reviewing API designs in Swagger, testing endpoints in Postman, and translating business requirements into designs developers can build without ambiguity.',
    'Most recently I completed a certification in Building Agentic AI Applications, going hands-on with LLMs, RAG pipelines and their evaluation, and multi-agent systems built with LangChain, CrewAI, and LangGraph — so I can lead AI product initiatives with the same technical fluency I bring to APIs.',
  ],
};

export const stats = [
  { value: '11+', label: 'Years in Product & BA roles' },
  { value: '6', label: 'AI projects shipped — live RAG chatbot, multi-agent systems, n8n workflows' },
  { value: 'SAFe', label: 'Certified PO/PM & Scrum Master' },
  { value: '500+', label: 'Manual file uploads eliminated via one API build' },
];

export const experience = [
  {
    company: 'AgFirst Farm Credit Bank',
    role: 'Product Owner',
    period: 'Nov 2020 – Present',
    domain: 'Enterprise Banking · Loan Accounting Systems',
    highlights: [
      'Own product backlogs for the DNA Service Layer, DNA Extract, and ACBS/CLS platforms — delivering cumulative upgrades, maintenance releases, and bank-wide projects (IRS reporting, disaster recovery, nCino/Salesforce integration).',
      'Optimized IRS data transfer by shipping "IRSConnect" — a UI + API solution that completely eliminated manual upload of 500+ files to the vendor system.',
      'Led the Fiserv DNA data conversion team, migrating loan accounting data from legacy mainframe systems to Fiserv DNA for the bank and its associations.',
      'Drove RESTful API development for account maintenance, payments, and loan booking — including event messaging via RabbitMQ for the nCino/Salesforce implementation.',
      'Spearheaded Agile Scrum adoption: trained 15 staff, established Scrum ceremonies and backlog practices, and implemented a design-first methodology that accelerated quality delivery.',
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
    items: ['Generative AI', 'LLMs', 'NLP', 'RAG', 'RAG Evaluation', 'LangChain', 'LangGraph', 'CrewAI', 'Agent Orchestration', 'Prompt Engineering', 'n8n', 'No-code Agent Workflows'],
  },
  {
    group: 'Product & Agile',
    items: ['SAFe', 'Scrum', 'Kanban', 'Backlog Management', 'Product Roadmapping', 'MVP Definition', 'Stakeholder Management', 'Agile Coaching', 'User Stories & Acceptance Criteria'],
  },
  {
    group: 'Development',
    items: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'REST APIs', 'GraphQL', 'MySQL', 'MongoDB', 'HTML/CSS', 'Git'],
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
  { name: 'Building Agentic AI Applications', org: 'Codecademy' , id: '69B0227DEF'},
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
    name: 'dateLime',
    description: 'Date-night planner combining restaurant and event APIs into one itinerary.',
    github: 'https://github.com/Thisara-DE/dateLime',
    live: 'https://thisara-de.github.io/dateLime/',
    img: cover('2.png'),
    tech: ['JavaScript', 'Bulma', 'Third-party APIs'],
  },
  {
    name: 'Employee CMS',
    description: 'Command-line content management system for employee records.',
    github: 'https://github.com/Thisara-DE/employee-tracker',
    img: cover('1.png'),
    tech: ['Node.js', 'Inquirer', 'MySQL'],
  },
];
