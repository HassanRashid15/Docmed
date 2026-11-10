import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ImageIcon } from 'lucide-react';
import { ROUTES } from '../../constants/siteInfo';
import { INSURERS, COST_SERVICES, COST_TIERS } from './data';

function CostEstimator() {
  const [serviceValue, setServiceValue] = useState(COST_SERVICES[1].value);
  const [tierValue, setTierValue] = useState(COST_TIERS[0].value);

  const estimate = useMemo(
    () => Math.round(Number(serviceValue) * Number(tierValue)),
    [serviceValue, tierValue]
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-docmed-blue">
              Insurance & Transparent Billing
            </span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Over 95% of Insured Patients Pay Low or Zero Out-of-Pocket
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              DocMed is an in-network academic clinical provider for all national commercial
              insurers, Medicare, and regional plans. We guarantee upfront price transparency
              without hidden facility fees.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {INSURERS.map((insurer) => (
              <div
                key={insurer.name}
                className="flex flex-col items-center justify-center rounded-lg bg-docmed-light p-4 text-center"
              >
                <span className="text-lg font-bold tracking-tight text-slate-900">{insurer.name}</span>
                <span className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-docmed-green">
                  <Check className="h-3 w-3" /> {insurer.note}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2 text-sm text-slate-600">
            <ImageIcon className="h-5 w-5 shrink-0 text-docmed-blue" />
            <span>
              DocMed complies with the No Surprises Act. Good faith estimates supplied prior to any
              scheduled procedure.
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-md lg:col-span-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Fast Copay & Cost Estimator</h3>
            <span className="rounded-full bg-docmed-light px-2.5 py-1 text-[11px] text-slate-600">
              Interactive
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600" htmlFor="calcService">
                Select Clinical Service
              </label>
              <select
                id="calcService"
                value={serviceValue}
                onChange={(e) => setServiceValue(Number(e.target.value))}
                className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-docmed-blue/30"
              >
                {COST_SERVICES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600" htmlFor="calcInsurance">
                Your Insurance Tier
              </label>
              <select
                id="calcInsurance"
                value={tierValue}
                onChange={(e) => setTierValue(Number(e.target.value))}
                className="w-full rounded-lg bg-docmed-light px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-docmed-blue/30"
              >
                {COST_TIERS.map((t) => (
                  <option key={t.label} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-docmed-light p-5">
              <div>
                <span className="block text-xs text-slate-500">Estimated Out-of-Pocket</span>
                <span className="text-[11px] text-slate-400">
                  Subject to individual deductible status
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-docmed-blue">${estimate}</span>
                <span className="block text-[11px] text-docmed-green">Estimated Copay</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to={ROUTES.contact}
                className="block w-full rounded-lg bg-docmed-blue py-3 text-center text-sm font-semibold text-white no-underline shadow-sm transition-colors hover:bg-docmed-hover"
              >
                Verify My Specific Coverage Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostEstimator;
