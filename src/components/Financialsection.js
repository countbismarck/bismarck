import * as React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
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
        <h2>Backed by giants</h2>
        <Paragraph>Our ambition is shared by our business partners<br/> and investors - the benefits of Private Banking should <br/>no longer be available only to the very few</Paragraph>
        <Button><Link to="/">Join Count Bismarck Today</Link></Button>

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
padding:50px 0px;
  
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Paragraph = styled.p`
color: #fff;
font-size: 26px;
line-height: 35px;
  @media only screen and (max-width:767px){
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-width:479px){
    font-size: 16px;
    line-height: 26px;
  }

`;
const Button = styled.button`
&:hover a{
    color: #222454;
 }
a {
    text-decoration: none;
    color: #707070;
  }
  a:hover{
    color: #222454;
  }
`;

