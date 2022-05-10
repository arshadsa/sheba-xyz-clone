import React from "react";
import "./Service.css";

const Service = ({ img, text }) => {
  return (
    <>
      <div className="col-3 me-3">
        <img src={img} alt="" className="service-img" />
        <p className="service-p">{text}</p>
      </div>
    </>
  );
};

export default Service;
