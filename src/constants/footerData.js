import { ROUTES } from './siteInfo';

export const FOOTER_CLINICAL_LINKS = [
  { name: 'Specialty Services', to: ROUTES.service },
  { name: 'Cardiology', to: ROUTES.service },
  { name: 'Neurology & Stroke', to: ROUTES.service },
  { name: 'Pediatrics', to: ROUTES.service },
  { name: 'Orthopedics & Sports', to: ROUTES.service },
  { name: 'Emergency Care', to: ROUTES.service },
  { name: 'Telehealth Urgent Care', to: ROUTES.contact },
];

export const FOOTER_ABOUT_LINKS = [
  { name: 'About Us', to: ROUTES.about },
  { name: 'Contact Us', to: ROUTES.contact },
  { name: 'Patient Rights & Privacy', to: ROUTES.contact },
  { name: 'Insurance & Billing Desk', to: ROUTES.contact },
  { name: 'Our Services', to: ROUTES.service },
  { name: 'Make an Appointment', to: ROUTES.contact },
];

export const FOOTER_LEGAL_LINKS = [
  { name: 'Medical Disclaimers', href: '#' },
  { name: 'HIPAA Notice', href: '#' },
  { name: 'Terms of Telehealth', href: '#' },
  { name: 'Accessibility', href: '#' },
];
