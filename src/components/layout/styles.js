import styled, { css } from 'styled-components'

export const Layout = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} 0;
  `}
`
