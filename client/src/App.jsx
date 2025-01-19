import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Donate from "./components/Donate/Donate";
import LoginPage from "./components/LoginPage/LoginPage";
<<<<<<< HEAD
import About from "./components/About/About";
=======
import RegisterPage from "./components/Register/RegisterPage";
>>>>>>> 66f4d2d909b995a8b53ec326d49d5e1403eb5364

function App() {
  return (
    <Router>
      <Routes>
        {/* About page route with Navbar */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        {/* Donate route with Navbar */}
        <Route
          path="/donate"
          element={
            <>
              <Navbar />
              <Donate />
            </>
          }
        />

        {/* Login route without Navbar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
