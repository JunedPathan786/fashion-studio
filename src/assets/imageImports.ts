// Image path map. Files live in /public/images and are referenced by
// absolute URL path, which is how Next.js serves static assets.
// (Vite's version of this file used ES module imports of files under
// src/assets/images; Next.js's default static-image-import returns a
// StaticImageData object rather than a plain string, which would break
// the plain <img src={...}> usage throughout the components. Serving
// the same files from /public keeps every component untouched.)
//
// IMPORTANT: this site is deployed under the /fashion-studio base path
// (see next.config.ts). Next.js only rewrites paths for assets it
// manages itself (_next/* JS/CSS, <Link> hrefs) — it does NOT rewrite
// plain strings like these, so every path below is passed through
// withBasePath() here, once, instead of touching every component that
// consumes `images.*`.
import { withBasePath } from '@/lib/basePath';

export const images = {
  hero: withBasePath('/images/hero_banner_1786713958947.jpg'),
  shirts: withBasePath('/images/camel_shirt_1786713993994.jpg'),
  trousers: withBasePath('/images/trousers_detail_1786714009015.jpg'),
  hoodies: withBasePath('/images/urban_hoodie_1786714027613.jpg'),
  tshirts: withBasePath('/images/black_tshirt_1786714062106.jpg'),
  lookFormal: withBasePath('/images/band_collar_look_1786714045058.jpg'),
  watches: withBasePath('/images/luxury_watch_1786714094975.jpg'),
  sunglasses: withBasePath('/images/sunglasses_look_1786714112764.jpg'),
  about: withBasePath('/images/studio_boutique_1786713977572.jpg'),
  watchSteel: withBasePath('/images/watch_diver_steel_1786714919061.jpg'),
  sunglassesAcetate: withBasePath('/images/sunglasses_acetate_1786714936730.jpg'),
  beltRatchet: withBasePath('/images/belt_ratchet_black_1786714955664.jpg'),
  beltTan: withBasePath('/images/belt_tan_leather_1786714974129.jpg'),
  logo: withBasePath('/images/brand_logo_gold_1786715478587.jpg'),
  belts: withBasePath('/images/leather_belt_1786714081337.jpg'),
};

export default images;
