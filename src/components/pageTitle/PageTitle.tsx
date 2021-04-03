import * as S from './styles'

import React from 'react'

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
