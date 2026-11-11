import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, CircleHelp } from 'lucide-react';
import { CLINICAL_TRIALS } from '../data';
import { ROUTES } from '../../../constants/siteInfo';

function ClinicalTrials() {
  return (
    <section className="w-full bg-surface py-20" id="clinical-trials">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6" data-aos="fade-up">
            <span className="text-label-sm font-semibold uppercase tracking-wider text-primary">
              {CLINICAL_TRIALS.eyebrow}
            </span>
            <h2 className="text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
              {CLINICAL_TRIALS.title}
            </h2>
            <p className="text-body-lg text-on-surface-variant">{CLINICAL_TRIALS.description}</p>

            <div className="space-y-4 pt-2">
              {CLINICAL_TRIALS.trials.map((trial) => {
                const Icon = trial.icon;
                return (
                  <div
                    key={trial.title}
                    className="flex items-start gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-sm"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${trial.iconWrap}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-title text-on-surface">{trial.title}</h4>
                        <span
                          className={`rounded-full px-2 py-0.5 text-caption font-semibold ${trial.statusClass}`}
                        >
                          {trial.status}
                        </span>
                      </div>
                      <p className="mt-1 text-body-md text-on-surface-variant">{trial.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#clinical-trials"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary-container"
              >
                <ClipboardList className="h-4 w-4" />
                View All Open Trials
              </a>
              <span className="text-caption text-on-surface-variant">
                IRB Approved &amp; FDA Monitored
              </span>
            </div>
          </div>

          <div className="lg:col-span-6" data-aos="fade-left">
            <div className="rounded-2xl bg-surface-container-low p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h4 className="text-title text-on-surface">{CLINICAL_TRIALS.enrollmentTitle}</h4>
                  <p className="text-caption text-on-surface-variant">
                    {CLINICAL_TRIALS.enrollmentSubtitle}
                  </p>
                </div>
                <span className="text-label-md font-bold text-primary">
                  {CLINICAL_TRIALS.capacityLabel}
                </span>
              </div>

              <div className="space-y-4">
                {CLINICAL_TRIALS.enrollment.map((row) => (
                  <div key={row.label}>
                    <div className="mb-1 flex justify-between text-label-sm">
                      <span className="text-on-surface">{row.label}</span>
                      <span className="font-semibold text-on-surface">{row.percent}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-surface-container">
                      <div
                        className={`h-2 rounded-full ${row.barClass}`}
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-container-lowest p-4">
                <div className="flex items-center gap-3">
                  <CircleHelp className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-label-md text-on-surface">
                      Are you eligible to participate?
                    </div>
                    <div className="text-caption text-on-surface-variant">
                      Speak directly with our trial coordinators
                    </div>
                  </div>
                </div>
                <Link
                  to={ROUTES.contact}
                  className="rounded-lg bg-surface-container-high px-3 py-1.5 text-label-sm text-on-surface transition-colors hover:bg-surface-variant"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalTrials;
