import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import Button from '../components/button'
import Header from '../components/header/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContainerCentered from '../components/container-centered'
import PostCardLayout from '../components/blog/post-card'

const PaginationLayout = styled.div`
  text-align: center;
`

const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const CurrentPage = styled.div`
  font-style: italic;
  margin-bottom: 2.4rem;
`

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const totalPages = pageContext.numPages
  const currentPage = pageContext.currentPage
  const prevPage = currentPage - 1 <= 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <Header title={'Blog'} />
      <SEO
        title="Blog"
        description="Conteúdo técnico sobre desenvolvimento e soft skills"
      />
      <ContainerCentered>
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

        <PaginationLayout>
          <CurrentPage>
            Você esta na página {currentPage} de {totalPages}
          </CurrentPage>

          {totalPages > 6 && (
            <Navigation>
              <Button link={prevPage} text="Anterior" />
              <Button link={nextPage} text="Próxima" />
            </Navigation>
          )}
        </PaginationLayout>
      </ContainerCentered>
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                fluid(
                  maxWidth: 736
                  maxHeight: 280
                  quality: 70
                  jpegQuality: 100
                ) {
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
