import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Donate from "./components/Donate/Donate";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* About page route with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
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
