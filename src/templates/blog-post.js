import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import styled from 'styled-components'
import { MdAccessTime } from 'react-icons/md'
import { GoBook } from 'react-icons/go'

import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContainerCentered from '../components/container-centered'

const Comments = styled.div`
  margin-top: 5rem;
`

export const PostInfo = styled.div`
  display: flex;
  color: #987c67;
  margin-top: 0.8rem;
  margin-bottom: 2.4rem;

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

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const disqusConfig = {
    identifier: post.id,
    title: post.title,
  }

  return (
    <Layout>
      <Header title={post.frontmatter.title} />
      <SEO title={post.frontmatter.title} />
      <ContainerCentered>
        <Img fluid={featuredImgFluid} />
        <PostInfo>
          <Date>
            <MdAccessTime /> {post.frontmatter.date}
          </Date>
          <Read>
            <GoBook /> {post.timeToRead} minuto{post.timeToRead > 1 && 's'} de
            leitura
          </Read>
        </PostInfo>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Comments>
          <hr />
          <h3>Deixe o seu comentário</h3>
          <CommentCount config={disqusConfig} placeholder="" />
          <Disqus config={disqusConfig} />
        </Comments>
      </ContainerCentered>
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
            fluid(maxWidth: 736) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
