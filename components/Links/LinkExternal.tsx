import { FC } from 'react'
import Link from 'next/link'

interface ILinkExternalProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkExternal: FC<ILinkExternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target="_blank" rel="noopener noreferrer" className={"underline hover:text-green-600 " + className}>
        {children}
    </Link>
  )
}

export default LinkExternal