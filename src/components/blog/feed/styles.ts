import styled from 'styled-components'

export const Feed = styled.div`
  display: grid;
  gap: ${props => props.theme.spacings.medium};
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`
