import * as S from './styles'

import { PostCard } from 'types/post'
import PostPreview from '../postPreview/PostPreview'
import React from 'react'

type FeedProps = {
  posts: PostCard[]
}

export default function Feed({ posts }: FeedProps) {
  return (
    <S.Feed>
      {posts.map((post: PostCard) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </S.Feed>
  )
}
