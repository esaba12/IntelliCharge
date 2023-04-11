import React, { Fragment } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Charge1 from './Images/Charge1.png'

const BackImg = styled.div`
img {
  color: white;
  margin-right: -10em;
  margin-top: 12px;
  width: 50em;
  margin-bottom: 5x;
  float: left;
}
`

const Title = styled.div`
color: #2C3E50;
float: left;
font-weight: bold;
font-size: 5em;
a {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: #1F3A93;
  text-decoration: none;
}
width: 10em;
`
const Subtext = styled.div`
margin: 2em;
float: left;
font-size: 1.5em;
color: #2C3E50;
a {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
}
width: 15em;
margin-right: -5em;
`
const Buy = styled.button`
  float: right;
  background: none;
  color: #2C3E50;
  font-size: 1.5em;
  margin: 5em;
  margin-right: 5em;
  padding: 0.75em 3em;
  border: 2px solid #2C3E50;
  border-radius: 4px;
  &:hover {
    color: grey;
    border: 2px solid grey;
  }
`

const Main = () => {
  return (
      <>  
        <BackImg>
           <img src={Charge1} alt="Charger"/>
        </BackImg>
        <Title>
            The World's First Wireless Car Charger
        </Title>
        <Subtext>
          Powered by state of the art RapidTransfer® Coils, Intellicharge is the most revolutionary level 2 charger on the market
        </Subtext>
        <Buy as="a" href="/shop">
          Buy Now
         </Buy>

      </>
      )}

export default Main