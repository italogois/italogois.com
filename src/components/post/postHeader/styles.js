import styled from 'styled-components'

export const TitleWrapper = styled.div`
  text-align: center;

  h2 {
    margin-bottom: ${props => props.theme.spacings.xsmall};
  }
`

export const ImageWrapper = styled.div`
  margin: ${props => props.theme.spacings.medium} 0;
`
