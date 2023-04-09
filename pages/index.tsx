import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LinkInternal from "../components/Links/LinkInternal"
import LinkExternal from "../components/Links/LinkExternal"

const homePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next/Tailwind Starter</title>
        <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico' || './favicon.ico'} />
      </Head>

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
        <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/sitemap.xml' || '/sitemap.xml'} title="Sitemap"><p className="mt-3 text-2xl">Sitemap</p></LinkInternal>
      </div>

      <div className="flex w-full flex-row items-center justify-center text-center">
        <p className="mt-3 pr-2 text-2xl">View Error Pages: </p>
        <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/404' || '/404'} title="404 Error Page"><p className="mt-3 text-2xl">404</p></LinkInternal>
        <p className="mt-3 pl-2 pr-2 text-2xl"> and </p>
        <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/500' || '/500'} title="500 Error Page"><p className="mt-3 text-2xl">500</p></LinkInternal>
      </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div
          className="flex items-center justify-center gap-2"
        >
          <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Next+Tailwind Starter" className="no-underline"><p>Next+Tailwind Starter</p></LinkExternal> - <LinkExternal href="https://dp.design" title="Derek Perry" className="no-underline"><p>Derek Perry</p></LinkExternal>{' '}
          <Image src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="Derek Perry dp.design Logo" width={50} height={50} />
        </div>
      </footer>
    </div>
  )
}

export default homePage