import * as S from './styles'

import Image from 'next/image'
import { PostCard } from 'types/post'
import React from 'react'
import { formatDate } from 'utils/dateFormater'

type PostHeaderProps = Omit<PostCard, 'slug'>

export default function PostHeader({
  title,
  coverImage,
  date
}: PostHeaderProps) {
  return (
    <>
      <S.TitleWrapper>
        <h1>{title}</h1>
        <span>{formatDate(date)}</span>
        <S.ImageWrapper>
          <Image
            title={title}
            src={coverImage}
            objectFit={'cover'}
            height={500}
            width={1340}
          />
        </S.ImageWrapper>
      </S.TitleWrapper>
    </>
  )
}
