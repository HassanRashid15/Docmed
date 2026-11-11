import React from 'react';
import { Gauge, LineChart, Sparkles } from 'lucide-react';

const ICONS = { Gauge, LineChart, Sparkles };

function DetailTech({ tech }) {
  return (
    <section className="w-full bg-docmed-light/50 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-docmed-blue">
            Cutting-Edge Infrastructure
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Advanced Imaging & Interventional Facilities
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            DocMed equips our cardiac specialists with precision diagnostic imaging to identify
            microvascular disease and structural vulnerabilities before symptoms progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tech.map((item) => {
            const FooterIcon = ICONS[item.footerIcon] || Gauge;
            return (
              <div
                key={item.title}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm"
                data-aos="fade-up"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-between space-y-3 p-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-docmed-blue/10 px-2 py-0.5 text-[11px] font-medium text-docmed-blue">
                        {item.badge}
                      </span>
                      <span
                        className={`text-[11px] font-medium ${
                          item.metaClass || 'text-slate-400'
                        }`}
                      >
                        {item.meta}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-4 text-[11px] font-medium text-slate-500">
                    <FooterIcon className="h-4 w-4 text-docmed-blue" />
                    <span>{item.footer}</span>
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

export default DetailTech;
