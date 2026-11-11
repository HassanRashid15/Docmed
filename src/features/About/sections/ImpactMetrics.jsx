import React from 'react';
import { METRICS } from '../data';

function ImpactMetrics() {
  return (
    <section className="w-full bg-surface-container-low py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 items-stretch gap-6 lg:grid-cols-4">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="grid min-h-[220px] grid-rows-[auto_1fr_auto_66px] rounded-xl bg-surface-container-lowest p-6 shadow-sm"
                data-aos="fade-up"
              >
                <div className={`flex items-center justify-between ${metric.iconClass}`}>
                  <span className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                    {metric.label}
                  </span>
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
                </div>

                <div aria-hidden="true" />

                <div className="text-[28px] font-bold leading-9 tracking-tight text-on-surface md:text-[36px] md:leading-[44px]">
                  {metric.value}
                </div>

                <p className="m-0 text-body-md text-on-surface-variant">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImpactMetrics;
