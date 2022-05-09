import React from "react";
import './DetailsComponentstyle.css'

const DetailsComponents = () => {
  return (
    <>

    <div id="details">    
      <div id="usp">      
        <div className="container">
          <div className="row ml-0 mr-0">
            <div className="home-header">
              <p className="regular-paragraph">Why Choose US</p> 
              <h3 className="h2-title">Because we care about your safety..</h3>
            </div>
          </div>           
          <div className="row">
            <div className="usp-section container">            
              <div className="row d-flex">
                <div className="col-sm-12 col-md-5 pl-0 align-self-center">
                  <div className="row ml-0"><div className="col-6">
                    <div className="d-flex justify-content-center usp-section__item round-border">
                      <div className="usp-section__item__img align-self-center">
                        <img alt="Ensuring Masks" data-src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_mask.png" src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_mask.png" lazy="loaded" />
                      </div>
                      <div className="align-self-center">
                        <p className="default-paragraph" >  Ensuring <br/> Masks</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-center usp-section__item round-border">
                      <div className="usp-section__item__img align-self-center">
                        <img alt="24/7 Support" data-src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png" src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png" lazy="loaded" />
                      </div> 
                      <div className="align-self-center">
                        <p className="default-paragraph">24/7 <br/> Support</p>
                      </div>
                    </div>
                  </div>
                  </div> 
                  <div className="clear"></div> 
                  <div className="row ml-0">
                    <div className="col-6">
                      <div className="d-flex justify-content-center usp-section__item round-border">
                        <div className="align-self-center usp-section__item__img">
                          <img alt="Sanitising Hands &amp; Equipment" data-src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_sanitized.png" src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_sanitized.png" lazy="loaded" />
                        </div> 
                        <div className="align-self-center">
                          <p className="default-paragraph align-self-center">Sanitising<br/> Hands &amp;<br/> Equipment</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-center usp-section__item round-border">
                        <div className="align-self-center usp-section__item__img">
                          <img alt="Ensuring Gloves" data-src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_gloves.png" src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_gloves.png" lazy="loaded" />
                        </div> 
                      <div className="align-self-center">
                        <p className="default-paragraph align-self-center">Ensuring <br/> Gloves</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-7 usp-banner">
                <img alt="why choose us" className="round-border" data-src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp" src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp" lazy="loaded" style={{width: '635px', height: '256px'}} />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    
    
    </>
  )
};

export default DetailsComponents;
