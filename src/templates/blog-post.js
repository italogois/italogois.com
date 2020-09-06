import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import { PostInfo } from '../components/blog/post-info'
import { Comments } from '../components/blog/style'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const disqusConfig = {
    identifier: post.slug,
    title: post.title,
  }

  return (
    <Layout>
      <Header title={post.frontmatter.title} />

      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        featuredImage={`https://italogois.com${featuredImgFluid.src}`}
      />

      <Container>
        <Img fluid={featuredImgFluid} />

        <PostInfo date={post.frontmatter.date} timeToRead={post.timeToRead} />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <Comments>
          <hr />
          <h3>Deixe o seu comentário</h3>
          <CommentCount config={disqusConfig} placeholder="" />
          <Disqus config={disqusConfig} />
        </Comments>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 736, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
      timeToRead
      fields {
        slug
      }
    }
  }
`
