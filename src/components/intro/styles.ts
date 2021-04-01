import styled, { css } from 'styled-components'

export const Intro = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxlarge};
    text-align: center;
  `}
`
