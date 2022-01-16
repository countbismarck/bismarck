import * as React from "react"

import Layout from "../components/layout"
import GlobalStyle from '../layout/globalStyles';
import FontStyles from "../layout/fontstyles";
import Hero from "../components/Herosection";
import Future from "../components/Futuresection";
import BankingBanner from "../components/BankingBannersection";
import Service from "../components/Servicesection";
import About from "../components/Aboutsection";
import Portfolio from "../components/Portfoliosection";
import Financial from "../components/Financialsection";

const IndexPage = () => (
  <Layout page="home">
     <GlobalStyle />
     <FontStyles />
     <Hero />
     <Future/>
     <BankingBanner />
     <Service />
     <About />
     <Portfolio />
     {/* <Financial /> */}
  </Layout>
  )
  export default IndexPage  
  