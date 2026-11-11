import React, { useState } from 'react';
import Icon from '../../../components/Icon';

function BookingWidget({ doctor, onConfirm }) {
  const { booking } = doctor;
  const [visitType, setVisitType] = useState('clinic');
  const [reason, setReason] = useState(booking.reasons[0].value);
  const [selectedDate, setSelectedDate] = useState(
    booking.dates.find((d) => d.selected)?.label || booking.dates[0].label
  );
  const [selectedSlot, setSelectedSlot] = useState(booking.defaultSlot);

  const modalityLabel = visitType === 'clinic' ? 'Clinic Selected' : 'Virtual Telehealth';

  return (
    <aside className="sticky top-24 lg:col-span-5 xl:col-span-4">
      <div className="flex flex-col gap-6 rounded-2xl bg-surface-container-lowest p-6 shadow-xl sm:p-7">
        <div className="flex items-center justify-between border-b border-surface-container-high pb-4">
          <div>
            <h2 className="text-title text-on-surface">Schedule Appointment</h2>
            <p className="text-caption text-on-surface-variant">
              Reserve slot directly with {doctor.name}
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-tertiary-container/15 px-2.5 py-1 text-label-sm font-semibold text-tertiary">
            <span className="h-2 w-2 rounded-full bg-tertiary" />
            Live Slots
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-between text-label-sm font-semibold text-on-surface">
            <span>Step 1 • Visit Modality</span>
            <span className="text-xs font-normal text-primary">{modalityLabel}</span>
          </label>
          <div className="grid grid-cols-2 gap-1 rounded-xl bg-surface-container-low p-1">
            <button
              type="button"
              onClick={() => setVisitType('clinic')}
              className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-label-md transition-all ${
                visitType === 'clinic'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Icon name="location_on" className="text-base" />
              In-Person
            </button>
            <button
              type="button"
              onClick={() => setVisitType('telehealth')}
              className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-label-md transition-all ${
                visitType === 'telehealth'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Icon name="videocam" className="text-base" />
              Telehealth
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-label-sm font-semibold text-on-surface" htmlFor="visitReason">
            Step 2 • Reason for Consultation
          </label>
          <div className="relative">
            <select
              id="visitReason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="h-11 w-full cursor-pointer appearance-none rounded-lg bg-surface-container-low px-3.5 pr-10 text-body-md text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {booking.reasons.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <Icon
              name="expand_more"
              className="pointer-events-none absolute right-3 top-3 text-lg text-on-surface-variant"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-label-sm font-semibold text-on-surface">
              Step 3 • Select Date &amp; Time
            </label>
            <span className="text-caption text-outline">{booking.monthLabel}</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            {booking.dates.map((item, index) => {
              const active = selectedDate === item.label;
              const isPrevious = index === 0;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => !isPrevious && setSelectedDate(item.label)}
                  disabled={isPrevious}
                  className={`flex flex-col items-center rounded-xl py-2.5 transition-all !outline-none focus:!outline-none focus:!shadow-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    active
                      ? 'bg-primary text-on-primary shadow-md'
                      : isPrevious
                      ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span
                    className={`text-caption ${
                      active ? 'text-on-primary/80' : isPrevious ? 'text-gray-400' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.day}
                  </span>
                  <span className="mt-0.5 text-title font-bold">{item.date}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-2 flex flex-col gap-3">
            {[
              { label: 'Morning', slots: booking.morningSlots },
              { label: 'Afternoon', slots: booking.afternoonSlots },
            ].map((group) => (
              <div key={group.label}>
                <span className="mb-1.5 block text-caption uppercase tracking-wider text-outline">
                  {group.label}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {group.slots.map((slot) => {
                    const active = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`rounded-lg px-3 py-2 text-center text-label-sm transition-all ${
                          active
                            ? 'bg-primary-container font-semibold text-on-primary shadow-sm'
                            : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-surface-container-high pt-2">
          <label className="text-label-sm font-semibold text-on-surface">
            Step 4 • Insurance &amp; Patient Detail
          </label>
          <div className="flex items-center justify-between rounded-xl bg-surface-container-low p-3">
            <div className="flex items-center gap-2.5">
              <Icon name="credit_card" className="text-xl text-primary" />
              <div>
                <p className="text-label-sm font-medium text-on-surface">
                  {booking.insuranceCard.plan}
                </p>
                <p className="text-caption text-on-surface-variant">
                  {booking.insuranceCard.memberId}
                </p>
              </div>
            </div>
            <button type="button" className="text-caption font-semibold text-primary hover:underline">
              Change
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container p-3.5">
          <div className="flex items-center justify-between">
            <span className="text-label-sm text-on-surface">Estimated Insurance Copay</span>
            <span className="text-title font-bold text-tertiary">{booking.copay}</span>
          </div>
          <div className="flex items-center justify-between text-caption text-on-surface-variant">
            <span>Standard Self-Pay Rate</span>
            <span>{booking.selfPay}</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 border-t border-surface-container-high pt-1 text-caption text-on-surface-variant">
            <Icon name="check_circle" className="text-xs text-tertiary" />
            <span>No surprise bills • Protected under No Surprises Act</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() =>
              onConfirm({
                date: selectedDate,
                slot: selectedSlot,
                visitType,
                reason,
              })
            }
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-label-md font-semibold text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-primary-container hover:shadow-none active:scale-[0.99]"
          >
            <Icon name="lock" className="text-lg" />
            <span>Confirm &amp; Reserve Appointment</span>
          </button>
          <div className="flex items-center justify-center gap-1.5 text-center text-caption text-on-surface-variant">
            <Icon name="event_busy" className="text-sm text-outline" />
            <span>Free cancellation up to 24 hours prior to visit.</span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-surface-container-low p-3 text-label-sm text-on-surface-variant">
          <span>Questions for clinic desk?</span>
          <a
            href={booking.clinicPhone.href}
            className="flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            <Icon name="call" className="text-sm" />
            Call Clinic
          </a>
        </div>
      </div>
    </aside>
  );
}

export default BookingWidget;
