import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  a {
    color: #feefe6;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1.6rem;
  }
`

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
