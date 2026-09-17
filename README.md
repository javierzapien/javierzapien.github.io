# zapien.xyz

Portfolio of Javier Zapien — graphic designer & 3D illustrator, Dubai.
Rebuilt 2026 from the Figma file **Portfolio 20206 → PORTFOLIO_MCP_DESING_010826**.

## Stack

- **[Astro](https://astro.build)** — static output, zero client framework
- **Hosting:** Vercel (auto-deploy on push to `main`)
- **Images:** Cloudinary (account `jd15bq4d`) — not committed to this repo.
  See `src/lib/images.js`.
- **Fonts:** Space Grotesk + Space Mono (Google Fonts)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to dist/
npm run preview
```

## Structure

```
src/
  data/projects.js     # single source of truth: projects, hero slides, logos, SITE meta
  lib/images.js         # Cloudinary URL builder (+ placeholder mode)
  styles/tokens.css     # design tokens, mirrors Figma variable collections
  styles/global.css     # reset + base + type roles
  layouts/Base.astro    # <html> shell, header, footer, meta
  components/            # SiteHeader, SiteFooter, DubaiClock, Flower, Hero,
                         # ProjectCard, MoreProjects
  pages/
    index.astro          # /            home — full-bleed rotating hero
    portfolio.astro      # /portfolio   project grid
    logofolio.astro      # /logofolio   30 logo tiles
    about.astro          # /about       bio + services
    work/[slug].astro    # /work/:slug  one template, fed from projects.js
docs/HANDOFF.md          # full design spec (breakpoints, tokens, components, states)
```

## Content

Add / edit / reorder projects in **`src/data/projects.js`** only — every page
updates from it. Breakpoints: mobile `<768`, tablet `768–1023`, desktop `≥1024`
(design reference 1440). Mobile-first; components reference tokens, never raw values.

## Images / Cloudinary

`projects.js` stores each image as a Cloudinary *public id*
(`portfolio/<slug>/thumb`, `portfolio/<slug>/hero`, `hero/<name>` for slides).
While `CLOUDINARY_READY = false` in `src/lib/images.js`, every image resolves to a
placeholder so the site builds. Upload the assets to Cloudinary with those exact
public ids, then flip the flag to `true`.
