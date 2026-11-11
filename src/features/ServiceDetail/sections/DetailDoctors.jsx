import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, CalendarDays, Building2, BookOpen, ArrowRight } from 'lucide-react';
import { ROUTES } from '../../../constants/siteInfo';

function DetailDoctors({ doctors }) {
  return (
    <section id="care-team" className="w-full bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-docmed-blue">
              World-Renowned Clinicians
            </span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Lead Cardiology Specialists
            </h2>
          </div>
          <Link
            to={ROUTES.findDoctors}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-docmed-blue transition-colors hover:text-docmed-hover"
          >
            View all 35 cardiovascular doctors
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md lg:p-8"
              data-aos="fade-up"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-20 w-20 shrink-0 rounded-full object-cover shadow-sm"
                  />
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${doctor.roleClass}`}
                      >
                        {doctor.role}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-docmed-green">
                        <BadgeCheck className="h-3 w-3" />
                        Board Certified
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{doctor.name}</h3>
                    <p className="text-sm text-slate-600">{doctor.specialty}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">{doctor.bio}</p>

                <div className="space-y-2 rounded-lg bg-docmed-light/70 p-4">
                  <div className="flex items-center justify-between gap-3 text-xs font-medium text-slate-900">
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <CalendarDays className="h-4 w-4 text-docmed-blue" />
                      Next Available
                    </span>
                    <span className="font-semibold text-docmed-blue">{doctor.nextAvailable}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-xs font-medium text-slate-900">
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <Building2 className="h-4 w-4 text-docmed-blue" />
                      Primary Facility
                    </span>
                    <span className="text-right text-slate-900">{doctor.facility}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6">
                <Link
                  to={ROUTES.findDoctors}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-docmed-blue px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-docmed-hover hover:shadow-md"
                >
                  <BookOpen className="h-4 w-4" />
                  {doctor.bookLabel}
                </Link>
                <Link
                  to={ROUTES.findDoctors}
                  className="rounded-lg bg-docmed-light px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-docmed-blue/10 hover:text-docmed-blue"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailDoctors;
