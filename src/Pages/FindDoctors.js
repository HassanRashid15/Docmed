import React, { useEffect, useState } from 'react';
import SEO from '../Component/SEO';
import {
  FIND_DOCTORS_SEO,
  PageHeader,
  FiltersSidebar,
  DoctorsDirectory,
} from '../PagesComponent/FindDoctors';

function FindDoctors() {
  const [view, setView] = useState('list');

  useEffect(() => {
    document.title = FIND_DOCTORS_SEO.title;
  }, []);

  return (
    <>
      <SEO
        title={FIND_DOCTORS_SEO.title}
        description={FIND_DOCTORS_SEO.description}
        keywords={FIND_DOCTORS_SEO.keywords}
        canonical={FIND_DOCTORS_SEO.canonical}
      />
      <div className="min-h-screen bg-surface pt-[105px] text-on-surface md:pt-[120px] [&_a]:no-underline">
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-48 h-80 w-80 rounded-full bg-secondary-container/40 blur-3xl" />

          <PageHeader view={view} onViewChange={setView} sortLabel="Highest Rated" />

          <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <FiltersSidebar />
              <DoctorsDirectory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindDoctors;
