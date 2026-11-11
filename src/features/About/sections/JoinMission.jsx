import React from 'react';
import { Link } from 'react-router-dom';
import { JOIN_MISSION } from '../data';

function JoinMission() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-container to-on-primary-fixed-variant p-10 text-on-primary shadow-xl lg:p-16"
          data-aos="fade-up"
        >
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary-fixed/10 blur-3xl" />

          <div className="relative z-10 mb-12 max-w-3xl">
            <span className="rounded-full bg-on-primary/10 px-3 py-1 text-label-sm uppercase tracking-wider text-primary-fixed">
              {JOIN_MISSION.eyebrow}
            </span>
            <h2 className="mt-4 text-display-mobile tracking-tight text-on-primary md:text-display">
              {JOIN_MISSION.title}
            </h2>
            <p className="mt-4 text-body-lg leading-relaxed text-primary-fixed">
              {JOIN_MISSION.description}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {JOIN_MISSION.cards.map((card) => {
              const Icon = card.icon;
              const CtaIcon = card.cta.icon;
              const isPrimary = card.cta.variant === 'primary';

              return (
                <div
                  key={card.title}
                  className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest/10 p-8 backdrop-blur-md"
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-on-primary/20 text-on-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-headline-sm text-on-primary">{card.title}</h3>
                    <p className="text-body-md text-primary-fixed">{card.description}</p>
                  </div>
                  <div className="mt-8">
                    <Link
                      to={card.cta.to}
                      className={
                        isPrimary
                          ? 'inline-flex w-full items-center justify-center gap-2 rounded-lg bg-on-primary px-6 py-3.5 text-label-md text-primary shadow-md transition-colors hover:bg-surface-container-low'
                          : 'inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container-lowest/20 px-6 py-3.5 text-label-md text-on-primary transition-colors hover:bg-surface-container-lowest/30'
                      }
                    >
                      <span>{card.cta.label}</span>
                      <CtaIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinMission;
