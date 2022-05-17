import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import DropDown from "../../Components/ServicePageComponents/DropDown";
import Hero from "../../Components/ServicePageComponents/Hero";
import Main from "../../Components/ServicePageComponents/Main";
import { faqData } from "./DataTemp/faqData";
import { overviewData } from "./DataTemp/overViewData";



const ServicesPage = () => {


  // if this data comes from database so we don't need to use useState.If need that will seen later.   

  /** */
  
/**
 * 
 */
  const asideData = ['Service Overview','FAQ', 'Reviews', 'Details']

/*** */





  



  var { name } = useParams();
  // const [jsonData, setJsonData] = useState([]);
  const [keyWord, setKeyword] = useState(name);
  const [myData, setMyData] = useState({});

  const navigate = useNavigate();

  //navigate not working
  const Reflect = (slug) => {
    setKeyword(slug);
  };

  useEffect(() => {
    //to fetch main data
    //-->extracting the specifice data based on useParams() --> keyword
    //--> filtered 2 times
    fetch("/allservices.json")
      .then((data) => data.json())
      .then((data) => {
        // setJsonData(data); //jsonDataSet
        var MyData = data.map((item, index) => {
          return {
            id: index,
            name: item.name,
            show: false,
            children: item.children.map((item) => {
              return { name: item.name, slug: item.slug };
            }),
          };
        });
        //first
        let filteredJson = data.filter((item) => {
          let a = item.children.filter((item) => {
            if (item.slug === keyWord) {
              return true;
            } else {
              return false;
            }
          });
          if (a.length > 0) {
            return true;
          } else {
            return false;
          }
        })[0];
        //second
        let realChildren = filteredJson.children.filter((item) => {
          if (item.slug === keyWord) {
            return true;
          } else {
            return false;
          }
        })[0];

        setMyData(realChildren);
      });
  }, [keyWord]);

  return (
    <>
     {console.log('service route')
     }
      <DropDown navigate={navigate} Reflect={Reflect} />
      <Hero myData={myData} />
      <Main  overviewData ={overviewData}
      asideData={asideData} faqData ={faqData}
       />
  
    </>
  );
};

export default ServicesPage;
