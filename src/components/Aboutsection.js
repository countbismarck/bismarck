import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const About = () => {
    const data = useStaticQuery(
        graphql`
          query {
            bgImg: file(relativePath: { eq: "hero-banner.png" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
      )
      const imageData = data.bgImg.childImageSharp.fluid
    return(
        <BackgroundImage
         Tag="section"
         fluid={imageData}
         backgroundColor={`#040e18`}
         id="about"
      >
    <Wrapper>        
       <Container>
          <Heading>About Us</Heading>
          <p>Count Bismarck Modern Private Banking is a new fintech platform, combining digital banking,<br/> investments and club memberships. We are democratising Private Banking so that now all our <br/> clients have access to the special benefits previously available only to the very few.</p>
          <AboutBlock>
             <Grid>
                <Item>
                   <AboutBox>
                      <TextBlock>
                         <h3>Digital Banking</h3>
                         <p>Gain access to an advanced online banking platform created for this century using new cutting-edge features. Partnered with Railsbank.</p>
                      </TextBlock>
                      <AboutIcon>
                         <StaticImage src="../assets/images/icon1.png" alt="" />
                      </AboutIcon>
                   </AboutBox>
                   <AboutBox>
                      <TextBlock>
                         <h3>Curated Investments</h3>
                         <p>We provide you with a state-of-the-art wealth platform where you can access our carefully curated selection of portfolios, funds and investments. We use AI and Quantum Computing to enhance our Research.</p>
                      </TextBlock>
                      <AboutIcon>
                         <StaticImage src="../assets/images/icon2.png" alt="" />
                      </AboutIcon>
                   </AboutBox>
                </Item>
                <Item>
                   <StaticImage src="../assets/images/applewatch1.png" alt="" />
                </Item>
                <Item>
                   <AboutBox>
                      <AboutIcon1>
                         <StaticImage src="../assets/images/icon3.png" alt="" />
                      </AboutIcon1>
                      <TextBlock>
                         <h3>Alternative and Direct investments</h3>
                         <p>Profit from a fully regulated investment platform and marketplace of unique and exclusive projects.</p>
                      </TextBlock>
                   </AboutBox>
                   <AboutBox>
                      <AboutIcon1>
                         <StaticImage src="../assets/images/icon4.png" alt="" />
                      </AboutIcon1>
                      <TextBlock>
                         <h3>Exclusive Memberships</h3>
                         <p>Build long-lasting connections with other like-minded Count Bismarck members all around the world. Get exclusive access to worldwide events, business & Sports club.</p>
                      </TextBlock>
                   </AboutBox>
                </Item>
             </Grid>
             <h3>Become Part Of  The Count Bismarck Family</h3>
             <Button><AnchorLink href='#contact'>Join Count Bismarck</AnchorLink></Button>
          </AboutBlock>
       </Container>       
    </Wrapper>
    </BackgroundImage>
    );
}
    export default About;
        
const Wrapper = styled.div`
height:950px;
padding: 70px 0;
text-align: center;
    @media only screen and (mAX-width:991px){
        padding: 40px 0;   
        height: inherit;
    } 
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Heading = styled.h2`
position: relative;
text-align: center;
font-size: 45px;
    &::before{
        content: '';
        position: absolute;
        left:0;
        top:45%;
        width: 40%;
        height: 1px;
        background-color: #B89260;
    }
    &::after{
        content: '';
        position: absolute;
        right:0;
        top:45%;
        width: 40%;
        height: 1px;
        background-color: #B89260;
    }
    @media only screen and (max-width:991px){
        &::before, &::after{
            width: 35%;
        }
    }
    @media only screen and (max-width:600px){
        font-size: 35px;
        &::before, &::after{
            width: 30%;
        }
    }
    @media only screen and (max-width:479px){
        font-size: 30px;
        &::before, &::after{
            width: 20%;
        }
    }
`;
const AboutBlock = styled.div`
margin-top: 50px;
    @media only screen and (max-width:991px){
        margin-top: 70px;
    }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
  
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
text-align: left;
position: relative;
padding-left: 8%;
margin-top: 50px;
@media only screen and (max-width:991px){
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0;
}
    &:nth-of-type(1) {
        text-align: right;  
        padding-right: 8%;
        padding-left: 0;
        @media only screen and (max-width:991px){
            text-align: center;
            padding:0;
        }
    }
    &:nth-of-type(2) {
        padding: 0 8%;
        margin: -120px 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
            @media only screen and (max-width:991px){
                margin:-60px 0 60px 0;
            }
    }
    @media only screen and (max-width:991px){
        margin-top: 0px; 
    }   
`;
const AboutBox = styled.div`
position: relative;
margin-bottom:50px;
min-height: 250px;
    @media only screen and (max-width:1100px){
        min-height: inherit;
    }
`;
const TextBlock = styled.div`
    @media only screen and (max-width:991px){
    margin-top: 30px;
    }
`;
const AboutIcon = styled.div`
width: 60px;
position: absolute;
right: -20%;
top: 6%;
    @media only screen and (max-width:991px){
        right:0%;
        top:-15%;
        left:0;
        margin:0 auto;
    }
`;
const AboutIcon1 = styled.div`
width: 60px;
position: absolute;
left: -20%;
top: 5%;
    @media only screen and (max-width:991px){
        left: 0%;
        top: -15%;
        right:0;
        margin:0 auto;
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
