import React from 'react';
import styles from './HeroImage.module.css'
import {ReactComponent as HeroImageSvg} from "../../assets/HeroImage.svg"

const HeroImage = () => {
  return (
    <div className= {styles.heroImage}>
   <HeroImageSvg />
   </div>
  )
}

export default HeroImage