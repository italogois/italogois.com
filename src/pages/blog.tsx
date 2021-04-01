import Container from 'components/container'
import Feed from 'components/blog/feed'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import PageTitle from 'components/pageTitle'
import { PostCard } from 'types/post'
import React from 'react'
import { SITE_NAME } from 'lib/constants'
import { getAllPosts } from '../lib/api'

type BlogProps = {
  allPosts: PostCard[]
}

export default function Blog({ allPosts }: BlogProps): JSX.Element {
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Blog - {SITE_NAME}</title>
          </Head>
          <PageTitle>Blog</PageTitle>

          <Feed posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const fields = ['title', 'date', 'slug', 'coverImage']
  const allPosts = getAllPosts(fields)

  return {
    props: { allPosts }
  }
}
