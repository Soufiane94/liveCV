import type { LocalizedText } from '../i18n';

export interface ProfileLink {
  label: string;
  url: string;
}

export interface Profile {
  /** Full name for metadata and structured data. */
  fullName: string;
  /** Used for the wordmark and the footer. */
  shortName: string;
  /** Name as shown in the page heading. */
  displayName: string;
  headline: LocalizedText;
  links: ProfileLink[];
  /** Shown as an "Email" link in the header when set. */
  contactEmail?: string;
  /** Path of a CV file in public/ (e.g. '/cv.pdf'); shown as a download link when set. */
  cvPath?: string;
  /** Paragraphs of the About section. */
  about: LocalizedText[];
  quote: { text: string; author: string };
  seo: {
    title: LocalizedText;
    /** Search and social description (shown in English, the site's default language). */
    description: string;
    /** Alternative text for the social preview image (public/og-image.png). */
    imageAlt: string;
  };
}

export const profile: Profile = {
  fullName: 'Soufiane I.H. Azami',
  shortName: 'Soufiane',
  displayName: 'Soufiane I.H. AZAMI',
  headline: { en: 'Software Engineer / Tech Lead', fr: 'Ingénieur logiciel / Tech Lead' },
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/soufianeiha/' },
    { label: 'GitHub', url: 'https://github.com/Soufiane94?tab=repositories' },
    { label: 'Azure Certifications', url: 'https://learn.microsoft.com/en-us/users/siha/credentials?tab=credentials-tab' },
  ],
  // TODO: confirm with Sirous — add a public contact email and a CV PDF to enable these calls to action.
  // contactEmail: 'name@example.com',
  // cvPath: '/cv.pdf',
  about: [
    {
      en: "I'm a software engineer, passionate about tech. I pursue the feeling that comes after solving a complex problem; I believe that's the only way to learn and become better.",
      fr: 'Je suis ingénieur logiciel et passionné de technologie. Je recherche la satisfaction qui suit la résolution d’un problème complexe ; je crois que c’est la meilleure façon d’apprendre et de progresser.',
    },
  ],
  quote: { text: 'Journey before destination', author: 'Brandon Sanderson' },
  seo: {
    title: {
      en: 'Soufiane I.H. Azami — Software Engineer / Tech Lead',
      fr: 'Soufiane I.H. Azami — Ingénieur logiciel / Tech Lead',
    },
    description:
      'Paris-based lead software engineer building .NET, Azure and React/Angular applications since 2018. Microsoft Certified DevOps Engineer Expert.',
    imageAlt: 'Soufiane I.H. Azami — Software Engineer / Tech Lead. .NET, Azure, React, Angular.',
  },
};
