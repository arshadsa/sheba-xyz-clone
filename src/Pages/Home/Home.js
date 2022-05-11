import React from "react";
import CounterComponent from "../../Components/counter/CounterComponent";
import DetailsComponents from "../../Components/details/DetailsComponent";
import GetApp from "../../Components/GetApp/GetApp";
import ProcessComponent from "../../Components/process/ProcessComponent";
import ServicesComponent from "../../Components/ServicesComponent/ServicesComponent";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./home.css";

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

      <DetailsComponents />
      <CounterComponent />
      <ProcessComponent />
      <GetApp />
      <Footer />
    </div>
  );
};

export default Home;
