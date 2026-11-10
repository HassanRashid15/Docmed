import React, { useEffect } from 'react';
import SEO from '../Component/SEO';
import Newsletter from '../Component/Newsletter';
import ComingSoon from '../PagesComponent/ComingSoon';
import {
  HeroSection,
  EmergencyCards,
  SymptomNavigator,
  SpecialtiesGrid,
  FeaturedDoctors,
  HowItWorks,
  Testimonials,
} from '../PagesComponent/Home';
import { SITE, ROUTES } from '../constants/siteInfo';

function Home() {
  useEffect(() => {
    document.title = `${SITE.name.toUpperCase()} - Premier Medical Center | Expert Healthcare Services`;
  }, []);

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    image: `${SITE.url}/images/docmed-facility.jpg`,
    telephone: SITE.phone.display,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.6846',
      longitude: '-80.2106',
    },
    openingHours: 'Mo-Fr 08:00-20:00, Sa 09:00-17:00, Su 10:00-16:00',
    sameAs: [SITE.social.facebook, SITE.social.twitter, SITE.social.linkedin],
    medicalSpecialty: [
      'Cardiology',
      'Neurology',
      'Ophthalmology',
      'Dentistry',
      'Emergency Medicine',
      'General Medicine',
      'Pediatrics',
      'Radiology',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Emergency Care',
            description: '24/7 emergency medical services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Cardiology',
            description: 'Heart and cardiovascular care',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Neurology',
            description: 'Brain and nervous system care',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Ophthalmology',
            description: 'Eye care and vision services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Dentistry',
            description: 'Dental care and oral health',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <SEO
        title={`${SITE.name.toUpperCase()} - Premier Medical Center | Expert Healthcare Services`}
        description={`${SITE.legalName} provides exceptional healthcare services with expert doctors, advanced technology, and 24/7 emergency care. ${SITE.tagline} for over 25 years.`}
        keywords="medical center, healthcare, hospital, emergency care, cardiology, neurology, ophthalmology, dentistry, medical services, patient care, healthcare provider, doctor appointments"
        canonical={ROUTES.home}
        structuredData={homeStructuredData}
      />
      <div className="pt-[105px] md:pt-[120px]">
        <HeroSection />
        <EmergencyCards />
        <SymptomNavigator />
        <SpecialtiesGrid />
        <FeaturedDoctors />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
        <ComingSoon />
      </div>
    </>
  );
}

export default Home;
