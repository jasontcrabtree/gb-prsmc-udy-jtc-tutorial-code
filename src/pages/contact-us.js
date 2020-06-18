import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from './../components/richText';

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
`;

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
`;

const Button = styled.input.attrs({
  type: 'submit',
  value: 'Submit',
  role: 'button',
  ariaLabel: 'Submit',
})`
  border: 1px solid hotpink;
  background: hotpink;
  font-weight: bold;

  :hover {
    background: #fa41b3;
    cursor: pointer;
  }
`;

const ContactUs = props => {
  if (!props) return null;

  const prismicContent = props.data.prismic.allContact_pages.edges[0];
  if (!prismicContent) return null;

  const document = prismicContent.node;
  if (!document) return null;

  return (
    <Layout>
      <RichText render={document.form_title} />
      <RichText render={document.form_description} />
      <Form
        method="post"
        name="contact-us"
        form-name="contact-us"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <input
          aria-label="hidden"
          htmlFor="hidden"
          type="hidden"
          name="form-name"
          value="contact-us"
          action="/contact-success"
        />
        {document.form_fields.map((field, i) => {
          if (field.field_type === 'textarea') {
            return (
              <div key={i}>
                <label name={field.field_name} htmlFor={field.field_name}>
                  {field.field_name}
                  <textarea
                    name={field.field_name}
                    id={field.field_name}
                    required={field.required === 'Yes'}
                    placeholder={field.field_name}
                    aria-label={field.field_name}
                  />
                </label>
              </div>
            );
          } else {
            return (
              <div key={i}>
                <label name={field.field_name} htmlFor={field.field_name}>
                  {field.field_name}
                  <input
                    name={field.field_name}
                    aria-label={field.field_name}
                    id={field.field_name}
                    required={field.required === 'Yes'}
                    placeholder={field.field_name}
                    type={field.field_type}
                  />
                </label>
              </div>
            );
          }
        })}
        <Button role="button" aria-label="Submit" />
      </Form>
    </Layout>
  );
};

export default ContactUs;
