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
          <PageTitle title="Sobre" />
          <article>
            <p>Sou Ítalo Góis, um desenvolvedor front-end, nordestino.</p>
            <p>
              Comecei a desenvolver apenas por diversão criando sites e
              servidores de jogos, e nesse tempo como levava tudo apenas por
              brincadeira não tinha uma noção que existia um grande mundo em
              volta da programação.
            </p>
            <p>
              Na área de desenvolvimento primeiramente atuei em agências de
              publicidade, onde fazia um pouco de tudo, porém acabei gostando do
              mundo front-end e decidi me aprofundar nessa área.
            </p>
            <p>
              No meio dessa caminhada de dev front-end gostei de aprender sobre
              experiência de usuário que também sou um grande entusiasta;
            </p>
          </article>
        </SmallContainer>
      </Layout>
    </>
  )
}
