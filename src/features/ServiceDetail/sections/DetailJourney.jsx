import React from 'react';
import { CalendarPlus, FlaskConical, Users, Smartphone } from 'lucide-react';

const ICONS = { CalendarPlus, FlaskConical, Users, Smartphone };

function DetailJourney({ journey }) {
  return (
    <section className="w-full bg-docmed-light/50 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-docmed-blue">
            Clear Clinical Trajectory
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Your Patient Journey at DocMed
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            We strip away complexity and anxiety with structured, transparent steps guided by
            your personal cardiac care coordinator.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
          {journey.map((step) => {
            const Icon = ICONS[step.icon] || CalendarPlus;
            return (
              <div
                key={step.step}
                className="flex flex-col justify-between space-y-4 rounded-xl bg-white p-6 shadow-sm"
                data-aos="fade-up"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold ${step.stepClass}`}
                    >
                      {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
                <span className={`text-[11px] font-semibold ${step.metaClass}`}>
                  {step.meta}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DetailJourney;
