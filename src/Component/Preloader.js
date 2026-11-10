import React, { useEffect, useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { SITE } from '../constants/siteInfo';
import ekgSprite from '../Assets/Images/ekg-hr.svg';
import './Preloader.css';

const SWEEP_SECONDS = 5;
const WELCOME_HOLD_MS = 1100;
const BRAND_HOLD_MS = 1400;
const FADE_MS = 700;

function Preloader() {
  const phaseRef = useRef('sweeping');
  const [phase, setPhase] = useState('sweeping'); // sweeping | welcome | brand | hiding
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let welcomeStartTimer;
    let brandTimer;
    let hideTimer;
    let removeTimer;
    let cancelled = false;

    // Keep EKG lines running; after one sweep cycle, overlay welcome text
    welcomeStartTimer = window.setTimeout(() => {
      if (cancelled || phaseRef.current !== 'sweeping') return;
      phaseRef.current = 'welcome';
      setPhase('welcome');

      brandTimer = window.setTimeout(() => {
        if (cancelled) return;
        phaseRef.current = 'brand';
        setPhase('brand');

        hideTimer = window.setTimeout(() => {
          if (cancelled) return;
          phaseRef.current = 'hiding';
          setPhase('hiding');
          removeTimer = window.setTimeout(() => {
            if (!cancelled) setGone(true);
          }, FADE_MS);
        }, BRAND_HOLD_MS);
      }, WELCOME_HOLD_MS);
    }, SWEEP_SECONDS * 1000);

    return () => {
      cancelled = true;
      window.clearTimeout(welcomeStartTimer);
      window.clearTimeout(brandTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (gone) {
      document.body.style.overflow = '';
    }
  }, [gone]);

  if (gone) return null;

  const showIntro =
    phase === 'welcome' || phase === 'brand' || phase === 'hiding';
  const showBrand = phase === 'brand' || phase === 'hiding';

  return (
    <div
      className={`docmed-preloader${phase === 'hiding' ? ' is-hiding' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading DocMed"
      style={{
        '--ekg-sprite': `url(${ekgSprite})`,
        '--animation-time': `${SWEEP_SECONDS}s`,
      }}
    >
      <div className="docmed-preloader__inner">
        <div
          className={`docmed-preloader__monitor${showIntro ? ' is-fading' : ''}`}
        >
          <div className="docmed-preloader__brand">
            <span className="docmed-preloader__pulse-heart" aria-hidden="true">
              <FaHeart />
            </span>
          </div>

          <div className="docmed-preloader__row docmed-preloader__row--full">
            <div
              className="docmed-preloader__graph docmed-preloader__graph--full"
              aria-hidden="true"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className={`docmed-preloader__cell docmed-preloader__cell--${n}`}
                />
              ))}
            </div>
          </div>

          <p className="docmed-preloader__label">Initializing care systems</p>
        </div>

        {showIntro && (
          <div className="docmed-preloader__intro">
            <p className="docmed-preloader__welcome is-in">Welcome to</p>
            {showBrand && (
              <div
                className="docmed-preloader__logo-wrap is-in"
                aria-label={SITE.name}
              >
                <span className="docmed-preloader__mark" aria-hidden="true">
                  <span className="docmed-preloader__mark-plus" />
                </span>
                <span className="docmed-preloader__logo-name">{SITE.name}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Preloader;
