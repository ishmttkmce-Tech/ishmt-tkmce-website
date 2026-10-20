/**
 * ISHMT TKMCE Student Chapter — Executive Committee & Member Roster (2026–27)
 * Source 1: Official Executive Committee Notification (Date: 23 September 2026)
 * Source 2: Student Chapter Roster Sheet (48 Registered Members)
 */

export const CHAPTER_META = {
  chapterName: "Indian Society for Heat and Mass Transfer (ISHMT)",
  institution: "TKM College of Engineering, Kollam",
  department: "Department of Mechanical Engineering",
  session: "2026–27",
  affiliationStatus: "Affiliated Chapter",
  mentoredBy: "Regional Chapter Trivandrum (RCT)",
  notificationDate: "23 September 2026",
  officialTitle: "Official Executive Appointments (2026–27)",
  mandateText: "The appointed Senior and Junior Executive members will steer the technical events, regional seminars, computational workshops, and chapter operations under the direct mentorship of the ISHMT Trivandrum Regional Chapter for the 2026–2027 academic session."
};

/**
 * 1. SENIOR EXECUTIVE COMMITTEE (SENIOR EXECOM)
 * Total: 13 Executive Positions across Core Leadership and 5 Functional Teams
 */
export const SENIOR_EXECOM = [
  // --- Core Leadership Tier ---
  {
    id: "sen-1",
    name: "Pranav R",
    role: "Chairperson / President",
    team: "Executive Leadership",
    category: "Core Leadership",
    isLead: true,
    isCoreLeadership: true,
    rank: 1,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S7",
    academicBadge: "B.Tech • Mechanical Engineering • S7",
    isFallback: false,
    avatar: "PR",
    bio: "Steering chapter governance, ISHMT RCT coordination, and strategic academic initiatives for the 2026–27 tenure."
  },
  {
    id: "sen-2",
    name: "Rohit Mangalassery",
    rosterNameMatch: "Rohit D Mangalassery",
    role: "Vice Chairperson / Vice President",
    team: "Executive Leadership",
    category: "Core Leadership",
    isLead: true,
    isCoreLeadership: true,
    rank: 2,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S5",
    academicBadge: "B.Tech • Mechanical Engineering • S5",
    isFallback: false,
    avatar: "RM",
    bio: "Assisting chapter operations, inter-departmental synergies, and workshop oversight."
  },
  {
    id: "sen-3",
    name: "Parthiv J Prasad",
    role: "General Secretary",
    team: "Executive Leadership",
    category: "Core Leadership",
    isLead: true,
    isCoreLeadership: true,
    rank: 3,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "2026–27 Session",
    academicBadge: "2026–27 Session",
    isFallback: true,
    avatar: "PP",
    bio: "Managing institutional correspondence, council records, and general chapter logistics."
  },

  // --- Technical Team ---
  {
    id: "sen-4",
    name: "Amal S",
    rosterNameMatch: "AMAL S",
    role: "Technical Team Lead",
    team: "Technical Team",
    category: "Technical",
    isLead: true,
    isCoreLeadership: false,
    rank: 4,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S7",
    academicBadge: "B.Tech • Mechanical Engineering • S7",
    isFallback: false,
    avatar: "AS",
    bio: "Head of simulation toolkits, CFD masterclasses, and thermal hardware bench investigations."
  },
  {
    id: "sen-5",
    name: "Afnan",
    rosterNameMatch: "AFNAN N",
    role: "Technical Team Member",
    team: "Technical Team",
    category: "Technical",
    isLead: false,
    isCoreLeadership: false,
    rank: 5,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S5",
    academicBadge: "B.Tech • Mechanical Engineering • S5",
    isFallback: false,
    avatar: "AN",
    bio: "Supporting computational fluid simulations, code troubleshooting, and lab test rigs."
  },

  // --- Program Coordination (PC) Team ---
  {
    id: "sen-6",
    name: "Amrutha R",
    rosterNameMatch: "Amrutha R",
    role: "Program Coordination Lead",
    team: "Program Coordination Team",
    category: "Program Coordination",
    isLead: true,
    isCoreLeadership: false,
    rank: 6,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S5",
    academicBadge: "B.Tech • Mechanical Engineering • S5",
    isFallback: false,
    avatar: "AR",
    bio: "Directing event scheduling, conclaves, guest lecture curation, and venue execution."
  },
  {
    id: "sen-7",
    name: "Aafiya Junide",
    rosterNameMatch: "Aafiya Junide",
    role: "Program Coordination Member",
    team: "Program Coordination Team",
    category: "Program Coordination",
    isLead: false,
    isCoreLeadership: false,
    rank: 7,
    programme: "B.Tech",
    department: "Chemical Engineering",
    semester: "S3",
    academicBadge: "B.Tech • Chemical Engineering • S3",
    isFallback: false,
    avatar: "AJ",
    bio: "Coordinating multi-tier attendee check-ins, registration pipelines, and delegate hospitality."
  },
  {
    id: "sen-8",
    name: "M.Tech Nominee",
    role: "+1 Nominee (M.Tech Representative)",
    team: "Program Coordination Team",
    category: "Program Coordination",
    isLead: false,
    isCoreLeadership: false,
    isNominee: true,
    rank: 8,
    programme: "M.Tech",
    department: "Thermal Power Engineering",
    semester: "2026–27 Session",
    academicBadge: "M.Tech Nominee • 2026–27 Session",
    isFallback: true,
    avatar: "MT",
    bio: "Postgraduate liaison bringing advanced research synchronization to chapter programs."
  },

  // --- Media & Design Team ---
  {
    id: "sen-9",
    name: "Arjun R",
    role: "Media & Design Lead",
    team: "Media & Design Team",
    category: "Media & Design",
    isLead: true,
    isCoreLeadership: false,
    rank: 9,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "2026–27 Session",
    academicBadge: "2026–27 Session",
    isFallback: true,
    avatar: "AR",
    bio: "Art direction, technical infographics, poster design, and digital event branding."
  },
  {
    id: "sen-10",
    name: "Abhinav K",
    rosterNameMatch: "Abhinav k",
    role: "Media & Design Member",
    team: "Media & Design Team",
    category: "Media & Design",
    isLead: false,
    isCoreLeadership: false,
    rank: 10,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S5",
    academicBadge: "B.Tech • Mechanical Engineering • S5",
    isFallback: false,
    avatar: "AK",
    bio: "Video production, motion graphics, and chapter social media creative assets."
  },

  // --- Public Relations (PR) Team ---
  {
    id: "sen-11",
    name: "Vinayak V",
    role: "Public Relations Lead",
    team: "Public Relations (PR) Team",
    category: "Public Relations",
    isLead: true,
    isCoreLeadership: false,
    rank: 11,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "2026–27 Session",
    academicBadge: "2026–27 Session",
    isFallback: true,
    avatar: "VV",
    bio: "Spearheading chapter outreach, industry liaison with ISRO/DRDO mentors, and press briefs."
  },
  {
    id: "sen-12",
    name: "Anugraha Asok",
    rosterNameMatch: "Anugraha Asok",
    role: "Public Relations Member",
    team: "Public Relations (PR) Team",
    category: "Public Relations",
    isLead: false,
    isCoreLeadership: false,
    rank: 12,
    programme: "B.Tech",
    department: "Chemical Engineering",
    semester: "S3",
    academicBadge: "B.Tech • Chemical Engineering • S3",
    isFallback: false,
    avatar: "AA",
    bio: "Student delegate relations, inter-college invitations, and chapter promotion drives."
  },

  // --- Finance & Documentation ---
  {
    id: "sen-13",
    name: "Ashwa",
    role: "Finance & Documentation Lead",
    team: "Finance & Documentation",
    category: "Finance & Documentation",
    isLead: true,
    isCoreLeadership: false,
    rank: 13,
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "2026–27 Session",
    academicBadge: "2026–27 Session",
    isFallback: true,
    avatar: "AS",
    bio: "Overseeing budget allocations, voucher audits, annual chapter reports, and financial registry."
  }
];

/**
 * 2. JUNIOR EXECUTIVE COMMITTEE (JUNIOR EXECOM)
 * Total: 6 Appointed Members mapped to Operational Tracks
 */
export const JUNIOR_EXECOM = [
  {
    id: "jun-1",
    name: "Amal Sebastian",
    rosterNameMatch: "Amal Sebastian",
    track: "Technical Track",
    focus: "Simulation Toolkits & Lab Support",
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S3",
    academicBadge: "B.Tech • Mechanical Engineering • S3",
    avatar: "AS",
    trackColor: "cyan"
  },
  {
    id: "jun-2",
    name: "Kashinathan M P",
    rosterNameMatch: "KASINATHAN M P",
    track: "Technical Track",
    focus: "Hands-on Setup & Code Troubleshooting",
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S5",
    academicBadge: "B.Tech • Mechanical Engineering • S5",
    avatar: "KM",
    trackColor: "cyan"
  },
  {
    id: "jun-3",
    name: "Meenakshi D R",
    rosterNameMatch: "Meenakshi D R",
    track: "Program Coordination (PC) Track",
    focus: "Venue Logistics & Attendee Check-In",
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S3",
    academicBadge: "B.Tech • Mechanical Engineering • S3",
    avatar: "MD",
    trackColor: "rose"
  },
  {
    id: "jun-4",
    name: "Nidhin Sabu",
    rosterNameMatch: "NIDHINSABU",
    track: "Program Coordination (PC) Track",
    focus: "Stage Management & Event Operations",
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S5",
    academicBadge: "B.Tech • Mechanical Engineering • S5",
    avatar: "NS",
    trackColor: "rose"
  },
  {
    id: "jun-5",
    name: "Denny J Mangalathu",
    rosterNameMatch: "Denny J Mangalathu",
    track: "Dual PC / Public Relations (PR)",
    focus: "Cross-Functional Operations & Outreach",
    programme: "B.Tech",
    department: "Mechanical Engineering",
    semester: "S3",
    academicBadge: "B.Tech • Mechanical Engineering • S3",
    avatar: "DM",
    trackColor: "amber"
  },
  {
    id: "jun-6",
    name: "Nithin Sunil Mathews",
    rosterNameMatch: "Nithin Sunil Mathews",
    track: "Finance & Documentation Track",
    focus: "Audit Archival, Vouchers & Registry",
    programme: "B.Tech",
    department: "Chemical Engineering",
    semester: "S3",
    academicBadge: "B.Tech • Chemical Engineering • S3",
    avatar: "NM",
    trackColor: "emerald"
  }
];

/**
 * 3. STUDENT CHAPTER COMPLETE ROSTER (48 Members)
 * Cross-referenced with Execom status
 */
export const ALL_ROSTER_MEMBERS = [
  { id: 1,  name: "Denny J Mangalathu",       programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 2,  name: "Akash S S",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 3,  name: "Mohamed jalib P I",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 4,  name: "Pranav R",                 programme: "B.Tech", department: "Mechanical Engineering", semester: "S7", isExecom: true,  execomRole: "Chairperson / President", execomTier: "senior" },
  { id: 5,  name: "Nithin Sunil Mathews",     programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 6,  name: "Samson V Philipose",       programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 7,  name: "Adithyan M Rajesh",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 8,  name: "Meenakshi D R",            programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 9,  name: "Aravindkishore S",         programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 10, name: "Amal Sebastian",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: true,  execomRole: "Junior Execom (Technical Track)", execomTier: "junior" },
  { id: 11, name: "Ajay B",                   programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 12, name: "Ajmi Midhlaj",             programme: "Ph.D.",  department: "Mechanical Engineering", semester: "Ph.D.", isExecom: false, execomRole: null, execomTier: null },
  { id: 13, name: "Abin Das Y",               programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 14, name: "Sreeenivas Prasad Prabhu", programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 15, name: "Gokul Krishna k",          programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 16, name: "Faris Rahman A P",         programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 17, name: "Anex Antony C",            programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 18, name: "Alby Sunu Joseph",         programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 19, name: "Muhammad Asif Ansari",     programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 20, name: "Nafih Jidan K M",          programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 21, name: "Pranav P",                 programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 22, name: "A K Rohit",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 23, name: "Aamy Baiju",               programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 24, name: "Sravan J N",               programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 25, name: "Arwyn Saju",               programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 26, name: "Abhirami S",               programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 27, name: "Agasree Gopindran",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 28, name: "Amrutha R",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: true,  execomRole: "Program Coordination Lead", execomTier: "senior" },
  { id: 29, name: "Krishnaja S",              programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 30, name: "Abhinav k",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: true,  execomRole: "Media & Design Member", execomTier: "senior" },
  { id: 31, name: "Abhijith S Das",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 32, name: "Adhil Backer A",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 33, name: "Noora Fathima B S",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 34, name: "Aseel K",                  programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 35, name: "Kiran J Sebastian",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 36, name: "Aarif Nazar",              programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 37, name: "Arjun S",                  programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 38, name: "Nidhin Sabu",              programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: true,  execomRole: "Junior Execom (PC Track)", execomTier: "junior" },
  { id: 39, name: "Kasinathan M P",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: true,  execomRole: "Junior Execom (Technical Track)", execomTier: "junior" },
  { id: 40, name: "Aafiya Junide",            programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: true,  execomRole: "Program Coordination Member", execomTier: "senior" },
  { id: 41, name: "Anugraha Asok",            programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: true,  execomRole: "PR Team Member", execomTier: "senior" },
  { id: 42, name: "Riya Biju",                programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: false, execomRole: null, execomTier: null },
  { id: 43, name: "Amal S",                   programme: "B.Tech", department: "Mechanical Engineering", semester: "S7", isExecom: true,  execomRole: "Technical Team Lead", execomTier: "senior" },
  { id: 44, name: "Rohit D Mangalassery",     programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: true,  execomRole: "Vice Chairperson / Vice President", execomTier: "senior" },
  { id: 45, name: "Anna Roman",               programme: "B.Tech", department: "Mechanical Engineering", semester: "S7", isExecom: false, execomRole: null, execomTier: null },
  { id: 46, name: "Afnan N",                  programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: true,  execomRole: "Technical Team Member", execomTier: "senior" },
  { id: 47, name: "Suryajith Sunil",          programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
  { id: 48, name: "Karthik Troy",             programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null }
];

/**
 * Filter Helper Functions
 */
export const getGeneralMembersOnly = () => ALL_ROSTER_MEMBERS.filter(m => !m.isExecom);
export const getExecomMembersOnly = () => ALL_ROSTER_MEMBERS.filter(m => m.isExecom);

export const getSemesterCounts = () => {
  return ALL_ROSTER_MEMBERS.reduce((acc, curr) => {
    acc[curr.semester] = (acc[curr.semester] || 0) + 1;
    return acc;
  }, {});
};

export const getDepartmentCounts = () => {
  return ALL_ROSTER_MEMBERS.reduce((acc, curr) => {
    acc[curr.department] = (acc[curr.department] || 0) + 1;
    return acc;
  }, {});
};
