import * as React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Future = () => (
    <FurureBlock>
       <Container>
          <Heading>Say Hello <br /> To The Future of Private Banking</Heading>
          <p>Otto Von Bismarck's influence has shaped the financial services industry for over 150 years. Now we're bringing <br /> Private Banking into the 21st century and giving you the opportunity to join the Count Bismarck family.</p>
          <Cardwrapper>
             <Grid>
                <Item>
                   <Card>
                      <Image>
                         <StaticImage src="../assets/images/future-img-1.png" alt="" />
                      </Image>
                      <CardInfo>
                         <h4>Enjoy the convenience of all-digital banking</h4>
                         <p>We believe in using technology to bring new approaches to our industry. Say goodbye to banking the old way with our advanced digital banking platform, designed to make your day-to-day banking easy and hassle-free.</p>
                         <Number>01</Number>
                      </CardInfo>
                   </Card>
                </Item>
                <Item>
                   <Card>
                      <Image>
                         <StaticImage src="../assets/images/future-img-2.png" alt="" />
                      </Image>
                      <CardInfo>
                         <h4>Wealth management at your fingertips</h4>
                         <p>Time is precious and dreams are not just for when you're asleep. Our excellent wealth management allows you to achieve what you already know is possible and more. We harness AI and Quantum Computing to enhance our research</p>
                         <Number>02</Number>
                      </CardInfo>
                   </Card>
                </Item>
                <Item>
                   <Card>
                      <Image>
                         <StaticImage src="../assets/images/future-img-3.png" alt="" />
                      </Image>
                      <CardInfo>
                         <h4>Build relationships with exclusive memberships</h4>
                         <p>Exclusive multi-use private memberships allows you to build long-lasting relationships with like-minded people, gives you invitations to global events, and access to VIP airport lounges when you travel.</p>
                         <Number>03</Number>
                      </CardInfo>
                   </Card>
                </Item>
             </Grid>
          </Cardwrapper>
       </Container>
    </FurureBlock>
    );
    export default Future;
    
const FurureBlock = styled.div`
background-color: #fff1e5;
padding: 70px 0 100px 0;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
    @media only screen and (max-width:991px){
        padding: 40px 0;
    }
  
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Heading = styled.h1`
    @media only screen and (max-width:700px){
        br{
            display: none;
        }
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
justify-content: start;
align-items: start;
text-align: left;
    @media only screen and (max-width:991px){
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;
const Cardwrapper = styled.div`
margin-top: 80px;
    @media only screen and (max-width:991px){
        margin-top: 50px;
    }
`;
const Card = styled.div`
padding: 0 20px;
position: relative;
    @media only screen and (max-width:1250px){
        width: 80%;
    }
    &::before{
        content: '';
        position: absolute;
        top: 18%;
        left: 0;
        width: 100%;
        height: 470px;
        border: 2px solid #B89260;
            @media only screen and (max-width:479px){
                height: 420px;
            }
    }  
    @media only screen and (max-width:991px){
        width: 364px;
        display: inline-block;
        text-align: left;
        margin-bottom: 50px;
    }
    @media only screen and (max-width:479px){
        width: 78%;
    }
`;
const Image = styled.div`
margin-bottom: 40px;
    @media only screen and (max-width:479px){
        margin-bottom: 20px;
    }
`;
const CardInfo = styled.div`
position: relative;
min-height: 252px;
    @media only screen and (min-width:992px) and (max-width:1200px){
        min-height: 292px;
    }
    @media only screen and (max-width:400px){
        min-height: 300px;
    }
`;
const Number = styled.h5`
position: absolute;
content: '';
right: -50px;
color: #B89260;
font-size: 40px;
width: 50px;
line-height: 80px;
bottom: 35px;
background-color: #fff1e5;
    @media only screen and (max-width:767px){
        bottom: 50px;
    }
    @media only screen and (max-width:479px){
        font-size: 30px;
        width: 40px;
        right: -46px;
        line-height: 70px;
        bottom: 100px;
    }
    @media only screen and (max-width:380px){
        bottom: 50px;
    }
`;
