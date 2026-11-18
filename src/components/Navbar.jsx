import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import nav_logo from '../assets/Images/nav_logo.png';
import { IoClose } from 'react-icons/io5';
import { ROUTES, SITE } from '../constants/siteInfo';

const links = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Services', to: ROUTES.service },
  { label: 'Find Doctors', to: ROUTES.findDoctors },
  { label: 'About Us', to: ROUTES.about },
  { label: 'Contact Us', to: ROUTES.contact },
];

function isLinkActive(pathname, link) {
  if (link.to === ROUTES.home) return pathname === ROUTES.home;
  if (link.to === ROUTES.findDoctors) return pathname === ROUTES.findDoctors;
  if (link.to === ROUTES.service) return pathname === ROUTES.service;
  if (link.to === ROUTES.about) return pathname === ROUTES.about;
  if (link.to === ROUTES.contact) return pathname === ROUTES.contact;
  return false;
}

function MyNavbar({ compact = false }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-transparent">
      {/* Desktop — 1186px+ only; 1024–1185 uses tablet hamburger */}
      <div
        className={`mx-auto hidden w-full items-center transition-all duration-500 ease-in-out min-[1186px]:flex ${
          compact ? 'max-w-none gap-3 px-4 py-2' : 'max-w-[1400px] gap-5 px-6 py-3'
        }`}
      >
        <Link
          to={ROUTES.home}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap no-underline"
        >
          <img
            src={nav_logo}
            alt=""
            className={`w-auto object-contain transition-all duration-500 ease-in-out ${
              compact ? 'h-8' : 'h-10'
            }`}
          />
          <span
            className={`font-semibold tracking-tight text-slate-900 transition-all duration-500 ease-in-out ${
              compact ? 'text-base' : 'text-lg'
            }`}
          >
            DocMed
          </span>
        </Link>

        <div
          className={`flex min-w-0 flex-1 flex-nowrap items-center justify-center transition-all duration-500 ease-in-out ${
            compact ? 'gap-4' : 'gap-5'
          }`}
        >
          {links.map((link) => {
            const active = isLinkActive(location.pathname, link);
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`docmed-nav-link shrink-0 whitespace-nowrap font-medium ${
                  compact ? 'py-1 text-xs' : 'py-1.5 text-sm'
                } ${
                  active
                    ? 'is-active text-primary'
                    : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div
          className={`flex shrink-0 flex-nowrap items-center transition-all duration-500 ease-in-out ${
            compact ? 'gap-1.5' : 'gap-2'
          }`}
        >
          <a
            href={SITE.emergencyPhone.href}
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#fde8e8] font-medium text-[#c62828] no-underline transition-all duration-500 ease-in-out hover:bg-[#fcdada] ${
              compact ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-2 text-[13px]'
            }`}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e53935]" aria-hidden="true" />
            {compact ? SITE.emergencyPhone.display : `Emergency: ${SITE.emergencyPhone.display}`}
          </a>

          <Link
            to={ROUTES.patientPortal}
            className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-secondary-fixed font-medium text-on-secondary-fixed-variant no-underline transition-all duration-500 ease-in-out hover:bg-[#cfd6ef] ${
              compact ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-2 text-[13px]'
            }`}
          >
            {compact ? 'Portal' : 'Patient Portal Login'}
          </Link>

          <Link
            to={ROUTES.findDoctors}
            className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-lg bg-primary font-semibold text-white no-underline transition-all duration-500 ease-in-out hover:bg-primary-container ${
              compact ? 'px-3 py-1 text-[11px]' : 'px-4 py-2 text-[13px]'
            }`}
          >
            {compact ? 'Book' : 'Book Appointment'}
          </Link>
        </div>
      </div>

      {/* Tablet + mobile — below 1186px */}
      <div className="flex items-center justify-between px-4 py-2.5 min-[1186px]:hidden">
        <Link
          to={ROUTES.home}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap no-underline"
        >
          <img src={nav_logo} alt="" className="h-9 w-auto object-contain" />
          <span className="text-base font-semibold text-slate-900">DocMed</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to={ROUTES.findDoctors}
            className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white no-underline"
          >
            Book
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="border-0 bg-transparent p-1 text-primary"
          >
            {open ? <IoClose size={24} /> : <RxHamburgerMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-outline-variant/40 bg-white px-4 py-3 min-[1186px]:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const active = isLinkActive(location.pathname, link);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`docmed-nav-link w-fit px-1 py-2.5 text-sm font-medium ${
                    active
                      ? 'is-active text-primary'
                      : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 flex flex-col gap-2 border-t border-outline-variant/30 pt-3">
            <a
              href={SITE.emergencyPhone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fde8e8] px-3.5 py-2.5 text-sm font-medium text-[#c62828] no-underline"
            >
              <span className="h-2 w-2 rounded-full bg-[#e53935]" aria-hidden="true" />
              Emergency: {SITE.emergencyPhone.display}
            </a>
            <Link
              to={ROUTES.patientPortal}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-secondary-fixed px-3.5 py-2.5 text-sm font-medium text-on-secondary-fixed-variant no-underline"
            >
              Patient Portal Login
            </Link>
            <Link
              to={ROUTES.findDoctors}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white no-underline"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MyNavbar;
