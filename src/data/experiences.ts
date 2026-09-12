export type Locale = 'en' | 'fr';

export type LocalizedText = Record<Locale, string>;

export interface Experience {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  location?: string;
  description: LocalizedText;
  technologies?: string[];
}

export const experiences: Experience[] = [
    {
    company: 'Crédit Agricole CIB',
    role: { en: 'Lead Software Engineer', fr: 'Lead Software Engineer' },
    period: { en: '08/2026 — Present', fr: '08/2026 — Aujourd’hui' },
    location: 'Paris, France',
    description: {
      en: 'Leading a Scrum team responsible for the development and maintenance of accounting systems.',
      fr: 'Pilotage d’une équipe Scrum responsable du développement et de la maintenance de systèmes comptables.',
    },
    technologies: ['.NET Core', ' Sql Server', 'Kafka', 'Spark', 'GitLab','React'],
  },
  {
    company: 'Avanade',
    role: { en: 'Lead Full Stack Azure Developer', fr: 'Lead développeur Full Stack Azure' },
    period: { en: '11/2021 — 08/2026', fr: '11/2021 — 08/2026' },
    location: 'Paris, France',
    description: {
      en: 'Project 2: Led a Scrum team of 6 developers in developing a web application for a commodities trading client, covering trading operations, logistics, contracts, and pricing. Project 1: React Developer in a Scrum team of 4, developing a progressive web application for a corporate catering client, enabling employees to order meals for pickup or delivery.',
      fr: 'Projet 2 : Pilotage d’une équipe Scrum de 6 développeurs pour une application web destinée à un client de négoce de matières premières, couvrant les opérations de trading, la logistique, les contrats et la tarification. Projet 1 : Développeur React au sein d’une équipe Scrum de 4 personnes, pour une application web progressive de restauration d’entreprise permettant aux employés de commander des repas à emporter ou en livraison.',
    },
    technologies: ['.NET 8 Microservices', ' Sql Server', 'Docker', 'Kubernetes', 'Azure DevOps','React', 'Angular', 'TypeScript', 'Azure CI/CD'],
  },
  {
    company: 'Oriolis',
    role: { en: 'Senior Software Engineer', fr: 'Ingénieur logiciel senior' },
    period: { en: '03/2020 — 11/2021', fr: '03/2020 — 11/2021' },
    location: 'Palaiseau, France',
    description: {
      en: 'Project 2: Full-stack Developer in a Scrum team of 3, developing a regulatory text management application for UTAC. Project 1: Designed and developed an application for certification management and customer audit scheduling.',
      fr: 'Projet 2 : Développeur full stack au sein d’une équipe Scrum de 3 personnes, pour une application de gestion de textes réglementaires destinée à UTAC. Projet 1 : Conception et développement d’une application de gestion des certifications et de planification des audits clients.',
    },
    technologies: [' .NET Core ', 'Angular', ' SQL Server', ' Azure CI/CD'],
  },
  {
    company: 'Capgemini',
    role: { en: 'Software Engineer', fr: 'Ingénieur logiciel' },
    period: { en: '05/2019 — 01/2020', fr: '05/2019 — 01/2020' },
    location: 'Casablanca, Morocco',
    description: {
      en: 'Developed an application for managing contractual obligations for Suez Eau France.',
      fr: 'Développement d’une application de gestion des obligations contractuelles pour Suez Eau France.',
    },
    technologies: ['NET Core 2', 'Angular', 'ORACLE'],
  },
  {
    company: 'Marjane Holding',
    role: { en: 'Software Engineer', fr: 'Ingénieur logiciel' },
    period: { en: '12/2018 — 04/2019', fr: '12/2018 — 04/2019' },
    location: 'Casablanca, Morocco',
    description: {
      en: 'Migrated a supplier invoice management application from VB6 to .NET MVC 5 with an Oracle database.',
      fr: 'Migration d’une application de gestion de factures fournisseurs de VB6 vers .NET MVC 5 avec une base de données Oracle.',
    },
    technologies: ['.NET MVC', 'VB6', 'ORACLE'],
  },
  {
    company: 'Accenture',
    role: { en: 'Software Engineer', fr: 'Ingénieur logiciel' },
    period: { en: '06/2018 — 12/2018', fr: '06/2018 — 12/2018' },
    location: 'Casablanca, Morocco',
    description: {
      en: 'Project 2: Developed and maintained an insurance management application for AXA and BNP. Project 1 – Internship: Designed, developed, and deployed a C# WPF application generating configuration files used by an AXA and BNP insurance management system.',
      fr: 'Projet 2 : Développement et maintenance d’une application de gestion d’assurances pour AXA et BNP. Projet 1 – Stage : Conception, développement et déploiement d’une application C# WPF générant des fichiers de configuration utilisés par un système de gestion d’assurances AXA et BNP.',
    },
    technologies: ['C#', 'XAML'],
  },
];
