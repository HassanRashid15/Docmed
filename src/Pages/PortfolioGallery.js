import React, { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import { FaHeartbeat, FaBrain, FaEye, FaTooth, FaStethoscope, FaHospital, FaUserMd, FaXRay } from "react-icons/fa";
import work1 from "./../Assets/Images/work1.png";

function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    const $grid = new Isotope('.grid', {
      itemSelector: '.all',
      percentPosition: true,
      masonry: {
        columnWidth: '.all'
      }
    });
    setGrid($grid);

    return () => {
      // Clean up Isotope instance
      if (grid) {
        grid.destroy();
      }
    };
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (grid) {
      grid.arrange({ filter });
    }
  };

  const medicalPortfolio = [
    {
      category: 'cardiology',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Advanced Cardiac Surgery',
      description: 'State-of-the-art cardiac surgery facility with robotic assistance',
      icon: <FaHeartbeat />
    },
    {
      category: 'neurology',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Neurosurgery Center',
      description: 'Advanced brain surgery and neurological treatment center',
      icon: <FaBrain />
    },
    {
      category: 'ophthalmology',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Eye Care Center',
      description: 'Comprehensive eye care with advanced diagnostic equipment',
      icon: <FaEye />
    },
    {
      category: 'dentistry',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Dental Clinic',
      description: 'Modern dental facility with 3D imaging and implant technology',
      icon: <FaTooth />
    },
    {
      category: 'emergency',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Emergency Department',
      description: '24/7 emergency care with rapid response capabilities',
      icon: <FaHospital />
    },
    {
      category: 'radiology',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Imaging Center',
      description: 'Advanced MRI, CT, and ultrasound diagnostic services',
      icon: <FaXRay />
    },
    {
      category: 'cardiology',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Cardiac Rehabilitation',
      description: 'Comprehensive cardiac rehabilitation and recovery program',
      icon: <FaHeartbeat />
    },
    {
      category: 'neurology',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'Stroke Center',
      description: 'Specialized stroke treatment and rehabilitation facility',
      icon: <FaBrain />
    },
    {
      category: 'ophthalmology',
      image: "https://preview.colorlib.com/theme/docmed/img/about/business.png.webp",
      title: 'LASIK Surgery Center',
      description: 'Advanced laser vision correction and refractive surgery',
      icon: <FaEye />
    }
  ];

  return (
    <div className='portfolio-gallery-page'>
      <div className='portfolio-hero-section'>
        <div className='portfolio-hero-content'>
          <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            Medical <span style={{ fontWeight: 700 }}>Facilities</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            Explore our state-of-the-art medical facilities and specialized treatment centers designed to provide exceptional healthcare services.
          </p>
        </div>
      </div>

      <section className="portfolio section">
        <div className="container">
          <div className="top-side" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
            <h4 className="title">MEDICAL FACILITIES</h4>
            <h2>OUR DEPARTMENTS</h2>
            <p>Discover our specialized medical departments and advanced treatment facilities.</p>
          </div>

          <div className="filters" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
            <ul>
              <li className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>All Departments</li>
              <li className={activeFilter === '.cardiology' ? 'active' : ''} onClick={() => handleFilterClick('.cardiology')}>Cardiology</li>
              <li className={activeFilter === '.neurology' ? 'active' : ''} onClick={() => handleFilterClick('.neurology')}>Neurology</li>
              <li className={activeFilter === '.ophthalmology' ? 'active' : ''} onClick={() => handleFilterClick('.ophthalmology')}>Ophthalmology</li>
              <li className={activeFilter === '.dentistry' ? 'active' : ''} onClick={() => handleFilterClick('.dentistry')}>Dentistry</li>
              <li className={activeFilter === '.emergency' ? 'active' : ''} onClick={() => handleFilterClick('.emergency')}>Emergency</li>
              <li className={activeFilter === '.radiology' ? 'active' : ''} onClick={() => handleFilterClick('.radiology')}>Radiology</li>
            </ul>
          </div>

          <div className="filters-content">
            <div className="row grid">
              {medicalPortfolio.map((item, index) => (
                <div key={index} className={`col-sm-4 all ${item.category}`} data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 100)}>
                  <div className="item">
                    <div className="portfolio-image">
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <div className="portfolio-icon">
                          {item.icon}
                        </div>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <button className="view-details-btn">View Details</button>
                      </div>
                    </div>
                    <div className="p-inner">
                      <h5>{item.title}</h5>
                      <div className="cat">{item.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facility Statistics */}
          <div className='facility-stats-section'>
            <div className='row text-center'>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                <div className='stat-item'>
                  <h3>15+</h3>
                  <p>Medical Departments</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
                <div className='stat-item'>
                  <h3>200+</h3>
                  <p>Treatment Rooms</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700">
                <div className='stat-item'>
                  <h3>50+</h3>
                  <p>Operating Theaters</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900">
                <div className='stat-item'>
                  <h3>24/7</h3>
                  <p>Emergency Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioGallery
