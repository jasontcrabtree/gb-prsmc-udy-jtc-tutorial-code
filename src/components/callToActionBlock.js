import React from "react"
import RichText from "./richText"
import styled from "styled-components"
import { Link } from "gatsby"

const CallToActionWrapper = styled.section`
  padding: 2rem;
  background: #010010;
  border: 1px solid hotpink;

  margin-bottom: 2rem;

  .cta-block--content-parent {
    display: flex;
    align-items: center;
  }
`

const CallToActionLink = styled(props => <Link {...props} />)`
  background: hotpink;
  color: #010101 !important;
  font-weight: bold;
  border-radius: 4px;
  padding: 4px 24px;
  margin: 24px 8px;
`

const CallToActionBlock = props => {
  if (!props) return null
  const {
    title,
    content,
    buttonLabel,
    buttonDestination,
    featuredImage,
    featuredAlt,
  } = props

  return (
    <CallToActionWrapper>
      <RichText render={title} />
      <img src={featuredImage} alt={featuredAlt} />
      <div className="cta-block--content-parent">
        <RichText render={content} />
        <CallToActionLink to={buttonDestination}>
          {buttonLabel}
        </CallToActionLink>
      </div>
    </CallToActionWrapper>
  )
}

export default CallToActionBlock
