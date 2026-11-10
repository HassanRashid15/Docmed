import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/siteInfo';

function PageNotfound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface px-6 pb-16 pt-[140px] text-center md:pt-[160px]">
      <div className="max-w-xl space-y-4" data-aos="fade-up">
        <h1 className="bg-gradient-to-r from-[#0181f5] to-[#5db2ff] bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-on-surface md:text-3xl">Page Not Found</h2>
        <p className="text-body-lg text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to={ROUTES.home}
          className="inline-flex rounded-full bg-docmed-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-docmed-hover"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default PageNotfound;
