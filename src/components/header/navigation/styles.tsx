import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 13rem;
  padding: ${props => props.theme.spacings.xsmall} 0;

  a {
    color: ${props => props.theme.colors.texts};
    text-decoration: none;
    border-bottom: 0 solid transparent;
    padding-bottom: 0.5rem;
    transition: all 200ms ease-in;

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-bottom: 0.3rem solid ${props => props.theme.colors.primary};
      transition: all 200ms ease-out;
    }
  }
`
