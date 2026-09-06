/**
 * Single source of truth for the portfolio.
 * Order here = order in the grid on /portfolio and the rotation in "More projects".
 * Add or remove a project here and every page updates. Nothing else to touch.
 *
 * `thumb` / `hero` / `gallery[]` are Cloudinary public ids (see src/lib/images.js).
 * Convention: "portfolio/<slug>/thumb", "portfolio/<slug>/hero",
 * "portfolio/<slug>/01" … for gallery frames.
 */

export const SITE = {
  name: 'Javier Zapien',
  title: 'Javier Zapien — Graphic Designer',
  description:
    'Graphic designer and 3D illustrator based in Dubai. Brand identity, illustration, custom type, art direction.',
  tagline: 'Graphic design, Branding, illustration.',
  location: 'Dubai',
  timezone: 'Asia/Dubai',
  email: 'hola.javierzapien@gmail.com',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/javizapien' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-villarreal-zapien/' },
    { label: 'Behance', href: 'https://www.behance.net/Javizapien' },
    { label: 'Dribbble', href: 'https://dribbble.com/Javizapien' },
  ],
};

export const projects = [
  {
    slug: 'amargo-mezcal',
    title: 'AMARGO MEZCAL',
    breadcrumb: 'Amargo mezcal',
    excerpt: 'A mezcal my wife and I built from scratch, name to bottle.',
    intro:
      "A mezcal my wife and I built from the ground up — concept, name, and design, all ours. Inspired by Oaxaca's traditions, where great mezcal works like good medicine.",
    tags: ['BRANDING', 'ILLUSTRATION', 'PACKAGING'],
    thumb: 'portfolio/amargo-mezcal/thumb',
    hero: 'portfolio/amargo-mezcal/hero',
    gallery: [],
  },
  {
    slug: 'say-carbon-yachts',
    title: 'SAY CARBON YACHTS',
    breadcrumb: 'Say carbon yachts',
    excerpt: 'Full identity for a carbon yacht brand in Wangen im Allgäu.',
    intro:
      'Full visual identity for a super-luxury carbon yacht brand in Wangen im Allgäu, Germany. A mark, type system, and material palette built to feel as considered as the yachts themselves.',
    tags: ['BRANDING', 'IDENTITY SYSTEM'],
    thumb: 'portfolio/say-carbon-yachts/thumb',
    hero: 'portfolio/say-carbon-yachts/hero',
    gallery: [],
  },
  {
    slug: 'sushiitto',
    title: 'SUSHIITTO',
    breadcrumb: 'Sushiitto',
    excerpt: "3D illustrations bringing Sushiitto's digital menu to life.",
    intro:
      "3D illustrations for Sushiitto's digital menu, bringing each dish to life with color, character, and motion — turning browsing into part of the experience.",
    tags: ['3D ILLUSTRATION'],
    thumb: 'portfolio/sushiitto/thumb',
    hero: 'portfolio/sushiitto/hero',
    gallery: [],
  },
  {
    slug: 'deus-ex-machina',
    title: 'DEUS EX MACHINA',
    breadcrumb: 'Deus ex machina',
    excerpt: 'Collector badges blending biker culture with Eastern motifs.',
    intro:
      'Collector badges for t-shirts and motorcycle graphics, blending biker culture with Eastern motifs — built around symbolism, craft, and the open road.',
    tags: ['MERCH', 'ILLUSTRATION'],
    thumb: 'portfolio/deus-ex-machina/thumb',
    hero: 'portfolio/deus-ex-machina/hero',
    gallery: [],
  },
  {
    slug: 'desterrados',
    title: 'DESTERRADOS',
    breadcrumb: 'Desterrados',
    excerpt: 'Desert flora and bold type for a Chihuahua taquería in CDMX.',
    intro:
      'Identity for a Chihuahua-born taquería expanding into Mexico City. Desert fauna and flora meet bold hand-built type, carrying its regional roots into a new market.',
    tags: ['BRANDING', 'ILLUSTRATION'],
    thumb: 'portfolio/desterrados/thumb',
    hero: 'portfolio/desterrados/hero',
    gallery: [],
  },
  {
    slug: 'bar-18',
    title: 'BAR 18',
    breadcrumb: 'Bar 18',
    excerpt: 'A bar where every drink costs 18 pesos — loud and unapologetic.',
    intro:
      'A bar where every drink costs 18 pesos. Loud, playful, and unapologetically fun — built for a concept that skips the pretension and goes straight to a good time.',
    tags: ['BRANDING', 'ILLUSTRATION', 'PACKAGING'],
    thumb: 'portfolio/bar-18/thumb',
    hero: 'portfolio/bar-18/hero',
    gallery: [],
  },
  {
    slug: 'sucanto',
    title: 'SUCANTO',
    breadcrumb: 'Sucanto',
    excerpt: 'Artisanal chocolate from Chiapas, rooted in harvest and tradition.',
    intro:
      "Artisanal chocolate from Mazatán, Chiapas, rooted in harvest, nature, and indigenous tradition. Branding and packaging honor the cacao's origin, from bean to bar.",
    tags: ['BRANDING', 'ILLUSTRATION', 'PACKAGING'],
    thumb: 'portfolio/sucanto/thumb',
    hero: 'portfolio/sucanto/hero',
    gallery: [],
  },
  {
    slug: 'chachalaca-cafe',
    title: 'CHACHALACA CAFÉ',
    breadcrumb: 'Chachalaca café',
    excerpt: "A café named after Chiapas's loudest bird — playful, energetic.",
    intro:
      "A café named after Chiapas's loud, lively bird. The identity channels that same energy — playful and colorful, carried through packaging, signage, and in-store details.",
    tags: ['BRANDING', 'ILLUSTRATION', 'PACKAGING'],
    thumb: 'portfolio/chachalaca-cafe/thumb',
    hero: 'portfolio/chachalaca-cafe/hero',
    gallery: [],
  },
  {
    slug: 'hellow-festival',
    title: 'HELLOW FESTIVAL 2018',
    breadcrumb: 'Hellow festival',
    excerpt: '3D illustrations for stage design at a Monterrey music festival.',
    intro:
      '3D illustrations for stage design and promotional materials at a Monterrey music festival — work meant to be seen large, loud, and larger than life.',
    tags: ['3D ILLUSTRATION', 'STAGE DESIGN'],
    thumb: 'portfolio/hellow-festival/thumb',
    hero: 'portfolio/hellow-festival/hero',
    gallery: [],
  },
  {
    slug: 'goldstorm',
    title: 'GOLDSTORM',
    breadcrumb: 'Goldstorm',
    excerpt: 'Identity for an asset manager built on trust and abundance.',
    intro:
      'Identity for a highly specialized asset management firm. Restrained typography and a confident visual language communicate trust, security, and abundance.',
    tags: ['BRANDING', 'IDENTITY SYSTEM'],
    thumb: 'portfolio/goldstorm/thumb',
    hero: 'portfolio/goldstorm/hero',
    gallery: [],
  },
  {
    slug: 'compa',
    title: 'COMPA',
    breadcrumb: 'Compa',
    excerpt: 'Brand system for a Colombian insurer, approachable and trustworthy.',
    intro:
      'Logo and brand system for a Colombian insurance company, designed to feel approachable and trustworthy — friendly without losing credibility.',
    tags: ['BRANDING', 'ILLUSTRATION'],
    thumb: 'portfolio/compa/thumb',
    hero: 'portfolio/compa/hero',
    gallery: [],
  },
  {
    slug: 'estral-sport',
    title: 'ESTRAL SPORT',
    breadcrumb: 'Estral sport',
    excerpt: 'Identity for a Monterrey esports team, built for speed and pride.',
    intro:
      'Brand identity for a professional esports team from Monterrey, built for intensity, motion, and team pride at the highest level of competition.',
    tags: ['BRANDING', 'ILLUSTRATION'],
    thumb: 'portfolio/estral-sport/thumb',
    hero: 'portfolio/estral-sport/hero',
    gallery: [],
  },
  {
    slug: 'patio-sunline',
    title: 'PATIO SUNLINE',
    breadcrumb: 'Patio Sunline',
    excerpt: 'Identity for a California pergola and outdoor living company.',
    intro:
      'Brand identity for Patio Sunline, a pergola and outdoor living company with presence across California. The palette leans tropical and warm, evoking an outdoor lifestyle that inspires customers to live more fully in their own backyard.',
    tags: ['BRANDING', 'ILLUSTRATION'],
    thumb: 'portfolio/patio-sunline/thumb',
    hero: 'portfolio/patio-sunline/hero',
    gallery: [],
  },
  {
    slug: 'anillos-mezcal',
    title: 'ANILLOS MEZCAL',
    breadcrumb: 'Anillos mezcal',
    excerpt: 'Mezcal for two former NBA stars, built around rings and smoke.',
    intro:
      'Created for two former NBA stars, this mezcal brand is built around rings and smoke — tying athletic legacy to craft and ritual.',
    tags: ['BRANDING', 'ILLUSTRATION', 'PACKAGING'],
    thumb: 'portfolio/anillos-mezcal/thumb',
    hero: 'portfolio/anillos-mezcal/hero',
    gallery: [],
  },
  {
    slug: 'koelleza',
    title: 'KOELLEZA',
    breadcrumb: 'Koelleza',
    excerpt: 'Korean skincare retailer in pixel-art, kawaii through and through.',
    intro:
      'Visual identity for an online Korean skincare retailer, built with a pixel-art aesthetic and kawaii elements to connect with a young, culture-loving audience.',
    tags: ['BRANDING', 'ILLUSTRATION'],
    thumb: 'portfolio/koelleza/thumb',
    hero: 'portfolio/koelleza/hero',
    gallery: [],
  },
  {
    slug: 'blum',
    title: 'BLÜM',
    breadcrumb: 'Blum',
    excerpt: 'A colorful, warm design system for a flower shop in Ecuador.',
    intro:
      'A design system for a flower shop in Ecuador — colorful, playful, and warm, built to carry that joy across packaging, signage, and everyday touchpoints.',
    tags: ['BRANDING', 'ILLUSTRATION', 'PACKAGING'],
    thumb: 'portfolio/blum/thumb',
    hero: 'portfolio/blum/hero',
    gallery: [],
  },
];

/** Slides for the rotating hero on the home page. Order = rotation order. */
export const heroSlides = [
  { slug: 'sushiitto', src: 'hero/sushiitto', alt: 'Sushiitto storefront in magenta' },
  { slug: 'sucanto', src: 'hero/sucanto', alt: 'Sucanto chocolate bar wrappers' },
  { slug: 'goldstorm', src: 'hero/goldstorm', alt: 'Goldstorm identity detail' },
  { slug: 'anillos-mezcal', src: 'hero/anillos-mezcal-01', alt: 'Anillos Mezcal bottle' },
  { slug: 'anillos-mezcal', src: 'hero/anillos-mezcal-04', alt: 'Anillos Mezcal packaging' },
];

/**
 * Logofolio grid — HANDOFF §4: 30 dark tiles, white SVG mark centred, 1.9:1.
 * `mark` is a path in /public/logos/<slug>.svg once the marks are exported.
 */
export const logos = Array.from({ length: 30 }, (_, i) => ({
  slug: `logo-${String(i + 1).padStart(2, '0')}`,
  name: `Logo ${i + 1}`,
  mark: null,
}));

export const HERO_INTERVAL_MS = 5000;
export const MORE_PROJECTS_COUNT = 6;

/** Look up one project by slug. */
export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

/**
 * The "More projects" row for a given project page.
 * Walks forward from the current project and wraps around, so the current
 * project can never appear in its own list and every page gets a different set.
 * Deterministic on purpose — no random, so the order is stable across builds.
 */
export function moreProjects(currentSlug, count = MORE_PROJECTS_COUNT) {
  const i = projects.findIndex((p) => p.slug === currentSlug);
  if (i === -1) return projects.slice(0, count);
  const n = Math.min(count, projects.length - 1);
  return Array.from({ length: n }, (_, k) => projects[(i + 1 + k) % projects.length]);
}
