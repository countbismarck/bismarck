import * as React from "react"
import styled from "styled-components";
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import ReactPlayer from 'react-player'
import video from "../assets/videos/video1.mp4";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const BankingBanner = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bankingNanneBgImg: file(relativePath: { eq: "banking-banner.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.bankingNanneBgImg.childImageSharp.fluid
  return(
  <Wrapper>
     <Container>
        <Banner>
        <video loop muted autoPlay controls = 'false' width='100%' height='100%'>
        <source src={video} type="video/mp4"/>
        <source src={video} type="video/ogg"/>
       </video>
        {/* <ReactPlayer
            className='react-player fixed-bottom'
            url= {video}
            width='100%'
            height='100%'
            loop={true}
            playing={true}
            controls = {false}
            /> */}
            <VideoContent>
            <Heading>Private Banking no longer just for the<br /> super rich</Heading>
            <Paragraph>Otto Von Bismarck influence has shaped the financial industry for over 200 years. Now, we’re<br/> bringing it to the 21st century and giving you the opportunity to join the Count Bismarck famil</Paragraph>
            </VideoContent>
           
        </Banner>
     </Container>
  </Wrapper>
  )
}
  export default BankingBanner;
    
const Wrapper = styled.div`
position: relative;
  &::before{
    content: '';
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 400px;
    background-color: #202252;
    z-index: -1;
  }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const VideoContent = styled.div`
position: absolute;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto; 
z-index: 999 !important;
width:80% !important;
max-width:100%;
`;
const Banner = styled.div`
width:800px !important;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0px;
position: relative;
`;
const Heading = styled.h2`
color: #fff;
margin: 0;
line-height: 56px;
  @media only screen and (max-width:991px){
    line-height: 45px;
  }
  @media only screen and (max-width:599px){
    line-height: 35px;
  }
`;
const Paragraph = styled.p`
color: #fff;
`;
const VideoText = styled.p`
color: #fff;
position: absolute;
right: 20px;
bottom: 20px;
margin:0;
  a{
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
  }
`;
const SvgIcon = styled.span`
padding: 2px 8px 0 0px;
float: left;
`;
