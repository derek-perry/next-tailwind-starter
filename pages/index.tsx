import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const homePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next/Tailwind Starter</title>
        <link rel="icon" href={process.env.SITE_URL || '.' + '/favicon.ico'} />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600 hover:text-green-600" href="https://nextjs.org">
            Next.js
          </a>
          {' + '}
          <a className="text-green-600 hover:text-blue-600" href="https://tailwindcss.com">
            Tailwind
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div
          className="flex items-center justify-center gap-2"
        >
          <a className="hover:text-blue-600" href="https://github.com/derek-perry/next-tailwind-starter" target="_blank" rel="noopener noreferrer">Next+Tailwind Starter</a> - <a className="hover:text-green-600" href="https://dp.design" target="_blank" rel="noopener noreferrer">Derek Perry</a>{' '}
          <Image src={process.env.SITE_URL || '.' + '/dp.svg'} alt="Derek Perry dp.design Logo" width={50} height={50} />
        </div>
      </footer>
    </div>
  )
}

export default homePage