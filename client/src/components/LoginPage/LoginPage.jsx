import React from "react"
import { useState } from "react";
import styles from "./LoginPage.module.css";

// user login page 
export default function LoginPage() {
    const [username, setUserName] = useState(''); 
    const [password, setPassword] = useState('');

    function login(ev) {
        ev.preventDefault();
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type' : 'application/json'}
        })
    }

    return (
        <div className={styles.container} onSubmit={login}> 
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