export interface Project {
  id: string;
  title: string;
  repoName: string;
  repoUrl: string;
  category: string;
  categoryBadge: string;
  tags: string[];
  description: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
  statusBadge: string;
  fileHeader: string;
  metrics?: {
    label: string;
    value: string;
    color?: string;
  }[];
}

export interface SecondaryProject {
  id: string;
  title: string;
  domain: string;
  icon: string;
  iconColor: string;
  description: string;
  techStack: string;
  highlightMetric: string;
  repoUrl?: string;
  detailedNotes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  periodBadgeColor: string;
  description: string;
  bullets?: string[];
  skills?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    highlight?: boolean;
    level?: string;
  }[];
  description: string;
}
