export type PostCard = {
  slug: string
  title: string
  coverImage: string
  date: string
}

export type PostFull = {
  slug: string
  title: string
  coverImage: string
  date: string
  ogImage: { url: string }
  content: string
}
