import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { RichText } from "prismic-reactjs"

export const query = graphql`
  {
    prismic {
      _allDocuments {
        edges {
          node {
            __typename
            ... on PRISMIC_Homepage {
              hero_title
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data } = props

  console.log(props)

  // const response = data.prismic._allDocuments.edges[0].node.hero_title[0].text
  const response = data.prismic._allDocuments.edges[0].node.hero_title

  // const pageTitle = data.prismic.allPages.edges[0].node.hero_title

  console.log(response)

  if (!response) return null

  return (
    <Layout>
      <SEO title="Home" />
      <RichText render={response} />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
