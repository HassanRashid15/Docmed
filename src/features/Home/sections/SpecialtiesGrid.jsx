import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Baby,
  Brain,
  Bone,
  FlaskConical,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ROUTES } from '../../../constants/siteInfo';

const departments = [
  {
    icon: HeartPulse,
    count: '84 Specialists',
    title: 'Cardiology & Vascular',
    description:
      'Comprehensive heart health, digital ECG interpretation, non-invasive catheterization, and post-infarct recovery monitoring.',
  },
  {
    icon: Baby,
    count: '112 Specialists',
    title: 'Pediatrics & Family Health',
    description:
      'Newborn screenings, milestone tracking, childhood immunization records, and sympathetic adolescent medicine.',
  },
  {
    icon: Brain,
    count: '56 Specialists',
    title: 'Neurology & Brain Spine',
    description:
      'Advanced neural diagnostics, stroke recovery protocol, migraine therapeutics, and memory wellness evaluations.',
  },
  {
    icon: Bone,
    count: '92 Specialists',
    title: 'Orthopedics & Sports',
    description:
      'Joint reconstruction, robotic surgery, sports ligament recovery, and guided musculoskeletal physical therapy.',
  },
  {
    icon: FlaskConical,
    count: '68 Specialists',
    title: 'Oncology & Cancer Care',
    description:
      'Precision genomic oncology, targeted immunotherapy options, supportive palliative clinical teams, and survivor networks.',
  },
  {
    icon: Sparkles,
    count: '47 Specialists',
    title: 'Dermatology & Skin Health',
    description:
      'High-magnification dermoscopy screenings, chronic eczema protocols, laser skin rejuvenation, and melanoma triage.',
  },
];

function SpecialtiesGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <SectionHeading
        watermark="DEPARTMENTS"
        title="Specialized Care for Every Phase of Life"
      />
      <div className="mb-10 flex justify-center">
        <Link
          to={ROUTES.service}
          className="inline-flex items-center gap-1 text-sm font-semibold text-docmed-blue hover:text-docmed-hover"
        >
          View All 45 Departments
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => {
          const Icon = dept.icon;
          return (
            <div
              key={dept.title}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-xl"
              data-aos="fade-up"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-docmed-light text-docmed-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-docmed-light px-3 py-1 text-[11px] font-medium text-slate-600">
                    {dept.count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{dept.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{dept.description}</p>
              </div>
              <div className="pt-6">
                <Link
                  to={ROUTES.service}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-docmed-blue transition-all hover:gap-2"
                >
                  Explore Department →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SpecialtiesGrid;
