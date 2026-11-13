export type RouteSlug =
  | 'home'
  | 'services'
  | 'recurring'
  | 'one-time'
  | 'deep-cleaning'
  | 'move-in-out'
  | 'window-cleaning'
  | 'home-organizing'
  | 'why-maid-ok'
  | 'service-areas'
  | 'reviews'
  | 'faq'
  | 'quote'
  | 'contact';

export type QuoteServiceChoice =
  | 'Recurring Cleaning'
  | 'One-Time Cleaning'
  | 'Deep Cleaning'
  | 'Move-In / Move-Out Cleaning'
  | 'Window Cleaning'
  | 'Home Organizing'
  | 'Not Sure Yet';

export interface ServiceDefinition {
  slug: Exclude<
    RouteSlug,
    | 'home'
    | 'services'
    | 'why-maid-ok'
    | 'service-areas'
    | 'reviews'
    | 'faq'
    | 'quote'
    | 'contact'
  >;
  index: string;
  title: string;
  shortTitle: string;
  quoteOption: QuoteServiceChoice;
  ctaLabel: string;
  tagline: string;
  summary: string;
  editorialNote: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  idealFor: string[];
  policyNote?: string;
}

export interface ChecklistArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  representativePoints: string[];
  note: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  context: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  category: 'Scheduling & Quotes' | 'Policies & Access' | 'Services';
  question: string;
  answer: string;
}

export interface ServiceCity {
  name: string;
  region: string;
  zipPrefixes: string[];
  note: string;
}
