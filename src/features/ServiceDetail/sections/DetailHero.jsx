import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CalendarDays,
  Phone,
  CheckCircle2,
  HeartPulse,
  Heart,
} from 'lucide-react';
import { ROUTES, SITE } from '../../../constants/siteInfo';

function DetailHero({ data }) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7" data-aos="fade-right">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-docmed-blue/10 px-3 py-1 text-xs font-medium text-docmed-blue">
              <Award className="h-3.5 w-3.5" />
              {data.badge}
            </span>
            {data.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full bg-docmed-light px-2.5 py-1 text-[11px] font-medium text-slate-600"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.15]">
            {data.title}{' '}
            <span className="text-docmed-blue">{data.titleAccent}</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to={ROUTES.findDoctors}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-docmed-blue px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-docmed-hover hover:shadow-none"
            >
              <CalendarDays className="h-5 w-5" />
              Book Cardiology Consultation
            </Link>
            <a
              href={SITE.emergencyPhone.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-docmed-light"
            >
              <Phone className="h-5 w-5 text-red-500" />
              Cardiac Triage {SITE.emergencyPhone.display}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-[11px] font-medium text-slate-500">
            {data.trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-docmed-blue" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5" data-aos="fade-left">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
            <img
              src={data.heroImage}
              alt={data.heroCard.title}
              className="h-80 w-full object-cover lg:h-96"
            />
            <div className="space-y-3 bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-docmed-blue">
                    {data.heroCard.label}
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {data.heroCard.title}
                  </h4>
                </div>
                <span className="rounded-full bg-docmed-green-light px-2.5 py-1 text-xs font-medium text-docmed-green">
                  {data.heroCard.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {data.heroCard.description}
              </p>
              <div className="flex items-center justify-between pt-2 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1">
                  <HeartPulse className="h-4 w-4 text-docmed-blue" />
                  {data.heroCard.footerLeft}
                </span>
                <span className="text-slate-400">{data.heroCard.footerRight}</span>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 hidden items-center gap-3 rounded-xl bg-white p-3.5 shadow-lg sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-docmed-blue/10 text-docmed-blue">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                {data.floatingBadge.title}
              </p>
              <p className="text-[11px] font-semibold text-docmed-green">
                {data.floatingBadge.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailHero;
