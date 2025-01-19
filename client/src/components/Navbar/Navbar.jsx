import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <Link to ="/donate">
                </Link>
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