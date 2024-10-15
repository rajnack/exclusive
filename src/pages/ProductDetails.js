import React from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import { Helmet } from "react-helmet";
import Details from "../components/screens/Details";

function ProductDetails() {
  return (
    <>
      <Helmet>
        <title>Product Details Page </title>
      </Helmet>
      <Header />
      <Details/>
      <Footer />
    </>
  );
}

export default ProductDetails;
