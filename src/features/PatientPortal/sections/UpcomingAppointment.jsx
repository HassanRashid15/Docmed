import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import { ROUTES } from '../../../constants/siteInfo';
import { UPCOMING_APPOINTMENT as appt } from '../data';

function UpcomingAppointment() {
  return (
    <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon name="event" />
          </span>
          <div>
            <span className="font-caption text-caption font-semibold uppercase tracking-wider text-on-surface-variant">
              Upcoming Appointment
            </span>
            <h3 className="font-title text-title text-on-surface">{appt.title}</h3>
          </div>
        </div>
        <span className="rounded-full bg-primary-fixed px-3 py-1 font-label-sm text-label-sm font-semibold text-on-primary-fixed">
          {appt.badge}
        </span>
      </div>

      <div className="mt-2 space-y-4 rounded-xl bg-surface-container-low p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3.5">
            <img
              src={appt.doctorImage}
              alt={appt.doctorName}
              className="h-14 w-14 rounded-full object-cover shadow-sm"
            />
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">{appt.doctorName}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{appt.doctorRole}</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-primary sm:justify-end">
              <Icon name="calendar_month" className="text-lg" />
              {appt.when}
            </div>
            <span className="font-caption text-caption text-on-surface-variant">{appt.duration}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
          <div className="flex items-start gap-2.5 rounded-lg bg-surface-container-lowest p-3">
            <Icon name="apartment" className="mt-0.5 text-xl text-primary" />
            <div>
              <div className="font-label-sm text-label-sm font-semibold text-on-surface">
                {appt.visitType}
              </div>
              <div className="font-caption text-caption text-on-surface-variant">{appt.location}</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg bg-surface-container-lowest p-3">
            <Icon name="info" className="mt-0.5 text-xl text-secondary" />
            <div>
              <div className="font-label-sm text-label-sm font-semibold text-on-surface">
                {appt.prepTitle}
              </div>
              <div className="font-caption text-caption text-on-surface-variant">{appt.prepNote}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 font-label-md text-label-md text-on-primary transition-all hover:bg-primary-container"
          >
            <Icon name="assignment_turned_in" className="text-base" />
            Complete Pre-Check-in
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-surface-container-high px-3.5 py-2 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-variant"
          >
            <Icon name="edit_calendar" className="text-base" />
            Add to Calendar
          </button>
          <Link
            to={ROUTES.doctor(appt.doctorSlug)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-surface-container-high px-3.5 py-2 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-variant"
          >
            <Icon name="more_horiz" className="text-base" />
            Reschedule / Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingAppointment;
