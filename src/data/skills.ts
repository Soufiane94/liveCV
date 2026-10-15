import type { Translatable } from '../i18n';

export interface SkillGroup {
  /** Stable identifier, used for heading anchors. */
  id: string;
  name: Translatable;
  skills: Translatable[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    name: 'Backend',
    skills: ['.NET', 'Node.js', 'SQL Server', 'REST APIs', 'SQL', 'Kafka', 'Spark'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['React', 'Angular', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud / DevOps',
    skills: ['Docker', 'CI/CD', 'AWS', 'Azure', 'Observability'],
  },
  {
    id: 'architecture-tools',
    name: { en: 'Architecture / Tools', fr: 'Architecture / Outils' },
    skills: ['System design', 'Design Patterns', 'Technical leadership', 'Git', 'Agile delivery'],
  },
];
