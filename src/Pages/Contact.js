import React, { useEffect } from 'react';
import SEO from '../Component/SEO';
import { SITE, ROUTES } from '../constants/siteInfo';
import {
  EmergencyBanner,
  ContactHeader,
  ContactForm,
  HelpDesks,
  CampusesSection,
  RoiForm,
  FaqSection,
  QuickActions,
} from '../PagesComponent/Contact';

function Contact() {
  useEffect(() => {
    document.title = 'Contact DOCMED | Medical Center - Get In Touch Today';
  }, []);

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'MedicalOrganization',
      name: SITE.legalName,
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
      openingHours: ['Mo-Fr 08:00-20:00', 'Sa 09:00-17:00', 'Su 10:00-16:00'],
    },
  };

  return (
    <>
      <SEO
        title={`Contact ${SITE.name.toUpperCase()} | Medical Center - Get In Touch Today`}
        description={`Contact ${SITE.legalName} for appointments, inquiries, or emergency care. Call us at ${SITE.phone.display} or visit our location.`}
        keywords="contact docmed, medical center contact, hospital phone number, emergency contact, appointment booking, medical inquiries, healthcare contact, doctor consultation"
        canonical={ROUTES.contact}
        structuredData={contactStructuredData}
      />

      <div className="min-h-screen bg-white pt-[105px] md:pt-[120px]">
        <EmergencyBanner />
        <ContactHeader />

        <section className="mx-auto w-full max-w-7xl px-6 py-6 lg:px-12" id="contact-form">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <HelpDesks />
            </div>
          </div>
        </section>

        <CampusesSection />
        <RoiForm />
        <FaqSection />
        <QuickActions />
      </div>
    </>
  );
}

export default Contact;
