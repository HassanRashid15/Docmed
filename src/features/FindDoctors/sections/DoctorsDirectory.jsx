import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import DoctorCard from './DoctorCard';
import { DOCTORS } from '../data';
import { ROUTES, SITE } from '../../../constants/siteInfo';

function DoctorsDirectory() {
  return (
    <div className="space-y-6 lg:col-span-8 xl:col-span-9">
      {DOCTORS.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}

      <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
        <span className="order-2 text-body-md text-on-surface-variant sm:order-1">
          Showing <strong className="font-semibold text-on-surface">1 – 4</strong> of{' '}
          <strong className="font-semibold text-on-surface">148</strong> specialists
        </span>
        <div className="order-1 flex items-center gap-1.5 sm:order-2">
          <button
            type="button"
            disabled
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest text-outline shadow-sm hover:text-on-surface disabled:opacity-40"
          >
            <Icon name="chevron_left" className="text-base" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-label-md shadow-sm ${
                page === 1
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
              }`}
            >
              {page}
            </button>
          ))}
          <span className="w-8 text-center text-label-md text-outline">...</span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest text-label-md text-on-surface shadow-sm hover:bg-surface-container"
          >
            12
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container"
          >
            <Icon name="chevron_right" className="text-base" />
          </button>
        </div>
      </div>

      <aside
        aria-label="Support Navigation"
        className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-container p-6 text-on-primary shadow-md lg:p-8"
      >
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl space-y-1.5">
            <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-caption text-on-primary backdrop-blur-md">
              <Icon name="support_agent" className="text-xs" />
              24/7 Clinical Concierge
            </div>
            <h3 className="text-headline-sm font-semibold tracking-tight">
              Can&apos;t find your specialist or condition?
            </h3>
            <p className="text-body-md text-on-primary/80">
              Speak directly with a DocMed registered nurse Care Navigator. We will review your
              symptoms, verify insurance compatibility, and book priority referrals.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              to={ROUTES.contact}
              className="flex items-center gap-2 rounded-xl bg-surface-container-lowest px-5 py-3 text-label-md text-primary shadow transition-all hover:bg-surface-container"
            >
              <Icon name="chat" className="text-lg" />
              Live Nurse Chat
            </Link>
            <a
              href={SITE.emergencyPhone.href}
              className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-label-md text-on-primary backdrop-blur-sm transition-all hover:bg-white/25"
            >
              <Icon name="call" className="text-lg" />
              Call {SITE.emergencyPhone.display}
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default DoctorsDirectory;
