import React from "react";

import AllServicesAside from "../AllServiceBodyComponents/AllServicesAside";
import ServicePageBody from "./ServicePageBody";

const Main = ({overviewData, asideData}) => {
  
  



  return (
    <div className=" container all-services-wrapper">
    <div className="row ">
        <div className=" col-3 d-none d-lg-block">
          <div className="aside-wrapper">
            <AllServicesAside asideData={asideData} />
          </div>
        </div>
        <div className=" col-12 col-lg-9" >
           <main   id="service-info">
           <h2>{overviewData?.service}</h2>
            <section  className="service-landing__section">
              <div  className="container">
                <ServicePageBody  overviewData = {overviewData} />
              </div>
            </section>
           
          </main>
          
        </div>
      </div>
    </div>
    //<AllServicesAside />
  //  <>jifjjef</>
  //
  
  
  )
};



export default Main;
