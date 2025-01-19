import { useState } from "react";
import styles from "./RegisterPage.module.css"

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.container}>
            <form className={styles.register}>

                <h1>Register</h1>
                <input type="text" 
                placeholder="username"
                value = {username}
                onChange = {ev => setUsername(ev.target.value)}>
                </input>

                <input type="password"
                placeholder="password"
                value = {password}
                onChange = {ev => setPassword(ev.target.value)}>
                </input>

                <button className={styles.registerBtn}>Register</button>
            </form>
        </div>
    )
}