import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"

const error404Page: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <SiteHead title="Error 404: Content Not Found" description="The page/content you are looking for has moved, is no longer available, has been archived, or was not valid." url="404" />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex w-full flex-row items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-red-600">Error 404: Content Not Found</h1>
        </div>

        <p className="my-4 text-2xl">
          The page/content you are looking for has moved, is no longer available, has been archived, or was not valid.
        </p>

        <p className="my-4 text-2xl">
          <LinkInternal href="" title="Return to Index Page">Go Home</LinkInternal>
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default error404Page