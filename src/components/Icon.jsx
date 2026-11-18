import React from 'react';
import {
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
  HiOutlineX,
  HiOutlineSearch,
  HiOutlineStar,
  HiOutlinePhone,
  HiOutlineChat,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineVideoCamera,
  HiOutlineCheckCircle,
  HiOutlineLockClosed,
  HiOutlineDocumentText,
  HiOutlineArrowRight,
  HiOutlineEye,
  HiOutlineTrash,
  HiOutlinePaperClip,
  HiOutlineMicrophone,
  HiOutlineArrowUp,
  HiOutlineSupport,
  HiOutlineExclamation,
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineBeaker,
  HiOutlineOfficeBuilding,
  HiOutlineBadgeCheck,
  HiOutlineLightningBolt,
  HiOutlineMoon,
  HiOutlineViewList,
  HiOutlineViewGrid,
  HiOutlineMap,
  HiOutlineSortAscending,
  HiOutlineAdjustments,
  HiOutlineExclamationCircle,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
  HiOutlineTranslate,
  HiOutlineInformationCircle,
  HiOutlineDotsHorizontal,
  HiOutlineClipboardCheck,
  HiOutlineHeart,
  HiOutlineCash,
  HiOutlineExternalLink,
  HiOutlinePaperAirplane,
  HiOutlineChevronDown,
} from 'react-icons/hi';
import {
  MdOutlineDarkMode,
  MdOutlineMedicalServices,
  MdOutlineLocalHospital,
  MdVerified,
  MdOutlineEventAvailable,
  MdOutlineEventBusy,
  MdOutlineHome,
  MdAccessible,
  MdOutlineSubway,
  MdOutlineBloodtype,
  MdOutlineWaterDrop,
  MdOutlineApartment,
  MdOutlineWorkspacePremium,
  MdOutlineSensors,
  MdOutlineVideocam,
  MdOutlineLocalParking,
} from 'react-icons/md';
import { LuStethoscope, LuPill, LuSiren, LuActivity, LuHeartPulse } from 'react-icons/lu';

const ICON_MAP = {
  // Find Doctors + shared UI
  home: HiOutlineHome,
  location_on: HiOutlineLocationMarker,
  chevron_right: HiOutlineChevronRight,
  chevron_left: HiOutlineChevronLeft,
  close: HiOutlineX,
  search: HiOutlineSearch,
  star: HiOutlineStar,
  call: HiOutlinePhone,
  chat: HiOutlineChat,
  calendar_month: HiOutlineCalendar,
  schedule: HiOutlineClock,
  videocam: HiOutlineVideoCamera,
  video_camera_front: MdOutlineVideocam,
  check_circle: HiOutlineCheckCircle,
  lock: HiOutlineLockClosed,
  description: HiOutlineDocumentText,
  arrow_forward: HiOutlineArrowRight,
  arrow_upward: HiOutlineArrowUp,
  visibility: HiOutlineEye,
  delete: HiOutlineTrash,
  attach_file: HiOutlinePaperClip,
  mic: HiOutlineMicrophone,
  support_agent: HiOutlineSupport,
  warning: HiOutlineExclamation,
  notification_important: HiOutlineBell,
  analytics: HiOutlineChartBar,
  science: HiOutlineBeaker,
  domain: HiOutlineOfficeBuilding,
  verified: MdVerified,
  verified_user: HiOutlineBadgeCheck,
  bolt: HiOutlineLightningBolt,
  nightlight: HiOutlineMoon,
  dark_mode: MdOutlineDarkMode,
  view_list: HiOutlineViewList,
  grid_view: HiOutlineViewGrid,
  map: HiOutlineMap,
  sort: HiOutlineSortAscending,
  tune: HiOutlineAdjustments,
  expand_more: HiOutlineChevronDown,
  fmd_bad: HiOutlineExclamationCircle,
  medical_services: MdOutlineMedicalServices,
  event_available: MdOutlineEventAvailable,
  event_busy: MdOutlineEventBusy,
  event: HiOutlineCalendar,
  calendar_add_on: HiOutlineCalendar,
  edit_calendar: HiOutlineCalendar,
  home_health: MdOutlineHome,
  workspace_premium: MdOutlineWorkspacePremium,
  credit_card: HiOutlineCreditCard,
  local_hospital: MdOutlineLocalHospital,
  supervised_user_circle: HiOutlineUserGroup,
  translate: HiOutlineTranslate,
  local_parking: MdOutlineLocalParking,
  accessible: MdAccessible,
  subway: MdOutlineSubway,
  open_in_new: HiOutlineExternalLink,
  info: HiOutlineInformationCircle,
  more_horiz: HiOutlineDotsHorizontal,
  assignment_turned_in: HiOutlineClipboardCheck,
  apartment: MdOutlineApartment,
  bloodtype: MdOutlineBloodtype,
  favorite: HiOutlineHeart,
  payments: HiOutlineCash,
  send: HiOutlinePaperAirplane,
  clinical_notes: HiOutlineDocumentText,
  medication: LuPill,
  prescriptions: HiOutlineDocumentText,
  pill: LuPill,
  monitoring: LuActivity,
  monitor_heart: LuHeartPulse,
  ecg_heart: LuHeartPulse,
  stethoscope: LuStethoscope,
  emergency: LuSiren,
  water_drop: MdOutlineWaterDrop,
  sensors: MdOutlineSensors,
  picture_as_pdf: HiOutlineDocumentText,
  local_pharmacy: LuPill,
};

function sizeFromClassName(className = '') {
  if (/\btext-\[10px\]|\btext-xs\b/.test(className)) return 14;
  if (/\btext-sm\b/.test(className)) return 16;
  if (/\btext-base\b/.test(className)) return 18;
  if (/\btext-lg\b/.test(className)) return 20;
  if (/\btext-xl\b/.test(className)) return 22;
  if (/\btext-2xl\b/.test(className)) return 24;
  if (/\btext-3xl\b/.test(className)) return 30;
  if (/\btext-4xl\b/.test(className)) return 36;
  return 18;
}

function Icon({ name, className = '', filled = false }) {
  const Comp = ICON_MAP[name];
  if (!Comp) return null;

  const size = sizeFromClassName(className);
  return (
    <Comp
      size={size}
      aria-hidden="true"
      focusable="false"
      className={`inline-block shrink-0 align-middle ${className} ${
        filled ? 'fill-current' : ''
      }`.trim()}
    />
  );
}

export default Icon;
