import '@fontsource/big-shoulders-display/900.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
