import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SEO from "../Component/SEO.js";
import { FaCheck, FaStethoscope, FaHeartbeat, FaEye, FaTooth, FaBrain, FaLungs, FaBaby, FaXRay, FaUserMd, FaAmbulance, FaPills, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdLocalHospital, MdMedicalServices } from "react-icons/md";

function Service() {
  useEffect(() => {
    document.title = "Medical Services | DOCMED - Comprehensive Healthcare Solutions";
  }, []);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const medicalServices = [
    {
      icon: <FaStethoscope />,
      title: 'General Medicine',
      description: 'Comprehensive primary healthcare services including routine check-ups, preventive care, and treatment of common illnesses.',
      features: ['Annual Physical Exams', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings']
    },
    {
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      description: 'Advanced heart and cardiovascular care with state-of-the-art diagnostic and treatment facilities.',
      features: ['Echocardiograms', 'Stress Testing', 'Cardiac Catheterization', 'Heart Surgery']
    },
    {
      icon: <FaEye />,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine vision exams to advanced surgical procedures.',
      features: ['Eye Exams', 'Cataract Surgery', 'LASIK Surgery', 'Retinal Treatment']
    },
    {
      icon: <FaTooth />,
      title: 'Dentistry',
      description: 'Comprehensive dental care including preventive, restorative, and cosmetic dentistry services.',
      features: ['Teeth Cleaning', 'Fillings & Crowns', 'Orthodontics', 'Cosmetic Dentistry']
    },
    {
      icon: <FaBrain />,
      title: 'Neurology',
      description: 'Specialized care for disorders of the nervous system, brain, and spinal cord.',
      features: ['Brain Imaging', 'Epilepsy Treatment', 'Stroke Care', 'Neurological Surgery']
    },
    {
      icon: <FaLungs />,
      title: 'Pulmonology',
      description: 'Expert care for respiratory conditions and lung diseases with advanced diagnostic tools.',
      features: ['Lung Function Tests', 'Bronchoscopy', 'Sleep Studies', 'Respiratory Therapy']
    },
    {
      icon: <FaBaby />,
      title: 'Pediatrics',
      description: 'Comprehensive healthcare for infants, children, and adolescents with specialized pediatric care.',
      features: ['Well-Child Visits', 'Immunizations', 'Developmental Screening', 'Pediatric Surgery']
    },
    {
      icon: <FaXRay />,
      title: 'Radiology',
      description: 'Advanced imaging services including X-rays, MRI, CT scans, and ultrasound for accurate diagnosis.',
      features: ['Digital X-rays', 'MRI Scans', 'CT Scans', 'Ultrasound']
    }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      title: 'Basic Health Plan',
      price: '99',
      features: [
        'Annual Physical Exam',
        'Basic Lab Tests',
        'Emergency Care',
        'General Consultation',
        'Preventive Screenings',
      ],
    },
    {
      id: 'standard',
      title: 'Standard Health Plan',
      price: '199',
      features: [
        'Everything in Basic',
        'Specialist Consultations',
        'Advanced Lab Tests',
        'Imaging Services',
        'Prescription Coverage',
      ],
    },
    {
      id: 'premium',
      title: 'Premium Health Plan',
      price: '399',
      features: [
        'Everything in Standard',
        '24/7 Telemedicine',
        'Priority Appointments',
        'Comprehensive Coverage',
        'Wellness Programs',
      ],
    },
    {
      id: 'family',
      title: 'Family Health Plan',
      price: '699',
      features: [
        'Everything in Premium',
        'Family Coverage',
        'Pediatric Care',
        'Maternity Services',
        'Mental Health Support',
      ],
    },
  ];
 


  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medical Services",
    "description": "Comprehensive healthcare services delivered with compassion, expertise, and cutting-edge technology.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Docmed Medical Center"
    },
    "serviceType": "Medical Services",
    "areaServed": "New York, NY",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "General Medicine",
            "description": "Comprehensive primary healthcare services including routine check-ups, preventive care, and treatment of common illnesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "Cardiology",
            "description": "Advanced heart and cardiovascular care with state-of-the-art diagnostic and treatment facilities."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Emergency Care",
            "description": "24/7 emergency services to provide immediate medical attention when you need it most."
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title={`Medical Services | DOCMED - Comprehensive Healthcare Solutions`}
        description="Discover DOCMED's comprehensive medical services including cardiology, dermatology, pediatric care, laboratory testing, CT scans, and more. Expert doctors with world-class care."
        keywords="medical services, healthcare services, echocardiograms, pediatric services, women's healthcare, dermatology, laboratory testing, CT scans, cardiology, neurology, ophthalmology"
        canonical="/service"
        structuredData={serviceStructuredData}
      />
      <div className='service-page'>
      {/* Hero Section */}
      <div className='service-hero-section'>
          <Container>
            <Row className='justify-content-center text-center'>
              <Col lg={8}>
                <h1 className='service-main-title'>Our Services</h1>
                <div className='service-title-underline'></div>
                <p className='service-subtitle'>
                  Learn more about the various services offered by Our Clinic and how we provide you with world-class care.
                </p>
              </Col>
            </Row>
          </Container>
          </div>
          
        {/* Services Grid Section */}
        <div className='services-grid-section'>
          <Container>
            <Row className='align-items-center'>
              {/* Left Column Services */}
              <Col lg={4} className='services-left-column'>
                <div className='service-item' data-aos="fade-right" data-aos-delay="200">
                  <h3>Echocardiograms</h3>
                  <p>Associates is able to view the beating of the heart and many of its structures</p>
                  </div>
                <div className='service-item' data-aos="fade-right" data-aos-delay="400">
                  <h3>Pediatric Services</h3>
                  <p>If you are expecting a child, follow-up care with Our clinic pediatricians can be arranged prior to or after your hospital/birth discharge</p>
                  </div>
                <div className='service-item' data-aos="fade-right" data-aos-delay="600">
                  <h3>Women's Healthcare</h3>
                  <p>Women's health is a field covering the numerous health concerns that women face, from reproductive and sexual health to mammograms</p>
                  </div>
              </Col>

              {/* Center Doctor Image */}
              <Col lg={4} className='text-center'>
                <div className='doctor-image-container' data-aos="zoom-in" data-aos-delay="300">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Doctor" 
                    className='doctor-image'
                  />
                </div>
              </Col>

              {/* Right Column Services */}
              <Col lg={4} className='services-right-column'>
                <div className='service-item' data-aos="fade-left" data-aos-delay="200">
                  <h3>Dermatology</h3>
                  <p>Our providers are trained to handle a spectrum of skin conditions, covering the majority of your dermatology</p>
                    </div>
                <div className='service-item' data-aos="fade-left" data-aos-delay="400">
                  <h3>Laboratory Testing</h3>
                  <p>Laboratory orders are created within the patient's electronic medical record (EHR) and transmitted to our laboratory. Once the sample is obtained</p>
                </div>
                <div className='service-item' data-aos="fade-left" data-aos-delay="600">
                  <h3>CT Scans</h3>
                  <p>A CT scan (computed tomography) scan is a non-invasive procedure that allows providers to view 3D images taken from a series of 2D X-ray images</p>
                </div>
              </Col>
            </Row>
          </Container>
      </div>

      {/* Additional Services Section */}
      <div className='additional-services-section'>
          <Container>
            <Row className='text-center mb-5'>
              <Col>
                <h2 className='section-title'>Additional Services</h2>
                <p className='section-subtitle'>Comprehensive healthcare solutions for all your medical needs</p>
              </Col>
            </Row>
            <Row className='g-4'>
              <Col lg={3} md={6}>
                <Card className='h-100 border-0 shadow-sm text-center p-4'>
                  <Card.Body>
                    <FaStethoscope className='text-primary mb-3' style={{fontSize: '3rem'}} />
                    <h5 className='fw-bold text-dark mb-3'>General Medicine</h5>
                    <p className='text-muted'>
                      Comprehensive primary healthcare services including routine check-ups and preventive care.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card className='h-100 border-0 shadow-sm text-center p-4'>
                  <Card.Body>
                    <FaHeartbeat className='text-primary mb-3' style={{fontSize: '3rem'}} />
                    <h5 className='fw-bold text-dark mb-3'>Cardiology</h5>
                    <p className='text-muted'>
                      Advanced heart and cardiovascular care with state-of-the-art diagnostic facilities.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card className='h-100 border-0 shadow-sm text-center p-4'>
                  <Card.Body>
                    <FaEye className='text-primary mb-3' style={{fontSize: '3rem'}} />
                    <h5 className='fw-bold text-dark mb-3'>Ophthalmology</h5>
                    <p className='text-muted'>
                      Complete eye care services from routine vision exams to advanced surgical procedures.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card className='h-100 border-0 shadow-sm text-center p-4'>
                  <Card.Body>
                    <FaTooth className='text-primary mb-3' style={{fontSize: '3rem'}} />
                    <h5 className='fw-bold text-dark mb-3'>Dentistry</h5>
                    <p className='text-muted'>
                      Comprehensive dental care including preventive, restorative, and cosmetic services.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          </div>

        {/* Emergency Services CTA */}
        <div className='emergency-cta-section bg-primary text-white'>
          <Container>
            <Row className='text-center'>
              <Col>
                <h2 className='display-5 fw-bold mb-4'>Need Emergency Care?</h2>
                <p className='lead mb-4'>
                  Our emergency department is staffed 24/7 with experienced medical professionals.
                </p>
                <div className='d-flex justify-content-center gap-3 flex-wrap'>
                  <Button variant="light" size="lg" className='px-4 py-3'>
                    <FaPhone className='me-2' />
                    Call Emergency: (555) 123-4567
                  </Button>
                  <Button variant="outline-light" size="lg" className='px-4 py-3'>
                    <FaMapMarkerAlt className='me-2' />
                    Find Our Location
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
    </>
  )
}

export default Service
