export const SITE = {
  name: 'DocMed',
  legalName: 'DocMed',
  tagline: 'Your Trusted Healthcare Partner',
  description:
    'Leading healthcare provider offering comprehensive medical services including emergency care, cardiology, neurology, and more. Your trusted healthcare partner for over 25 years.',
  url: 'https://docmed.com',
  email: 'contact@docmed.com',
  phone: {
    display: '+1-234-678-9108-99',
    href: 'tel:+1234678910899',
  },
  emergencyPhone: {
    display: '(800) 456-7890',
    href: 'tel:+18004567890',
  },
  address: {
    street: '1055 Arthur ave Elk Groot, 67',
    city: 'New Palmas',
    region: 'South Carolina',
    postalCode: '29150',
    country: 'US',
    line2: 'New Palmas, South Carolina 29150',
  },
  social: {
    facebook: 'https://www.facebook.com/docmed',
    twitter: 'https://www.twitter.com/docmed',
    linkedin: 'https://www.linkedin.com/company/docmed',
  },
  badges: ['JCAHO Accredited', 'HIPAA Certified', 'HL7 Compliant'],
};

export const ROUTES = {
  home: '/',
  about: '/about',
  service: '/service',
  serviceDetail: '/service/:slug',
  servicePage: (slug) => `/service/${slug}`,
  findDoctors: '/find-doctors',
  doctorProfile: '/doctor/:slug',
  doctor: (slug) => `/doctor/${slug}`,
  contact: '/contact',
  patientPortal: '/patient-portal',
};
