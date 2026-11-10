import React from 'react';

function DetailMetrics({ metrics }) {
  return (
    <section className="w-full bg-docmed-light/50 px-6 py-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm"
            data-aos="fade-up"
          >
            <div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {metric.label}
              </span>
              <p className={`mt-1 text-3xl font-bold md:text-4xl ${metric.color}`}>
                {metric.value}
              </p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailMetrics;
