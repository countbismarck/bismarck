import * as React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Portfolio = () => (
    <Wrapper>
       <Container>
          <h2>Diverse Portfolio of Curated<br/>  Investment Products</h2>
          <p>See our extensive portfolio from all of those who have advanced with Count Bismarck.</p>
          <PortfolioBlock>
             <Grid>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Berlin properties</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-1.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Art</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-2.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Solar</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-3.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <SubHeading>Private Companies</SubHeading>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-4.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Crypto </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-5.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>ESG</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-6.png" alt="" />
                   </Image>
                </Item>
             </Grid>
          </PortfolioBlock>
       </Container>
    </Wrapper>
    );
    export default Portfolio;
        
const Wrapper = styled.div`
padding: 70px 0;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
   @media only screen and (max-width:1100px){
      padding-bottom: 40px;
   }
    @media only screen and (max-width:991px){
        padding: 40px 0;
    }
    @media only screen and (max-width:479px){
        padding: 40px 0 30px 0;
    }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const PortfolioBlock = styled.div`
margin-top: 50px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
    @media (min-width:901px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const Item = styled.div`
justify-content: start;
align-items: start;
text-align: left; 
display: flex;
flex-direction: row;
border: 2px solid #B89260;
padding: 0 30px;
margin-bottom: 80px;
    @media only screen and (min-width:901px) and (max-width:991px){
        padding: 0 15px;
        margin-bottom: 50px;
    }
    @media (max-width:595px) {
        padding: 0 15px;
    }
    @media (max-width:479px) {
        flex-direction: column;
        margin-bottom: 30px;
    }
`;
const TextBlock = styled.div`
padding: 30px 30px 0px 0;
    @media only screen and (min-width:992px) and (max-width:1150px){
        padding: 15px 15px 0px 0;
    }
    @media only screen and (min-width:901px) and (max-width:991px){
        padding: 15px 15px 0px 0;
    }
    @media (max-width:595px) {
        padding: 15px 15px 0px 0;
    }
`;
const SubHeading = styled.h4`
    @media only screen and (min-width:901px) and (max-width:991px){
      font-size: 25px;
    }
`;
const Image = styled.div`
width: 90%;
margin-bottom: -50px;
    @media only screen and (min-width:992px) and (max-width:1150px){
        width: 150%;
    }
    @media only screen and (min-width:901px) and (max-width:991px){
        width: 150%;
        margin-bottom: -30px;
    }
    @media (max-width:595px) {
        width: 150%;
    }
    @media (max-width:479px) {
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center
    }
`;
