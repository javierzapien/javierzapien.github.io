# zapien.xyz — Developer Handoff

Source of truth: Figma file **Portfolio 20206**, page **PORTFOLIO_MCP_DESING_010826**.
Design tokens live in the Figma variable collections `Primitives` and `Responsive`
and are mirrored 1:1 in `tokens.css`. Content lives in `projects.js`.

Site is static, deployed on GitHub Pages behind a Namecheap domain.

---

## 1. Pages

Five page types. Sixteen project pages share one template.

| Route | Figma frame (desktop) | Mobile | Tablet |
|---|---|---|---|
| `/` | `Desktop_Home_1440` | `Mobile_Home_375` | `Tablet_Home_768` |
| `/portfolio` | `Desktop_Portfolio_1440` | `Mobile_Portfolio_375` | `Tablet_Portfolio_768` |
| `/logofolio` | `Desktop_Logofolio_1440` | `Mobile_Logofolio_375` | `Tablet_Logofolio_768` |
| `/about` | `Desktop_About_1440` | `Mobile_About_375` | `Tablet_About_768` |
| `/work/[slug]` | `Desktop_Project_<slug>_1440` ×16 | `Mobile_Project_goldstorm_375` | `Tablet_Project_goldstorm_768` |

Goldstorm is the responsive **reference** for the project template. Build one component
and feed it from `projects.js` — do not hand-build sixteen pages. The desktop frames for
the other fifteen exist only so the gallery arrangement per project can be read off.

---

## 2. Breakpoints

| Name | Range | Design width | Margin | Content width | Grid |
|---|---|---|---|---|---|
| Mobile | `< 768px` | 375 | 24 | 327 | 1 col |
| Tablet | `768–1023px` | 768 | 32 | 704 | 2 col |
| Desktop | `≥ 1024px` | 1440 | 25 | 1390 | 4 col |

Mobile-first. Content is centred with a max width; the margin token is the inline padding.
Between 1024 and 1440 the grid stays 4-up and the container simply grows to its max.

---

## 3. Design tokens

All values in `tokens.css`. Never hardcode — reference the token.

### Color
| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#000000` | All text, all logo marks |
| `--color-paper` | `#ffffff` | Page background |
| `--color-surface` | `#fafafa` | Footer band |
| `--color-rule` | `#d9d9d9` | Footer hairlines |

The palette is genuinely two colors plus two greys. Every other color on the site comes
from project imagery, never from CSS.

### Typography
Two families, one weight each: **Space Grotesk Regular** and **Space Mono Regular**.
Space Mono always carries `letter-spacing: 0.05em` and is always uppercase — it is used
exclusively for labels, tags, and legal text. Space Grotesk is everything else.

| Role | Mobile | Tablet | Desktop | Family |
|---|---|---|---|---|
| `--type-nav` | 13 | 14 | 20 | sans |
| `--type-tagline` | 15 | 14 | 20 | sans |
| `--type-section-label` | 17 | 17 | 19 | sans |
| `--type-body` | 15 | 15 | 20 | sans |
| `--type-body-large` | 17 | 20 | 36 | sans |
| `--type-meta` | 11 | 11 | 11 | mono |
| `--type-legal` | 10 | 10 | 11 | mono |

Line height is `normal` (Figma "AUTO") everywhere. Do not set explicit line heights.

### Spacing
Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 70.

| Token | Mobile | Tablet | Desktop |
|---|---|---|---|
| `--space-header-y` | 28 | 26 | 31 |
| `--space-section-top` | 56 | 56 | 70 |
| `--space-section-label-gap` | 28 | 28 | 33 |
| `--space-footer-top` | 56 | 56 | 70 |
| `--grid-gap-y` | 52 | 56 | 70 |
| `--grid-gap-x` | 0 | 16 | 25 |

---

## 4. Components

### Header
Present on every page, identical content, different arrangement per breakpoint.

Contents: nav (`Portfolio` · `Logofolio` · `About`), the flower logo mark, the tagline
"Graphic design, Branding, illustration.", and a location/clock block reading
`Dubai → [live date and time]`.

| Breakpoint | Arrangement |
|---|---|
| Mobile | Vertical, centred. Nav → mark → tagline → clock. 18px between items, `--space-header-y` top. |
| Tablet | Horizontal, space-between. Left column (tagline over clock, 8px gap) · mark · nav. Left column and nav are **top-aligned**; the mark stays vertically centred. |
| Desktop | Horizontal. Tagline top-left with the clock below it, mark centred, nav top-right. All three top-aligned at 31px. |

The clock is live — `Dubai` is static text, the timestamp updates every second in the
viewer's rendering of Asia/Dubai time. Format: `Saturday, July 18, 2026 19:59:16`
(`EEEE, MMMM d, yyyy HH:mm:ss`). It wraps to a second line when the container is narrow.

### Footer
Present on every page. Background `--color-surface`, hairline `--color-rule` above the
columns and above the legal line.

Four blocks, each a mono label over sans links:
`SOCIAL` (Instagram, LinkedIn, Behance, Dribbble) · `SITE` (Home, Portfolio, Info,
Logofolio) · `CONTACT` (Hola.javierzapien@gmail.com) · the tagline.
Then a rule, then `© 2026 All rights reserved.` in `--type-legal`.

Mobile and tablet stack the four blocks vertically with 28px between them.
Desktop lays them out in four columns across the content width.

> Note: the `SITE` list says "Info" but the page is `/about`. Align the label with the
> route before shipping.

### Project card
Used in the grid on `/portfolio` and in "More projects".

Structure: image (`--card-image-height`, full column width, `object-fit: cover`) →
title in `--type-meta` → excerpt in `--type-body` → tags in `--type-meta`.
Gaps inside the card: 14px image→title, 12px title→excerpt, 14px excerpt→tags.

Tags render as a comma-separated uppercase string joined from the `tags` array.

### Hero (home only)
Full-bleed, edge to edge, no container padding. Height is `--hero-height`.
Five slides cross-fading on a 5-second interval (§5).

### Logo grid (logofolio only)
Thirty cells, each a dark tile with a centred logo mark, aspect ratio **1.9:1**.
1 column on mobile, 2 on tablet, 4 on desktop, 19px gutter.
The marks are white-on-near-black and should ship as SVG.

---

## 5. Behavior

### Hero rotation
```
interval:   5000ms (--hero-interval)
transition: opacity cross-fade, 600ms, ease-in-out
slides:     heroSlides in projects.js, in array order, looping
```
Preload the next slide. Pause the interval when the tab is hidden
(`document.visibilityState`) and when `prefers-reduced-motion: reduce` is set — in the
reduced-motion case show the first slide only and do not rotate.

The five slides are 16:10 landscape source images. At mobile they crop roughly 42–44%
horizontally. **Ship per-breakpoint crops**, not one image with `object-position` guessed
in CSS — the Figma frames `Slide_1…5` inside each `Hero` carry the intended framing for
mobile and tablet. Export those frames rather than re-cropping.

### More projects
Every project page ends with a horizontally scrolling row of six other projects.
Use `moreProjects(currentSlug)` from `projects.js` — it walks forward from the current
project and wraps, so a project never appears in its own list and each page shows a
different set. Deterministic, so the order is stable between builds.

Mobile and tablet: horizontal scroll with snap, one and two cards visible respectively.
Desktop: four visible, scroll for the rest.

> The Figma frames still show hard-coded sets built from an older twenty-project list,
> and eleven of them point at projects that no longer exist. Ignore what the frames show
> here and generate from the array.

### Navigation
All nav items, footer links, project cards, and logo marks are links.
The logo mark returns to `/`.

---

## 6. States

Nothing beyond default is designed. These are the recommended defaults — confirm before
building.

| Element | State | Behavior |
|---|---|---|
| Nav item | Hover | Underline, 1px, `currentColor`, offset 4px |
| Nav item | Current page | Underline persists |
| Footer link | Hover | Same underline |
| Project card | Hover | Image scales to 1.02 over 250ms; nothing else moves |
| Project card | Focus-visible | 2px `--color-ink` outline, 2px offset, on the whole card |
| Hero | Loading | Solid `--color-surface` until the first slide decodes |
| Logo tile | Hover | No change |

Cards are the primary target on touch — keep the whole card tappable, not just the title.

---

## 7. Content rules

- **Excerpts** run 55–70 characters and sit on two lines at every breakpoint. Keep new
  ones inside that range; do not truncate with ellipsis, rewrite instead.
- **Titles** are uppercase in the data, not via `text-transform`, because `BLÜM` and
  `CHACHALACA CAFÉ` carry diacritics that must survive.
- **Tags** are 1–3 entries. More than three wraps and breaks the card rhythm.
- **Intro** on a project page runs 130–260 characters, one paragraph.
- Empty gallery is valid — the project page renders hero, intro, and "More projects".

---

## 8. Assets

Needed per project: `thumb` (grid card, 4:3-ish, min 680px wide) and `hero`
(project page, 1440×900). Gallery images vary per project — read the arrangement from
that project's desktop frame, since some use full-width blocks and others paired
side-by-side.

Export the logo marks from the logofolio grid as SVG, the flower mark as SVG, and
photography as WebP with JPG fallback. Everything is `loading="lazy"` except the first
hero slide and the first row of grid cards.

---

## 9. Accessibility

- Logical heading order: page title is `h1` (visually the section label, e.g. "Projects ←"),
  project titles inside cards are `h2` on `/portfolio` and `h3` in "More projects".
- The `←` in section labels is decorative — wrap in `aria-hidden="true"`.
- The hero is decorative imagery; give each slide a meaningful `alt` from `heroSlides`,
  and mark the rotating region `aria-live="off"` so it does not announce on every change.
- The live clock updates every second — put it in `aria-live="off"` too, or it will be
  read aloud continuously.
- Focus order follows DOM order; no positive `tabindex`.
- Contrast: black on white throughout, well past AA. The dark logo tiles are the only
  place to verify — check the mark's grey against `#1a1a1a`.
- Every image link needs an accessible name; a card wrapped in a single `<a>` with the
  title inside is enough — do not wrap the image in a second link.

---

## 10. Known gaps

Carry these into the build; none are blocking.

1. `Desktop_About_1440` labels the services section **"About me ←"** — a duplicate of the
   bio label. It should almost certainly read "Services ←". Same in the mobile and tablet
   About frames, which were built to match.
2. `Desktop_Project_deus-ex-machina_1440` has the breadcrumb **"Flor de nube ←"** — text
   from another project. Correct value is in `projects.js` (`breadcrumb: "Deus ex machina"`).
3. The desktop portfolio grid still contains hidden cards for four retired projects and a
   duplicate Koelleza. They are invisible and excluded from `projects.js`; ignore them.
4. `Desktop_Home_1440` still shows an older hero image that is not among the five slides.
5. Hover, focus, and active states are proposals in §6, not designed.
6. Mobile hero crops for the five slides still need manual reframing in Figma.
