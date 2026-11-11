import React, { useState } from 'react';
import Icon from '../../../components/Icon';
import { MESSAGING } from '../data';

function SecureMessaging() {
  const [message, setMessage] = useState('');

  return (
    <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={MESSAGING.doctorImage}
              alt={MESSAGING.doctorName}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-tertiary ring-2 ring-surface-container-lowest" />
          </div>
          <div>
            <h3 className="font-title text-title text-on-surface">{MESSAGING.doctorName}</h3>
            <p className="font-caption text-caption font-medium text-tertiary">{MESSAGING.status}</p>
          </div>
        </div>
        <button
          type="button"
          className="rounded-lg p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container-high"
        >
          <Icon name="call" className="text-xl" />
        </button>
      </div>

      <div className="space-y-2 rounded-xl bg-surface-container-low p-4">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm font-semibold text-primary">
            {MESSAGING.sender}
          </span>
          <span className="font-caption text-caption text-on-surface-variant">{MESSAGING.time}</span>
        </div>
        <p className="font-body-md text-body-md text-on-surface">&ldquo;{MESSAGING.message}&rdquo;</p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-xl bg-surface-container-low p-1.5">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a secure message to your doctor..."
            className="flex-1 bg-transparent px-3 py-2 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
          />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5 text-on-primary transition-all hover:bg-primary-container"
          >
            <Icon name="send" className="text-lg" />
          </button>
        </div>
        <div className="flex items-center justify-between px-1">
          <span className="flex items-center gap-1 font-caption text-caption text-on-surface-variant">
            <Icon name="lock" className="text-sm text-tertiary" />
            HIPAA Compliant 256-bit Encrypted
          </span>
          <button
            type="button"
            className="font-caption text-caption font-semibold text-primary hover:underline"
          >
            Attach Document
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecureMessaging;
