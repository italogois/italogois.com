import React from 'react'

import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import Container from '../container'

const FooterLayout = styled.footer`
  color: #fff;
  background-color: #ff9e66;
  margin-top: 10rem;
`

const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.6rem;
`

const SocialNetwork = styled.div`
  margin-left: 2.2rem;
  margin-right: 2.2rem;

  a {
    color: #feefe6;

    &:hover {
      color: #da5305;
    }
  }
`

const Footer = () => (
  <FooterLayout>
    <Container>
      <SocialNetworks>
        <SocialNetwork>
          <a
            href="https://github.com/italogois"
            title="Github Italo Góis"
            rel="noopener"
          >
            <FaGithub />
          </a>
        </SocialNetwork>
        <SocialNetwork>
          <a
            href="https://twitter.com/italogois_"
            title="Twitter Italo Góis"
            rel="noopener"
          >
            <FaTwitter />
          </a>
        </SocialNetwork>
        <SocialNetwork>
          <a
            href="https://www.linkedin.com/in/italogois/"
            title="Linkedin Italo Góis"
            rel="noopener"
          >
            <FaLinkedinIn />
          </a>
        </SocialNetwork>
      </SocialNetworks>
    </Container>
  </FooterLayout>
)

export default Footer
