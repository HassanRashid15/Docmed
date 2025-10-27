import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { RxHamburgerMenu } from "react-icons/rx";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import weblogo from "./../Assets/Images/weblogo.png";
import VectorSVG from "./../Assets/Images/Vector.svg";
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar({ onNavbarVisibilityChange }) {
  const [navbarVisible, setNavbarVisible] = useState(true); // Hide initially
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY);
      if (window.scrollY === 0 || window.scrollY > 100) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    if (window.innerWidth > 1024) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Notify parent component when navbar visibility changes
  useEffect(() => {
    if (onNavbarVisibilityChange) {
      onNavbarVisibilityChange(navbarVisible);
    }
  }, [navbarVisible, onNavbarVisibilityChange]);

  const titleMap = {
    '/': 'Home Page',
    '/about': 'About Page',
    '/service': 'Service Page',
    '/contact': 'Contact Page'
  };

  useEffect(() => {
    const pageTitle = titleMap[location.pathname] || 'My App';
    document.title = pageTitle;
  }, [location]);

  return (
    <Navbar expand="lg" className={`bg-white/80 navbar-parent ${navbarVisible ? 'visible' : 'hidden'}`} fixed="top">
      <Container fluid className='navbar-page'>
        <div className='navbar-logo-section'>
          <img src={weblogo} alt="Docmed Logo" className="navbar-logo"/>
          <Navbar.Brand className='web-heading' href="#">DOCMED</Navbar.Brand>
        </div>
        
        {/* Mobile controls - appointment button and hamburger menu */}
        <div className='navbar-mobile-controls d-lg-none'>
          <div className='navbar-appointment-mobile'>
            <div className='navbar-button-custom'>
              <Button className='appointment-icon-btn'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15H12.01M12 12H12.01M12 9H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
          
          <Navbar.Toggle aria-controls="navbarScroll">
            <RxHamburgerMenu />
          </Navbar.Toggle>
        </div>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navbar-middle-custom mx-auto" navbarScroll>
            <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="/service" className={location.pathname === '/service' ? 'active' : ''}>Service</Nav.Link>
            <Nav.Link href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
          </Nav>
          
          {/* Appointment button for desktop - hidden on small screens */}
          <Form className="d-none d-lg-flex navbar-alignment-custom">
            <div className='navbar-button-custom'>
              <Button>Make An Appointment</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
