import React, { Fragment } from 'react'
import styled from 'styled-components'
import Charge1 from './Images/Charge1.png'

const Title = styled.div`
float: left;
font-weight: bold;
font-size: 5em;
margin: 0.5em;
a {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
}
width: 10em;

img {
  color: white;
  margin-right: -8em;
  margin-top: 12px;
  width: 8em;
  margin-bottom: 5x;
  float: right;
}
`
const Subtext = styled.div`
margin: 3em;
margin-top: -17em;
margin-right: 5em;
float: left;
font-size: 2em;
a {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
}
width: 15em;
`

const About = () => {
  return (
      <>  
        <Title>
            IntelliCharge
            <img src={Charge1} alt="Charger"/>
        </Title>
        <Subtext>
          Intellicharge is a personal project made by Ethan Saba for the demonstration of a webapp to David Shadi. 
        </Subtext>
      </>
      )}

export default About