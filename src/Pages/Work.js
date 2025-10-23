import React from 'react';
import Footer from "../Component/Footer.js";
import SEO from "../Component/SEO.js";
import { FaHeartbeat, FaAward, FaUserMd, FaHospital, FaStethoscope, FaBrain, FaEye, FaTooth } from "react-icons/fa";
import { MdHealthAndSafety, MdLocalHospital, MdMedicalServices } from "react-icons/md";
import work1 from "./../Assets/Images/work1.png";
import PortfolioGallery from './PortfolioGallery';

function Work() {
  const medicalAchievements = [
    {
      icon: <FaHeartbeat />,
      title: 'Cardiac Surgery Excellence',
      description: 'Successfully performed 500+ complex cardiac surgeries with 98% success rate.',
      year: '2023',
      category: 'Surgery'
    },
    {
      icon: <FaBrain />,
      title: 'Neurosurgery Innovation',
      description: 'Pioneered minimally invasive brain surgery techniques reducing recovery time by 40%.',
      year: '2023',
      category: 'Innovation'
    },
    {
      icon: <FaEye />,
      title: 'Vision Restoration Program',
      description: 'Restored vision for 1000+ patients through advanced cataract and retinal surgeries.',
      year: '2022',
      category: 'Treatment'
    },
    {
      icon: <FaTooth />,
      title: 'Dental Implant Success',
      description: 'Achieved 99% success rate in dental implant procedures with advanced 3D technology.',
      year: '2022',
      category: 'Technology'
    },
    {
      icon: <MdHealthAndSafety />,
      title: 'Emergency Response Excellence',
      description: 'Maintained 15-minute average response time for emergency cases, saving countless lives.',
      year: '2023',
      category: 'Emergency'
    },
    {
      icon: <FaUserMd />,
      title: 'Medical Training Program',
      description: 'Trained 200+ medical professionals in advanced surgical techniques and patient care.',
      year: '2022',
      category: 'Education'
    }
  ];

  const caseStudies = [
    {
      image: "https://preview.colorlib.com/theme/docmed/img/experts/1.png",
      title: 'Complex Heart Surgery',
      category: 'Cardiology',
      description: 'Successfully treated a 65-year-old patient with multiple coronary artery blockages using advanced bypass surgery techniques.',
      outcome: 'Full recovery with improved quality of life',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      image: "https://preview.colorlib.com/theme/docmed/img/experts/2.png",
      title: 'Brain Tumor Removal',
      category: 'Neurosurgery',
      description: 'Performed minimally invasive brain tumor removal on a 45-year-old patient using state-of-the-art robotic assistance.',
      outcome: 'Complete tumor removal with minimal side effects',
      doctor: 'Dr. Michael Chen'
    },
    {
      image: "https://preview.colorlib.com/theme/docmed/img/experts/3.png",
      title: 'Cataract Surgery',
      category: 'Ophthalmology',
      description: 'Restored vision for an 80-year-old patient through advanced cataract surgery with premium lens implantation.',
      outcome: '20/20 vision restoration',
      doctor: 'Dr. Emily Rodriguez'
    }
  ];

  const workStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Medical Achievements and Case Studies",
    "description": "Discover our successful medical cases, innovative treatments, and healthcare achievements that have made a difference in thousands of lives.",
    "mainEntity": {
      "@type": "MedicalOrganization",
      "name": "Docmed Medical Center",
      "award": [
        "Joint Commission Accreditation",
        "Best Hospital Award", 
        "Innovation in Healthcare"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Joint Commission Accreditation",
          "description": "Gold Seal of Approval for healthcare quality and patient safety standards"
        }
      ]
    },
    "about": [
      {
        "@type": "MedicalProcedure",
        "name": "Cardiac Surgery Excellence",
        "description": "Successfully performed 500+ complex cardiac surgeries with 98% success rate"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Neurosurgery Innovation", 
        "description": "Pioneered minimally invasive brain surgery techniques reducing recovery time by 40%"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Medical Achievements - Success Stories"
        description="Discover Docmed's medical achievements, successful case studies, and healthcare innovations. 50,000+ patients treated, 15,000+ successful surgeries, 98% success rate."
        keywords="medical achievements, healthcare success stories, medical case studies, hospital awards, medical innovations, patient outcomes, healthcare excellence"
        canonical="/work"
        structuredData={workStructuredData}
      />
      <div className='work-page'>
        {/* Hero Section */}
        <div className='work-hero-section'>
          <div className='work-hero-content'>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              Our <span style={{ fontWeight: 700 }}>Medical Achievements</span>
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
              Discover our successful medical cases, innovative treatments, and healthcare achievements that have made a difference in thousands of lives.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className='achievements-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h6>MEDICAL ACHIEVEMENTS</h6>
              <h2>Our Success Stories</h2>
              <p>Celebrating our medical milestones and the lives we've touched through exceptional healthcare delivery.</p>
            </div>
            
            <div className='row'>
              {medicalAchievements.map((achievement, index) => (
                <div key={index} className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 200)}>
                  <div className='achievement-card'>
                    <div className='achievement-icon'>
                      {achievement.icon}
                    </div>
                    <div className='achievement-content'>
                      <div className='achievement-meta'>
                        <span className='year'>{achievement.year}</span>
                        <span className='category'>{achievement.category}</span>
                      </div>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className='case-studies-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h6>CASE STUDIES</h6>
              <h2>Success Stories</h2>
              <p>Real patient stories showcasing our expertise and commitment to exceptional healthcare outcomes.</p>
            </div>
            
            <div className='row'>
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 200)}>
                  <div className='case-study-card'>
                    <div className='case-study-image'>
                      <img src={caseStudy.image} alt={caseStudy.title} />
                      <div className='case-study-category'>{caseStudy.category}</div>
                    </div>
                    <div className='case-study-content'>
                      <h4>{caseStudy.title}</h4>
                      <p>{caseStudy.description}</p>
                      <div className='case-study-outcome'>
                        <strong>Outcome:</strong> {caseStudy.outcome}
                      </div>
                      <div className='case-study-doctor'>
                        <FaUserMd />
                        <span>{caseStudy.doctor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className='work-stats-section'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                <div className='stat-item'>
                  <h3>50,000+</h3>
                  <p>Patients Treated</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
                <div className='stat-item'>
                  <h3>15,000+</h3>
                  <p>Successful Surgeries</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700">
                <div className='stat-item'>
                  <h3>98%</h3>
                  <p>Success Rate</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900">
                <div className='stat-item'>
                  <h3>25+</h3>
                  <p>Medical Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className='awards-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h6>RECOGNITION</h6>
              <h2>Awards & Certifications</h2>
              <p>Our commitment to excellence has been recognized by leading healthcare organizations and medical boards.</p>
            </div>
            
            <div className='row'>
              <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                <div className='award-card'>
                  <div className='award-icon'>
                    <FaAward />
          </div>
                  <h4>Joint Commission Accreditation</h4>
                  <p>Gold Seal of Approval for healthcare quality and patient safety standards.</p>
                  <span className='award-year'>2023</span>
      </div>
    </div>
              <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
                <div className='award-card'>
                  <div className='award-icon'>
                    <MdLocalHospital />
          </div>
                  <h4>Best Hospital Award</h4>
                  <p>Recognized as the top healthcare facility in the region for patient satisfaction.</p>
                  <span className='award-year'>2023</span>
      </div>
    </div>
              <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700">
                <div className='award-card'>
                  <div className='award-icon'>
                    <MdMedicalServices />
                  </div>
                  <h4>Innovation in Healthcare</h4>
                  <p>Awarded for pioneering new surgical techniques and patient care protocols.</p>
                  <span className='award-year'>2022</span>
          </div>
      </div>
    </div>
  </div>
</div>

        {/* Portfolio Gallery */}
        <PortfolioGallery />
    </div>
      <Footer />
    </>
  )
}

export default Work
