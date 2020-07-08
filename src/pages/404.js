import React from 'react'

import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const NotFoundPage = () => (
  <Layout>
    <Header title="Página não encontrada" />
    <SEO title="Página não encontrada" description="Esta página não existe" />
    <Container>
      <h2>Ops, essa página não existe</h2>
    </Container>
  </Layout>
)

export default NotFoundPage
