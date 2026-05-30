export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  stars?: number;
  language?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Achievement {
  title: string;
  description?: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  location: string;
  github: string;
  linkedin?: string;
  typingPhrases: string[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  achievements: Achievement[];
  socialLinks: SocialLink[];
}
