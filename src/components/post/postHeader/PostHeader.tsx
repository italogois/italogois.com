import * as S from './styles'

import Image from 'next/image'
import { PostCard } from 'types/post'
import React from 'react'

export default function PostHeader({
  title,
  coverImage,
  date
}: PostCard): JSX.Element {
  return (
    <>
      <S.TitleWrapper>
        <h1>{title}</h1>
        <span>{date}</span>
        <S.ImageWrapper>
          <Image title={title} src={coverImage} height={500} width={1340} />
        </S.ImageWrapper>
      </S.TitleWrapper>
    </>
  )
}
