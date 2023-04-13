import { FC } from 'react'
import Head from 'next/head'

interface ISiteHeadProps {
  title: string;
  description: string;
  url: string;
}

const SiteHead: FC<ISiteHeadProps> = ({
  title,
  description,
  url
}): JSX.Element => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      <meta property="og:title" key="title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + '/' + url || 'https://NextTailwindStarter.netlify.app'} />
      <meta property="og:site_name" content="Next/Tailwind Starter" />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.jpg' || 'https://NextTailwindStarter.netlify.app/banner.jpg'} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Banner for NextTailwindStarter.netlify.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_derekperry" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.jpg' || 'https://NextTailwindStarter.netlify.app/banner.jpg'} />
      <meta name="twitter:image:width" content="1920" />
      <meta name="twitter:image:height" content="1080" />
      <meta name="twitter:image:alt" content="Banner for NextTailwindStarter.netlify.app" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://NextTailwindStarter.netlify.app'} />

      <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico' || 'https://NextTailwindStarter.netlify.app/favicon.ico'} />
      <link rel="manifest" href={process.env.NEXT_PUBLIC_SITE_URL + '/manifest.webmanifest' || 'https://NextTailwindStarter.netlify.app/manifest.webmanifest'} />
      <meta name="apple-mobile-web-app-title" content="Next/Tailwind Starter" />
      <meta name="application-name" content="Next/Tailwind Starter" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </Head>
  )
}

export default SiteHead