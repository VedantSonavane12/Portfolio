import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // Import About page
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Added About route */}
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
