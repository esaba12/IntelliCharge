import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #333333;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`

const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer
  }
`

const Center = styled.div`
  flex basis: auto;
  align-self: center;
  img {
    color: white;
    margin-right: 5px;
    margin-top: 12px;
    height: 50px;
    width: 50px;
    border: 1px solid rgba(,0,0,0.1);
    margin-bottom: 5x;
    float: left;
  }
  `

const Logo = styled.button`
border: none;
background: none;
font-size: inherit;
font-weight: inherit;
font-family: inherit;
color: white;
text-decoration: none;
  &:hover {
    color: grey // <Thing> when hovered
  }

`

const Navbar = () => {
  return (
        <Wrapper>
          <Container>
            <Nav>
              <Left>
                <Logo as="a" href="/shop">Buy Now</Logo>
              </Left>
              <Center>
                <Logo as="a" href="/">
                  IntelliCharge
                </Logo>
              </Center>
              <Right>
                <Logo as="a" href="/about">About</Logo>
              </Right>
            </Nav>  
          </Container>
        </Wrapper>
      )}

export default Navbar