import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import "./home.css";
import ServicesComponent from "../../Components/ServicesComponent/ServicesComponent";

import CounterComponent from "../../Components/counter/CounterComponent";
import DetailsComponents from "../../Components/details/DetailsComponent";
import ProcessComponent from "../../Components/process/ProcessComponent";




const Home = () => {
  return (
    <div
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
        // so the components does not overflow in x axis
      }}
    >
      <div>
        <Header />
      </div>
      {/* <div
        className=""
        style={{ height: "200vh", minHeight: "200vh", backgroundColor: "red" }}
      ></div> */}
      <ServicesComponent></ServicesComponent>

      <DetailsComponents />
      <CounterComponent />
      <ProcessComponent />
      <Footer />
    </div>
)};

export default Home;
