import type { LocalizedText } from './experiences';

export interface SkillGroup {
  name: LocalizedText;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: { en: 'Backend', fr: 'Backend' },
    skills: ['.NET', 'Node.js', 'SQL Server', 'REST APIs', 'SQL', 'Kafka', 'Spark'],
  },
  {
    name: { en: 'Frontend', fr: 'Frontend' },
    skills: ['React', 'Angular', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    name: { en: 'Cloud / DevOps', fr: 'Cloud / DevOps' },
    skills: ['Docker', 'CI/CD', 'AWS', 'Azure', 'Observability'],
  },
  {
    name: { en: 'Architecture / Tools', fr: 'Architecture / Outils' },
    skills: ['System design', 'Design Patterns', 'Technical leadership', 'Git', 'Agile delivery'],
  },
];
