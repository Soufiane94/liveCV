export const locales = ['en', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** A string translated into every supported locale. */
export type LocalizedText = Record<Locale, string>;

/** Either a string that reads the same in every locale, or a per-locale translation. */
export type Translatable = string | LocalizedText;

export const localize = (text: Translatable): LocalizedText =>
  typeof text === 'string' ? { en: text, fr: text } : text;

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';

/** A calendar month in ISO 8601 `YYYY-MM` form, e.g. `2021-11`. */
export type YearMonth = `${number}-${Month}`;

/** Formats a month for every locale, e.g. `{ en: 'Nov 2021', fr: 'nov. 2021' }`. */
export const formatYearMonth = (value: YearMonth): LocalizedText => {
  const date = new Date(`${value}-01T00:00:00Z`);
  const format = (locale: Locale) =>
    new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
  return { en: format('en'), fr: format('fr') };
};

/**
 * `aria-label` attributes for an element whose label must follow the language toggle.
 * The server renders the default locale; LanguageToggle.astro swaps it at runtime.
 */
export const localizedAriaLabel = (label: LocalizedText) => ({
  'aria-label': label[defaultLocale],
  'data-aria-label-en': label.en,
  'data-aria-label-fr': label.fr,
});

/** Interface strings shared across components. */
export const ui = {
  skipToContent: { en: 'Skip to content', fr: 'Aller au contenu' },
  primaryNavigation: { en: 'Primary', fr: 'Principale' },
  professionalLinks: { en: 'Professional links', fr: 'Liens professionnels' },
  switchLanguage: { en: 'Show site in French', fr: 'Afficher le site en anglais' },
  present: { en: 'Present', fr: 'aujourd’hui' },
  opensInNewTab: { en: '(opens in a new tab)', fr: '(s’ouvre dans un nouvel onglet)' },
  email: { en: 'Email', fr: 'E-mail' },
  downloadCv: { en: 'Download CV (PDF)', fr: 'Télécharger le CV (PDF)' },
} satisfies Record<string, LocalizedText>;
