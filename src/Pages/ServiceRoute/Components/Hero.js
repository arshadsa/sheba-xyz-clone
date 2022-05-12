import React from "react";

import './HeroStyle.css'




const Hero = (props) => {
  let { myData } = props;

  const getLastWord = () => {
    let selectedWord = myData.name;
    // console.log(a);
    let isContain = selectedWord?.includes("ervice");
    if (isContain) {
      return "";
    } else {
      return "Service";
    }
  };
  return (
    <div className="service-badge" style={{ position: "relative", height: "50vh", zIndex: 1 }}>
      <img
        src={myData.thumb}
        alt=""
        style={{
          height: "50vh",
          width: "100%",
          position: "absolute",
          top: "0px",
          objectFit: "cover",
          zIndex: -2,
        }}
      />
      <div
        style={{
          height: "50vh",
          width: "100%",
          position: "absolute",
          top: "0px",
          objectFit: "cover",
          zIndex: -1,
          backgroundColor: "black",
          opacity: "0.3",
        }}
      ></div>
      <div className=" container"  >
      <ol  className="breadcrumb">
        <li  className="breadcrumb-item">
          <a  href="/" className="nuxt-link-active" target="_self">Home</a>
        </li>
        <li  className="breadcrumb-item">
          <a  href="/ac-repair-services" className="" target="_self">AC Repair Services</a>
        </li>
        <li  className="breadcrumb-item active">
          <span  aria-current="location">AC Servicing</span>
        </li>
      </ol>


        <h1 className=" d-flex pt-5 text-white mb-4 service-title">
        
            {myData.name}
             {/*{getLastWord()
             }*/}
          
          <span >
            <img 
              src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/png/badge.png"
              alt=""
              style={{ height: "2rem", width: "auto",marginLeft:"15px", display: "inline-block" }}
            />
          </span>
        </h1>
        <div
          className=" badge mb-4 text-white rating-review "
          
        >
          <h3>4.7 out of 5</h3><h5 className=" mb-5 text-white">(6932 ratings on 3 services)</h5>
        </div>

        <div  id="reviewRating">
          <div  className="rating-review"><div  className="rating" style={{position: 'relative'}}>
            <img  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/star-white.svg" 
            alt={myData.name} 
            style={{width: "24px", height: '24px'}} /> 
            <p  className="average-rating">4.67</p> 
            <p  className="total-rating">out of 5</p>
            </div> 
            </div> <div  className="review"><p >(25015 ratings on 5 services)</p></div></div>




        
        <ul className="">
          <li className=" h4 mb-3 text-white">24/7 Customer Support</li>
          <li className=" h4 mb-3 text-white">
            Trusted & Reliable Electricians
          </li>
          <li className="  h4 mb-3 text-white">
            Guaranteed Customer Satisfaction
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
