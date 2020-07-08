import React from 'react'
import { Link } from 'gatsby'

import { ButtonLink } from './style'

const Button = ({ align, link, text }) => (
  <>
    <ButtonLink align={align}>
      <Link to={link}>{text}</Link>
    </ButtonLink>
  </>
)

export default Button
