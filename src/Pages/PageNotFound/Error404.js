import React from "react";

import { Link } from "react-router-dom";

import "./error404Style.css";

const Error404 = () => {
  return (
    <div id="NotFound" >
      <div class="container text-center" >
        <img src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/live/img/d9300dd.svg" alt="404 Not Found" class="image img-fluid" /> 
        <h1 class="h1-title text-center " >404</h1> 
        <p class="info fw-bold h1" >Page Not Found</p> 
        <p class="text" >The link you clicked may be broken or the page may have been removed or renamed! Please search
      again or goto to home.</p> 
        <div class="d-flex justify-content-center" >
          <Link to='/' type="button" class="btn primary-button--outline primary-button--journey-add btn-secondary" >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
