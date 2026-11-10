import { ROUTES, SITE } from '../../constants/siteInfo';

export const FIND_DOCTORS_SEO = {
  title: `Find Doctors | ${SITE.name}`,
  description:
    'Find verified doctors and specialists near you. Filter by specialty, availability, insurance, and book in-person or telehealth appointments.',
  keywords:
    'find doctors, specialists, cardiology, neurology, pediatrics, orthopedics, telehealth, book appointment, DocMed',
  canonical: ROUTES.findDoctors,
};

export const ACTIVE_FILTERS = [
  { id: 'next48', label: 'Next 48h Available (38)', removable: true, icon: 'bolt', active: true },
  { id: 'today', label: 'Available Today', count: '14', removable: false },
  { id: 'evening', label: 'Evening / Urgent Slots', count: '22', removable: false, icon: 'nightlight' },
];

export const CONSULTATION_TYPES = [
  { id: 'telehealth', label: 'Telehealth / Video', icon: 'videocam', iconClass: 'text-primary', checked: true },
  { id: 'inperson', label: 'In-Person Clinic', icon: 'domain', iconClass: 'text-tertiary', checked: true },
  { id: 'home', label: 'Home Visit', icon: 'home_health', iconClass: 'text-secondary', checked: false },
];

export const AVAILABILITY_OPTIONS = [
  { id: 'today', label: 'Available Today', count: 14, active: false, dot: true },
  { id: 'next48', label: 'Next 48 Hours', count: 38, active: true },
  { id: 'weekend', label: 'This Weekend', count: 9, active: false },
  { id: 'week', label: 'Next 7 Days', count: 86, active: false },
  { id: 'evening', label: 'Evening Hours (After 5 PM)', count: 22, active: false, icon: 'dark_mode' },
];

export const SPECIALTIES = [
  { id: 'cardiology', label: 'Cardiology', count: 34, checked: true },
  { id: 'neurology', label: 'Neurology', count: 18, checked: true },
  { id: 'pediatrics', label: 'Pediatrics', count: 42, checked: true },
  { id: 'orthopedics', label: 'Orthopedics', count: 25, checked: true },
  { id: 'dermatology', label: 'Dermatology', count: 29, checked: false },
];

export const INSURANCE_OPTIONS = [
  { id: 'bcbs', label: 'Blue Cross Blue Shield', checked: true },
  { id: 'aetna', label: 'Aetna', checked: true },
  { id: 'cigna', label: 'Cigna Healthcare', checked: false },
  { id: 'medicare', label: 'Medicare & Medicaid', checked: false },
  { id: 'united', label: 'UnitedHealthcare', checked: false },
  { id: 'selfpay', label: 'Out-of-Network Self Pay', checked: false, muted: true },
];

export const DOCTORS = [
  {
    id: 'sarah-jenkins',
    name: 'Dr. Sarah Jenkins, MD',
    role: 'Senior Cardiologist & Director at',
    workplace: 'Heart Institute',
    specialty: 'Cardiology',
    badges: [
      { label: 'Top Rated 2024', tone: 'tertiary', icon: 'workspace_premium' },
      { label: 'Instant Confirmation', tone: 'neutral' },
    ],
    rating: 4.98,
    reviews: 320,
    experience: '16 yrs experience',
    location: 'Manhattan Medical Pavilion',
    fee: '$150',
    feeNote: 'Covered by most plans',
    slotLabel: 'First Available Slot',
    slotText: 'Today at 2:15 PM',
    slotHint: '(In 3 hours)',
    slotTone: 'tertiary',
    openingsLabel: "Today's Openings:",
    openings: ['09:30 AM', '11:15 AM', '02:15 PM', '04:30 PM'],
    selectedOpening: '02:15 PM',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCh_qMYkGymC3WuRu5V57cmRJ7S5B-dSsrBM3yyA6-Imz8r1wisiCVSz98hsrIArnTltgyFqTQqORqYJrGo2w1ABHXRCYqljy98WWEpeSjb3VsfUcfgdzu2ucKvZ7yWtMe_AzH_fkAmQR1WlzOBJfTGw-w0sQ8MbRQZyxzHsUbolVkQrI5qeLOVRhPYSXiPOpQVGD_1ikyjfxMks9fw4O_8JBS346uiMraN2CtxthU',
    imageAlt: 'Portrait of Dr. Sarah Jenkins, cardiologist',
  },
  {
    id: 'marcus-vance',
    name: 'Dr. Marcus Vance, MD, PhD',
    role: 'Chief Neurologist & Neurosurgeon at',
    workplace: 'DocMed Neurological Center',
    specialty: 'Neurology',
    badges: [
      { label: 'Spine & Peripheral Nerve', tone: 'secondary' },
      { label: 'PhD Neurobiology', tone: 'neutral' },
    ],
    rating: 4.92,
    reviews: 215,
    experience: '12 yrs experience',
    location: 'DocMed Neurological Center, Upper East Side',
    fee: '$175',
    feeNote: 'Copay typically $20-$40',
    slotLabel: 'First Available Slot',
    slotText: 'Tomorrow, 10:00 AM',
    slotBadge: 'Next 48h',
    slotTone: 'primary',
    openingsLabel: "Tomorrow's Openings:",
    openings: ['10:00 AM', '11:30 AM', '01:45 PM', '03:30 PM'],
    selectedOpening: '10:00 AM',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDt3N-R1OrsHh3P-pGr6buQkxKV6XeKp9SfF3D_8N6fxTDhWJTQwRBZTSG0V9hEa6SatkbSf5WmXWKhTdvN5i1NwYQNtlg4yPsSRc4NM4P5YtbJQ2W4-NRypy7RDS3yug190MlWjtm6I1OEcA0WO7m8rW2P5QwK87kM1n55zV0oXGuGoRP3t2nki-6KxpVh79RtTxx04GSlA59nr8_iKPxMnuJkXqT_WNegH_7Lcrc',
    imageAlt: 'Portrait of Dr. Marcus Vance, neurologist',
  },
  {
    id: 'elena-rostova',
    name: 'Dr. Elena Rostova, MD',
    role: 'Child Health Specialist at',
    workplace: "Children's Health Center & Ambulatory Care",
    specialty: 'Pediatrics',
    badges: [
      { label: 'Adolescent Medicine', tone: 'tertiary' },
      { label: 'Parent Choice Award', tone: 'neutral' },
    ],
    rating: 4.97,
    reviews: 410,
    experience: '14 yrs experience',
    location: "Children's Health Center, Downtown Brooklyn",
    fee: '$130',
    feeNote: 'In-network standard',
    slotLabel: 'First Available Slot',
    slotText: 'Today, 4:45 PM',
    slotHintBadge: '+ Evening 6 PM',
    slotTone: 'tertiary',
    openingsLabel: "Today's Openings:",
    openings: ['12:00 PM', '02:30 PM', '04:45 PM', '06:00 PM'],
    selectedOpening: '04:45 PM',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCr_VfBXxaYjmhGc8thRH6Oueoa3T6GPLf7sCy5vNdclWqGNDLcQeaYBKbuIx_RFZ3gDbt3AEg64DKyfyA3qiC4JG4Yv5OHREp6O8cBHVoe7nQR6lqmCfVfOGgNPAIyM7SRV-L-A7_j6UqgX58JdOZWZ12AdgsHanyO11JfJeDToK0jx8DihVgmP0ggh1vNqQGjUZT8VVP_8TLZRJwcZ6ueiPCqWrN-bfDldroeZqE',
    imageAlt: 'Portrait of Dr. Elena Rostova, pediatrician',
  },
  {
    id: 'jonathan-chen',
    name: 'Dr. Jonathan Chen, MD',
    role: 'Orthopedic Surgeon & Team Physician at',
    workplace: 'East River Sports Clinic',
    specialty: 'Orthopedics',
    badges: [
      { label: 'Sports Medicine', tone: 'secondary' },
      { label: 'Joint Reconstruction', tone: 'neutral' },
    ],
    rating: 4.89,
    reviews: 190,
    experience: '18 yrs experience',
    location: 'East River Sports Clinic, Midtown East',
    fee: '$190',
    feeNote: 'Insurance verified prior',
    slotLabel: 'First Available Slot',
    slotText: 'Wednesday, 11:30 AM',
    slotTone: 'neutral',
    openingsLabel: 'Wednesday Openings:',
    openings: ['11:30 AM', '01:00 PM', '03:15 PM', '05:00 PM'],
    selectedOpening: '11:30 AM',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAhpHfa2P5xPRXhWE3eJk_wV_Av9yBnt6twyy2RrtXMBEi7gaNp7_bd1t4kcmnIBHSXkkdIw6dOWB-i2-rrGs7TVYCMirYQOGTXKUU1WmjmIXJyoySjEYE3e_mIltM_aHoojZPrJkA1wamX_t9m65swGkmSHbUG3A8NVD-sdDnOZEQwX5MFEj1glHH0SoJZMDHraPwGxmA67Zp73RiQFjkTZmMAiha0znVJoVP38zY',
    imageAlt: 'Portrait of Dr. Jonathan Chen, orthopedic surgeon',
  },
];
