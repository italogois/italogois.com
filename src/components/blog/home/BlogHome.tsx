import * as S from './styles'

import Feed from '../feed'
import { PostCard } from 'types/post'
import React from 'react'

type BlogHomeProps = {
  posts: PostCard[]
}

export default function BlogHome({ posts }: BlogHomeProps) {
  return (
    <>
      <S.Title>Postagens Recentes</S.Title>
      <Feed posts={posts} />
    </>
  )
}
