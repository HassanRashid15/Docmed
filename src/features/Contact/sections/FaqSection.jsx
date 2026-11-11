import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ROUTES } from '../../../constants/siteInfo';

const faqs = [
  {
    q: 'How quickly do clinicians respond to online inquiries?',
    a: (
      <>
        Inquiries submitted via our secure web intake are triaged by our registered nursing staff
        within <strong>45 to 90 minutes</strong> during standard clinic hours (Monday – Friday, 7:00
        AM – 8:00 PM EST). Outside clinic hours, messages are reviewed on a continuous basis, with
        guaranteed follow-up under 2 hours. If your clinical situation worsens while waiting, call
        our 24/7 hotline directly or seek emergency care.
      </>
    ),
  },
  {
    q: 'Can I request prescription refills through this contact page?',
    a: (
      <>
        For patient safety and federal prescription tracking standards,{' '}
        <strong>refill requests cannot be processed through public contact forms</strong>. Please
        log into the{' '}
        <Link to={ROUTES.patientPortal} className="font-semibold text-docmed-blue hover:underline">
          DocMed Patient Portal
        </Link>{' '}
        and navigate to &apos;My Medications&apos; to dispatch direct automated e-prescriptions to
        your registered pharmacy, or have your pharmacist send an electronic renewal request to
        DocMed Health System.
      </>
    ),
  },
  {
    q: 'How do I send medical records from another hospital system?',
    a: (
      <>
        DocMed is fully integrated with national EHR interoperability networks, including Epic Care
        Everywhere, CommonWell, and Carequality. You can link outside hospital accounts in the
        Patient Portal in one click. Alternatively, external institutions can transmit encrypted
        records directly via HIPAA Fax to <strong>(800) 456-7899</strong> or electronic direct
        address to{' '}
        <code className="rounded bg-docmed-light px-2 py-0.5 font-mono text-sm text-slate-900">
          roi-intake@docmedhealth.direct.org
        </code>
        .
      </>
    ),
  },
  {
    q: 'What should I do if my telehealth video session drops?',
    a: (
      <>
        First, refresh your browser tab or app screen. Your virtual consultation room remains
        reserved for 15 minutes. If reconnecting fails, your clinician will immediately attempt to
        reach you at the secondary phone number provided during check-in. If you experience hardware
        or camera compatibility errors, contact our{' '}
        <a href="tel:8004567892" className="font-semibold text-docmed-blue hover:underline">
          Telehealth Technical Support Desk at (800) 456-7892
        </a>{' '}
        for rapid live triage.
      </>
    ),
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-10 lg:px-12">
      <div className="mb-8 text-center">
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-docmed-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Immediate Answers
        </span>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
        <p className="mt-1 text-base text-slate-600 md:text-lg">
          Clinical intake timelines, digital prescription protocols, and electronic record transfers.
        </p>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div key={faq.q} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-docmed-light"
              >
                <span className="text-lg font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open && (
                <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-600">{faq.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
