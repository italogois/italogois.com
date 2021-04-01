import * as S from './styles'

import React, { useEffect } from 'react'

import Footer from '../footer'
import Header from '../header'
import Meta from '../meta'

type LayoutProps = {
  children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prism = require('prismjs')
require('prismjs/components/prism-python')

export default function Layout({ children }: LayoutProps): JSX.Element {
  useEffect(() => {
    prism.highlightAll()
  }, [])
  return (
    <>
      <Meta />
      <Header />
      <S.Layout>
        <main>{children}</main>
      </S.Layout>
      <Footer />
    </>
  )
}
