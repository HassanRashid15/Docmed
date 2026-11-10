import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Phone, Clock, Check } from 'lucide-react';
import { ROUTES, SITE } from '../../constants/siteInfo';

function DetailCTA() {
  return (
    <section id="booking-panel" className="w-full bg-white px-6 py-16 lg:px-12">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#0181f5] to-[#5db2ff] p-8 text-white shadow-xl lg:p-12"
        data-aos="fade-up"
      >
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
              <Clock className="h-3.5 w-3.5" />
              Immediate Appointment Coordination
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Prioritize Your Heart Health Today
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-docmed-light">
              Whether you need a proactive preventative screening, a second opinion on
              intervention, or rapid follow-up for chronic arrhythmias, our clinical team is
              ready.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-docmed-light">
              {[
                'In-clinic & Telehealth options',
                'Immediate secure record access',
                'Zero referral required for self-pay',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-docmed-green-bright" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <Link
              to={ROUTES.findDoctors}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-4 text-center text-sm font-semibold text-docmed-blue shadow-md transition-all hover:bg-docmed-light hover:shadow-lg"
            >
              <CalendarDays className="h-5 w-5" />
              Schedule Cardiac Appointment
            </Link>
            <a
              href={SITE.emergencyPhone.href}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/20 py-4 text-center text-sm font-semibold text-white transition-all hover:bg-white hover:text-docmed-blue"
            >
              <Phone className="h-5 w-5" />
              Call Cardiac Triage Desk
            </a>
            <p className="mt-1 text-center text-[11px] text-docmed-light">
              If you are experiencing acute chest pressure or severe shortness of breath,
              please dial 911 immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailCTA;
