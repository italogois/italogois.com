import React from 'react'

import styled from 'styled-components'

const ContainerLayout = styled.div`
  margin: 0 auto;
  max-width: 69rem;
  padding: 1.45rem 1.0875rem;
`

const Container = ({ children }) => (
  <>
    <ContainerLayout>{children}</ContainerLayout>
  </>
)

export default Container
