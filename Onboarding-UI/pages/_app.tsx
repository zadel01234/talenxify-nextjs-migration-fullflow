import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ONboarding-UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Inter:500,400,900|Mulish:700,600,800,italic" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}