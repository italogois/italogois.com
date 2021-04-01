import * as React from 'react'
import * as S from './styles'

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps): JSX.Element {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  )
}
