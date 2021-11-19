import * as React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Portfolio = () => (
    <Wrapper>
       <Container>
          <h2>Curated Investments</h2>
          <ParagraphTop>We offer a diverse Portfolio of preselected and curated investment Product. Explore the investment topic below.</ParagraphTop>
          <PortfolioBlock>
             <Grid>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Berlin properties</h4>
                      <p>Harness unique growth potential by investing in exclusive residential and commercial real estate in Germany’s most diverse and vibrant property market.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-1.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Art</h4>
                      <p>Immerse yourself in the beautiful world of art by exploring meticulously curated investment opportunities in collections of both evolving and sought-after artists.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-2.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Solar</h4>
                      <p>Drive change in today’s energy mix and benefit from new structural industry trends, including dramatically improved economics in solar energy production, by investing in distinct growth opportunities.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-3.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <SubHeading>Private Companies</SubHeading>
                      <p>Benefit from unique growth potential in non-registered offerings, ranging from innovative startups to emerging-growth companies and mature issuers across various industry sectors.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-4.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>Crypto </h4>
                      <p>Ready to forego mainstream investing in search of exceptional financial return potential? Explore select investment opportunities in leading crypto currencies based on a rigid analysis of the risks involved.</p>
                   </TextBlock>
                   <Image>
                      <StaticImage src="../assets/images/portfolio-5.png" alt="" />
                   </Image>
                </Item>
                <Item>
                   <TextBlock>
                      <h5>Invest in</h5>
                      <h4>ESG</h4>
                      <p>Employ a holistic approach to investing to make a positive environmental and social impact without compromising on exceptional financial performance.</p>
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
const ParagraphTop = styled.p`
    margin:auto;
    width:100%;
    max-width:640px;
`;
const Image = styled.div`
min-width:230px !important;
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
