import React from "react";
import FaqCartComponent from "../ServicePageBodyComponent/FaqCartComponent/FaqCartComponent";
import ServiceOverviewComponent from "../ServicePageBodyComponent/ServiceOverviewComponent/ServiceOverviewComponent";

const ServicePageBody = ({overviewData}) => {
  const {overviewComponent} = overviewData

  
  return (
    <>
    <div className="service-overview" id="serviceOverview">
      {
        overviewComponent.map((item, i) =>(
           <ServiceOverviewComponent key={i}
        className="service-overview-component"
        title = {item?.title}
        listItems = {item?.listItems}        
          />
        ) )
      }
    </div>
    <div   id="faq"  className="faq-section left faq">
      <h3   className="section-heading">FAQ</h3>
      <FaqCartComponent />
      
      
      
    </div>
    
    </>
      

        )
};

export default ServicePageBody;
