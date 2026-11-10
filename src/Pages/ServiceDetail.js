import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '../Component/SEO';
import { SITE, ROUTES } from '../constants/siteInfo';
import {
  DetailBreadcrumb,
  DetailHero,
  DetailMetrics,
  DetailPillars,
  DetailTech,
  DetailDoctors,
  DetailJourney,
  DetailTestimonial,
  DetailPricing,
  DetailCTA,
  getServiceDetail,
} from '../PagesComponent/ServiceDetail';

function ServiceDetail() {
  const { slug } = useParams();
  const data = getServiceDetail(slug);

  useEffect(() => {
    if (data) {
      document.title = `${data.breadcrumb} | ${SITE.name.toUpperCase()}`;
      window.scrollTo(0, 0);
    }
  }, [data]);

  if (!data) {
    return <Navigate to={ROUTES.service} replace />;
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `${SITE.legalName} — ${data.title}`,
    url: `${SITE.url}${ROUTES.servicePage(slug)}`,
    medicalSpecialty: data.breadcrumb,
    telephone: SITE.emergencyPhone.display,
  };

  return (
    <>
      <SEO
        title={`${data.breadcrumb} | ${SITE.name.toUpperCase()}`}
        description={data.description}
        keywords={`${data.breadcrumb}, cardiology, heart care, cath lab, docmed`}
        canonical={ROUTES.servicePage(slug)}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-white pt-[105px] md:pt-[120px]">
        <DetailBreadcrumb data={data} />
        <DetailHero data={data} />
        <DetailMetrics metrics={data.metrics} />
        <DetailPillars pillars={data.pillars} />
        <DetailTech tech={data.tech} />
        <DetailDoctors doctors={data.doctors} />
        <DetailJourney journey={data.journey} />
        <DetailTestimonial testimonial={data.testimonial} />
        <DetailPricing pricing={data.pricing} networks={data.networks} />
        <DetailCTA />

        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12">
          <Link
            to={ROUTES.service}
            className="text-sm font-semibold text-docmed-blue transition-colors hover:text-docmed-hover"
          >
            ← Back to all services
          </Link>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
