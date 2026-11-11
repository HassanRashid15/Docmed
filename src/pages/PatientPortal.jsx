import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import {
  PATIENT_PORTAL_SEO,
  PortalHeader,
  VitalsMetrics,
  UpcomingAppointment,
  ActivePrescriptions,
  CarePlan,
  LabReports,
  SecureMessaging,
  BillingWidget,
} from '../features/PatientPortal';

function PatientPortal() {
  useEffect(() => {
    document.title = PATIENT_PORTAL_SEO.title;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title={PATIENT_PORTAL_SEO.title}
        description={PATIENT_PORTAL_SEO.description}
        keywords={PATIENT_PORTAL_SEO.keywords}
        canonical={PATIENT_PORTAL_SEO.canonical}
      />
      <div className="min-h-screen bg-surface pt-[105px] text-on-surface md:pt-[120px] [&_a]:no-underline">
        <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 lg:px-12">
          <PortalHeader />
          <VitalsMetrics />

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <UpcomingAppointment />
              <ActivePrescriptions />
              <CarePlan />
            </div>

            <div className="space-y-6 lg:col-span-5">
              <LabReports />
              <SecureMessaging />
              <BillingWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientPortal;
