import React, { useState } from 'react';
import Footer from "../Component/Footer.js";
import SEO from "../Component/SEO.js";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUserMd, FaAmbulance } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import userfeed from "./../Assets/Images/userfeed.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentType: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "MedicalOrganization",
      "name": "Docmed Medical Center",
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
      "openingHours": [
        "Mo-Fr 08:00-20:00",
        "Sa 09:00-17:00", 
        "Su 10:00-16:00"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4568",
          "contactType": "emergency",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4569",
          "contactType": "appointments",
          "availableLanguage": "English"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Get In Touch"
        description="Contact Docmed Medical Center for appointments, inquiries, or emergency care. We're here to help you 24/7. Call us at +1 (555) 123-4567 or visit our location."
        keywords="contact docmed, medical center contact, hospital phone number, emergency contact, appointment booking, medical inquiries, healthcare contact"
        canonical="/contact"
        structuredData={contactStructuredData}
      />
      <div className='contact-page'>
        {/* Hero Section */}
        <div className='contact-hero-section'>
          <div className='contact-hero-content'>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              Contact <span style={{ fontWeight: 700 }}>Docmed</span>
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
              Get in touch with us for appointments, inquiries, or emergency care. We're here to help you 24/7.
            </p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className='contact-info-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                <div className='contact-info-card'>
                  <div className='contact-icon'>
                    <FaPhone />
                  </div>
                  <h4>Phone Numbers</h4>
                  <p>Main: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                  <p>Emergency: <a href="tel:+15551234568">+1 (555) 123-4568</a></p>
                  <p>Appointments: <a href="tel:+15551234569">+1 (555) 123-4569</a></p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
                <div className='contact-info-card'>
                  <div className='contact-icon'>
                    <FaEnvelope />
                  </div>
                  <h4>Email Address</h4>
                  <p>General: <a href="mailto:info@docmed.com">info@docmed.com</a></p>
                  <p>Appointments: <a href="mailto:appointments@docmed.com">appointments@docmed.com</a></p>
                  <p>Emergency: <a href="mailto:emergency@docmed.com">emergency@docmed.com</a></p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mb-4' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700">
                <div className='contact-info-card'>
                  <div className='contact-icon'>
                    <FaMapMarkerAlt />
                  </div>
                  <h4>Location</h4>
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='contact-form-section'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6' data-aos="fade-right" data-aos-duration="1100" data-aos-delay="300">
                <div className='contact-form-content'>
                  <h2>Get In Touch</h2>
                  <p>We're here to help with all your healthcare needs. Send us a message and we'll respond as soon as possible.</p>
                  
                  <form onSubmit={handleSubmit} className='contact-form'>
                    <div className='form-row'>
                      <div className='form-group'>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className='form-group'>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Your Email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className='form-row'>
                      <div className='form-group'>
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="Your Phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className='form-group'>
                        <select 
                          name="appointmentType" 
                          value={formData.appointmentType}
                          onChange={handleInputChange}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="appointment">Book Appointment</option>
                          <option value="emergency">Emergency</option>
                          <option value="billing">Billing Question</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className='form-group'>
                      <input 
                        type="text" 
                        name="subject" 
                        placeholder="Subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className='form-group'>
                      <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className='submit-btn'>Send Message</button>
                  </form>
                </div>
              </div>
              
              <div className='col-lg-6' data-aos="fade-left" data-aos-duration="1100" data-aos-delay="600">
                <div className='contact-image'>
                  <img src={userfeed} alt="Contact Us" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hospital Hours Section */}
        <div className='hospital-hours-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6' data-aos="fade-right" data-aos-duration="1100" data-aos-delay="300">
                <div className='hours-content'>
                  <h2>Hospital Hours</h2>
                  <div className='hours-list'>
                    <div className='hours-item'>
                      <span className='day'>Monday - Friday</span>
                      <span className='time'>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className='hours-item'>
                      <span className='day'>Saturday</span>
                      <span className='time'>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className='hours-item'>
                      <span className='day'>Sunday</span>
                      <span className='time'>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className='hours-item emergency'>
                      <span className='day'>Emergency Department</span>
                      <span className='time'>24/7</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='col-lg-6' data-aos="fade-left" data-aos-duration="1100" data-aos-delay="600">
                <div className='emergency-info'>
                  <h2>Emergency Information</h2>
                  <div className='emergency-card'>
                    <div className='emergency-icon'>
                      <FaAmbulance />
                    </div>
                    <div className='emergency-content'>
                      <h4>Emergency Hotline</h4>
                      <p className='emergency-number'>+1 (555) 123-4568</p>
                      <p>Available 24/7 for medical emergencies</p>
                    </div>
                  </div>
                  
                  <div className='emergency-features'>
                    <div className='emergency-feature'>
                      <FaUserMd />
                      <span>Board-certified emergency physicians</span>
                    </div>
                    <div className='emergency-feature'>
                      <FaAmbulance />
                      <span>Rapid response ambulance service</span>
                    </div>
                    <div className='emergency-feature'>
                      <FaClock />
                      <span>Average wait time: 15 minutes</span>
                    </div>
                  </div>
      </div>
</div>
</div>
</div>
  </div>

        {/* Map Section */}
        <div className='map-section'>
          <div className='container'>
            <div className='section-header text-center' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
              <h2>Find Us</h2>
              <p>Located in the heart of the medical district with easy access and parking facilities.</p>
            </div>
            <div className='map-container' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
              <div className='map-placeholder'>
                <div className='map-content'>
                  <MdLocationOn className='map-icon' />
                  <h4>Docmed Medical Center</h4>
                  <p>123 Medical Center Drive, Healthcare District</p>
                  <p>New York, NY 10001</p>
                  <button className='directions-btn'>Get Directions</button>
                </div>
</div>
</div>
</div>
      </div>
    </div>
      <Footer />
    </>
  )
}

export default Contact
