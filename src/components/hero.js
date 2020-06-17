import React from "react"
import RichText from "./richText"
import styled from "styled-components"

const HeroWrapper = styled.header`
    background: url('${props => props.backGroundImage}');
    color: #0b110f;
    height: 75vh;
    min-height: fit-content;
    background-size: cover;

    div {
        max-width: 720px;
        margin: 0px auto;
        padding: 24px;
    }
`

const Hero = props => {
  if (!props) return null

  const { title, content, backGroundImage } = props
  return (
    <HeroWrapper backGroundImage={backGroundImage}>
      <div>
        <RichText render={title} />
        <p>{content}</p>
      </div>
    </HeroWrapper>
  )
}

export default Hero
