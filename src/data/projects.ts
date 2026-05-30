import type { Project } from "@/types";

const GITHUB_BASE = "https://github.com/Chaturvediharsh123";

export const projects: Project[] = [
  {
    id: "usagi-ai",
    title: "Usagi AI — Helmet & Plate Detection",
    description:
      "Real-time monitoring system that detects riders not wearing helmets using YOLOv8 and captures vehicle license plate numbers using OCR (EasyOCR/Tesseract). Helps improve road safety by automatically identifying violations and logging incidents for reporting.",
    technologies: ["YOLOv8", "OpenCV", "OCR", "EasyOCR", "Streamlit"],
    githubUrl: `${GITHUB_BASE}/Usagi-AI-`,
    stars: 3,
    language: "Jupyter Notebook",
    featured: true,
  },
  {
    id: "venture-ai",
    title: "VentureAI — Multi-Agent Startup Generator",
    description:
      "Fully Python-powered multi-agent startup generator with a stunning glassmorphism UI. Supports any API provider via universal OpenAI-compatible backend — Grok, OpenAI, Gemini, DeepSeek, OpenRouter, or custom endpoints.",
    technologies: [
      "Python",
      "Agentic AI",
      "Flask",
      "GenAI",
      "JavaScript",
    ],
    githubUrl: `${GITHUB_BASE}/VentureAI`,
    stars: 1,
    language: "CSS",
    featured: true,
  },
  {
    id: "rapidaid",
    title: "RAPIDAID AI Voice Assistant",
    description:
      "AI-powered emergency response system that automatically calls individuals, understands their situation using LLMs, classifies the emergency type, and routes cases to ambulance, police, or fire services for faster response.",
    technologies: [
      "Python",
      "FastAPI",
      "Agentic AI",
      "Streamlit",
      "Twilio",
      "SQLite",
    ],
    githubUrl: `${GITHUB_BASE}/RapidAid-`,
    stars: 0,
    language: "Python",
    featured: true,
  },
  {
    id: "synapsekit",
    title: "SynapseKit — LLM Application Framework",
    description:
      "Minimal, async-first Python framework for production LLM apps. Features RAG, Agents, Graphs, 30 providers, 46 tools, 33 loaders, and 9 vector stores — built with 2 hard dependencies and no magic.",
    technologies: ["Python", "RAG", "AI Agents", "LLM", "Async"],
    githubUrl: `${GITHUB_BASE}/SynapseKit`,
    stars: 0,
    language: "Python",
    featured: true,
  },
  {
    id: "molecule-x",
    title: "MOLECULE-X",
    description:
      "AI-assisted drug discovery platform processing over 1000 molecular structures using RDKit and machine learning for molecular analysis and prediction.",
    technologies: ["RDKit", "Machine Learning", "Python"],
    githubUrl: `${GITHUB_BASE}/MOLECULE-X`,
    stars: 0,
    language: "Python",
    featured: true,
  },
  {
    id: "signify",
    title: "SIGNIFY — Sign Language to Speech",
    description:
      "Real-time sign language to speech conversion system for accessibility. Converts hand gestures into speech, empowering the hearing-impaired to communicate effortlessly and inclusively in everyday life.",
    technologies: ["Computer Vision", "Python", "Deep Learning"],
    githubUrl: `${GITHUB_BASE}/SIGNIFY`,
    stars: 0,
    language: "Python",
    featured: true,
  },
  {
    id: "ishacare",
    title: "ISHACARE — AI Health Monitor",
    description:
      "AI system that reads medical reports, predicts health risks, and automatically alerts users for early disease detection using PDF parsing and Random Forest models.",
    technologies: [
      "FastAPI",
      "Streamlit",
      "Random Forest",
      "PDF Parser",
      "Pandas",
    ],
    githubUrl: `${GITHUB_BASE}/ISHACARE`,
    stars: 0,
    language: "Python",
    featured: false,
  },
  {
    id: "cardiovascular",
    title: "AI Cardiovascular Risk Predictor",
    description:
      "Machine learning system that analyzes patient health data to predict heart disease risk. Integrates multiple trained models to evaluate ECG patterns, heart risk factors, and provide cardiovascular diagnosis.",
    technologies: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Healthcare",
    ],
    githubUrl: `${GITHUB_BASE}/AI-Based-Cardiovascular-Risk-Predictor`,
    stars: 0,
    language: "Python",
    featured: false,
  },
  {
    id: "agent-commerce",
    title: "AgentCommerce",
    description:
      "AI-powered commerce platform leveraging agentic AI for intelligent product discovery, recommendations, and automated customer interactions.",
    technologies: ["JavaScript", "AI Agents", "Web Development"],
    githubUrl: `${GITHUB_BASE}/AgentCommerce`,
    stars: 0,
    language: "JavaScript",
    featured: false,
  },
  {
    id: "emotion-detection",
    title: "AI Emotion Detection",
    description:
      "Machine learning system that detects emotions from text using Natural Language Processing, enabling sentiment-aware applications and intelligent user interactions.",
    technologies: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
    githubUrl: `${GITHUB_BASE}/Emotional-state-finder`,
    stars: 0,
    language: "Python",
    featured: false,
  },
  {
    id: "ai-healthcare",
    title: "AI HealthCare Monitoring System",
    description:
      "Comprehensive AI health monitoring and prediction system for tracking vital signs and predicting potential health issues using machine learning models.",
    technologies: ["Python", "Machine Learning", "Healthcare", "Streamlit"],
    githubUrl: `${GITHUB_BASE}/AI_HealthCare`,
    stars: 0,
    language: "Python",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
