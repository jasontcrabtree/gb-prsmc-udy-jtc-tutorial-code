import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import RichText from "./../components/richText"

export const query = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
            form_title
            form_description
            form_fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }
`

const Form = styled.form`
  padding: 2rem 4rem;
  border: 1px solid hotpink;

  input,
  textarea {
    padding: 0.5rem;
    width: 100%;
    border-radius: 4px;
  }

  * {
    margin-bottom: 0.5rem;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 500;
  }
`

const Button = styled.input.attrs({
  type: "submit",
  value: "Submit",
  role: "button",
  ariaLabel: "Submit",
})`
  border: 1px solid hotpink;
  background: hotpink;
  font-weight: bold;

  :hover {
    background: #fa41b3;
    cursor: pointer;
  }
`

const ContactUs = props => {
  if (!props) return null
  console.log(props)

  const contactRes = props.data.prismic.allContact_pages.edges[0].node

  return (
    <Layout>
      <RichText render={contactRes.form_title} />
      <RichText render={contactRes.form_description} />
      <Form
        onSubmit={e => e.preventDefault()}
        name="contact-us"
        method="POST"
        data-netlify="true"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact-us"
          action="/contact-success"
        />
        {contactRes.form_fields.map((field, i) => {
          if (field.field_type === "textarea") {
            return (
              <div key={i}>
                <label htmlFor={field.field_name}>
                  {field.field_name}
                  <textarea
                    required={field.required === "Yes"}
                    placeholder={field.field_name}
                  />
                </label>
              </div>
            )
          } else {
            return (
              <div key={i}>
                <label htmlFor={field.field_name}>
                  {field.field_name}
                  <input
                    required={field.required === "Yes"}
                    placeholder={field.field_name}
                    type={field.field_type}
                  />
                </label>
              </div>
            )
          }
        })}
        <Button />
      </Form>
    </Layout>
  )
}

export default ContactUs
