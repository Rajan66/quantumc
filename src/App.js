import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { motion, useScroll } from "framer-motion"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from "./pages/Aboutus"
import ServicesPage from "./pages/ServicesPage";
import Inquiry from "./components/Inquiry";

function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={ServicesPage} />
        </Routes>
        <Inquiry />
      </Router>


      <Footer />
    </div>
  );
}

export default App;
