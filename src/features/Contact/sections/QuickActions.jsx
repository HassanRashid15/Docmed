import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldPlus } from 'lucide-react';
import { ROUTES, SITE } from '../../../constants/siteInfo';

function QuickActions() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-12">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-docmed-light p-6 sm:p-8 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-docmed-blue text-white shadow-sm">
            <ShieldPlus className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Need to speak with a physician right now?
            </h3>
            <p className="text-sm text-slate-600">
              Access same-day on-demand telehealth visits with zero commute.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Link
            to={ROUTES.findDoctors}
            className="rounded-lg bg-docmed-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-docmed-hover"
          >
            Launch Virtual Waiting Room
          </Link>
          <a
            href={SITE.emergencyPhone.href}
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-docmed-blue/10"
          >
            Call Nurse Navigator
          </a>
        </div>
      </div>
    </section>
  );
}

export default QuickActions;
