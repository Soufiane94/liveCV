import type { Translatable } from '../i18n';

export interface Certification {
  /** Exam code, e.g. `AZ-900`. */
  code: string;
  /** Official credential name, as shown on the verification page. */
  name: Translatable;
  issuer: string;
  /** Public credential verification page. */
  url: string;
}

export const certifications: Certification[] = [
  {
    code: 'AZ-900',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Siha/FC766BCBE9766343?sharingId=75DF6474B579071',
  },
  {
    code: 'AZ-204',
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Siha/3EF1F2AD5216817C?sharingId=75DF6474B579071',
  },
  {
    code: 'AZ-400',
    name: 'Microsoft Certified: DevOps Engineer Expert',
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/Siha/ACB1DA5330BF348A?sharingId=75DF6474B579071',
  },
];
