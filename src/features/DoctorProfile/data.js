import { ROUTES, SITE } from '../../constants/siteInfo';

export const DOCTOR_PROFILES = {
  'sarah-jenkins': {
    slug: 'sarah-jenkins',
    name: 'Dr. Sarah Jenkins',
    credentials: 'MD, FACC',
    shortName: 'Dr. Sarah Jenkins, MD',
    breadcrumbSpecialty: 'Cardiovascular Medicine',
    titleBadge: 'Senior Attending Physician',
    facultyLabel: 'DocMed Certified Medical Faculty',
    summary:
      'Specialist in Clinical Cardiology, Advanced Heart Failure & Non-Invasive Cardiovascular Imaging. Pioneer in patient-tailored preventive lipidology.',
    affiliations: [
      { icon: 'domain', label: 'DocMed Manhattan Medical Pavilion' },
      { icon: 'local_hospital', label: 'NYU Langone Health Adjunct Clinician' },
    ],
    tags: [
      { label: 'Accepting New Patients', tone: 'tertiary', pulse: true },
      { label: 'English & Spanish', tone: 'secondary', icon: 'translate' },
      { label: 'In-Person & Virtual', tone: 'primary', icon: 'videocam' },
    ],
    boardBadge: 'Board Certified',
    boardOrg: 'ABIM & CV',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfkP6IYac_rtXuHNpNEZkmqSg7bZFZ5T-K5saGSgUtN6b0dg-YHEUXCYxlcWsQIti4ah29WoyCwdAL2hOHTo3dFnZHu1iLMxypetXkY8PJbgdPH6I_TgG-lx4TOBPQWgodsPDrpeTsp49PmaRsAp8RGoad1VkakX4Sizgi-5Z_0ZeHpwmNyJl9Kw3mP_iM-V43ctzVRg-QwZWd5aq8EjDWWx8YlH_3jCywaBbmxIU',
    imageAlt: 'Portrait of Dr. Sarah Jenkins, senior cardiologist',
    stats: [
      { icon: 'star', value: '4.98', label: '324 Verified Reviews', filled: true, tone: 'primary' },
      { icon: 'medical_services', value: '16+', label: 'Years Experience', tone: 'primary' },
      { icon: 'supervised_user_circle', value: '4.8k+', label: 'Patient Consults', tone: 'primary' },
      { icon: 'bolt', value: '< 15m', label: 'Average Wait Time', tone: 'tertiary' },
    ],
    about: [
      'Dr. Sarah Jenkins is an internationally recognized cardiologist committed to bridging preventive cardiology with compassionate, bedside clinical care. Having directed the Non-Invasive Cardiac Diagnostics Unit at Johns Hopkins before joining DocMed, Dr. Jenkins works closely with adults managing complex cardiovascular diseases, refractory hypertension, and ischemic heart conditions.',
      '"I believe high-caliber medicine begins with unhurried listening. Every heartbeat tells a unique physiological story, and our shared goal is not merely symptom suppression, but the long-term preservation of your active, vibrant life."',
    ],
    specialties: [
      'Coronary Artery Disease',
      'Cardiovascular Lipidology',
      'Arrhythmia Management',
      'Echocardiography (TEE & TTE)',
      'Hypertensive Heart Disease',
      "Women's Heart Wellness",
    ],
    education: [
      {
        title: 'Fellowship in Cardiovascular Disease',
        years: '2009 – 2012',
        yearsTone: 'primary',
        school: 'Johns Hopkins Medicine • Baltimore, MD',
        detail:
          'Chief Cardiology Fellow, specialized in advanced cardiac magnetic resonance and hemodynamics.',
        active: true,
      },
      {
        title: 'Internal Medicine Residency',
        years: '2006 – 2009',
        yearsTone: 'secondary',
        school: 'Massachusetts General Hospital • Boston, MA',
        detail: 'Harvard Medical School Teaching Affiliate, Resident Clinician of the Year (2008).',
      },
      {
        title: 'Doctor of Medicine (M.D.)',
        years: '2002 – 2006',
        yearsTone: 'secondary',
        school: 'Columbia University Vagelos College of Physicians and Surgeons • NY',
        detail: 'Graduated Alpha Omega Alpha Honor Medical Society.',
      },
    ],
    location: {
      title: 'Clinic Location & Access',
      subtitle: 'Manhattan Outpatient Center',
      name: 'DocMed Lexington Pavilion',
      address: '450 Lexington Ave, Suite 1400, New York, NY 10017',
      mapImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAV0FZ0Q8z8DJ3aFAR4Kzqgt42dXKbRfuPqLTnhoDbEgBg9yKwJSaoBrotwdGn4gVXVWIJVuFgzbVKDOXJJu89xT-BaxaTtVS4_2IQCeUnYkjfpczcg30VNyjooNqueQwHfAU0VM0p8fuWXm5_kzcJ9QA7Jb7_uAPPFZIcmxcoUzrQWdU-D2RFaT3GiRNc15Gp1WherB52NkOD5qcGKC9QR2FtTljCwU-UUxN52nRg',
      mapsUrl: 'https://maps.google.com/?q=450+Lexington+Ave,+New+York,+NY+10017',
      access: [
        {
          icon: 'subway',
          title: 'Subway Transit',
          text: 'Direct access via Grand Central-42 St (Lines 4, 5, 6, 7 & S).',
        },
        {
          icon: 'local_parking',
          title: 'Valet & Parking',
          text: 'Underground valet available; validated parking at 45th St garage.',
        },
        {
          icon: 'accessible',
          title: 'Accessibility',
          text: 'Full ADA wheelchair compliance, tactile elevators, Braille signage.',
        },
      ],
    },
    insurance: {
      intro:
        'Dr. Jenkins accepts most major commercial, employer-sponsored, and Medicare advantage insurance policies. Copays vary by individual policy tier.',
      carriers: [
        'Aetna Choice POS II',
        'BlueCross BlueShield',
        'Cigna HealthSpring',
        'UnitedHealthcare',
        'Medicare Traditional',
        'Oxford Freedom',
        'Oscar Health Plan',
        'Humana Gold Choice',
      ],
    },
    reviews: {
      score: '4.98',
      count: 324,
      distribution: [
        { label: '5 Star', percent: 94 },
        { label: '4 Star', percent: 5 },
        { label: '3 Star', percent: 1 },
        { label: '2 Star', percent: 0 },
        { label: '1 Star', percent: 0 },
      ],
      testimonials: [
        {
          initials: 'EM',
          name: 'Eleanor M.',
          meta: 'Verified Patient • Consulted for Cardiac Arrhythmia',
          tone: 'primary',
          text: '"Dr. Jenkins was remarkably thorough. She took the time to review previous lab results from two different hospitals that were baffling other doctors. She explained my treatment plan in simple, reassuring terms without any rushed feeling."',
          place: 'Visited Lexington Clinic',
          date: 'October 2, 2024',
        },
        {
          initials: 'DT',
          name: 'David T.',
          meta: 'Verified Patient • Telehealth Second Opinion',
          tone: 'secondary',
          text: '"The virtual video consultation was seamless. Clear audio/video via DocMed, and Dr. Jenkins had all my imaging pre-loaded on her screen. Her preventive lifestyle changes prevented me from having to increase my medication."',
          place: 'Telehealth Video Visit',
          date: 'September 28, 2024',
        },
      ],
    },
    booking: {
      monthLabel: 'Oct 2024',
      dates: [
        { id: 'mon-14', day: 'Mon', date: 14, label: 'Mon, Oct 14' },
        { id: 'tue-15', day: 'Tue', date: 15, label: 'Tue, Oct 15', selected: true },
        { id: 'wed-16', day: 'Wed', date: 16, label: 'Wed, Oct 16' },
        { id: 'thu-17', day: 'Thu', date: 17, label: 'Thu, Oct 17' },
        { id: 'fri-18', day: 'Fri', date: 18, label: 'Fri, Oct 18' },
      ],
      morningSlots: ['09:30 AM', '11:00 AM'],
      afternoonSlots: ['02:15 PM', '04:00 PM'],
      defaultSlot: '11:00 AM',
      reasons: [
        { value: 'new', label: 'New Patient Consultation (45 min)' },
        { value: 'followup', label: 'Cardiac Follow-up Evaluation (30 min)' },
        { value: 'routine', label: 'Routine Cardiac Wellness & ECG (30 min)' },
        { value: 'second_opinion', label: 'Specialist Second Opinion (60 min)' },
      ],
      insuranceCard: {
        plan: 'Aetna Choice POS II',
        memberId: 'Member ID: •••• 9281',
      },
      copay: '$35.00',
      selfPay: '$180.00',
      clinicPhone: SITE.emergencyPhone,
    },
  },
};

export function getDoctorProfile(slug) {
  return DOCTOR_PROFILES[slug] || DOCTOR_PROFILES['sarah-jenkins'];
}

export function getDoctorProfileSeo(profile) {
  return {
    title: `${profile.shortName} | Book Appointment | ${SITE.name}`,
    description: profile.summary,
    keywords: `${profile.name}, cardiologist, doctor profile, book appointment, DocMed`,
    canonical: ROUTES.doctor(profile.slug),
  };
}
