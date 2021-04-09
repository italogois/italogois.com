import * as S from './styles'

import React from 'react'

type PageTitleProps = {
  title: string
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <>
      <S.PageTitle>{title}</S.PageTitle>
    </>
  )
}
