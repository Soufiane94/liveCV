import type { ImageMetadata } from 'astro';
import chooseALookEn from '../assets/apps/wafi/en/choose-a-look.webp';
import cozyCabinEn from '../assets/apps/wafi/en/cozy-cabin.webp';
import eventsEn from '../assets/apps/wafi/en/events.webp';
import homeEn from '../assets/apps/wafi/en/home.webp';
import kindWordEn from '../assets/apps/wafi/en/kind-word.webp';
import notesEn from '../assets/apps/wafi/en/notes.webp';
import sendEn from '../assets/apps/wafi/en/send.webp';
import welcomeEn from '../assets/apps/wafi/en/welcome.webp';
import chooseALookFr from '../assets/apps/wafi/fr/choose-a-look.webp';
import cozyCabinFr from '../assets/apps/wafi/fr/cozy-cabin.webp';
import eventsFr from '../assets/apps/wafi/fr/events.webp';
import homeFr from '../assets/apps/wafi/fr/home.webp';
import kindWordFr from '../assets/apps/wafi/fr/kind-word.webp';
import notesFr from '../assets/apps/wafi/fr/notes.webp';
import sendFr from '../assets/apps/wafi/fr/send.webp';
import welcomeFr from '../assets/apps/wafi/fr/welcome.webp';
import type { Locale, LocalizedText, Translatable } from '../i18n';

export interface AppLink {
  label: Translatable;
  url: string;
}

export interface Screenshot {
  /**
   * Image files under src/assets, imported at the top of this module: one for every language,
   * or one per language when the app shows its text in the page's language.
   * Astro resizes them and converts them to WebP.
   */
  image: ImageMetadata | Record<Locale, ImageMetadata>;
  /** What the screenshot shows, for people who can't see it. */
  alt: LocalizedText;
}

export interface App {
  /** URL segment of the app's page: `wafi` gives /apps/wafi/. */
  slug: string;
  name: string;
  /** One or two sentences, shown in the Developed apps section and on the app's page. */
  summary: LocalizedText;
  technologies: string[];
  /** The app's own website on this site, e.g. a self-contained page in public/. */
  website?: string;
  /** Store pages, installable builds… They open in a new tab. */
  links: AppLink[];
  /** Shown in this order on the app's page, which says they're coming while the list is empty. */
  screenshots: Screenshot[];
}

/** Path of an app's page, built by src/pages/apps/[slug].astro. */
export const appPagePath = (app: App) => `/apps/${app.slug}/`;

export const apps: App[] = [
  {
    slug: 'wafi',
    name: 'Wafi',
    summary: {
      en: 'An Android app that brings kind words now and then to anyone who feels alone, is grieving, or is simply tired, picking words that fit what they’re going through. Private by design: no account, no tracking, and nothing leaves the phone.',
      fr: 'Application Android qui apporte de temps en temps des mots doux à celles et ceux qui se sentent seuls, sont en deuil ou simplement fatigués, en choisissant des mots adaptés à ce qu’ils traversent. Confidentialité dès la conception : pas de compte, aucun pistage, et rien ne quitte le téléphone.',
    },
    technologies: ['React Native', 'Expo', 'TypeScript', 'i18next', 'Jest'],
    // public/wafi/: the page made in the KindWords repository (promo/wafi), with its own copies of the screenshots.
    website: '/wafi/',
    links: [
      {
        label: { en: 'Android build', fr: 'Build Android' },

        url: 'https://expo.dev/accounts/soidhaaz/projects/KindWords/builds/1365d33f-8bbe-493c-8b9f-58b8be22f3e6',
      },
    ],
    // Alternative text from public/wafi/index.html.
    screenshots: [
      {
        image: { en: welcomeEn, fr: welcomeFr },
        alt: {
          en: 'Wafi’s hello at the end of the welcome: “Hi, I’m Wafi! I’ll bring you a kind word now and then, on ordinary days and on the heavier ones too.”',
          fr: 'Le bonjour de Wafi à la fin de l’accueil : « Coucou, moi c’est Wafi ! Je t’apporterai un mot doux de temps en temps, les jours ordinaires comme les jours plus lourds. »',
        },
      },
      {
        image: { en: homeEn, fr: homeFr },
        alt: {
          en: 'Home: a “How are you today?” check-in, then a kind word from Wafi, the pup peeking over the card: “Small steps still move you forward. You’re allowed to go slowly.”',
          fr: 'L’accueil : « Comment ça va aujourd’hui ? », puis un mot doux de Wafi, le petit chien penché sur la carte : « Un petit pas reste un pas. Tu as le droit d’avancer lentement. »',
        },
      },
      {
        image: { en: kindWordEn, fr: kindWordFr },
        alt: {
          en: 'A kind word opened from a notification, in the Nature look: “You don’t have to carry today perfectly. You just have to carry it.” Below it: Save, Send, Not for me and Snooze.',
          fr: 'Un mot doux ouvert depuis une notification, dans le décor Nature : « Tu n’as pas à réussir ta journée. Juste à la traverser, à ton rythme. » En dessous : Garder, Envoyer, Pas pour moi et Pause.',
        },
      },
      {
        image: { en: eventsEn, fr: eventsFr },
        alt: {
          en: 'The calendar: a driving test, Dad’s checkup, a job interview and a day of remembrance, each showing when Wafi’s kind words will come.',
          fr: 'Le calendrier : un examen du permis, un rendez-vous de papa, un entretien d’embauche et un jour de souvenir, chacun avec le moment où arriveront les mots doux de Wafi.',
        },
      },
      {
        image: { en: notesEn, fr: notesFr },
        alt: {
          en: 'Notes, in the Letters & Ink look: a birthday note for Yasmine, a note to self, one for future me, and a message from Mom.',
          fr: 'Les notes, dans le décor Lettres & Encre : un mot d’anniversaire pour Yasmine, un mot pour soi, un pour le futur moi, et un message de Maman.',
        },
      },
      {
        image: { en: sendEn, fr: sendFr },
        alt: {
          en: 'Send a kind word: the picture that will be sent, framed with cherry blossoms, and a choice between picture and text.',
          fr: 'Envoyer un mot doux : l’image qui sera envoyée, encadrée de fleurs de cerisier, et le choix entre image et texte.',
        },
      },
      {
        image: { en: cozyCabinEn, fr: cozyCabinFr },
        alt: {
          en: 'Home in the Cozy Cabin look, dark and warm: “In case nobody has said it today: it’s good that you’re here.”',
          fr: 'L’accueil dans le décor Cabane douillette, sombre et chaleureux : « Le monde est un peu plus doux parce que tu y es. »',
        },
      },
      {
        image: { en: chooseALookEn, fr: chooseALookFr },
        alt: {
          en: 'Choose a look: fourteen looks, from Simple and Nature to Space, Winter and Patchwork Quilt.',
          fr: 'Choisis un décor : quatorze décors, de Simple et Nature à Espace, Hiver et Courtepointe.',
        },
      },
    ],
  },
];
