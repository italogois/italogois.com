import styled from 'styled-components'

export const Footer = styled.footer`
  padding-bottom: ${props => props.theme.spacings.large};
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacings.large};
`

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacings.small};
  font-size: ${props => props.theme.font.sizes.large};
`
