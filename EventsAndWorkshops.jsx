import React, { useState, useRef } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  PlusCircle,
  Edit2,
  Trash2,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  Flame,
  Award,
  Video,
  Users
} from 'lucide-react';

/**
 * DEFAULT CHAPTER EVENTS & WORKSHOPS DATA
 */
export const DEFAULT_EVENTS = [
  {
    id: 'evt-1',
    title: 'Masterclass on Computational Heat & Fluid Mechanics (CFD 2026)',
    category: 'Workshop',
    dateTime: '2026-11-12T10:00',
    venue: 'Mechanical CAD Lab, TKMCE',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform',
    description: 'Hands-on computational workshop covering boundary layer discretization, meshing strategies, and finite volume thermal simulations using OpenFOAM and ANSYS Fluent.',
    status: 'Upcoming',
    posterUrl: '',
    createdAt: '2026-10-23T10:00:00.000Z'
  },
  {
    id: 'evt-2',
    title: 'Cryogenic Cooling & Space Propulsion Thermal Management',
    category: 'Webinar',
    dateTime: '2026-11-28T18:30',
    venue: 'Google Meet (Hybrid Stream)',
    registrationLink: 'https://meet.google.com/ishmt-tkmce-webinar',
    description: 'Distinguished guest lecture by scientists from ISRO LPSC covering thermal protection systems, liquid hydrogen boil-off mitigation, and regenerative rocket engine cooling.',
    status: 'Upcoming',
    posterUrl: '',
    createdAt: '2026-10-23T11:00:00.000Z'
  },
  {
    id: 'evt-3',
    title: 'Official Inauguration of ISHMT TKMCE Chapter 2026–27',
    category: 'Inauguration',
    dateTime: '2026-09-23T14:30',
    venue: 'APJ Abdul Kalam Auditorium, TKMCE',
    registrationLink: '',
    description: 'Grand inaugural ceremony of the ISHMT Student Chapter at TKMCE, presided over by Regional Chapter dignitaries, faculty mentors, and mechanical engineering scholars.',
    status: 'Completed',
    posterUrl: '',
    createdAt: '2026-09-20T10:00:00.000Z'
  }
];

/**
 * Helper to format ISO datetime string to academic readable label
 */
export function formatEventDateTime(dtStr) {
  if (!dtStr) return 'Date & Time TBA';
  try {
    const dt = new Date(dtStr);
    if (isNaN(dt.getTime())) return dtStr;
    return dt.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  } catch (e) {
    return dtStr;
  }
}

/**
 * Generate Google Calendar Add-Event Link
 */
export function generateGoogleCalendarLink(event) {
  if (!event || !event.dateTime) return '#';
  try {
    const startDt = new Date(event.dateTime);
    if (isNaN(startDt.getTime())) return '#';
    const endDt = new Date(startDt.getTime() + 2 * 60 * 60 * 1000); // 2 hr duration default
    const toIsoClean = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const dates = `${toIsoClean(startDt)}/${toIsoClean(endDt)}`;
    const title = encodeURIComponent(event.title || 'ISHMT Event');
    const details = encodeURIComponent(event.description || '');
    const location = encodeURIComponent(event.venue || 'TKMCE');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  } catch (e) {
    return '#';
  }
}

/**
 * Color-code helper for categories
 */
export function getCategoryBadgeStyles(category) {
  switch (category) {
    case 'Workshop':
      return 'bg-[#800000] text-white';
    case 'Webinar':
      return 'bg-amber-600 text-white';
    case 'Conference':
      return 'bg-blue-800 text-white';
    case 'Inauguration':
      return 'bg-emerald-700 text-white';
    default:
      return 'bg-[#800000] text-white';
  }
}

/**
 * Single Event Card Component (Public Gallery)
 */
export function EventCard({ event }) {
  const isUpcoming = (event.status || 'Upcoming') === 'Upcoming';
  const calendarUrl = generateGoogleCalendarLink(event);
  const badgeStyle = getCategoryBadgeStyles(event.category);

  return (
    <div className="flex flex-col bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      {/* 1. Poster Container (16:9 ratio with anti-drag/anti-copy tags) */}
      <div
        className="relative w-full aspect-video bg-stone-900 select-none overflow-hidden"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm backdrop-blur-sm ${badgeStyle}`}
        >
          {event.category || 'Event'}
        </span>

        {event.posterUrl ? (
          <img
            src={event.posterUrl}
            alt={event.title}
            className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-300"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none bg-gradient-to-br from-[#2D0509] via-[#5E000B] to-[#1A0003] text-white"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2 border border-white/20">
              <Flame className="w-5 h-5 text-red-200" />
            </div>
            <h4 className="font-serif font-bold text-sm sm:text-base line-clamp-2 px-2 text-white">
              {event.title}
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-red-200/70 mt-1">
              ISHMT TKMCE • {event.category}
            </span>
          </div>
        )}
      </div>

      {/* 2. Card Body */}
      <div className="p-5 flex flex-col flex-1 bg-white">
        {/* Title */}
        <h3 className="text-xl font-bold text-stone-800 line-clamp-2 leading-snug mb-3">
          {event.title}
        </h3>

        {/* Logistics Ribbon */}
        <div className="flex flex-col gap-1.5 py-2.5 mb-3 border-y border-stone-100 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#800000] shrink-0" />
            <span className="font-medium text-stone-700">{formatEventDateTime(event.dateTime)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#800000] shrink-0" />
            <span className="line-clamp-1">{event.venue || 'Venue TBA'}</span>
          </div>
        </div>

        {/* Description (2-line clamped) */}
        <p className="line-clamp-2 text-sm text-stone-600 mb-4 flex-1">
          {event.description || 'Join us for this premier technical session hosted by the ISHMT TKMCE Student Chapter.'}
        </p>

        {/* 3. Call-to-Action (CTA) */}
        <div className="mt-auto flex flex-col gap-2 pt-2">
          {isUpcoming ? (
            <>
              <a
                href={event.registrationLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#800000] text-white font-bold text-sm text-center rounded-lg w-full py-2.5 hover:bg-[#600000] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-[#800000] transition-colors text-xs font-semibold flex items-center justify-center gap-1.5 py-1"
                title="Add to Google Calendar"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Add to Calendar</span>
              </a>
            </>
          ) : (
            <button
              disabled
              className="bg-stone-200 text-stone-500 font-semibold text-sm rounded-lg w-full py-2.5 cursor-not-allowed text-center"
            >
              Registration Closed • Event Concluded
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Main Dynamic Events & Workshops Component
 * Features:
 * - Admin-Only Event Management Interface (Hidden if isAdmin === false)
 * - Canvas 16:9 WebP EXIF/GPS-sanitizer for poster uploads
 * - Public tab system ("Upcoming Events" default & "Past Events")
 * - Strict 16:9 cards with anti-drag/anti-copy protections
 */
export default function EventsAndWorkshops({ isAdmin = false, initialEvents = null }) {
  const [events, setEvents] = useState(initialEvents || DEFAULT_EVENTS);
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'completed'
  const [editingId, setEditingId] = useState(null);

  const fileInputRef = useRef(null);

  // Form State
  const [formState, setFormState] = useState({
    title: '',
    category: 'Workshop',
    dateTime: '',
    venue: '',
    registrationLink: '',
    description: '',
    status: 'Upcoming',
    posterUrl: ''
  });

  const [notification, setNotification] = useState(null);

  const showNotification = (msg, isError = false) => {
    setNotification({ msg, isError });
    setTimeout(() => setNotification(null), 4000);
  };

  /**
   * Poster Sanitization: Draw to 16:9 canvas (max-width 1280px) and export as compressed .webp
   * Automatically strips EXIF/GPS telemetry data.
   */
  const handlePosterFileChange = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const targetMaxWidth = 1280;
        const targetWidth = Math.min(img.width || 1280, targetMaxWidth);
        const targetHeight = Math.round(targetWidth * (9 / 16));

        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');

        // Center crop to 16:9
        const imgRatio = img.width / img.height;
        const targetRatio = 16 / 9;
        let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;

        if (imgRatio > targetRatio) {
          sWidth = img.height * targetRatio;
          sx = (img.width - sWidth) / 2;
        } else {
          sHeight = img.width / targetRatio;
          sy = (img.height - sHeight) / 2;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, targetWidth, targetHeight);

        // Export as WebP (stripping all EXIF/GPS)
        const sanitizedWebp = canvas.toDataURL('image/webp', 0.88);
        setFormState((prev) => ({ ...prev, posterUrl: sanitizedWebp }));
        showNotification('Poster sanitized to 16:9 WebP. EXIF/GPS metadata stripped.');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.title.trim() || !formState.dateTime || !formState.venue.trim()) {
      showNotification('Please fill in all required fields (Title, Date & Time, Venue).', true);
      return;
    }

    if (editingId) {
      setEvents((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, ...formState }
            : item
        )
      );
      showNotification('Event successfully updated.');
    } else {
      const newEvent = {
        ...formState,
        id: `evt-${Date.now()}`,
        createdAt: new Date().toISOString()
      };
      setEvents((prev) => [newEvent, ...prev]);
      showNotification('New event published to roster.');
    }

    handleResetForm();
  };

  const handleEditClick = (event) => {
    setEditingId(event.id);
    setFormState({
      title: event.title || '',
      category: event.category || 'Workshop',
      dateTime: event.dateTime || '',
      venue: event.venue || '',
      registrationLink: event.registrationLink || '',
      description: event.description || '',
      status: event.status || 'Upcoming',
      posterUrl: event.posterUrl || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents((prev) => prev.filter((item) => item.id !== id));
      showNotification('Event deleted from roster.');
      if (editingId === id) handleResetForm();
    }
  };

  const handleResetForm = () => {
    setEditingId(null);
    setFormState({
      title: '',
      category: 'Workshop',
      dateTime: '',
      venue: '',
      registrationLink: '',
      description: '',
      status: 'Upcoming',
      posterUrl: ''
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Filtered public event cards
  const upcomingEvents = events.filter((e) => (e.status || 'Upcoming') === 'Upcoming');
  const pastEvents = events.filter((e) => (e.status || 'Upcoming') === 'Completed');
  const renderedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="w-full min-h-screen bg-[#F5F2ED] py-10 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-sm font-semibold transition-all ${
            notification.isError
              ? 'bg-red-900 text-white border border-red-700'
              : 'bg-emerald-900 text-white border border-emerald-700'
          }`}
        >
          {notification.isError ? (
            <AlertCircle className="w-4 h-4 text-red-300" />
          ) : (
            <CheckCircle className="w-4 h-4 text-emerald-300" />
          )}
          <span>{notification.msg}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#800000] mb-2 font-serif">
          <Flame className="w-4 h-4" />
          ISHMT-TKMCE Student Chapter
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-3 tracking-tight">
          Events &amp; Workshops
        </h1>
        <p className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base leading-relaxed">
          Explore chapter workshops, computational CFD masterclasses, distinguished research lectures, and national technical colloquiums.
        </p>
      </div>

      {/* =========================================================================
          PART 1: ADMIN-ONLY EVENT MANAGEMENT INTERFACE (Hidden from Public)
          ========================================================================= */}
      {isAdmin && (
        <div className="max-w-5xl mx-auto mb-16 bg-white border-2 border-[#800000] rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-[#800000] text-white px-6 py-4 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Admin Only
              </span>
              <h2 className="text-lg font-bold font-serif tracking-wide">
                Event Management Dashboard
              </h2>
            </div>
            <span className="text-xs text-white/80">
              16:9 WebP Auto-Sanitizer Active
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {/* Event Upload / Edit Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Event Title */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formState.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Masterclass on Computational Heat & Fluid Mechanics"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000] focus:bg-white"
                    required
                  />
                </div>

                {/* Event Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formState.category}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000] focus:bg-white"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="Webinar">Webinar</option>
                    <option value="Conference">Conference</option>
                    <option value="Inauguration">Inauguration</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Date &amp; Time *
                  </label>
                  <input
                    type="datetime-local"
                    name="dateTime"
                    value={formState.dateTime}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000] focus:bg-white"
                    required
                  />
                </div>

                {/* Venue / Platform */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Venue / Platform *
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formState.venue}
                    onChange={handleInputChange}
                    placeholder="e.g. Seminar Hall or Google Meet"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000] focus:bg-white"
                    required
                  />
                </div>

                {/* Event Status Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Event Status *
                  </label>
                  <select
                    name="status"
                    value={formState.status}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000] focus:bg-white"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                {/* Registration Link */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Registration Link (URL)
                  </label>
                  <input
                    type="url"
                    name="registrationLink"
                    value={formState.registrationLink}
                    onChange={handleInputChange}
                    placeholder="https://forms.gle/... or https://meet.google.com/..."
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000] focus:bg-white"
                  />
                </div>

                {/* Short Description */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Short Description / Prerequisites
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formState.description}
                    onChange={handleInputChange}
                    placeholder="Overview, syllabus, eligibility, speakers..."
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000] focus:bg-white resize-none"
                  />
                </div>

                {/* Poster Upload & Canvas Sanitization Field */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Poster Image (Canvas Sanitized to 16:9 WebP, max 1280px)
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-[#800000]/40 rounded-xl p-5 text-center cursor-pointer hover:bg-stone-50 transition-colors"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handlePosterFileChange(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <ImageIcon className="w-8 h-8 text-[#800000]" />
                      <p className="text-xs sm:text-sm font-semibold text-stone-700">
                        Click or drag to select an event poster
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Automatically scaled &amp; cropped to 16:9 aspect ratio and stripped of all EXIF/GPS tags before saving.
                      </p>
                    </div>

                    {formState.posterUrl && (
                      <div className="mt-4 max-w-sm mx-auto aspect-video rounded-lg overflow-hidden shadow-md border border-stone-200">
                        <img
                          src={formState.posterUrl}
                          alt="Poster preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-[#800000] hover:bg-[#600000] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow transition-colors"
                >
                  {editingId ? 'Update Event' : 'Publish Event'}
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-700 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  Cancel / Reset
                </button>
              </div>
            </form>

            {/* Event Roster Table */}
            <div className="mt-12 pt-8 border-t border-stone-200">
              <h3 className="text-lg font-serif font-bold text-stone-800 mb-4 flex items-center justify-between">
                <span>Current Event Roster ({events.length})</span>
                <span className="text-xs font-sans text-stone-500 font-normal">
                  Manage live and archived events
                </span>
              </h3>

              <div className="overflow-x-auto border border-stone-200 rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm text-stone-600">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Poster</th>
                      <th className="py-3 px-4">Title &amp; Category</th>
                      <th className="py-3 px-4">Date &amp; Time</th>
                      <th className="py-3 px-4">Venue</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {events.map((evt) => (
                      <tr key={evt.id} className="hover:bg-stone-50 transition-colors">
                        <td className="py-3 px-4">
                          {evt.posterUrl ? (
                            <img
                              src={evt.posterUrl}
                              alt={evt.title}
                              className="w-16 aspect-video object-cover rounded shadow-xs"
                            />
                          ) : (
                            <div className="w-16 aspect-video bg-[#800000] rounded flex items-center justify-center text-[10px] text-white font-bold">
                              16:9
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 font-medium text-stone-900">
                          <div className="line-clamp-1">{evt.title}</div>
                          <span className={`inline-block mt-0.5 px-2 py-0.5 text-[10px] rounded-full font-bold uppercase ${getCategoryBadgeStyles(evt.category)}`}>
                            {evt.category}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {formatEventDateTime(evt.dateTime)}
                        </td>
                        <td className="py-3 px-4">{evt.venue}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-bold ${
                              evt.status === 'Completed'
                                ? 'bg-stone-100 text-stone-600'
                                : 'bg-emerald-50 text-emerald-800'
                            }`}
                          >
                            {evt.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => handleEditClick(evt)}
                            className="text-[#800000] hover:text-[#600000] font-semibold mr-3 p-1 inline-flex items-center gap-1"
                            title="Edit Event"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteClick(evt.id)}
                            className="text-red-600 hover:text-red-800 font-semibold p-1 inline-flex items-center gap-1"
                            title="Delete Event"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {events.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-stone-500">
                          No events in roster. Fill the form above to add an event.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PART 2: PUBLIC EVENTS & WORKSHOPS DISPLAY (Read-Only)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto">
        {/* Tabbed Navigation */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            className={`font-serif px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
              activeTab === 'upcoming'
                ? 'bg-[#800000] text-white border-[#800000] shadow-md shadow-[#800000]/20'
                : 'bg-white text-stone-600 border-stone-300 hover:border-[#800000] hover:text-[#800000]'
            }`}
          >
            <span>Upcoming Events</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === 'upcoming' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-700'
              }`}
            >
              {upcomingEvents.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('completed')}
            className={`font-serif px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
              activeTab === 'completed'
                ? 'bg-[#800000] text-white border-[#800000] shadow-md shadow-[#800000]/20'
                : 'bg-white text-stone-600 border-stone-300 hover:border-[#800000] hover:text-[#800000]'
            }`}
          >
            <span>Past Events</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === 'completed' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-700'
              }`}
            >
              {pastEvents.length}
            </span>
          </button>
        </div>

        {/* Event Card Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {renderedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Empty State */}
        {renderedEvents.length === 0 && (
          <div className="max-w-md mx-auto text-center py-16 px-4 bg-white border border-dashed border-[#800000]/30 rounded-2xl shadow-xs">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000]">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
              {activeTab === 'upcoming' ? 'No Upcoming Events Scheduled' : 'No Past Events Archived'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              {activeTab === 'upcoming'
                ? 'Check back soon! Chapter symposiums, guest lectures, and CFD bootcamps will be announced here.'
                : 'Archived records and summaries of past chapter activities will appear here.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
