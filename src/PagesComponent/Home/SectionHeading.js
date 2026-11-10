import React from 'react';

function SectionHeading({ watermark, label, title }) {
  return (
    <div
      className="relative mx-auto mb-10 mt-16 flex w-full max-w-3xl flex-col items-center justify-center px-4 text-center md:mt-20"
      data-aos="fade-up"
    >
      <h6 className="pointer-events-none absolute left-1/2 top-[-48px] z-0 min-w-full -translate-x-1/2 select-none bg-gradient-to-b from-[#5db2ff] to-transparent bg-clip-text text-[44px] font-bold leading-none text-transparent md:top-[-62px] md:text-[68px] lg:top-[-78px] lg:text-[118px]">
        {watermark}
      </h6>
      {label ? (
        <h4 className="relative z-[1] mb-0 text-xl font-semibold leading-[30px] text-slate-800">
          {label}
        </h4>
      ) : null}
      <h5 className="relative z-[1] mb-4 mt-[-0.6rem] text-[30px] font-semibold capitalize leading-[40px] text-slate-900 md:mt-[25px] md:text-[48px] md:leading-[58px]">
        {title}
      </h5>
    </div>
  );
}

export default SectionHeading;
