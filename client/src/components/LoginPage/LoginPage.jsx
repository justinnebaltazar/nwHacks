import React from "react"
import { useState } from "react";
import styles from "./LoginPage.module.css";

// user login page 
export default function LoginPage() {
    const [username, setUserName] = useState(''); 
    const [password, setPassword] = useState('');

    return (
        // onSubmit = {login}
        <div className={styles.container}> 
            <form className={styles.login}>
            <h1>Login</h1>
            <input type="text" 
            placeholder="username" 
            value={username}
            onChange={ev => setUserName(ev.target.value)}
            ></input>
            <input type="password" 
            placeholder="password" 
            value={password} 
            onChange={ev => setPassword(ev.target.value)}
            ></input>
            <button className={styles.loginBtn}>Login</button>
        </form>
        </div>
     
    )
}