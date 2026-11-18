import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
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

function DoctorCard({ doctor, layout = 'list' }) {
  const [selectedSlot, setSelectedSlot] = useState(doctor.selectedOpening);
  const isGrid = layout === 'grid';

  return (
    <article
      className={`rounded-2xl bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-md ${
        isGrid ? 'flex h-full flex-col p-0' : 'p-6 lg:p-7'
      }`}
    >
      <div
        className={`flex justify-between gap-6 ${
          isGrid ? 'flex-col' : 'flex-col md:flex-row md:items-start'
        }`}
      >
        <div className={`flex min-w-0 flex-1 items-start ${isGrid ? 'flex-col gap-3' : 'gap-4 sm:gap-5'}`}>
          <div className={`relative shrink-0 ${isGrid ? 'w-full' : ''}`}>
            <img
              src={doctor.image}
              alt={doctor.imageAlt}
              className={`rounded-2xl object-cover shadow-sm ${
                isGrid ? 'h-40 w-full' : 'h-20 w-20 sm:h-24 sm:w-24'
              }`}
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
              {!isGrid &&
                doctor.badges.map((badge) => (
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
            <p className={`text-body-md text-on-surface-variant ${isGrid ? 'line-clamp-2' : ''}`}>
              {doctor.role} <span className="font-medium text-on-surface">{doctor.workplace}</span>
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-body-md text-on-surface-variant">
              <div className="flex items-center gap-1 font-semibold text-on-surface">
                <Icon name="star" className="text-lg text-amber-500" filled />
                <span>{doctor.rating}</span>
                {!isGrid && (
                  <span className="text-label-sm font-normal text-on-surface-variant">
                    ({doctor.reviews} verified reviews)
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Icon name="medical_services" className="text-base text-outline" />
                <span>{doctor.experience}</span>
              </div>
              {!isGrid && (
                <div className="flex items-center gap-1 truncate">
                  <Icon name="location_on" className="text-base text-outline" />
                  <span className="truncate">{doctor.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`flex shrink-0 gap-2 ${
            isGrid
              ? 'items-center justify-between'
              : 'items-end justify-between pt-2 md:flex-col md:items-end md:justify-start md:pt-0'
          }`}
        >
          <div className={isGrid ? 'text-left' : 'text-left md:text-right'}>
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
              <span className={isGrid ? 'truncate' : ''}>{doctor.slotText}</span>
              {!isGrid && doctor.slotHint && (
                <span className="text-caption font-normal text-tertiary">{doctor.slotHint}</span>
              )}
              {!isGrid && doctor.slotBadge && (
                <span className="rounded bg-surface-container-lowest px-1.5 py-0.5 text-caption font-semibold text-primary">
                  {doctor.slotBadge}
                </span>
              )}
              {!isGrid && doctor.slotHintBadge && (
                <span className="rounded bg-surface-container-high px-1.5 text-caption font-medium text-on-surface-variant">
                  {doctor.slotHintBadge}
                </span>
              )}
            </div>
          </div>
          <div className={isGrid ? 'text-right' : 'text-right'}>
            <span className="text-title font-bold text-on-surface">{doctor.fee}</span>
            {!isGrid && (
              <span className="block text-caption text-on-surface-variant">{doctor.feeNote}</span>
            )}
          </div>
        </div>
      </div>

      <div
        className={`mt-auto flex gap-4 rounded-xl bg-surface-container-low/60 p-4 pt-5 ${
          isGrid ? 'mt-5 flex-col' : 'mt-6 flex-col justify-between lg:flex-row lg:items-end'
        }`}
      >
        {!isGrid && (
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
        )}

        <div className={`flex items-center gap-2.5 ${isGrid ? 'w-full' : ''}`}>
          <Link
            to={ROUTES.doctor(doctor.id)}
            className={`flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-surface-container-lowest px-4 py-2 text-label-md text-on-surface shadow-sm transition-all hover:bg-surface-container ${
              isGrid ? 'flex-1' : ''
            }`}
          >
            <Icon name="videocam" className="text-base text-primary" />
            {isGrid ? 'Video' : 'Video Consult'}
          </Link>
          <Link
            to={ROUTES.doctor(doctor.id)}
            className={`flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-primary px-5 py-2 text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container ${
              isGrid ? 'flex-1' : ''
            }`}
          >
            <Icon name="calendar_month" className="text-base" />
            {isGrid ? 'Book' : 'Book In-Person'}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DoctorCard;
