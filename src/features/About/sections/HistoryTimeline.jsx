import React from 'react';
import { TIMELINE } from '../data';

function HistoryTimeline() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-2xl" data-aos="fade-up">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-primary">
            {TIMELINE.eyebrow}
          </span>
          <h2 className="mt-2 text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
            {TIMELINE.title}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 z-0 hidden h-0.5 -translate-y-6 bg-outline-variant lg:block" />
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.milestones.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.year}
                  className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm"
                  data-aos="fade-up"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-label-sm font-bold ${item.yearClass}`}
                      >
                        {item.year}
                      </span>
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-headline-sm text-on-surface">{item.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{item.description}</p>
                  </div>
                  <div className={`mt-6 pt-4 text-caption ${item.footnoteClass}`}>
                    {item.footnote}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryTimeline;
