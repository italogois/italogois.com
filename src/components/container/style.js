import styled from 'styled-components'

export const ContainerLayout = styled.div`
  margin: 0 auto;
  max-width: ${({ large }) => (large ? '69rem' : '46rem')};
  padding: 1.45rem 1.0875rem;
`
