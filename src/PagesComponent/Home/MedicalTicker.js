import React from 'react';

const TICKER_TEXT =
  'Emergency Care Available 24/7 ★ Expert Medical Professionals ★ Advanced Medical Technology ★ Comprehensive Health Services ★ Patient-Centered Care ★ Book Your Appointment Today';

function MedicalTicker() {
  const loop = `${TICKER_TEXT}  •  ${TICKER_TEXT}  •  `;

  return (
    <div className="flex h-11 items-center overflow-hidden bg-gradient-to-r from-[#0181f5] to-[#5db2ff] shadow-[0_2px_10px_rgba(1,129,245,0.3)] md:h-12">
      <div className="flex w-max animate-marquee whitespace-nowrap text-xs font-medium uppercase tracking-wide text-white sm:text-sm md:text-base">
        <span className="px-2">{loop}</span>
        <span className="px-2" aria-hidden="true">
          {loop}
        </span>
      </div>
      <span className="sr-only">{TICKER_TEXT}</span>
    </div>
  );
}

export default MedicalTicker;
