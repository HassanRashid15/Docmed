import React, { useEffect } from 'react';
import SEO from '../Component/SEO';
import {
  ABOUT_SEO,
  AboutHero,
  ImpactMetrics,
  CorePillars,
  Leadership,
  Accreditations,
  HistoryTimeline,
  ClinicalTrials,
  JoinMission,
} from '../PagesComponent/About';

function About() {
  useEffect(() => {
    document.title = ABOUT_SEO.title;
  }, []);

  return (
    <>
      <SEO
        title={ABOUT_SEO.title}
        description={ABOUT_SEO.description}
        keywords={ABOUT_SEO.keywords}
        canonical={ABOUT_SEO.canonical}
      />
      <main className="bg-surface pt-[105px] text-on-surface md:pt-[120px] [&_a]:no-underline">
        <AboutHero />
        <ImpactMetrics />
        <CorePillars />
        <Leadership />
        <Accreditations />
        <HistoryTimeline />
        <ClinicalTrials />
        <JoinMission />
      </main>
    </>
  );
}

export default About;
