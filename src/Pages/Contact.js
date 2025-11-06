import React, { useState, useEffect } from 'react';
import SEO from "../Component/SEO.js";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Container from 'react-bootstrap/Container';

function Contact() {
  useEffect(() => {
    document.title = "Contact DOCMED | Medical Center - Get In Touch Today";
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    
    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else {
      // Remove all non-digit characters except + at the beginning
      const cleanPhone = formData.phone.replace(/[^\d\+]/g, '');
      // Accept phone numbers with 7-15 digits, optionally starting with +
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
      } else if (!/^\+?[0-9]+$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form first
    if (!validateForm()) {
      console.log('❌ Form validation failed:', errors);
      return;
    }
    
    // Start loading
    setIsLoading(true);
    console.log('🔄 Form submission started...');
    
    try {
      // Simulate API call delay (2 seconds)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show form data in console
      console.log('=== CONTACT FORM SUBMITTED ===');
      console.log('Form Data:', formData);
      console.log('First Name:', formData.firstName);
      console.log('Last Name:', formData.lastName);
      console.log('Email:', formData.email);
      console.log('Phone:', formData.phone);
      console.log('Message:', formData.message);
      console.log('Submission Time:', new Date().toLocaleString());
      console.log('================================');
      
      // Show success message
    alert('Thank you for your message. We will get back to you soon!');
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Clear errors
      setErrors({});
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      // Stop loading
      setIsLoading(false);
      console.log('✅ Form submission completed');
    }
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
        title={`Contact DOCMED | Medical Center - Get In Touch Today`}
        description="Contact DOCMED Medical Center for appointments, inquiries, or emergency care. We're here to help you 24/7. Call us at +1 (555) 123-4567 or visit our location."
        keywords="contact docmed, medical center contact, hospital phone number, emergency contact, appointment booking, medical inquiries, healthcare contact, doctor consultation"
        canonical="/contact"
        structuredData={contactStructuredData}
      />
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="contactIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0181f5" />
            <stop offset="100%" stopColor="#5db2ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className='contact-page'>
        {/* Header Banner with Image and Heart Overlay */}
        <div className='contact-header-banner'>
          <div className='banner-image'>
           
          </div>
          <Container fluid className='banner-title-container'>
            <div className='banner-title'>
              <h1>Contact Us</h1>
            </div>
          </Container>
        </div>

        {/* Main Content Section */}
        <div className='contact-main-content'>
          <div className='container'>
            <div className='row align-items-center'>
              {/* Left Column - Contact Information */}
              <div className='col-lg-6'>
                <div className='contact-info-section'>
                  <h2>Let's talk with us</h2>
                  <p>Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</p>
                  
                  <div className='contact-details'>
                    <div className='contact-item'>
                      <FaMapMarkerAlt className='contact-icon' />
                      <span>1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</span>
                  </div>
                    <div className='contact-item'>
                      <FaPhone className='contact-icon' />
                      <span>+1 234 678 9108 99</span>
                </div>
                    <div className='contact-item'>
                      <FaEnvelope className='contact-icon' />
                      <span>Contact@docmed.com</span>
              </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className='col-lg-6'>
                <div className='contact-form-container'>
                  <form onSubmit={handleSubmit} className='contact-form'>
                    <div className='form-row'>
                      <div className='form-group'>
                        <label htmlFor="firstName">First Name *</label>
                        <input 
                          type="text" 
                          id="firstName"
                          name="firstName" 
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={errors.firstName ? 'error' : ''}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                      </div>
                      <div className='form-group'>
                        <label htmlFor="lastName">Last Name *</label>
                        <input 
                          type="text" 
                          id="lastName"
                          name="lastName" 
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={errors.lastName ? 'error' : ''}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                      </div>
                    </div>
                    
                      <div className='form-group'>
                      <label htmlFor="email">Email *</label>
                        <input 
                        type="text" 
                        id="email"
                        name="email" 
                        placeholder="Email"
                        value={formData.email}
                          onChange={handleInputChange}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    
                    <div className='form-group'>
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="text" 
                        id="phone"
                        name="phone" 
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? 'error' : ''}
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                    
                    <div className='form-group'>
                      <label htmlFor="message">Your Message *</label>
                      <textarea 
                        id="message"
                        name="message" 
                        placeholder="Your message..."
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={errors.message ? 'error' : ''}
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                    
                    <button type="submit" className='send-message-btn' disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <span className="loader"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>
</div>
</div>
</div>
      </div>
    </div>
    </>
  )
}

export default Contact
