import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"

const Error404Page: NextPage = () => {
  return (
    <div className="py-2 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Error 404: Content Not Found" description="The page/content you are looking for has moved, is no longer available, has been archived, or was not valid." url="404" />

      <main className="py-9 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-red-600">Error 404: Content Not Found</h1>

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

export default Error404Page