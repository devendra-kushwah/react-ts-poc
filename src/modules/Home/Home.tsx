import React from "react";
import Layout from "layout/Layout";
import { VendorCard } from "../../components";

const Home = () => {
  return (
    <Layout enableHeader>
      This is common home page
      <>
        {Array(10).map((index) => {
          return <VendorCard key={index} />;
        })}
      </>
    </Layout>
  );
};

export default Home;
