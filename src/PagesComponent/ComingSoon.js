import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

useEffect(() => {
  if (showPopup) {
    // Save current scroll position
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
    
    // Lock body scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Restore body scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Restore scroll position using requestAnimationFrame for smoother transition
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
      });
    };
  }
}, [showPopup, scrollPosition]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
    
    // Auto hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const AppleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 305 305" className="absolute left-3 top-1/2 transform -translate-y-1/2">
      <g>
        <path d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008C78.894,73.643,54.298,88.535,40.738,112.119z" fill="#2e2e2e"/>
        <path d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z" fill="#2e2e2e"/>
      </g>
    </svg>
  );

  const GooglePlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="absolute left-3 top-1/2 transform -translate-y-1/2">
      <polygon style={{fill:"#5CDADD"}} points="29.53,0 29.53,251.509 29.53,512 299.004,251.509 "/>
      <polygon style={{fill:"#BDECC4"}} points="369.067,180.547 262.175,119.467 29.53,0 299.004,251.509 "/>
      <polygon style={{fill:"#DC68A1"}} points="29.53,512 29.53,512 262.175,383.551 369.067,322.47 299.004,251.509 "/>
      <path style={{fill:"#FFCA96"}} d="M369.067,180.547l-70.063,70.961l70.063,70.961l108.688-62.877c6.288-3.593,6.288-11.677,0-15.27 L369.067,180.547z"/>
    </svg>
  );

  return (
    <div className="flex flex-col">
      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 animate-fadeIn">
            <div className="flex justify-between items-center mb-0">
              <div className="flex items-center flex-col w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
                <p className="text-gray-600 text-center">We're working hard to bring you the best experience</p>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Mobile App Images with Additional Image */}
          <div className="flex justify-center items-center h-full">
            <div className="relative w-full">
              {/* Floating Image Card */}
              <div className="w-full">
                <div className="relative">
                  <img 
                    src="/comingsoon.png"
                    alt="App Interface Preview"
                    className="w-full h-full object-cover rounded-xl mb-0"
                  />
                </div>
              </div>
        
              {/* Bottom Floating Image - Mobile View */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
                <div className="bg-white rounded-2xl p-4 shadow-2xl w-56">
                  <div className="relative">
                    <img 
                      src="/comingsoon.png"
                      alt="App Interface Preview"
                      className="w-full h-40 object-cover rounded-xl mb-3"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-purple-600">Preview</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-sm">Beautiful Interface</h4>
                    <p className="text-xs text-gray-600">Modern design that makes every interaction delightful.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Description */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Coming Soon to App Store & Google Play
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Revolutionize Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Mobile Experience
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We're excited to announce that our innovative mobile application will soon be available on both iOS and Android platforms. 
              Getting ready to experience a new level of productivity and connectivity right from your smartphone.
            </p>
            
            {/* App Store & Play Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-0">
              {/* App Store button */}
              <button 
                onClick={handleButtonClick}
                className="relative inline-flex items-center px-8 py-2 pl-14 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-all duration-250 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                role="button"
              >
                <AppleIcon />
                <div className="text-left">
                  <span className="block text-xs text-gray-500">Download on the</span>
                  <span className="block text-lg font-semibold text-gray-900">App Store</span>
                </div>
              </button>

              {/* Google Play button */}
              <button 
                onClick={handleButtonClick}
                className="relative inline-flex items-center px-8 py-2 pl-14 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-all duration-250 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                role="button"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <span className="block text-xs text-gray-500">Download on the</span>
                  <span className="block text-lg font-semibold text-gray-900">Google Play</span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Animation styles as inline style */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
        `
      }} />
    </div>
  );
}
