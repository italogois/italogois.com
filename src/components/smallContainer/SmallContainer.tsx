import * as S from './styles'

import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export default function SmallContainer({ children }: ContainerProps) {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  )
}
