import type { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  name: "Harsh Chaturvedi",
  title: "AI Engineer | B.Tech Artificial Intelligence Student",
  tagline:
    "Building AI Agents, RAG Systems, Computer Vision Applications and Intelligent Backend Systems.",
  about:
    "Artificial Intelligence undergraduate with hands-on experience in Machine Learning, Computer Vision, Agentic AI, RAG systems and FastAPI backend development. Passionate about building intelligent systems that solve real-world problems.",
  email: "chaturvediharsh123@gmail.com",
  location: "India",
  github: "https://github.com/Chaturvediharsh123",
  linkedin: "https://www.linkedin.com/in/harsh-chaturvedi-537589292/",
  typingPhrases: [
    "AI Agents & Multi-Agent Systems",
    "RAG Pipelines & LLM Applications",
    "Computer Vision & YOLOv8",
    "FastAPI Backend Engineering",
    "Intelligent Healthcare Systems",
  ],
  skillCategories: [
    {
      title: "AI & Machine Learning",
      icon: "Brain",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "Hugging Face", level: 82 },
        { name: "Machine Learning", level: 90 },
        { name: "Feature Engineering", level: 85 },
        { name: "Model Evaluation", level: 87 },
      ],
    },
    {
      title: "Agentic AI",
      icon: "Bot",
      skills: [
        { name: "LangChain", level: 88 },
        { name: "LangGraph", level: 80 },
        { name: "RAG", level: 92 },
        { name: "AI Agents", level: 90 },
        { name: "Prompt Engineering", level: 88 },
      ],
    },
    {
      title: "Backend",
      icon: "Server",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "Redis", level: 75 },
        { name: "PostgreSQL", level: 78 },
      ],
    },
    {
      title: "Computer Vision",
      icon: "Eye",
      skills: [
        { name: "YOLOv8", level: 92 },
        { name: "OpenCV", level: 90 },
        { name: "OCR", level: 85 },
      ],
    },
    {
      title: "Tools",
      icon: "Wrench",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
        { name: "Jupyter Notebook", level: 88 },
        { name: "Docker", level: 78 },
      ],
    },
  ],
  experiences: [
    {
      id: "exp-0",
      role: "AI/ML Intern",
      organization: "HabileLabs",
      period: "May 2026 — July 2026",
      description:
        "Built an AI-powered HR assistant that answers questions from company policies and employee documents. Connected ingestion, embeddings, retrieval, prompting, and LLM responses into one workflow.",
      technologies: [
        "LangChain",
        "Hugging Face",
        "ChromaDB",
        "FastAPI",
        "PostgreSQL",
        "Redis",
      ],
    },
    {
      id: "exp-1",
      role: "B.Tech Artificial Intelligence Student",
      organization: "Birla Institute of Technology, Mesra",
      period: "2023 — Present",
      description:
        "B.Tech student focused on machine learning, computer vision, agentic AI, and intelligent backend development.",
      technologies: ["Python", "TensorFlow", "FastAPI", "LangChain", "YOLOv8"],
    },
    {
      id: "exp-2",
      role: "Open Source Contributor",
      organization: "MemoriLabs, NousResearch, Unsloth, Exo",
      period: "2025 — Present",
      description:
        "Contributing to AI infrastructure and agent frameworks including Memori, Hermes Agent, Unsloth, and Exo.",
      technologies: ["Python", "LLMs", "Agent Frameworks", "Git"],
    },
    {
      id: "exp-3",
      role: "AI/ML Project Developer",
      organization: "Independent Projects",
      period: "2024 — Present",
      description:
        "Designed 20+ AI applications across RAG, computer vision, healthcare, and multi-agent systems using FastAPI and Streamlit.",
      technologies: [
        "LangChain",
        "FastAPI",
        "YOLOv8",
        "RDKit",
        "Streamlit",
        "Hugging Face",
      ],
    },
  ],
  achievements: [
    {
      title: "MNIT Jaipur Energy Taskmaster Hackathon Finalist",
      description:
        "Recognized among top teams for innovative AI-powered energy solutions.",
      icon: "Trophy",
    },
    {
      title: "MAXIMALLY AI Hackathon MakeX Award",
      description:
        "Awarded for outstanding AI project demonstrating real-world impact.",
      icon: "Award",
    },
    {
      title: "CGPA 8.5",
      description:
        "Maintaining strong academic performance in Artificial Intelligence program.",
      icon: "GraduationCap",
    },
    {
      title: "25+ Open Source Repositories",
      description:
        "Active GitHub contributor with projects spanning AI agents, CV, and healthcare.",
      icon: "Github",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Chaturvediharsh123",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harsh-chaturvedi-537589292/",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:chaturvediharsh123@gmail.com",
      icon: "Mail",
    },
  ],
};
