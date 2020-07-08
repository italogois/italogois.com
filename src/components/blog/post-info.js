import React from 'react'

import { MdAccessTime } from 'react-icons/md'
import { GoBook } from 'react-icons/go'

import { PostInfoLayout, Date, Read } from './style'

export const PostInfo = ({ date, timeToRead }) => {
  return (
    <>
      <PostInfoLayout>
        <Date>
          <MdAccessTime /> {date}
        </Date>
        <Read>
          <GoBook /> {timeToRead} minuto{timeToRead > 1 && 's'} de leitura
        </Read>
      </PostInfoLayout>
    </>
  )
}

export default PostInfo
