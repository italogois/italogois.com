import React from 'react'

import { FooterLayout, SocialNetworks, SocialNetwork } from './style'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import Container from '../container'

const Footer = () => (
  <FooterLayout>
    <Container large={true}>
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
