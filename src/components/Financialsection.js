import * as React from "react"
import styled from "styled-components";
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Financial = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bankCardBg: file(relativePath: { eq: "bank-card.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.bankCardBg.childImageSharp.fluid
  return(
    <BackgroundImage
         Tag="section"
         fluid={imageData}
         backgroundColor={`#040e18`}
      >
    <Wrapper>
      <Container>
            <Heading>WE SOLVE YOUR FINANCIAL SECURITY<br/> WITH TECHNOLOGY AND DATA,<br/> A WHOLE LOT OF DATA.</Heading>
      </Container>
    </Wrapper>
    </BackgroundImage>
  )
}
  export default Financial;
    
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 150px 0px;
    @media only screen and (max-width:991px){
        padding: 100px 0;
    }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Heading = styled.h2`
color: #fff;
margin: 0;
font-size: 42px;
line-height: 50px;
  @media only screen and (max-width:991px){
    font-size: 34px;
    line-height: 40px;
        br{
            display: none;
        }
  }
  @media only screen and (max-width:599px){
    font-size: 30px;
    line-height: 35px;
  }
  @media only screen and (max-width:479px){
    font-size: 22px;
    line-height: 30px;
  }
`;
