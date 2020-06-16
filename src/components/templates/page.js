import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../layout"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            page_title
            content
            _meta {
              id
              uid
            }
          }
        }
      }
    }
  }
`

const Page = props => {
  //   console.log(props)

  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title
  const content = props.data.prismic.allPages.edges[0].node.content

  return (
    <Layout>
      <h1>{RichText.asText(pageTitle)}</h1>
      <RichText render={content} />
    </Layout>
  )
}

export default Page