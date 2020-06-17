import React from "react"
import RichText from "./richText"
import styled from "styled-components"
import PriceItem from "./priceItem"

const PriceListWrapper = styled.section`
  max-width: 880px;
  margin: 2rem auto;
`

const PriceList = props => {
  if (!props) return null

  const { title, prices, price } = props

  return (
    <PriceListWrapper>
      <RichText render={title} />
      {prices.map((price, i) => {
        return (
          <PriceItem
            key={i}
            price={price.price_per_month}
            title={price.price_list_title}
            description={price.price_list_description}
            mostPopular={price.price_type === "Longterm Value"}
            popularTag={price.price_type}
          />
        )
      })}
    </PriceListWrapper>
  )
}

export default PriceList
