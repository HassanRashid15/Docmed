import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import ServiceDetail from './pages/ServiceDetail';
import FindDoctors from './pages/FindDoctors';
import DoctorProfile from './pages/DoctorProfile';
import PageNotFound from './components/PageNotFound';
import Contact from './pages/Contact';
import PatientPortal from './pages/PatientPortal';
import AiAssistant from './components/AiAssistant';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ROUTES } from './constants/siteInfo';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Preloader />
      <SiteHeader />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.service} element={<Service />} />
        <Route path={ROUTES.serviceDetail} element={<ServiceDetail />} />
        <Route path={ROUTES.findDoctors} element={<FindDoctors />} />
        <Route path={ROUTES.doctorProfile} element={<DoctorProfile />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.patientPortal} element={<PatientPortal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <AiAssistant />
    </>
  );
}

export default App;
