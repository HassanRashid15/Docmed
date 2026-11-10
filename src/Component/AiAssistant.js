import React, { useEffect, useRef, useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import {
  HiOutlinePaperClip,
  HiOutlineMicrophone,
  HiOutlineArrowUp,
  HiOutlineTrash,
  HiOutlineLockClosed,
  HiOutlineCalendar,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineSupport,
  HiOutlineCheckCircle,
  HiOutlineExclamation,
  HiOutlineBell,
  HiOutlineDocumentText,
  HiOutlineEye,
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiOutlineX,
} from 'react-icons/hi';
import { LuStethoscope, LuPill, LuSiren, LuActivity, LuHeartPulse } from 'react-icons/lu';
import nav_logo from '../Assets/Images/nav_logo.png';
import patientImg from '../Assets/Images/userImage.png';

const ICON_MAP = {
  attach_file: HiOutlinePaperClip,
  mic: HiOutlineMicrophone,
  arrow_upward: HiOutlineArrowUp,
  delete: HiOutlineTrash,
  close: HiOutlineX,
  lock: HiOutlineLockClosed,
  stethoscope: LuStethoscope,
  ecg_heart: LuHeartPulse,
  monitor_heart: LuActivity,
  medication: LuPill,
  calendar_month: HiOutlineCalendar,
  science: HiOutlineBeaker,
  prescriptions: HiOutlineDocumentText,
  emergency: LuSiren,
  analytics: HiOutlineChartBar,
  support_agent: HiOutlineSupport,
  check_circle: HiOutlineCheckCircle,
  warning: HiOutlineExclamation,
  notification_important: HiOutlineBell,
  calendar_add_on: HiOutlineCalendar,
  edit_calendar: HiOutlineCalendar,
  event_available: HiOutlineCalendar,
  event: HiOutlineCalendar,
  picture_as_pdf: HiOutlineDocumentText,
  visibility: HiOutlineEye,
  videocam: HiOutlineVideoCamera,
  video_camera_front: HiOutlineVideoCamera,
  call: HiOutlinePhone,
  local_pharmacy: LuPill,
  sensors: LuActivity,
};

function Icon({ name, className = '', filled: _filled }) {
  const Cmp = ICON_MAP[name] || LuStethoscope;
  return <Cmp className={`stroke-[1.5] ${className}`} aria-hidden="true" />;
}

const PLACEHOLDER_PROMPTS = [
  'Describe symptoms or ask clinical question...',
  'Ask about mild chest flutter...',
  'Request a prescription refill...',
  'Reschedule my follow-up visit...',
  'Speak with an on-call nurse...',
];

const GREETING_CHIPS = [
  { icon: 'ecg_heart', label: 'Mild chest flutter' },
  { icon: 'medication', label: 'Renew Lisinopril' },
  { icon: 'calendar_month', label: 'Reschedule follow-up' },
  { icon: 'science', label: 'View Lipid Panel' },
];

const FOOTER_CHIPS = [
  { icon: 'stethoscope', label: 'Ask about symptoms' },
  { icon: 'prescriptions', label: 'Refill prescription' },
  { icon: 'emergency', label: 'Find on-call doctor' },
  { icon: 'analytics', label: 'Check Recent Lab Results' },
  { icon: 'medication', label: 'Request Prescription Refill' },
  { icon: 'stethoscope', label: 'Describe Symptoms' },
  { icon: 'calendar_month', label: 'Reschedule Appointment' },
  { icon: 'support_agent', label: 'Speak with On-Call Nurse' },
];

function nowStamp() {
  return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

function matchIntent(text) {
  const t = text.toLowerCase();

  if (
    /(911|emergency|chest pain|can't breathe|cant breathe|severe|stroke|unconscious)/.test(t)
  ) {
    return 'emergency';
  }
  if (/(flutter|palpitation|heart|symptom|chest|dizzy|lightheaded|shortness)/.test(t)) {
    return 'symptoms';
  }
  if (/(lisinopril|refill|prescription|medication|pharmacy|renew)/.test(t)) {
    return 'refill';
  }
  if (/(reschedule|appointment|follow-?up|book|telehealth|slot|calendar)/.test(t)) {
    return 'appointment';
  }
  if (/(lipid|lab|panel|result|cholesterol|ecg|a1c|glucose|blood)/.test(t)) {
    return 'labs';
  }
  if (/(nurse|on-?call|doctor|dispatch|speak with|call)/.test(t)) {
    return 'oncall';
  }
  if (/(telemetry|sensor|pulse log|record|ecg|watch)/.test(t)) {
    return 'telemetry';
  }
  if (/(hello|hi |hey|good morning|good afternoon)/.test(t)) {
    return 'greeting';
  }
  return 'general';
}

function buildReply(intent, userText) {
  const stamp = nowStamp();

  switch (intent) {
    case 'emergency':
      return {
        paragraphs: [
          'If you are experiencing severe chest pain, trouble breathing, sudden weakness, or think this is an emergency, please dial 911 now.',
          <span className="text-on-surface-variant">
            DocMed AI is not an emergency service. I can still connect you with on-call triage
            after you are safe.
          </span>,
        ],
        chips: [
          { icon: 'emergency', label: 'Find on-call doctor' },
          { icon: 'support_agent', label: 'Speak with On-Call Nurse' },
        ],
        banner: { tone: 'error', icon: 'emergency', label: 'Emergency Bypass Active' },
      };

    case 'symptoms':
      return {
        paragraphs: [
          <>
            Thanks for reporting that, Eleanor. Transient heart flutters after exertion can be
            common, but with your cardiac history under <strong>Dr. Julian Hayes</strong> we should
            evaluate carefully.
          </>,
          <span className="text-on-surface-variant">
            Are you also feeling shortness of breath, left arm pain, lightheadedness, or chest
            pressure right now?
          </span>,
        ],
        chips: [
          { icon: 'check_circle', label: 'No other symptoms' },
          { icon: 'warning', label: 'Yes, chest pressure' },
          { icon: 'monitor_heart', label: 'Record Telemetry (30s)' },
        ],
        banner: { tone: 'primary', icon: 'notification_important', label: 'Triage Recommendation' },
        cards: ['telemetry', 'telehealth'],
        status: 'DocMed AI is reviewing recent telemetry logs...',
      };

    case 'refill':
      return {
        paragraphs: [
          <>
            I found an active order for <strong>Lisinopril 10mg</strong> (Rx #7731940) with refill
            eligibility at CVS Pharmacy #4829.
          </>,
          <span className="text-on-surface-variant">
            I can fast-track an e-refill to pharmacy now and notify Dr. Hayes&apos; team for
            asynchronous review.
          </span>,
        ],
        chips: [
          { icon: 'prescriptions', label: 'Fast-Track Refill' },
          { icon: 'medication', label: 'Manage Metoprolol' },
          { icon: 'support_agent', label: 'Speak with On-Call Nurse' },
        ],
        cards: ['refill'],
      };

    case 'appointment':
      return {
        paragraphs: [
          <>
            Your next cardiology follow-up with <strong>Dr. Julian Hayes, MD, FACC</strong> is
            currently set for Wed, Oct 24 • 2:30 PM EDT.
          </>,
          <span className="text-on-surface-variant">
            I can reschedule, keep it, or book a same-day priority telehealth slot.
          </span>,
        ],
        chips: [
          { icon: 'calendar_add_on', label: 'Book Telehealth with Dr. Hayes' },
          { icon: 'edit_calendar', label: 'Reschedule Appointment' },
          { icon: 'event_available', label: 'Keep current visit' },
        ],
        cards: ['telehealth'],
      };

    case 'labs':
      return {
        paragraphs: [
          <>
            Here are your latest reviewed results from DocMed Central Pathology (Oct 10, 2025).
          </>,
          <span className="text-on-surface-variant">
            Lipid Profile: Total Cholesterol 168 mg/dL • LDL 78 mg/dL — marked Normal by Dr.
            Jenkins.
          </span>,
        ],
        chips: [
          { icon: 'picture_as_pdf', label: 'View Lipid Panel PDF' },
          { icon: 'science', label: 'Open Metabolic Panel' },
          { icon: 'visibility', label: 'Examine ECG' },
        ],
        cards: ['labs'],
      };

    case 'oncall':
      return {
        paragraphs: [
          <>
            Connecting you with DocMed on-call coverage monitored by{' '}
            <strong>Dr. Sarah Jenkins, MD</strong>. Typical nurse reply window is under 2 hours;
            priority cardiology dispatch is available today.
          </>,
          <span className="text-on-surface-variant">
            Choose who you want routed to and I will open a secure HIPAA thread.
          </span>,
        ],
        chips: [
          { icon: 'support_agent', label: 'Speak with On-Call Nurse' },
          { icon: 'emergency', label: 'Find on-call doctor' },
          { icon: 'videocam', label: 'Join Room' },
        ],
        cards: ['oncall'],
      };

    case 'telemetry':
      return {
        paragraphs: [
          'Starting a single-lead 30-second pulse capture from your synced wearable stream.',
          <span className="text-on-surface-variant">
            Hold still. I will attach the reading to Dr. Hayes&apos; EHR inbox when complete.
          </span>,
        ],
        chips: [
          { icon: 'monitor_heart', label: 'Record Telemetry (30s)' },
          { icon: 'calendar_add_on', label: 'Book Telehealth with Dr. Hayes' },
        ],
        cards: ['telemetry'],
        status: 'Capturing wearable telemetry… 0/30s',
      };

    case 'greeting':
      return {
        paragraphs: [
          <>
            Hello <strong>Eleanor</strong> — I&apos;m here and reviewing your active care file.
          </>,
          <span className="text-on-surface-variant">
            I can triage symptoms, refill meds, check labs, or escalate to your care team.
          </span>,
        ],
        chips: GREETING_CHIPS,
      };

    default:
      return {
        paragraphs: [
          <>
            Understood. I logged “{userText}” to your encrypted session and routed a summary to{' '}
            <strong>Dr. Julian Hayes</strong>&apos; care dashboard.
          </>,
          <span className="text-on-surface-variant">
            A nurse coordinator typically reviews within 15 minutes. Meanwhile, pick a quick action
            below or tell me more.
          </span>,
        ],
        chips: GREETING_CHIPS,
        metaHint: stamp,
      };
  }
}

function AiAvatar() {
  return (
    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-on-primary shadow-sm ring-1 ring-primary/15">
      <img src={nav_logo} alt="" className="h-5 w-auto object-contain" />
    </div>
  );
}

function PatientAvatar() {
  return (
    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-fixed shadow-sm ring-1 ring-primary/20">
      <img src={patientImg} alt="Patient" className="h-full w-full object-cover" />
    </div>
  );
}

function ActionCards({ cards = [], onAction }) {
  return (
    <div className="space-y-2.5">
      {cards.includes('telemetry') && (
        <div className="space-y-2.5 rounded-xl bg-surface-container-lowest p-3.5 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
                <Icon name="monitor_heart" className="text-xl" />
              </div>
              <div className="min-w-0">
                <h4 className="font-label-md text-label-md text-on-surface">Single-Lead Pulse Log</h4>
                <p className="font-caption text-caption text-on-surface-variant">
                  Stream instant 30-sec sensor reading
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-tertiary/10 px-2 py-0.5 font-caption text-caption font-semibold text-tertiary">
              Sensor Ready
            </span>
          </div>
          <button
            type="button"
            onClick={() => onAction('Record Telemetry (30s)')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container px-3 py-2 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-high"
          >
            <Icon name="sensors" className="text-sm" />
            Record Telemetry (30s)
          </button>
        </div>
      )}

      {cards.includes('telehealth') && (
        <div className="space-y-2.5 rounded-xl bg-surface-container-lowest p-3.5 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon name="video_camera_front" className="text-xl" />
              </div>
              <div className="min-w-0">
                <h4 className="font-label-md text-label-md text-on-surface">
                  Priority Telehealth Slot
                </h4>
                <p className="font-caption text-caption text-on-surface-variant">
                  Dr. Hayes has an opening today
                </p>
              </div>
            </div>
            <span className="shrink-0 font-label-md text-label-md font-semibold text-primary">
              Today 2:30 PM
            </span>
          </div>
          <button
            type="button"
            onClick={() => onAction('Book Telehealth with Dr. Hayes')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 font-label-md text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container"
          >
            <Icon name="calendar_add_on" className="text-sm" />
            Book Telehealth with Dr. Hayes
          </button>
        </div>
      )}

      {cards.includes('refill') && (
        <div className="space-y-2.5 rounded-xl bg-surface-container-lowest p-3.5 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">Lisinopril 10mg</h4>
              <p className="font-caption text-caption text-on-surface-variant">
                1 tablet daily • 12 days remaining • CVS #4829
              </p>
            </div>
            <span className="shrink-0 whitespace-nowrap rounded-full bg-error-container px-2.5 py-0.5 font-caption text-caption font-semibold text-on-error-container">
              Refill Alert
            </span>
          </div>
          <button
            type="button"
            onClick={() => onAction('Fast-Track Refill')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 font-label-md text-label-md text-on-primary transition-all hover:bg-primary-container"
          >
            <Icon name="prescriptions" className="text-sm" />
            Fast-Track Refill
          </button>
        </div>
      )}

      {cards.includes('labs') && (
        <div className="space-y-2 rounded-xl bg-surface-container-lowest p-3.5 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">Lipid Profile Panel</h4>
              <p className="font-caption text-caption text-on-surface-variant">
                Oct 10, 2025 • Reviewed by Dr. Jenkins
              </p>
            </div>
            <span className="rounded-full bg-tertiary-container/15 px-2 py-0.5 font-caption text-caption font-semibold text-tertiary">
              Normal
            </span>
          </div>
          <div className="flex justify-between font-caption text-caption text-on-surface-variant">
            <span>Total Chol 168</span>
            <span>LDL 78</span>
          </div>
          <button
            type="button"
            onClick={() => onAction('View Lipid Panel PDF')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container px-3 py-2 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-high"
          >
            <Icon name="picture_as_pdf" className="text-sm" />
            View PDF
          </button>
        </div>
      )}

      {cards.includes('oncall') && (
        <div className="space-y-2.5 rounded-xl bg-surface-container-lowest p-3.5 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-error-container text-error">
              <Icon name="emergency" className="text-xl" />
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface">On-Call Dispatch</h4>
              <p className="font-caption text-caption text-on-surface-variant">
                Cardiology coverage • Dr. Jenkins supervising
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onAction('Find on-call doctor')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-error px-3 py-2 font-label-md text-label-md text-on-error transition-colors hover:bg-error/90"
          >
            <Icon name="call" className="text-sm" />
            Request On-Call Callback
          </button>
        </div>
      )}
    </div>
  );
}

function BotBubble({ msg, onChip, onAction }) {
  return (
    <div className="flex max-w-[95%] items-start gap-2.5">
      <AiAvatar />
      <div className="min-w-0 flex-1 space-y-2.5">
        <div className="relative space-y-2 rounded-2xl rounded-tl-md bg-surface-container-lowest p-3.5 font-body-md text-body-md text-on-surface shadow-[0_2px_8px_rgba(11,28,48,0.10)]">
          <span
            aria-hidden="true"
            className="absolute -left-1.5 top-3 h-0 w-0 border-y-[6px] border-r-[7px] border-y-transparent border-r-surface-container-lowest"
          />
          {msg.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {msg.banner && (
          <div
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2.5 ${
              msg.banner.tone === 'error'
                ? 'bg-error-container text-on-error-container'
                : 'bg-surface-container-high text-on-surface'
            }`}
          >
            <Icon
              name={msg.banner.icon}
              className={`text-sm ${msg.banner.tone === 'error' ? '' : 'text-primary'}`}
            />
            <span className="font-label-md text-label-md">{msg.banner.label}</span>
          </div>
        )}

        {msg.cards?.length > 0 && <ActionCards cards={msg.cards} onAction={onAction} />}

        {msg.chips?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {msg.chips.map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => onChip(chip.label)}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 font-caption text-caption text-primary transition-colors hover:bg-primary/10"
              >
                <Icon name={chip.icon} className="text-xs" />
                {chip.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function buildActionConfirmation(action) {
  const a = action.toLowerCase();

  if (a.includes('telemetry') || a.includes('record')) {
    return {
      paragraphs: [
        'Telemetry capture complete — sinus rhythm average 78 BPM with no sustained arrhythmia detected in this 30-second window.',
        <span className="text-on-surface-variant">
          Reading attached to your chart and flagged for Dr. Hayes. Would you like a same-day
          telehealth slot?
        </span>,
      ],
      chips: [
        { icon: 'calendar_add_on', label: 'Book Telehealth with Dr. Hayes' },
        { icon: 'support_agent', label: 'Speak with On-Call Nurse' },
      ],
      cards: ['telehealth'],
    };
  }

  if (a.includes('book telehealth') || a.includes('keep current')) {
    return {
      paragraphs: [
        <>
          Confirmed. Priority telehealth with <strong>Dr. Julian Hayes</strong> is reserved for{' '}
          <strong>Today 2:30 PM</strong>. A Join Room link will appear in Patient Portal 10 minutes
          before start.
        </>,
        <span className="text-on-surface-variant">
          Calendar invite and SMS reminder were queued to your verified phone.
        </span>,
      ],
      chips: [
        { icon: 'videocam', label: 'Join Room' },
        { icon: 'edit_calendar', label: 'Reschedule Appointment' },
      ],
    };
  }

  if (a.includes('reschedule')) {
    return {
      paragraphs: [
        'I opened reschedule options for your cardiology visit. Next available in-clinic openings: Thu 10:30 AM, Fri 9:00 AM, or keep telehealth today at 2:30 PM.',
      ],
      chips: [
        { icon: 'calendar_add_on', label: 'Book Telehealth with Dr. Hayes' },
        { icon: 'event', label: 'Keep current visit' },
      ],
      cards: ['telehealth'],
    };
  }

  if (a.includes('refill') || a.includes('fast-track') || a.includes('metoprolol')) {
    return {
      paragraphs: [
        <>
          Refill request submitted to CVS #4829 and logged in Epic. Expected ready window:{' '}
          <strong>2–4 hours</strong> after pharmacist verification.
        </>,
        <span className="text-on-surface-variant">
          Dr. Hayes will receive an asynchronous renewal notice if clinical review is required.
        </span>,
      ],
      chips: [
        { icon: 'local_pharmacy', label: 'Track Pharmacy Status' },
        { icon: 'science', label: 'View Lipid Panel' },
      ],
    };
  }

  if (a.includes('lipid') || a.includes('pdf') || a.includes('metabolic') || a.includes('ecg')) {
    return {
      paragraphs: [
        'I queued the selected diagnostic document to your secure portal downloads and emailed a time-limited link.',
        <span className="text-on-surface-variant">
          Clinician note remains: “Electrolytes and kidney panels in target window.” — Dr. Jenkins
        </span>,
      ],
      chips: [
        { icon: 'science', label: 'Check Recent Lab Results' },
        { icon: 'stethoscope', label: 'Ask about symptoms' },
      ],
      cards: ['labs'],
    };
  }

  if (a.includes('nurse') || a.includes('on-call') || a.includes('join room') || a.includes('callback')) {
    return {
      paragraphs: [
        <>
          Secure thread opened with DocMed on-call. <strong>Dr. Jenkins</strong> is supervising;
          a nurse navigator will reply in this chat.
        </>,
        <span className="text-on-surface-variant">
          Average callback time right now: under 12 minutes for priority cardiac flags.
        </span>,
      ],
      chips: [
        { icon: 'stethoscope', label: 'Describe Symptoms' },
        { icon: 'calendar_add_on', label: 'Book Telehealth with Dr. Hayes' },
      ],
    };
  }

  if (a.includes('no other') || a.includes('chest pressure')) {
    return {
      paragraphs: [
        a.includes('pressure')
          ? 'Chest pressure with palpitations elevates triage priority. Please avoid exertion and consider urgent evaluation.'
          : 'Good — no red-flag companions reported. We will still capture a quick telemetry log and offer a same-day check-in.',
        <span className="text-on-surface-variant">
          Choose an action so I can update Dr. Hayes&apos; protocol pathway.
        </span>,
      ],
      banner: {
        tone: a.includes('pressure') ? 'error' : 'primary',
        icon: a.includes('pressure') ? 'emergency' : 'notification_important',
        label: a.includes('pressure') ? 'Urgent Cardiac Flag' : 'Triage Recommendation',
      },
      cards: a.includes('pressure') ? ['oncall', 'telehealth'] : ['telemetry', 'telehealth'],
      chips: [
        { icon: 'monitor_heart', label: 'Record Telemetry (30s)' },
        { icon: 'emergency', label: 'Find on-call doctor' },
      ],
    };
  }

  return buildReply(matchIntent(action), action);
}

function createSessionStart() {
  return [
    {
      id: `stamp-${Date.now()}`,
      type: 'stamp',
      text: `${nowStamp()} • Encrypted Session Initiated`,
    },
    {
      id: `greeting-${Date.now()}`,
      type: 'bot',
      paragraphs: [
        <>
          Hello <strong>Eleanor</strong>! I&apos;m your DocMed AI Clinical Health Companion.
        </>,
        <span className="text-on-surface-variant">
          I can help triage acute symptoms, coordinate prescriptions with your cardiologist, review
          lab findings, or request priority on-call dispatch. How are you feeling right now?
        </span>,
      ],
      chips: GREETING_CHIPS,
    },
  ];
}

function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [messages, setMessages] = useState(createSessionStart);
  const [unread, setUnread] = useState(1);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [waveLevels, setWaveLevels] = useState([0.35, 0.55, 0.85, 0.55, 0.35]);
  const messagesRef = useRef(null);
  const replyTimer = useRef(null);
  const resetTimer = useRef(null);
  const recognitionRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const rafRef = useRef(null);
  const baseInputRef = useRef('');
  const finalTranscriptRef = useRef('');

  const [typedPlaceholder] = useTypewriter({
    words: PLACEHOLDER_PROMPTS,
    loop: 0,
    typeSpeed: 55,
    deleteSpeed: 35,
    delaySpeed: 1800,
  });

  useEffect(() => {
    if (!isOpen || !messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    if (input || inputFocused) return undefined;
    const id = window.setInterval(() => setCursorVisible((v) => !v), 530);
    return () => window.clearInterval(id);
  }, [input, inputFocused]);

  useEffect(
    () => () => {
      if (replyTimer.current) window.clearTimeout(replyTimer.current);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.onend = null;
          recognitionRef.current.stop();
        } catch (_) {
          /* ignore */
        }
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    },
    []
  );

  const stopMicVisual = () => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    setWaveLevels([0.35, 0.55, 0.85, 0.55, 0.35]);
  };

  const startMicVisual = async () => {
    if (!navigator.mediaDevices?.getUserMedia) return;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
    mediaStreamRef.current = stream;

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioCtx();
    audioContextRef.current = audioContext;
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }

    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.72;
    source.connect(analyser);
    analyserRef.current = analyser;

    const data = new Uint8Array(analyser.frequencyBinCount);
    const bands = 5;

    const tick = () => {
      if (!analyserRef.current) return;
      analyserRef.current.getByteFrequencyData(data);
      const chunk = Math.floor(data.length / bands);
      const nextLevels = Array.from({ length: bands }, (_, i) => {
        let sum = 0;
        const start = i * chunk;
        for (let j = start; j < start + chunk; j += 1) sum += data[j];
        const avg = sum / chunk / 255;
        return Math.max(0.18, Math.min(1, avg * 1.65));
      });
      setWaveLevels(nextLevels);
      rafRef.current = window.requestAnimationFrame(tick);
    };

    tick();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.onend = null;
        recognitionRef.current.stop();
      } catch (_) {
        /* ignore */
      }
      recognitionRef.current = null;
    }
    stopMicVisual();
    finalTranscriptRef.current = '';
    setIsListening(false);
  };

  const startListening = async () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    baseInputRef.current = input.trim();
    finalTranscriptRef.current = '';
    setInputFocused(true);
    setIsListening(true);

    try {
      await startMicVisual();
    } catch (_) {
      // Mic permission denied — still attempt speech recognition if available.
    }

    if (!SpeechRecognition) {
      window.setTimeout(() => stopListening(), 2500);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = navigator.language || 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onerror = (event) => {
      if (event.error === 'aborted' || event.error === 'no-speech') return;
      stopListening();
    };

    recognition.onend = () => {
      // Keep listening while user still has dictation active.
      if (!recognitionRef.current) return;
      try {
        recognitionRef.current.start();
      } catch (_) {
        stopListening();
      }
    };

    recognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const chunk = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscriptRef.current = `${finalTranscriptRef.current} ${chunk}`.trim();
        } else {
          interim += chunk;
        }
      }

      const pieces = [
        baseInputRef.current,
        finalTranscriptRef.current,
        interim.trim(),
      ].filter(Boolean);
      setInput(pieces.join(' ').replace(/\s+/g, ' ').trim());
    };

    try {
      recognition.start();
    } catch (_) {
      stopListening();
    }
  };

  const toggleListening = () => {
    if (isTyping || isResetting) return;
    if (isListening) stopListening();
    else startListening();
  };

  const openAssistant = () => {
    setIsOpen(true);
    setUnread(0);
  };

  const closeAssistant = () => {
    stopListening();
    setIsOpen(false);
  };

  const resetAndCloseChat = () => {
    if (isResetting) return;
    stopListening();
    setInput('');
    setInputFocused(false);
    setIsTyping(false);
    if (replyTimer.current) window.clearTimeout(replyTimer.current);

    setIsResetting(true);
    setMessages([
      {
        id: `farewell-${Date.now()}`,
        type: 'bot',
        paragraphs: [
          <>
            Thanks for reaching out, <strong>Eleanor</strong>. Your DocMed care team is always
            here when you need us.
          </>,
          <span className="text-on-surface-variant">
            This chat has been cleared. Take care — closing now.
          </span>,
        ],
      },
    ]);

    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      setMessages(createSessionStart());
      setIsResetting(false);
      setIsOpen(false);
      setUnread(0);
    }, 5000);
  };

  const pushBotReply = (reply) => {
    setIsTyping(true);
    if (replyTimer.current) window.clearTimeout(replyTimer.current);

    replyTimer.current = window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => {
        const next = [...prev.filter((m) => m.type !== 'status')];
        next.push({
          id: `bot-${Date.now()}`,
          type: 'bot',
          paragraphs: reply.paragraphs,
          chips: reply.chips,
          banner: reply.banner,
          cards: reply.cards,
        });
        if (reply.status) {
          next.push({
            id: `status-${Date.now()}`,
            type: 'status',
            text: reply.status,
          });
        }
        return next;
      });
    }, 700 + Math.random() * 500);
  };

  const sendUserText = (text, { asAction = false } = {}) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping || isResetting) return;

    openAssistant();

    setMessages((prev) => [
      ...prev.filter((m) => m.type !== 'status'),
      {
        id: `user-${Date.now()}`,
        type: 'user',
        text: trimmed,
        meta: `${nowStamp()} • ${asAction ? 'Action confirmed' : 'Read by AI Triage Engine'}`,
      },
    ]);

    const reply = asAction
      ? buildActionConfirmation(trimmed)
      : buildReply(matchIntent(trimmed), trimmed);

    pushBotReply(reply);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const value = input;
    setInput('');
    sendUserText(value);
  };

  const handleChip = (label) => sendUserText(label);
  const handleAction = (label) => sendUserText(label, { asAction: true });

  const lastUserText = [...messages].reverse().find((m) => m.type === 'user')?.text || '';
  const headerDescription = isTyping
    ? 'Analyzing your message…'
    : !lastUserText
    ? 'Ready to triage symptoms & care requests'
    : matchIntent(lastUserText) === 'symptoms'
    ? 'Cardiac symptom triage in progress'
    : matchIntent(lastUserText) === 'refill'
    ? 'Pharmacy refill coordination active'
    : matchIntent(lastUserText) === 'appointment'
    ? 'Scheduling your next visit'
    : matchIntent(lastUserText) === 'labs'
    ? 'Pulling latest diagnostic results'
    : matchIntent(lastUserText) === 'oncall'
    ? 'Connecting you with on-call care'
    : matchIntent(lastUserText) === 'emergency'
    ? 'Emergency guidance prioritized'
    : matchIntent(lastUserText) === 'telemetry'
    ? 'Wearable telemetry sync running'
    : 'Secure clinical chat session active';

  return (
    <aside className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="pointer-events-auto mb-3 flex h-[min(640px,calc(100vh-7.5rem))] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_20px_35px_-5px_rgba(11,28,48,0.18),0_8px_16px_-6px_rgba(11,28,48,0.08)]">
          <div className="flex shrink-0 items-center justify-between gap-2 bg-primary px-4 py-3 text-on-primary">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="relative shrink-0">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-on-primary shadow-inner">
                  <img src={nav_logo} alt="" className="h-7 w-auto object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-tertiary" />
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-title text-title leading-tight text-on-primary mb-0.5">
                  DocMed AI Navigator
                </h3>
                <p className="m-0 truncate font-caption text-caption text-primary-fixed">
                  {headerDescription}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                type="button"
                onClick={resetAndCloseChat}
                disabled={isResetting}
                title="Delete & reset chat"
                className="rounded-lg p-1.5 text-on-primary transition-colors hover:bg-primary-container disabled:opacity-60"
              >
                <Icon name="delete" className="text-lg" />
              </button>
              <button
                type="button"
                onClick={closeAssistant}
                disabled={isResetting}
                title="Close"
                className="rounded-lg p-1.5 text-on-primary transition-colors hover:bg-primary-container disabled:opacity-60"
              >
                <Icon name="close" className="text-lg" />
              </button>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-2 bg-surface-container px-3.5 py-1.5 font-caption text-caption text-on-surface-variant">
            <div className="flex min-w-0 items-center gap-1.5">
              <Icon name="lock" filled className="shrink-0 text-xs text-tertiary" />
              <span className="truncate">End-to-End Encrypted ePHI Session</span>
            </div>
            <span className="shrink-0 font-medium text-error">Not for 911 Emergencies</span>
          </div>

          <div
            ref={messagesRef}
            className="min-h-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden bg-surface/50 p-4 [transform:translateZ(0)]"
          >
            {messages.map((msg) => {
              if (msg.type === 'stamp') {
                return (
                  <div key={msg.id} className="flex justify-center">
                    <span className="rounded-full bg-surface-container px-3 py-1 font-caption text-caption text-on-surface-variant">
                      {msg.text}
                    </span>
                  </div>
                );
              }

              if (msg.type === 'user') {
                return (
                  <div key={msg.id} className="flex flex-col items-end space-y-1">
                    <div className="flex max-w-[95%] items-start justify-end gap-2.5">
                      <div className="relative min-w-0 rounded-2xl rounded-tr-md bg-primary p-3.5 font-body-md text-body-md text-on-primary shadow-[0_2px_8px_rgba(11,28,48,0.14)]">
                        <span
                          aria-hidden="true"
                          className="absolute -right-1.5 top-3 h-0 w-0 border-y-[6px] border-l-[7px] border-y-transparent border-l-primary"
                        />
                        {msg.text}
                      </div>
                      <PatientAvatar />
                    </div>
                    <span className="pr-10 font-caption text-caption text-on-surface-variant">
                      {msg.meta}
                    </span>
                  </div>
                );
              }

              if (msg.type === 'status') {
                return (
                  <div
                    key={msg.id}
                    className="flex items-center gap-2 px-2 py-1 font-caption text-caption text-on-surface-variant"
                  >
                    <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
                    <span>{msg.text}</span>
                  </div>
                );
              }

              return (
                <BotBubble key={msg.id} msg={msg} onChip={handleChip} onAction={handleAction} />
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2.5">
                <AiAvatar />
                <div className="relative rounded-2xl rounded-tl-md bg-surface-container-lowest px-3.5 py-3 shadow-[0_2px_8px_rgba(11,28,48,0.10)]">
                  <span
                    aria-hidden="true"
                    className="absolute -left-1.5 top-3 h-0 w-0 border-y-[6px] border-r-[7px] border-y-transparent border-r-surface-container-lowest"
                  />
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="shrink-0 space-y-2 border-t border-surface-container bg-surface-container-lowest p-3">
            <div className="flex items-center gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FOOTER_CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  disabled={isTyping}
                  onClick={() => handleChip(chip.label)}
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 font-caption text-caption text-primary transition-colors hover:bg-primary/10 disabled:opacity-50"
                >
                  <Icon name={chip.icon} className="text-xs" />
                  {chip.label}
                </button>
              ))}
            </div>

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex h-11 w-full items-center gap-0.5 rounded-full border border-outline-variant/70 bg-surface-container-low px-1.5 transition-colors focus-within:border-primary focus-within:bg-surface-container-lowest">
                <button
                  type="button"
                  title="Attach document"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                >
                  <Icon name="attach_file" className="text-lg" />
                </button>
                <button
                  type="button"
                  title={isListening ? 'Stop dictation' : 'Dictate'}
                  aria-pressed={isListening}
                  onClick={toggleListening}
                  disabled={isTyping}
                  className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors disabled:opacity-50 ${
                    isListening
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                  }`}
                >
                  {isListening ? (
                    <span className="flex h-5 items-center gap-[2px]" aria-hidden="true">
                      {waveLevels.map((level, index) => (
                        <span
                          key={index}
                          className="voice-wave-bar voice-wave-bar--live"
                          style={{ transform: `scaleY(${level})` }}
                        />
                      ))}
                    </span>
                  ) : (
                    <Icon name="mic" className="text-lg" />
                  )}
                </button>

                <div className="relative min-w-0 flex-1">
                  {!input && !inputFocused && !isListening && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex items-center truncate px-1 font-body-md text-body-md text-outline"
                    >
                      {typedPlaceholder}
                      <span
                        className={`ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-px bg-primary ${
                          cursorVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </span>
                  )}
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      if (isListening) {
                        baseInputRef.current = e.target.value;
                        finalTranscriptRef.current = '';
                      }
                    }}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    disabled={isTyping}
                    placeholder={
                      isListening
                        ? 'Listening… translating speech to text'
                        : inputFocused && !input
                        ? 'Describe symptoms or ask clinical question...'
                        : ''
                    }
                    className="h-8 w-full border-0 bg-transparent px-1 font-body-md text-body-md leading-8 text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  title="Send"
                  disabled={isTyping || !input.trim()}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary transition-all hover:bg-primary-container disabled:opacity-50"
                >
                  <Icon name="arrow_upward" className="text-base" />
                </button>
              </div>
            </form>

            <p className="px-1 text-center font-caption text-caption text-on-surface-variant">
              DocMed AI assists clinical decision-making under MD review. In critical emergencies,
              dial <strong>911</strong> immediately.
            </p>
          </div>
        </div>
      )}

      <div className="pointer-events-auto relative flex flex-col items-end">
        <button
          type="button"
          onClick={() => (isOpen ? closeAssistant() : openAssistant())}
          aria-label="DocMed AI Assistant — Online • Dr. Jenkins MD"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-on-primary"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-fixed opacity-40" />
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-on-primary shadow-sm">
            <img src={nav_logo} alt="" className="h-7 w-auto object-contain" />
          </div>
          <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-tertiary" />
          {unread > 0 && (
            <span className="absolute -left-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-error font-caption text-caption font-bold text-on-error">
              {unread}
            </span>
          )}

          <span className="pointer-events-none absolute bottom-full right-0 z-50 mb-3 hidden whitespace-nowrap rounded-lg bg-on-surface px-3 py-1.5 text-left shadow-lg group-hover:block">
            <span className="block font-label-md text-label-md font-semibold text-surface">
              DocMed AI Assistant
            </span>
            <span
              aria-hidden="true"
              className="absolute right-5 top-full h-0 w-0 border-x-[6px] border-t-[7px] border-x-transparent border-t-on-surface"
            />
          </span>
        </button>
      </div>
    </aside>
  );
}

export default AiAssistant;
