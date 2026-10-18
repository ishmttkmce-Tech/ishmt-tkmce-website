import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  Users,
  Search,
  Filter,
  Sparkles,
  Award,
  GraduationCap,
  Cpu,
  Layers,
  FileText,
  CheckCircle2,
  ChevronRight,
  Flame,
  Calendar,
  Building,
  UserCheck,
  LayoutGrid,
  Table as TableIcon,
  Crown,
  Briefcase,
  Compass,
  ArrowRight
} from 'lucide-react';

import {
  CHAPTER_META,
  SENIOR_EXECOM,
  JUNIOR_EXECOM,
  ALL_ROSTER_MEMBERS
} from './teamData';

/**
 * TeamAndMembers - Production-Grade Executive Committee & Roster Component
 * Session: 2026–27 | ISHMT TKMCE Student Chapter
 */
export default function TeamAndMembers() {
  // --- Directory Interactive State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [showAllMembers, setShowAllMembers] = useState(false); // false = General Members Only, true = All Members
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'senior' | 'junior' | 'directory'

  // --- Filtered Roster Computation ---
  const filteredMembers = useMemo(() => {
    return ALL_ROSTER_MEMBERS.filter((member) => {
      // 1. Execom separation toggle
      if (!showAllMembers && member.isExecom) {
        return false;
      }

      // 2. Search query filter (name)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameMatches = member.name.toLowerCase().includes(query);
        const deptMatches = member.department.toLowerCase().includes(query);
        const semMatches = member.semester.toLowerCase().includes(query);
        const roleMatches = member.execomRole ? member.execomRole.toLowerCase().includes(query) : false;
        if (!nameMatches && !deptMatches && !semMatches && !roleMatches) {
          return false;
        }
      }

      // 3. Semester filter
      if (selectedSemester !== 'All') {
        if (selectedSemester === 'Ph.D.' && member.semester !== 'Ph.D.') return false;
        if (selectedSemester !== 'Ph.D.' && member.semester !== selectedSemester) return false;
      }

      // 4. Department filter
      if (selectedDept !== 'All') {
        if (member.department !== selectedDept) return false;
      }

      return true;
    });
  }, [searchQuery, selectedSemester, selectedDept, showAllMembers]);

  // Statistics counts
  const totalRosterCount = ALL_ROSTER_MEMBERS.length;
  const generalMembersCount = ALL_ROSTER_MEMBERS.filter(m => !m.isExecom).length;
  const execomInRosterCount = ALL_ROSTER_MEMBERS.filter(m => m.isExecom).length;

  // Senior leadership split
  const coreLeaders = useMemo(() => SENIOR_EXECOM.filter(m => m.isCoreLeadership), []);
  const functionalLeads = useMemo(() => SENIOR_EXECOM.filter(m => !m.isCoreLeadership), []);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans antialiased selection:bg-[#8B0D1A] selection:text-white pb-24">
      {/* Background Decorative Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-[#8B0D1A]/10 rounded-full blur-[140px] transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-cyan-600/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-amber-600/6 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* ======================================================================
            A. HEADER & OFFICIAL MANDATE BANNER
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
              Executive Committee & Members (2026–27)
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            {CHAPTER_META.department}, {CHAPTER_META.institution}. Constituted under the aegis of the Indian Society for Heat and Mass Transfer.
          </p>

          {/* Sleek Glassmorphic Mandate Callout Banner */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl text-left overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8B0D1A] via-amber-500 to-cyan-400" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/20 text-red-400 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Official Constitution Mandate</span>
                    <span className="text-[11px] text-slate-500 font-mono">• Date: {CHAPTER_META.notificationDate}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed italic">
                    "{CHAPTER_META.mandateText}"
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2 self-end md:self-center">
                <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                  REF: ISHMT-TKMCE-2026
                </span>
              </div>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl font-bold text-white font-mono">13</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Senior Execom</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl font-bold text-cyan-400 font-mono">6</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Junior Execom</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl font-bold text-amber-400 font-mono">48</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Registered Members</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl font-bold text-rose-400 font-mono">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Peer Cross-Verified</div>
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
            Chapter Roster ({showAllMembers ? totalRosterCount : generalMembersCount})
          </button>
        </div>

        {/* ======================================================================
            B. TIER 1: SENIOR EXECUTIVE COMMITTEE (PRIMARY SPOTLIGHT)
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

            {/* 1. TOP LEADERSHIP ROW (Chairperson, Vice Chairperson, General Secretary) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {coreLeaders.map((leader) => (
                <div
                  key={leader.id}
                  className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90 border-2 border-amber-500/40 hover:border-amber-400/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-amber-950/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Subtle Top Glow Accent */}
                  <div className="absolute -top-[1px] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-300 border border-amber-500/30">
                        <Crown className="w-3.5 h-3.5 text-amber-400" />
                        Executive Lead
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                        Tier 1 Core
                      </span>
                    </div>

                    {/* Avatar Initials with Dual Glowing Ring */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 via-red-600 to-slate-900 p-[2px] shadow-lg shadow-amber-950/40 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-lg font-extrabold text-white font-mono tracking-wider">
                          {leader.avatar}
                        </div>
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

                    <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Academic Details Badge */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <span>{leader.academicBadge}</span>
                    </div>
                    {leader.isFallback && (
                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        Notification Role
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 2. FUNCTIONAL TEAMS GRID (Technical, PC, Media, PR, Finance) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {functionalLeads.map((member) => (
                <div
                  key={member.id}
                  className={`relative p-5 rounded-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${
                    member.isLead
                      ? 'bg-slate-900/80 border-2 border-cyan-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-950/30'
                      : 'bg-slate-900/50 border border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Header badge */}
                    <div className="flex items-center justify-between gap-1 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate max-w-[130px]">
                        {member.team}
                      </span>
                      {member.isLead ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          <Sparkles className="w-2.5 h-2.5" />
                          TEAM LEAD
                        </span>
                      ) : member.isNominee ? (
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          Nominee
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                          Member
                        </span>
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl p-[1.5px] flex-shrink-0 ${
                        member.isLead
                          ? 'bg-gradient-to-br from-cyan-400 to-amber-500'
                          : 'bg-gradient-to-br from-slate-700 to-slate-800'
                      }`}>
                        <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-xs font-bold text-white font-mono">
                          {member.avatar}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white truncate hover:text-cyan-200 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-xs font-medium text-slate-400 truncate">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Academic Details Footer */}
                  <div className="pt-3 border-t border-white/5">
                    <span className="inline-block text-[11px] font-mono text-slate-400">
                      {member.academicBadge}
                    </span>
                  </div>
                </div>
              ))}
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
                  className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-xl shadow-lg hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between group"
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

                    {/* Member Name & Avatar */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1.5px] flex-shrink-0 shadow-md">
                        <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-sm font-bold text-white font-mono">
                          {junior.avatar}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                          {junior.name}
                        </h4>
                        <div className="text-xs text-slate-400 font-mono">
                          {junior.academicBadge}
                        </div>
                      </div>
                    </div>

                    {/* Key Operational Focus */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                        Key Operational Focus:
                      </span>
                      <p className="text-xs text-slate-200 font-medium">
                        {junior.focus}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-slate-400">
                    <span>Mentored by Senior Team</span>
                    <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Active Role <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================================
            D. TIER 3: STUDENT CHAPTER MEMBERS DIRECTORY (INTERACTIVE)
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
                  Student Chapter Members Roster
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Full registry of {totalRosterCount} undergraduate & postgraduate students cross-referenced with Execom responsibilities.
                </p>
              </div>

              {/* Live Count Badge */}
              <div className="mt-4 sm:mt-0 flex items-center gap-2">
                <span className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold shadow-sm">
                  Showing {filteredMembers.length} {showAllMembers ? 'Total Members' : 'General Members'}
                </span>
              </div>
            </div>

            {/* Interactive Control Panel */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl mb-8 space-y-4">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
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

                {/* Execom Directory Toggle */}
                <div className="flex items-center gap-3 bg-slate-950/70 p-1.5 rounded-xl border border-white/10">
                  <button
                    onClick={() => setShowAllMembers(false)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      !showAllMembers
                        ? 'bg-[#8B0D1A] text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    General Members Only ({generalMembersCount})
                  </button>
                  <button
                    onClick={() => setShowAllMembers(true)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      showAllMembers
                        ? 'bg-[#8B0D1A] text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Show All Members ({totalRosterCount})
                  </button>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 bg-slate-950/70 p-1.5 rounded-xl border border-white/10 self-end lg:self-auto">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === 'table' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Table View"
                  >
                    <TableIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Semester & Department Filters */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-white/5">
                {/* Semester Tabs */}
                <div className="flex items-center gap-1.5 flex-wrap">
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

                {/* Department Filter */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 whitespace-nowrap">
                    <Building className="w-3.5 h-3.5" /> Dept:
                  </span>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full sm:w-auto px-3 py-1.5 bg-slate-950/70 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="All">All Departments</option>
                    <option value="Mechanical Engineering">Mechanical Engineering (44)</option>
                    <option value="Chemical Engineering">Chemical Engineering (4)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Directory Render: Grid View vs. Table View */}
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
            ) : viewMode === 'grid' ? (
              /* --- GRID VIEW --- */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`p-4 rounded-xl backdrop-blur-md transition-all duration-200 border flex flex-col justify-between ${
                      member.isExecom
                        ? 'bg-slate-900/80 border-amber-500/30 hover:border-amber-400 hover:shadow-md'
                        : 'bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-900/60'
                    }`}
                  >
                    <div>
                      {/* Top Bar with Semester & Execom Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 font-bold">
                          {member.semester}
                        </span>
                        {member.isExecom && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                            member.execomTier === 'senior'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                              : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                          }`}>
                            {member.execomTier === 'senior' ? 'Senior Execom' : 'Junior Execom'}
                          </span>
                        )}
                      </div>

                      {/* Student Details */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-white font-mono flex-shrink-0">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white truncate hover:text-slate-200">
                            {member.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-medium truncate block">
                            {member.programme} • {member.department}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Execom Role Note if applicable */}
                    {member.isExecom && (
                      <div className="mt-3 pt-2.5 border-t border-white/5 text-[11px] text-amber-300/90 font-medium truncate">
                        ★ {member.execomRole}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* --- COMPACT TABLE VIEW --- */
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950/80 text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4 font-mono">#</th>
                      <th className="py-3.5 px-4">Student Name</th>
                      <th className="py-3.5 px-4">Programme</th>
                      <th className="py-3.5 px-4">Department</th>
                      <th className="py-3.5 px-4 text-center">Semester</th>
                      <th className="py-3.5 px-4">Executive Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {filteredMembers.map((member, idx) => (
                      <tr
                        key={member.id}
                        className={`hover:bg-white/[0.03] transition-colors ${
                          member.isExecom ? 'bg-amber-500/[0.02]' : ''
                        }`}
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
                          {member.isExecom ? (
                            <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                              member.execomTier === 'senior'
                                ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                                : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                            }`}>
                              <CheckCircle2 className="w-3 h-3" />
                              {member.execomRole}
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 font-normal">
                              General Member
                            </span>
                          )}
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
    </div>
  );
}
