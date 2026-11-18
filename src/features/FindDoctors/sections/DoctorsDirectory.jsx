import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import DoctorCard from './DoctorCard';
import { DOCTORS } from '../data';
import { ROUTES, SITE } from '../../../constants/siteInfo';

function MapView({ doctors }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm">
      <div className="relative h-[420px] bg-gradient-to-br from-primary-fixed via-surface-container to-secondary-fixed/40 sm:h-[520px]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(11_28_48_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11_28_48_/_0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-4 top-4 z-10 rounded-xl bg-surface-container-lowest/95 px-3 py-2 text-label-sm font-semibold text-on-surface shadow-sm backdrop-blur">
          New York Metro · {doctors.length} specialists on map
        </div>

        {doctors.map((doctor, index) => {
          const positions = [
            'left-[18%] top-[28%]',
            'left-[58%] top-[22%]',
            'left-[34%] top-[55%]',
            'left-[72%] top-[48%]',
          ];
          return (
            <Link
              key={doctor.id}
              to={ROUTES.doctor(doctor.id)}
              className={`absolute z-10 -translate-x-1/2 -translate-y-full ${positions[index % positions.length]}`}
              title={doctor.name}
            >
              <span className="flex flex-col items-center">
                <span className="rounded-full bg-primary px-2.5 py-1 text-caption font-semibold text-on-primary shadow-md">
                  {doctor.fee}
                </span>
                <span className="mt-1 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-surface-container-lowest bg-white shadow-lg">
                  <img src={doctor.image} alt="" className="h-full w-full object-cover" />
                </span>
                <span className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-primary" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-3 border-t border-outline-variant/30 p-4 sm:grid-cols-2">
        {doctors.map((doctor) => (
          <Link
            key={doctor.id}
            to={ROUTES.doctor(doctor.id)}
            className="flex items-center gap-3 rounded-xl bg-surface-container-low/70 p-3 transition-colors hover:bg-surface-container"
          >
            <img
              src={doctor.image}
              alt={doctor.imageAlt}
              className="h-12 w-12 rounded-xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-label-md font-semibold text-on-surface">{doctor.name}</p>
              <p className="truncate text-caption text-on-surface-variant">
                {doctor.specialty} · {doctor.location}
              </p>
            </div>
            <span className="shrink-0 text-label-sm font-semibold text-primary">{doctor.fee}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function DoctorsDirectory({ view = 'list' }) {
  return (
    <div className="space-y-6 lg:col-span-8 xl:col-span-9">
      {view === 'map' ? (
        <MapView doctors={DOCTORS} />
      ) : (
        <div
          className={
            view === 'grid'
              ? 'grid grid-cols-1 gap-3 sm:grid-cols-2'
              : 'flex flex-col gap-6'
          }
        >
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} layout={view} />
          ))}
        </div>
      )}

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
