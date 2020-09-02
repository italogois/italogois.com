// Gatsby supports TypeScript natively!
import React from 'react'

import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const SecondPage = () => (
  <Layout>
    <Header title={'Sobre mim'} />
    <SEO
      title="Sobre mim"
      description="Sou Ítalo Góis, um desenvolvedor front-end, nordestino que mora em
        Aracaju."
    />
    <Container>
      <p>
        Sou Ítalo Góis, um desenvolvedor front-end, nordestino que mora em
        Aracaju.
      </p>
      <p>
        Comecei a desenvolver apenas por diversão criando sites e servidores de
        jogos, e nesse tempo como levava tudo apenas por brincadeira não tinha
        uma noção que existia um grande mundo em volta da programação.
      </p>
      <p>
        Com o passar do tempo acabei criando sites para empresas e comecei a me
        dedicar nessa área também como profissão. Comecei trabalhando em
        agências de publicidade e a alguns anos depois comecei a trabalhar na
        Ma9, no desenvolvimento de sistemas financeiro.
      </p>
      <p>
        No meio dessa caminhada de desenvolvedor front-end, acabei me
        aprofundando bastante ná aréa de experiência de usuário e criação de
        interfaces, e com tudo isso junto ajuda bastante na criação de novas
        soluções que sejam fáceis de utilizar e que acresctem algo na vida de
        alguém.
      </p>
    </Container>
  </Layout>
)

export default SecondPage
