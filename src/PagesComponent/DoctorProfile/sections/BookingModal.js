import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../FindDoctors/Icon';
import { ROUTES } from '../../../constants/siteInfo';

function BookingModal({ open, doctor, summary, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-on-surface/50 p-4 backdrop-blur-sm">
      <div className="flex w-full max-w-md scale-100 flex-col items-center rounded-2xl bg-surface-container-lowest p-6 text-center shadow-2xl sm:p-8">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-container/20 text-tertiary">
          <Icon name="check_circle" className="text-4xl" />
        </div>
        <h3 className="text-headline-sm font-bold text-on-surface">Appointment Confirmed!</h3>
        <p className="mb-6 mt-2 text-body-md text-on-surface-variant">
          Your consultation with{' '}
          <span className="font-semibold text-on-surface">{doctor.name}</span> has been reserved and
          synchronized with DocMed health portal.
        </p>

        <div className="mb-6 w-full space-y-2 rounded-xl bg-surface-container-low p-4 text-left">
          <div className="flex justify-between text-label-sm">
            <span className="text-on-surface-variant">Date &amp; Time:</span>
            <span className="font-semibold text-on-surface">
              {summary.date} • {summary.slot}
            </span>
          </div>
          <div className="flex justify-between text-label-sm">
            <span className="text-on-surface-variant">Modality:</span>
            <span className="font-semibold text-on-surface">
              {summary.visitType === 'clinic' ? 'In-Person (Manhattan)' : 'Telehealth HD Video'}
            </span>
          </div>
          <div className="flex justify-between text-label-sm">
            <span className="text-on-surface-variant">Location:</span>
            <span className="font-semibold text-on-surface">{doctor.location.address.split(',')[0]}</span>
          </div>
          <div className="flex justify-between text-label-sm">
            <span className="text-on-surface-variant">Estimated Copay:</span>
            <span className="font-bold text-tertiary">{doctor.booking.copay}</span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Link
            to={ROUTES.patientPortal}
            className="w-full rounded-xl bg-primary py-3 text-center text-label-md font-semibold text-on-primary transition-colors hover:bg-primary-container"
          >
            View in Patient Portal
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl bg-surface-container-low py-2.5 text-label-md text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Dismiss &amp; Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
