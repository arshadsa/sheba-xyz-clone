import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Error from "./Pages/Error/Error";
//import AllServices from "./Pages/AllServices/AllServices";
//import ServiceRoute from "./Pages/ServiceRoute/ServiceRoute";
//import Service from "./Pages/Shared/Service/Service";



const Routing = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
       <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/home" caseSensitive={false} element={<Home />} />
       
        {/*<Route
          path="/service-route/:name"
          caseSensitive={false}
          element={<Service />}
        />*/}
        {/* <Route path="/chat/:id" caseSensitive={false} element={<Chat />} /> */}
        {/*<Route
          path="/all-services"
          caseSensitive={false}
          element={<AllServices />}
        />*/}
        <Route path="*" caseSensitive={false} element={<Error />} />
      </Routes> 
      
      
      <Footer />
    </Router>
  );
};

export default Routing;
