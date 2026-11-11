import React from 'react';
import { PILLARS } from '../data';

function CorePillars() {
  return (
    <section className="w-full bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-5 max-w-7xl" data-aos="fade-up">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-primary">
            {PILLARS.eyebrow}
          </span>
          <h2 className="mt-2 text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
            {PILLARS.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.items.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md"
                data-aos="fade-up"
              >
                <div className="space-y-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconWrap}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-headline-sm text-on-surface">{pillar.title}</h3>
                  <p className="text-body-md leading-relaxed text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-6">
                  <div
                    className={`text-caption font-bold uppercase tracking-wider ${pillar.standardClass}`}
                  >
                    {pillar.standard}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CorePillars;
