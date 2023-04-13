import Image from 'next/image'
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number=new Date().getFullYear();

  return (
      <footer className="mt-9 pt-[40px] pb-[35px] w-full flex flex-row flex-wrap items-center justify-center border-t">
          <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Next+Tailwind Starter GitHub" className="no-underline">
            <p>© {currentYear} Next+Tailwind Starter</p>
          </LinkExternal>
          <p className="pr-2 pl-2"> - </p>
          <LinkExternal href="https://dp.design" title="Derek Perry" className="no-underline flex flex-row">
            <p>Website by Derek Perry <Image className="pl-2 inline" src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="Derek Perry dp.design Logo" width={33} height={33} /></p>
          </LinkExternal>
      </footer>
  )
}

export default PageFooter