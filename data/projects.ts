import { Project } from "@/types/content";

export const projectsData: Project[] = [
  {
    slug: "messos",
    title: "MessOS",
    tagline: "A software system designed to make hostel mess operations simpler, more transparent and easier to manage.",
    status: "completed",
    categories: ["Product", "Full Stack", "SaaS"],
    featured: true,
    problem:
      "Hostel mess operations suffer from manual attendance tracking, untracked dietary wastes, chaotic meal complaints, and non-transparent billing across managers, munshis, and students.",
    idea: "A unified B2B SaaS platform including Mess Manager, Munshi, and Clerk portals for real-time meal counts, transparent accounting, feedback loops, and automated attendance.",
    story:
      "Engineered to transform high-friction physical hostel operations into an intuitive digital experience. Features dedicated role-based portals for mess administration, staff management, student attendance scanning, and billing analytics.",
    role: "Full Stack Architect & Lead Developer.",
    outcome:
      "Integrated operational platform with automated meal tracking, inventory visibility, and real-time attendance telemetry.",
    lessons: [
      "Operational software succeeds by reducing daily friction for ground operators, not just by showing fancy charts.",
      "Clear role-based access control and intuitive workflows are vital when non-technical staff use digital portals daily.",
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    architecture:
      "Manager/Staff/Clerk Portals → Next.js App Router → Supabase Auth & RLS → PostgreSQL Database → Real-time State & Analytics",
    repositoryUrl: "https://github.com/rinkudiwakar/MessOS",
    proofIds: ["proof-messos-repo"],
  },
  {
    slug: "kavach",
    title: "Kavach",
    tagline: "AI-powered voice authentication and physical smart access system.",
    status: "completed",
    categories: ["AI", "Hardware", "IoT", "Embedded Systems"],
    featured: true,
    problem:
      "People frequently forget physical keys, while traditional contact biometrics require physical touch and specialized optical sensors. We asked: What if human voice could securely become the key?",
    idea: "Turn human voice into a biometric key by integrating real-time deep learning speaker verification with a Raspberry Pi server, Arduino microcontroller, and electromechanical motor actuators.",
    story:
      "Built as a 5-person engineering team at NIT Jalandhar. Kavach was my first production-grade project integrating hardware, software, voice biometrics, and databases. During testing, we uncovered a critical vulnerability: if an unauthorized person spoke the exact trigger keyword, the system could unlock. We diagnosed the acoustic flaw and re-engineered a two-tier pipeline cross-referencing biometric voiceprint spectrograms with phrase matching before sending serial signals to the Arduino.",
    role: "Core Builder & System Integrator — Voice biometric AI pipeline, Raspberry Pi server, Arduino serial protocol.",
    teamSize: 5,
    outcome:
      "Functional physical prototype achieving real-time speaker verification and mechanical deadbolt actuation.",
    lessons: [
      "Building something real is fundamentally different from writing code that runs in a notebook.",
      "Hardware and acoustic edge cases require defensive engineering and isolated power topologies.",
      "End-to-end building means taking total ownership from the audio capture to the mechanical actuator.",
    ],
    technologies: [
      "Resemblyzer",
      "Vosk",
      "WebRTC VAD",
      "Python",
      "Flask REST API",
      "React",
      "MongoDB",
      "JWT Auth",
      "Raspberry Pi 4",
      "Arduino Uno",
      "L298N Motor Driver",
    ],
    architecture:
      "Microphone Array → WebRTC VAD → Vosk Keyword Match → Resemblyzer Voiceprint Model → Flask REST API → MongoDB → Raspberry Pi Serial → Arduino Microcontroller → L298N Driver → Motor Actuator",
    repositoryUrl: "https://github.com/rinkudiwakar/Kavach",
    proofIds: ["proof-kavach-repo", "proof-kavach-nitj"],
  },
  {
    slug: "nanotrade",
    title: "NanoTrade",
    tagline: "Real-time paper trading platform with custom matching engine.",
    status: "completed",
    categories: ["Systems", "Backend", "FinTech", "Real-Time"],
    featured: true,
    problem:
      "Most trading demos are simple database dashboards that fail to simulate realistic order-book mechanics, execution latency, queue matching, and portfolio state reconciliation.",
    idea: "Understand what happens underneath a real trading interface by building an event-driven paper trading platform powered by a custom matching engine.",
    story:
      "Engineered to explore low-latency systems programming, asynchronous job queues, and real-time client communication. The architecture pairs a high-performance matching engine with FastAPI web services, Redis task queues, and WebSockets for live price and execution streaming.",
    role: "Solo Architect & Developer.",
    outcome:
      "Real-time event-driven simulation platform with live order matching, position tracking, and WebSocket telemetry.",
    lessons: [
      "Deterministic event ordering and idempotent queues prevent race conditions in financial state machines.",
      "Low-level systems understanding gives clarity on where web backend bottlenecks truly originate.",
    ],
    technologies: [
      "C++ Matching Engine",
      "Python",
      "FastAPI",
      "Redis",
      "Celery",
      "Supabase / PostgreSQL",
      "WebSockets",
      "TypeScript",
    ],
    architecture:
      "Client WebSockets → FastAPI Gateway → Redis Queue → Custom C++ Matching Engine → Order Book State → Supabase Persistence → Real-Time Telemetry Stream",
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-nanotrade-repo"],
  },
  {
    slug: "skillgap-ai",
    title: "SkillGap AI",
    tagline: "Semantic embedding and RAG engine for resume and job description fit analysis.",
    status: "completed",
    categories: ["AI", "NLP", "RAG", "Product"],
    featured: true,
    problem:
      "A résumé and a job description can superficially look like a match while still concealing critical capability gaps, leading to poor hiring signals and unfocused career preparation.",
    idea: "Use semantic vector embeddings and Retrieval-Augmented Generation (RAG) to measure genuine competency fit, detect latent skill gaps, and generate structured learning roadmaps.",
    story:
      "Built to explore applied natural language processing and semantic search beyond generic chatbot wrappers. The platform extracts entities from resumes, maps them against industry skill taxonomies, and produces detailed diagnostic gap analyses with actionable bridge roadmaps.",
    role: "Solo Builder & Product Architect.",
    outcome:
      "Production-ready diagnostic tool capable of parsing unstructured PDFs, generating semantic embeddings, and surfacing prioritized skill roadmaps.",
    lessons: [
      "AI is valuable when applied to domain-specific analytical problems rather than generic conversational prompts.",
      "Taxonomy normalization and chunking strategies constitute 80% of building reliable semantic RAG systems.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "RAG & Vector Embeddings",
      "Celery",
      "Redis",
      "React",
      "Supabase",
      "TypeScript",
    ],
    architecture:
      "Resume PDF Parser → Text Chunking & Entity Extraction → Semantic Vector Embedding → Taxonomy Matcher → RAG Gap Analyzer → Interactive Remediation UI",
    repositoryUrl: "https://github.com/rinkudiwakar/SkillGap-AI",
    proofIds: ["proof-skillgap-repo"],
  },
  {
    slug: "moviesentiment",
    title: "MovieSentiment",
    tagline: "Production-oriented ML discovery platform with automated MLOps & EKS deployment.",
    status: "completed",
    categories: ["MLOps", "AI", "Cloud", "Kubernetes"],
    featured: true,
    problem:
      "Machine learning models often remain trapped in Jupyter notebooks without robust CI/CD, containerized packaging, automated retraining, and scalable Kubernetes orchestration.",
    idea: "Build an end-to-end ML sentiment discovery platform demonstrating the full lifecycle: Model → Version → Package → Deploy → Monitor.",
    story:
      "Engineered to bridge data science and DevOps. The system tracks experiment metrics and model artifacts via MLflow and DVC, automates container builds with GitHub Actions, deploys onto Amazon EKS clusters, and monitors inference health via Prometheus and Grafana.",
    role: "Solo Builder & MLOps Engineer.",
    outcome:
      "Fully automated MLOps deployment pipeline running containerized sentiment inference on Kubernetes with active telemetry.",
    lessons: [
      "A machine learning model is only as dependable as the deployment pipeline and observability monitoring backing it.",
      "Version-controlling datasets (DVC) and model weights (MLflow) is mandatory for reproducible production systems.",
    ],
    technologies: [
      "Python",
      "PyTorch / Scikit-learn",
      "MLflow",
      "DVC",
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    architecture:
      "Dataset Versioning (DVC) → Training & Artifact Registry (MLflow) → Docker Containerization → GitHub Actions CI/CD → Amazon EKS Cluster → Prometheus/Grafana Telemetry",
    repositoryUrl: "https://github.com/rinkudiwakar/Movie-Sentiment-Prediction",
    proofIds: ["proof-moviesentiment-repo"],
  },
  {
    slug: "bike-demand-ml",
    title: "Bike Demand Prediction ML System",
    tagline: "Production ML demand forecasting application developed at TS Bridge.",
    status: "completed",
    categories: ["Machine Learning", "Data Analytics", "Cloud", "Internship"],
    featured: true,
    problem:
      "Urban mobility fleets experience extreme utilization volatility due to weather, seasonal shifts, and commuting patterns, requiring precise predictive demand modeling to prevent asset shortages.",
    idea: "Train, evaluate, and deploy an end-to-end regression pipeline on AWS with automated MLOps tracking and stakeholder analytics dashboards.",
    story:
      "Developed during my Data Analytics & Machine Learning Internship at TS Bridge. Engineered an end-to-end ML application utilizing XGBoost and Scikit-learn, achieving 91% prediction accuracy with an MAE below 35. Integrated DVC and MLflow for lifecycle versioning, containerized via Docker on AWS EC2/S3, and deployed interactive Power BI dashboards utilized by 5+ business stakeholders.",
    role: "Data Analytics & Machine Learning Intern (TS Bridge).",
    outcome:
      "Deployed production ML application with 91% accuracy, MAE < 35, and live Power BI stakeholder intelligence dashboards.",
    lessons: [
      "Model accuracy metrics must translate directly into operational stakeholder decisions.",
      "Continuous data versioning and cloud containerization ensure seamless deployment parity.",
    ],
    technologies: [
      "XGBoost",
      "Scikit-learn",
      "Python",
      "Flask REST API",
      "DVC",
      "MLflow",
      "Docker",
      "AWS EC2",
      "AWS S3",
      "CI/CD",
      "Power BI",
    ],
    architecture:
      "Fleet Data Ingestion → Feature Engineering Pipeline → XGBoost Regression → DVC/MLflow Tracking → Flask REST API Container → AWS EC2/S3 Hosting → Power BI Stakeholder Dashboard",
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-tsbridge-internship"],
  },
  {
    slug: "coursevita-data-pipeline",
    title: "Large-Scale Data Preprocessing & EDA",
    tagline: "Data wrangling and feature engineering pipeline on 50,000+ records at CourseVita.",
    status: "completed",
    categories: ["Data Science", "Analytics", "Internship"],
    featured: false,
    problem:
      "Raw real-world datasets arrive laden with missing values, inconsistent encodings, extreme outliers, and duplicate records that degrade downstream modeling.",
    idea: "Construct a robust, reproducible data wrangling and exploratory analysis pipeline to transform 50,000+ messy records into clean, modeling-ready datasets.",
    story:
      "Developed during my Data Science Internship at CourseVita. Performed systematic data cleaning, missing-value imputation, duplicate removal, and comprehensive exploratory data analysis (EDA) on a 50,000+ record dataset. Proved that rigorous data engineering is the indispensable foundation of all machine learning.",
    role: "Data Science Intern (CourseVita).",
    outcome:
      "Structured production-ready dataset and comprehensive exploratory reports utilized for predictive modeling.",
    lessons: [
      "Real-world data is inherently messy; systematic cleaning is the cornerstone of valid machine intelligence.",
      "Statistical EDA reveals fundamental distribution shifts that naive modeling completely overlooks.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Missing Value Imputation",
      "Exploratory Data Analysis",
      "Matplotlib / Seaborn",
    ],
    architecture:
      "Raw 50k+ Data Records → Imputation & Normalization → Duplicate Pruning → Statistical EDA → Modeling-Ready Artifacts",
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-coursevita-internship"],
  },
  {
    slug: "vehicle-insurance-ml",
    title: "Vehicle Insurance ML Pipeline",
    tagline: "End-to-end predictive classification pipeline with modular MLOps architecture.",
    status: "completed",
    categories: ["Machine Learning", "MLOps", "Experiments"],
    featured: false,
    problem:
      "Assessing vehicle insurance claim propensities requires handling severe class imbalances, multi-modal features, and repeatable retraining pipelines.",
    idea: "Build a modular, reproducible ML pipeline implementing structured feature engineering, hyperparameter tuning, and containerized artifact tracking.",
    story:
      "Engineered as an exploratory MLOps project to master modular software design in machine learning. Features automated data validation, custom transformers, and structured prediction endpoints.",
    role: "Solo Builder.",
    outcome:
      "Modular, reproducible machine learning classification pipeline with automated artifact persistence.",
    lessons: [
      "Modular code organization separates data engineering concerns from model evaluation.",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Docker"],
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-insurance-repo"],
  },
  {
    slug: "fault-detection-iot",
    title: "Industrial Sensor Fault Detection",
    tagline: "Anomaly detection system for industrial sensor telemetries.",
    status: "completed",
    categories: ["IoT", "Signal Processing", "Experiments"],
    featured: false,
    problem:
      "Industrial machinery sensor drifts and electrical spikes often go undetected until catastrophic mechanical failure occurs.",
    idea: "Apply time-series statistical anomaly detection and threshold heuristics to continuous sensor telemetry streams.",
    story:
      "Grounded in electrical engineering signal processing principles. Explored anomaly classification on noisy voltage, vibration, and thermal time-series streams.",
    role: "Solo Builder.",
    outcome:
      "Experimental signal anomaly diagnostic pipeline capable of identifying outlier telemetry events.",
    lessons: [
      "Domain knowledge of electrical signals is critical for designing effective anomaly filter thresholds.",
    ],
    technologies: ["Python", "NumPy", "Time-Series Signal Analysis", "IoT Protocols"],
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-fault-repo"],
  },
];
