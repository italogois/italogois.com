import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../button'
import PostCardLayout from './post-card'

const BlogListHome = () => {
  const posts = useStaticQuery(query).allMarkdownRemark.edges

  return (
    <>
      {posts.map(({ node }) => (
        <PostCardLayout
          id={node.id}
          slug={node.fields.slug}
          featuredImage={node.frontmatter.featuredImage.childImageSharp.fluid}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          timeToRead={node.timeToRead}
        />
      ))}
      <Button link="/blog/" text="ir para o blog" align="center" />
    </>
  )
}

export default BlogListHome

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
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
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
