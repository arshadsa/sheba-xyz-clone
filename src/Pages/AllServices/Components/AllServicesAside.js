import React, { useEffect, useState } from "react";
import "../Components/AllServicesAside.css";
import CategoryItem from "./CategoryItem";

const AllServicesAside = (props) => {
  const { asideData } = props;

  useEffect(() => {
    console.log(asideData);
  }, []);
  return (
    <div className=" category-navigation">
      <ul className=" list-unstyled category-list">
        {asideData.map((item, index) => {
          return <CategoryItem text={item} key={index} target={index} />;
        })}
      </ul>
    </div>
  );
};

export default AllServicesAside;
