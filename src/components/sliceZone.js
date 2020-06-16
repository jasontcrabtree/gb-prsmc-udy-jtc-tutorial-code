import React from "react"
import Hero from "./hero"

const SliceZone = props => {
  const { body } = props
  console.log(body)

  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === "hero") {
          return (
            <Hero
              key={i}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_subheading}
              backGroundImage={bodyContent.primary.hero_image.url}
            />
          )
        } else {
          console.log("nah")
          return null
        }
      })}
    </div>
  )
}

export default SliceZone
