// Centralized GitHub Pages base path.
//
// This repo is deployed to https://junedpathan786.github.io/fashion-studio/,
// i.e. under the /fashion-studio sub-path rather than the domain root.
// Next.js automatically prefixes anything it manages itself (bundled
// _next/* JS/CSS via `assetPrefix`, and <Link>/router URLs via
// `basePath`), but it does NOT rewrite plain string paths such as
// `<img src="/images/foo.jpg">` or metadata `icons.icon` — those are
// just strings as far as Next is concerned.
//
// REPO_NAME/BASE_PATH is imported by next.config.ts (to configure
// `basePath`/`assetPrefix`) AND by src/assets/imageImports.ts and
// src/app/layout.tsx (to build correct URLs to files in /public).
// Keeping one source of truth means the repo name only ever has to be
// changed in one place.
export const REPO_NAME = 'fashion-studio';

export const BASE_PATH = `/${REPO_NAME}`;

/**
 * Prefix a root-relative public asset path (e.g. "/images/foo.jpg")
 * with the GitHub Pages base path, so it resolves correctly both in
 * `next dev` and on the deployed site.
 */
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
