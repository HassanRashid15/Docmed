import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BadgeCheck } from 'lucide-react';
import { ROUTES } from '../../../constants/siteInfo';

function DetailBreadcrumb({ data }) {
  return (
    <section className="w-full bg-docmed-light/60 px-6 py-4 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <Link
            to={ROUTES.home}
            className="inline-flex items-center gap-1 transition-colors hover:text-docmed-blue"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link to={ROUTES.service} className="transition-colors hover:text-docmed-blue">
            Services
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="text-sm font-semibold text-docmed-blue">{data.breadcrumb}</span>
        </nav>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-docmed-green shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-docmed-green" />
            {data.statusBar}
          </span>
          <span className="hidden items-center gap-1 text-[11px] font-medium text-slate-500 md:inline-flex">
            <BadgeCheck className="h-3.5 w-3.5 text-docmed-blue" />
            {data.accreditation}
          </span>
        </div>
      </div>
    </section>
  );
}

export default DetailBreadcrumb;
