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
                <Link to ="/donate">Donate</Link>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar