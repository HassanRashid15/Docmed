import React, { useEffect, useMemo, useState } from 'react';
import SEO from '../components/SEO';
import { SITE, ROUTES } from '../constants/siteInfo';
import {
  ServicesHero,
  ServicesGrid,
  DeliveryModalities,
  CostEstimator,
  NurseNavigatorCTA,
  SERVICES,
  FILTERS,
} from '../features/Services';

function Service() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.title = `Medical Services | ${SITE.name.toUpperCase()} - Comprehensive Healthcare Solutions`;
  }, []);

  const filteredServices = useMemo(() => {
    const q = query.toLowerCase().trim();
    return SERVICES.filter((service) => {
      const matchesFilter =
        activeFilter === 'all' || service.categories.includes(activeFilter);
      const haystack = [
        service.title,
        service.description,
        service.badge,
        ...service.features,
      ]
        .join(' ')
        .toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, activeFilter]);

  const filterCounts = useMemo(() => {
    const counts = { all: SERVICES.length };
    FILTERS.forEach((f) => {
      if (f.id === 'all') return;
      counts[f.id] = SERVICES.filter((s) => s.categories.includes(f.id)).length;
    });
    return counts;
  }, []);

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: SITE.legalName,
    url: SITE.url,
    medicalSpecialty: SERVICES.map((s) => s.title),
  };

  return (
    <>
      <SEO
        title={`Medical Services | ${SITE.name.toUpperCase()} - Comprehensive Healthcare Solutions`}
        description={`${SITE.legalName} offers 45+ clinical specialties including cardiology, neurology, pediatrics, orthopedics, oncology, telehealth, and advanced diagnostics.`}
        keywords="medical services, cardiology, neurology, pediatrics, orthopedics, oncology, telehealth, diagnostics, docmed"
        canonical={ROUTES.service}
        structuredData={serviceStructuredData}
      />

      <div className="min-h-screen bg-white pt-[105px] md:pt-[120px]">
        <ServicesHero
          query={query}
          onQueryChange={setQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filterCounts={filterCounts}
        />
        <ServicesGrid services={filteredServices} />
        <DeliveryModalities />
        <CostEstimator />
        <NurseNavigatorCTA />
      </div>
    </>
  );
}

export default Service;
