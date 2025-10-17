// TypeScript 类型定义

export interface PersonalInfo {
  name: string;
  englishName: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  github: string;
  linkedin?: string;
  website?: string;
  avatar: string;
}

export interface Course {
  name: string;
  score: number;
}

export interface Education {
  school: string;
  englishName: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
  courses: Course[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Skills {
  programming: Skill[];
  frameworks: Skill[];
  tools: Skill[];
  engineering: Skill[];
  languages: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  tech: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Stats {
  projectsCompleted: number;
  yearsExperience: number;
  codeLines: string;
  accuracy: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

