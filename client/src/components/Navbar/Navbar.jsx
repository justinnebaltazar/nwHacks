import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Get Help</a>
            </li>
            <li>
                <a href="#">Donate</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar