import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './Pages/About';
import Service from './Pages/Service';
import PageNotfound from './Component/PageNotfound';
import Contact from './Pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const location = useLocation();
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleNavbarVisibilityChange = (visible) => {
    setNavbarVisible(visible);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <>
      <Navbar onNavbarVisibilityChange={handleNavbarVisibilityChange} />
      <Routes>
        <Route path="/" element={<Home navbarVisible={navbarVisible} />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotfound />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
