import React from 'react'

import { Header, PageTitle, PageDescription } from './style'
import Container from '../container'
import PageNavigation from './navigation'

const PageHeader = ({ title, description }) => (
  <Header>
    <Container large={true}>
      <PageNavigation />
      <PageTitle>{title}</PageTitle>
      {description && <PageDescription>{description}</PageDescription>}
    </Container>
  </Header>
)

export default PageHeader
