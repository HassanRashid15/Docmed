import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import { PATIENT, QUICK_ACTIONS } from '../data';

function PortalHeader() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 via-surface-variant/40 to-transparent blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-container/15 px-3 py-1 font-caption text-caption font-semibold uppercase tracking-wider text-tertiary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-tertiary" />
              Active Patient File
            </span>
            <span className="font-caption text-caption font-medium text-on-surface-variant">
              Record Updated: {PATIENT.updatedAt}
            </span>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
            <h1 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
              Welcome back, {PATIENT.name}
            </h1>
            <span className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm font-semibold tracking-wide text-on-surface-variant">
              {PATIENT.recordId}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1 font-body-md text-body-md text-on-surface-variant sm:gap-6">
            <div className="flex items-center gap-2">
              <Icon name="medical_services" className="text-lg text-primary" />
              <span>
                Primary Care:{' '}
                <strong className="font-semibold text-on-surface">{PATIENT.primaryCare}</strong>
              </span>
            </div>
            <div className="h-1 w-1 rounded-full bg-outline-variant" />
            <div className="flex items-center gap-2">
              <Icon name="bloodtype" className="text-lg text-error" />
              <span>
                Blood Group:{' '}
                <strong className="font-semibold text-on-surface">{PATIENT.bloodGroup}</strong>
              </span>
            </div>
            <div className="h-1 w-1 rounded-full bg-outline-variant" />
            <div className="flex items-center gap-2">
              <Icon name="verified_user" className="text-lg text-tertiary" />
              <span>
                Insurance:{' '}
                <strong className="font-semibold text-on-surface">{PATIENT.insurance}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-2.5 pt-2 sm:flex sm:flex-wrap lg:flex-col lg:pt-0 xl:flex-row">
          {QUICK_ACTIONS.map((action) => {
            const className =
              action.tone === 'primary'
                ? 'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-label-md text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container sm:w-auto'
                : 'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-surface-container-high px-4 py-2.5 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-variant sm:w-auto';

            if (action.to) {
              return (
                <Link key={action.id} to={action.to} className={className}>
                  <Icon name={action.icon} className="text-base" />
                  {action.label}
                </Link>
              );
            }

            return (
              <button key={action.id} type="button" className={className}>
                <Icon name={action.icon} className="text-base" />
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PortalHeader;
