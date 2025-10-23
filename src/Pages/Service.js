import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../Component/Footer.js"
import SEO from "../Component/SEO.js";
import { FaCheck, FaStethoscope, FaHeartbeat, FaEye, FaTooth, FaBrain, FaLungs, FaBaby, FaXRay, FaUserMd, FaAmbulance, FaPills } from "react-icons/fa";
import { MdHealthAndSafety, MdLocalHospital, MdMedicalServices } from "react-icons/md";

function Service() {
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
        title="Medical Services - Comprehensive Healthcare"
        description="Explore Docmed's comprehensive medical services including cardiology, neurology, ophthalmology, dentistry, emergency care, and more. Expert doctors with advanced technology."
        keywords="medical services, healthcare services, cardiology, neurology, ophthalmology, dentistry, emergency care, medical procedures, health plans, medical treatment"
        canonical="/service"
        structuredData={serviceStructuredData}
      />
      <div className='service-page'>
      {/* Hero Section */}
      <div className='service-hero-section'>
        <div className='service-hero-content'>
          <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            Our <span style={{ fontWeight: 700 }}>Medical Services</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            Comprehensive healthcare services delivered with compassion, expertise, and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className='services-section'>
        <div className='container'>
          <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
            <h6>MEDICAL SERVICES</h6>
            <h2>What We Offer</h2>
            <p>From routine check-ups to specialized treatments, we provide comprehensive healthcare services to meet all your medical needs.</p>
          </div>
          
          <div className='row'>
            {medicalServices.map((service, index) => (
              <div key={index} className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 200)}>
                <div className='service-card'>
                  <div className='service-icon'>
                    {service.icon}
                  </div>
                  <div className='service-content'>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <ul className='service-features'>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}><FaCheck /> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='service-button'>
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Services Section */}
      <div className='emergency-services-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6' data-aos="fade-right" data-aos-duration="1100" data-aos-delay="300">
              <div className='emergency-content'>
                <h2>24/7 Emergency Care</h2>
                <p>Our emergency department is staffed with experienced medical professionals and equipped with advanced life-saving technology to provide immediate care when you need it most.</p>
                <div className='emergency-features'>
                  <div className='emergency-feature'>
                    <FaAmbulance />
                    <div>
                      <h5>Emergency Ambulance</h5>
                      <p>Rapid response emergency medical services</p>
                    </div>
                  </div>
                  <div className='emergency-feature'>
                    <MdLocalHospital />
                    <div>
                      <h5>Trauma Center</h5>
                      <p>Level 1 trauma center with specialized care</p>
                    </div>
                  </div>
                  <div className='emergency-feature'>
                    <FaUserMd />
                    <div>
                      <h5>Expert Staff</h5>
                      <p>Board-certified emergency physicians</p>
                    </div>
                  </div>
                </div>
                <div className='emergency-contact'>
                  <h4>Emergency Hotline: <span>+1 (555) 123-4567</span></h4>
                </div>
              </div>
            </div>
            <div className='col-lg-6' data-aos="fade-left" data-aos-duration="1100" data-aos-delay="600">
              <div className='emergency-image'>
                <img src="https://preview.colorlib.com/theme/docmed/img/about/business.png.webp" alt="Emergency Services" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Health Plans Section */}
      <div className='health-plans-section'>
        <div className='container'>
          <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
            <h6>HEALTH PLANS</h6>
            <h2>Choose Your Health Plan</h2>
            <p>Select the health plan that best fits your needs and budget. All plans include access to our expert medical team.</p>
          </div>
          <div className='pricing-table'>
            {pricingPlans.map((plan) => (
              <div className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''}`} key={plan.id} onClick={() => handleSelectPlan(plan.id)} data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (parseInt(plan.id === 'basic' ? 0 : plan.id === 'standard' ? 1 : plan.id === 'premium' ? 2 : 3) * 200)}>
                <h3 className="pricing-card-header">{plan.title}</h3>
                <div className="price"><sup>$</sup>{plan.price}<span>/month</span></div>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}><FaCheck />{feature}</li>
                  ))}
                </ul>
                <button className="order-btn">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className='additional-services-section'>
        <div className='container'>
          <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
            <h6>ADDITIONAL SERVICES</h6>
            <h2>Specialized Care</h2>
            <p>Beyond our core services, we offer specialized treatments and programs to address unique healthcare needs.</p>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <div className='additional-service-card'>
                <div className='service-icon'>
                  <FaPills />
                </div>
                <h4>Pharmacy Services</h4>
                <p>Full-service pharmacy with prescription medications, over-the-counter products, and medication counseling.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
              <div className='additional-service-card'>
                <div className='service-icon'>
                  <MdHealthAndSafety />
                </div>
                <h4>Wellness Programs</h4>
                <p>Comprehensive wellness programs including nutrition counseling, fitness assessments, and preventive health education.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700">
              <div className='additional-service-card'>
                <div className='service-icon'>
                  <MdMedicalServices />
                </div>
                <h4>Telemedicine</h4>
                <p>Virtual consultations with our medical professionals for convenient access to healthcare from anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Service
