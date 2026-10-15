import { certifications } from '../data/certifications';
import { experiences } from '../data/experiences';
import { profile } from '../data/profile';
import { skillGroups } from '../data/skills';
import { localize } from '../i18n';

/** schema.org ProfilePage for the site owner, built from the same data the page renders. */
export const buildProfilePageSchema = (siteUrl: URL) => {
  const currentRole = experiences.find((experience) => !experience.end);
  const withoutQuery = (url: string) => {
    const parsed = new URL(url);
    parsed.search = '';
    return parsed.href;
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: siteUrl.href,
    mainEntity: {
      '@type': 'Person',
      '@id': new URL('#person', siteUrl).href,
      name: profile.fullName,
      url: siteUrl.href,
      email: profile.contactEmail,
      jobTitle: currentRole && localize(currentRole.role).en,
      worksFor: currentRole && { '@type': 'Organization', name: currentRole.company },
      sameAs: profile.links.map((link) => withoutQuery(link.url)),
      knowsAbout: [...new Set(skillGroups.flatMap((group) => group.skills.map((skill) => localize(skill).en)))],
      hasCredential: certifications.map((certification) => ({
        '@type': 'EducationalOccupationalCredential',
        name: localize(certification.name).en,
        credentialCategory: 'Professional certification',
        url: certification.url,
        recognizedBy: { '@type': 'Organization', name: certification.issuer },
      })),
    },
  };
};

/** Serializes JSON-LD for an inline <script>, escaping `<` so the data cannot close the element. */
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\u003c');
