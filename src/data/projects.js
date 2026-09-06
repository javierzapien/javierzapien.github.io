/**
 * Single source of truth for the portfolio.
 * Order here = order in the grid on /portfolio and the rotation in "More projects".
 * Add or remove a project here and every page updates. Nothing else to touch.
 *
 * `thumb` / `hero` / `gallery[].id` are image ids under src/assets/projects/,
 * e.g. "goldstorm/hero" -> src/assets/projects/goldstorm/hero.jpg. Astro
 * optimises them at build (see src/lib/assets.js + src/components/Img.astro).
 * Missing files fall back to a placeholder, so a project without images still
 * renders. `thumb` falls back to `hero`.
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
    thumb: 'amargo-mezcal/thumb',
    hero: 'amargo-mezcal/hero',
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
    thumb: 'say-carbon-yachts/thumb',
    hero: 'say-carbon-yachts/hero',
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
    thumb: 'sushiitto/thumb',
    hero: 'sushiitto/hero',
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
    thumb: 'deus-ex-machina/thumb',
    hero: 'deus-ex-machina/hero',
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
    thumb: 'desterrados/thumb',
    hero: 'desterrados/hero',
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
    thumb: 'bar-18/thumb',
    hero: 'bar-18/hero',
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
    thumb: 'sucanto/thumb',
    hero: 'sucanto/hero',
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
    thumb: 'chachalaca-cafe/thumb',
    hero: 'chachalaca-cafe/hero',
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
    thumb: 'hellow-festival/thumb',
    hero: 'hellow-festival/hero',
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
    thumb: 'goldstorm/thumb',
    hero: 'goldstorm/hero',
    // span: 'full' (default, landscape) or 'half' (portrait; consecutive halves
    // pair 2-up on tablet/desktop, stack on mobile). Arrangement per the Figma
    // frame Desktop_Project_goldstorm_1440.
    gallery: [
      { id: 'goldstorm/01' },
      { id: 'goldstorm/02', span: 'half' },
      { id: 'goldstorm/03', span: 'half' },
      { id: 'goldstorm/04' },
      { id: 'goldstorm/05' },
      { id: 'goldstorm/06' },
    ],
  },
  {
    slug: 'compa',
    title: 'COMPA',
    breadcrumb: 'Compa',
    excerpt: 'Brand system for a Colombian insurer, approachable and trustworthy.',
    intro:
      'Logo and brand system for a Colombian insurance company, designed to feel approachable and trustworthy — friendly without losing credibility.',
    tags: ['BRANDING', 'ILLUSTRATION'],
    thumb: 'compa/thumb',
    hero: 'compa/hero',
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
    thumb: 'estral-sport/thumb',
    hero: 'estral-sport/hero',
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
    thumb: 'patio-sunline/thumb',
    hero: 'patio-sunline/hero',
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
    thumb: 'anillos-mezcal/thumb',
    hero: 'anillos-mezcal/hero',
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
    thumb: 'koelleza/thumb',
    hero: 'koelleza/hero',
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
    thumb: 'blum/thumb',
    hero: 'blum/hero',
    gallery: [],
  },
];

/** About page — bio, portrait, and work history. Source: Figma Desktop_About_1440. */
export const about = {
  label: 'About me',
  bio: [
    'I am a graphic designer based in Dubai, United Arab Emirates, with ten years of experience working in design studios.',
    'My expertise spans branding, typography, illustration, and design direction, always with a focus on delivering strong, original, and impactful concepts.',
    'I am passionate about taking on projects that present creative challenges and generate value through thoughtful, strategic solutions.',
    'Over the course of my career, I have collaborated with design studios across the globe, an experience that has broadened my perspective and allowed me to approach each project with versatility and a well-rounded vision.',
  ],
  portrait: 'about/portrait',
  portraitAlt: 'Javier Zapien outside a Coffee and Bikes storefront',
  experience: [
    { company: 'Ground Rising', role: 'Sr. Brand Designer', type: 'Full-time', location: 'Dubái, UAE', dates: 'Current' },
    { company: 'Espina Studio', role: 'Sr. Brand Designer', type: 'Full-time', location: 'Mexico city, MX', dates: '06.23 - 07.24' },
    { company: 'Landor & Fitch', role: 'Design Director', type: 'Full-time', location: 'Mexico city, MX', dates: '06.22 - 05.23' },
    { company: 'Anagrama', role: 'Design Director', type: 'Full-time', location: 'Mexico city, MX', dates: '09.20 - 05.22' },
    { company: 'La Tortilleria', role: 'Graphic Designer', type: 'Full-time', location: 'Monterrey, MX', dates: '11.18 - 02.20' },
    { company: 'T.H.D Co.', role: 'Illustrator', type: 'Full-time', location: 'Monterrey, MX', dates: '01.17 - 11.18' },
    { company: 'La Sociedad', role: 'Graphic Designer', type: 'Full-time', location: 'Monterrey, MX', dates: '01.16 - 01.17' },
  ],
};

/**
 * Slides for the rotating hero on the home page. Order = rotation order.
 * `src` = file in src/assets/hero/. `slug` = project it links to.
 */
export const heroSlides = [
  { slug: null, src: 'inicio', alt: 'Desert landscape with hand-drawn illustrations' },
  { slug: 'sushiitto', src: 'sushiitto', alt: 'Sushiitto storefront in magenta' },
  { slug: 'sucanto', src: '12', alt: 'Sucanto chocolate wrappers in neon colours' },
  { slug: 'goldstorm', src: 'goldstorm', alt: 'Goldstorm identity detail' },
  { slug: 'chachalaca-cafe', src: 'chachalaca-cafe', alt: 'Chachalaca Café branding' },
  { slug: 'anillos-mezcal', src: 'anillos-mezcal-01', alt: 'Anillos Mezcal bottle' },
  { slug: 'desterrados', src: 'desterrados-01', alt: 'Desterrados taquería identity' },
  { slug: 'sucanto', src: 'sucanto', alt: 'Sucanto chocolate packaging' },
  { slug: 'estral-sport', src: 'estral-sport', alt: 'Estral Sport esports identity' },
  { slug: 'anillos-mezcal', src: 'anillos-mezcal-02', alt: 'Anillos Mezcal packaging' },
  { slug: 'koelleza', src: 'koelleza', alt: 'Koelleza pixel-art skincare branding' },
  { slug: 'desterrados', src: 'desterrados-02', alt: 'Desterrados packaging' },
];

/**
 * Logofolio grid — 30 dark tiles, grey SVG mark centred, 1.9:1.
 * Marks live in src/assets/logos/logo-NN.svg.
 */
export const logos = Array.from({ length: 30 }, (_, i) => ({
  id: `logo-${String(i + 1).padStart(2, '0')}`,
  name: `Logo ${i + 1}`,
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
