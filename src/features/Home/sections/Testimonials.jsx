import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';

const stories = [
  {
    quote:
      '“When my arrhythmia flared up on a Sunday evening, Dr. Hayes took my telemetry readout over DocMed video within fifteen minutes. The calmness and clinical speed saved me from an unnecessary and chaotic emergency room visit.”',
    name: 'David K., 54',
    meta: 'Cardiology Patient • Atlanta',
    doctor: 'Dr. Julian Hayes',
  },
  {
    quote:
      '“Managing twin toddlers with recurrent ear infections was overwhelming until we found Dr. Lin on DocMed. Prescriptions were sent straight to our 24h pharmacy within the hour. The continuous digital follow-up gave us pure peace of mind.”',
    name: 'Claire & Noah R.',
    meta: 'Pediatrics • Chicago',
    doctor: 'Dr. Sarah Lin',
  },
  {
    quote:
      '“After a torn meniscus, Dr. Rostova guided my entire pre-op imaging review and rehabilitation check-ins via DocMed. Being able to review my MRI scans collaboratively on a shared screen was unprecedented.”',
    name: 'Tariq M., 32',
    meta: 'Sports Medicine • Denver',
    doctor: 'Dr. Elena Rostova',
  },
];

function Testimonials() {
  return (
    <section className="w-full bg-docmed-light/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          watermark="STORIES"
          title="Transformative Care Stories"
        />
        <div className="mb-14 flex items-center justify-center gap-4">
          <div className="text-sm font-semibold text-slate-900">98.4% Patient Retention</div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="text-[11px] text-slate-500">Verified Post-Visit Surveys</div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-md"
              data-aos="fade-up"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-docmed-blue">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed text-slate-800">{story.quote}</p>
              </div>
              <div className="mt-6 border-t border-docmed-light pt-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{story.name}</div>
                    <div className="text-[11px] text-slate-600">{story.meta}</div>
                  </div>
                  <span className="rounded bg-docmed-light px-2 py-1 text-[11px] text-slate-600">
                    {story.doctor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
