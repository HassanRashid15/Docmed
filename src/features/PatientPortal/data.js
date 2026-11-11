import { ROUTES, SITE } from '../../constants/siteInfo';

export const PATIENT_PORTAL_SEO = {
  title: `Patient Portal | ${SITE.name}`,
  description:
    'Access your DocMed patient portal: appointments, prescriptions, lab results, care plans, and secure messaging with your care team.',
  keywords:
    'patient portal, medical records, prescriptions, lab results, appointments, DocMed, secure messaging',
  canonical: ROUTES.patientPortal,
};

export const PATIENT = {
  name: 'Eleanor Vance',
  recordId: '#DM-884920',
  updatedAt: 'Today 08:30 AM',
  primaryCare: 'Dr. Sarah Jenkins, MD',
  primaryCareSlug: 'sarah-jenkins',
  bloodGroup: 'O+ (Rh Positive)',
  insurance: 'BlueCross PPO • Active',
};

export const QUICK_ACTIONS = [
  { id: 'book', label: 'Book Appointment', icon: 'calendar_add_on', tone: 'primary', to: ROUTES.findDoctors },
  { id: 'refill', label: 'Refill Meds', icon: 'prescriptions', tone: 'muted' },
  { id: 'message', label: 'Message Team', icon: 'chat', tone: 'muted' },
  { id: 'pay', label: 'Pay Bill', icon: 'payments', tone: 'muted' },
];

export const VITALS = [
  {
    id: 'bp',
    label: 'Blood Pressure',
    icon: 'favorite',
    iconTone: 'primary',
    status: 'Normal',
    statusTone: 'tertiary',
    value: '118/76',
    unit: 'mmHg',
    meta: '3d ago',
    spark: 'bp',
  },
  {
    id: 'pulse',
    label: 'Resting Pulse',
    icon: 'ecg_heart',
    iconTone: 'error',
    status: 'Resting',
    statusTone: 'tertiary',
    value: '72',
    unit: 'bpm',
    meta: 'Live sync',
    spark: 'pulse',
  },
  {
    id: 'glucose',
    label: 'HbA1c Glucose',
    icon: 'water_drop',
    iconTone: 'tertiary',
    status: 'Optimal',
    statusTone: 'tertiary',
    value: '5.4%',
    unit: 'target < 5.7%',
    meta: '90d avg',
    progress: 68,
  },
  {
    id: 'visits',
    label: 'Upcoming Visits',
    icon: 'event_available',
    iconTone: 'secondary',
    status: 'This Week',
    statusTone: 'primary',
    value: '1',
    unit: 'Scheduled',
    meta: 'Thu, 10:30 AM',
    note: 'Pre-intake pending',
  },
];

export const UPCOMING_APPOINTMENT = {
  title: 'Cardiology Follow-Up',
  badge: 'In 2 Days',
  doctorName: 'Dr. Sarah Jenkins, MD',
  doctorRole: 'Board Certified Cardiologist • Heart Failure Specialist',
  doctorSlug: 'sarah-jenkins',
  doctorImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCh_qMYkGymC3WuRu5V57cmRJ7S5B-dSsrBM3yyA6-Imz8r1wisiCVSz98hsrIArnTltgyFqTQqORqYJrGo2w1ABHXRCYqljy98WWEpeSjb3VsfUcfgdzu2ucKvZ7yWtMe_AzH_fkAmQR1WlzOBJfTGw-w0sQ8MbRQZyxzHsUbolVkQrI5qeLOVRhPYSXiPOpQVGD_1ikyjfxMks9fw4O_8JBS346uiMraN2CtxthU',
  when: 'Thu, Oct 17 • 10:30 AM',
  duration: '45-minute comprehensive visit',
  visitType: 'In-Person Consultation',
  location: 'Manhattan Medical Pavilion, Rm 402',
  prepTitle: 'Preparation Note',
  prepNote: 'Fasting not required. Please bring current medication list.',
};

export const PRESCRIPTIONS = [
  {
    id: 'atorvastatin',
    name: 'Atorvastatin 20mg',
    tag: 'Lipid Lowering',
    tagTone: 'neutral',
    directions: '1 tablet daily at bedtime • Rx #9482012',
    supply: '45 days remaining supply (3 refills left)',
    supplyTone: 'tertiary',
    icon: 'pill',
    action: 'Request Refill',
    actionTone: 'muted',
  },
  {
    id: 'lisinopril',
    name: 'Lisinopril 10mg',
    tag: 'Refill Alert',
    tagTone: 'error',
    directions: '1 tablet daily in the morning • Rx #7731940',
    supply: '12 days remaining • Refill requested automatically',
    supplyTone: 'error',
    icon: 'notification_important',
    action: 'Fast-Track Refill',
    actionTone: 'primary',
    alert: true,
  },
];

export const CARE_PLAN = {
  title: 'Care Plan: Post-Op Cardiac Recovery',
  subtitle: 'Supervised by Dr. Sarah Jenkins & DocMed Rehab Staff',
  phaseBadge: 'Phase 3 of 4',
  completion: 75,
  phases: [
    {
      id: 1,
      label: 'Phase 1',
      title: 'Early Mobility',
      detail: 'Completed Wk 2',
      state: 'done',
    },
    {
      id: 2,
      label: 'Phase 2',
      title: 'Supervised Cardio',
      detail: 'Completed Wk 6',
      state: 'done',
    },
    {
      id: 3,
      label: 'Phase 3',
      title: 'Endurance Build',
      detail: 'Current Target: 6k steps',
      state: 'active',
    },
    {
      id: 4,
      label: 'Phase 4',
      title: 'Full Independence',
      detail: 'Starts Nov 1',
      state: 'locked',
    },
  ],
};

export const LAB_REPORTS = [
  {
    id: 'cmp',
    title: 'Comprehensive Metabolic Panel',
    meta: 'Oct 10, 2025 • DocMed Central Pathology Lab',
    status: 'Normal',
    note: 'Electrolytes and kidney panels in target window." — Dr. Jenkins',
    notePrefix: 'Clinician Note:',
    footer: 'Reviewed by Dr. Jenkins',
    footerIcon: 'verified',
    footerTone: 'tertiary',
    action: 'View PDF',
    actionIcon: 'picture_as_pdf',
  },
  {
    id: 'lipid',
    title: 'Lipid Profile Panel',
    meta: 'Oct 10, 2025 • DocMed Central Pathology Lab',
    status: 'Normal',
    stats: ['Total Cholesterol: 168 mg/dL', 'LDL: 78 mg/dL'],
    footer: 'Reviewed Oct 11',
    action: 'Download',
    actionIcon: 'download',
  },
  {
    id: 'ecg',
    title: '12-Lead Electrocardiogram (ECG)',
    meta: 'Sept 28, 2025 • In-Clinic Recording',
    status: 'Normal Sinus',
    footer: 'Waveform synced to EHR',
    action: 'Examine ECG',
    actionIcon: 'visibility',
  },
];

export const MESSAGING = {
  doctorName: 'Dr. Sarah Jenkins',
  doctorImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCh_qMYkGymC3WuRu5V57cmRJ7S5B-dSsrBM3yyA6-Imz8r1wisiCVSz98hsrIArnTltgyFqTQqORqYJrGo2w1ABHXRCYqljy98WWEpeSjb3VsfUcfgdzu2ucKvZ7yWtMe_AzH_fkAmQR1WlzOBJfTGw-w0sQ8MbRQZyxzHsUbolVkQrI5qeLOVRhPYSXiPOpQVGD_1ikyjfxMks9fw4O_8JBS346uiMraN2CtxthU',
  status: 'Online • Typical reply under 2 hours',
  sender: 'Dr. Jenkins',
  time: 'Yesterday, 4:15 PM',
  message:
    'Your lab results look very reassuring, Eleanor. Let\'s discuss continued dosage on Thursday.',
};

export const BILLING = {
  balance: '$0.00',
  note: 'All insurance claims processed and cleared.',
  lastStatement: 'Last Statement: Sep 28 ($35.00 Copay Paid)',
};
