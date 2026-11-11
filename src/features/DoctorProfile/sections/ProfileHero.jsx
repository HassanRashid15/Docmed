import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import { ROUTES } from '../../../constants/siteInfo';

function ProfileHero({ doctor }) {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low">
      <div className="pointer-events-none absolute -left-20 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-tertiary-container/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        <nav className="mb-8 flex flex-wrap items-center gap-2">
          <Link
            to={ROUTES.home}
            className="text-label-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            DocMed Care
          </Link>
          <Icon name="chevron_right" className="text-xs text-outline" />
          <Link
            to={ROUTES.findDoctors}
            className="text-label-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            {doctor.breadcrumbSpecialty}
          </Link>
          <Icon name="chevron_right" className="text-xs text-outline" />
          <span className="text-label-sm font-semibold text-on-surface">{doctor.shortName}</span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-center sm:items-start lg:col-span-4">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-surface-container-lowest shadow-xl sm:h-56 sm:w-56">
              <img
                src={doctor.image}
                alt={doctor.imageAlt}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-surface-container-lowest/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <Icon name="verified" className="text-base text-primary" filled />
                  <span className="text-caption font-semibold text-on-surface">{doctor.boardBadge}</span>
                </div>
                <span className="text-caption font-bold tracking-tight text-tertiary">
                  {doctor.boardOrg}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {doctor.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-label-sm ${
                    tag.tone === 'tertiary'
                      ? 'bg-tertiary-container/15 text-tertiary'
                      : tag.tone === 'secondary'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-primary-fixed text-on-primary-fixed'
                  }`}
                >
                  {tag.pulse && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-tertiary" />}
                  {tag.icon && <Icon name={tag.icon} className="text-xs" />}
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-8">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-primary-container px-2.5 py-0.5 text-caption font-semibold uppercase tracking-wider text-on-primary">
                  {doctor.titleBadge}
                </span>
                <span className="flex items-center gap-1 text-caption text-on-surface-variant">
                  <Icon name="check_circle" className="text-sm text-tertiary" />
                  {doctor.facultyLabel}
                </span>
              </div>

              <h1 className="text-headline-lg tracking-tight text-on-surface">
                {doctor.name}, <span className="text-title text-primary">{doctor.credentials}</span>
              </h1>
              <p className="mt-1 max-w-2xl text-body-lg text-on-surface-variant">{doctor.summary}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-label-md text-on-surface-variant">
                {doctor.affiliations.map((item, index) => (
                  <React.Fragment key={item.label}>
                    {index > 0 && <span className="font-normal text-outline-variant">/</span>}
                    <div className="flex items-center gap-1.5">
                      <Icon name={item.icon} className="text-base text-primary" />
                      <span>{item.label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {doctor.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col rounded-xl bg-surface-container-lowest p-3.5 shadow-sm"
                >
                  <div
                    className={`flex items-center gap-1 ${
                      stat.tone === 'tertiary' ? 'text-tertiary' : 'text-primary'
                    }`}
                  >
                    <Icon name={stat.icon} className="text-lg" filled={stat.filled} />
                    <span className="text-headline-sm text-on-surface">{stat.value}</span>
                  </div>
                  <span className="mt-0.5 text-caption text-on-surface-variant">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHero;
