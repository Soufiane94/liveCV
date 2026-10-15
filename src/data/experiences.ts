import type { LocalizedText, Translatable, YearMonth } from '../i18n';

export interface Experience {
  company: string;
  role: Translatable;
  start: YearMonth;
  /** Omit for the current position. */
  end?: YearMonth;
  location: Translatable;
  /**
   * One entry per bullet point, most recent project first.
   * English: start with an action verb (present tense for the current role, past tense otherwise).
   * French: nominal CV style ("Pilotage…", "Développement…").
   */
  highlights: LocalizedText[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Crédit Agricole CIB',
    role: 'Lead Software Engineer',
    start: '2026-08',
    location: 'Paris, France',
    highlights: [
      // TODO: confirm with Sirous — add team size, the scope of the accounting systems and one or two outcomes.
      {
        en: 'Lead a Scrum team that develops and maintains accounting systems.',
        fr: 'Pilotage d’une équipe Scrum chargée du développement et de la maintenance de systèmes comptables.',
      },
    ],
    technologies: ['.NET Core', 'SQL Server', 'Kafka', 'Spark', 'React', 'GitLab'],
  },
  {
    company: 'Avanade',
    role: { en: 'Lead Full Stack Azure Developer', fr: 'Lead développeur Full Stack Azure' },
    start: '2021-11',
    end: '2026-08',
    location: 'Paris, France',
    highlights: [
      // TODO: confirm with Sirous — any measurable result (go-live, number of users, delivery cadence, performance)?
      {
        en: 'Led a Scrum team of 6 developers building a web application for a commodities trading client, covering trading operations, logistics, contracts, and pricing.',
        fr: 'Pilotage d’une équipe Scrum de 6 développeurs sur une application web pour un client du négoce de matières premières\u00a0: opérations de trading, logistique, contrats et tarification.',
      },
      {
        en: 'Developed a React progressive web app (PWA) for a corporate catering client, letting employees order meals for pickup or delivery (Scrum team of 4).',
        fr: 'Développement en React d’une application web progressive (PWA) pour un client de restauration d’entreprise, permettant aux collaborateurs de commander leurs repas à emporter ou en livraison (équipe Scrum de 4 personnes).',
      },
    ],
    technologies: ['.NET 8', 'Microservices', 'SQL Server', 'React', 'Angular', 'TypeScript', 'Docker', 'Kubernetes', 'Azure DevOps', 'Azure CI/CD'],
  },
  {
    company: 'Oriolis',
    role: { en: 'Senior Software Engineer', fr: 'Ingénieur logiciel senior' },
    start: '2020-03',
    end: '2021-11',
    location: 'Palaiseau, France',
    highlights: [
      {
        en: 'Developed a regulatory text management application for UTAC as a full-stack developer in a Scrum team of 3.',
        fr: 'Développement full stack d’une application de gestion des textes réglementaires pour l’UTAC, au sein d’une équipe Scrum de 3 personnes.',
      },
      {
        en: 'Designed and developed an application for managing certifications and scheduling customer audits.',
        fr: 'Conception et développement d’une application de gestion des certifications et de planification des audits clients.',
      },
    ],
    technologies: ['.NET Core', 'Angular', 'SQL Server', 'Azure CI/CD'],
  },
  {
    company: 'Capgemini',
    role: { en: 'Software Engineer', fr: 'Ingénieur logiciel' },
    start: '2019-05',
    end: '2020-01',
    location: { en: 'Casablanca, Morocco', fr: 'Casablanca, Maroc' },
    highlights: [
      {
        en: 'Developed a contractual obligations management application for Suez Eau France.',
        fr: 'Développement d’une application de gestion des obligations contractuelles pour Suez Eau France.',
      },
    ],
    technologies: ['.NET Core 2', 'Angular', 'Oracle'],
  },
  {
    company: 'Marjane Holding',
    role: { en: 'Software Engineer', fr: 'Ingénieur logiciel' },
    start: '2018-12',
    end: '2019-04',
    location: { en: 'Casablanca, Morocco', fr: 'Casablanca, Maroc' },
    highlights: [
      // TODO: confirm with Sirous — size or impact of the migration (users, invoice volume, outcome)?
      {
        en: 'Migrated a supplier invoice management application from VB6 to ASP.NET MVC 5 on an Oracle database.',
        fr: 'Migration d’une application de gestion des factures fournisseurs de VB6 vers ASP.NET MVC 5, sur base de données Oracle.',
      },
    ],
    technologies: ['ASP.NET MVC 5', 'VB6', 'Oracle'],
  },
  {
    company: 'Accenture',
    role: { en: 'Software Engineer', fr: 'Ingénieur logiciel' },
    start: '2018-06',
    end: '2018-12',
    location: { en: 'Casablanca, Morocco', fr: 'Casablanca, Maroc' },
    highlights: [
      {
        en: 'Developed and maintained an insurance management application for AXA and BNP.',
        fr: 'Développement et maintenance d’une application de gestion d’assurances pour AXA et BNP.',
      },
      {
        en: 'Designed, developed, and deployed a C# WPF application that generates configuration files for an AXA and BNP insurance management system (internship).',
        fr: 'Conception, développement et déploiement d’une application C# WPF générant des fichiers de configuration pour un système de gestion d’assurances AXA et BNP (stage).',
      },
    ],
    technologies: ['C#', 'WPF', 'XAML'],
  },
];
