type PostBodyProps = {
  content: string
}

export default function PostBody({ content }: PostBodyProps): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
