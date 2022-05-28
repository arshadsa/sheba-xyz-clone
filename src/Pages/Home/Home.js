import React from "react";
import Advertise from "../../Components/Advertise/Advertise";
import Banner from "../../Components/Bannner/Banner";
import CounterComponent from "../../Components/counter/CounterComponent";
import DetailsComponents from "../../Components/details/DetailsComponent";
import GetApp from "../../Components/GetApp/GetApp";
import ProcessComponent from "../../Components/process/ProcessComponent";
import ServicesAdd from "../../Components/ServicesAdd/ServicesAdd";
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
      <Banner></Banner>
      <ServicesAdd />
      <Advertise></Advertise>

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
