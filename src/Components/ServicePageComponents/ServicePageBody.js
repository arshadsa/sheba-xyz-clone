import React from "react";
import ServiceOverviewComponent from "../ServicePageBodyComponent/ServiceOverviewComponent/ServiceOverviewComponent";

const ServicePageBody = ({overviewData}) => {
  const {overviewComponent} = overviewData

  
  return (
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

        )
};

export default ServicePageBody;
