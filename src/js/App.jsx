// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarfieldBackground from "./components/Starfield-background";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <StarfieldBackground />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
      </Routes>
    </Router>
  );
}

export default App;
