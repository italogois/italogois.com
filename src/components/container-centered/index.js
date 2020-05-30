import React from 'react'

import styled from 'styled-components'

const ContainerCenteredLayout = styled.div`
  margin: 0 auto;
  max-width: 46rem;
  padding: 1.45rem 1.0875rem;
`

const ContainerCentered = ({ children }) => (
  <>
    <ContainerCenteredLayout>{children}</ContainerCenteredLayout>
  </>
)

export default ContainerCentered
