# Next+Tailwind Starter
### A simple starter example website set up using Next.js and Tailwind CSS.
_[Website; NEXT.js; Tailwind CSS]_

---

### Description 
This repository holds the files for a simple starter example website that uses [Next.js](https://nextjs.org "Visit the official website of Next.js at NextJS.org") and [Tailwind CSS](https://tailwindcss.com "Visit the official website of Tailwind CSS at TailwindCSS.com"). It contains readymade pages for the homepage, 404 error, and 500 error. This example uses the [Next-Sitemap npm package](https://npmjs.com/package/next-sitemap "Visit the Next-Sitemap npm package page at npmjs.com/package/next-sitemap") to generate a sitemap of created pages at post-build time. The site is static (SSG or static site generation) using [Next 14.0.1](https://nextjs.org/blog/next-14 "Read the Next.js 14 release blog post") so some [features are unsupported](https://nextjs.org/docs/app/building-your-application/deploying/static-exports "Read about how static exports affect Next functionality").

---

### Links
- **Live Example using Netlify Deploy:** [NextTailwindStarter.netlify.app](https://nexttailwindstarter.netlify.app "Visit the live, Netlify example website for the Next+Tailwind Starter, at NextTailwindStarter.netlify.app")
- **Live Example using GitHub Pages Deploy:** [derek-perry.github.io/next-tailwind-starter](https://derek-perry.github.io/next-tailwind-starter "Visit the live, Netlify example website for the Next+Tailwind Starter, at derek-perry.github.io/next-tailwind-starter")
- **Next+Tailwind Starter GitHub Repository:** [github.com/derek-perry/next-tailwind-starter](https://github.com/derek-perry/next-tailwind-starter "Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter")
- **Creator Website:** [derek-perry.com](https://derek-perry.com "Visit the website for Derek Perry, the creator of this Next+Tailwind Starter, at derek-perry.com")

---

### License Information
**[Next+Tailwind Starter](https://github.com/derek-perry/next-tailwind-starter "Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter") and the source [Next.js + Tailwind CSS Example](https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss "Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss") are licensed under the MIT License**
_(View the accompanying LICENSE file for more information on the "MIT License" license.)_
If you use [Next+Tailwind Starter](https://github.com/derek-perry/next-tailwind-starter "Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter") or [Next.js + Tailwind CSS Example](https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss "Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss"), please retain the licenses which were used in the development of [Next+Tailwind Starter](https://github.com/derek-perry/next-tailwind-starter "Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter") and [Next.js + Tailwind CSS Example](https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss "Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss").

---

### Local Development Instructions

1. Clone repository to local folder

2. Install all dependencies in that folder:

```bash
npm install
# or
yarn install
```
3. Set up local environment variables:
You must add "SITE_URL" and "NEXT_PUBLIC_SITE_URL" and "NEXT_IMAGE_ALLOWED_DOMAINS" environment key pairs/variables containing the live site url without a trailing slash!
(**Note:** This example uses the [Next-Sitemap npm package](https://npmjs.com/package/next-sitemap "Visit the Next-Sitemap npm package page at npmjs.com/package/next-sitemap") to generate a sitemap of created pages at post-build time.)
```bash
cat "./env.local" > "./env.local"
echo SITE_URL="http://localhost:3000" > "./env.local"
echo NEXT_PUBLIC_SITE_URL="http://localhost:3000" > "./env.local"
```
(**Don't Want to Use Environment Variables?** Set the hard-coded url in the next-sitemap.config.js file next to siteUrl.)

4. Run the local development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000 "Visit localhost:3000 in a local browser to view the running development server") in your browser to see the result.

6. Stop the server:
```bash
CTRL+C
# then
Y
```

7. Run a build to check for errors:
```bash
npm run build
# or
yarn build
```

---

### Deployment Tips
- Connect Deploy service to Public Repository of the website files
- If using GitHub Pages, add Repository Secret Keys (instead of Environment Variables) to the repository that matches local environment variables.
- Deploy services OTHER than GitHub: just connect repo, set to nextjs, add env vars, and deploy
	- Add Environment Variables using that deployment service's own UI or include an env file.
- Deployment Build Settings
	- Set build command to "next build && next-sitemap"
	- Set build/publish location to "out"
	- Set build environment to be next.js compatible (Set Node.js version = 18)

---

### Source Note
(**Note:** This starter example was based off an official Next.js example found here: [Next.js + Tailwind CSS Example](https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss "Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss"))

---

### Official [Next.js + Tailwind CSS Example](https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss "Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss") Description

This example shows how to use [Tailwind CSS](https://tailwindcss.com "Visit the official website of Tailwind CSS at TailwindCSS.com") [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

---

### Official [Next.js + Tailwind CSS Example](https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss "Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss") Instructions

1. Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```