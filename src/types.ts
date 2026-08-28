export interface SiteConfig {
  name: string;
  tagline: string;
  profession: string;
  heroDescription: string;
  aboutText: string;
  location: string;
  experience: string;
  email: string;
  phone: string;
  whatsapp: string;
  availability: string;
  instagram: {
    username: string;
    url: string;
  };
  profileImage: string;
  cvPath: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'AutoCAD' | '3D Modeling' | 'Interior' | 'Furniture' | 'Assembly' | 'ArtCAM' | 'CorelDRAW' | 'CNC';
  software: string[];
  year?: string;
  description: string;
  client?: string;
  services?: string[];
  coverImage: string;
  images: string[];
  process?: string[];
  pdf?: string;
  projectLink?: string;
  specs?: Record<string, string>;
}

export type SkillLevel = 'Beginner' | 'Working Knowledge' | 'Intermediate' | 'Professional' | 'Advanced';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SoftwareTool {
  id: string;
  name: string;
  description: string;
  level: SkillLevel;
  iconName: string;
  tag: string;
  projectCount?: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
