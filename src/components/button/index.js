import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const ButtonLink = styled.div`
  text-align: ${({ align }) => align ?? 'initial'};

  a {
    background: #f36c1e;
    color: #fff;
    text-decoration: none;
    padding: 0.8rem 2.4rem;
    border-radius: 0.7rem;

    &:hover {
      background-color: #da5305;
    }
  }
`

const Button = ({ align, link, text }) => (
  <>
    <ButtonLink align={align}>
      <Link to={link}>{text}</Link>
    </ButtonLink>
  </>
)

export default Button
