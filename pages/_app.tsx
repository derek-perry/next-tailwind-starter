import '../styles/globals.css'
import type { AppProps } from 'next/app'

function nextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default nextApp