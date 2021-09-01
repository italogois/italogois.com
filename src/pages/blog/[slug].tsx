import { getAllPosts, getPostBySlug } from '../../lib/api'

import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import PostBody from 'components/post/postBody/PostBody'
import { PostFull } from 'types/post'
import PostHeader from 'components/post/postHeader/PostHeader'
import React from 'react'
import { SITE_NAME } from '../../lib/constants'
import SmallContainer from 'components/smallContainer'
import markdownToHtml from '../../lib/markdownToHtml'
import { useRouter } from 'next/router'

type PostProps = {
  post: PostFull
}

type ParamsStaticProps = {
  params: { slug: string }
}

export default function Post({ post }: PostProps) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <SmallContainer>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {SITE_NAME}
                </title>
                <meta property="og:image" content={post.coverImage} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </SmallContainer>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ params }: ParamsStaticProps) {
  const fields = [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]

  const post = getPostBySlug(params.slug, fields)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
