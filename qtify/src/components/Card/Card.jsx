import React from "react";
import styles from "./Card.module.css"

const Card = ({ cardImage, followers, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <img className= {styles.image} src={cardImage} alt="Not found" />
        <button className={styles.followerButton}>{followers}</button>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Card;
