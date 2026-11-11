import React from 'react';
import Icon from '../../../components/Icon';
import { CARE_PLAN } from '../data';

function CarePlan() {
  return (
    <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-on-primary-fixed">
            <Icon name="monitoring" />
          </span>
          <div>
            <h3 className="font-title text-title text-on-surface">{CARE_PLAN.title}</h3>
            <p className="font-caption text-caption text-on-surface-variant">{CARE_PLAN.subtitle}</p>
          </div>
        </div>
        <span className="rounded-full bg-tertiary-container/15 px-3 py-1 font-label-sm text-label-sm font-semibold text-tertiary">
          {CARE_PLAN.phaseBadge}
        </span>
      </div>

      <div className="space-y-4 pt-1">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-label-md text-label-md font-semibold">Overall Plan Completion</span>
          <span className="font-label-md text-label-md font-bold text-primary">
            {CARE_PLAN.completion}%
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-high">
          <div
            className="h-3 rounded-full bg-primary transition-all duration-500"
            style={{ width: `${CARE_PLAN.completion}%` }}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-4">
          {CARE_PLAN.phases.map((phase) => {
            const isActive = phase.state === 'active';
            const isDone = phase.state === 'done';
            const isLocked = phase.state === 'locked';

            return (
              <div
                key={phase.id}
                className={`space-y-1 rounded-xl p-3 ${
                  isActive
                    ? 'bg-primary/10'
                    : isLocked
                    ? 'bg-surface-container-low opacity-60'
                    : 'bg-surface-container-low'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-caption text-caption font-semibold ${
                      isActive
                        ? 'text-primary'
                        : isDone
                        ? 'text-tertiary'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {phase.label}
                  </span>
                  {isDone && <Icon name="check_circle" className="text-sm text-tertiary" />}
                  {isActive && <span className="h-2 w-2 animate-ping rounded-full bg-primary" />}
                  {isLocked && <Icon name="lock" className="text-sm text-on-surface-variant" />}
                </div>
                <div
                  className={`font-label-sm text-label-sm font-semibold ${
                    isActive ? 'text-primary' : 'text-on-surface'
                  }`}
                >
                  {phase.title}
                </div>
                <div className="font-caption text-caption text-on-surface-variant">{phase.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CarePlan;
