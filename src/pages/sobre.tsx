import Head from 'next/head'
import Layout from '../components/layout/Layout'
import PageTitle from 'components/pageTitle'
import React from 'react'
import { SITE_NAME } from 'lib/constants'
import SmallContainer from 'components/smallContainer'

export default function About() {
  return (
    <>
      <Layout>
        <SmallContainer>
          <Head>
            <title>Sobre - {SITE_NAME}</title>
          </Head>
          <PageTitle>Sobre</PageTitle>
          <article>
            <p>Sou Ítalo Góis, um desenvolvedor front-end, nordestino.</p>
            <p>
              Comecei a desenvolver apenas por diversão criando sites e
              servidores de jogos, e nesse tempo como levava tudo apenas por
              brincadeira não tinha uma noção que existia um grande mundo em
              volta da programação.
            </p>
            <p>
              Com o passar do tempo acabei criando sites para empresas e comecei
              a me dedicar nessa área também como profissão. Comecei trabalhando
              em agências de publicidade e a alguns anos depois comecei a
              trabalhar na Ma9, no desenvolvimento de sistemas financeiro.
            </p>
            <p>
              No meio dessa caminhada de desenvolvedor front-end, acabei me
              aprofundando bastante ná aréa de experiência de usuário e criação
              de interfaces, e com tudo isso junto ajuda bastante na criação de
              novas soluções que sejam fáceis de utilizar e que acresctem algo
              na vida de alguém.
            </p>
          </article>
        </SmallContainer>
      </Layout>
    </>
  )
}
