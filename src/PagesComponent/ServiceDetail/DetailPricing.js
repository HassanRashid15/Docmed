import React, { useState } from 'react';
import { Shield } from 'lucide-react';

const PROVIDERS = [
  'Blue Cross Blue Shield',
  'Medicare Part B / Advantage',
  'UnitedHealthcare',
  'Aetna',
  'Cigna Healthcare',
  'Humana',
  'Self-Pay / Non-Insured',
];

const SERVICE_TYPES = [
  'Initial Consultation',
  'Echocardiogram Diagnostic',
  'Electrophysiology Study',
  'Cardiac Rehab Session',
];

function DetailPricing({ pricing, networks }) {
  const [provider, setProvider] = useState(PROVIDERS[0]);
  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0]);
  const [estimate, setEstimate] = useState('');

  const handleEstimate = () => {
    setEstimate(
      `Estimated patient responsibility for ${serviceType} with ${provider}: typically $0–$75 after benefits verification.`
    );
  };

  return (
    <section className="w-full bg-docmed-light/50 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-docmed-blue">
            Financial Clarity
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Transparent Coverage & Direct Estimation
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            We honor the federal No Surprises Act with clear upfront estimates. In-network
            coverage applies across all major insurance providers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm lg:col-span-2 lg:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Common Cardiac Procedures • Estimated Cost Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] font-semibold uppercase text-slate-500">
                    <th className="pb-3">Service Description</th>
                    <th className="pb-3">CPT Code</th>
                    <th className="pb-3">In-Network Copay Range</th>
                    <th className="pb-3">Self-Pay Transparent Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row) => (
                    <tr
                      key={row.cpt}
                      className="transition-colors hover:bg-docmed-light/60"
                    >
                      <td className="py-3 text-sm font-medium text-slate-900">
                        {row.service}
                      </td>
                      <td className="py-3 text-[11px] font-medium text-slate-500">
                        {row.cpt}
                      </td>
                      <td className="py-3 text-sm font-semibold text-docmed-green">
                        {row.copay}
                      </td>
                      <td className="py-3 text-sm font-semibold text-slate-900">
                        {row.selfPay}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-docmed-light/70 p-4">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-docmed-blue" />
              <div className="space-y-1">
                <h5 className="text-sm font-semibold text-slate-900">
                  No Surprises Act Protection Guarantee
                </h5>
                <p className="text-[11px] leading-relaxed text-slate-600">
                  You are protected from balance billing. Out-of-network clinicians operating in
                  DocMed facilities cannot bill beyond standard in-network cost-sharing limits
                  for emergency and pre-approved services.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6 rounded-xl bg-white p-6 shadow-sm lg:p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Check Your Insurance</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Instantly verify your coverage tier and specialist copay with our automated
                billing coordinator.
              </p>
              <div className="space-y-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-500">
                    Insurance Provider
                  </label>
                  <select
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full rounded-lg bg-docmed-light/80 px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-docmed-blue/30"
                  >
                    {PROVIDERS.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-500">
                    Service Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full rounded-lg bg-docmed-light/80 px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-docmed-blue/30"
                  >
                    {SERVICE_TYPES.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleEstimate}
                  className="w-full rounded-lg bg-docmed-blue py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-docmed-hover"
                >
                  Estimate Patient Responsibility
                </button>
                {estimate && (
                  <p className="rounded-lg bg-docmed-light/70 p-3 text-xs leading-relaxed text-slate-600">
                    {estimate}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Frequently Accepted Networks
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {networks.map((network) => (
                  <span
                    key={network}
                    className="rounded-full bg-docmed-light px-2.5 py-1 text-[11px] font-medium text-slate-600"
                  >
                    {network}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPricing;
