import React from 'react';
import { Link } from 'react-router-dom';
import { Siren, ClipboardList, Pill, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ROUTES } from '../../../constants/siteInfo';

const cards = [
  {
    icon: Siren,
    iconWrap: 'bg-red-100 text-red-600',
    badge: (
      <span className="flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-red-500" />
        Wait: ~8 mins
      </span>
    ),
    title: 'Urgent Care & Virtual ER',
    description:
      'Rapid digital triage for acute symptoms, pediatric fevers, minor burns, and immediate prescriptions.',
    linkText: 'Join Online Queue',
    linkTo: ROUTES.contact,
    meta: <span className="text-[11px] font-semibold text-red-600">Triage Available 24/7</span>,
  },
  {
    icon: ClipboardList,
    iconWrap: 'bg-docmed-light text-docmed-blue',
    badge: (
      <span className="rounded-full bg-docmed-light px-2.5 py-1 text-xs font-semibold text-slate-600">
        45 Specialties
      </span>
    ),
    title: 'Find a Specialist',
    description:
      'Browse credentialed department heads, review clinical histories, and book directly without waiting for referrals.',
    linkText: 'Browse Directory',
    linkTo: ROUTES.service,
    meta: <span className="text-[11px] text-slate-500">In-Person & Virtual</span>,
  },
  {
    icon: Pill,
    iconWrap: 'bg-docmed-green-light text-docmed-green',
    badge: (
      <span className="rounded-full bg-docmed-light px-2.5 py-1 text-xs font-semibold text-docmed-green-dark">
        Fast Dispatch
      </span>
    ),
    title: 'Prescription & Lab Services',
    description:
      'Order medication refills delivered to your door and view verified pathology results in your encrypted health vault.',
    linkText: 'Access Health Vault',
    linkTo: ROUTES.contact,
    meta: <span className="text-[11px] font-semibold text-docmed-green">Next-Day Delivery</span>,
  },
];

function EmergencyCards() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-12">
      <SectionHeading
        watermark="SERVICES"
        title="We Provide"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="group flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition-all hover:bg-docmed-light/40"
              data-aos="fade-up"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconWrap}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {card.badge}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6">
                <Link
                  to={card.linkTo}
                  className="flex items-center gap-1 text-sm font-semibold text-docmed-blue group-hover:underline"
                >
                  {card.linkText}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                {card.meta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EmergencyCards;
