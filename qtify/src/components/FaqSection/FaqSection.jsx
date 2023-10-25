import React from "react";
import styles from "./FaqSection.module.css";
import BasicAccordion from "../Accordion/BaseAccordion";
import { faqs } from "../../constants/constants";

const FaqSection = () => {
  return (
    <div className={styles.border}>
      <div className={styles.header}>
        <h3>FAQs</h3>
      </div>
      <div>
        {faqs.map((item) => {
          return <BasicAccordion title={item.title} content={item.content} />;
        })}
      </div>
    </div>
  );
};

export default FaqSection;
