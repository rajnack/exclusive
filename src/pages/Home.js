import React from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import Sportlight from "../components/screens/Sportlight";
import Categories from "../components/screens/Categories";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet><title>Home</title></Helmet>
      <Header />
      <Sportlight />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
