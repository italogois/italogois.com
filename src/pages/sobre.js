// Gatsby supports TypeScript natively!
import React from 'react'

import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContainerCentered from '../components/container-centered'

const SecondPage = () => (
  <Layout>
    <Header title={'Sobre mim'} />
    <SEO
      title="Sobre mim"
      description="Sou Ítalo Góis, um desenvolvedor front-end, nordestino que mora em
        Aracaju."
    />
    <ContainerCentered>
      <p>
        Sou Ítalo Góis, um desenvolvedor front-end, nordestino que mora em
        Aracaju.
      </p>
      <p>
        Comecei a desenvolver profissionalemnte como backend, mas com o tempo
        isso começou a não me encantar tanto, porque de certa forma eu sentia
        falta da aproximação as pessoas, normalmente os desenvolvedores não
        utilizariam o termo "pessoas" e sim "usuários". E tenho um bom motivo
        para não utilizar o termo "usuários", que foi o motivo de começar a
        migrar meus estudos e trabalhos para o Front-end.
      </p>
      <h3>Motivação para ser um desenvolvedor Front-end</h3>
      <p>
        Meu intuito com programação sempre foi ajudar e facilitar a vida das
        pessoas que navegam em algum site ou utilizam algum produto
        digital(sistemas, apps, etc..) e quando eu comecei a estudar as
        tecnologias Front-end vi que eu conseguia ser mais efetivo em meus
        objetivos, porque o Front-end é o que a pessoa ao acessar um site ou um
        produto digital vai ter contato.
      </p>
      <p>
        Em conjunto com essa tecnologia que me possibilita criar interações e
        micro interações entre a pessoa e o que ela estiver acessando, seja na
        web ou no mobile, também posso trabalhar a experiência que a pessoa vai
        ter ao acessar determinado conteúdo.
      </p>
      <h3>UX Design (Experiência de usuário)</h3>
      <p>
        Essa área de estudo que é conhecida como experiência de usuário, é a
        chave que ajuda em trabalho o desenvolvimento Front-end a melhorar a
        forma que as pessoas utilizam determinado sistema ou site
      </p>
      <p>
        É possível estudar comportamentos de pessoas para conseguir otimizar as
        soluções, dando um melhor direcionamento ao navegar em uma página,
        fazendo com que ela encontre as coisas mais rápido, dando uma hierarquia
        visual para que tudo siga um determinado padrão, etc...
      </p>
      <p>
        E para as empresas acaba aumentando a relação delas com os as pessoas
        que consomem seus serviços, trazendo um maior retorno e visibilidade
        para a empresa
      </p>
      <p>
        É importante lembrar que unindo os estudos de UX Design, e
        desenvolvimento Front-end, tambéms podemos levar conteúdo pensando em
        acessibilidade, porque como no mundo físico tem que ter mobilidade para
        pessoas com algum tipo de deficiência, no mundo digital também temos
        essa responsabilidade, de levar o conteúdo para todos os tipos de
        pessoas.
      </p>
    </ContainerCentered>
  </Layout>
)

export default SecondPage
