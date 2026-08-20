import * as yaml from 'js-yaml';
import rawYaml from '../../MasterContent.yml?raw';

export interface Location {
  city?: string | null;
  country?: string | null;
}

export interface Contact {
  phone?: string | null;
  email?: string | null;
  linkedin?: string | null;
  portfolio?: string | null;
}

export interface Profile {
  name: string;
  location?: Location;
  contact?: Contact;
  professional_identity?: {
    primary?: string[];
    supporting?: string[];
  };
  professional_summary: string;
}

export interface EducationHighlight {
  description: string;
  metric?: {
    value?: number;
    unit?: string;
    qualifier?: string;
  };
}

export interface Education {
  institution: string;
  location?: string | null;
  degree: string;
  field: string;
  start_date: string;
  end_date: string;
  gpa: string;
  highlights?: EducationHighlight[];
}

export interface WorkExperience {
  company: string;
  location?: string | null;
  employment_type?: string | null;
  start_date: string;
  end_date: string;
  role: string;
  responsibilities: string[];
  functional_areas?: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  category: string[];
  description: string;
  responsibilities: string[];
  technologies?: string[];
  outcomes?: string[];
  dataset?: {
    source?: string;
    volume?: string;
  };
  machine_learning?: {
    algorithm?: string;
    classification_type?: string;
    classes?: string[];
    techniques?: string[];
  };
  performance?: {
    accuracy?: string;
  };
}

export interface OrganizationAchievement {
  description: string;
  metric?: any;
  metrics?: any;
}

export interface OrganizationExperience {
  organization: string;
  location?: string | null;
  start_date: string;
  end_date: string;
  role?: string;
  roles?: string[];
  division?: string;
  achievements?: OrganizationAchievement[];
  competencies?: string[];
}

export interface HardSkill {
  name: string;
  category: string;
  proficiency?: string | null;
}

export interface LanguageSkill {
  language: string;
  proficiency?: string | null;
}

export interface Skills {
  hard_skills: HardSkill[];
  soft_skills: string[];
  tools: string[];
  languages: LanguageSkill[];
}

export interface Certification {
  provider: string;
  program: string;
  competencies: string[];
  credential_id?: string | null;
  issue_date?: string | null;
  expiry_date?: string | null;
}

export interface PortfolioData {
  metadata: any;
  profile: Profile;
  education: Education[];
  work_experience: WorkExperience[];
  projects: Project[];
  organization_experience: OrganizationExperience[];
  skills: Skills;
  certifications_and_training: Certification[];
  competency_clusters: Record<string, string[]>;
  website_sections: any;
  positioning: any;
  key_metrics: any;
  tags: string[];
  source_gaps: string[];
}

export const portfolioData: PortfolioData = yaml.load(rawYaml) as PortfolioData;
