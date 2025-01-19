import { useState } from "react";
import styles from "./RegisterPage.module.css"

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST', 
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
    
        if (response.status === 200) {
            alert('Registration successful');
            
        } else {
            alert('Registration failed');
        }

    }

    return (
        <div className={styles.container}>
            <form className={styles.register} onSubmit={register}>

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