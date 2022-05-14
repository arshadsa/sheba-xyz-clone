import React from "react";

import "./home.css";
import ServicesComponent from "../../Components/ServicesComponent/ServicesComponent";
import UserSeftyComponent from "../../Components/UserSeftyComponent/UserSeftyComponent";
//
import CounterComponent from "../../Components/CounterComponent/CounterComponent";
import ProcessComponent from "../../Components/ProcessComponent/ProcessComponent";




const Home = () => {
  return (
    <div 
      style={{
        minHeight: '55vh',
        maxWidth: "100vw",
        overflowX: "hidden",
        // so the components does not overflow in x axis
      }}
    >
    
      <ServicesComponent />
      <UserSeftyComponent />
      <CounterComponent />
      <ProcessComponent />
      

  
    </div>
)};

export default Home;
