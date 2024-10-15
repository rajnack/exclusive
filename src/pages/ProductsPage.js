import React from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import ProductItems from "../components/screens/ProductItems";
import { Helmet } from  "react-helmet";


function ProductsPage() {
  return (
    <>
    <Helmet>
          <title>Product List </title>
          </Helmet>
      <Header />
      <ProductItems />
      <Footer />
    </>
  );
}

export default ProductsPage;
