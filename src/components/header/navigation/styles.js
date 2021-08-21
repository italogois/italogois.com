import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: clamp(3.7rem, 10vw, 13rem);
  padding: ${props => props.theme.spacings.xsmall} 0;

  a {
    color: ${props => props.theme.colors.texts};
    text-decoration: none;
    border-bottom: 0 solid transparent;
    padding-bottom: 0.5rem;
    position: relative;
    transition: all 200ms ease-in;

    &:hover {
      color: ${props => props.theme.colors.primary};
      transition: all 200ms ease-out;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0.1rem;
        width: 100%;
        background-color: ${props => props.theme.colors.primary};
      }
    }
  }
`
