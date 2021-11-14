import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import bgImg from "../assets/images/hero-banner.png";
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BackgroundImage from 'gatsby-background-image'

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
           <Button>
              <Link to="/">
              Become a Count Bismarck Member</Link>
           </Button>
           <p>Powered by AI</p>
           <Paragraph>
              <AnchorLink href='#about'>Scorll for more</AnchorLink>
           </Paragraph>
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
padding-top: 100px;
@media only screen and (max-width:991px){
  padding-top: 80px;
}
`;
const Logo = styled.div`
  width: auto;
  margin: 60px 0;
`;
const Heading = styled.h2`
margin: 0;
`;
const Paragraph = styled.p`
position: relative;
margin-top: 80px;
     &::before{
        content: '';
        position: absolute;
        top: -55px;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: #B89260;
        width: 3px;
        height: 40px;
     }
     a{
      color: #b89260;
      line-height: 26px;
      text-decoration: none;
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
