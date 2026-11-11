import React, { useState } from 'react';
import Icon from '../../../components/Icon';
import {
  AVAILABILITY_OPTIONS,
  CONSULTATION_TYPES,
  INSURANCE_OPTIONS,
  SPECIALTIES,
} from '../data';
import { SITE } from '../../../constants/siteInfo';

function FiltersSidebar() {
  const [consultation, setConsultation] = useState(
    Object.fromEntries(CONSULTATION_TYPES.map((item) => [item.id, item.checked]))
  );
  const [availability, setAvailability] = useState('next48');
  const [specialties, setSpecialties] = useState(
    Object.fromEntries(SPECIALTIES.map((item) => [item.id, item.checked]))
  );
  const [insurance, setInsurance] = useState(
    Object.fromEntries(INSURANCE_OPTIONS.map((item) => [item.id, item.checked]))
  );
  const [rating, setRating] = useState('4.5');

  const selectedSpecialtyCount = Object.values(specialties).filter(Boolean).length;

  const resetAll = () => {
    setConsultation(Object.fromEntries(CONSULTATION_TYPES.map((item) => [item.id, item.checked])));
    setAvailability('next48');
    setSpecialties(Object.fromEntries(SPECIALTIES.map((item) => [item.id, item.checked])));
    setInsurance(Object.fromEntries(INSURANCE_OPTIONS.map((item) => [item.id, item.checked])));
    setRating('4.5');
  };

  return (
    <aside className="sticky top-24 space-y-6 lg:col-span-4 xl:col-span-3">
      <div className="space-y-6 rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <Icon name="tune" className="text-xl text-primary" />
            <h3 className="text-title text-on-surface">Filters</h3>
          </div>
          <button
            type="button"
            onClick={resetAll}
            className="text-caption font-semibold text-primary transition-colors hover:text-primary-container"
          >
            Reset All
          </button>
        </div>

        <div className="space-y-1.5">
          <label
            className="block text-label-sm font-medium text-on-surface-variant"
            htmlFor="doctor-search"
          >
            Search Clinician or Condition
          </label>
          <div className="relative flex items-center rounded-xl bg-surface-container-low px-3 py-2.5 transition-all focus-within:bg-surface-container-lowest focus-within:shadow-md">
            <Icon name="search" className="mr-2 text-lg text-outline" />
            <input
              id="doctor-search"
              type="text"
              placeholder="Cardiologist, Knee Pain, MRI..."
              className="w-full bg-transparent text-body-md text-on-surface placeholder:text-outline focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant">
            Consultation Type
          </label>
          <div className="grid grid-cols-1 gap-1.5">
            {CONSULTATION_TYPES.map((item) => (
              <label
                key={item.id}
                className="flex cursor-pointer items-center justify-between rounded-lg bg-surface-container-low/60 p-2 transition-colors hover:bg-surface-container-low"
              >
                <span className="flex items-center gap-2 text-body-md text-on-surface">
                  <Icon name={item.icon} className={`text-base ${item.iconClass}`} />
                  {item.label}
                </span>
                <input
                  type="checkbox"
                  checked={!!consultation[item.id]}
                  onChange={() =>
                    setConsultation((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                  }
                  className="h-4 w-4 cursor-pointer rounded accent-primary"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between">
            <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant">
              Availability Window
            </label>
            <button
              type="button"
              onClick={() => setAvailability('')}
              className="cursor-pointer text-caption font-medium text-primary hover:underline"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {AVAILABILITY_OPTIONS.map((option) => {
              const active = availability === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setAvailability(option.id)}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-caption transition-colors ${
                    active
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {option.dot && !active && <span className="h-2 w-2 rounded-full bg-tertiary" />}
                  {option.icon && <Icon name={option.icon} className="text-xs text-secondary" />}
                  <span>{option.label}</span>
                  <span
                    className={`rounded-full px-1.5 text-caption font-semibold ${
                      active
                        ? 'bg-white/20 text-on-primary'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {option.count}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="mt-1 flex w-full items-center justify-between rounded-lg border border-surface-container-high px-3 py-1.5 text-label-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
          >
            <span className="flex items-center gap-1.5">
              <Icon name="calendar_month" className="text-base text-primary" />
              <span>Specific Date Range...</span>
            </span>
            <Icon name="chevron_right" className="text-xs text-outline" />
          </button>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between">
            <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant">
              Medical Specialty
            </label>
            <span className="text-caption text-outline">{selectedSpecialtyCount} of 28</span>
          </div>
          <div className="max-h-48 space-y-1.5 overflow-y-auto pr-1">
            {SPECIALTIES.map((item) => (
              <label
                key={item.id}
                className="flex cursor-pointer items-center justify-between py-1 text-body-md text-on-surface transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!specialties[item.id]}
                    onChange={() =>
                      setSpecialties((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    className="h-4 w-4 rounded accent-primary"
                  />
                  {item.label}
                </span>
                <span className="rounded-full bg-surface-container px-2 py-0.5 text-caption text-on-surface-variant">
                  {item.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant">
            Insurance Network
          </label>
          <div className="space-y-1.5">
            {INSURANCE_OPTIONS.map((item) => (
              <label
                key={item.id}
                className={`flex cursor-pointer items-center gap-2 py-1 text-body-md ${
                  item.muted ? 'text-on-surface-variant' : 'text-on-surface'
                }`}
              >
                <input
                  type="checkbox"
                  checked={!!insurance[item.id]}
                  onChange={() =>
                    setInsurance((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                  }
                  className="h-4 w-4 rounded accent-primary"
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <label className="mb-1.5 block text-label-sm uppercase tracking-wider text-on-surface-variant">
              Clinician
            </label>
            <select className="w-full rounded-xl bg-surface-container-low px-2.5 py-2 text-body-md text-on-surface focus:outline-none">
              <option>Any Gender</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-label-sm uppercase tracking-wider text-on-surface-variant">
              Language
            </label>
            <select className="w-full rounded-xl bg-surface-container-low px-2.5 py-2 text-body-md text-on-surface focus:outline-none">
              <option>All Spoken</option>
              <option>English</option>
              <option>Spanish</option>
              <option>Mandarin</option>
              <option>French</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant">
            Minimum Rating
          </label>
          <div className="flex items-center gap-2">
            {[
              { id: '4.5', label: '4.5+ Stars' },
              { id: '4.0', label: '4.0+ Stars' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setRating(item.id)}
                className={`flex flex-1 items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-label-sm ${
                  rating === item.id
                    ? 'bg-surface-container-high font-semibold text-primary'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <Icon name="star" className="text-sm text-amber-500" filled />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 rounded-2xl bg-gradient-to-br from-error-container to-surface-container-low p-5 shadow-sm">
        <div className="flex items-center gap-2 text-on-error-container">
          <Icon name="fmd_bad" className="text-error" />
          <h4 className="text-title leading-tight text-error">Need Urgent Triage?</h4>
        </div>
        <p className="text-body-md text-on-error-container">
          Immediate emergency video line with an on-duty DocMed ER physician in under 6 minutes.
        </p>
        <a
          href={SITE.emergencyPhone.href}
          className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-error px-4 py-2.5 text-label-md text-on-error shadow-sm transition-all hover:bg-error/90"
        >
          <Icon name="call" className="text-base" />
          Start Emergency Call
        </a>
      </div>
    </aside>
  );
}

export default FiltersSidebar;
