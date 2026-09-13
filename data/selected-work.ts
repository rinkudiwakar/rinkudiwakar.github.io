export interface SelectedProject {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  discoveryPipeline: string[];
  caseStudyUrl: string;
  githubUrl: string;
}

export const selectedProjects: SelectedProject[] = [
  {
    id: "messos",
    number: "01",
    name: "MessOS",
    category: "Product · Full Stack · SaaS",
    description:
      "A software system designed to make hostel mess operations simpler, more transparent and easier to manage.",
    technologies: ["Next.js", "Supabase", "PostgreSQL"],
    imageSrc: "/images/messos.png",
    discoveryPipeline: ["Interface", "API", "Database"],
    caseStudyUrl: "/work/messos",
    githubUrl: "https://github.com/rinkudiwakar/MessOS",
  },
  {
    id: "skillgap-ai",
    number: "02",
    name: "SkillGap AI",
    category: "AI · RAG · Product",
    description:
      "An AI system that analyzes a resume, identifies skill gaps and turns them into an actionable learning roadmap.",
    technologies: ["Python", "RAG", "LLM", "Embeddings"],
    imageSrc: "/images/skillgap.png",
    discoveryPipeline: ["Resume", "Analysis", "Skill Gap", "Roadmap"],
    caseStudyUrl: "/work/skillgap-ai",
    githubUrl: "https://github.com/rinkudiwakar/SkillGap-AI",
  },
  {
    id: "moviesentiment",
    number: "03",
    name: "MovieSentiment",
    category: "ML · MLOps · Cloud",
    description:
      "A production-oriented sentiment analysis system taking an ML model beyond experimentation into a reproducible deployment pipeline.",
    technologies: ["Python", "MLflow", "Docker", "AWS"],
    imageSrc: "/images/moviesentiment.png",
    discoveryPipeline: ["Input", "Model", "Prediction"],
    caseStudyUrl: "/work/moviesentiment",
    githubUrl: "https://github.com/rinkudiwakar/Movie-Sentiment-Prediction",
  },
  {
    id: "kavach",
    number: "04",
    name: "Kavach",
    category: "Hardware · AI · Embedded",
    description:
      "A hardware and AI system combining sensing, intelligence and embedded control into a security-focused product.",
    technologies: ["ESP32", "IoT", "AI", "Embedded"],
    imageSrc: "/images/kavach.png",
    discoveryPipeline: ["Input", "Processing", "Controller", "Action"],
    caseStudyUrl: "/work/kavach",
    githubUrl: "https://github.com/rinkudiwakar/Kavach",
  },
];
