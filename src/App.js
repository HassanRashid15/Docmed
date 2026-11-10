import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteHeader from './Component/SiteHeader';
import Footer from './Component/Footer';
import Preloader from './Component/Preloader';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import ServiceDetail from './Pages/ServiceDetail';
import FindDoctors from './Pages/FindDoctors';
import DoctorProfile from './Pages/DoctorProfile';
import PageNotfound from './Component/PageNotfound';
import Contact from './Pages/Contact';
import PatientPortal from './Pages/PatientPortal';
import AiAssistant from './Component/AiAssistant';
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
        <Route path="*" element={<PageNotfound />} />
      </Routes>
      <Footer />
      <AiAssistant />
    </>
  );
}

export default App;
