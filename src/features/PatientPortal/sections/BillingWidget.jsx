import React from 'react';
import Icon from '../../../components/Icon';
import { BILLING } from '../data';

function BillingWidget() {
  return (
    <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <span className="font-caption text-caption font-semibold uppercase tracking-wider text-on-surface-variant">
            Account &amp; Statements
          </span>
          <h4 className="font-headline-sm text-headline-sm text-on-surface">Outstanding Balance</h4>
          <div className="pt-1 font-display text-display font-bold tracking-tight text-tertiary">
            {BILLING.balance}
          </div>
          <p className="font-caption text-caption text-on-surface-variant">{BILLING.note}</p>
        </div>
        <div className="rounded-2xl bg-tertiary-container/15 p-3 text-tertiary">
          <Icon name="check_circle" className="text-3xl" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between pt-4">
        <div className="flex items-center gap-2 font-caption text-caption text-on-surface">
          <Icon name="description" className="text-lg text-primary" />
          <span>{BILLING.lastStatement}</span>
        </div>
        <button
          type="button"
          className="font-label-md text-label-md font-semibold text-primary hover:underline"
        >
          History
        </button>
      </div>
    </div>
  );
}

export default BillingWidget;
