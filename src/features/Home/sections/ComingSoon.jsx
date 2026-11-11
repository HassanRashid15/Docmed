import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const AppleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 305 305" className="h-6 w-6 shrink-0">
      <g>
        <path d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008C78.894,73.643,54.298,88.535,40.738,112.119z" fill="#0b1c30" />
        <path d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z" fill="#0b1c30" />
      </g>
    </svg>
  );

  const GooglePlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="h-6 w-6 shrink-0">
      <polygon style={{ fill: '#5CDADD' }} points="29.53,0 29.53,251.509 29.53,512 299.004,251.509 " />
      <polygon style={{ fill: '#BDECC4' }} points="369.067,180.547 262.175,119.467 29.53,0 299.004,251.509 " />
      <polygon style={{ fill: '#DC68A1' }} points="29.53,512 29.53,512 262.175,383.551 369.067,322.47 299.004,251.509 " />
      <path style={{ fill: '#FFCA96' }} d="M369.067,180.547l-70.063,70.961l70.063,70.961l108.688-62.877c6.288-3.593,6.288-11.677,0-15.27 L369.067,180.547z" />
    </svg>
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md animate-fadeIn rounded-2xl bg-white p-8 shadow-2xl">
            <div className="mb-0 flex w-full flex-col items-center">
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Coming Soon!</h3>
              <p className="text-center text-gray-600">
                We&apos;re working hard to bring you the best experience
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0181f5] to-[#5db2ff] p-8 text-white shadow-2xl lg:p-14">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-docmed-hover opacity-40 blur-2xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-12">
          <div className="flex justify-center">
            <img
              src="/comingsoon.png"
              alt="DocMed mobile app preview"
              className="w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <span className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                Coming Soon to App Store & Google Play
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Revolutionize Your
              <span className="mt-1 block text-white/95">Mobile Experience</span>
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              We&apos;re excited to announce that our innovative mobile application will soon be
              available on both iOS and Android platforms. Getting ready to experience a new level
              of productivity and connectivity right from your smartphone.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={handleButtonClick}
                className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-slate-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-docmed-light"
              >
                <AppleIcon />
                <div className="text-left">
                  <span className="block text-[11px] leading-none text-slate-500">Download on the</span>
                  <span className="block text-sm font-semibold leading-tight">App Store</span>
                </div>
              </button>

              <button
                type="button"
                onClick={handleButtonClick}
                className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-slate-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-docmed-light"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <span className="block text-[11px] leading-none text-slate-500">Get it on</span>
                  <span className="block text-sm font-semibold leading-tight">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `,
        }}
      />
    </section>
  );
}
