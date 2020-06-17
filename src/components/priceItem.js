import React from "react"
import RichText from "./richText"
import styled from "styled-components"

const PriceItemWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin: 0;

  ul {
    margin-left: 4rem;
    margin-top: 0px;
  }

  margin-bottom: 4rem;

  background: #01000f;
  padding: 2rem;

  .price {
    font-size: 48px;
    font-weight: bold;
  }

  .price-details > * {
    margin-bottom: 2rem;
  }

  background: ${p => (p.mostPopular ? "#051838" : "")};
`

const PriceItem = props => {
  if (!props) return null

  const { title, description, price, mostPopular, popularTag } = props

  return (
    <PriceItemWrapper mostPopular={mostPopular}>
      <div className="price-details">
        <RichText render={title} />
        <div className="price">${price}</div>
        <div>{popularTag}</div>
      </div>
      <RichText render={description} />
    </PriceItemWrapper>
  )
}

export default PriceItem
