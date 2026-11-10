import React from 'react';
import {
  Network,
  BriefcaseMedical,
  Video,
  Receipt,
  FolderOpen,
  Phone,
  Wifi,
  Mail,
  Download,
} from 'lucide-react';
import { SITE } from '../../constants/siteInfo';

const desks = [
  {
    icon: BriefcaseMedical,
    iconWrap: 'bg-docmed-green-soft text-docmed-green-dark',
    title: '24/7 Nurse Triage & Concierge',
    subtitle: 'Board-certified registered nurses available non-stop',
    badge: <span className="rounded-full bg-docmed-green-light px-2 py-0.5 text-[11px] font-semibold text-docmed-green-dark">Live Now</span>,
    label: 'Direct Line',
    value: '(800) 456-7891',
    href: 'tel:8004567891',
    action: (
      <a
        href="tel:8004567891"
        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition-colors hover:bg-docmed-light"
      >
        <Phone className="h-3.5 w-3.5 text-docmed-green" />
        Speak to RN
      </a>
    ),
  },
  {
    icon: Video,
    iconWrap: 'bg-docmed-light text-docmed-blue',
    title: 'Telehealth Connection Support',
    subtitle: 'Video diagnostic, camera/mic & browser setup',
    badge: <span className="rounded-full bg-docmed-blue/10 px-2 py-0.5 text-[11px] text-docmed-blue">Wait: 2m</span>,
    label: 'Helpdesk Toll-Free',
    value: '(800) 456-7892',
    href: 'tel:8004567892',
    action: (
      <button
        type="button"
        onClick={() =>
          alert('Initiating automated 30-second camera, microphone, and bandwidth diagnostic check...')
        }
        className="inline-flex items-center gap-1.5 rounded-lg bg-docmed-blue px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-docmed-hover"
      >
        <Wifi className="h-3.5 w-3.5" />
        Run Video Diagnostic
      </button>
    ),
  },
  {
    icon: Receipt,
    iconWrap: 'bg-docmed-blue/10 text-docmed-blue',
    title: 'Billing, Claims & Insurance',
    subtitle: 'Copays, pre-authorizations & statements',
    badge: <span className="text-[11px] text-slate-500">8am - 6pm EST</span>,
    label: 'Patient Accounts Desk',
    value: 'billing@docmedhealth.org',
    href: null,
    action: (
      <a
        href="mailto:billing@docmedhealth.org"
        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition-colors hover:bg-docmed-light"
      >
        <Mail className="h-3.5 w-3.5 text-docmed-blue" />
        Inquire
      </a>
    ),
  },
  {
    icon: FolderOpen,
    iconWrap: 'bg-slate-100 text-slate-700',
    title: 'Medical Records & ROI Office',
    subtitle: 'Hospital transfers, lab releases & Epic records',
    badge: <span className="text-[11px] text-slate-500">Mon - Fri</span>,
    label: 'Secure Fax Transfer',
    value: '(800) 456-7899',
    href: null,
    action: (
      <a
        href="#medical-records-roi"
        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition-colors hover:bg-docmed-light"
      >
        <Download className="h-3.5 w-3.5 text-slate-500" />
        Release Form
      </a>
    ),
  },
];

function HelpDesks() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl bg-gradient-to-r from-[#0181f5] to-[#5db2ff] p-5 text-white shadow-sm">
        <div className="mb-2 flex items-center gap-3">
          <Network className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Direct Specialized Desks</h3>
        </div>
        <p className="text-sm text-white/85">
          Skip general intake queues by routing directly to dedicated DocMed clinical, technical, or
          financial coordinators. Emergency: {SITE.emergencyPhone.display}
        </p>
      </div>

      {desks.map((desk) => {
        const Icon = desk.icon;
        return (
          <div
            key={desk.title}
            className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${desk.iconWrap}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">{desk.title}</h4>
                  <p className="text-[11px] text-slate-500">{desk.subtitle}</p>
                </div>
              </div>
              {desk.badge}
            </div>
            <div className="-mx-5 -mb-5 mt-4 flex items-center justify-between rounded-b-xl bg-docmed-light px-5 py-3 pt-3">
              <div>
                <span className="block text-[11px] text-slate-500">{desk.label}</span>
                {desk.href ? (
                  <a href={desk.href} className="text-sm font-semibold text-docmed-blue hover:underline">
                    {desk.value}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-slate-900">{desk.value}</span>
                )}
              </div>
              {desk.action}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HelpDesks;
