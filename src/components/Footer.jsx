import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nav_logo from '../assets/Images/nav_logo.png';
import { SITE } from '../constants/siteInfo';
import {
  FOOTER_CLINICAL_LINKS,
  FOOTER_ABOUT_LINKS,
  FOOTER_LEGAL_LINKS,
} from '../constants/footerData';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="mt-20 w-full bg-surface-container-low [&_a]:no-underline [&_ul]:mb-0">
      <div className="mx-auto max-w-7xl px-6 pb-2 pt-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img alt={`${SITE.name} Logo`} className="h-10 w-auto object-contain" src={nav_logo} />
              <span className="text-title text-primary">{SITE.legalName}</span>
            </div>
            <p className="max-w-sm text-body-md text-on-surface-variant">{SITE.description}</p>
            <div className="space-y-1 pt-1 text-body-md text-on-surface-variant">
              <p className="m-0">{SITE.address.street}</p>
              <p className="m-0">{SITE.address.line2}</p>
              <p className="m-0">
                <a
                  href={SITE.phone.href}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {SITE.phone.display}
                </a>
              </p>
              <p className="m-0">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {SITE.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full bg-surface-container-high px-2.5 py-1 text-caption uppercase tracking-wider text-on-surface-variant"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-label-md uppercase tracking-wider text-on-surface">
              Clinical Care &amp; Services
            </h4>
            <ul className="m-0 list-none space-y-2.5 p-0">
              {FOOTER_CLINICAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-body-md text-on-surface-variant transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-label-md uppercase tracking-wider text-on-surface">
              About &amp; Resources
            </h4>
            <ul className="m-0 list-none space-y-2.5 p-0">
              {FOOTER_ABOUT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-body-md text-on-surface-variant transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-label-md uppercase tracking-wider text-on-surface">
              Stay Connected
            </h4>
            <p className="mb-4 text-body-md text-on-surface-variant">
              Subscribe to medical advisories and wellness reports from our chief clinicians.
            </p>
            <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
              <div className="flex w-full overflow-hidden rounded-full bg-white shadow-[0_2px_8px_rgba(11,28,48,0.1)]">
                <input
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-body-md text-on-surface placeholder:text-outline focus:outline-none sm:px-5"
                  placeholder="Enter email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="shrink-0 bg-docmed-green px-4 py-3 text-label-md font-semibold uppercase tracking-wide text-white transition-all hover:bg-docmed-green-dark active:scale-[0.98] md:px-5"
                  type="submit"
                  aria-label="Subscribe"
                >
                  <span className="md:hidden">Subscribe →</span>
                  <span className="hidden md:inline" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
              <span className="text-caption text-on-surface-variant">
                Strictly confidential. No marketing spam.
              </span>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-container-high pt-8 md:flex-row">
          <p className="m-0 text-body-md text-on-surface-variant">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-caption text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
