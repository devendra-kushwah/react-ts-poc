import React from "react";
import Layout from "layout/Layout";
import { VendorCard } from "../../components";

const Home = () => {
  return (
    <Layout enableHeader>
      This is common home page
      <VendorCard />
    </Layout>
  );
};

export default Home;
