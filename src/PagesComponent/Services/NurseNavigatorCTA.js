import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';
import { ROUTES, SITE } from '../../constants/siteInfo';

function NurseNavigatorCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
      <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#0181f5] to-[#5db2ff] p-8 text-white shadow-lg lg:flex-row lg:items-center lg:p-12">
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center pr-6 opacity-10">
          <svg fill="none" height="240" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="240">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            <span className="h-2 w-2 animate-ping rounded-full bg-docmed-green-bright" />
            24/7 Triage Helpline
          </span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Unsure Which Specialty You Need?
          </h2>
          <p className="mt-2 text-base text-white/80 md:text-lg">
            Our certified Nurse Navigators will review your symptoms, coordinate urgent referrals,
            and connect you with the appropriate DocMed specialist in minutes.
          </p>
        </div>

        <div className="relative z-10 flex w-full shrink-0 flex-col items-center gap-3 sm:flex-row lg:w-auto">
          <Link
            to={ROUTES.contact}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-docmed-blue no-underline shadow-sm transition-colors hover:bg-docmed-light sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" />
            Chat with Nurse Navigator
          </Link>
          <a
            href={SITE.emergencyPhone.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/15 px-6 py-3.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-white/25 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            {SITE.emergencyPhone.display}
          </a>
        </div>
      </div>
    </section>
  );
}

export default NurseNavigatorCTA;
