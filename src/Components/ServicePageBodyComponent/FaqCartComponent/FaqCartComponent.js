import React from "react";

const FaqCartComponent = () => {
  return (
      <div  className="card mb-1">
        <header   className="card-header p-1">
            <h3  target="_self" href="#" className="btn btn-link btn-block">            
                <span  className="when-opened">-</span> 
                <span  className="when-closed">+</span>
                Do I have to pay any charge if I don’t take any service? 
            </h3>
        </header> 
        <div  id="accordion-0" className="collapse show" >
            <div  className="card-body">
                <p  className="card-text">If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 100.  
                </p>
            </div>
        </div>
    </div>
  )
};

export default FaqCartComponent;
