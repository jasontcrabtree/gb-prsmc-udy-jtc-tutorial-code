import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                label
                primary {
                  hero_subheading
                  hero_title
                  hero_image
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid {
                type
                label
                primary {
                  grid_title
                }
                fields {
                  content
                  featured_image
                  call_to_action_title
                  button_label
                  button_destination {
                    _linkType
                    ... on PRISMIC_Page {
                      page_title
                      content
                      _meta {
                        uid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  // console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )
}

export default IndexPage
