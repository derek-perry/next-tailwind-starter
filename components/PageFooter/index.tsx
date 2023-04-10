import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  return (
      <footer className="flex w-full flex-col items-center justify-center border-t">
        <div
          className="flex items-center justify-center mt-[30px] mb-[20px]"
        >
          <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Next+Tailwind Starter GitHub" className="no-underline"><p>Next+Tailwind Starter</p></LinkExternal><p className="pr-2 pl-2"> - </p><LinkExternal href="https://dp.design" title="Derek Perry" className="no-underline"><p>Derek Perry</p></LinkExternal>
          <Image className="pl-2" src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="Derek Perry dp.design Logo" width={50} height={50} />
        </div>
      </footer>
  )
}

export default PageFooter