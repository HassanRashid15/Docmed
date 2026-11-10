import React from 'react';
import { Star, BadgeCheck, CheckCircle2, Clock } from 'lucide-react';

const BADGE_ICONS = [BadgeCheck, CheckCircle2, Clock];

function DetailTestimonial({ testimonial }) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div
          className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-docmed-light/80 p-8 lg:grid-cols-12 lg:p-12"
          data-aos="fade-up"
        >
          <div className="lg:col-span-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-72 w-full rounded-xl object-cover shadow-sm"
            />
          </div>
          <div className="space-y-6 lg:col-span-8">
            <div className="flex items-center gap-1 text-docmed-blue">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-slate-900">
                5.0 Patient Review
              </span>
            </div>
            <blockquote className="text-xl font-semibold italic leading-relaxed text-slate-900 md:text-2xl">
              {testimonial.quote}
            </blockquote>
            <div>
              <p className="text-lg font-bold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-600">{testimonial.meta}</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-[11px] font-medium text-slate-500">
              {testimonial.badges.map((badge, index) => {
                const Icon = BADGE_ICONS[index] || BadgeCheck;
                const color =
                  index === 1 ? 'text-docmed-green' : 'text-docmed-blue';
                return (
                  <span key={badge} className="inline-flex items-center gap-1.5">
                    <Icon className={`h-3.5 w-3.5 ${color}`} />
                    {badge}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailTestimonial;
