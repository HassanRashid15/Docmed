import React from 'react';
import Icon from '../../../components/Icon';
import { VITALS } from '../data';

const iconWrap = {
  primary: 'bg-primary/10 text-primary',
  error: 'bg-error-container text-error',
  tertiary: 'bg-tertiary-container/20 text-tertiary',
  secondary: 'bg-secondary-container text-on-secondary-container',
};

const statusWrap = {
  tertiary: 'bg-tertiary-container/15 text-tertiary',
  primary: 'bg-primary-fixed text-on-primary-fixed',
};

function Sparkline({ type }) {
  if (type === 'bp') {
    return (
      <svg className="h-full w-full text-primary" fill="none" viewBox="0 0 112 28">
        <path
          d="M2 18 C15 22, 25 10, 40 14 C55 18, 65 6, 80 12 C95 18, 102 8, 110 9"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <circle cx="110" cy="9" fill="currentColor" r="3" />
      </svg>
    );
  }

  if (type === 'pulse') {
    return (
      <svg className="h-full w-full text-error" fill="none" viewBox="0 0 112 28">
        <path
          d="M2 16 L20 16 L28 4 L34 24 L42 12 L48 18 L55 16 L70 16 L76 7 L82 22 L88 16 L110 16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        />
      </svg>
    );
  }

  return null;
}

function VitalsMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {VITALS.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-5 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`rounded-xl p-2 ${iconWrap[item.iconTone]}`}>
                <Icon name={item.icon} className="text-xl" />
              </div>
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                {item.label}
              </span>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 font-caption text-caption font-semibold ${statusWrap[item.statusTone]}`}
            >
              {item.status}
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-display-mobile text-display-mobile font-bold text-on-surface">
              {item.value}
            </span>
            <span className="font-caption text-caption text-on-surface-variant">{item.unit}</span>
          </div>

          {item.spark && (
            <div className="mt-3 flex items-center justify-between">
              <div className="h-7 w-28">
                <Sparkline type={item.spark} />
              </div>
              <span className="text-right font-caption text-caption text-on-surface-variant">
                {item.meta}
              </span>
            </div>
          )}

          {item.progress != null && (
            <div className="mt-4 flex items-center gap-2">
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
                <div
                  className="h-2 rounded-full bg-tertiary"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <span className="font-caption text-caption font-medium text-on-surface-variant">
                {item.meta}
              </span>
            </div>
          )}

          {item.note && (
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-caption text-caption font-medium text-primary">
                <Icon name="check_circle" className="text-base" />
                {item.note}
              </div>
              <span className="font-caption text-caption text-on-surface-variant">{item.meta}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default VitalsMetrics;
