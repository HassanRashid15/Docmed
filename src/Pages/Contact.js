import React, { useState, useEffect } from 'react';
import SEO from "../Component/SEO.js";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaUserMd, FaCalendarAlt, FaHeartbeat, FaApple } from "react-icons/fa";

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
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMapPicker, setShowMapPicker] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[^\d\+]/g, '');
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
      } else if (!/^\+?[0-9]+$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

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

    if (!validateForm()) {
      console.log('❌ Form validation failed:', errors);
      return;
    }

    setIsLoading(true);
    console.log('🔄 Form submission started...');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('=== CONTACT FORM SUBMITTED ===');
      console.log('Form Data:', formData);
      console.log('First Name:', formData.firstName);
      console.log('Last Name:', formData.lastName);
      console.log('Email:', formData.email);
      console.log('Phone:', formData.phone);
      console.log('Message:', formData.message);
      console.log('Submission Time:', new Date().toLocaleString());
      console.log('================================');

      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});

      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error) {
      console.error('❌ Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-cyan-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Medical Icons Decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <FaHeartbeat className="absolute top-20 left-10 text-6xl animate-bounce hidden md:block" style={{ animationDuration: '3s' }} />
            <FaUserMd className="absolute bottom-20 right-20 text-5xl animate-bounce hidden md:block" style={{ animationDuration: '4s' }} />
            <FaCalendarAlt className="absolute top-40 right-40 text-4xl animate-bounce hidden lg:block" style={{ animationDuration: '5s' }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 md:mb-6">
                <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 md:px-6 rounded-full text-sm font-semibold border border-white border-opacity-30">
                  📞 Available 24/7 for You
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Get In Touch With
                <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent mt-2">
                  DOCMED Today
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
                We're here to help and answer any questions you might have.
                Whether it's an appointment, inquiry, or emergency - we've got you covered.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 max-w-2xl mx-auto">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
                  <div className="text-xs md:text-sm text-blue-100">Available</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-2xl md:text-3xl font-bold mb-1">10K+</div>
                  <div className="text-xs md:text-sm text-blue-100">Happy Patients</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                  <div className="text-2xl md:text-3xl font-bold mb-1">&lt;5min</div>
                  <div className="text-xs md:text-sm text-blue-100">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(239 246 255)" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 left-4 sm:left-auto sm:right-4 z-50 animate-slide-in-right max-w-sm mx-auto sm:mx-0">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3">
              <FaCheckCircle className="text-xl flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm sm:text-base truncate">Message Sent Successfully!</p>
                <p className="text-xs sm:text-sm text-green-100">We'll get back to you soon.</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16" id="contact-form">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column - Contact Information */}
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Let's Talk With Us</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow">
                        <FaMapMarkerAlt className="text-sm md:text-base" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Address</h3>
                        <p className="text-gray-600 text-xs md:text-sm">1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow">
                        <FaPhone className="text-sm md:text-base" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Phone</h3>
                        <a href="tel:+12346789108" className="text-gray-600 text-xs md:text-sm hover:text-blue-600 transition-colors break-all">+1 234 678 9108 99</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow">
                        <FaEnvelope className="text-sm md:text-base" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Email</h3>
                        <a href="mailto:Contact@docmed.com" className="text-gray-600 text-xs md:text-sm hover:text-blue-600 transition-colors break-all">Contact@docmed.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow">
                        <FaClock className="text-sm md:text-base" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Working Hours</h3>
                        <p className="text-gray-600 text-xs md:text-sm">Mon-Fri: 8:00 AM - 8:00 PM</p>
                        <p className="text-gray-600 text-xs md:text-sm">Sat: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-xs md:text-sm">Sun: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact Card */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl md:rounded-2xl shadow-lg p-5 md:p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FaPhone className="text-lg md:text-xl animate-pulse" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Emergency Contact</h3>
                  </div>
                  <p className="text-red-100 mb-4 text-sm md:text-base">For urgent medical assistance, call our 24/7 emergency line</p>
                  <a href="tel:+15551234568" className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-red-50 transition-all duration-300 shadow w-full justify-center text-sm md:text-base">
                    <FaPhone className="animate-pulse" />
                    +1 (555) 123-4568
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Send Us A Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm md:text-base ${errors.firstName
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                          }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <span>⚠</span> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm md:text-base ${errors.lastName
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                          }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <span>⚠</span> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm md:text-base ${errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm md:text-base ${errors.phone
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <span>⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none text-sm md:text-base ${errors.message
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                        }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <span>⚠</span> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 md:py-4 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaEnvelope />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-8 md:pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 md:p-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Find Us On Map</h2>
                <p className="text-blue-100 text-sm md:text-base">Visit our location or contact us for directions</p>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353159042!3d-37.81720974201459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1635820294857!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="DOCMED Medical Center Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Map Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:left-auto md:right-4 md:w-80 bg-white rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-800 text-base md:text-lg mb-2 md:mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                    1055 Arthur ave Elk Groot, 67.<br />
                    New Palmas South Carolina.
                  </p>
                  <div className="flex gap-2 relative">
                    {!showMapPicker ? (
                      <button
                        onClick={() => setShowMapPicker(true)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs md:text-sm font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg hover:shadow transition-all duration-300 text-center flex items-center justify-center gap-1 md:gap-2"
                      >
                        <FaMapMarkerAlt className="text-xs md:text-sm" />
                        Get Directions
                      </button>
                    ) : (
                      <div className="flex flex-col gap-2 w-full animate-fade-in-up">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=1055+Arthur+ave+Elk+Groot,+67.+New+Palmas+South+Carolina"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-gray-50 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold text-xs md:text-sm"
                        >
                          <span
                            className="w-4 h-4 md:w-5 md:h-5 bg-center bg-no-repeat bg-contain"
                            style={{
                              backgroundImage:
                                "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)",
                            }}
                          />
                          Google Maps
                        </a>

                        <a
                          href="http://maps.apple.com/?daddr=1055+Arthur+ave+Elk+Groot,+67.+New+Palmas+South+Carolina&dirflg=d"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold text-xs md:text-sm"
                        >
                          <FaApple className="text-gray-900" />
                          Apple Maps
                        </a>
                        <button
                          onClick={() => setShowMapPicker(false)}
                          className="text-gray-400 text-xs hover:text-gray-600 mt-1 text-center w-full"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;