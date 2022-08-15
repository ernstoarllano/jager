import '@fontsource/big-shoulders-display/900.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="jager.vercel.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
