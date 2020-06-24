import React from 'react'

import styled from 'styled-components'

import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContainerCentered from '../components/container-centered'
import BlogListHome from '../components/blog/blog-list-home'

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 6rem;
`

const IndexPage = () => (
  <Layout>
    <Header
      title="Ítalo Góis"
      description="front-end • ux • ui • acessibilidade na web"
    />
    <SEO title="Início" />
    <ContainerCentered>
      <SectionTitle>Postagens Recentes</SectionTitle>
      <BlogListHome />
    </ContainerCentered>
  </Layout>
)

export default IndexPage
