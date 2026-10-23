import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Filter,
  Sparkles,
  GraduationCap,
  Cpu,
  ChevronRight,
  Flame,
  Building,
  Crown,
  Briefcase
} from 'lucide-react';

import {
  CHAPTER_META,
  SENIOR_EXECOM,
  JUNIOR_EXECOM,
  ALL_ROSTER_MEMBERS
} from './teamData';

/**
 * TeamAndMembers - Production-Grade Executive Committee & Directory Component
 * Session: 2026–27 | ISHMT TKMCE Student Chapter
 */
export default function TeamAndMembers() {
  // --- Directory Interactive State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'senior' | 'junior' | 'directory'

  // --- Filtered Directory Computation ---
  const filteredMembers = useMemo(() => {
    return ALL_ROSTER_MEMBERS.filter((member) => {
      // 1. Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameMatches = member.name.toLowerCase().includes(query);
        const deptMatches = member.department.toLowerCase().includes(query);
        const semMatches = member.semester.toLowerCase().includes(query);
        if (!nameMatches && !deptMatches && !semMatches) {
          return false;
        }
      }

      // 2. Semester filter
      if (selectedSemester !== 'All') {
        if (selectedSemester === 'Ph.D.' && member.semester !== 'Ph.D.') return false;
        if (selectedSemester !== 'Ph.D.' && member.semester !== selectedSemester) return false;
      }

      // 3. Department filter
      if (selectedDept !== 'All') {
        if (member.department !== selectedDept) return false;
      }

      return true;
    });
  }, [searchQuery, selectedSemester, selectedDept]);

  // Statistics counts
  const totalRosterCount = ALL_ROSTER_MEMBERS.length;

  // Member Detail Popup Modal State
  const [selectedMember, setSelectedMember] = useState(null);
  const [editedBio, setEditedBio] = useState('');

  // Check admin mode (localStorage or token)
  const isAdmin = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return !!(localStorage.getItem('ishmt_admin_token') || localStorage.getItem('ishmt_is_admin') === 'true');
  }, []);

  // 4 Strict Hierarchical Vertical Tiers:
  // Tier 1 (Peak): Single centered card for Chairperson / President
  const peakLeader = useMemo(() => SENIOR_EXECOM.find(m => m.id === 'sen-1' || m.role.toLowerCase().includes('chairperson')), []);

  // Tier 2 (Core Admin): 2-column centered row for Vice President and General Secretary
  const coreAdminLeaders = useMemo(() => SENIOR_EXECOM.filter(m => (m.id === 'sen-2' || m.id === 'sen-3') || (m.isCoreLeadership && m.id !== 'sen-1')), []);

  // Tier 3 (Functional Leads): Dedicated row that ONLY maps over members with LEAD badge (isLead: true)
  const functionalLeads = useMemo(() => SENIOR_EXECOM.filter(m => !m.isCoreLeadership && m.isLead), []);

  // Tier 4 (Functional Members): Dedicated row beneath Leads that ONLY maps over members with MEMBER badge (!isLead)
  const functionalMembers = useMemo(() => SENIOR_EXECOM.filter(m => !m.isCoreLeadership && !m.isLead), []);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className="min-h-screen bg-[#07090E] text-slate-100 font-sans antialiased selection:bg-[#8B0D1A] selection:text-white pb-24 select-none"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-[#8B0D1A]/10 rounded-full blur-[140px] transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-cyan-600/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-amber-600/6 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* ======================================================================
            A. HEADER & STATS SECTION
            ====================================================================== */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-[#8B0D1A]/10 backdrop-blur-md text-red-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
            <Flame className="w-4 h-4 text-red-400 animate-pulse" />
            <span>{CHAPTER_META.affiliationStatus} • Mentored by Regional Chapter Trivandrum</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4 font-['Oswald',sans-serif]">
            ISHMT TKMCE Student Chapter
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-200 to-cyan-300">
              Executive Committee &amp; Members (2026–27)
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            {CHAPTER_META.department}, {CHAPTER_META.institution}. Constituted under the aegis of the Indian Society for Heat and Mass Transfer.
          </p>

          {/* Metric Bar: 3-Card Centered Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mt-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md text-center">
              <div className="text-2xl font-bold text-white font-mono">13</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Senior Execom</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md text-center">
              <div className="text-2xl font-bold text-cyan-400 font-mono">6</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Junior Execom</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md text-center">
              <div className="text-2xl font-bold text-amber-400 font-mono">{totalRosterCount}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">General Members</div>
            </div>
          </div>
        </header>

        {/* Navigation Section Jump Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#8B0D1A] to-red-700 text-white shadow-lg shadow-red-900/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            All Sections View
          </button>
          <button
            onClick={() => setActiveTab('senior')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'senior'
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Senior Execom (13)
          </button>
          <button
            onClick={() => setActiveTab('junior')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'junior'
                ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-900/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Junior Execom (6)
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'directory'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-900/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            General Members ({totalRosterCount})
          </button>
        </div>

        {/* ======================================================================
            B. TIER 1: SENIOR EXECUTIVE COMMITTEE (3-LEVEL HIERARCHICAL PYRAMID)
            ====================================================================== */}
        {(activeTab === 'all' || activeTab === 'senior') && (
          <section className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-2">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span>Tier 1 • Primary Spotlight</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Oswald',sans-serif] uppercase">
                  Senior Executive Committee (Execom)
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  13 Appointed Executive positions across Core Presidency, Technical, Coordination, Media, PR, and Finance.
                </p>
              </div>
              <div className="mt-3 sm:mt-0 text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
                13 Appointed Positions
              </div>
            </div>

            {/* TIER 1 (PEAK): Chairperson / President Centered Alone */}
            {peakLeader && (
              <div className="flex justify-center mb-8">
                <div
                  key={peakLeader.id}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onClick={() => {
                    setSelectedMember(peakLeader);
                    setEditedBio(peakLeader.bio || '');
                  }}
                  className="w-full max-w-md relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-900/70 to-slate-900/95 border-2 border-amber-500/50 hover:border-amber-400 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-amber-950/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                >
                  <div className="absolute -top-[1px] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-300 border border-amber-500/30">
                        <Crown className="w-3.5 h-3.5 text-amber-400" />
                        President / Chair
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                        Tier 1 • Peak
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-5">
                      {/* 1:1 Circular Avatar with Shield */}
                      <div className="relative w-16 h-16 rounded-full overflow-hidden p-[2px] bg-gradient-to-br from-amber-500 via-red-600 to-slate-900 flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        {peakLeader.avatarUrl ? (
                          <img
                            src={peakLeader.avatarUrl}
                            alt={peakLeader.name}
                            className="w-full h-full rounded-full object-cover pointer-events-none select-none"
                            draggable={false}
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-lg font-extrabold text-white font-mono tracking-wider">
                            {peakLeader.avatar}
                          </div>
                        )}
                        <div className="avatar-shield absolute inset-0 z-10 rounded-full" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                          {peakLeader.name}
                        </h3>
                        <p className="text-sm font-semibold text-amber-400 mt-0.5">
                          {peakLeader.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 mb-6">
                      <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{peakLeader.academicBadge}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Appointed Executive</span>
                    <span className="font-mono text-amber-400 font-semibold">Session 2026–27</span>
                  </div>
                </div>
              </div>
            )}

            {/* TIER 2 (CORE ADMIN): Vice President & General Secretary Centered in 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              {coreAdminLeaders.map((leader) => (
                <div
                  key={leader.id}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onClick={() => {
                    setSelectedMember(leader);
                    setEditedBio(leader.bio || '');
                  }}
                  className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90 border-2 border-amber-500/40 hover:border-amber-400/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-amber-950/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                >
                  <div className="absolute -top-[1px] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-300 border border-amber-500/30">
                        <Crown className="w-3.5 h-3.5 text-amber-400" />
                        Executive Lead
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                        Tier 2 • Core Admin
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden p-[2px] bg-gradient-to-br from-amber-500 via-red-600 to-slate-900 flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        {leader.avatarUrl ? (
                          <img
                            src={leader.avatarUrl}
                            alt={leader.name}
                            className="w-full h-full rounded-full object-cover pointer-events-none select-none"
                            draggable={false}
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-lg font-extrabold text-white font-mono tracking-wider">
                            {leader.avatar}
                          </div>
                        )}
                        <div className="avatar-shield absolute inset-0 z-10 rounded-full" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-sm font-semibold text-amber-400 mt-0.5">
                          {leader.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 mb-6">
                      <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{leader.academicBadge}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Appointed Executive</span>
                    <span className="font-mono text-amber-400 font-semibold">Session 2026–27</span>
                  </div>
                </div>
              ))}
            </div>

            {/* TIER 3 (FUNCTIONAL LEADS): Dedicated Row Mapping ONLY Members with LEAD Badge */}
            <div className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {functionalLeads.map((member) => (
                  <div
                    key={member.id}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onClick={() => {
                      setSelectedMember(member);
                      setEditedBio(member.bio || '');
                    }}
                    className="relative p-5 rounded-xl bg-slate-900/80 border-2 border-cyan-500/40 hover:border-cyan-400 backdrop-blur-md shadow-lg hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                  >
                    <div>
                      {/* Header badge */}
                      <div className="flex items-center justify-between gap-1 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate max-w-[130px]">
                          {member.team}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          <Sparkles className="w-2.5 h-2.5" />
                          LEAD
                        </span>
                      </div>

                      {/* Member Info with Circular Avatar and Shield */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-11 h-11 rounded-full p-[1.5px] flex-shrink-0 overflow-hidden bg-gradient-to-br from-cyan-400 to-amber-500 group-hover:scale-105 transition-transform duration-300">
                          {member.avatarUrl ? (
                            <img
                              src={member.avatarUrl}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover pointer-events-none select-none"
                              draggable={false}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-bold text-white font-mono">
                              {member.avatar}
                            </div>
                          )}
                          <div className="avatar-shield absolute inset-0 z-10 rounded-full" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white truncate group-hover:text-cyan-200 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-xs font-medium text-cyan-400 truncate">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Degree, Branch & Semester */}
                      <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-300 bg-white/5 px-2.5 py-2 rounded-lg border border-white/10 mb-4">
                        <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{member.academicBadge}</span>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Functional Lead</span>
                      <span className="font-mono text-slate-400">2026–27</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TIER 4 (FUNCTIONAL MEMBERS): Dedicated Row Beneath Leads Mapping ONLY Members with MEMBER Badge */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {functionalMembers.map((member) => (
                  <div
                    key={member.id}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onClick={() => {
                      setSelectedMember(member);
                      setEditedBio(member.bio || '');
                    }}
                    className="relative p-5 rounded-xl bg-slate-900/50 border border-white/10 hover:border-white/30 backdrop-blur-md shadow-md hover:shadow-slate-900/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                  >
                    <div>
                      {/* Header badge */}
                      <div className="flex items-center justify-between gap-1 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate max-w-[130px]">
                          {member.team}
                        </span>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          MEMBER
                        </span>
                      </div>

                      {/* Member Info with Circular Avatar and Shield */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-11 h-11 rounded-full p-[1.5px] flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 group-hover:scale-105 transition-transform duration-300">
                          {member.avatarUrl ? (
                            <img
                              src={member.avatarUrl}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover pointer-events-none select-none"
                              draggable={false}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-bold text-white font-mono">
                              {member.avatar}
                            </div>
                          )}
                          <div className="avatar-shield absolute inset-0 z-10 rounded-full" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white truncate group-hover:text-slate-200 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-xs font-medium text-slate-400 truncate">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Degree, Branch & Semester */}
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300 bg-white/5 px-2.5 py-2 rounded-lg border border-white/10 mb-4">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{member.academicBadge}</span>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Functional Member</span>
                      <span className="font-mono text-slate-400">2026–27</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ======================================================================
            C. TIER 2: JUNIOR EXECUTIVE COMMITTEE (OPERATIONAL TRACKS)
            ====================================================================== */}
        {(activeTab === 'all' || activeTab === 'junior') && (
          <section className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Tier 2 • Operational Tracks</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Oswald',sans-serif] uppercase">
                  Junior Executive Committee (Junior Execom)
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  6 Appointed Junior Executives dedicated to technical toolkits, venue operations, outreach, and finance archival.
                </p>
              </div>
              <div className="mt-3 sm:mt-0 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                6 Appointed Members
              </div>
            </div>

            {/* Junior Execom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {JUNIOR_EXECOM.map((junior) => (
                <div
                  key={junior.id}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onClick={() => {
                    setSelectedMember(junior);
                    setEditedBio(junior.bio || '');
                  }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-xl shadow-lg hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    {/* Functional Track Pill Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        junior.trackColor === 'cyan'
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                          : junior.trackColor === 'amber'
                          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          : junior.trackColor === 'emerald'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                      }`}>
                        <Briefcase className="w-3 h-3" />
                        {junior.track}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">Tier 2</span>
                    </div>

                    {/* Member Name & Circular Avatar with Shield */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-600 p-[1.5px] flex-shrink-0 shadow-md">
                        {junior.avatarUrl ? (
                          <img
                            src={junior.avatarUrl}
                            alt={junior.name}
                            className="w-full h-full rounded-full object-cover pointer-events-none select-none"
                            draggable={false}
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-sm font-bold text-white font-mono">
                            {junior.avatar}
                          </div>
                        )}
                        <div className="avatar-shield absolute inset-0 z-10 rounded-full" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                          {junior.name}
                        </h4>
                        <div className="text-xs text-cyan-400 font-medium">
                          Junior Executive
                        </div>
                      </div>
                    </div>

                    {/* Degree, Branch & Semester */}
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-4 flex items-center gap-2.5">
                      <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-mono text-cyan-300 font-medium">
                        {junior.academicBadge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-slate-400">
                    <span>Mentored by Senior Team</span>
                    <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      2026–27
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================================
            D. TIER 3: STUDENT CHAPTER MEMBERS DIRECTORY (TABLE ONLY)
            ====================================================================== */}
        {(activeTab === 'all' || activeTab === 'directory') && (
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Tier 3 • Complete Chapter Directory</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Oswald',sans-serif] uppercase">
                  Student Chapter General Members
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Full registry of {totalRosterCount} registered undergraduate & postgraduate student members.
                </p>
              </div>

              {/* Live Count Badge */}
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                <span className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold shadow-sm">
                  Showing {filteredMembers.length} of {totalRosterCount} General Members
                </span>
              </div>
            </div>

            {/* Interactive Control Panel */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by student name, semester, department..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/70 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Department Filter */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 whitespace-nowrap">
                    <Building className="w-3.5 h-3.5" /> Dept:
                  </span>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 bg-slate-950/70 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="All">All Departments</option>
                    <option value="Mechanical Engineering">Mechanical Engineering (44)</option>
                    <option value="Chemical Engineering">Chemical Engineering (4)</option>
                  </select>
                </div>
              </div>

              {/* Semester Filters */}
              <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Semester:
                </span>
                {['All', 'Ph.D.', 'S7', 'S5', 'S3'].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setSelectedSemester(sem)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedSemester === sem
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {sem}
                  </button>
                ))}
              </div>
            </div>

            {/* Directory Render: Strictly Compact Table View */}
            {filteredMembers.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-white/5">
                <Users className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-300">No members match your criteria</h3>
                <p className="text-xs text-slate-500 mt-1">Try adjusting your search query, semester, or department filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSemester('All');
                    setSelectedDept('All');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950/80 text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4 font-mono">#</th>
                      <th className="py-3.5 px-4">Student Name</th>
                      <th className="py-3.5 px-4">Programme</th>
                      <th className="py-3.5 px-4">Department</th>
                      <th className="py-3.5 px-4 text-center">Semester</th>
                      <th className="py-3.5 px-4">Member Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {filteredMembers.map((member, idx) => (
                      <tr
                        key={member.id}
                        className="hover:bg-white/[0.03] transition-colors"
                      >
                        <td className="py-3 px-4 font-mono text-slate-400">{idx + 1}</td>
                        <td className="py-3 px-4 font-bold text-white flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-slate-800 text-[10px] font-bold text-slate-300 flex items-center justify-center font-mono">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                          </div>
                          <span>{member.name}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">{member.programme}</td>
                        <td className="py-3 px-4 text-slate-300">{member.department}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 font-bold text-cyan-300">
                            {member.semester}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-xs text-slate-400 font-normal">
                            General Member
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* ======================================================================
            FOOTER CREDITS & VERIFICATION
            ====================================================================== */}
        <footer className="pt-8 border-t border-white/10 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Official Constitution Published: 23 September 2026</span>
          </div>
          <div>
            Indian Society for Heat and Mass Transfer • Department of Mechanical Engineering, TKMCE
          </div>
          <div className="text-slate-400 font-mono">
            TKMCE Chapter ID: 2026–27
          </div>
        </footer>

      </div>

      {/* ======================================================================
          INTERACTIVE MEMBER DETAIL POPUP MODAL (Split 2-Column Wide Layout)
          ====================================================================== */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 ${
              !isAdmin ? 'select-none' : ''
            }`}
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => {
              if (!isAdmin) e.preventDefault();
            }}
            onCopy={(e) => {
              if (!isAdmin) e.preventDefault();
            }}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-xl font-bold transition-all shadow-sm"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
              {/* Left Column (Full Image - md:col-span-5): Uncropped Vertical Rectangular Portrait */}
              <div className="md:col-span-5 relative bg-slate-950 flex items-center justify-center overflow-hidden min-h-[280px] md:min-h-full">
                {selectedMember.avatarUrl ? (
                  <img
                    src={selectedMember.avatarUrl}
                    alt={selectedMember.name}
                    className="object-cover w-full h-full max-h-[400px] md:max-h-full rounded-l-lg pointer-events-none select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                ) : (
                  <div className="w-full h-full min-h-[280px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-950 to-[#2A080C] text-white">
                    <div className="w-20 h-20 rounded-xl bg-[#8B0D1A]/20 border-2 border-[#8B0D1A]/40 flex items-center justify-center text-3xl font-extrabold text-white font-mono mb-3">
                      {selectedMember.avatar || selectedMember.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="font-bold text-lg text-white font-['Oswald',sans-serif] uppercase tracking-wide">
                      {selectedMember.name}
                    </div>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                      {selectedMember.academicBadge || selectedMember.track || 'ISHMT TKMCE'}
                    </div>
                  </div>
                )}
                {/* Anti-copy transparent shield */}
                <div
                  className="absolute inset-0 z-10 pointer-events-auto"
                  aria-hidden="true"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* Right Column (Member Data - md:col-span-7) */}
              <div className="md:col-span-7 p-6 bg-white text-slate-900 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
                <div>
                  {/* Tier Pill */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#8B0D1A]/10 text-[#8B0D1A] border border-[#8B0D1A]/20">
                      {selectedMember.isCoreLeadership || selectedMember.isCore
                        ? 'CORE LEADERSHIP'
                        : selectedMember.isLead
                        ? 'FUNCTIONAL LEAD'
                        : selectedMember.track
                        ? 'JUNIOR EXECOM'
                        : 'FUNCTIONAL MEMBER'}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">SESSION 2026–27</span>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Oswald',sans-serif] uppercase tracking-tight mb-1">
                    {selectedMember.name}
                  </h2>

                  {/* Role in Maroon */}
                  <p className="text-sm sm:text-base font-bold text-[#8B0D1A] uppercase tracking-wide mb-4">
                    {selectedMember.role || selectedMember.focus || 'Executive Member'}
                  </p>

                  {/* Academic Details Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-800 mb-6">
                    <GraduationCap className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>{selectedMember.academicBadge || 'B.Tech • Mechanical Engineering'}</span>
                  </div>

                  {/* Member Description Section */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#8B0D1A] mb-2">
                      MEMBER DESCRIPTION &amp; RESPONSIBILITIES
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      {selectedMember.bio ||
                        (selectedMember.track
                          ? `${selectedMember.focus} across chapter operations.`
                          : 'Appointed member of the ISHMT TKMCE Student Chapter Executive Committee for 2026–27.')}
                    </p>
                  </div>
                </div>

                {/* Admin-Only Editor (Omitted completely from DOM when isAdmin is false) */}
                {isAdmin && (
                  <div className="mt-2 p-4 bg-red-50/70 border border-dashed border-[#8B0D1A]/40 rounded-xl">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#8B0D1A] mb-2 bg-[#8B0D1A]/10 px-2 py-0.5 rounded inline-block">
                      ADMIN MODE ONLY • EDIT PUBLIC DESCRIPTION
                    </div>
                    <textarea
                      value={editedBio}
                      onChange={(e) => setEditedBio(e.target.value)}
                      rows={3}
                      placeholder="Enter updated public description / responsibilities for this member..."
                      className="w-full p-2.5 bg-white border border-[#8B0D1A]/30 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B0D1A] mb-3"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        selectedMember.bio = editedBio;
                        alert('Description saved and published!');
                      }}
                      className="px-4 py-2 bg-[#8B0D1A] hover:bg-[#700A15] text-white text-xs font-bold rounded-lg shadow transition-all"
                    >
                      Save &amp; Publish to Public Tab
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
