import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Heart,
  Brain,
  Baby,
  Activity,
  FlaskConical,
  Video,
  Scan,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { ROUTES } from '../../../constants/siteInfo';
import { SERVICES } from '../data';
import { SERVICE_DETAILS } from '../../ServiceDetail/data';

const ICONS = {
  Users,
  Heart,
  Brain,
  Baby,
  Activity,
  FlaskConical,
  Video,
  Scan,
};

function serviceCtaTo(service) {
  if (SERVICE_DETAILS[service.id]) {
    return ROUTES.servicePage(service.id);
  }
  return ROUTES.contact;
}

function ServicesGrid({ services }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-docmed-blue">
            Specialty Directory
          </span>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Core Departments & Centers of Excellence
          </h2>
        </div>
        <span className="text-sm text-slate-500">
          Showing {services.length} accredited multidisciplinary clinical institute
          {services.length === 1 ? '' : 's'}
        </span>
      </div>

      {services.length === 0 ? (
        <div className="rounded-xl bg-docmed-light p-8 text-center text-sm text-slate-600">
          No services match your search. Try another specialty or clear filters.
        </div>
      ) : (
        <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = ICONS[service.icon] || Users;
            return (
              <article
                key={service.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-xl bg-white p-6 transition-all ${
                  service.featured
                    ? 'shadow-md hover:shadow-lg'
                    : 'shadow-sm hover:shadow-md'
                }`}
              >
                {service.featured && (
                  <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-docmed-blue/5" />
                )}

                <div
                  className={`mb-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105 ${service.iconWrap}`}
                >
                  <Icon className={`h-6 w-6 ${service.icon === 'Heart' ? 'fill-current' : ''}`} />
                </div>

                <div className="mb-2 flex min-h-[22px] items-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                  <span className="text-[11px] text-slate-400">{service.dept}</span>
                </div>

                <h3 className="mb-2 min-h-[3.5rem] text-lg font-bold leading-snug text-slate-900">
                  {service.title}
                </h3>

                <p className="mb-2 min-h-[4.5rem] text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {service.description}
                </p>

                <ul className="mb-2 flex flex-1 flex-col gap-2 pl-0">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs font-medium text-slate-900"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-docmed-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Link
                    to={serviceCtaTo(service)}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold no-underline transition-all ${
                      service.ctaVariant === 'primary'
                        ? 'bg-docmed-blue text-white shadow-sm hover:bg-docmed-hover'
                        : 'bg-docmed-light text-docmed-blue hover:bg-docmed-blue/10'
                    }`}
                  >
                    {service.cta}
                    {service.featured ? (
                      <ExternalLink className="h-4 w-4" />
                    ) : service.id === 'telehealth' ? (
                      <Zap className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export { SERVICES };
export default ServicesGrid;
