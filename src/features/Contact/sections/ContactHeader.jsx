import React from 'react';
import { ChevronRight } from 'lucide-react';

function ContactHeader() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-10 lg:px-12">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>DocMed Central Hub</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-docmed-blue">Contact & Clinical Support</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Direct Patient Care & Support Hub
          </h1>
          <p className="mt-1 max-w-2xl text-base text-slate-600 md:text-lg">
            Connect seamlessly with triage nurses, clinical coordinators, telehealth technicians,
            and financial navigators.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-docmed-light px-4 py-2.5 text-slate-600">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-docmed-green opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-docmed-green" />
          </div>
          <div className="text-xs">
            <span className="font-semibold text-slate-900">Triage Desk Online:</span> Median Response{' '}
            <strong>18 mins</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;
