import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import CallToActionBlock from "./callToActionBlock"

const CallToActionGridWrapper = styled.section`
  max-width: 880px;
  margin: 2rem auto;
`

const CallToActionGrid = props => {
  if (!props) return null

  const { title, callToActions } = props

  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      {callToActions.map((callToAction, i) => {
        return (
          <CallToActionBlock
            key={i}
            title={callToAction.call_to_action_title}
            content={callToAction.content}
            buttonLabel={callToAction.button_label}
            buttonDestination={`/${callToAction.button_destination._meta.uid}`}
            featuredImage={callToAction.featured_image.url}
            featuredAlt={callToAction.featured_image.alt}
          />
        )
      })}
    </CallToActionGridWrapper>
  )
}

export default CallToActionGrid
