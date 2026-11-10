import React from 'react';
import Icon from '../../FindDoctors/Icon';
import { LAB_REPORTS } from '../data';

function LabReports() {
  return (
    <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-high text-on-surface">
            <Icon name="clinical_notes" />
          </span>
          <div>
            <h3 className="font-title text-title text-on-surface">Recent Lab Reports</h3>
            <p className="font-caption text-caption text-on-surface-variant">
              Diagnostic Pathology Services
            </p>
          </div>
        </div>
        <button
          type="button"
          className="font-label-md text-label-md font-semibold text-primary hover:underline"
        >
          All Labs
        </button>
      </div>

      <div className="mt-1 space-y-3">
        {LAB_REPORTS.map((lab) => (
          <div
            key={lab.id}
            className={`space-y-2 rounded-xl bg-surface-container-low p-4 ${
              lab.note ? '' : lab.stats ? '' : 'space-y-1'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-label-md text-label-md font-semibold text-on-surface">
                  {lab.title}
                </h4>
                <p className="font-caption text-caption text-on-surface-variant">{lab.meta}</p>
              </div>
              <span className="rounded-full bg-tertiary-container/15 px-2 py-0.5 font-caption text-caption font-semibold text-tertiary">
                {lab.status}
              </span>
            </div>

            {lab.note && (
              <p className="rounded-lg bg-surface-container-lowest p-2 font-caption text-caption text-on-surface-variant">
                <strong className="font-semibold text-on-surface">{lab.notePrefix}</strong> "
                {lab.note}
              </p>
            )}

            {lab.stats && (
              <div className="flex items-center justify-between font-caption text-caption text-on-surface-variant">
                <span>{lab.stats[0]}</span>
                <span>{lab.stats[1]}</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <span
                className={`font-caption text-caption ${
                  lab.footerTone === 'tertiary'
                    ? 'flex items-center gap-1 font-medium text-tertiary'
                    : 'text-on-surface-variant'
                }`}
              >
                {lab.footerIcon && <Icon name={lab.footerIcon} className="text-sm" />}
                {lab.footer}
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container"
              >
                <Icon name={lab.actionIcon} className="text-base" />
                {lab.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabReports;
