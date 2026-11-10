import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { ACTIVE_FILTERS } from '../data';
import { ROUTES } from '../../../constants/siteInfo';

const VIEWS = [
  { id: 'list', icon: 'view_list', label: 'List' },
  { id: 'grid', icon: 'grid_view', label: 'Grid' },
  { id: 'map', icon: 'map', label: 'Map' },
];

function PageHeader({ view, onViewChange, sortLabel }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-8 lg:px-12">
      <nav
        aria-label="Breadcrumb"
        className="mb-3 flex items-center gap-2 text-label-sm text-on-surface-variant"
      >
        <Link
          to={ROUTES.home}
          className="flex items-center gap-1 transition-colors hover:text-primary"
        >
          <Icon name="home" className="text-sm" />
          <span>Home</span>
        </Link>
        <Icon name="chevron_right" className="text-xs text-outline" />
        <span className="font-semibold text-on-surface">Find Doctors</span>
      </nav>

      <div className="flex flex-col justify-between gap-6 pb-6 lg:flex-row lg:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-3 py-1 text-caption uppercase tracking-wider text-on-primary-fixed">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Verified Specialist Network
          </div>
          <h1 className="text-headline-lg tracking-tight text-on-surface">
            Find Verified Doctors &amp; Specialists
          </h1>
          <p className="mt-1.5 flex flex-wrap items-center gap-2 text-body-md text-on-surface-variant">
            <Icon name="location_on" className="text-base text-primary" />
            Showing <strong className="font-semibold text-on-surface">148 Available Doctors</strong> in
            New York Metro
            <span className="inline-block h-1 w-1 rounded-full bg-outline" />
            <span className="font-medium text-tertiary">Instant digital triage available</span>
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2 pt-1">
            <span className="mr-1 text-caption uppercase tracking-wider text-on-surface-variant">
              Active Filters:
            </span>
            {ACTIVE_FILTERS.map((filter) =>
              filter.active ? (
                <div
                  key={filter.id}
                  className="inline-flex items-center gap-1 rounded-full bg-primary-fixed px-2.5 py-1 text-caption font-semibold text-on-primary-fixed shadow-sm"
                >
                  {filter.icon && <Icon name={filter.icon} className="text-xs text-primary" />}
                  <span>{filter.label}</span>
                  {filter.removable && (
                    <button
                      type="button"
                      aria-label="Remove filter"
                      className="ml-0.5 flex items-center transition-colors hover:text-error"
                    >
                      <Icon name="close" className="text-xs" />
                    </button>
                  )}
                </div>
              ) : (
                <button
                  key={filter.id}
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-surface-container-high bg-surface-container-lowest px-2.5 py-1 text-caption text-on-surface shadow-sm transition-colors hover:bg-surface-container"
                >
                  {filter.icon ? (
                    <Icon name={filter.icon} className="text-xs text-secondary" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                  )}
                  <span>{filter.label}</span>
                  {filter.count && <span className="text-caption text-outline">{filter.count}</span>}
                </button>
              )
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-xl bg-surface-container p-1 shadow-sm">
            {VIEWS.map((item) => (
              <button
                key={item.id}
                type="button"
                title={`${item.label} View`}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-label-sm transition-all ${
                  view === item.id
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <Icon name={item.icon} className="text-base" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="relative min-w-[210px]">
            <div className="flex cursor-pointer items-center gap-2 rounded-xl bg-surface-container-lowest px-3.5 py-2.5 shadow-sm transition-colors hover:bg-surface-container-low">
              <Icon name="sort" className="text-lg text-primary" />
              <div className="min-w-0 flex-1">
                <p className="text-caption leading-none text-on-surface-variant">Sort by</p>
                <p className="truncate text-label-md font-semibold text-on-surface">{sortLabel}</p>
              </div>
              <Icon name="expand_more" className="text-base text-outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
