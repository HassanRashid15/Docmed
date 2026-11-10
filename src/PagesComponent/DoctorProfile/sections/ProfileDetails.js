import React from 'react';
import Icon from '../../FindDoctors/Icon';

function SectionHeading({ icon, title, subtitle, action }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-high text-primary">
          <Icon name={icon} className="text-2xl" />
        </div>
        <div>
          <h2 className="text-headline-sm text-on-surface">{title}</h2>
          {subtitle && <p className="text-caption text-on-surface-variant">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

function ProfileDetails({ doctor }) {
  return (
    <div className="flex flex-col gap-10 lg:col-span-7 xl:col-span-8">
      <article className="flex flex-col gap-4 rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
        <SectionHeading
          icon="clinical_notes"
          title={`About ${doctor.name}`}
          subtitle="Philosophy of Care & Clinical Ethos"
        />
        {doctor.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-body-md leading-relaxed text-on-surface-variant">
            {paragraph}
          </p>
        ))}
        <div className="pt-4">
          <h3 className="mb-3 text-label-md uppercase tracking-wider text-on-surface">
            Specialties &amp; Clinical Focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {doctor.specialties.map((item) => (
              <span
                key={item}
                className="rounded-lg bg-surface-container px-3.5 py-1.5 text-label-sm text-on-surface"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
        <div className="mb-6">
          <SectionHeading
            icon="school"
            title="Education & Credentials"
            subtitle="Formal Medical Fellowship, Residency & Degrees"
          />
        </div>
        <div className="relative space-y-6 pl-6 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-surface-container-high before:content-['']">
          {doctor.education.map((item) => (
            <div key={item.title} className="relative">
              <div
                className={`absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-surface-container-lowest ${
                  item.active ? 'bg-primary' : 'bg-surface-variant'
                }`}
              />
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <span className="text-title text-on-surface">{item.title}</span>
                <span
                  className={`text-label-sm font-semibold ${
                    item.yearsTone === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {item.years}
                </span>
              </div>
              <p className="text-body-md font-medium text-on-surface-variant">{item.school}</p>
              <p className="mt-1 text-caption text-outline">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
        <SectionHeading
          icon="distance"
          title={doctor.location.title}
          subtitle={doctor.location.subtitle}
          action={
            <a
              href={doctor.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 text-label-md text-primary hover:underline sm:inline-flex"
            >
              Get Directions
              <Icon name="open_in_new" className="text-sm" />
            </a>
          }
        />

        <div
          className="group relative h-56 w-full overflow-hidden rounded-xl bg-cover bg-center shadow-inner"
          style={{ backgroundImage: `url('${doctor.location.mapImage}')` }}
        >
          <div className="absolute inset-0 bg-on-surface/20 transition-colors group-hover:bg-on-surface/10" />
          <div className="absolute bottom-4 left-4 max-w-sm rounded-lg bg-surface-container-lowest/95 p-3 shadow-md backdrop-blur-md">
            <p className="text-label-md font-bold text-on-surface">{doctor.location.name}</p>
            <p className="text-caption text-on-surface-variant">{doctor.location.address}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {doctor.location.access.map((item) => (
            <div key={item.title} className="flex flex-col gap-1 rounded-xl bg-surface-container-low p-4">
              <div className="flex items-center gap-2 text-primary">
                <Icon name={item.icon} className="text-lg" />
                <span className="text-label-md font-semibold">{item.title}</span>
              </div>
              <p className="mt-1 text-caption text-on-surface-variant">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
        <SectionHeading
          icon="shield"
          title="Insurance & Coverage"
          subtitle="In-network with 42 major national carriers"
          action={
            <span className="rounded-full bg-tertiary-container/15 px-2.5 py-1 text-label-sm font-semibold text-tertiary">
              Instant Eligibility Check
            </span>
          }
        />
        <p className="text-body-md text-on-surface-variant">{doctor.insurance.intro}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {doctor.insurance.carriers.map((carrier) => (
            <div
              key={carrier}
              className="flex items-center justify-center rounded-lg bg-surface-container p-3 text-center"
            >
              <span className="text-label-md font-semibold text-on-surface">{carrier}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
        <SectionHeading
          icon="rate_review"
          title="Patient Ratings & Reviews"
          subtitle="Verified post-consultation evaluations"
        />

        <div className="grid grid-cols-1 items-center gap-6 rounded-xl bg-surface-container-low p-6 sm:grid-cols-12">
          <div className="flex flex-col items-center justify-center border-b border-surface-container-high pb-4 text-center sm:col-span-4 sm:border-b-0 sm:border-r sm:pb-0">
            <span className="text-display font-bold tracking-tight text-on-surface">
              {doctor.reviews.score}
            </span>
            <div className="mt-1 flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="text-lg" filled />
              ))}
            </div>
            <span className="mt-2 text-caption text-on-surface-variant">
              Based on {doctor.reviews.count} verified patients
            </span>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-8">
            {doctor.reviews.distribution.map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <span className="w-12 text-right text-caption text-on-surface">{row.label}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-container-high">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
                <span className="w-10 text-caption text-on-surface-variant">{row.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {doctor.reviews.testimonials.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-3 rounded-xl bg-surface-container-low p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-title ${
                      review.tone === 'secondary'
                        ? 'bg-secondary-fixed text-on-secondary-fixed'
                        : 'bg-primary-fixed text-on-primary-fixed'
                    }`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-label-md text-on-surface">{review.name}</h3>
                    <p className="text-caption text-outline">{review.meta}</p>
                  </div>
                </div>
                <div className="flex text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="text-sm" filled />
                  ))}
                </div>
              </div>
              <p className="text-body-md text-on-surface-variant">{review.text}</p>
              <div className="flex items-center gap-2 text-caption text-outline">
                <span>{review.place}</span>
                <span>•</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfileDetails;
