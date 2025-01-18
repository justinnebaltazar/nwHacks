import styles from "./App.module.css"
import LoginPage from "./components/LoginPage/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (

   <Router>
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
    </Routes>
   </Router>

  )
}

export default App
