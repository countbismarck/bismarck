import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
   const data = useStaticQuery(
      graphql`
        query {
          desktop: file(relativePath: { eq: "hero-banner.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    )
    const imageData = data.desktop.childImageSharp.fluid
   return(
      <BackgroundImage
         Tag="section"
         fluid={imageData}
         backgroundColor={`#040e18`}
      >
         <Container>
       <Herosection>
          <Logo>
             <StaticImage src="../assets/images/bismarck-logo-gold.png" alt="" />
          </Logo>
          <Heading>Private Banking and Wealth Management</Heading>
          <p>designed for tomorrow, available today</p>
          <Button><Link to="/">Become a Count Bismarck Member</Link></Button>
          <p>Powered by AI</p>
       </Herosection>
    </Container>
      </BackgroundImage>
  )
}
  
export default Hero;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Herosection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding-top:100px;
padding-bottom:40px;
@media (min-width: 992px) {
  padding-bottom:170px; 
}
@media (max-width: 991px) {
  padding-bottom:50px; 
}
`;
const Logo = styled.div`
  width: auto;
  margin:60px 0;
`;
const Heading = styled.h2`
margin:30px 0 0 0;
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
