import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { PostCardLayout } from './style'
import { PostInfo } from './post-info'

const PostCard = ({ id, slug, featuredImage, title, date, timeToRead }) => {
  return (
    <>
      <PostCardLayout key={id}>
        <Link to={slug}>
          <Img fluid={featuredImage} />
          <h3>{title}</h3>
        </Link>
        <PostInfo date={date} timeToRead={timeToRead} />
      </PostCardLayout>
    </>
  )
}

export default PostCard
