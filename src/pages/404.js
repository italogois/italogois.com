import React from 'react'

import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContainerCentered from '../components/container-centered'

const NotFoundPage = () => (
  <Layout>
    <Header title="Página não encontrada" />
    <SEO title="Início" />
    <ContainerCentered>
      <h2>Ops, essa página não existe</h2>
    </ContainerCentered>
  </Layout>
)

export default NotFoundPage
