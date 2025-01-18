import styles from "./App.module.css"
import LoginPage from "./components/LoginPage/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar"

function App() {

  return (

   <Router>
    <Routes>
      <Route path="/" element={
            <>
              <NavBar/>
            </>
          } />
    </Routes>
   </Router>

  )
}

export default App
