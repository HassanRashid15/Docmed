import React from 'react';
import { Siren, Phone } from 'lucide-react';
import { SITE } from '../../../constants/siteInfo';

function EmergencyBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-red-600 px-6 py-4 text-white shadow-md lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
            <Siren className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <span className="mb-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider">
              Immediate Clinical Notice
            </span>
            <p className="text-sm leading-snug text-white">
              Experiencing severe chest pain, shortness of breath, or sudden weakness? Call{' '}
              <strong>911</strong> or visit the nearest ER immediately. Do not use web forms for
              critical medical emergencies.
            </p>
          </div>
        </div>
        <a
          href={SITE.emergencyPhone.href}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition-all hover:bg-red-50"
        >
          <Phone className="h-5 w-5 fill-current" />
          Call 24/7 Hotline: {SITE.emergencyPhone.display}
        </a>
      </div>
    </section>
  );
}

export default EmergencyBanner;
