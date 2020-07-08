import React from 'react'
import { Link } from 'gatsby'

import { Navigation, Item } from './style'

const PageNavigation = () => (
  <>
    <Navigation>
      <Item>
        <Link to="/">Início</Link>
      </Item>
      <Item>
        <Link to="/sobre/">Sobre mim</Link>
      </Item>
      <Item>
        <Link to="/blog/">Blog</Link>
      </Item>
    </Navigation>
  </>
)

export default PageNavigation
