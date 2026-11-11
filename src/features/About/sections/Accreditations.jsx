import React from 'react';
import { ACCREDITATIONS } from '../data';

function Accreditations() {
  return (
    <section className="w-full bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-5 max-w-7xl text-center" data-aos="fade-up">
          <span className="text-label-sm font-semibold uppercase tracking-wider text-primary">
            {ACCREDITATIONS.eyebrow}
          </span>
          <h2 className="mt-1 text-headline-md text-on-surface">{ACCREDITATIONS.title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {ACCREDITATIONS.items.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-6 text-center shadow-sm"
                data-aos="fade-up"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${badge.iconWrap}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h4 className="text-title text-on-surface">{badge.title}</h4>
                <p className="mt-1 text-caption text-on-surface-variant">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Accreditations;
