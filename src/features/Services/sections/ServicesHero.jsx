import React, { useEffect, useRef, useState } from 'react';
import { BadgeCheck, Search, X } from 'lucide-react';
import { FILTERS } from '../data';

function ServicesHero({ query, onQueryChange, activeFilter, onFilterChange, filterCounts }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const searchWrapRef = useRef(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(event.target)) {
        setSearchOpen(false);
        onQueryChange('');
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [searchOpen, onQueryChange]);

  const openSearch = () => setSearchOpen(true);

  const closeSearch = () => {
    setSearchOpen(false);
    onQueryChange('');
  };

  return (
    <section className="relative w-full overflow-hidden bg-docmed-light/60 pb-16 pt-8">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-docmed-blue shadow-sm">
              <BadgeCheck className="h-4 w-4" />
              Academic Clinical Excellence
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Comprehensive Clinical Care{' '}
              <br className="hidden sm:inline" />
              Tailored to Your Life.
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
              From routine preventive checkups to complex interdisciplinary robotic interventions,
              connect seamlessly with world-class specialists in-clinic, virtually, or at home.
            </p>
          </div>

          <div className="grid w-full shrink-0 grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto">
            {[
              { value: '45+', label: 'Clinical Specialties', color: 'text-docmed-blue' },
              { value: '1,200+', label: 'Board-Certified MDs', color: 'text-docmed-blue' },
              { value: '24/7', label: 'Virtual Triage On-Call', color: 'text-docmed-green' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center rounded-xl bg-white p-5 shadow-sm"
              >
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="mt-1 text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-3 shadow-md sm:p-4">
          <div className="flex items-center gap-2">
            <div
              ref={searchWrapRef}
              className="relative h-11 shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out"
              style={{ width: searchOpen ? '50%' : '2.75rem' }}
            >
              <button
                type="button"
                onClick={openSearch}
                aria-label="Open search"
                className={`absolute inset-0 flex h-11 w-11 items-center justify-center rounded-lg bg-docmed-light text-slate-500 transition-all duration-200 hover:bg-docmed-blue/10 hover:text-docmed-blue ${
                  searchOpen
                    ? 'pointer-events-none scale-90 opacity-0'
                    : 'pointer-events-auto scale-100 opacity-100'
                }`}
              >
                <Search className="h-5 w-5" />
              </button>

              <div
                className={`absolute inset-0 transition-opacity duration-200 ${
                  searchOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => onQueryChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') closeSearch();
                  }}
                  tabIndex={searchOpen ? 0 : -1}
                  placeholder="Search programs, procedures, diagnostics..."
                  className="h-11 w-full rounded-lg bg-docmed-light py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-docmed-blue/30"
                />
                <button
                  type="button"
                  onClick={closeSearch}
                  aria-label="Close search"
                  tabIndex={searchOpen ? 0 : -1}
                  className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-white hover:text-slate-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="services-filter-scroll flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
              {FILTERS.map((filter) => {
                const active = activeFilter === filter.id;
                const count = filterCounts?.[filter.id] ?? filter.count;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => onFilterChange(filter.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                      active
                        ? 'bg-docmed-blue text-white shadow-sm'
                        : 'bg-docmed-light text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold ${
                        active ? 'bg-white/20' : 'bg-white text-slate-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
