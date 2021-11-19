import * as React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Service = () => (
    <Wrapper>
       <Container>
          <Heading>Why should the benefits of Private Banking and<br/> Wealth Management be available only to the very few.</Heading>
          <p>Join the Bismarck family.</p>
          <ServiceBlock>
             <Grid id="dbanking">
                <Item>
                   <ServiceImage>
                      <StaticImage src="../assets/images/service-1.png" alt="" />
                   </ServiceImage>
                </Item>
                <Item>
                   <TextBlock>
                      <SubHeading>Digital Banking</SubHeading>
                      <p>Why continue to struggle with banking designed for the past. Bring yourself into the future with our advanced digital banking platform, with its many cutting-edge features. Use the Count Bismarck card and online account to take the hassle out of your day-to-day banking.</p>
                   </TextBlock>
                </Item>
             </Grid>
             <Grid2 id="cinvestments">
                <Item2>
                   <TextBlock>
                      <SubHeading2>Your wealth, your way</SubHeading2>
                      <p>Wealth is not just about how much money you have. Wealth is about being able to live how you want to live, security for you and your loved ones, and always knowing your money is invested in line with your values</p>
                      <p>Let us do the work and choose from our carefully curated selection of investment opportunities in funds, portfolios and direct placements.</p>
                   </TextBlock>
                </Item2>
                <Item2>
                   <ServiceImage2>
                      <StaticImage src="../assets/images/service-2.png" alt="" />
                   </ServiceImage2>
                </Item2>
             </Grid2>
             <Grid id="membership">
                <Item>
                   <ServiceImage>
                      <StaticImage src="../assets/images/service-3.png" alt="" />
                   </ServiceImage>
                </Item>
                <Item>
                   <TextBlock>
                      <SubHeading>Exclusive Membership</SubHeading>
                      <p>A sense of belonging can go a long way. Our private memberships give you access to more than ordinary people. Make connections to further your potential, sharpen your edge at exclusive events,  or just relax in luxury, all with just the flash of your membership card. Take advantage of our wide range of premium services designed specifically for you.</p>
                      <p>Count Bismarck is more than just a name. It's a family and we're inviting you to join.</p>
                   </TextBlock>
                </Item>
             </Grid>
          </ServiceBlock>
       </Container>
    </Wrapper>
    );
    export default Service;   
    
const Wrapper = styled.div`
padding: 70px 0;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
    @media (min-width:992px) {
        margin-bottom: 40px;
    }
    @media only screen and (max-width:991px){
        padding: 40px 0 20px 0;
    }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const ServiceBlock = styled.div`
margin-top: 80px;
position: relative;
    @media (max-width: 991px) {
        margin-top: 50px;
    }
    @media (min-width: 992px) {
     &::before{
        content: '';
        position: absolute;
        top: 5%;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #B89260;
        @media only screen and (min-width:992px) and (max-width:1200px){
            top: 2%;
        }
    }
   
}
`;
const Heading = styled.h2`
font-size:50px;
line-height:54px;
@media (max-width: 1040px) {
br{
    display:none;
}
}
@media (max-width: 1100px) {
font-size:40px;
line-height:50px;
}
@media (max-width: 767px) {
    font-size:32px;
    line-height:40px;
}
@media (max-width: 479px) {
    font-size:27px;
    line-height:35px;
}

`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
  margin-bottom: 80px;
  justify-content: space-between;
  align-items: center;
    @media (min-width: 992px) {
        grid-template-columns: 8fr 4fr;
    }
    @media (max-width:1200px) {
        margin-bottom: 50px;
    }
    @media (max-width: 991px) {
        margin-bottom: 20px;
    }
`;
const Grid2 = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;
margin-bottom: 80px;
justify-content: space-between;
align-items: center;
    @media (min-width: 992px) {
        grid-template-columns: 4fr 8fr;
    }
    @media (max-width:1200px) {
        margin-bottom: 50px;
    }
    @media (max-width: 991px) {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 20px;
    }
       
`;
const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
text-align: left;
`;
const Item2 = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
text-align: right;
`;
const ServiceImage = styled.div`
margin-bottom: 20px;
    @media (min-width: 1366px) {
     margin-left: -90px;
    }
    @media only screen and (min-width:1301px) and (max-width:1365px){
        margin-left: -50px;
    }
    @media only screen and (min-width:1266px) and (max-width:1300px){
        margin-left: -40px;
    }
    @media only screen and (min-width:1251px) and (max-width:1265px){
        margin-left: -34px;
    }
    @media only screen and (min-width:992px) and (max-width:1250px){
        margin-left: -15px;
    }
`;
const ServiceImage2 = styled.div`
margin-bottom: 20px;
    @media (min-width: 1366px) {
        margin-right: -90px;
    }
    @media only screen and (min-width:1301px) and (max-width:1365px){
        margin-right: -50px;
    }
    @media only screen and (min-width:1266px) and (max-width:1300px){
        margin-right: -40px;
    }
    @media only screen and (min-width:1251px) and (max-width:1265px){
        margin-right: -34px;
    }
    @media only screen and (min-width:992px) and (max-width:1250px){
        margin-right: -15px;
    }
`;
const TextBlock = styled.div`
padding: 30px;
    @media (max-width: 1050px) {
        padding: 10px;
    }
    @media (max-width: 991px) {
        padding: 0px;
    }
`;
const SubHeading = styled.h4`
position: relative;
padding-bottom: 20px;
    @media (max-width: 599px) {
        font-size: 26px;
    }
    &::before{
        content: '';
        position: absolute;
        bottom: 0%;
        left: 0;
        width: 150px;
        height: 1px;
        background-color: #B89260;
    }
`;
const SubHeading2 = styled.h4`
position: relative;
padding-bottom: 20px;
    @media (max-width: 599px) {
        font-size: 26px;
    }
    &::before{
        content: '';
        position: absolute;
        bottom: 0%;
        right: 0;
        width: 150px;
        height: 1px;
        background-color: #B89260;
    }
`;

