import React from "react"
import { graphql } from "gatsby"
import RichText from "./../richText"

import Layout from "../layout"
import SliceZone from "../sliceZone"

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
            body {
              ... on PRISMIC_PageBodyCall_to_action_grid {
                type
                label
                fields {
                  call_to_action_title
                  content
                  featured_image
                  button_label
                  button_destination {
                    _linkType
                    ... on PRISMIC_Contact_page {
                      form_title
                      form_description
                      _meta {
                        uid
                      }
                    }
                  }
                }
                primary {
                  section_title
                }
              }
            }
          }
        }
      }
    }
  }
`

const Page = props => {
  console.log(props)

  if (!props) return null

  const docRes = props.data.prismic.allPages.edges[0].node

  const pageTitle = docRes.page_title
  const content = docRes.content
  const bodyRes = docRes.body

  const doc = props.data.prismic.allPages
  if (!doc) return null

  return (
    <Layout className="yes">
      <RichText render={pageTitle} />
      <RichText render={content} />

      {!!bodyRes && <SliceZone body={bodyRes} />}
    </Layout>
  )
}

export default Page
