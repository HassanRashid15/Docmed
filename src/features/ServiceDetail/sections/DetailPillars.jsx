import React from 'react';
import {
  HeartPulse,
  Activity,
  Zap,
  Heart,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const ICONS = { HeartPulse, Activity, Zap, Heart };

function DetailPillars({ pillars }) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-docmed-blue">
              Specialized Care Wings
            </span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Comprehensive Cardiac Subspecialties
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Multidisciplinary clinical modules delivering targeted treatment protocols from
            preventive diagnostics to minimally invasive structural repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = ICONS[pillar.icon] || Heart;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
                data-aos="fade-up"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-docmed-light text-docmed-blue transition-colors group-hover:bg-docmed-blue group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                  <ul className="space-y-2 pt-2">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-900"
                      >
                        <ArrowRight className="h-4 w-4 shrink-0 text-docmed-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href={`#${pillar.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-docmed-blue transition-colors hover:text-docmed-hover"
                  >
                    {pillar.link}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DetailPillars;
