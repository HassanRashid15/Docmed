import React from 'react';
import Footer from "../Component/Footer.js";
import SEO from "../Component/SEO.js";
import { FaGraduationCap, FaUserMd, FaAward, FaHospital, FaStethoscope, FaHeartbeat, FaBrain, FaEye, FaTooth } from "react-icons/fa";
import { MdHealthAndSafety, MdLocalHospital, MdMedicalServices } from "react-icons/md";

function Experience() {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: 'Doctor of Medicine (MD)',
      institution: 'Harvard Medical School',
      year: '2010-2014',
      description: 'Specialized in Internal Medicine with focus on cardiovascular diseases and preventive care.',
      category: 'Education'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Master of Surgery (MS)',
      institution: 'Johns Hopkins University',
      year: '2014-2016',
      description: 'Advanced surgical training with specialization in minimally invasive procedures and robotic surgery.',
      category: 'Education'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Bachelor of Medicine (MBBS)',
      institution: 'Stanford University',
      year: '2006-2010',
      description: 'Comprehensive medical education covering all major medical disciplines and clinical rotations.',
      category: 'Education'
    }
  ];

  const workExperience = [
    {
      icon: <FaUserMd />,
      title: 'Chief Medical Officer',
      institution: 'Docmed Medical Center',
      year: '2020-Present',
      description: 'Leading medical operations, overseeing patient care quality, and implementing innovative healthcare protocols.',
      category: 'Leadership'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Senior Cardiologist',
      institution: 'Mayo Clinic',
      year: '2018-2020',
      description: 'Specialized in complex cardiac procedures, heart transplants, and advanced interventional cardiology.',
      category: 'Specialization'
    },
    {
      icon: <FaHospital />,
      title: 'Emergency Medicine Physician',
      institution: 'Cleveland Clinic',
      year: '2016-2018',
      description: 'Provided critical emergency care, trauma management, and rapid response medical services.',
      category: 'Emergency'
    }
  ];

  const certifications = [
    {
      icon: <FaAward />,
      title: 'Board Certified in Internal Medicine',
      institution: 'American Board of Internal Medicine',
      year: '2015',
      description: 'Certified specialist in internal medicine with ongoing continuing education requirements.',
      category: 'Certification'
    },
    {
      icon: <FaAward />,
      title: 'Advanced Cardiac Life Support (ACLS)',
      institution: 'American Heart Association',
      year: '2014',
      description: 'Certified in advanced cardiac life support and emergency cardiovascular care protocols.',
      category: 'Certification'
    },
    {
      icon: <FaAward />,
      title: 'Fellow of the American College of Surgeons',
      institution: 'American College of Surgeons',
      year: '2018',
      description: 'Fellowship recognition for excellence in surgical practice and patient care.',
      category: 'Fellowship'
    }
  ];

  const specializations = [
    {
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      description: 'Advanced heart and cardiovascular care with expertise in interventional procedures.',
      years: '8+ years'
    },
    {
      icon: <FaBrain />,
      title: 'Neurology',
      description: 'Specialized care for neurological disorders and brain-related conditions.',
      years: '6+ years'
    },
    {
      icon: <FaEye />,
      title: 'Ophthalmology',
      description: 'Comprehensive eye care including surgical procedures and vision correction.',
      years: '5+ years'
    },
    {
      icon: <FaTooth />,
      title: 'Dentistry',
      description: 'Advanced dental procedures including implants and cosmetic dentistry.',
      years: '4+ years'
    }
  ];

  const experienceStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Medical Experience and Qualifications",
    "description": "Our team brings decades of combined medical experience, advanced training, and specialized expertise to provide exceptional healthcare services.",
    "mainEntity": {
      "@type": "MedicalOrganization",
      "name": "Docmed Medical Center",
      "employee": [
        {
          "@type": "Person",
          "name": "Dr. Sarah Johnson",
          "jobTitle": "Chief Medical Officer",
          "description": "Leading medical operations, overseeing patient care quality, and implementing innovative healthcare protocols.",
          "alumniOf": [
            {
              "@type": "CollegeOrUniversity",
              "name": "Harvard Medical School"
            }
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Doctor of Medicine (MD)",
              "description": "Specialized in Internal Medicine with focus on cardiovascular diseases and preventive care"
            }
          ]
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Board Certified in Internal Medicine",
          "description": "Certified specialist in internal medicine with ongoing continuing education requirements"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Advanced Cardiac Life Support (ACLS)",
          "description": "Certified in advanced cardiac life support and emergency cardiovascular care protocols"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Medical Experience - Expert Healthcare Team"
        description="Learn about Docmed's experienced medical team with 15+ years of combined experience, 25+ certifications, and 10+ medical specializations. Expert doctors from prestigious institutions."
        keywords="medical experience, healthcare qualifications, medical team, doctor credentials, medical education, healthcare certifications, medical specializations, expert doctors"
        canonical="/experience"
        structuredData={experienceStructuredData}
      />
      <div className='experience-page'>
        {/* Hero Section */}
        <div className='experience-hero-section'>
          <div className='experience-hero-content'>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              Medical <span style={{ fontWeight: 700 }}>Experience</span>
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
              Our team brings decades of combined medical experience, advanced training, and specialized expertise to provide exceptional healthcare services.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className='education-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h6>EDUCATION</h6>
              <h2>Medical Education</h2>
              <p>Comprehensive medical training from world-renowned institutions with focus on excellence and innovation.</p>
            </div>
            
            <div className='row'>
              {education.map((edu, index) => (
                <div key={index} className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 200)}>
                  <div className='experience-card'>
                    <div className='experience-icon'>
                      {edu.icon}
                    </div>
                    <div className='experience-content'>
                      <div className='experience-meta'>
                        <span className='year'>{edu.year}</span>
                        <span className='category'>{edu.category}</span>
                      </div>
                      <h4>{edu.title}</h4>
                      <h5>{edu.institution}</h5>
                      <p>{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className='work-experience-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h6>PROFESSIONAL EXPERIENCE</h6>
              <h2>Medical Career</h2>
              <p>Extensive experience in leading medical institutions with focus on patient care and medical innovation.</p>
            </div>
            
            <div className='row'>
              {workExperience.map((work, index) => (
                <div key={index} className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 200)}>
                  <div className='experience-card'>
                    <div className='experience-icon'>
                      {work.icon}
                    </div>
                    <div className='experience-content'>
                      <div className='experience-meta'>
                        <span className='year'>{work.year}</span>
                        <span className='category'>{work.category}</span>
                      </div>
                      <h4>{work.title}</h4>
                      <h5>{work.institution}</h5>
                      <p>{work.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specializations Section */}
        <div className='specializations-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h6>MEDICAL SPECIALIZATIONS</h6>
              <h2>Areas of Expertise</h2>
              <p>Specialized training and extensive experience in various medical disciplines to provide comprehensive care.</p>
            </div>
            
            <div className='row'>
              {specializations.map((spec, index) => (
                <div key={index} className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 200)}>
                  <div className='specialization-card'>
                    <div className='specialization-icon'>
                      {spec.icon}
                    </div>
                    <h4>{spec.title}</h4>
                    <p>{spec.description}</p>
                    <span className='experience-years'>{spec.years}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className='certifications-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h6>CERTIFICATIONS & AWARDS</h6>
              <h2>Professional Recognition</h2>
              <p>Board certifications, professional memberships, and recognition from leading medical organizations.</p>
            </div>
            
            <div className='row'>
              {certifications.map((cert, index) => (
                <div key={index} className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay={300 + (index * 200)}>
                  <div className='certification-card'>
                    <div className='certification-icon'>
                      {cert.icon}
                    </div>
                    <div className='certification-content'>
                      <div className='certification-meta'>
                        <span className='year'>{cert.year}</span>
                        <span className='category'>{cert.category}</span>
                      </div>
                      <h4>{cert.title}</h4>
                      <h5>{cert.institution}</h5>
                      <p>{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className='experience-stats-section'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                <div className='stat-item'>
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
                <div className='stat-item'>
                  <h3>25+</h3>
                  <p>Certifications</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700">
                <div className='stat-item'>
                  <h3>10+</h3>
                  <p>Medical Specializations</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900">
                <div className='stat-item'>
                  <h3>5+</h3>
                  <p>Professional Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className='experience-cta-section'>
          <div className='container'>
            <div className='cta-content text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h2>Experience Excellence in Healthcare</h2>
              <p>Trust our experienced medical team for your healthcare needs. Schedule a consultation today.</p>
              <div className='cta-buttons'>
                <button className='btn-primary'>Schedule Consultation</button>
                <button className='btn-secondary'>View Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Experience
