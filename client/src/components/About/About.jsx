import React from 'react'
import styles from "./About.module.css";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <div className = {styles.About}>
        <div>
            <h1 className={styles.title}>
                ABOUT US
            </h1>
            <div className={styles.subtitle}>
                Welcome to Blah blah! Wildfires have been ravaging California, spreading rapidly across the state and destroying homes and communties. As these flames consume buildings and memories, people have been forced to flee with little of their belongings. Our mission is to connect those who are in need of resources with supplies through donations. You can support these victims directly by donating items such as clothes and food. Together, we can support California and rebuild a sense of community.
            </div>
            <Link to="/donate">
            <button className={styles.donateButton}>
                Donate Now
            </button>
            </Link>
        </div>
    </div>
  )
}

export default About