import React from "react";
import HomeHeader from "../globalComponents/homeheader/HomeHeader";
import Container from "./detail-components/container";
import './DetailsComponentstyle.css'


const DetailsComponents = () => {
  return (
    <>

    <div id="details">    
      <div id="usp">      
        <div className="container">
          <HomeHeader 
            title = 'Because we care about your safety..'
            regularParagraph = 'Why Choose US'
          />
          <div className="row">
                  {/*.............*/}
          <Container />

            
                {/*.............*/}

      </div>
      </div>
      </div>
      </div>
    
    
    </>
  )
};

export default DetailsComponents;
