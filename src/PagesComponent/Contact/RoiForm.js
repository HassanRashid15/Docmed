import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  Send,
  IdCard,
  FileText,
  Archive,
  PenLine,
} from 'lucide-react';

const RECORD_TYPES = [
  { value: 'complete', label: 'Complete Medical Record' },
  { value: 'imaging', label: 'Diagnostic Imaging (X-Ray, MRI, CT)' },
  { value: 'cardio', label: 'Cardiology / ECG & Echo Reports' },
  { value: 'labs', label: 'Laboratory & Pathology Panels' },
  { value: 'immunizations', label: 'Immunization & Vaccine History' },
  { value: 'progress_notes', label: 'Clinical Progress Notes & Discharge' },
];

const DESTINATIONS = [
  { value: 'self', label: 'Send to Me (DocMed Secure Portal & Email)' },
  { value: 'provider', label: 'Send to Another Healthcare Provider / Facility' },
  { value: 'legal', label: 'Legal Representative or Insurance' },
];

const initialRoi = {
  patientName: '',
  dob: '',
  mrn: '',
  phone: '',
  email: '',
  scopes: ['complete'],
  dateStart: '',
  dateEnd: '',
  destination: 'self',
  recipientOrg: '',
  recipientFax: '',
  purpose: 'continuation',
  consent: false,
  signature: '',
  sigDate: '',
};

function RoiForm() {
  const [form, setForm] = useState(initialRoi);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleScope = (value) => {
    setForm((prev) => ({
      ...prev,
      scopes: prev.scopes.includes(value)
        ? prev.scopes.filter((s) => s !== value)
        : [...prev.scopes, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    setForm(initialRoi);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-10 lg:px-12" id="medical-records-roi">
      <div className="overflow-hidden rounded-2xl border border-docmed-light bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-docmed-light bg-docmed-light p-6 sm:p-8 md:flex-row md:items-center">
          <div>
            <div className="mb-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-docmed-blue">
              <ShieldCheck className="h-4 w-4 fill-docmed-blue text-white" />
              HIPAA Compliant ROI Protocol
              <span className="ml-1 rounded-full bg-docmed-blue/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-docmed-blue">
                Confidential
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">
              HIPAA Authorization & Medical Records Release (ROI)
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Submit an electronic authorization for medical records release under HIPAA Privacy Rule
              45 CFR § 164.508. Standard processing turnaround is 2-3 business days.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-xl border border-docmed-light bg-white px-4 py-2.5">
            <Lock className="h-6 w-6 text-docmed-green" />
            <div className="text-left">
              <div className="text-xs font-semibold text-slate-900">Processing Time: 2-3 Days</div>
              <div className="text-[11px] text-slate-500">Direct electronic transmission</div>
            </div>
          </div>
        </div>

        <form className="space-y-8 p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-docmed-light pb-2">
              <IdCard className="h-5 w-5 text-docmed-blue" />
              <h3 className="text-lg font-semibold text-slate-900">1. Patient Identification</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Full Legal Name <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  value={form.patientName}
                  onChange={(e) => update('patientName', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                  placeholder="Eleanor Vance"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Date of Birth <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={form.dob}
                  onChange={(e) => update('dob', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  MRN or Patient ID <span className="text-[11px] text-slate-500">(optional)</span>
                </label>
                <input
                  value={form.mrn}
                  onChange={(e) => update('mrn', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                  placeholder="DM-09824"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                  placeholder="(555) 234-5678"
                />
              </div>
              <div className="sm:col-span-2 lg:col-span-4">
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                  placeholder="eleanor.vance@example.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-docmed-light pb-2">
              <FileText className="h-5 w-5 text-docmed-blue" />
              <h3 className="text-lg font-semibold text-slate-900">2. Scope of Records Requested</h3>
            </div>
            <p className="text-[11px] text-slate-500">Select all clinical documentation needed for this release:</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {RECORD_TYPES.map((item) => (
                <label
                  key={item.value}
                  className="flex cursor-pointer items-center gap-3 rounded-lg bg-docmed-light p-3 transition-colors hover:bg-docmed-blue/10"
                >
                  <input
                    type="checkbox"
                    checked={form.scopes.includes(item.value)}
                    onChange={() => toggleScope(item.value)}
                    className="h-4 w-4 rounded accent-docmed-blue"
                  />
                  <span className="text-sm text-slate-900">{item.label}</span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Service Date Range From <span className="text-[11px] text-slate-500">(leave blank for all)</span>
                </label>
                <input
                  type="date"
                  value={form.dateStart}
                  onChange={(e) => update('dateStart', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">Service Date Range To</label>
                <input
                  type="date"
                  value={form.dateEnd}
                  onChange={(e) => update('dateEnd', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-docmed-light pb-2">
              <Archive className="h-5 w-5 text-docmed-blue" />
              <h3 className="text-lg font-semibold text-slate-900">3. Delivery Destination & Purpose</h3>
            </div>
            <div className="space-y-3">
              <label className="block text-xs font-medium text-slate-600">
                Where should records be sent? <span className="text-red-600">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {DESTINATIONS.map((d) => (
                  <label key={d.value} className="flex cursor-pointer items-center gap-2 text-sm text-slate-900">
                    <input
                      type="radio"
                      name="delivery_destination"
                      checked={form.destination === d.value}
                      onChange={() => update('destination', d.value)}
                      className="h-4 w-4 accent-docmed-blue"
                    />
                    {d.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Recipient Facility / Physician Name
                </label>
                <input
                  value={form.recipientOrg}
                  onChange={(e) => update('recipientOrg', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                  placeholder="e.g. New York General Hospital"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Recipient Secure Fax / Direct EHR Address
                </label>
                <input
                  value={form.recipientFax}
                  onChange={(e) => update('recipientFax', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                  placeholder="(212) 555-0199 or ehr@direct.org"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Purpose of Disclosure <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  value={form.purpose}
                  onChange={(e) => update('purpose', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                >
                  <option value="continuation">Continuing Medical Care & Referral</option>
                  <option value="personal">Personal Records & Patient Copy</option>
                  <option value="insurance">Insurance / Billing Reimbursement</option>
                  <option value="legal">Legal or Disability Representation</option>
                  <option value="other">Other Qualified HIPAA Purpose</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-docmed-light pb-2">
              <PenLine className="h-5 w-5 text-docmed-blue" />
              <h3 className="text-lg font-semibold text-slate-900">
                4. Electronic HIPAA Authorization & Signature
              </h3>
            </div>
            <div className="space-y-3 rounded-xl bg-docmed-light p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded accent-docmed-blue"
                />
                <span className="text-[11px] leading-relaxed text-slate-600">
                  I hereby authorize DocMed Health System to release my Protected Health Information
                  (PHI) in accordance with the specifications above. I understand that I have the
                  right to revoke this authorization in writing at any time. I understand that
                  treatment, payment, or enrollment cannot be conditioned on signing this
                  authorization except as allowed by law.
                </span>
              </label>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Typed Legal Electronic Signature (Patient or Legal Representative){' '}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  value={form.signature}
                  onChange={(e) => update('signature', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 font-mono text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                  placeholder="/s/ Eleanor Vance"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Signature Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={form.sigDate}
                  onChange={(e) => update('sigDate', e.target.value)}
                  className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-docmed-light pt-4 sm:flex-row">
            <div className="flex items-center gap-2 text-xs font-medium text-docmed-green">
              <Lock className="h-4 w-4" />
              256-Bit TLS End-to-End Encryption • Fast-Track ROI Triage
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-docmed-blue px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-docmed-hover active:scale-95 disabled:opacity-70 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {loading ? 'Submitting...' : 'Submit ROI Request (HIPAA Encrypted)'}
            </button>
          </div>

          {submitted && (
            <div className="flex items-center gap-3 rounded-xl bg-docmed-green-soft p-4 text-docmed-green-ink">
              <BadgeCheck className="h-6 w-6 shrink-0" />
              <div>
                <p className="text-sm font-semibold">
                  Medical Records Release (ROI) Request Submitted Successfully.
                </p>
                <p className="text-sm opacity-90">
                  Tracking Confirmation #ROI-78219. Our Health Informatics Department will verify
                  credentials and dispatch records within 2-3 business days.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default RoiForm;
