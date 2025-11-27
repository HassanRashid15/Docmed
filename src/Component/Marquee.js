import React from 'react';

const Marquee = ({ 
  text = "Emergency Care Available 24/7 ★ Expert Medical Professionals ★ Advanced Medical Technology ★ Comprehensive Health Services ★ Patient-Centered Care ★ Book Your Appointment Today", 
  variant = "navy",
  speed = 10 // Animation duration in seconds (higher = slower)
}) => {
  return (
    <figure 
      className={`marquee marquee--${variant}`} 
      data-text={text}
      style={{ '--marquee-speed': `${speed}s` }}
    >
      <span className="sr-only">{text}</span>
    </figure>
  );
};

export default Marquee;
