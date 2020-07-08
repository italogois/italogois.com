import React from 'react'

import { ContainerLayout } from './style'

const Container = ({ large, children }) => (
  <ContainerLayout large={large}>{children}</ContainerLayout>
)

export default Container
