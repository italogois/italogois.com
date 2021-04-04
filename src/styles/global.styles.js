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

    html, .root {
      font-family: ${theme.font.openSans};
      font-size: ${theme.font.sizes.base};
      scroll-behavior: smooth;
    }

    body {
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.xsmall};
      background-image: radial-gradient(at top left,#222831,transparent), radial-gradient(at top right,#2a273d,transparent), radial-gradient(at bottom left,#2a323d,rgb(0 0 0 / 64%));
    background-size: 100% 100%;
    background-repeat: no-repeat;
    }
    }

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: ${theme.spacings.small};
      font-weight: 700;
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.large};

    }

    h3 {
      font-size: ${theme.font.sizes.medium};
    }

    h4 {
      font-size: ${theme.font.sizes.small};
    }

    a {
      color: ${theme.colors.primary};
      transition: all 200ms ease-in;

      &:hover {
        color: #d45e3e;
        transition: all 200ms ease-out;
      }
    }

    img {
      max-width: 100%
    }

    article p {
      font-family: ${theme.font.lusitana};
      line-height: ${theme.spacings.xsmall};
      margin-bottom: ${theme.spacings.xsmall};
    }

    article ul {
      margin-left: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xsmall};
      font-family: ${theme.font.lusitana};
    }

    article img {
      margin: 0 auto;
      display: block;
    }
  `}

`

export default GlobalStyle
