import React from 'react'

import styled from 'styled-components'

import Container from '../container'
import PageNavigation from './navigation'
import BackgroundAfter from '../../images/header-after.svg'

const Header = styled.header`
  background-color: #f79d69;
  text-align: center;
  position: relative;
  margin-bottom: 6rem;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 6.7rem;
    background-image: url(${BackgroundAfter});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media only screen and (min-width: 51rem) {
    margin-bottom: 13rem;

    &:after {
      height: 19.7rem;
    }
  }
`

const PageTitle = styled.h1`
  color: #491c01;
  margin-top: 5.2rem;
`

const PageDescription = styled.h3`
  color: #491c01;
  margin-bottom: 5.2rem;
`

const PageHeader = ({ title, description }) => (
  <Header>
    <Container>
      <PageNavigation />
      <PageTitle>{title}</PageTitle>
      {description && <PageDescription>{description}</PageDescription>}
    </Container>
  </Header>
)

export default PageHeader
