import { Project, SecondaryProject, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Phan Hữu Bình Nguyên',
  handle: '~/nguyenphan',
  title: 'AI Engineer • Honors Track',
  specialization: 'Applied AI for Economics & Business',
  status: 'Available for AI/ML Internships',
  location: 'Ho Chi Minh City, VN',
  university: 'UMT (University of Management and Technology)',
  gpa: '3.39/4.0',
  email: 'phanhuubinhnguyen30@gmail.com',
  github: 'https://github.com/NguyenPhan161206',
  linkedin: 'https://linkedin.com/in/nguyen-phan-85aa92436',
  avatarUrl: '/avatar.jpg',
  fallbackAvatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByO8kwOINvZpdPOOhipqNoJXNhie-6m9NV38n-ZgfFWJ_7_W5j9JLVkJCrAPnP4oPTm8Mq9mIqff7rR4j7My7DkhU5ruFoYStt_T0HLltI_nfFbKArb5FjgP-XZpcRDnEX6jiEoTnXhMl921-DUmczW-LKV3ChYL-H1dwz388tHc2HZjhw2eVlPC5GiFRGXv9QI2daub5VDMkCP8HsQg8NDLUaTZp6kGgId8tycbmauZNLYMQqCGIg',
  bio: 'AI Engineer specializing in Applied AI for Economics & Business • 3rd-year UMT IT Honor Student (GPA 3.39/4.0). Bridging high-speed embedded nodes, deep neural search, and enterprise production systems.'
};

export const METRICS = [
  {
    id: 'academic',
    label: 'Academic Standing',
    value: '3.39',
    unit: '/4.0',
    subtitle: 'Very Good • UMT IT Honor Student',
    icon: 'school',
    accentColor: '#4edea3',
  },
  {
    id: 'engineering',
    label: 'Core Engineering',
    value: '3',
    unit: '',
    subtitle: 'Flagship Systems: AIoT, ANN & Fullstack',
    icon: 'developer_mode_tv',
    accentColor: '#4cd7f6',
  },
  {
    id: 'leadership',
    label: 'Leadership Track',
    value: '2',
    unit: '',
    subtitle: 'Club President & Vice President Roles',
    icon: 'groups',
    accentColor: '#d0bcff',
  },
  {
    id: 'global',
    label: 'Global Program',
    value: 'AIT',
    unit: '',
    subtitle: 'Thailand Exchange Program • Aug 2026',
    icon: 'public',
    accentColor: '#e1e2ec',
  },
];

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    id: 'umt-tbs',
    title: 'UMT-TBS-official: Truck Blind-Spot Warning & Real-Time AIoT System',
    repoName: 'NguyenPhan161206/UMT-TBS-official',
    repoUrl: 'https://github.com/NguyenPhan161206/UMT-TBS-official',
    category: 'Hardware AIoT',
    categoryBadge: 'HARDWARE AIOT • PRODUCTION READY',
    fileHeader: 'src/hardware/UMT-TBS-official.cpp',
    statusBadge: 'Firmware v2.4 Stable',
    tags: ['ESP32-S3', 'ESP-NOW (<50ms)', 'FreeRTOS', 'LVGL v9', 'ThingsBoard MQTT', 'Gitleaks CI/CD'],
    description: 'An industrial-grade multi-node blind-spot surveillance apparatus engineered for heavy commercial freight. Solves edge latency constraints by bifurcating the data path: critical driver collision warnings trigger within <50ms via zero-handshake ESP-NOW peer-to-peer radio, while ambient operational metrics stream asynchronously over cellular MQTT to ThingsBoard Core IoT servers.',
    highlights: [
      {
        title: 'Dual ESP32-S3 Architecture:',
        description: 'Dedicated Sensor Node drives 6x JSN-SR04T waterproof ultrasonic sensors in non-blocking FreeRTOS tasks; Cabin Node runs LVGL v9 visual alerts & active piezos.',
        icon: 'check_circle',
        color: '#4edea3',
      },
      {
        title: '3-Level Testing Protocol:',
        description: '16 automated pytest guard suites enforcing sensor boundary validation, packet drop mitigation, and failover states.',
        icon: 'check_circle',
        color: '#4cd7f6',
      },
      {
        title: 'Security & Hardening:',
        description: 'Automated Gitleaks pre-commit hooks, Wi-Fi credentials sealed in NVS encrypted flash, watchdog auto-recovery.',
        icon: 'check_circle',
        color: '#d0bcff',
      },
    ],
    metrics: [
      { label: 'Max Measured Ping', value: '34.2 ms', color: '#4edea3' },
      { label: 'Sensor Poll Freq', value: '20 Hz / ch', color: '#4cd7f6' },
    ]
  },
  {
    id: 'snake-ann',
    title: 'Snake_ANN: Learned Neural Heuristic Replacing Manhattan in A* Search',
    repoName: 'NguyenPhan161206/Snake_ANN',
    repoUrl: 'https://github.com/NguyenPhan161206/Snake_ANN',
    category: 'Deep Learning',
    categoryBadge: 'DEEP LEARNING • ALGORITHMIC HEURISTIC',
    fileHeader: 'models/neural_heuristic_a_star.py',
    statusBadge: 'Validated on 10x10, 20x20 & 50x50 grids',
    tags: ['Python 3.11', 'TensorFlow / Keras', 'Learned A* Heuristic', 'Pygame Engine', 'Empirical Benchmark'],
    description: 'Classic A* pathfinding collapses in dynamic self-intersecting environments because standard Manhattan distance assumes an obstacle-free geometry. Snake_ANN trains a dense deep neural network to predict topological cost-to-go by inspecting a 7x7 spatial obstacle window + normalized food vector (51 total scalar inputs).',
    highlights: [
      {
        title: '51-Dimensional Feature Map:',
        description: '49 local occupancy grid cells (body coils + walls) plus dx/dy displacement coordinates to target goal.',
        icon: 'analytics',
        color: '#4cd7f6',
      },
      {
        title: 'Benchmark Superiority:',
        description: 'Drastically suppresses self-trapping loops in high snake length regimes (>65% board fill factor) where naive Manhattan fails into dead ends.',
        icon: 'speed',
        color: '#4edea3',
      },
      {
        title: 'Inference Caching:',
        description: 'Node evaluation memoization maintains real-time 60 FPS animation loop in headless and Pygame visual modes.',
        icon: 'memory',
        color: '#d0bcff',
      },
    ],
    metrics: [
      { label: 'Loss Convergence (MSE)', value: '0.0041 (Epoch 120)', color: '#4edea3' },
      { label: 'Avg Win Rate Gain', value: '+28% vs Manhattan', color: '#4cd7f6' }
    ]
  },
  {
    id: 'joblink',
    title: 'Joblink: High-Concurrence Student-Employer Career Ecosystem',
    repoName: 'qminh77/joblink',
    repoUrl: 'https://github.com/qminh77/joblink',
    category: 'Production SaaS',
    categoryBadge: 'PRODUCTION SAAS • FULL STACK',
    fileHeader: 'app/(platform)/jobs/route.ts',
    statusBadge: 'Active Collaboration',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase RLS', 'TanStack Query v5', 'Tailwind CSS'],
    description: 'A modern hiring network targeting university talent pipelines. Eliminates client-heavy ORM bloat by relying strictly on PostgreSQL Stored Procedures (RPCs) guarded by Supabase Row-Level Security policies. Facilitates verified student portfolio authentication, direct recruiter matchmaking, and live socket chat.',
    highlights: [
      {
        title: 'Zero-ORM Pure SQL Architecture:',
        description: 'Complex job application states and profile verification handled in declarative database functions for ultra-low latency.',
        icon: 'verified_user',
        color: '#d0bcff',
      },
      {
        title: 'Strict Row-Level Security:',
        description: 'Multi-tenant isolation ensuring recruitment partners only access candidate applications tied to their organization.',
        icon: 'lock',
        color: '#4edea3',
      },
      {
        title: 'State Synchronization:',
        description: 'TanStack Query optimistic mutations prevent flickering UI during high-frequency applicant interactions.',
        icon: 'bolt',
        color: '#4cd7f6',
      },
    ],
    metrics: [
      { label: 'Policy Verification', value: '100% Pass', color: '#4edea3' },
      { label: 'Data Leakage', value: 'Zero Leaks', color: '#4cd7f6' }
    ]
  }
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: 'credit-card-fraud',
    title: 'Credit Card Fraud Detection',
    domain: 'ML Benchmark',
    icon: 'credit_card',
    iconColor: '#4cd7f6',
    description: 'Benchmarked 27 ML models over 284,807 transactions. Evaluated PR-AUC and cost-matrix tradeoffs in extreme class imbalance.',
    techStack: 'XGBoost / LightGBM',
    highlightMetric: '99.8% Accuracy',
    detailedNotes: 'Implemented SMOTE oversampling, focal loss for skewed classes, and analyzed financial false-positive impact curves.'
  },
  {
    id: 'agentic-rag',
    title: 'Agentic RAG for Banking & Law',
    domain: 'LLM Agents',
    icon: 'psychology',
    iconColor: '#d0bcff',
    description: 'Autonomous vector retrieval agents resolving ambiguous regulatory queries across financial statutes with citations.',
    techStack: 'Vector DB / LangChain',
    highlightMetric: 'Zero Hallucination',
    detailedNotes: 'Employed hybrid dense-sparse reranking (BM25 + Cohere) with strict citation verification and self-reflective query rewriting.'
  },
  {
    id: 'task-api',
    title: 'Self Task Management REST API',
    domain: 'Backend API',
    icon: 'database',
    iconColor: '#4edea3',
    description: 'Engineered normalized MySQL Workbench ERD schemas, transactional rollbacks, Postman automated test suites.',
    techStack: 'MySQL / RESTful',
    highlightMetric: 'Postman Guarded',
    detailedNotes: 'Third Normal Form (3NF) relational design with ACID transaction rollbacks and automated Postman collection runner.'
  },
  {
    id: 'zero-trust',
    title: 'Zero Trust Network Architecture',
    domain: 'Security',
    icon: 'shield',
    iconColor: '#4cd7f6',
    description: 'Lab simulation of Microsoft Entra Private Access, conditional access policies, and micro-segmented perimeter defense.',
    techStack: 'Entra ID / Zero Trust',
    highlightMetric: 'Segmented',
    detailedNotes: 'Configured role-based access control (RBAC), multi-factor condition gating, and micro-segmented software-defined perimeters.'
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'eng-club',
    role: 'President & Founder • E-NG Club',
    organization: 'UMT – English & Future Engineering Club',
    period: '2025 – Present',
    periodBadgeColor: 'text-[#4edea3] bg-[#4edea3]/10',
    description: 'Authored club operating charter, established technical discussion forums, led content strategy, and spearheaded major university showcases including Clubs Day 2026 and Freshman Orientation Day.',
    bullets: [
      'Spearheaded technical literacy campaigns uniting over 120 active student members.',
      'Organized weekly workshops on engineering paper reviews, competitive coding, and AI tooling.',
      'Facilitated industry networking panels with guest tech leads and international mentors.'
    ],
    skills: ['Strategic Leadership', 'Public Speaking', 'Community Building', 'Technical Mentoring']
  },
  {
    id: 'yec-club',
    role: 'Vice President • Young Economists Club (YEC)',
    organization: 'UMT – Department of Economics & Management',
    period: '2024 – Present',
    periodBadgeColor: 'text-[#4cd7f6] bg-[#4cd7f6]/10',
    description: 'Directing academic operations, structuring workshops connecting machine learning data pipelines with econometrics, microeconomic forecasts, and corporate valuation methods.',
    bullets: [
      'Bridged computer science students with finance and economic majors for quantitative hackathons.',
      'Led research on time-series predictive modeling for regional commodity and equities indexes.',
      'Curated institutional publications on Vietnamese fintech shifts and automated trading systems.'
    ],
    skills: ['Applied Econometrics', 'Quantitative Finance', 'Team Orchestration', 'Academic Strategy']
  },
  {
    id: 'ait-scholar',
    role: 'International Scholar • AIT Thailand',
    organization: 'Asian Institute of Technology – Global Immersion',
    period: 'Target: Aug 2026',
    periodBadgeColor: 'text-[#e1e2ec] bg-[#32353d]',
    description: 'Selected for the high-impact global study program focusing on cross-border artificial intelligence applications, autonomous systems, and advanced regional data science infrastructure.',
    bullets: [
      'Global academic cohort focusing on Southeast Asian cross-border data governance and AI ethics.',
      'Advanced hands-on labs in robotics, smart cities telemetry, and distributed high-performance computing.'
    ],
    skills: ['Global Immersion', 'Autonomous Systems', 'Distributed Computing']
  },
  {
    id: 'sic-ambassador',
    role: 'SIC 2026 & Google Gemini Ambassador Explorer',
    organization: 'Samsung Innovation Campus & Google Cloud Ecosystem',
    period: 'Jan 2026',
    periodBadgeColor: 'text-[#d0bcff] bg-[#b090ff]/20',
    description: 'Completed rigorous AI/Big Data tracks with Samsung engineers and explored multimodal LLM integration patterns utilizing Google Gemini 1.5 Pro and Flash API tool calling.',
    bullets: [
      'Mastered computer vision, RNN architectures, and tabular neural networks evaluated on real-world datasets.',
      'Constructed multimodal pipelines pairing Gemini structured JSON outputs with edge devices.'
    ],
    skills: ['Samsung AI Track', 'Gemini Multimodal API', 'Neural Architectures', 'Edge Integration']
  }
];

export const CREDENTIALS = [
  {
    badge: 'HONOR ROLL',
    badgeColor: 'text-[#4edea3]',
    title: "Consecutive Dean's List / Honor Student Scholarship Recipient",
  },
  {
    badge: 'CISCO ACADEMY',
    badgeColor: 'text-[#4cd7f6]',
    title: 'Certified Network & Infrastructure Security Fundamentals',
  },
  {
    badge: 'DATA SCIENCE FELLOW',
    badgeColor: 'text-[#d0bcff]',
    title: 'UMT Departmental AI Lab Peer Mentor & Research Assistant',
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Programming',
    icon: 'code',
    color: '#4edea3',
    skills: [
      { name: 'Python 3.x', highlight: true },
      { name: 'C++ (Embedded)', highlight: false },
      { name: 'TypeScript', highlight: false },
      { name: 'JavaScript', highlight: false },
      { name: 'SQL (Postgres/MySQL)', highlight: false },
    ],
    description: 'Strict type adherence, concurrent task design, deterministic data models.'
  },
  {
    title: 'AI & Data Science',
    icon: 'smart_toy',
    color: '#4cd7f6',
    skills: [
      { name: 'TensorFlow / Keras', highlight: true },
      { name: 'scikit-learn', highlight: false },
      { name: 'Agentic RAG', highlight: true },
      { name: 'XGBoost / LightGBM', highlight: false },
      { name: 'Power BI / Tableau', highlight: false },
    ],
    description: 'Heuristic search neuralization, loss modeling, tabular benchmark supremacy.'
  },
  {
    title: 'Systems & Embedded',
    icon: 'memory',
    color: '#d0bcff',
    skills: [
      { name: 'ESP-IDF', highlight: true },
      { name: 'FreeRTOS', highlight: true },
      { name: 'ESP-NOW Protocol', highlight: false },
      { name: 'MQTT Broker', highlight: false },
      { name: 'Ubuntu / Linux CLI', highlight: false },
      { name: 'Cisco Networking', highlight: false },
    ],
    description: 'Sub-50ms radio packets, multi-task preemptive scheduling, I/O registers.'
  },
  {
    title: 'Cloud & Database',
    icon: 'cloud',
    color: '#4edea3',
    skills: [
      { name: 'PostgreSQL / RLS', highlight: true },
      { name: 'Supabase Auth/RPC', highlight: false },
      { name: 'MySQL / MariaDB', highlight: false },
      { name: 'Docker basics', highlight: false },
      { name: 'GitHub Actions CI/CD', highlight: true },
    ],
    description: 'Automated test runners, secret leakage protection, zero-ORM RPC dispatch.'
  }
];
