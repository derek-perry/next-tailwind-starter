import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LinkInternal from "../components/Links/LinkInternal"
import LinkExternal from "../components/Links/LinkExternal"

const error500Page: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Error 500: Internal Server Error</title>
        <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico' || './favicon.ico'} />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-red-600">
          <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/' || '/'} title="Return to Index Page">Error 500: Internal Server Error</LinkInternal>
        </h1>

        <p className="mt-3 text-2xl">
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>
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

export default error500Page