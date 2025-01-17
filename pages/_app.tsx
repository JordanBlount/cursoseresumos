import 'css/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { LayoutWrapper } from '~/components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* NOTE: Temporarily removing all analytics */}
      {/* <Analytics /> */}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
