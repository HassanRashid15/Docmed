import React from 'react';
import {
  Building2,
  MapPin,
  Clock,
  ParkingCircle,
  TrainFront,
  Phone,
  ArrowUpRight,
  Compass,
  Accessibility,
  CarTaxiFront,
  Bus,
  Map,
} from 'lucide-react';
import doctorImg from '../../Assets/Images/doctor.jpeg';
import bannerImg from '../../Assets/Images/banner.png.png';
import footerBanner from '../../Assets/Images/footerbanner.png';

const campuses = [
  {
    image: doctorImg,
    badge: 'Flagship Academic Campus',
    badgeClass: 'bg-docmed-blue/90 text-white',
    title: 'Manhattan Medical Pavilion',
    address: '745 Lexington Avenue, New York, NY 10022 (Fl 4-12)',
    hours: (
      <>
        Mon-Fri: 6:30 AM – 9:00 PM
        <br />
        Sat-Sun: 8:00 AM – 6:00 PM
      </>
    ),
    accessIcon: ParkingCircle,
    access: 'Valet parking available at 59th St garage. ADA designated street ramp.',
    phone: '(212) 555-0190',
    phoneHref: 'tel:2125550190',
    maps: 'https://maps.google.com/?q=745+Lexington+Avenue+New+York',
  },
  {
    image: bannerImg,
    badge: 'Family & Pediatrics Care',
    badgeClass: 'bg-docmed-blue/90 text-white',
    title: 'Brooklyn Health Center',
    address: '320 Atlantic Ave, Brooklyn, NY 11201',
    hours: (
      <>
        Mon-Sat: 7:00 AM – 8:00 PM
        <br />
        Sunday: Urgent Care Only (9 AM - 4 PM)
      </>
    ),
    accessIcon: TrainFront,
    access: 'Accessible via A, C, G trains at Hoyt-Schermerhorn. On-site bike locker.',
    phone: '(718) 555-0184',
    phoneHref: 'tel:7185550184',
    maps: 'https://maps.google.com/?q=320+Atlantic+Ave+Brooklyn',
  },
  {
    image: footerBanner,
    badge: 'Ambulatory & Walk-In Urgent',
    badgeClass: 'bg-red-600/90 text-white',
    title: 'Queens Ambulatory & Urgent Hub',
    address: '96-10 Queens Blvd, Rego Park, NY 11374',
    hours: (
      <>
        Open 365 Days / Year
        <br />
        24/7 Urgent Walk-In Triaging
      </>
    ),
    accessIcon: ParkingCircle,
    access: 'Underground parking validation for first 2 hours. ADA level transit lifts.',
    phone: '(718) 555-0220',
    phoneHref: 'tel:7185550220',
    maps: 'https://maps.google.com/?q=96-10+Queens+Blvd+Rego+Park',
  },
];

function CampusesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-12">
      <div className="mb-8">
        <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-docmed-blue">
          <Building2 className="h-4 w-4" />
          Physical Infrastructure & In-Person Care
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Regional Medical Campuses & Outpatient Hubs
        </h2>
        <p className="mt-1 max-w-2xl text-base text-slate-600 md:text-lg">
          DocMed operates three flagship outpatient pavilions across the metropolitan area offering
          walk-in diagnostics, specialized surgical suites, and comprehensive urgent care.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {campuses.map((campus) => {
          const AccessIcon = campus.accessIcon;
          return (
            <div
              key={campus.title}
              className="flex flex-col justify-between overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-44 w-full bg-cover bg-center" style={{ backgroundImage: `url(${campus.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <span className={`mb-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] ${campus.badgeClass}`}>
                    {campus.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white">{campus.title}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-docmed-blue" />
                    <span>{campus.address}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-docmed-blue" />
                    <span>{campus.hours}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <AccessIcon className="mt-0.5 h-5 w-5 shrink-0 text-docmed-blue" />
                    <span>{campus.access}</span>
                  </div>
                </div>
                <div className="-mx-5 -mb-5 flex items-center justify-between bg-docmed-light px-5 py-3">
                  <a
                    href={campus.phoneHref}
                    className="flex items-center gap-1.5 text-sm font-semibold text-docmed-blue hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {campus.phone}
                  </a>
                  <a
                    href={campus.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-slate-900 transition-colors hover:text-docmed-blue"
                  >
                    Directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative min-h-[360px] lg:col-span-8 lg:min-h-full">
            <div
              className="h-full min-h-[360px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${bannerImg})` }}
            />
            <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-lg bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-md">
              <Compass className="h-4 w-4 text-docmed-blue" />
              <span className="text-xs font-semibold text-slate-900">Active Campus Network Map</span>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-6 bg-docmed-light p-6 sm:p-8 lg:col-span-4">
            <div>
              <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-docmed-blue">
                <Accessibility className="h-4 w-4" />
                ADA Certified Accessible Facilities
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Transit & Campus Navigation</h3>
              <p className="mt-2 text-sm text-slate-600">
                Every DocMed location conforms to Universal Accessibility Guidelines with automated
                entrances, oversized elevators, wheelchair checkouts, and braille guidance signage.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-lg bg-white p-2 text-docmed-blue shadow-sm">
                  <CarTaxiFront className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Curbside Patient Drop-Off</h4>
                  <p className="text-sm text-slate-600">
                    Designated 15-minute passenger loading bays directly facing main hospital atriums
                    with porter escorts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-lg bg-white p-2 text-docmed-blue shadow-sm">
                  <Bus className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">MTA Paratransit & Access-A-Ride</h4>
                  <p className="text-sm text-slate-600">
                    Registered destination codes available for swift reservation directly via your
                    DocMed appointment reminder SMS.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-docmed-blue/10"
            >
              <Map className="h-5 w-5 text-docmed-blue" />
              Open in Google Maps / Apple Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusesSection;
