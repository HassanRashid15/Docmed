import React from 'react';
import { Link } from 'react-router-dom';
import { Hospital, MonitorSmartphone, Home, ShieldCheck, Timer } from 'lucide-react';
import { ROUTES } from '../../constants/siteInfo';
import { MODALITIES } from './data';

const ICONS = { Hospital, MonitorSmartphone, Home };

function DeliveryModalities() {
  return (
    <section className="w-full bg-docmed-light/50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-docmed-blue">
            Accessible Healthcare Delivery
          </span>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Care Where & When You Need It
          </h2>
          <p className="mt-2 text-base text-slate-600 md:text-lg">
            Compare our primary treatment pathways to identify the most suitable setting for your
            condition, comfort, and schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODALITIES.map((item) => {
            const Icon = ICONS[item.icon] || Hospital;
            return (
              <div
                key={item.title}
                className={`relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-8 ${
                  item.highlight ? 'shadow-md' : 'shadow-sm'
                }`}
              >
                {item.highlight && (
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-docmed-blue/10" />
                )}
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconWrap}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                        item.badgeClass || 'bg-docmed-light text-slate-500'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          item.highlight ? 'text-docmed-green' : 'text-docmed-blue'
                        }`}
                      />
                      <div>
                        <span className="block text-sm font-semibold text-slate-900">Best For</span>
                        <span className="text-sm text-slate-600">{item.bestFor}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Timer
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          item.highlight ? 'text-docmed-green' : 'text-docmed-blue'
                        }`}
                      />
                      <div>
                        <span className="block text-sm font-semibold text-slate-900">Turnaround</span>
                        <span className="text-sm text-slate-600">{item.turnaround}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6">
                  <Link
                    to={item.highlight ? ROUTES.contact : ROUTES.contact}
                    className={`block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold no-underline transition-all ${
                      item.highlight
                        ? 'bg-docmed-blue text-white shadow-sm hover:bg-docmed-hover'
                        : 'bg-docmed-light text-slate-900 hover:bg-docmed-blue/10'
                    }`}
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DeliveryModalities;
