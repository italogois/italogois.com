import React from 'react'

type PostBodyProps = {
  content: string
}

export default function PostBody({ content }: PostBodyProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
