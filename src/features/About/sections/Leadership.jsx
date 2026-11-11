import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LEADERSHIP } from '../data';

function Leadership() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-5 flex flex-col justify-between gap-6" data-aos="fade-up">
          <div>
            <span className="text-label-sm font-semibold uppercase tracking-wider text-primary">
              {LEADERSHIP.eyebrow}
            </span>
            <h2 className="mt-2 max-w-7xl text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
              {LEADERSHIP.title}
            </h2>
          </div>
          <p className="max-w-3xl text-body-md text-on-surface-variant">{LEADERSHIP.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.leaders.map((leader) => (
            <div
              key={leader.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md"
              data-aos="fade-up"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-surface-container">
                <img
                  className="h-full w-full object-cover"
                  src={leader.image}
                  alt={leader.name}
                />
                <div
                  className={`absolute right-3 top-3 rounded-full bg-surface-container-lowest/90 px-2.5 py-1 text-caption font-semibold backdrop-blur-md ${leader.badgeClass}`}
                >
                  {leader.badge}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-title text-on-surface">{leader.name}</h3>
                  <p className="text-label-sm font-semibold text-primary">{leader.credentials}</p>
                  <p className="mt-0.5 text-caption uppercase tracking-wider text-on-surface-variant">
                    {leader.role}
                  </p>
                  <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">
                    {leader.bio}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between pt-4">
                  <span className="text-caption text-secondary">{leader.affiliation}</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
