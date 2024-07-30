import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { RxHamburgerMenu } from "react-icons/rx";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
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

    // Check if the device is a laptop by checking the window width
    if (window.innerWidth > 1024) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleMap = {
    '/': 'Home Page',
    '/about': 'About Page',
    '/service': 'Service Page',
    '/experience': 'Experience Page',
    '/work': 'Work Page',
    '/contact': 'Contact Page'
  };

  useEffect(() => {
    const pageTitle = titleMap[location.pathname] || 'My App';
    document.title = pageTitle;
  }, [location]);

  return (
    <Navbar expand="lg" className={`bg-white navbar-parent ${navbarVisible ? 'visible' : 'hidden'}`} fixed="top">
      <Container fluid className='navbar-page'>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <RxHamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navbar-middle-custom" navbarScroll>
            <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="/service" className={location.pathname === '/service' ? 'active' : ''}>Service</Nav.Link>
            <Nav.Link href="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Nav.Link>
            <Nav.Link href="/work" className={location.pathname === '/work' ? 'active' : ''}>Work</Nav.Link>
            <Nav.Link href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex navbar-alignment-custom">
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
