// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zapien.xyz',
  image: {
    // Cloudinary is the image host (account jd15bq4d). Allow <Image> to
    // optimise / proxy remote assets from there if we ever need it.
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
});
