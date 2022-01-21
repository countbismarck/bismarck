import * as React from "react"
import styled from "styled-components";
import Layout from "../components/layout"
import GlobalStyle from '../layout/globalStyles';
import FontStyles from "../layout/fontstyles";
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout page="404">
     <GlobalStyle />
     <FontStyles />
    <Seo title="404: Not found" />
    <Wrapper>
      <Container>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Wrapper>    
  </Layout>
)
const Wrapper = styled.div`
padding: 100px 0 60px;
display: flex;
background-color:#fff1e5;
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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (min-width:768px){
  padding: 0 15px;
}
@media only screen and (max-width:767px){
  padding: 0px;
}
`;
export default NotFoundPage
