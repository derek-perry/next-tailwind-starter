import type { NextPage } from 'next'
import PageHead from "../components/PageHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"

const error500Page: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <PageHead title="Error 500: Internal Server Error" description="The server encountered an internal error or misconfiguration and was unable to complete your request." url="500" />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex w-full flex-row items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-red-600">Error 500: Internal Server Error</h1>
        </div>

        <p className="my-4 text-2xl">
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>

        <p className="my-4 text-2xl">
          <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/' || '/'} title="Return to Index Page">Go Home</LinkInternal>
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default error500Page