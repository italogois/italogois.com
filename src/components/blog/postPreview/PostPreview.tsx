import * as S from './styles'

import Image from 'next/image'
import Link from 'next/link'
import { PostCard } from 'types/post'
import React from 'react'
import { formatDate } from 'utils/dateFormater'

export default function PostPreview({
  title,
  coverImage,
  date,
  slug
}: PostCard) {
  return (
    <>
      <div>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>
            <Image
              title={title}
              src={coverImage}
              objectFit={'cover'}
              height={300}
              width={700}
            />
          </a>
        </Link>
        <S.PostTitle>
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>{title}</a>
          </Link>
        </S.PostTitle>
        <div>
          <S.Date>{formatDate(date)}</S.Date>
        </div>
      </div>
    </>
  )
}
