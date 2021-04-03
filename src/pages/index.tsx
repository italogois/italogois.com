import BlogHome from '../components/blog/home/BlogHome'
import Container from 'components/container'
import Intro from '../components/intro/Intro'
import Layout from '../components/layout/Layout'
import { PostCard } from 'types/post'
import React from 'react'
import { getAllPosts } from '../lib/api'

type IndexProps = {
  latestPosts: PostCard[]
}

export default function Index({ latestPosts }: IndexProps): JSX.Element {
  return (
    <>
      <Layout>
        <Container>
          <Intro />

          <BlogHome posts={latestPosts} />
        </Container>
      </Layout>
    </>
  )
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
  const fields = ['title', 'date', 'slug', 'coverImage']
  const allPosts = getAllPosts(fields)

  const latestPosts = allPosts.slice(0, 3)

  return {
    props: { latestPosts }
  }
}
