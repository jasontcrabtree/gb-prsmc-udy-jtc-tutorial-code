import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

const HeroWrapper = styled.header`
    background: url('${props => props.backGroundImage}');
    color: #0b110f;
    height: 100vh;
    background-size: cover;

    div {
        max-width: 640px;
        margin: 0px auto;
        padding: 72px 24px;
    }
`

const Hero = ({ title, content, backGroundImage }) => {
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
