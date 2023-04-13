import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"
import LinkExternal from "../components/Links/LinkExternal"

const homePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <SiteHead title="Next/Tailwind Starter" description="Next/Tailwind Starter is a simple starter example website set up using Next.js and Tailwind CSS." url="" />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="flex w-full flex-row items-center justify-center text-center">
        <LinkExternal href="https://nextjs.org" title="Next.js" className="no-underline text-blue-600">
          <h1 className="text-6xl font-bold">Next.js</h1>
        </LinkExternal>
        <h1 className="text-6xl font-bold">{' + '}</h1>
        <LinkExternal href="https://tailwindcss.com" title="Tailwind CSS" className="no-underline text-green-600 hover:text-red-600">
          <h1 className="text-6xl font-bold">Tailwind</h1>
        </LinkExternal>
      </div>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

      <div className="flex w-full flex-row items-center justify-center text-center">
        <p className="mt-3 pr-2 text-2xl">View </p>
        <LinkInternal href="sitemap.xml" title="Sitemap"><p className="mt-3 text-2xl">Sitemap</p></LinkInternal>
      </div>

      <div className="flex w-full flex-row items-center justify-center text-center">
        <p className="mt-3 pr-2 text-2xl">View Error Pages: </p>
        <LinkInternal href="404" title="404 Error Page"><p className="mt-3 text-2xl">404</p></LinkInternal>
        <p className="mt-3 pl-2 pr-2 text-2xl"> and </p>
        <LinkInternal href="500" title="500 Error Page"><p className="mt-3 text-2xl">500</p></LinkInternal>
      </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage