import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import "./home.css";
import ServicesComponent from "../../Components/ServicesComponent/ServicesComponent";

const Home = () => {
  return (
    <div
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
        // so the components does not overflow in x axis
      }}
    >
      <Header />
      <ServicesComponent></ServicesComponent>
      <Footer />
    </div>
)};

export default Home;
