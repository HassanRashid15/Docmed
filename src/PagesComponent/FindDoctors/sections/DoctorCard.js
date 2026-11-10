import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { ROUTES } from '../../../constants/siteInfo';

function badgeClass(tone) {
  if (tone === 'tertiary') return 'bg-tertiary-fixed text-on-tertiary-fixed';
  if (tone === 'secondary') return 'bg-secondary-fixed text-on-secondary-fixed';
  return 'bg-surface-container text-on-surface-variant';
}

function slotClass(tone) {
  if (tone === 'tertiary') {
    return 'border border-tertiary/20 bg-tertiary/10 text-tertiary';
  }
  if (tone === 'primary') {
    return 'border border-primary/20 bg-primary-fixed text-on-primary-fixed';
  }
  return 'bg-surface-container-high text-on-surface';
}

function DoctorCard({ doctor }) {
  const [selectedSlot, setSelectedSlot] = useState(doctor.selectedOpening);

  return (
    <article className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm transition-all duration-300 hover:shadow-md lg:p-7">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
        <div className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
          <div className="relative shrink-0">
            <img
              src={doctor.image}
              alt={doctor.imageAlt}
              className="h-20 w-20 rounded-2xl object-cover shadow-sm sm:h-24 sm:w-24"
            />
            <span
              className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-tertiary text-on-tertiary shadow"
              title="Verified Specialist"
            >
              <Icon name="verified" className="text-xs" />
            </span>
          </div>

          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary-fixed px-2.5 py-0.5 text-caption font-semibold uppercase tracking-wider text-on-primary-fixed">
                {doctor.specialty}
              </span>
              {doctor.badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`rounded-full px-2.5 py-0.5 text-caption font-semibold ${badgeClass(
                    badge.tone
                  )} ${badge.icon ? 'inline-flex items-center gap-1' : ''}`}
                >
                  {badge.icon && <Icon name={badge.icon} className="text-xs" />}
                  {badge.label}
                </span>
              ))}
            </div>

            <Link
              to={ROUTES.doctor(doctor.id)}
              className="block truncate text-headline-sm font-semibold text-on-surface transition-colors hover:text-primary"
            >
              {doctor.name}
            </Link>
            <p className="text-body-md text-on-surface-variant">
              {doctor.role} <span className="font-medium text-on-surface">{doctor.workplace}</span>
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-body-md text-on-surface-variant">
              <div className="flex items-center gap-1 font-semibold text-on-surface">
                <Icon name="star" className="text-lg text-amber-500" filled />
                <span>{doctor.rating}</span>
                <span className="text-label-sm font-normal text-on-surface-variant">
                  ({doctor.reviews} verified reviews)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="medical_services" className="text-base text-outline" />
                <span>{doctor.experience}</span>
              </div>
              <div className="flex items-center gap-1 truncate">
                <Icon name="location_on" className="text-base text-outline" />
                <span className="truncate">{doctor.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-end justify-between gap-2 pt-2 md:flex-col md:items-end md:justify-start md:pt-0">
          <div className="text-left md:text-right">
            <span className="block text-caption uppercase tracking-wider text-on-surface-variant">
              {doctor.slotLabel}
            </span>
            <div
              className={`mt-0.5 inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-label-md font-semibold shadow-sm ${slotClass(
                doctor.slotTone
              )}`}
            >
              {doctor.slotTone === 'tertiary' && (
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
              )}
              {doctor.slotTone === 'primary' ? (
                <Icon name="bolt" className="text-sm text-primary" />
              ) : (
                <Icon name="schedule" className="text-sm" />
              )}
              <span>{doctor.slotText}</span>
              {doctor.slotHint && (
                <span className="text-caption font-normal text-tertiary">{doctor.slotHint}</span>
              )}
              {doctor.slotBadge && (
                <span className="rounded bg-surface-container-lowest px-1.5 py-0.5 text-caption font-semibold text-primary">
                  {doctor.slotBadge}
                </span>
              )}
              {doctor.slotHintBadge && (
                <span className="rounded bg-surface-container-high px-1.5 text-caption font-medium text-on-surface-variant">
                  {doctor.slotHintBadge}
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <span className="text-title font-bold text-on-surface">{doctor.fee}</span>
            <span className="block text-caption text-on-surface-variant">{doctor.feeNote}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl bg-surface-container-low/60 p-4 pt-5 lg:flex-row lg:items-end">
        <div className="flex flex-wrap items-center gap-2">
          <Icon name="event_available" className="text-base text-primary" />
          <span className="text-label-sm font-semibold text-on-surface">{doctor.openingsLabel}</span>
          <div className="flex flex-wrap items-center gap-2">
            {doctor.openings.map((slot) => {
              const active = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-lg px-3 py-1.5 text-label-sm shadow-sm transition-all focus:ring-2 focus:ring-primary ${
                    active
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            to={ROUTES.doctor(doctor.id)}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-surface-container-lowest px-4 py-2 text-label-md text-on-surface shadow-sm transition-all hover:bg-surface-container"
          >
            <Icon name="videocam" className="text-base text-primary" />
            Video Consult
          </Link>
          <Link
            to={ROUTES.doctor(doctor.id)}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-primary px-5 py-2 text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container"
          >
            <Icon name="calendar_month" className="text-base" />
            Book In-Person
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DoctorCard;
