import React, { useState } from 'react';
import Footer from "./../Component/Footer.js";
import SEO from "./../Component/SEO.js";
import { LuStethoscope } from "react-icons/lu";
import { IoMdNutrition } from "react-icons/io";
import Slider from "react-slick";
import docpic from "./../Assets/Images/docpic.png";
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { LiaHospitalAltSolid } from "react-icons/lia";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { FaRegCheckCircle } from "react-icons/fa";
function Home() {
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
    "description": "Leading healthcare provider offering comprehensive medical services including emergency care, cardiology, neurology, ophthalmology, and more.",
    "url": "https://docmed.com",
    "logo": "https://docmed.com/images/logo.png",
    "image": "https://docmed.com/images/docmed-facility.jpg",
    "telephone": "+1-555-123-4567",
    "email": "info@docmed.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Center Drive",
      "addressLocality": "Healthcare District",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-17:00, Su 10:00-16:00",
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
            "name": "Emergency Care"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cardiology Services"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Home - Premier Healthcare Services"
        description="Docmed Medical Center provides exceptional healthcare services with expert doctors, advanced technology, and 24/7 emergency care. Your trusted healthcare partner for over 25 years."
        keywords="medical center, healthcare, hospital, emergency care, cardiology, neurology, ophthalmology, dentistry, medical services, patient care, healthcare provider, doctor appointments"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <div className='home-page'>
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
        <div className='welcome-section d-flex'>
          <div className='welcome-section-image-custom'>
            <img src={docpic} />
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
          <div className='serivce-section-parent d-flex'>
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

          </div>
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
                <div class="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="300" >
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Eye Care</h5>
                    <p class="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" class="btn ">Learn More</a>
                  </div>
                </div>
                <div class="card"   data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="600">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Physical Therapy</h5>
                    <p class="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" class="btn">Learn More</a>
                  </div>
                </div>
                <div class="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="900">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Dental Care</h5>
                    <p class="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" class="btn ">Learn More</a>
                  </div>
                </div>
                <div class="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1200">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Diagnostic Test</h5>
                    <p class="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" class="btn ">Learn More</a>
                  </div>
                </div>
                <div class="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1500">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Skin Surgery</h5>
                    <p class="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" class="btn ">Learn More</a>
                  </div>
                </div>
                <div class="card"  data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1800">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Surgery Service</h5>
                    <p class="card-text">Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#" class="btn">Learn More</a>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>


        {/* <MDBCarousel showIndicators showControls fade interval={50000}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor.
          sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. </h5>
          <p>HR DESIGNZ.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
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
                <img src={"https://preview.colorlib.com/theme/docmed/img/about/business.png.webp"} alt="Tab 1" />
              </div>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={fillActive === 'tab2'}>
          <div className='tab-content-parent d-flex align-items-center'>
          <div className='tab-image-custom' data-aos="fade-left" data-aos-delay="600">
                <img src={"https://preview.colorlib.com/theme/docmed/img/about/business.png.webp"} alt="Tab 1" />
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
                <img src={"https://preview.colorlib.com/theme/docmed/img/about/business.png.webp"} alt="Tab 1" />
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
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/1.png"}/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
      <div className='slider-custom' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="600">
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/3.png"}/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
      <div className='slider-custom' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="900">
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/2.png"}/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
      <div className='slider-custom' data-aos="fade-up" 
  data-aos-duration="1100" 
  data-aos-delay="1300" >
        <img src={"https://preview.colorlib.com/theme/docmed/img/experts/4.png"}/>
        <h3>Mirazul Alom</h3>
        <span>Neurologist</span>
      </div>
    </Slider>
    </div>
    <div className='appointment-section-parent '>
    <div className='appointment-section-custom'>
      <div className='appointment-section-content'>
<h5>Get In Touch</h5>
<h1>Best Medical & Health Care Near Your City</h1>
<h6>We’ve 25 Years of experience in Medical Services.</h6>
<button>Book An Appointment</button>
</div>
    </div>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Home