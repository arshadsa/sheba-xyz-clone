import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

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
      <div>
        <Header />
      </div>
      {/* <div
        className=""
        style={{ height: "200vh", minHeight: "200vh", backgroundColor: "red" }}
      ></div> */}
      <Footer />
    </div>
  );
};

export default Home;
