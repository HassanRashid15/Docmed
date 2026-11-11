import React, { useState } from 'react';
import {
  Shield,
  User,
  Phone,
  Mail,
  Hospital,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Send,
  BadgeCheck,
} from 'lucide-react';

const ROLES = [
  { value: 'patient', label: 'Patient' },
  { value: 'physician', label: 'Referring Doctor' },
  { value: 'family', label: 'Family Member' },
  { value: 'billing', label: 'Billing / Insurer' },
];

const DEPARTMENTS = [
  { value: 'cardiology', label: 'Cardiovascular Institute' },
  { value: 'pediatrics', label: 'Pediatrics & Adolescent Health' },
  { value: 'internal_med', label: 'General Internal Medicine' },
  { value: 'neurology', label: 'Neurology & Complex Care' },
  { value: 'billing', label: 'Patient Billing & Insurance Claims' },
  { value: 'records', label: 'Health Informatics & EHR Records' },
  { value: 'tech_support', label: 'Telehealth Virtual Platform Support' },
];

const CHANNELS = [
  { value: 'phone', label: 'Phone Call' },
  { value: 'email', label: 'Email Message' },
  { value: 'portal', label: 'MyDocMed Patient Portal Inbox' },
];

const initialForm = {
  role: 'patient',
  fullName: '',
  phone: '',
  email: '',
  department: '',
  channel: 'phone',
  message: '',
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="relative rounded-xl bg-white p-6 shadow-sm sm:p-8">
      <div className="-mx-6 -mt-6 mb-6 flex items-center justify-between rounded-t-xl bg-docmed-light p-6 sm:-mx-8 sm:-mt-8 sm:p-8">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-docmed-blue">
            <Shield className="h-4 w-4 fill-docmed-blue text-white" />
            Encrypted 256-Bit SSL Transmission
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Secure Patient Inquiry & Intake</h2>
          <p className="text-sm text-slate-600">
            Non-emergency appointment requests, referral submissions, and clinical coordination.
          </p>
        </div>
        <span className="hidden items-center rounded-full bg-docmed-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-docmed-blue sm:inline-flex">
          HIPAA Verified
        </span>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2.5 block text-xs font-medium text-slate-600">
            I am contacting DocMed as a: <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {ROLES.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => update('role', role.value)}
                className={`rounded-lg p-3 text-center text-xs font-medium transition-colors ${
                  form.role === role.value
                    ? 'bg-docmed-blue text-white shadow-sm'
                    : 'bg-docmed-light text-slate-600 hover:bg-docmed-blue/10'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600" htmlFor="full_name">
              Full Legal Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
              <input
                id="full_name"
                required
                value={form.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                placeholder="e.g. Eleanor Vance"
                className="w-full rounded-lg bg-docmed-light py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600" htmlFor="contact_phone">
              Phone Number (Mobile preferred) <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
              <input
                id="contact_phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="(555) 234-5678"
                className="w-full rounded-lg bg-docmed-light py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600" htmlFor="contact_email">
              Email Address <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
              <input
                id="contact_email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="eleanor.vance@domain.com"
                className="w-full rounded-lg bg-docmed-light py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600" htmlFor="department_select">
              Clinical Department of Interest <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Hospital className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
              <select
                id="department_select"
                required
                value={form.department}
                onChange={(e) => update('department', e.target.value)}
                className="w-full appearance-none rounded-lg bg-docmed-light py-2.5 pl-10 pr-8 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
              >
                <option value="" disabled>
                  Select department...
                </option>
                {DEPARTMENTS.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-500" />
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-slate-600">Preferred Contact Channel</label>
          <div className="flex flex-wrap gap-4">
            {CHANNELS.map((ch) => (
              <label key={ch.value} className="flex cursor-pointer items-center gap-2 text-sm text-slate-900">
                <input
                  type="radio"
                  name="pref_channel"
                  value={ch.value}
                  checked={form.channel === ch.value}
                  onChange={() => update('channel', ch.value)}
                  className="h-4 w-4 accent-docmed-blue"
                />
                {ch.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="block text-xs font-medium text-slate-600" htmlFor="clinical_message">
              Nature of Clinical Inquiry or Scheduling Request <span className="text-red-600">*</span>
            </label>
            <span className="text-[11px] text-slate-500">Do not disclose credit cards or SSN</span>
          </div>
          <textarea
            id="clinical_message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Briefly detail symptoms, primary questions, preferred consultation days, or referring physician details..."
            className="w-full rounded-lg bg-docmed-light p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue"
          />
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-docmed-light p-3.5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-docmed-blue" />
          <p className="text-[11px] leading-relaxed text-slate-600">
            By submitting this secure message, you authorize DocMed clinical coordinators to review
            your submission in compliance with federal HIPAA privacy regulations. Transmission is
            routed directly to licensed medical support personnel.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
          <div className="flex items-center gap-2 text-xs font-medium text-docmed-green">
            <CheckCircle2 className="h-4 w-4" />
            Average clinician callback: 45-90 min
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-docmed-blue px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-docmed-hover active:scale-95 disabled:opacity-70 sm:w-auto"
          >
            {loading ? 'Sending...' : 'Send Secure Inquiry'}
            <Send className="h-4 w-4" />
          </button>
        </div>

        {submitted && (
          <div className="flex items-center gap-3 rounded-lg bg-docmed-green-soft p-4 text-docmed-green-ink">
            <BadgeCheck className="h-6 w-6 shrink-0" />
            <div>
              <p className="text-sm font-semibold">Inquiry successfully queued in triage system.</p>
              <p className="text-sm opacity-90">
                Tracking Reference #DM-9482. A nurse navigator will reach out shortly.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
