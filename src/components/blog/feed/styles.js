import styled from 'styled-components'

export const Feed = styled.div`
  display: grid;
  gap: ${props => props.theme.spacings.medium};
  grid-template-columns: repeat(auto-fit, minmax(min(74vw, 23rem), 1fr));
`
