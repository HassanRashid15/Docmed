import React, { useState, useEffect } from 'react';
import SEO from "./../Component/SEO.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docpic from "./../Assets/Images/docpic.png";
import ComingSoon from "./../PagesComponent/ComingSoon";
import ServicesSection from "../PagesComponent/ServicesSection";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { FaRegCheckCircle } from "react-icons/fa";
import Newsletter from './../Component/Newsletter';
function Home({ navbarVisible }) {
  useEffect(() => {
    document.title = "DOCMED - Premier Medical Center | Expert Healthcare Services";
  }, []);

  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    gap: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Docmed Medical Center",
    "alternateName": "Docmed",
    "description": "Leading healthcare provider offering comprehensive medical services including emergency care, cardiology, neurology, ophthalmology, and more. Your trusted healthcare partner for over 25 years.",
    "url": "https://docmed.com",
    "logo": "https://docmed.com/images/logo.png",
    "image": "https://docmed.com/images/docmed-facility.jpg",
    "telephone": "+1-234-678-9108-99",
    "email": "contact@docmed.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1055 Arthur ave Elk Groot, 67",
      "addressLocality": "New Palmas",
      "addressRegion": "South Carolina",
      "postalCode": "29150",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6846",
      "longitude": "-80.2106"
    },
    "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-17:00, Su 10:00-16:00",
    "sameAs": [
      "https://www.facebook.com/docmed",
      "https://www.twitter.com/docmed",
      "https://www.linkedin.com/company/docmed"
    ],
    "medicalSpecialty": [
      "Cardiology",
      "Neurology", 
      "Ophthalmology",
      "Dentistry",
      "Emergency Medicine",
      "General Medicine",
      "Pediatrics",
      "Radiology"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Emergency Care",
            "description": "24/7 emergency medical services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cardiology",
            "description": "Heart and cardiovascular care"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Neurology",
            "description": "Brain and nervous system care"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Ophthalmology",
            "description": "Eye care and vision services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Dentistry",
            "description": "Dental care and oral health"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEO
        title={`DOCMED - Premier Medical Center | Expert Healthcare Services`}
        description="DOCMED Medical Center provides exceptional healthcare services with expert doctors, advanced technology, and 24/7 emergency care. Your trusted healthcare partner for over 25 years."
        keywords="medical center, healthcare, hospital, emergency care, cardiology, neurology, ophthalmology, dentistry, medical services, patient care, healthcare provider, doctor appointments"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <div className={`home-page ${navbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className='hero-section'>
          <div className='hero-section-content'>
            <h1 className= 'data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"'>
              For Your Family <span style={{ fontWeight: 700 }}>Health care</span></h1>
            <p>In healthcare sector, service excellence is the facility of  the hospital as
              healthcare service provider to consistently.</p>
            <div className="hero-section-button">
              <button>Check Our Services</button>
            </div>
          </div>
        </div>
        
        {/* Medical Services Ticker */}
        <figure className="marquee marquee--navy" data-text="Emergency Care Available 24/7 ★ Expert Medical Professionals ★ Advanced Medical Technology ★ Comprehensive Health Services ★ Patient-Centered Care ★ Book Your Appointment Today">
          <span className="sr-only">Emergency Care Available 24/7 ★ Expert Medical Professionals ★ Advanced Medical Technology ★ Comprehensive Health Services ★ Patient-Centered Care ★ Book Your Appointment Today</span>
        </figure>
        <div className='welcome-section d-flex'>
          <div className='welcome-section-image-custom'>
            <img src={docpic} alt="Professional doctor providing healthcare services at Docmed Medical Center" />
          </div>
          <div className='welcome-section-content data-aos-fade-up' 
  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="300">
            <h1 className='data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300"' >Welcome to Docmed</h1>
            <p 
>
  Best Care For Your Good Health
</p>
            <h6>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</h6>
            <ul>
  <li data-aos="fade-right" data-aos-delay="300"><FaRegCheckCircle />Apartments frequently or motionless.</li>
  <li data-aos="fade-right" data-aos-delay="500"><FaRegCheckCircle />Duis aute irure dolor in reprehenderit in voluptate.</li>
  <li data-aos="fade-right" data-aos-delay="700"><FaRegCheckCircle />Voluptatem quia voluptas sit aspernatur.</li>
</ul>
            <div className='welcome-section-button'>
              <button>Learn More</button>
            </div>
          </div>

        </div>
        <div className='service-section-grandparent'>
          <div className='service-section-grandparent-content' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="300">
            <h6>SERVICES</h6>
            <h4>Services</h4>
            <h5>Services We Provide</h5>
          </div>
<ServicesSection /> 
          {/* <div className='serivce-section-parent d-flex'>
            <div className='service-section' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="200">
              <div className='service-section-icon'>

              </div>
              <div className='service-section-content'>
                <LiaHospitalAltSolid />
                <h2>Hospitality</h2>
                <h3>Clinical excellence must be the priority for any health care service provider.</h3>
              </div>
              <div className='service-section-button'>
                <button>Apply For A Bed</button>
              </div>
            </div>
            <div className='service-section' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="400">
              <div className='service-section-icon'>

              </div>
              <div className='service-section-content'>
                <LuStethoscope />
                <h2>Emergency Care</h2>
                <h3>Clinical excellence must be the priority for any health care service provider.</h3>
              </div>
              <div className='service-section-button'>
                <button>+9230-1234-4567</button>
              </div>
            </div>
            <div className='service-section' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="600">
              <div className='service-section-icon'>

              </div>
              <div className='service-section-content'>
              <LuStethoscope />
                <h2>Chamber Service
                </h2>
                <h3>Clinical excellence must be the priority for any health care service provider.</h3>
              </div>
              <div className='service-section-button'>
                <button>Make An Appointment</button>
              </div>
            </div>
            <div className='service-section' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="800">
              <div className='service-section-icon'>

              </div>
              <div className='service-section-content'>
                <IoMdNutrition />
                <h2>Nutritionist</h2>
                <h3>Clinical excellence must be the priority for any health care service provider.</h3>
              </div>
              <div className='service-section-button'>
                <button>Make An Appointment</button>
              </div>
            </div>

          </div> */}



        </div>
        <div className='department-parent-section'>
          <div className='department-section'>
            <div className='department-content-section' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="300">
              <h5>DEPARTMENTS</h5>
              <h1>Our departments</h1>
              <p>Esteem spirit temper too say adieus who direct esteem.
                It esteems luckily or picture placing drawing.</p>
            </div>
            <div className='department-card-body pt-4'>
              <div className='department-card-section' >
                <div className="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="300" >
                  <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center" className="card-img-top" alt="Eye Care" />
                  <div className="card-body">
                    <h5 className="card-title">Eye Care</h5>
                    <p className="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" className="btn ">Learn More</a>
                  </div>
                </div>
                <div className="card"   data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="600">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center" className="card-img-top" alt="Physical Therapy" />
                  <div className="card-body">
                    <h5 className="card-title">Physical Therapy</h5>
                    <p className="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" className="btn">Learn More</a>
                  </div>
                </div>
                <div className="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="900">
                  <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop&crop=center" className="card-img-top" alt="Dental Care" />
                  <div className="card-body">
                    <h5 className="card-title">Dental Care</h5>
                    <p className="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" className="btn ">Learn More</a>
                  </div>
                </div>
                <div className="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1200">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center" className="card-img-top" alt="Diagnostic Test" />
                  <div className="card-body">
                    <h5 className="card-title">Diagnostic Test</h5>
                    <p className="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" className="btn ">Learn More</a>
                  </div>
                </div>
                <div className="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1500">
                  <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&crop=center" className="card-img-top" alt="Skin Surgery" />
                  <div className="card-body">
                    <h5 className="card-title">Skin Surgery</h5>
                    <p className="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" className="btn ">Learn More</a>
                  </div>
                </div>
                <div className="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1800">
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop&crop=center" className="card-img-top" alt="Surgery Service" />
                  <div className="card-body">
                    <h5 className="card-title">Surgery Service</h5>
                    <p className="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" className="btn">Learn More</a>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>


        {/* <MDBCarousel showIndicators showControls fade interval={50000}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='Modern medical facility with advanced healthcare technology' />
        <MDBCarouselCaption>
          <h5>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor.
          sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. </h5>
          <p>HR DESIGNZ.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='Expert medical team providing compassionate patient care' />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='State-of-the-art medical equipment and healthcare technology' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>  */}
  




  <div className='navtab-parent'>
        <MDBTabs fill className='pt-3'>
          <MDBTabsItem>
        
            <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
              Unique Services
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
              Qualified Doctor
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
              Emergency Departments
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
     
        <MDBTabsContent>
          <MDBTabsPane open={fillActive === 'tab1'}>
            <div className='tab-content-parent d-flex align-items-center'>
              <div className='tab-icon-custom' data-aos="fade-right" data-aos-delay="300">
                <h1>Leading edge care for Your family</h1>
                <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
              </div>
              <div className='tab-image-custom' data-aos="fade-left" data-aos-delay="600">
                <img src={"https://preview.colorlib.com/theme/docmed/img/about/business.png.webp"} alt="Business and healthcare management services at Docmed" />
              </div>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={fillActive === 'tab2'}>
          <div className='tab-content-parent d-flex align-items-center'>
          <div className='tab-image-custom' data-aos="fade-left" data-aos-delay="600">
                <img src={"https://preview.colorlib.com/theme/docmed/img/about/business.png.webp"} alt="Business and healthcare management services at Docmed" />
              </div>
              <div className='tab-icon-custom' data-aos="fade-right" data-aos-delay="300">
                <h1>Leading edge care for Your family</h1>
                <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
              </div>
             
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={fillActive === 'tab3'}>
          <div className='tab-content-parent d-flex align-items-center'>
              <div className='tab-icon-custom'data-aos="fade-right" data-aos-delay="300">
                <h1>Leading edge care for Your family</h1>
                <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
              </div>
              <div className='tab-image-custom' ata-aos="fade-left" data-aos-delay="600">
                <img src={"https://preview.colorlib.com/theme/docmed/img/about/business.png.webp"} alt="Business and healthcare management services at Docmed" />
              </div>
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
        </div>
        <div className='slider-parent'>
          <div className='our-doc-custom' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="300">
          
<h1>Our Expert Doctors</h1>
<p>Our expert doctors provide exceptional care with a commitment to your health.</p>
<h6>DOCTORS</h6>
          </div>
        <Slider {...settings}>
      <div className='slider-custom'data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="300">
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/1.png"} alt="Dr. Sarah Johnson - Expert Cardiologist at Docmed Medical Center"/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
      <div className='slider-custom' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="600">
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/3.png"} alt="Dr. Michael Chen - Expert Neurologist at Docmed Medical Center"/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
      <div className='slider-custom' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="900">
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/2.png"} alt="Dr. Emily Rodriguez - Expert Ophthalmologist at Docmed Medical Center"/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
      <div className='slider-custom' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1300" >
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/4.png"} alt="Dr. David Thompson - Expert Dentist at Docmed Medical Center"/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
    </Slider>
    </div>
          <Newsletter />

          <ComingSoon/>

      </div>
    </>
  )
}

export default Home