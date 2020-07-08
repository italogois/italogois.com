import React from 'react'

import Footer from '../footer'
import GlobalStyle from '../../styles/GlobalStyle'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
