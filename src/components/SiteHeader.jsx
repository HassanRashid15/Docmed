import React, { useEffect, useState } from 'react';
import MedicalTicker from './MedicalTicker';
import Navbar from './Navbar';

const COMPACT_SCROLL_Y = 80;

function SiteHeader() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > COMPACT_SCROLL_Y);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <MedicalTicker />
      <div
        className={`mx-auto w-full transition-[max-width,padding,transform] duration-500 ease-in-out will-change-[max-width] ${
          compact
            ? 'min-[1186px]:max-w-[1200px] min-[1186px]:px-4 min-[1186px]:pt-0'
            : 'max-w-none px-0 pt-0'
        }`}
      >
        <div
          className={`overflow-visible bg-white transition-[border-radius,box-shadow,border-color,padding] duration-500 ease-in-out ${
            compact
              ? 'border border-outline-variant/40 shadow-lg min-[1186px]:rounded-2xl'
              : 'border-b border-outline-variant/50 shadow-sm min-[1186px]:rounded-none'
          }`}
        >
          <Navbar compact={compact} />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
