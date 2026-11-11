import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseMedical, FileUp, ShieldCheck } from 'lucide-react';
import { HERO } from '../data';

function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-container-low/40 via-surface/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1.5 text-label-sm uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-tertiary" />
              {HERO.eyebrow}
            </div>

            <h1 className="text-display-mobile tracking-tight text-on-surface md:text-display">
              {HERO.titleBefore}{' '}
              <span className="text-primary">{HERO.titleHighlight}</span>
              {HERO.titleAfter}
            </h1>

            <p className="max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
              {HERO.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={HERO.primaryCta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-label-md text-on-primary shadow-md transition-all hover:bg-primary-container"
              >
                <BriefcaseMedical className="h-5 w-5" />
                {HERO.primaryCta.label}
              </Link>
              <a
                href={HERO.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-surface-container px-6 py-3 text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
              >
                <FileUp className="h-5 w-5" />
                {HERO.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5" data-aos="fade-left" data-aos-delay="150">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-container shadow-xl">
              <img
                className="h-full w-full object-cover"
                src={HERO.image.src}
                alt={HERO.image.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-surface-container-lowest/90 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-label-md text-on-surface">{HERO.card.title}</p>
                    <p className="text-caption text-on-surface-variant">{HERO.card.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
