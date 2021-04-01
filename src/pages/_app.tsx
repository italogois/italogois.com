import 'prismjs/themes/prism-tomorrow.css'

import GlobalStyle from 'styles/global.styles'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export default function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Italo Góis</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
