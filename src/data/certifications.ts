import type { Translatable } from '../i18n';

export interface Certification {
  /** Exam code, e.g. `AZ-900`. */
  code: string;
  name: Translatable;
  issuer: string;
  /** Public credential verification page. */
  url: string;
}

export const certifications: Certification[] = [
  {
    code: 'AZ-900',
    name: { en: 'Microsoft Azure Fundamentals', fr: 'Fondamentaux Microsoft Azure' },
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Siha/FC766BCBE9766343?sharingId=75DF6474B579071',
  },
  {
    code: 'AZ-204',
    name: { en: 'Developing Solutions for Microsoft Azure', fr: 'Développement de solutions pour Microsoft Azure' },
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Siha/3EF1F2AD5216817C?sharingId=75DF6474B579071',
  },
  {
    code: 'AZ-400',
    name: {
      en: 'Designing and Implementing Microsoft DevOps Solutions',
      fr: 'Conception et implémentation de solutions DevOps Microsoft',
    },
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Siha/ACB1DA5330BF348A?sharingId=75DF6474B579071',
  },
];
