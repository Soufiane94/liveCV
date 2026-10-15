import type { LocalizedText } from '../i18n';

/** Page sections in display order; drives the navigation and the section headings. */
export const sections = [
  { id: 'about', title: { en: 'About', fr: 'À propos' } },
  { id: 'experience', title: { en: 'Experience', fr: 'Expérience' } },
  { id: 'skills', title: { en: 'Skills', fr: 'Compétences' } },
  { id: 'certifications', title: { en: 'Certifications', fr: 'Certifications' } },
] as const satisfies readonly { id: string; title: LocalizedText }[];

export type SectionId = (typeof sections)[number]['id'];
