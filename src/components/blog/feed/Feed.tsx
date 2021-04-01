import * as S from './styles'

import { PostCard } from 'types/post'
import PostPreview from '../postPreview/PostPreview'

type FeedProps = {
  posts: PostCard[]
}

export default function Feed({ posts }: FeedProps): JSX.Element {
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
