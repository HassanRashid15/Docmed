export const FILTERS = [
  { id: 'all', label: 'All Specialties', count: 8 },
  { id: 'acute', label: 'Acute & Urgent', count: 2 },
  { id: 'chronic', label: 'Complex & Chronic', count: 4 },
  { id: 'diagnostics', label: 'Diagnostic & Imaging', count: 1 },
  { id: 'pediatric-family', label: 'Pediatric & Family', count: 2 },
  { id: 'surgical', label: 'Surgical & Invasive', count: 2 },
  { id: 'cancer', label: 'Cancer Care', count: 1 },
];

export const SERVICES = [
  {
    id: 'primary',
    categories: ['acute', 'pediatric-family'],
    icon: 'Users',
    iconWrap: 'bg-docmed-light text-docmed-blue',
    badge: 'Preventive Care',
    badgeClass: 'bg-docmed-light text-slate-700',
    dept: 'Dept 01',
    title: 'Primary & Family Care',
    description:
      'Whole-person continuous wellness management, preventative health screenings, and annual routine checkups for all generations.',
    features: [
      'Annual Wellness & Biometrics',
      'Preventive Immunizations',
      'Hypertension & Diabetes Triage',
    ],
    cta: 'Book Primary Doctor',
    ctaVariant: 'secondary',
  },
  {
    id: 'cardiology',
    categories: ['chronic', 'surgical'],
    icon: 'Heart',
    iconWrap: 'bg-red-100 text-red-600',
    badge: 'Institute of Excellence',
    badgeClass: 'bg-docmed-blue/10 text-docmed-blue font-semibold',
    dept: 'Dept 02',
    title: 'Cardiology & Cardiovascular',
    description:
      'Sub-specialized diagnostics, catheterization, arrhythmology interventions, and integrated cardiac rehabilitation therapies.',
    features: [
      'Non-Invasive Echocardiography',
      'Cardiac Electrophysiology (EP)',
      'Transcatheter Valve Repair',
    ],
    cta: 'View Cardiology Details',
    ctaVariant: 'primary',
    featured: true,
  },
  {
    id: 'neurology',
    categories: ['chronic', 'surgical'],
    icon: 'Brain',
    iconWrap: 'bg-slate-100 text-docmed-blue',
    badge: 'Neuro Sciences',
    badgeClass: 'bg-docmed-light text-slate-700',
    dept: 'Dept 03',
    title: 'Neurology & Spine',
    description:
      'Comprehensive stroke rescue networks, neurodegenerative disorders, epilepsy protocols, and minimally invasive spine microsurgery.',
    features: [
      'Comprehensive Stroke Center',
      "Memory & Alzheimer's Clinic",
      'High-Precision Spinal Fusion',
    ],
    cta: 'Consult Neuro Specialist',
    ctaVariant: 'secondary',
  },
  {
    id: 'pediatrics',
    categories: ['acute', 'pediatric-family'],
    icon: 'Baby',
    iconWrap: 'bg-docmed-green-soft text-docmed-green-dark',
    badge: 'Pediatric Health',
    badgeClass: 'bg-docmed-light text-slate-700',
    dept: 'Dept 04',
    title: 'Pediatrics & Adolescents',
    description:
      'Compassionate child-first clinical environments covering developmental milestones, adolescent wellness, and neonatal follow-up.',
    features: [
      'Newborn & Infant Wellness',
      'Developmental Assessments',
      'Adolescent Behavioral Care',
    ],
    cta: 'Pediatric Scheduling',
    ctaVariant: 'secondary',
  },
  {
    id: 'orthopedics',
    categories: ['chronic', 'surgical'],
    icon: 'Activity',
    iconWrap: 'bg-docmed-light text-docmed-blue',
    badge: 'Orthopedic Institute',
    badgeClass: 'bg-docmed-light text-slate-700',
    dept: 'Dept 05',
    title: 'Orthopedics & Sports',
    description:
      'Mako-assisted robotic joint replacement, outpatient arthroscopic tendon repairs, and elite rehabilitation physiatry.',
    features: [
      'Robotic Knee & Hip Arthroplasty',
      'Ligament (ACL/Rotator) Repair',
      'Physical & Manual Therapy Lab',
    ],
    cta: 'Explore Ortho Options',
    ctaVariant: 'secondary',
  },
  {
    id: 'oncology',
    categories: ['chronic', 'cancer'],
    icon: 'FlaskConical',
    iconWrap: 'bg-slate-100 text-docmed-blue',
    badge: 'Cancer Care',
    badgeClass: 'bg-docmed-light text-slate-700',
    dept: 'Dept 06',
    title: 'Oncology & Infusion',
    description:
      'Next-generation DNA molecular tumor profiling, precision immunotherapy suites, and dedicated supportive palliative oncology.',
    features: [
      'Targeted Immunotherapy Infusions',
      'Genomic Sequencing & Trials',
      'Nutritional & Psych Oncology',
    ],
    cta: 'Cancer Center Navigation',
    ctaVariant: 'secondary',
  },
  {
    id: 'telehealth',
    categories: ['acute'],
    icon: 'Video',
    iconWrap: 'bg-docmed-green-soft text-docmed-green-dark',
    badge: 'Instant Care',
    badgeClass: 'bg-docmed-green text-white',
    dept: 'Dept 07',
    title: 'Telehealth Urgent Clinic',
    description:
      'Zero-commute encrypted video consultations. See an emergency physician under 15 minutes for acute illness and urgent renewals.',
    features: [
      'Average 8-Min Wait Queue',
      'Instant E-Prescriptions to Rx',
      'Direct Specialist Fast-Referral',
    ],
    cta: 'Start Urgent Visit Now',
    ctaVariant: 'primary',
  },
  {
    id: 'imaging',
    categories: ['diagnostics'],
    icon: 'Scan',
    iconWrap: 'bg-docmed-light text-slate-700',
    badge: 'Diagnostics',
    badgeClass: 'bg-slate-200 text-slate-700',
    dept: 'Dept 08',
    title: 'Imaging & Pathology',
    description:
      'Precision 3T MRI, low-dose ultra-high-definition 128-slice CT scans, and fully automated in-house molecular biology laboratories.',
    features: [
      '3T Wide-Bore MRI & Dual-CT',
      'Rapid Same-Day Blood Panels',
      'Board Radiologist Read < 4h',
    ],
    cta: 'Schedule Diagnostic',
    ctaVariant: 'secondary',
  },
];

export const MODALITIES = [
  {
    icon: 'Hospital',
    iconWrap: 'bg-docmed-light text-docmed-blue',
    badge: 'Flagship Centers',
    title: 'Hospital & Clinic Campus',
    description:
      'Full access to high-intensity operating surgical suites, acute emergency teams, advanced imaging suites, and hands-on physical therapy.',
    bestFor: 'Surgery, complex symptoms, diagnostic scans, labs.',
    turnaround: 'Scheduled visits & immediate ER triage.',
    cta: 'Locate Nearest Campus',
    highlight: false,
  },
  {
    icon: 'MonitorSmartphone',
    iconWrap: 'bg-docmed-blue text-white',
    badge: 'Fastest Option',
    badgeClass: 'bg-docmed-blue/10 text-docmed-blue font-bold',
    title: 'Virtual Care & Video',
    description:
      'Encrypted HD telemedicine sessions connecting your smartphone or PC directly to board-certified clinicians without travel or waiting rooms.',
    bestFor: 'Cold/flu, mental health, refill follow-ups, initial triage.',
    turnaround: 'Live in under 15 minutes, 24/7/365.',
    cta: 'Connect to Telehealth',
    highlight: true,
  },
  {
    icon: 'Home',
    iconWrap: 'bg-docmed-green-soft text-docmed-green-dark',
    badge: 'Home Concierge',
    title: 'DocMed In-Home Health',
    description:
      'Traveling registered nurses and medical practitioners provide post-op checks, mobile blood draws, and physical recovery right in your home.',
    bestFor: 'Elder care, post-surgical recovery, palliative visits, phlebotomy.',
    turnaround: 'Same-day and pre-scheduled appointments.',
    cta: 'Check Home Care Zip Code',
    highlight: false,
  },
];

export const INSURERS = [
  { name: 'BlueCross', note: 'In-Network' },
  { name: 'Aetna', note: 'In-Network' },
  { name: 'Cigna', note: 'In-Network' },
  { name: 'Medicare', note: 'Part B & Adv.' },
];

export const COST_SERVICES = [
  { value: 40, label: 'Telehealth Urgent Consultation (Typical Copay: $0 - $40)' },
  { value: 25, label: 'Primary Care Annual Wellness (Typical Copay: $0 - $25)' },
  { value: 60, label: 'Specialist Cardiology Diagnostic Assessment ($45 - $75)' },
  { value: 120, label: 'Diagnostic 3T MRI Scan ($80 - $200)' },
];

export const COST_TIERS = [
  { value: 0.2, label: 'Commercial HMO / PPO (Standard In-Network)' },
  { value: 0.1, label: 'High Tier / Platinum Network' },
  { value: 0.5, label: 'High Deductible Health Plan (HDHP)' },
  { value: 1.0, label: 'Self-Pay / Non-Insured Rate' },
];
