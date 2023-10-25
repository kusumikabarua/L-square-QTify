import React from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/BasicTabs";

const Section = ({ title, data, type,filteredData=null,filteredDataValues=[],toggle=false,handleToggle=null,value=0,handleChange=null }) => {
  //const [carousalToggle, setCarousalToggle] = useState(true);
//   const handleToggle = () => {
//     setCarousalToggle(!carousalToggle);
//   };
  return (
    <div  className={styles.border}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!toggle?"Collapse all" : "Show All"}
        </h4>
      </div>
      {type==="song"?<BasicTabs value={value} handleChange={handleChange}/>:null}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper} >
          {!toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel data={filteredDataValues} renderComponent={(filteredDataValues)=><Card data={filteredDataValues} type={type} />}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
