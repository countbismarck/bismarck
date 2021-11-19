import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const Backed = () => (
  <Wrapper id="contact">
     <Container>
           <Heading>Backed by giants</Heading>
           <p>Our ambition is shared by our business partners and investors - the benefits of Private Banking<br/> should no longer be available only to the very few.</p>
           <Button><Link to="/">Join Count Bismarck Today</Link></Button>
     </Container>
  </Wrapper>
  )
  export default Backed;
    
const Wrapper = styled.div`
background-color: #FFF1E5;
padding: 70px 0;
display: flex;
flex-direction: column;
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

const Heading = styled.h2`
font-size: 45px;
line-height: 50px;

  @media only screen and (max-width:991px){
      font-size: 34px;
      line-height: 40px;
       
  }
  @media only screen and (max-width:599px){
    font-size:  30px;
    line-height: 35px;
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
