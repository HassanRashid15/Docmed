import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './Pages/About';
import { IoMdArrowDropright } from "react-icons/io";
import Work from './Pages/Work';
import Service from './Pages/Service';
import Experience from './Pages/Experience';
import PageNotfound from './Component/PageNotfound';
import Contact from './Pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(segment => segment !== '');
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
      <Navbar />
      {location.pathname !== '/' && (
        <div className='breadcrumbs'>
          <span className='home-breadcrumb'>
            <Link to='/'>Home</Link>
            {segments.length > 0 && ' '}
            {segments.length > 0 && <IoMdArrowDropright />}
          </span>
          {segments.map((segment, i) => (
            <span key={i}>
              <Link to={`/${segments.slice(0, i + 1).join('/')}`} className={segments.length === i + 1 ? 'active' : ''}>
                {segment.toUpperCase()}
              </Link>
              {segments.length - 1 !== i && <IoMdArrowDropright />}
            </span>
          ))}
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotfound />}/>
      </Routes>
    </>
  );
}

export default App;
