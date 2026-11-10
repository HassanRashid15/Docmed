import React from 'react';
import { Filter, Smartphone, Lock } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Search & Select Doctor',
    description:
      'Filter by clinical specialty, insurance compatibility, language, and verified patient outcomes to find your ideal provider.',
    tipIcon: Filter,
    tip: 'Instant insurance verification',
  },
  {
    number: '02',
    title: 'Choose Consult Modality',
    description:
      'Pick your preferred time slot and opt for high-definition encrypted telehealth from home or an in-clinic campus consultation.',
    tipIcon: Smartphone,
    tip: 'Accessible on any browser or mobile app',
  },
  {
    number: '03',
    title: 'Receive Care & Sync Records',
    description:
      'Receive clear diagnosis, auto-routed pharmacy prescriptions, diagnostic referrals, and continuous doctor messaging.',
    tipIcon: Lock,
    tip: '256-bit HIPAA vault sync',
  },
];

function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
      <SectionHeading
        watermark="PROCESS"
        title="Your Journey in Three Steps"
      />
      <p className="mx-auto mb-16 max-w-2xl text-center text-sm text-slate-600">
        We eliminated the friction of clinical visits. Experience frictionless scheduling, rapid
        video triage, and synchronized medical records.
      </p>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step) => {
          const TipIcon = step.tipIcon;
          return (
            <div
              key={step.number}
              className="relative flex flex-col items-start space-y-4 rounded-2xl bg-white p-8 shadow-md"
              data-aos="fade-up"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#0181f5] to-[#5db2ff] text-lg font-semibold text-white">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              <div className="flex items-center gap-2 pt-2 text-[11px] font-semibold text-docmed-blue">
                <TipIcon className="h-4 w-4" />
                {step.tip}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;
