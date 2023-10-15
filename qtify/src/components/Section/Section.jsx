import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section = ({ title, data, type }) => {
  const [carousalToggle, setCarousalToggle] = useState(true);
  const handleToggle = () => {
    setCarousalToggle(!carousalToggle);
  };
  return (
    <div  className={styles.border}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carousalToggle ? "Collapse all" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper} >
          {!carousalToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
