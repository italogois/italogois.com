import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      vertical-align: baseline;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-family: ${theme.font.openSans};
      font-size: ${theme.font.sizes.base};
      scroll-behavior: smooth;
    }

    body {
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.small};
      background-image: radial-gradient(at top left,#222831,transparent), radial-gradient(at top right,#2a273d,transparent), radial-gradient(at bottom left,#2a323d,rgb(0 0 0 / 64%));
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.large};
      font-weight: 600;
    }

    a {
      color: ${theme.colors.primary};
      transition: all 200ms ease-in;

      &:hover {
        color: #d45e3e;
        transition: all 200ms ease-out;
      }
    }

    article p {
      font-family: ${theme.font.lusitana};
      line-height: ${theme.spacings.xsmall};
      margin-bottom: ${theme.spacings.medium}
    }
  `}

`

export default GlobalStyle
