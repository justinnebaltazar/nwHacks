import { useState } from 'react'
import styles from "./App.module.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <h1>Welcome to our website</h1>
    </div>
  )
}

export default App
