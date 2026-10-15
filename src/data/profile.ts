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
      en: 'Lead software engineer specializing in .NET, Azure, and React/Angular. Since 2018, I’ve built business applications in sectors such as banking, commodities trading, and insurance, and I now lead a Scrum team. I hold three Microsoft Azure certifications, including DevOps Engineer Expert.',
      fr: 'Lead software engineer spécialisé en .NET, Azure et React/Angular. Depuis 2018, je développe des applications métier dans des secteurs comme la banque, le négoce de matières premières et l’assurance, et je pilote aujourd’hui une équipe Scrum. Je suis titulaire de trois certifications Microsoft Azure, dont DevOps Engineer Expert.',
    },
    {
      en: 'I’m driven by the satisfaction of solving complex problems — to me, it’s the best way to learn and keep improving. Lately, I’ve also been building with AI coding agents such as Claude Code and OpenAI Codex.',
      fr: 'Ce qui me motive\u00a0: la satisfaction de venir à bout d’un problème complexe — c’est, selon moi, la meilleure façon d’apprendre et de progresser. Depuis peu, je développe aussi avec des agents de code IA comme Claude Code et OpenAI Codex.',
    },
  ],
  quote: { text: 'Journey before destination', author: 'Brandon Sanderson' },
  seo: {
    title: {
      en: 'Soufiane I.H. Azami — Software Engineer / Tech Lead',
      fr: 'Soufiane I.H. Azami — Ingénieur logiciel / Tech Lead',
    },
    description:
      'Lead software engineer in Paris specializing in .NET, Azure, and React/Angular. Microsoft Certified: Azure Developer Associate and DevOps Engineer Expert.',
    imageAlt: 'Soufiane I.H. Azami — Software Engineer / Tech Lead. .NET, Azure, React, Angular.',
  },
};
