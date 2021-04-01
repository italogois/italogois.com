import * as React from 'react'
import * as S from './styles'

type PageTitleProps = {
  children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps): JSX.Element {
  return (
    <>
      <S.PageTitle>{children}</S.PageTitle>
    </>
  )
}
