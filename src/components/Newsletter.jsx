import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/siteInfo';

function Newsletter() {
  return (
    <section className="w-full bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="bg-[#009DFF]/90 px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl space-y-4" data-aos="fade-up">
          <h5 className="text-sm font-semibold uppercase tracking-[3px] text-white/90">
            Get In Touch
          </h5>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Best Medical &amp; Health Care Near Your City
          </h1>
          <h6 className="text-base font-normal text-white/90 md:text-lg">
            We&apos;ve 25 Years of experience in Medical Services.
          </h6>
          <Link
            to={ROUTES.contact}
            className="mt-4 inline-block rounded-full border border-transparent bg-white px-8 py-3 text-sm font-medium text-docmed-blue transition-colors hover:border-white hover:bg-transparent hover:text-white"
          >
            Book An Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
