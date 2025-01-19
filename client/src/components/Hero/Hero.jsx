import React from 'react'
import styles from "./Hero.modules.css";

const Hero = () => {
  return (
    <div className = {styles.Hero}>
    <div>
        <h1 className={styles.title}>
            Donate or Request Assistance Today
        </h1>
        <div className={styles.overlay}>
            <p className={styles.p}>
                Your support makes a difference
            </p>
        <Link to="/register">
        <button className={styles.registerButton}>
            Register Now
        </button>
        </Link>

           
        </div>
       
    </div>
</div>
  )
}

export default Hero