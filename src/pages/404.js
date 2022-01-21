import * as React from "react"

import Layout from "../components/layout"
import GlobalStyle from '../layout/globalStyles';
import FontStyles from "../layout/fontstyles";
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout page="404">
     <GlobalStyle />
     <FontStyles />
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
