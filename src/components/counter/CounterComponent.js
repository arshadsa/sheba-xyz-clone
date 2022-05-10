import React from "react";
import './CounterComponent.css'
import CounterSectionComponent from "./CounterSectionComponent";

const CounterComponent = () => {
  return (
    <div id="counter">
      <div class="container">
        <div class="row">
          <CounterSectionComponent 
          sectionTitle = 'Service Providers' 
          sectionNumber = '15,000 +'  />
          <CounterSectionComponent 
          sectionTitle = 'Service Providers' 
          sectionNumber = '15,000 +'  /><CounterSectionComponent 
          sectionTitle = 'Service Providers' 
          sectionNumber = '15,000 +'  />


            
        
      </div>
    </div>
  </div>

  );
};

export default CounterComponent;
