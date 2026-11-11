import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ProfileHero,
  ProfileDetails,
  BookingWidget,
  BookingModal,
  getDoctorProfile,
  getDoctorProfileSeo,
} from '../features/DoctorProfile';

function DoctorProfile() {
  const { slug } = useParams();
  const doctor = getDoctorProfile(slug);
  const seo = getDoctorProfileSeo(doctor);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingSummary, setBookingSummary] = useState({
    date: doctor.booking.dates.find((d) => d.selected)?.label || doctor.booking.dates[0].label,
    slot: doctor.booking.defaultSlot,
    visitType: 'clinic',
  });

  useEffect(() => {
    document.title = seo.title;
    window.scrollTo(0, 0);
  }, [seo.title, slug]);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <div className="min-h-screen bg-surface pt-[105px] text-on-surface md:pt-[120px] [&_a]:no-underline">
        <ProfileHero doctor={doctor} />

        <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <ProfileDetails doctor={doctor} />
            <BookingWidget
              doctor={doctor}
              onConfirm={(summary) => {
                setBookingSummary(summary);
                setModalOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      <BookingModal
        open={modalOpen}
        doctor={doctor}
        summary={bookingSummary}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default DoctorProfile;
