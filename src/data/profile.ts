import type { LocalizedText } from '../i18n';

export interface ProfileLink {
  label: string;
  url: string;
}

export interface Profile {
  /** Used for the wordmark and the footer. */
  shortName: string;
  /** Name as shown in the page heading. */
  displayName: string;
  headline: LocalizedText;
  links: ProfileLink[];
  /** Paragraphs of the About section. */
  about: LocalizedText[];
  quote: { text: string; author: string };
  seo: { title: LocalizedText; description: string };
}

export const profile: Profile = {
  shortName: 'Soufiane',
  displayName: 'Soufiane I.H. AZAMI',
  headline: { en: 'Software Engineer / Tech Lead', fr: 'Ingénieur logiciel / Tech Lead' },
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/soufianeiha/' },
    { label: 'GitHub', url: 'https://github.com/Soufiane94?tab=repositories' },
    { label: 'Azure Certifications', url: 'https://learn.microsoft.com/en-us/users/siha/credentials?tab=credentials-tab' },
  ],
  about: [
    {
      en: "I'm a software engineer, passionate about tech. I pursue the feeling that comes after solving a complex problem; I believe that's the only way to learn and become better.",
      fr: 'Je suis ingénieur logiciel et passionné de technologie. Je recherche la satisfaction qui suit la résolution d’un problème complexe ; je crois que c’est la meilleure façon d’apprendre et de progresser.',
    },
  ],
  quote: { text: 'Journey before destination', author: 'Brandon Sanderson' },
  seo: {
    title: {
      en: 'Soufiane — Software Engineer / Tech Lead',
      fr: 'Soufiane — Ingénieur logiciel / Tech Lead',
    },
    description: 'The professional profile and experience of Soufiane, a software engineer and tech lead.',
  },
};
