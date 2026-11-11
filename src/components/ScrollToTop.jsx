import React, { useEffect, useState } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi';

const SHOW_AFTER_Y = 400;

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_Y);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary shadow-[0_10px_24px_-8px_rgba(11,28,48,0.35)] transition hover:bg-primary-container focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed"
    >
      <HiOutlineArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export default ScrollToTop;
