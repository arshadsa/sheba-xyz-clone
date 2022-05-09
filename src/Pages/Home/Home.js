import React from "react";
import CounterComponent from "../../components/counter/CounterComponent";
import DetailsComponents from "../../components/details/DetailsComponent";
import ProcessComponent from "../../components/process/ProcessComponent";

const Home = () => {
  return (
      <>
      <DetailsComponents />
      <CounterComponent />
      <ProcessComponent />
      </>
      

  )
};

export default Home;
