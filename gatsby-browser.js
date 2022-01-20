import React from "react";
import Layout from "./src/layout/Layout";


export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
};