import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  Video,
  Stethoscope,
  CheckCircle2,
  Search,
  BriefcaseMedical,
  UserSearch,
  CalendarDays,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import doctorImg from '../../Assets/Images/doctor.jpeg';
import { ROUTES } from '../../constants/siteInfo';

function HeroSection() {
  const [specialty, setSpecialty] = useState('');
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('2025-05-12');
  const [location, setLocation] = useState('virtual');

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-docmed-blue/10 via-docmed-light/80 to-transparent blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col items-start space-y-6 lg:col-span-7" data-aos="fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-docmed-light px-3 py-1.5 text-slate-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-docmed-green" />
              <span className="text-xs font-semibold tracking-tight">
                Virtual Care Active • 24/7 Board-Certified Coverage
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Healthcare Designed <br />
              <span className="bg-gradient-to-r from-[#0181f5] to-[#5db2ff] bg-clip-text text-transparent">
                Around Your Life
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Connect with over 1,200+ board-certified medical specialists, book same-day
              appointments, and access comprehensive digital health records in one secure portal.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-docmed-blue">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current opacity-50" />
                </div>
                <span className="text-sm font-semibold text-slate-900">4.9/5 Rating</span>
                <span className="text-[11px] text-slate-500">(34k+ reviews)</span>
              </div>
              <div className="hidden h-4 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-docmed-green" />
                <span className="text-sm font-medium text-slate-900">100% HIPAA Compliant</span>
              </div>
              <div className="hidden h-4 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-docmed-blue" />
                <span className="text-sm font-medium text-slate-900">Same-Day Video Visits</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full overflow-hidden rounded-2xl bg-docmed-light shadow-xl">
              <img
                src={doctorImg}
                alt="Board-certified physician providing telemedicine care"
                className="h-[420px] w-full object-cover md:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-docmed-light">
                    <Stethoscope className="h-6 w-6 text-docmed-blue" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-docmed-green ring-2 ring-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Next Available Clinician</div>
                    <div className="text-[11px] text-slate-500">General Practice • Virtual Wait: 4m</div>
                  </div>
                </div>
                <Link
                  to={ROUTES.contact}
                  className="rounded-lg bg-docmed-blue px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-docmed-hover"
                >
                  Connect
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-md sm:flex">
              <CheckCircle2 className="h-6 w-6 fill-docmed-green text-white" />
              <div>
                <div className="text-sm font-semibold text-slate-900">1,240+ Physicians</div>
                <div className="text-[11px] text-slate-500">Verified Credentials</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 w-full rounded-2xl bg-white p-4 shadow-xl lg:p-6" data-aos="fade-up">
          <form
            className="grid grid-cols-1 items-end gap-3 md:grid-cols-2 lg:grid-cols-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-1.5 lg:col-span-3">
              <label htmlFor="hero-specialty" className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <BriefcaseMedical className="h-4 w-4 text-docmed-blue" />
                Specialty
              </label>
              <div className="relative">
                <select
                  id="hero-specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="h-12 w-full cursor-pointer appearance-none rounded-lg bg-docmed-light px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue/30"
                >
                  <option value="">Select Specialty</option>
                  <option value="cardiology">Cardiology (Heart)</option>
                  <option value="pediatrics">Pediatrics & Child Health</option>
                  <option value="general">General Medicine</option>
                  <option value="neurology">Neurology & Brain</option>
                  <option value="orthopedics">Orthopedics & Sports</option>
                  <option value="dermatology">Dermatology</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-slate-400" />
              </div>
            </div>

            <div className="space-y-1.5 lg:col-span-3">
              <label htmlFor="hero-query" className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <UserSearch className="h-4 w-4 text-docmed-blue" />
                Doctor or Condition
              </label>
              <input
                id="hero-query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Dr. Vance, Hypertension"
                className="h-12 w-full rounded-lg bg-docmed-light px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue/30"
              />
            </div>

            <div className="space-y-1.5 lg:col-span-2">
              <label htmlFor="hero-date" className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <CalendarDays className="h-4 w-4 text-docmed-blue" />
                Preferred Date
              </label>
              <input
                id="hero-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-12 w-full cursor-pointer rounded-lg bg-docmed-light px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue/30"
              />
            </div>

            <div className="space-y-1.5 lg:col-span-2">
              <label htmlFor="hero-location" className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <MapPin className="h-4 w-4 text-docmed-blue" />
                Location / Visit Type
              </label>
              <div className="relative">
                <select
                  id="hero-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 w-full cursor-pointer appearance-none rounded-lg bg-docmed-light px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-docmed-blue/30"
                >
                  <option value="virtual">Virtual Telehealth (Anywhere)</option>
                  <option value="metro-main">Main Hospital Campus</option>
                  <option value="north-clinic">North Pavilion Urgent Care</option>
                  <option value="west-center">West End Diagnostic Center</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-slate-400" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <Link
                to={ROUTES.service}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-docmed-blue text-sm font-semibold text-white shadow-md transition-all hover:bg-docmed-hover active:scale-[0.98]"
              >
                <Search className="h-4 w-4" />
                Search Doctors
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
