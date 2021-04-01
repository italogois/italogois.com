import * as S from './styles'

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import Container from '../container'
import { IconBaseProps } from 'react-icons/lib'
import React from 'react'

export default function Footer(): JSX.Element {
  type SocialNetwork = {
    name: string
    uri: string
    icon: IconBaseProps
  }

  const socialNetwork: SocialNetwork[] = [
    {
      name: 'Github',
      uri: 'https://github.com/italogois',
      icon: <FaGithub />
    },
    {
      name: 'Linkedin',
      uri: 'https://www.linkedin.com/in/italogois/',
      icon: <FaLinkedinIn />
    },
    {
      name: 'Twitter',
      uri: 'https://twitter.com/italogois_',
      icon: <FaTwitter />
    }
  ]

  return (
    <S.Footer>
      <Container>
        <S.Title>Vamos Conversar?</S.Title>
        <S.SocialNetworks>
          {socialNetwork.map(social => (
            <a
              key={social.name}
              href={social.uri}
              title={social.name}
              rel="noopener"
            >
              {social.icon}
            </a>
          ))}
        </S.SocialNetworks>
      </Container>
    </S.Footer>
  )
}
