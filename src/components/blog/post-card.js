import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { MdAccessTime } from 'react-icons/md'
import { GoBook } from 'react-icons/go'

export const PostCard = styled.div`
  margin-bottom: 2.6rem;
  padding-bottom: 2.6rem;
  border-bottom: 1px solid #eeeeee;
  flex-direction: column;

  a {
    color: #f36c1e;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #da5305;
    }
  }

  @media only screen and (min-width: 51rem) {
    flex-direction: row;
  }
`

export const PostInfo = styled.div`
  display: flex;
  color: #987c67;
  margin-top: 0.8rem;

  svg {
    margin-right: 0.3rem;
  }
`

export const Date = styled.div`
  display: flex;
  align-items: center;
  font-style: italic;
  margin-right: 2.4rem;
`

export const Read = styled.div`
  display: flex;
  align-items: center;
`

const PostCardLayout = ({
  id,
  slug,
  featuredImage,
  title,
  date,
  timeToRead,
}) => {
  return (
    <>
      <PostCard key={id}>
        <Link to={slug}>
          <Img fluid={featuredImage} />
          <h3>{title}</h3>
        </Link>
        <PostInfo>
          <Date>
            <MdAccessTime /> {date}
          </Date>
          <Read>
            <GoBook /> {timeToRead} minuto{timeToRead > 1 && 's'} de leitura
          </Read>
        </PostInfo>
      </PostCard>
    </>
  )
}

export default PostCardLayout
