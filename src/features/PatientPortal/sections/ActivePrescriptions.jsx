import React from 'react';
import Icon from '../../../components/Icon';
import { PRESCRIPTIONS } from '../data';

function ActivePrescriptions() {
  return (
    <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary-container/15 text-tertiary">
            <Icon name="medication" />
          </span>
          <div>
            <h3 className="font-title text-title text-on-surface">Active Prescriptions</h3>
            <p className="font-caption text-caption text-on-surface-variant">
              Syncing with DocMed Outpatient Pharmacy
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 font-label-md text-label-md font-semibold text-primary hover:underline"
        >
          View All (4)
          <Icon name="arrow_forward" className="text-base" />
        </button>
      </div>

      <div className="mt-1 space-y-3">
        {PRESCRIPTIONS.map((med) => (
          <div
            key={med.id}
            className={`flex flex-col justify-between gap-3 rounded-xl p-4 sm:flex-row sm:items-center ${
              med.alert ? 'bg-error-container/20' : 'bg-surface-container-low'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest ${
                  med.alert ? 'text-error' : 'text-primary'
                }`}
              >
                <Icon name={med.icon} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="font-label-md text-label-md font-semibold text-on-surface">
                    {med.name}
                  </h5>
                  <span
                    className={`rounded-full px-2 py-0.5 font-caption text-caption ${
                      med.tagTone === 'error'
                        ? 'bg-error-container font-semibold text-on-error-container'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {med.tag}
                  </span>
                </div>
                <p className="mt-0.5 font-caption text-caption text-on-surface-variant">
                  {med.directions}
                </p>
                <p
                  className={`mt-1 font-caption text-caption font-semibold ${
                    med.supplyTone === 'error' ? 'text-error' : 'text-tertiary'
                  }`}
                >
                  {med.supply}
                </p>
              </div>
            </div>
            <button
              type="button"
              className={`self-start rounded-lg px-3.5 py-1.5 font-label-md text-label-md transition-all sm:self-center ${
                med.actionTone === 'primary'
                  ? 'bg-primary text-on-primary shadow-sm hover:bg-primary-container'
                  : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
              }`}
            >
              {med.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivePrescriptions;
