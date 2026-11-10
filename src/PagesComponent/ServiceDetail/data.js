import doctorImg from '../../Assets/Images/doctor.jpeg';
import bannerImg from '../../Assets/Images/banner.png.png';
import userImg from '../../Assets/Images/userImage.png';
import footerBanner from '../../Assets/Images/footerbanner.png';
import docpic from '../../Assets/Images/docpic.png';

export const SERVICE_DETAILS = {
  cardiology: {
    slug: 'cardiology',
    breadcrumb: 'Cardiology & Cardiovascular Health',
    statusBar: 'Emergency Cath Labs: Operating 24/7',
    accreditation: 'JCAHO Accredited Heart Center',
    badge: 'Ranked #1 Regional Heart Center',
    badges: ['ACC STEMI Certified', 'Comprehensive Stroke & Vascular'],
    title: 'Cardiology & Cardiovascular Care',
    titleAccent: 'Center of Excellence',
    description:
      'World-class interventional cardiology, electrophysiology, and non-invasive diagnostics. DocMed pairs precision robotic catheterization with empathetic, patient-centered rehabilitation to safeguard your long-term cardiac health.',
    trustItems: [
      'Same-Day Virtual & In-Clinic Consults',
      'Over 120+ Insurance Providers In-Network',
      'Full HIPAA & HL7 Telemetry Integration',
    ],
    heroImage: bannerImg,
    heroCard: {
      label: 'Live Lab Monitoring',
      title: 'Regional Catheterization Suite 3',
      status: 'Active • Sterile',
      description:
        'Equipped with ultra-low dose digital fluoroscopy and real-time hemodynamic waveform analysis.',
      footerLeft: '98 bpm avg sync',
      footerRight: 'ST-Elevation Protocol Active',
    },
    floatingBadge: {
      title: 'Door-to-Balloon',
      subtitle: '< 26 Mins (Industry standard < 90)',
    },
    metrics: [
      {
        label: 'Clinical Benchmark',
        value: '99.4%',
        color: 'text-docmed-blue',
        description: 'Procedure Success Rate across >3,400 percutaneous interventions',
      },
      {
        label: 'STEMI Response',
        value: '<28m',
        color: 'text-docmed-green',
        description: 'Average Door-to-Balloon time for acute myocardial infarction',
      },
      {
        label: 'Care Team',
        value: '35+',
        color: 'text-slate-900',
        description: 'Board-certified cardiologists, electrophysiologists & vascular surgeons',
      },
      {
        label: 'Regional Capacity',
        value: '4 Labs',
        color: 'text-docmed-hover',
        description: 'Continuous biplane catheterization & hybrid surgical suites',
      },
    ],
    pillars: [
      {
        id: 'diagnostic',
        icon: 'HeartPulse',
        title: 'Diagnostic Cardiology',
        description:
          'Precision non-invasive screening detecting early structural anomalies, ischemic signs, and functional limitations.',
        items: [
          '12-Lead Digital Resting ECG',
          '3D Transthoracic Echocardiogram',
          '14-Day Cellular Holter Telemetry',
          'Treadmill & Nuclear Stress Tests',
        ],
        link: 'Explore diagnostics',
      },
      {
        id: 'interventional',
        icon: 'Activity',
        title: 'Interventional Cardiology',
        description:
          'Minimally invasive arterial and valvular reconstruction minimizing hospital stay and surgical trauma.',
        items: [
          'Coronary Angioplasty & Stenting',
          'Transcatheter Aortic Valve (TAVR)',
          'Radial Cardiac Catheterization',
          'Rotational Atherectomy',
        ],
        link: 'Explore interventions',
      },
      {
        id: 'electrophysiology',
        icon: 'Zap',
        title: 'Arrhythmia & EP Labs',
        description:
          'State-of-the-art electrical mapping and curative ablation for atrial fibrillation and ventricular tachycardia.',
        items: [
          '3D Electro-Anatomic Mapping',
          'Cryo & RF Atrial Fibrillation Ablation',
          'Leadless Pacemaker Implantation',
          'Subcutaneous ICD Deployment',
        ],
        link: 'Explore rhythm care',
      },
      {
        id: 'prevention',
        icon: 'Heart',
        title: 'Heart Failure & Prevention',
        description:
          'Longitudinal chronic condition optimization with specialized tele-rehabilitation and biomarker monitoring.',
        items: [
          'Advanced Lipidology & ApoB Profiling',
          'Supervised Cardiac Rehabilitation',
          'Remote Pulmonary Artery Pressure Sync',
          'Metabolic Cardiology Nutrition Care',
        ],
        link: 'Explore prevention',
      },
    ],
    tech: [
      {
        image: footerBanner,
        badge: 'Non-Invasive Diagnostic',
        meta: '0 Radiation',
        title: '3-Tesla High-Field Cardiac MRI',
        description:
          'Provides sub-millimeter visualization of myocardial scar tissue, viability, myocarditis, and complex congenital defects without ionising exposure.',
        footer: 'Scans processed in under 35 minutes',
        footerIcon: 'Gauge',
      },
      {
        image: bannerImg,
        badge: 'Intelligent Monitoring',
        meta: 'FDA Cleared AI',
        metaClass: 'text-docmed-green',
        title: 'AI-Assisted Rhythm Telemetry',
        description:
          'Neural network monitors review continuous ECG streams to pinpoint paroxysmal atrial fibrillation and micro-ectopic events that human review can miss.',
        footer: 'Predictive early-warning alert system',
        footerIcon: 'LineChart',
      },
      {
        image: doctorImg,
        badge: 'Surgical Theater',
        meta: 'Ultra-low X-Ray',
        title: 'Biplane Cath & Hybrid Suites',
        description:
          'Simultaneous frontal and lateral fluoroscopic imaging allows complex valve replacements and arterial bifurcations to be treated with reduced contrast dye volumes.',
        footer: '60% lower dye volume requirement',
        footerIcon: 'Sparkles',
      },
    ],
    doctors: [
      {
        image: userImg,
        role: 'Chief Cardiologist',
        roleClass: 'bg-docmed-blue/10 text-docmed-blue',
        name: 'Dr. Sarah Jenkins, MD, FACC',
        specialty: 'General & Preventive Cardiology, Structural Diagnostics',
        bio: 'Former Clinical Fellow at Johns Hopkins Medicine with over 18 years leading comprehensive cardiovascular screening and clinical trials on lipid metabolic control.',
        nextAvailable: 'Tomorrow at 10:30 AM',
        facility: 'Main Academic Medical Pavilion',
        bookLabel: 'Book with Dr. Jenkins',
      },
      {
        image: doctorImg,
        role: 'Interventional Lead',
        roleClass: 'bg-docmed-light text-slate-700',
        name: 'Dr. Julian Hayes, MD, FSCAI',
        specialty: 'Interventional Cardiology & Complex Valvular Disease',
        bio: 'Specialized in complex transcatheter aortic valve replacements (TAVR) and high-risk coronary interventions with over 2,200 successful catheterization procedures performed.',
        nextAvailable: 'Thursday at 2:00 PM',
        facility: 'Heart & Vascular Cath Pavilion',
        bookLabel: 'Book with Dr. Hayes',
      },
    ],
    journey: [
      {
        step: '1',
        icon: 'CalendarPlus',
        title: 'Referral or Self-Booking',
        description:
          'Direct access through our portal or direct primary doctor transfer. Rapid insurance verification within 60 minutes.',
        meta: 'Triage review • Immediate',
        metaClass: 'text-docmed-blue',
        stepClass: 'bg-docmed-blue text-white',
      },
      {
        step: '2',
        icon: 'FlaskConical',
        title: 'Diagnostic Panel',
        description:
          'Same-day ECG, high-definition echocardiography, and ApoB lipid mapping performed under single-visit protocols.',
        meta: 'Single-day consolidation',
        metaClass: 'text-docmed-blue',
        stepClass: 'bg-docmed-blue text-white',
      },
      {
        step: '3',
        icon: 'Users',
        title: 'Multidisciplinary Review',
        description:
          'Joint board of clinical cardiologists, surgeons, and nutritionists build a custom intervention or lifestyle roadmap.',
        meta: 'Collaborative consensus',
        metaClass: 'text-docmed-blue',
        stepClass: 'bg-docmed-blue text-white',
      },
      {
        step: '4',
        icon: 'Smartphone',
        title: 'Post-Care Tele-Monitoring',
        description:
          'Cellular vitals kit sent to your home with direct continuous sync to your cardiology team for uninterrupted recovery.',
        meta: '365-day ongoing support',
        metaClass: 'text-docmed-green',
        stepClass: 'bg-docmed-green text-white',
      },
    ],
    testimonial: {
      image: docpic,
      quote:
        '"When my symptoms escalated, Dr. Jenkins and the cardiac cath lab team acted in minutes. The post-procedure tele-monitoring gave my family complete peace of mind while I recovered at home."',
      name: 'Robert Vance, 62',
      meta: 'Coronary Angioplasty & Stenting Patient • Recovered to active marathon walking',
      badges: [
        'Verified Patient Record',
        'Discharged in <24 hours',
        '6 Months Post-Op Followup: Fully Clear',
      ],
    },
    pricing: [
      {
        service: 'Comprehensive 12-Lead ECG',
        cpt: '93000',
        copay: '$0 - $25',
        selfPay: '$85',
      },
      {
        service: 'Complete Transthoracic Echo (2D/3D)',
        cpt: '93306',
        copay: '$20 - $50',
        selfPay: '$380',
      },
      {
        service: 'Diagnostic Cardiac Catheterization',
        cpt: '93458',
        copay: 'Plan Deductible / 10-20%',
        selfPay: 'Bundled Quote Available',
      },
      {
        service: '14-Day Cellular Holter Monitoring',
        cpt: '93248',
        copay: '$15 - $35',
        selfPay: '$195',
      },
    ],
    networks: ['Medicare', 'Medicaid', 'BCBS', 'UHC', 'Aetna', 'Tricare'],
  },
};

export function getServiceDetail(slug) {
  return SERVICE_DETAILS[slug] || null;
}
