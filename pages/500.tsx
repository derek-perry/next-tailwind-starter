import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const error500Page: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Error 500: Internal Server Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600 hover:text-green-600" href="/">
            Error 500: Internal Server Error
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-3 hover:text-green-600"
          href="https://dp.design/?source=next-tailwind-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Derek Perry{' '}
          <Image src="/dp.svg" alt="Derek Perry dp.design Logo" width={50} height={50} />
        </a>
      </footer>
    </div>
  )
}

export default error500Page