import styles from "./App.module.css"
import LoginPage from "./components/LoginPage/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'; // Assuming Navbar is properly imported
import Donate from './components/Donate/Donate'; // Import the Donate page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <>
                <Navbar />
                <Donate />
                </>
        } />
  
        <Route path="/donate" element={<Donate />} /> {/* Add Donate route */}
      </Routes>
    </Router>
  );
}

export default App;
