import styled from 'styled-components'

export const FooterLayout = styled.footer`
  color: #fff;
  background-color: #ff9e66;
  margin-top: 10rem;
`

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.6rem;
`

export const SocialNetwork = styled.div`
  margin-left: 2.2rem;
  margin-right: 2.2rem;

  a {
    color: #feefe6;

    &:hover {
      color: #da5305;
    }
  }
`
