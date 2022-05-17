import React from "react";

const ServiceOverviewComponent = ({title, listItems}) => {


  


   
    
  return (
    <>
        <h4 className="service-overview-component__title">{title}</h4>
       
        <div >
        <ol className="list-ordered">
        {
            listItems.map((item,i)=>(
                <li key={i} className="list-ordered__item"><p >{item}</p></li>

            ))
        }
        </ol>
        </div>

        
        
      
    </>
  )
};

export default ServiceOverviewComponent;
