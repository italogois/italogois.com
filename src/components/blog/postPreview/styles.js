import styled from 'styled-components'

export const PostTitle = styled.h4`
  margin: ${props => props.theme.spacings.xxsmall} 0;
  font-weight: 400;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`

export const Date = styled.span`
  font-size: ${props => props.theme.font.sizes.xxsmall};
`
