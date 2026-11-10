import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Star, Clock } from 'lucide-react';
import doctorImg from '../../Assets/Images/doctor.jpeg';
import userImg from '../../Assets/Images/userImage.png';
import docpic from '../../Assets/Images/docpic.png';
import SectionHeading from './SectionHeading';
import { ROUTES } from '../../constants/siteInfo';

const doctors = [
  {
    name: 'Dr. Julian Hayes, MD',
    role: 'Chief Interventional Cardiologist',
    specialty: 'Cardiology',
    rating: '4.9',
    reviews: '184',
    slot: 'Today at 3:30 PM',
    image: doctorImg,
  },
  {
    name: 'Dr. Sarah Lin, FAAP',
    role: 'Director of Pediatric Wellness',
    specialty: 'Pediatrics',
    rating: '5.0',
    reviews: '230',
    slot: 'Today at 4:15 PM',
    image: userImg,
  },
  {
    name: 'Dr. Marcus Vance, MD',
    role: 'Neurologist & Spine Consultant',
    specialty: 'Neurology',
    rating: '4.8',
    reviews: '142',
    slot: 'Tomorrow at 9:00 AM',
    image: docpic,
  },
  {
    name: 'Dr. Elena Rostova, MD',
    role: 'Orthopedic Sports Medicine Lead',
    specialty: 'Orthopedics',
    rating: '4.9',
    reviews: '198',
    slot: 'Today at 5:00 PM',
    image: doctorImg,
  },
];

function FeaturedDoctors() {
  return (
    <section className="w-full bg-docmed-light/50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          watermark="DOCTORS"
          title="Our Expert Doctors"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-1 shadow-md"
              data-aos="fade-up"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-docmed-light">
                <img src={doc.image} alt={doc.name} className="h-full w-full" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-docmed-green backdrop-blur-sm">
                  <BadgeCheck className="h-3.5 w-3.5 fill-docmed-green text-white" />
                  Verified
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-4 p-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-docmed-light px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                      {doc.specialty}
                    </span>
                    <div className="flex items-center gap-1 text-docmed-blue">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-semibold text-slate-900">{doc.rating}</span>
                      <span className="text-[11px] text-slate-500">({doc.reviews})</span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{doc.name}</h3>
                  <p className="text-xs text-slate-600">{doc.role}</p>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-docmed-light/70 p-2.5">
                  <Clock className="h-4 w-4 text-docmed-green" />
                  <div className="text-[11px] text-slate-900">
                    Next slot:{' '}
                    <span className="font-semibold text-docmed-green">{doc.slot}</span>
                  </div>
                </div>
                <Link
                  to={ROUTES.contact}
                  className="flex w-full items-center justify-center rounded-lg bg-docmed-blue py-2.5 text-sm font-semibold text-white transition-colors hover:bg-docmed-hover"
                >
                  Book Visit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDoctors;
