import React from "react";

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
  
      <ServicesComponent />

      <DetailsComponents />
      <CounterComponent />
      <ProcessComponent />
  
    </div>
)};

export default Home;
