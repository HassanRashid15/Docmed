import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import {
  Bot,
  ShieldCheck,
  CheckCircle2,
  Check,
  HeartPulse,
  Video,
  CalendarDays,
  VideoIcon,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Mic,
} from 'lucide-react';
import { ROUTES, SITE } from '../../../constants/siteInfo';

const STEPS = [
  { id: 1, label: 'Primary Symptoms' },
  { id: 2, label: 'Duration & Severity' },
  { id: 3, label: 'Warning Signs' },
  { id: 4, label: 'Care Recommendation' },
];

const PRIMARY_SYMPTOMS = [
  'Chest pain or pressure',
  'Heart palpitations',
  'Shortness of breath',
  'Fatigue / low energy',
  'Dizziness',
  'Other cardiac concern',
];

const DURATIONS = ['< 2 hours', '2–24 hours', '2–7 days', '1+ week'];

const RED_FLAGS = [
  'Radiating pain (left arm / jaw)',
  'Shortness of breath with mild exertion',
  'Dizziness or sudden lightheadedness',
  'Sweating, nausea, or clamminess',
  'None of the above',
];

const CONDITIONS = ['Hypertension', 'High Cholesterol', 'Family History CAD', 'None'];

const NOTE_PLACEHOLDERS = {
  1: 'Optional: describe your symptoms in your own words…',
  2: 'Optional: notes about timing, triggers, or how severity changes…',
  3: 'Optional: add details about warning signs or medical history…',
  4: 'Optional: anything else your clinician should know…',
};

const NOTE_TYPEWRITER_PROMPTS = [
  'Optional: describe your symptoms in your own words…',
  'e.g. Sharp pressure when climbing stairs…',
  'e.g. Palpitations after caffeine or stress…',
  'e.g. Started yesterday evening and comes in waves…',
  'Optional: anything else your clinician should know…',
];

function OptionalNotes({ step, value, onChange, grow = false }) {
  const [focused, setFocused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [waveLevels, setWaveLevels] = useState([0.35, 0.55, 0.85, 0.55, 0.35]);
  const recognitionRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const rafRef = useRef(null);
  const baseValueRef = useRef('');
  const finalTranscriptRef = useRef('');
  const valueRef = useRef(value);

  const [typedPlaceholder] = useTypewriter({
    words: NOTE_TYPEWRITER_PROMPTS,
    loop: 0,
    typeSpeed: 55,
    deleteSpeed: 35,
    delaySpeed: 1800,
  });

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    if (value || focused || isListening) return undefined;
    const id = window.setInterval(() => setCursorVisible((v) => !v), 530);
    return () => window.clearInterval(id);
  }, [value, focused, isListening]);

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

  const startListening = async () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    baseValueRef.current = valueRef.current.trim();
    finalTranscriptRef.current = '';
    setFocused(true);
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
        baseValueRef.current,
        finalTranscriptRef.current,
        interim.trim(),
      ].filter(Boolean);
      onChange(pieces.join(' ').replace(/\s+/g, ' ').trim());
    };

    try {
      recognition.start();
    } catch (_) {
      stopListening();
    }
  };

  const toggleListening = () => {
    if (isListening) stopListening();
    else startListening();
  };

  useEffect(() => () => stopListening(), []);

  useEffect(() => {
    stopListening();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <div
      className={`mt-4 flex flex-col border-t border-docmed-light/80 pt-3 ${
        grow ? 'min-h-0 flex-1' : ''
      }`}
    >
      <label
        htmlFor={`symptom-notes-${step}`}
        className="mb-1.5 block text-xs font-semibold text-slate-700"
      >
        Additional notes <span className="font-normal text-slate-400">(optional)</span>
      </label>
      <div className="relative h-full rounded-xl bg-white">
        {!value && !focused && !isListening && (
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-0 overflow-hidden px-3.5 py-2.5 pr-12 text-sm text-slate-400 ${
              grow ? 'min-h-[120px]' : ''
            }`}
          >
            {typedPlaceholder}
            <span
              className={`ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-px bg-docmed-blue ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </span>
        )}
        <textarea
          id={`symptom-notes-${step}`}
          rows={grow ? undefined : 3}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            if (isListening) {
              baseValueRef.current = e.target.value;
              finalTranscriptRef.current = '';
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={
            isListening
              ? 'Listening… speak your notes'
              : focused && !value
              ? NOTE_PLACEHOLDERS[step]
              : ''
          }
          className={`relative z-[1] h-full w-full rounded-xl border border-slate-200 bg-transparent px-3.5 py-2.5 pr-12 pb-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-docmed-blue focus:outline-none focus:ring-2 focus:ring-docmed-blue/20 ${
            grow ? 'min-h-[120px] flex-1 resize-none' : 'resize-y'
          }`}
        />
        <button
          type="button"
          title={isListening ? 'Stop dictation' : 'Dictate notes'}
          aria-label={isListening ? 'Stop dictation' : 'Dictate notes'}
          aria-pressed={isListening}
          onClick={toggleListening}
          className={`absolute bottom-2.5 right-2.5 z-[2] flex h-9 w-9 items-center justify-center rounded-full transition ${
            isListening
              ? 'bg-docmed-blue text-white shadow-md'
              : 'bg-docmed-light text-docmed-blue hover:bg-docmed-blue/10'
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
            <Mic className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}

function SymptomNavigator() {
  const [step, setStep] = useState(1);
  const [symptoms, setSymptoms] = useState([]);
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState(5);
  const [flags, setFlags] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [notes, setNotes] = useState({ 1: '', 2: '', 3: '', 4: '' });

  const setStepNote = (stepId, value) => {
    setNotes((prev) => ({ ...prev, [stepId]: value }));
  };

  const toggleItem = (setList, item, exclusive = null) => {
    if (exclusive && item === exclusive) {
      setList([exclusive]);
      return;
    }
    setList((prev) => {
      const withoutExclusive = exclusive ? prev.filter((v) => v !== exclusive) : prev;
      return withoutExclusive.includes(item)
        ? withoutExclusive.filter((v) => v !== item)
        : [...withoutExclusive, item];
    });
  };

  const intensityHint =
    intensity <= 3
      ? 'Mild discomfort with limited impact on daily activity.'
      : intensity <= 6
        ? 'Moderate-High: Distinct chest pressure or palpitations under mild exertion.'
        : 'Severe discomfort — consider urgent evaluation.';

  const assessment = useMemo(() => {
    const seriousFlags = flags.filter((f) => f !== 'None of the above');
    const hasFlags = seriousFlags.length > 0;
    const highIntensity = intensity >= 7;
    const acute = duration === '< 2 hours' || duration === '2–24 hours';

    if (hasFlags || (highIntensity && acute)) {
      return {
        level: 'High Acuity',
        levelClass: 'bg-red-600 text-white',
        panelClass: 'bg-red-50 text-red-800',
        title: 'Urgent Specialty Evaluation',
        detail: 'Recommended in-person or high-tier video consult within 2–4 Hours.',
        match: 98,
        primaryPathway: 'Cardiology Center of Excellence',
        primaryDetail: 'Comprehensive Diagnostic ECG & Echo',
      };
    }

    if (intensity >= 5 || acute) {
      return {
        level: 'Moderate',
        levelClass: 'bg-amber-500 text-white',
        panelClass: 'bg-amber-50 text-amber-900',
        title: 'Prompt Clinical Review',
        detail: 'Same-day telehealth or clinic visit recommended within 24 hours.',
        match: 86,
        primaryPathway: 'General Cardiology Consult',
        primaryDetail: 'Symptom review with diagnostic planning',
      };
    }

    return {
      level: 'Routine',
      levelClass: 'bg-docmed-green text-white',
      panelClass: 'bg-docmed-green-light text-docmed-green-ink',
      title: 'Scheduled Follow-Up',
      detail: 'Non-urgent pathway — book a convenient specialist visit this week.',
      match: 74,
      primaryPathway: 'Preventive Cardiology',
      primaryDetail: 'Risk review and wellness planning',
    };
  }, [duration, intensity, flags]);

  const canContinue = () => {
    if (step === 1) return symptoms.length > 0;
    if (step === 2) return Boolean(duration);
    if (step === 3) return flags.length > 0;
    return true;
  };

  const goNext = () => {
    if (!canContinue()) return;
    setStep((s) => Math.min(4, s + 1));
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const progress = (step / 4) * 100;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-12" id="symptom-navigator">
      <div className="relative overflow-hidden rounded-3xl border border-docmed-light bg-white p-5 shadow-xl lg:p-7">
        <div className="flex flex-col gap-4 pb-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-1.5">
            <div className="inline-flex items-center gap-2 rounded-full bg-docmed-light px-3 py-1 text-xs font-semibold text-slate-700">
              <Bot className="h-4 w-4 text-docmed-blue" />
              DocMed AI Guided Clinical Navigator • Instant Triage
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Guided Symptom Assessment & Clinical Pathway
            </h2>
            <p className="text-sm text-slate-600">
              Answer 4 quick clinical steps to determine recommended care acuity, matching
              medical specialists, and immediate telehealth options.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-xl border border-docmed-light bg-docmed-light/60 px-4 py-2 lg:self-center">
            <ShieldCheck className="h-6 w-6 fill-docmed-green text-white" />
            <div>
              <div className="text-xs font-semibold text-slate-900">Board-Verified Protocol</div>
              <div className="text-[11px] text-slate-500">Private & HIPAA Compliant</div>
            </div>
          </div>
        </div>

        <div className="w-full py-0">
          <div className="mb-2 grid w-full grid-cols-2 gap-2 text-xs font-semibold sm:grid-cols-4 sm:gap-3">
            {STEPS.map((s) => {
              const done = step > s.id;
              const active = step === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    if (s.id < step) setStep(s.id);
                  }}
                  className={`flex w-full items-center justify-center gap-1.5 text-center transition-colors sm:justify-start ${
                    active
                      ? 'font-bold text-docmed-blue'
                      : done
                        ? 'text-docmed-blue'
                        : 'text-slate-400'
                  } ${s.id < step ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {done ? (
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  ) : active ? (
                    <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-docmed-blue" />
                  ) : (
                    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-current text-[9px] leading-none">
                      {s.id}
                    </span>
                  )}
                  <span className="truncate">
                    <span className="sm:hidden">{s.label}</span>
                    <span className="hidden sm:inline">
                      {s.id}. {s.label}
                      {active ? ` (Step ${s.id} of 4)` : ''}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-docmed-light">
            <div
              className="h-full rounded-full bg-docmed-blue transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 pt-4 lg:grid-cols-12">
          <div className="flex h-full min-h-0 flex-col gap-4 lg:col-span-7">
            {step === 1 && (
              <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-docmed-light bg-docmed-light/40 p-4">
                <span className="mb-3 block text-sm font-semibold text-slate-900">
                  1. What primary symptoms are you experiencing?
                </span>
                <div className="flex flex-wrap gap-2">
                  {PRIMARY_SYMPTOMS.map((item) => {
                    const active = symptoms.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleItem(setSymptoms, item)}
                        className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${
                          active
                            ? 'bg-docmed-blue font-semibold text-white'
                            : 'border border-slate-200 bg-white text-slate-600 hover:bg-docmed-light hover:text-slate-900'
                        }`}
                      >
                        {active && <Check className="h-3 w-3" />}
                        {item}
                      </button>
                    );
                  })}
                </div>
                <OptionalNotes
                  step={1}
                  grow
                  value={notes[1]}
                  onChange={(value) => setStepNote(1, value)}
                />
              </div>
            )}

            {step === 2 && (
              <div className="flex min-h-0 flex-1 flex-col gap-4 rounded-2xl border border-docmed-light bg-docmed-light/40 p-4">
                <div>
                  <span className="mb-3 block text-sm font-semibold text-slate-900">
                    2. How long have you experienced these symptoms?
                  </span>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {DURATIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setDuration(item)}
                        className={`rounded-xl px-3 py-2.5 text-center text-xs font-medium transition-all ${
                          duration === item
                            ? 'flex items-center justify-center gap-1 bg-docmed-blue font-semibold text-white shadow-sm'
                            : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {duration === item && <Check className="h-3 w-3" />}
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">
                      Current discomfort intensity:
                    </span>
                    <span className="text-xs font-bold text-docmed-blue">Level {intensity} of 10</span>
                  </div>
                  <div className="mb-2 grid grid-cols-10 gap-1 sm:gap-2">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setIntensity(n)}
                        className={`rounded-lg py-2 text-[11px] font-semibold transition-colors ${
                          intensity === n
                            ? 'bg-docmed-blue font-bold text-white shadow-sm'
                            : 'border border-slate-200 bg-white text-slate-900 hover:bg-docmed-light'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] italic text-slate-500">
                    Level {intensity} - {intensityHint}
                  </p>
                </div>

                <OptionalNotes
                  step={2}
                  grow
                  value={notes[2]}
                  onChange={(value) => setStepNote(2, value)}
                />
              </div>
            )}

            {step === 3 && (
              <div className="flex min-h-0 flex-1 flex-col gap-4 rounded-2xl border border-docmed-light bg-docmed-light/40 p-4">
                <div>
                  <span className="mb-2.5 block text-sm font-semibold text-slate-900">
                    3. Select any accompanying red-flag symptoms:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {RED_FLAGS.map((item) => {
                      const active = flags.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleItem(setFlags, item, 'None of the above')}
                          className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${
                            active
                              ? 'bg-docmed-blue font-semibold text-white'
                              : 'border border-slate-200 bg-white text-slate-600 hover:bg-docmed-light hover:text-slate-900'
                          }`}
                        >
                          {active && <Check className="h-3 w-3" />}
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <span className="mb-2.5 block text-sm font-semibold text-slate-900">
                    Known pre-existing cardiovascular conditions:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {CONDITIONS.map((item) => {
                      const active = conditions.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleItem(setConditions, item, 'None')}
                          className={`flex items-center gap-1 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? 'bg-docmed-blue font-semibold text-white'
                              : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {active && <Check className="h-3 w-3" />}
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <OptionalNotes
                  step={3}
                  grow
                  value={notes[3]}
                  onChange={(value) => setStepNote(3, value)}
                />
              </div>
            )}

            {step === 4 && (
              <div className="flex min-h-0 flex-1 flex-col gap-3 rounded-2xl border border-docmed-light bg-docmed-light/40 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Your care recommendation
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Pathway preview is on the right — review your answers below, then book follow-up
                      or start telehealth.
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${assessment.levelClass}`}
                  >
                    {assessment.level}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    {
                      label: 'Symptoms',
                      value: symptoms.length ? symptoms.join(', ') : '—',
                    },
                    { label: 'Duration', value: duration || '—' },
                    { label: 'Intensity', value: `Level ${intensity}/10` },
                    {
                      label: 'Warning signs',
                      value: flags.length ? flags.join(', ') : '—',
                    },
                    {
                      label: 'Conditions',
                      value: conditions.length ? conditions.join(', ') : '—',
                      wide: true,
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`rounded-xl border border-docmed-light bg-white px-3.5 py-3 ${
                        row.wide ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        {row.label}
                      </div>
                      <div className="mt-1 text-sm font-medium leading-snug text-slate-900">
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>

                {[1, 2, 3].some((id) => notes[id]?.trim()) && (
                  <div className="rounded-xl border border-docmed-light bg-white px-4 py-3">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Notes from earlier steps
                    </div>
                    <ul className="space-y-1.5">
                      {[1, 2, 3]
                        .filter((id) => notes[id]?.trim())
                        .map((id) => (
                          <li key={id} className="text-sm text-slate-700">
                            <span className="font-semibold text-slate-900">Step {id}:</span>{' '}
                            {notes[id].trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                <OptionalNotes
                  step={4}
                  grow
                  value={notes[4]}
                  onChange={(value) => setStepNote(4, value)}
                />
              </div>
            )}

            <div className="mt-auto flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 1}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  step === 1
                    ? 'cursor-not-allowed text-slate-300'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-docmed-light'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canContinue()}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all ${
                    canContinue()
                      ? 'bg-docmed-blue hover:bg-docmed-hover active:scale-[0.98]'
                      : 'cursor-not-allowed bg-slate-300'
                  }`}
                >
                  Continue to Step {step + 1}
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  to={ROUTES.contact}
                  className="inline-flex items-center gap-2 rounded-xl bg-docmed-blue px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-md transition-all hover:bg-docmed-hover"
                >
                  Book Clinical Follow-Up
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full flex-col space-y-3 rounded-2xl border border-docmed-light bg-docmed-light/40 p-4 shadow-sm">
              <div className={`space-y-1 rounded-xl p-3 ${assessment.panelClass}`}>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider opacity-80">
                    <span className="h-2 w-2 animate-ping rounded-full bg-current" />
                    Urgency Level
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${assessment.levelClass}`}>
                    {assessment.level}
                  </span>
                </div>
                <h4 className="text-lg font-bold">{assessment.title}</h4>
                <p className="text-[11px]">{assessment.detail}</p>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-docmed-light px-3 py-2.5 text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-docmed-blue" />
                  <span className="text-xs font-semibold">Clinical Alignment Score</span>
                </div>
                <span className="text-sm font-bold text-docmed-blue">{assessment.match}% Match</span>
              </div>

              <div className="space-y-2">
                <span className="block text-xs font-semibold text-slate-900">
                  Recommended Care Pathways:
                </span>
                <div className="flex flex-col gap-1.5 rounded-xl border border-docmed-light bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-docmed-light text-docmed-blue">
                        <HeartPulse className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">
                          {assessment.primaryPathway}
                        </div>
                        <div className="text-[11px] text-slate-500">{assessment.primaryDetail}</div>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-docmed-light px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                      Primary
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 rounded-xl border border-docmed-light bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-docmed-light text-docmed-green">
                      <Video className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">
                        Immediate Telehealth Triage
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Board-Certified On-Call Physician
                      </div>
                    </div>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-docmed-green">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-docmed-green" />
                    ~8 mins
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {step === 4 ? (
                  <>
                    <Link
                      to={ROUTES.contact}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-docmed-blue py-2.5 text-sm font-semibold text-white no-underline shadow-sm transition-colors hover:bg-docmed-hover"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Schedule Priority Cardiology Visit
                    </Link>
                    <Link
                      to={ROUTES.contact}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-docmed-blue/20 bg-white py-2.5 text-sm font-semibold text-docmed-blue no-underline shadow-sm transition-colors hover:bg-docmed-light"
                    >
                      <VideoIcon className="h-4 w-4" />
                      Start Instant Telehealth Triage
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      title="Complete all steps to choose a care pathway"
                      className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-300 py-2.5 text-sm font-semibold text-white shadow-sm"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Schedule Priority Cardiology Visit
                    </button>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      title="Complete all steps to choose a care pathway"
                      className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-400 shadow-sm"
                    >
                      <VideoIcon className="h-4 w-4" />
                      Start Instant Telehealth Triage
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-start gap-2 rounded-xl bg-red-50 p-2.5 text-red-800">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <p className="text-[11px] leading-snug">
                  <span className="font-bold">Emergency Warning:</span> If symptoms worsen, call 911
                  or{' '}
                  <a href={SITE.emergencyPhone.href} className="font-bold underline">
                    {SITE.emergencyPhone.display}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SymptomNavigator;
