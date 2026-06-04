/**
 * Core types for the B2B Technology Consulting Portfolio
 */

export interface Project {
  id: string;
  slug: string; // URL-friendly identifier
  title: string;
  tagline: string; // High-impact one-liner
  problem: string;
  context: string; // e.g., startup, university, enterprise
  constraints: string[]; // e.g., time, budget, users
  stack: string[];
  architecture: string; // Description of technical decisions
  result: string;
  impact: string; // Concrete metric or result if available
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  year: string;
  tags: string[];
  image?: string; // Project preview image path
  images?: string[]; // Additional gallery images for modal
}

export interface TimelineEntry {
  id: string;
  year: string;
  period: string; // e.g., "Jan 2023 – Mar 2023"
  title: string;
  organization: string;
  type: 'hackathon' | 'incubadora' | 'internship' | 'proyecto' | 'liderazgo' | 'certificacion' | 'educacion';
  description: string;
  highlights: string[]; // Max 3 impact bullets
  tags: string[];
  featured: boolean;
  images?: string[];
  credentialUrl?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string; // Estimation
}

export interface Service {
  id: string;
  title: string;
  description: string;
  problem: string; // What client problem it solves
  deliverables: string[];
  idealFor: string[]; // Types of clients
  process: ProcessStep[];
}

export interface Technology {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'database' | 'devops' | 'architecture' | 'product';
  level: 'expert' | 'proficient' | 'familiar';
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string; // Short name for badges
  issuerFull: string; // Full program name
  period: string;
  status: 'completed' | 'in-progress';
  description: string;
  skills: string[];
  credentialUrl?: string;
}

export interface CommunityItem {
  id: string;
  name: string;
  role: string;
  description: string;
  impact: string[];
  link?: string;
  image?: string;
}
