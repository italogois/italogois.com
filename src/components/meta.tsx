import { HOME_OG_IMAGE_URL, SITE_NAME } from '../lib/constants'

import Head from 'next/head'
import React from 'react'

export default function Meta() {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-167954928-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-167954928-1');
        `
        }}
      ></script>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`${SITE_NAME} - Desenvolvedor Front-end.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
