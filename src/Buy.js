import React, { Fragment } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Charge3 from './Images/Charge3.png'
import Charge4 from './Images/Charge4.png'
import Charge1 from './Images/Charge1.png'

const Title = styled.div`
float: left;
font-weight: bold;
font-size: 5em;
a {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
}
width: 10em;
margin: 0.5em;
`

const Prodbox = styled.div`
width: 40em;
height: 20em;
border: 2px solid grey;
border-radius: 0.5em;
margin: 13em;
margin-left: 3em;
margin-bottom: -8em;
`

const ProdImg = styled.div`
img {
  color: white;
  margin: 2em;
  margin-left: 2em;
  width: 16em;
  margin-bottom: 5x;
  float: left;
  border-radius: 0.5em;
}
`

const ProdTitle = styled.div`
  margin: 1em;
  margin-left: 3em;
  font-weight: bold;
  font-size: 1.5em;
`

const ProdSub = styled.div`
  margin: 2em;
  font-size: 1em;
`

const BuyButton = styled.button`
  background: none;
  color: grey;
  font-size: 1em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

const MainImage = styled.div`
img {
  color: white;
  margin-right:;
  width: 40em;
  margin-bottom: 5x;
  float: right;
  margin-top: -40em;
}
`

const Buy = () => {
  return (
    <>
      <Title>
        Our Products
      </Title>
      <Prodbox>
        <ProdImg>
          <img src={Charge4} alt="Charger"/>
        </ProdImg>
        <ProdTitle>
          IntelliCharge Home
        </ProdTitle>
        <ProdSub>
          Charge your car wirelessly or via cable at home with IntelliCharge. The included OLED screen provides easy usability
        </ProdSub>
        <BuyButton>
          Coming Soon
        </BuyButton>
      </Prodbox>
      <Prodbox>
        <ProdImg>
            <img src={Charge3} alt="Charger"/>
          </ProdImg>
          <ProdTitle>
            IntelliCharge Go
          </ProdTitle>
          <ProdSub>
            Charge your car on the go with our portable, fully wireless IntelliCharge Go charger.
          </ProdSub>
          <BuyButton>
            Coming Soon
          </BuyButton>
      </Prodbox>
      <MainImage>
        <img src={Charge1} alt="Charger"/>
      </MainImage>
    </>

      )}

export default Buy

