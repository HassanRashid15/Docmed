import {
  Users,
  BadgeCheck,
  Building2,
  HeartPulse,
  Heart,
  Crosshair,
  ChevronsRight,
  UsersRound,
  Award,
  Lock,
  Network,
  GraduationCap,
  FlaskConical,
  Hospital,
  PhoneCall,
  BrainCircuit,
  Dna,
  UserSearch,
  CalendarDays,
  ArrowUpRight,
} from 'lucide-react';
import { ROUTES, SITE } from '../../constants/siteInfo';

export const ABOUT_SEO = {
  title: `About ${SITE.name.toUpperCase()} | Medical Center - ${SITE.tagline}`,
  description: `Learn about ${SITE.legalName} — academic clinical rigor, hybrid telehealth, and board-certified specialists. Discover our mission, leadership, and values.`,
  keywords:
    'about docmed, medical center about, healthcare team, medical professionals, hospital mission, medical values, healthcare experience, doctor team, medical center history, clinical trials',
  canonical: ROUTES.about,
};

export const HERO = {
  eyebrow: `About ${SITE.name} Health System`,
  titleBefore: 'Advancing human health through',
  titleHighlight: 'compassion',
  titleAfter: ', innovation, and frictionless access.',
  description: `${SITE.name} was founded on a singular premise: world-class academic clinical rigor should never be constrained by geography. We fuse board-certified bedside expertise with instantaneous telehealth systems to ensure high-caliber medical counsel is reachable from any home, clinic, or regional hospital campus.`,
  primaryCta: { label: 'Explore Our Clinicians', to: ROUTES.service },
  secondaryCta: { label: 'Research & Trials', href: '#clinical-trials' },
  image: {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80',
    alt: 'Multidisciplinary healthcare team reviewing diagnostic results',
  },
  card: {
    title: 'Integrated Academic Network',
    subtitle: 'Continuous care coordination across in-person & virtual triage',
  },
};

export const METRICS = [
  {
    id: 'patients',
    label: 'Annual Care',
    value: '1.2M+',
    description: 'Patients treated annually across in-person & virtual visits',
    icon: Users,
    iconClass: 'text-primary',
  },
  {
    id: 'satisfaction',
    label: 'Quality Score',
    value: '98.4%',
    description: 'Verified patient satisfaction across independent Press Ganey surveys',
    icon: BadgeCheck,
    iconClass: 'text-tertiary',
  },
  {
    id: 'campuses',
    label: 'Regional Centers',
    value: '15',
    description: 'Full-service hospital campuses and ambulatory surgery centers',
    icon: Building2,
    iconClass: 'text-primary',
  },
  {
    id: 'specialties',
    label: 'Clinical Breadth',
    value: '45+',
    description: 'Board-certified clinical specialties and pediatric sub-disciplines',
    icon: HeartPulse,
    iconClass: 'text-secondary',
  },
];

export const PILLARS = {
  eyebrow: 'Guiding Clinical Principles',
  title: 'Medicine engineered around human lives, governed by uncompromising standards.',
  items: [
    {
      title: 'Patient-Centered Care',
      description:
        "We replace transactional encounters with empathetic, shared decision-making. Treatment pathways honor each individual's context, values, and lifestyle goals.",
      standard: 'Standard 01 • Human Empathy',
      icon: Heart,
      iconWrap: 'bg-primary-fixed text-primary',
      standardClass: 'text-primary',
    },
    {
      title: 'Clinical Precision',
      description:
        'Every clinician is board-certified and operates under rigorous peer-reviewed protocols. Precision diagnostics minimize unnecessary interventions and speed recovery.',
      standard: 'Standard 02 • Evidence First',
      icon: Crosshair,
      iconWrap: 'bg-tertiary-fixed text-tertiary',
      standardClass: 'text-tertiary',
    },
    {
      title: 'Seamless Digital Flow',
      description:
        'Frictionless access with instant appointments, unified EHR medical histories, zero paperwork redundancy, and uninterrupted care continuum tracking.',
      standard: 'Standard 03 • Zero Friction',
      icon: ChevronsRight,
      iconWrap: 'bg-secondary-fixed text-secondary',
      standardClass: 'text-secondary',
    },
    {
      title: 'Health Equity & Access',
      description:
        'Universal triage without digital divides. Real-time medical translation in 40+ languages, subsidized rural telehealth nodes, and inclusive health outreach.',
      standard: 'Standard 04 • Universal Access',
      icon: UsersRound,
      iconWrap: 'bg-primary-fixed-dim text-primary-container',
      standardClass: 'text-primary-container',
    },
  ],
};

export const LEADERSHIP = {
  eyebrow: 'Executive Leadership',
  title: 'Led by practicing physicians and health technology pioneers.',
  subtitle:
    'Our governance structure mandates that clinical chiefs maintain ongoing patient contact and active hospital advisory duties.',
  leaders: [
    {
      name: 'Dr. Elena Rostova',
      credentials: 'MD, PhD',
      role: 'Chief Executive Officer',
      badge: 'CEO & Neurology',
      badgeClass: 'text-primary',
      bio: 'Former Chair of Clinical Neurology at Hopkins. Champion of neuro-degenerative research and distributed care networks for over two decades.',
      affiliation: 'Johns Hopkins / Stanford',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dr. Sarah Jenkins',
      credentials: 'MD, FACC',
      role: 'Chief Medical Officer',
      badge: 'CMO & Cardiology',
      badgeClass: 'text-tertiary',
      bio: 'Pioneered rapid cardiac intervention pathways. Directs continuous clinical quality assurance across all 15 DocMed campuses.',
      affiliation: 'Harvard Medical / MGH',
      image:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Marcus Vance',
      credentials: 'PhD',
      role: 'Chief Technology Officer',
      badge: 'CTO & Informatics',
      badgeClass: 'text-secondary',
      bio: "Health informatics pioneer behind DocMed's latency-free telehealth backbone and cryptographic patient record safety architectures.",
      affiliation: 'MIT CSAIL / Health AI',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dr. Julian Hayes',
      credentials: 'MD, FACS',
      role: 'Chief Quality Officer',
      badge: 'Quality & Surgery',
      badgeClass: 'text-primary',
      bio: 'Minimally invasive surgical authority supervising surgical outcome registries and zero-error patient safety initiatives network-wide.',
      affiliation: 'Columbia Univ / Mayo Clinic',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export const ACCREDITATIONS = {
  eyebrow: 'Rigorous Oversight & Compliance',
  title: "Recognized by the World's Highest Medical Standards",
  items: [
    {
      title: 'JCAHO Gold Seal',
      description: 'National Hospital Accreditation for Exemplary Patient Safety & Outcomes',
      icon: Award,
      iconWrap: 'bg-secondary-container text-primary',
    },
    {
      title: 'HIPAA Certified',
      description: 'Continuous End-to-End Encryption & Strict PHI Data Confidentiality',
      icon: Lock,
      iconWrap: 'bg-tertiary-fixed text-tertiary',
    },
    {
      title: 'HL7 FHIR Interoperable',
      description: 'Seamless Universal Medical Record Portability across Health Systems',
      icon: Network,
      iconWrap: 'bg-primary-fixed text-primary',
    },
    {
      title: 'Academic Teaching Hub',
      description: 'Accredited Clinical Fellowship & Physician Residency Network',
      icon: GraduationCap,
      iconWrap: 'bg-surface-container text-on-surface',
    },
  ],
};

export const TIMELINE = {
  eyebrow: 'Our Journey',
  title: 'From a single research clinic to a nationwide hybrid health network.',
  milestones: [
    {
      year: '2012',
      title: 'The Academic Foundation',
      description: `${SITE.name} opens its doors as a single cardiology and neurology translational research clinic at St. Jude Academic Pavilion.`,
      footnote: 'Campus 01 • Metro Center',
      footnoteClass: 'text-on-surface-variant',
      yearClass: 'bg-surface-container-high text-primary',
      icon: FlaskConical,
    },
    {
      year: '2017',
      title: 'Regional Expansion',
      description:
        'Expanded to 5 surgical campuses, establishing dedicated emergency trauma centers and specialized pediatric care towers.',
      footnote: '250,000 Annual Visits',
      footnoteClass: 'text-on-surface-variant',
      yearClass: 'bg-surface-container-high text-primary',
      icon: Hospital,
    },
    {
      year: '2020',
      title: 'The Virtual Shift',
      description: `Rolled out ${SITE.name} Connect, transitioning 600+ doctors to our encrypted virtual telehealth system during national health emergencies.`,
      footnote: 'Instant Triage Protocol',
      footnoteClass: 'text-on-surface-variant',
      yearClass: 'bg-surface-container-high text-primary',
      icon: PhoneCall,
    },
    {
      year: '2025',
      title: 'The Hybrid Standard',
      description:
        'Now serving 1.2M+ patients annually across 15 hospital campuses and continuous 24/7 virtual care networks.',
      footnote: '15 Campuses • 45 Specialties',
      footnoteClass: 'font-bold text-primary',
      yearClass: 'bg-primary text-on-primary',
      icon: BrainCircuit,
    },
  ],
};

export const CLINICAL_TRIALS = {
  eyebrow: 'Pioneering Medicine',
  title: 'Active Clinical Trials: Accelerating cures from the bench to bedside.',
  description: `${SITE.name} operates over 80 actively funded clinical trials in oncology immunotherapy, cardiology bio-resorbable stents, and remote AI diagnostics. Our patients gain voluntary access to promising investigative treatments before general market release.`,
  capacityLabel: '84% Capacity',
  enrollmentTitle: 'Trial Enrollment Progress',
  enrollmentSubtitle: '2024-2025 Institutional Target',
  trials: [
    {
      title: 'CARDIA-Phase III Registry',
      status: 'Enrolling',
      statusClass: 'bg-tertiary/10 text-tertiary',
      iconWrap: 'bg-tertiary-fixed text-tertiary',
      icon: HeartPulse,
      description:
        'Investigating next-generation bio-resorbable cardiac scaffolding in early-stage arterial disease.',
    },
    {
      title: 'NEO-Shield Immuno Trial',
      status: 'Phase II',
      statusClass: 'bg-primary/10 text-primary',
      iconWrap: 'bg-primary-fixed text-primary',
      icon: Dna,
      description:
        'Targeted checkpoint inhibitor combinations for non-small cell lung carcinoma.',
    },
  ],
  enrollment: [
    { label: 'Cardiology Interventions', percent: 92, barClass: 'bg-primary' },
    { label: 'Translational Oncology', percent: 88, barClass: 'bg-tertiary' },
    { label: 'Neurological Biomarkers', percent: 73, barClass: 'bg-secondary' },
    { label: 'Pediatric Genetics', percent: 65, barClass: 'bg-primary-container' },
  ],
};

export const JOIN_MISSION = {
  eyebrow: `Join The ${SITE.name} Community`,
  title: 'Shaping the next century of empathetic medicine.',
  description:
    'Whether you are seeking trusted clinical care for yourself and loved ones, or an ambitious clinician looking to practice at the cutting edge of medicine and technology.',
  cards: [
    {
      title: 'For Prospective Patients',
      description: `Connect with our board-certified physicians in minutes. Choose between virtual telehealth or find the nearest regional ${SITE.name} hospital campus.`,
      icon: UserSearch,
      cta: { label: 'Find a Clinician', to: ROUTES.service, icon: CalendarDays, variant: 'primary' },
    },
    {
      title: 'For Healthcare Professionals',
      description:
        'Explore clinical faculty appointments, surgical fellowships, residency matches, and medical informatics leadership opportunities.',
      icon: BadgeCheck,
      cta: {
        label: 'Careers & Residency Programs',
        to: ROUTES.contact,
        icon: ArrowUpRight,
        variant: 'ghost',
      },
    },
  ],
};
