# Fashion Studio 47 — Next.js + TypeScript

This is the original Vite + React app converted to **Next.js 16 (App Router) + TypeScript**.
No components, data, or design were rewritten — every file under `src/components`,
`src/data`, `src/hooks`, and `src/types.ts` is byte-for-byte the same as the original.

## What changed (and why it had to)

Only the framework "glue" was touched — the parts that are inherently bundler-specific
and can't stay identical across Vite and Next.js:

| File | Change | Reason |
|---|---|---|
| `src/App.tsx` | Added `'use client'` at the top | Next.js Server Components can't use `useState`/`window`/`document`. Adding this one directive to the root component makes the whole tree (which it imports) a Client Component boundary, exactly like the Vite build where everything ran client-side — no other component needed edits. |
| `src/assets/imageImports.ts` | Now exports plain `/images/...` string paths instead of `import x from './images/x.jpg'` | Vite's image imports resolve to a plain string URL. Next.js's static image imports instead resolve to a `StaticImageData` object, which would break every `<img src={images.x} />` call in the components. Serving the same files from `public/images/` keeps the `images.hero`, `images.shirts`, etc. API identical, so no component code changes. |
| `index.html` → `src/app/layout.tsx` + `src/app/page.tsx` | Vite's single HTML shell became Next's root layout/page | Next.js doesn't use an `index.html`; the `<head>` metadata, Google Fonts links, and `<body>` classes were moved into `layout.tsx` as-is, and `page.tsx` just renders `<App />` (equivalent to `main.tsx` mounting `<App />` into `#root`). |
| `src/index.css` → `src/app/globals.css` | Renamed/relocated only | Same Tailwind v4 `@import` syntax, same content. |
| Build config (`vite.config.ts`, `tsconfig.json`) → `next.config.ts`, `postcss.config.mjs`, `tsconfig.json` | Rebuilt for Next.js/Turbopack + Tailwind v4's PostCSS plugin (`@tailwindcss/postcss` instead of `@tailwindcss/vite`) | Vite-specific plugins have no Next.js equivalent import path. |
| `package.json` | Swapped `vite`/`@vitejs/plugin-react`/`@tailwindcss/vite` for `next`/`@tailwindcss/postcss`; dropped `express`, `@google/genai`, `dotenv`, `tsx` | Those four were unused AI-Studio scaffolding dependencies (nothing in `src/` imported them) so they were left out rather than carried over dead. |
| `.env.example` | Removed | It only documented `GEMINI_API_KEY`/`APP_URL` for the old AI Studio host — neither is read anywhere in the code. Let me know if you actually need env vars wired up and I'll add them back with `NEXT_PUBLIC_` prefixes where relevant. |

Everything else — every component's JSX, styling, copy, business logic in
`fashionData.ts`, the Lenis smooth-scroll hook, modal behavior — is unchanged.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx     # replaces index.html <head>/<body>
    page.tsx       # replaces main.tsx (renders <App />)
    globals.css    # replaces index.css
  App.tsx           # unchanged except 'use client'
  components/       # unchanged
  data/             # unchanged
  hooks/            # unchanged
  assets/
    imageImports.ts # now points at /public/images
  types.ts          # unchanged
public/
  images/           # the same 16 images, now served statically
  logo.png
```
