/**
 * ISHMT RCT STUDENTS CHAPTER - TKMCE
 * Master Application Controller:
 * 1. Master SiteConfig JSON Blueprint (Interconnected Store & Cross-Tab Sync)
 * 2. Public Read-Only User Phase with 3-Stage Logo Motion & Header Docking
 * 3. Protected Admin Login (#/login) & Master Control Studio (#/admin)
 * 4. Powerful Direct Click-to-Edit WYSIWYG & Full Page Content Customization
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DEFAULT DATA OBJECTS & SCHEMAS
  // ==========================================================================

  const DEFAULT_EXECOM_DATA = {
    meta: {
      chapterName: "Indian Society for Heat and Mass Transfer (ISHMT)",
      institution: "TKM College of Engineering, Kollam",
      department: "Department of Mechanical Engineering",
      session: "2026–27",
      notificationDate: "23 September 2026",
      mandate: "The appointed Senior and Junior Executive members will steer the technical events, regional seminars, computational workshops, and chapter operations under the direct mentorship of the ISHMT Trivandrum Regional Chapter for the 2026–2027 academic session."
    },
    seniorExecom: [
      { id: "sen-1", name: "Pranav R", role: "Chairperson / President", team: "Executive Leadership", isLead: true, isCore: true, badge: "B.Tech • Mechanical Engineering • S7", avatar: "PR", avatarUrl: "avatars/exec-avatar-sen-1.webp", bio: "Steering chapter governance, ISHMT RCT coordination, and strategic academic initiatives for the 2026–27 tenure." },
      { id: "sen-2", name: "Rohit Mangalassery", role: "Vice Chairperson / Vice President", team: "Executive Leadership", isLead: true, isCore: true, badge: "B.Tech • Mechanical Engineering • S5", avatar: "RM", avatarUrl: "avatars/exec-avatar-sen-2.webp", bio: "Assisting chapter operations, inter-departmental synergies, and workshop oversight." },
      { id: "sen-3", name: "Parthiv J Prasad", role: "General Secretary", team: "Executive Leadership", isLead: true, isCore: true, badge: "B.Tech • Mechanical Engineering • S7", avatar: "PP", avatarUrl: "avatars/exec-avatar-sen-3.webp", bio: "Managing institutional correspondence, council records, and general chapter logistics." },
      { id: "sen-4", name: "Amal S", role: "Technical Team Lead", team: "Technical Team", isLead: true, isCore: false, badge: "B.Tech • Mechanical Engineering • S7", avatar: "AS", avatarUrl: "avatars/exec-avatar-sen-4.webp", bio: "Head of simulation toolkits, CFD masterclasses, and thermal hardware bench investigations." },
      { id: "sen-5", name: "Afnan", role: "Technical Team Member", team: "Technical Team", isLead: false, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AN", avatarUrl: null, bio: "Supporting computational fluid simulations, code troubleshooting, and lab test rigs." },
      { id: "sen-6", name: "Amrutha R", role: "Program Coordination Lead", team: "Program Coordination Team", isLead: true, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AR", avatarUrl: "avatars/exec-avatar-sen-6.webp", bio: "Directing event scheduling, conclaves, guest lecture curation, and venue execution." },
      { id: "sen-7", name: "Aafiya Junide", role: "Program Coordination Member", team: "Program Coordination Team", isLead: false, isCore: false, badge: "B.Tech • Chemical Engineering • S3", avatar: "AJ", avatarUrl: "avatars/exec-avatar-sen-7.webp", bio: "Coordinating attendee check-ins, registration pipelines, and delegate hospitality." },
      { id: "sen-9", name: "Arjun R", role: "Media & Design Lead", team: "Media & Design Team", isLead: true, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AR", avatarUrl: null, bio: "Art direction, technical infographics, poster design, and digital event branding." },
      { id: "sen-10", name: "Abhinav K", role: "Media & Design Member", team: "Media & Design Team", isLead: false, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AK", avatarUrl: null, bio: "Video production, motion graphics, and chapter social media creative assets." },
      { id: "sen-11", name: "Vinayak V", role: "Public Relations Lead", team: "Public Relations (PR) Team", isLead: true, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "VV", avatarUrl: null, bio: "Spearheading chapter outreach, industry liaison with ISRO/DRDO mentors, and press briefs." },
      { id: "sen-12", name: "Anugraha Asok", role: "Public Relations Member", team: "Public Relations (PR) Team", isLead: false, isCore: false, badge: "B.Tech • Chemical Engineering • S3", avatar: "AA", avatarUrl: "avatars/exec-avatar-sen-12.webp", bio: "Student delegate relations, inter-college invitations, and chapter promotion drives." },
      { id: "sen-13", name: "Ashwa", role: "Finance & Documentation Lead", team: "Finance & Documentation", isLead: true, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AS", avatarUrl: null, bio: "Overseeing budget allocations, voucher audits, annual chapter reports, and financial registry." }
    ],
    juniorExecom: [
      { id: "jun-1", name: "Amal Sebastian", track: "Technical Track", focus: "Simulation Toolkits & Lab Support", badge: "B.Tech • Mechanical Engineering • S3", avatar: "AS", avatarUrl: "avatars/exec-avatar-jun-1.webp", color: "cyan", bio: "Assisting simulation workshops, OpenFOAM setup sessions, and student lab project support." },
      { id: "jun-2", name: "Kasinathan M P", track: "Technical Track", focus: "Hands-on Setup & Code Troubleshooting", badge: "B.Tech • Mechanical Engineering • S5", avatar: "KM", avatarUrl: "avatars/exec-avatar-jun-2.webp", color: "cyan", bio: "Conducting hands-on thermal laboratory apparatus calibration and code troubleshooting." },
      { id: "jun-3", name: "Meenakshi D R", track: "Program Coordination (PC) Track", focus: "Venue Logistics & Attendee Check-In", badge: "B.Tech • Mechanical Engineering • S3", avatar: "MD", avatarUrl: "avatars/exec-avatar-jun-3.webp", color: "rose", bio: "Managing venue seating logistics, guest hospitality, and registration desk coordination." },
      { id: "jun-4", name: "Nidhin Sabu", track: "Program Coordination (PC) Track", focus: "Stage Management & Event Operations", badge: "B.Tech • Mechanical Engineering • S5", avatar: "NS", avatarUrl: "avatars/exec-avatar-jun-4.webp", color: "rose", bio: "Supervising stage audio-visual equipment, event run-sheets, and hall management." },
      { id: "jun-5", name: "Denny J Mangalathu", track: "Dual PC / Public Relations", focus: "Cross-Functional Operations & Outreach", badge: "B.Tech • Mechanical Engineering • S3", avatar: "DM", avatarUrl: "avatars/exec-avatar-jun-5.webp", color: "amber", bio: "Facilitating inter-departmental communications, public relations, and delegate assistance." },
      { id: "jun-6", name: "Nithin Sunil Mathews", track: "Finance & Documentation Track", focus: "Audit Archival, Vouchers & Registry", badge: "B.Tech • Chemical Engineering • S3", avatar: "NM", avatarUrl: "avatars/exec-avatar-jun-6.webp", color: "emerald", bio: "Maintaining chapter vouchers, meeting minutes archival, and financial registry books." }
    ],
    roster: [
      { id: 1,  name: "Denny J Mangalathu",       programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 2,  name: "Akash S S",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 3,  name: "Mohamed jalib P I",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 4,  name: "Pranav R",                 programme: "B.Tech", department: "Mechanical Engineering", semester: "S7", isExecom: false, execomRole: null, execomTier: null },
      { id: 5,  name: "Nithin Sunil Mathews",     programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 6,  name: "Samson V Philipose",       programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 7,  name: "Adithyan M Rajesh",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 8,  name: "Meenakshi D R",            programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 9,  name: "Aravindkishore S",         programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 10, name: "Amal Sebastian",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
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
      { id: 28, name: "Amrutha R",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 29, name: "Krishnaja S",              programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 30, name: "Abhinav k",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 31, name: "Abhijith S Das",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 32, name: "Adhil Backer A",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 33, name: "Noora Fathima B S",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 34, name: "Aseel K",                  programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 35, name: "Kiran J Sebastian",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 36, name: "Aarif Nazar",              programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 37, name: "Arjun S",                  programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 38, name: "Nidhin Sabu",              programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 39, name: "Kasinathan M P",           programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 40, name: "Aafiya Junide",            programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 41, name: "Anugraha Asok",            programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 42, name: "Riya Biju",                programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 43, name: "Amal S",                   programme: "B.Tech", department: "Mechanical Engineering", semester: "S7", isExecom: false, execomRole: null, execomTier: null },
      { id: 44, name: "Rohit D Mangalassery",     programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 45, name: "Anna Roman",               programme: "B.Tech", department: "Mechanical Engineering", semester: "S7", isExecom: false, execomRole: null, execomTier: null },
      { id: 46, name: "Afnan N",                  programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 47, name: "Suryajith Sunil",          programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null },
      { id: 48, name: "Karthik Troy",             programme: "B.Tech", department: "Mechanical Engineering", semester: "S5", isExecom: false, execomRole: null, execomTier: null }
    ]
  };

  const EXECOM_ROSTER_DATA = DEFAULT_EXECOM_DATA;

  const DEFAULT_HOME_DATA = {
    eyebrowBadge: "WELCOME TO ISHMT-TKMCE STUDENT CHAPTER",
    heroHeading: "Welcome to the ISHMT Student Chapter at TKM College of Engineering",
    heroBody: "We warmly welcome students, faculty, researchers, and engineering innovators to the Indian Society for Heat and Mass Transfer (ISHMT-RCT) Students Chapter at Thangal Kunju Musaliar College of Engineering, Kollam. Anchored in the Department of Mechanical Engineering, our chapter is your community to explore thermal sciences, energy transition, and computational fluid dynamics through hands-on workshops, lab research, and national academic collaborations.",
    primaryBtnText: "Become a Member",
    primaryBtnUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform?usp=dialog",
    secondaryBtnText: "About Us",
    stats: [
      { id: "stat-1", value: "50+", label: "Student Members & Alumni" },
      { id: "stat-2", value: "1973", label: "National ISHMT Scientific Legacy" }
    ],
    aboutHeading: "About the Chapter",
    aboutP1: "The Indian Society for Heat and Mass Transfer (ISHMT) is India’s foremost professional body dedicated to disseminating science and engineering across heat transfer, mass transport, thermodynamics, and energy systems. Affiliated regionally with ISHMT-RCT (Trivandrum), the student chapter at TKM College of Engineering serves as a technical hub bridging foundational engineering coursework with modern research and industrial applications.",
    aboutP2: "We nurture a collaborative culture where students engage directly with peer researchers, faculty mentors, and visiting scientists from premier organizations like ISRO/VSSC, national laboratories, and academic institutions.",
    offersHeading: "What We Offer",
    offers: [
      {
        id: "offer-1",
        icon: "lecture",
        title: "Distinguished Lecture Series",
        desc: "Expert technical seminars led by ISHMT fellows, aerospace scientists, and industry leaders."
      },
      {
        id: "offer-2",
        icon: "bootcamp",
        title: "Simulation & Tool Bootcamps",
        desc: "Practical training in OpenFOAM, ANSYS Fluent, meshing, and numerical heat transfer."
      },
      {
        id: "offer-3",
        icon: "hardware",
        title: "Hardware & R&D Projects",
        desc: "Prototyping heat pipes, phase-change thermal storage units, and solar collectors in TKMCE labs."
      },
      {
        id: "offer-4",
        icon: "mentorship",
        title: "Conference Mentorship",
        desc: "Guidance for publishing papers and participating in the biennial ISHMT-ASTFE International Conference (IHMTC)."
      }
    ]
  };

  const DEFAULT_CONTACT_DATA = {
    bannerTitle: "Contact Us",
    bannerSubtitle: "Indian Society for Heat and Mass Transfer • TKMCE Student Chapter & Regional Chapter",
    formTitle: "Send an Inquiry",
    formSubtitle: "Connect with our faculty coordinators, executive council, or regional liaisons for student membership, academic partnerships, or workshop inquiries.",
    studentChapter: {
      badge: "Student Chapter Base",
      title: "ISHMT Student Chapter – TKMCE",
      line1: "Department of Mechanical Engineering,",
      line2: "TKM College of Engineering,",
      line3: "Karicode, Kollam, Kerala – 691 005"
    },
    regionalChapter: {
      badge: "Regional Chapter",
      title: "ISHMT - Regional Chapter, Trivandrum",
      line1: "PRS Entity, LPSC, Valiamala,",
      line2: "Trivandrum, Kerala – 695 547",
      email: "ishmtkerala@gmail.com"
    }
  };

  // Helper Functions for Deep Operations
  function deepClone(obj) {
    if (obj === undefined) return undefined;
    return JSON.parse(JSON.stringify(obj));
  }

  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    for (const key of Object.keys(source)) {
      if (source[key] !== undefined) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
            target[key] = {};
          }
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  }

  function getDeepValue(obj, path) {
    if (!obj || !path) return undefined;
    const parts = path.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function setDeepValue(obj, path, val) {
    if (!obj || !path) return false;
    const parts = path.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      if (cur[p] === undefined || cur[p] === null || typeof cur[p] !== 'object') {
        cur[p] = /^\\d+$/.test(parts[i + 1]) ? [] : {};
      }
      cur = cur[p];
    }
    cur[parts[parts.length - 1]] = val;
    return true;
  }

  // ==========================================================================
  // 2. MASTER SITE DEFAULT BLUEPRINT SCHEMA
  // ==========================================================================
  const DEFAULT_BLUEPRINT = {
    globalTheme: {
      primaryColor: '#8B0D1A',
      charcoalColor: '#0B0B0B',
      secondaryTextColor: '#0B0B0B',
      mutedTextColor: '#555555',
      canvasBg: '#F5F2ED',
      headerGradient: 'linear-gradient(90deg, #F5F2ED 0%, #FAF7F2 45%, rgba(139, 13, 26, 0.08) 78%, rgba(11, 11, 11, 0.05) 100%)',
      headerBorderColor: 'rgba(139, 13, 26, 0.22)',
      fontFamily: "'Oswald', sans-serif",
      borderRadius: '12px'
    },
    navigation: [
      { id: 'nav-home', label: 'HOME', path: '/', isPublic: true },
      { id: 'nav-events', label: 'EVENTS & WORKSHOPS', path: '/events', isPublic: true },
      { id: 'nav-team', label: 'EXECUTIVE TEAM', path: '/team', isPublic: true },
      { id: 'nav-gallery', label: 'GALLERY', path: '/gallery', isPublic: true },
      { id: 'nav-contact', label: 'CONTACT', path: '/contact', isPublic: true }
    ],
    execomData: DEFAULT_EXECOM_DATA,
    homeData: DEFAULT_HOME_DATA,
    contactData: DEFAULT_CONTACT_DATA,
    inlineOverrides: {},
    pages: {
      '/': {
        title: 'Home',
        slug: '/',
        sections: [
          {
            id: 'sec-academic-home',
            type: 'academic-home',
            layout: { containerWidth: 'full', paddingY: 'none', bgType: 'canvas', visible: true },
            content: {}
          }
        ]
      },
      '/events': {
        title: 'Events & Workshops',
        slug: '/events',
        sections: [
          {
            id: 'sec-events-hero',
            type: 'hero',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'crimson-tint', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Academic & Industry Events',
              title: 'Flagship Workshops & Thermal Colloquiums',
              subtitle: 'Hands-on technical boot camps, national hackathons, and industrial masterclasses hosted by ISHMT RCT Students Chapter TKMCE.',
              button1Text: 'Register for Upcoming Event',
              button1Url: '#/contact'
            }
          },
          {
            id: 'sec-events-grid',
            type: 'grid-cards',
            layout: { columns: 2, containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'left', visible: true },
            content: {
              eyebrow: 'Upcoming & Recent Programs',
              title: 'Featured Chapter Activities',
              description: 'Participate in peer-reviewed technical challenges and gain recognized certifications.',
              items: [
                {
                  id: 'ev-1',
                  tag: 'Hackathon',
                  title: 'THERMO-HACK 2026: Heat Exchanger Design',
                  description: 'A 36-hour national challenge focused on generative compact heat exchanger core geometry optimization.',
                  linkText: 'Event Details →',
                  linkUrl: '#/contact'
                },
                {
                  id: 'ev-2',
                  tag: 'Workshop',
                  title: 'OpenFOAM & Thermal Meshing Intensive',
                  description: 'Comprehensive 3-day boot camp on mesh generation with snappyHexMesh and conjugate heat transfer solvers.',
                  linkText: 'Register Now →',
                  linkUrl: '#/contact'
                },
                {
                  id: 'ev-3',
                  tag: 'Distinguished Lecture',
                  title: 'Advances in Spacecraft Thermal Shielding',
                  description: 'Keynote lecture by Dr. S. Ramanathan, Senior Scientist at Liquid Propulsion Systems Centre (LPSC / ISRO).',
                  linkText: 'View Keynote Summary →',
                  linkUrl: '#/contact'
                },
                {
                  id: 'ev-4',
                  tag: 'Field Visit',
                  title: 'NTPC Combined Cycle Power Plant Tour',
                  description: 'On-site technical inspection of superheaters, condensers, and cooling towers for chapter members.',
                  linkText: 'View Gallery →',
                  linkUrl: '#/gallery'
                }
              ]
            }
          }
        ]
      },
      '/team': {
        title: 'Executive Team',
        slug: '/team',
        sections: [
          {
            id: 'sec-execom-main',
            type: 'execom-directory',
            layout: { containerWidth: 'wide', paddingY: 'sm', bgType: 'canvas', alignment: 'center', visible: true },
            content: {}
          }
        ]
      },
      '/gallery': {
        title: 'Gallery',
        slug: '/gallery',
        sections: [
          {
            id: 'sec-gallery-hero',
            type: 'hero',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'crimson-tint', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Visual Documentation & Archives',
              title: 'Chapter Gallery & Photo Archives',
              subtitle: 'Visual records of technical workshops, computational bootcamps, laboratory demonstrations, and industrial visits of the ISHMT TKMCE Student Chapter.',
              button1Text: 'View Events & Programs',
              button1Url: '#/events'
            }
          }
        ]
      },
      '/contact': {
        title: 'Contact',
        slug: '/contact',
        sections: [
          {
            id: 'sec-academic-contact',
            type: 'academic-contact',
            layout: { containerWidth: 'full', paddingY: 'none', bgType: 'canvas', visible: true },
            content: {}
          }
        ]
      }
    }
  };

  // ==========================================================================
  // 3. CENTRAL DATA STORE (localStorage + Real-time Cross-tab Sync)
  // ==========================================================================
  const STORAGE_KEY = 'ishmt_site_blueprint_v18_hierarchical_modal';
  const AUTH_KEY = 'ishmt_admin_session';

  const SiteStore = {
    blueprint: null,

    init() {
      try {
        // Complete purge of older stale cache keys
        const staleKeys = [
          'ishmt_site_blueprint_v1', 'ishmt_site_blueprint_v2', 'ishmt_site_blueprint_v3',
          'ishmt_site_blueprint_2026', 'ishmt_site_blueprint_2026_27_v1', 'ishmt_site_blueprint_2026_27_live',
          'ishmt_site_blueprint_2026_27_minimal', 'ishmt_site_blueprint_v4_minimal', 'ishmt_site_blueprint_v5_academic',
          'ishmt_site_blueprint_v6_academic', 'ishmt_site_blueprint_v7_academic', 'ishmt_site_blueprint_v8_contact_footer',
          'ishmt_site_blueprint_v9_rct_logo', 'ishmt_site_blueprint_v10_studio', 'ishmt_site_blueprint_v11_motion_audit',
          'ishmt_site_blueprint_v12_gallery_cleanup', 'ishmt_site_blueprint_v13_members_update',
          'ishmt_site_blueprint_v14_footer_cleanup', 'ishmt_site_blueprint_v15_team_update',
          'ishmt_site_blueprint_v16_photo_cropper_security', 'ishmt_site_blueprint_v17_live_sync'
        ];
        staleKeys.forEach(k => {
          try { localStorage.removeItem(k); } catch (e) {}
        });

        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            this.blueprint = deepMerge(deepClone(DEFAULT_BLUEPRINT), parsed);
          } catch (e) {
            console.warn('Could not parse stored blueprint, resetting to default:', e);
            this.blueprint = deepClone(DEFAULT_BLUEPRINT);
          }
        } else {
          this.blueprint = deepClone(DEFAULT_BLUEPRINT);
          this.save(this.blueprint, false);
        }
      } catch (e) {
        console.warn('Error initializing SiteStore, using default blueprint:', e);
        this.blueprint = deepClone(DEFAULT_BLUEPRINT);
      }

      this.applyThemeVariables();

      // Listen for cross-tab updates!
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY && e.newValue) {
          try {
            this.blueprint = JSON.parse(e.newValue);
            this.applyThemeVariables();
            App.onBlueprintUpdated();
            App.showToast('Site blueprint updated from another tab.');
          } catch (err) {
            console.error('Cross-tab sync parsing error:', err);
          }
        }
      });
    },

    get() {
      return this.blueprint || DEFAULT_BLUEPRINT;
    },

    save(newConfig, notify = true) {
      this.blueprint = newConfig;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.blueprint));
      } catch (e) {
        console.error('Failed to save to localStorage:', e);
      }
      this.applyThemeVariables();
      if (notify) {
        App.onBlueprintUpdated();
      }
    },

    resetToDefault() {
      this.blueprint = deepClone(DEFAULT_BLUEPRINT);
      this.save(this.blueprint, true);
    },

    applyThemeVariables() {
      if (!this.blueprint || !this.blueprint.globalTheme) return;
      const theme = this.blueprint.globalTheme;
      const root = document.documentElement;

      if (theme.primaryColor) {
        root.style.setProperty('--theme-primary', theme.primaryColor);
        root.style.setProperty('--studio-accent', theme.primaryColor);
      }
      if (theme.charcoalColor) {
        root.style.setProperty('--theme-charcoal', theme.charcoalColor);
        root.style.setProperty('--theme-secondary', theme.charcoalColor);
      }
      if (theme.canvasBg) root.style.setProperty('--theme-canvas', theme.canvasBg);
      if (theme.headerGradient) root.style.setProperty('--theme-header-gradient', theme.headerGradient);
      if (theme.headerBorderColor) root.style.setProperty('--theme-border-color', theme.headerBorderColor);
      if (theme.fontFamily) root.style.setProperty('--theme-font-family', theme.fontFamily);
      if (theme.borderRadius) root.style.setProperty('--theme-border-radius', theme.borderRadius);
    }
  };

  // ==========================================================================
  // 4. AUTHENTICATION SERVICE (#/login)
  // ==========================================================================
  const AuthService = {
    isAuthenticated() {
      return sessionStorage.getItem(AUTH_KEY) === 'true';
    },

    login(username, password) {
      // Demo credentials
      if (username.trim().toLowerCase() === 'admin' && password === 'ishmt2026') {
        sessionStorage.setItem(AUTH_KEY, 'true');
        return true;
      }
      return false;
    },

    logout() {
      sessionStorage.removeItem(AUTH_KEY);
    }
  };

  // ==========================================================================
  // 5. INTRO MOTION CONTROLLER (3-STAGE LOGO MOTION & HEADER DOCKING)
  // ==========================================================================
  const IntroMotion = {
    hasPlayedIntro: false,
    headerHeight: 96,
    headerLeftOffset: 32,
    lockupMetrics: { centerTx: 0, centerTy: 0, logoShift: 0, dockScale: 0.32 },

    calculateMetrics() {
      const container = document.getElementById('lockup-container');
      const lockup = document.getElementById('lockup');
      if (!container || !lockup) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const isMobile = viewportWidth < 768;
      const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

      this.headerHeight = isMobile ? 80 : 96;
      this.headerLeftOffset = isMobile ? 16 : 32;
      const containerTop = isMobile ? 12 : 16;

      // Unconstrained natural dimensions of the lockup
      const lockupWidth = lockup.offsetWidth || 600;
      const lockupHeight = lockup.offsetHeight || 190;

      // Translation required to position lockup precisely in the viewport center
      const centerTx = (viewportWidth / 2) - (lockupWidth / 2) - this.headerLeftOffset;
      const centerTy = (viewportHeight / 2) - (lockupHeight / 2) - containerTop;

      // In Stage 1, the circular emblem (200px wide) is shifted to the exact viewport center
      const logoShift = (lockupWidth / 2) - 100;

      let dockScale = 0.32;
      let introScale = 2.25;
      if (isMobile) {
        dockScale = 0.24;
        introScale = 1.3;
      } else if (isTablet) {
        dockScale = 0.28;
        introScale = 1.75;
      }

      // Dynamically update root CSS variables for pixel-perfect transitions
      document.documentElement.style.setProperty('--center-tx', `${Math.round(centerTx)}px`);
      document.documentElement.style.setProperty('--center-ty', `${Math.round(centerTy)}px`);
      document.documentElement.style.setProperty('--logo-shift', `${Math.round(logoShift)}px`);
      document.documentElement.style.setProperty('--dock-scale', `${dockScale}`);
      document.documentElement.style.setProperty('--intro-scale', `${introScale}`);

      this.lockupMetrics = {
        centerTx: Math.round(centerTx),
        centerTy: Math.round(centerTy),
        logoShift: Math.round(logoShift),
        dockScale,
        introScale
      };
    },

    play(callback) {
      const container = document.getElementById('lockup-container');
      const logoWrapper = document.getElementById('logo-wrapper');
      const textBlock = document.getElementById('text-block');
      const headerBar = document.getElementById('header-bar');
      const publicView = document.getElementById('public-view');

      if (!container || !logoWrapper || !textBlock || !headerBar) {
        document.body.classList.remove('loading-state');
        if (callback) callback();
        return;
      }

      // Temporarily lock body scroll during the 1.8s intro animation
      document.body.classList.add('loading-state');

      this.calculateMetrics();

      // Reset all docked and stage states
      container.classList.remove('docked');
      container.classList.add('centered');
      logoWrapper.classList.remove('stage-2', 'docked');
      textBlock.classList.remove('stage-2', 'docked');
      headerBar.classList.remove('docked', 'visible');
      if (publicView) {
        publicView.classList.remove('visible');
      }

      // Clear inline transforms so CSS variables control initial centered geometry
      container.style.transition = 'none';
      container.style.transform = `translate(${this.lockupMetrics.centerTx}px, ${this.lockupMetrics.centerTy}px) scale(1)`;
      logoWrapper.style.transition = 'none';
      logoWrapper.style.transform = `translateX(${this.lockupMetrics.logoShift}px) scale(${this.lockupMetrics.introScale})`;
      textBlock.style.transition = 'none';
      textBlock.style.opacity = '0';
      textBlock.style.transform = 'translateX(-180px)';

      void container.offsetWidth; // Force reflow

      // Re-enable CSS transitions
      container.style.transition = '';
      logoWrapper.style.transition = '';
      textBlock.style.transition = '';

      // Stage 1: Isolated Emblem Breathing in Center
      container.classList.add('stage-1');
      logoWrapper.classList.add('stage-1');
      textBlock.classList.add('stage-1');

      // Stage 2 (t=800ms): Emblem shifts to lockup origin, typography smoothly reveals
      setTimeout(() => {
        logoWrapper.classList.remove('stage-1');
        logoWrapper.classList.add('stage-2');
        logoWrapper.style.transform = '';

        textBlock.classList.remove('stage-1');
        textBlock.classList.add('stage-2');
        textBlock.style.opacity = '';
        textBlock.style.transform = '';
      }, 800);

      // Stage 3 (t=1800ms): Lockup glides into top header bar with fluid deceleration
      setTimeout(() => {
        container.classList.remove('centered', 'stage-1');
        container.classList.add('docked');
        container.style.transform = `translate(0px, 0px) scale(${this.lockupMetrics.dockScale})`;

        logoWrapper.classList.add('docked');
        textBlock.classList.add('docked');
        headerBar.classList.add('docked', 'visible');
      }, 1800);

      // Phase 4 (t=2350ms): Smooth transition after Phase 3 - page content glides in gracefully
      setTimeout(() => {
        if (publicView) {
          publicView.classList.add('visible');
        }

        // Unlock body scroll once the page content begins its smooth reveal
        document.body.classList.remove('loading-state');

        this.hasPlayedIntro = true;
        if (callback) callback();
      }, 2350);
    },

    setInstantDocked() {
      const container = document.getElementById('lockup-container');
      const logoWrapper = document.getElementById('logo-wrapper');
      const textBlock = document.getElementById('text-block');
      const headerBar = document.getElementById('header-bar');
      const publicView = document.getElementById('public-view');

      if (!container || !logoWrapper || !textBlock || !headerBar) return;

      this.calculateMetrics();

      container.style.transition = 'none';
      logoWrapper.style.transition = 'none';
      textBlock.style.transition = 'none';
      headerBar.style.transition = 'none';

      container.classList.remove('centered', 'stage-1');
      container.classList.add('docked');
      container.style.transform = `translate(0px, 0px) scale(${this.lockupMetrics.dockScale})`;

      logoWrapper.classList.remove('stage-1');
      logoWrapper.classList.add('stage-2', 'docked');
      logoWrapper.style.transform = '';

      textBlock.classList.remove('stage-1');
      textBlock.classList.add('stage-2', 'docked');
      textBlock.style.transform = '';
      textBlock.style.opacity = '';

      headerBar.classList.add('docked', 'visible');

      void container.offsetWidth;

      container.style.transition = '';
      logoWrapper.style.transition = '';
      textBlock.style.transition = '';
      headerBar.style.transition = '';

      if (publicView) publicView.classList.add('visible');

      // ENSURE BODY SCROLL IS UNLOCKED INSTANTLY
      document.body.classList.remove('loading-state');

      this.hasPlayedIntro = true;
    }
  };

  // ==========================================================================
  // 6. PUBLIC & STUDIO VIEW RENDERER (Supports Direct Edit & Public Views)
  // ==========================================================================
  const PublicRenderer = {
    render(currentRoute = '/') {
      const blueprint = SiteStore.get();
      const contentEl = document.getElementById('public-content');
      const navEl = document.getElementById('header-nav');
      if (!contentEl || !navEl) return;

      // Render Header Navigation Links
      this.renderNav(blueprint.navigation, currentRoute);

      // Resolve Page Data
      const page = blueprint.pages[currentRoute] || blueprint.pages['/'] || { sections: [] };

      // Render Dynamic Sections
      contentEl.innerHTML = '';
      if (!page.sections || page.sections.length === 0) {
        contentEl.innerHTML = '<div style="min-height: 70vh; background: var(--theme-canvas);"></div>';
        contentEl.insertAdjacentHTML('beforeend', this.generateGlobalFooterHtml());
        this.initGlobalFooterInteractivity(contentEl);
        return;
      }

      // Render Clean Sections
      page.sections.forEach(section => {
        if (section.layout && section.layout.visible === false) return;
        const sectionHtml = this.generateBlockHtml(section, false, currentRoute);
        contentEl.insertAdjacentHTML('beforeend', sectionHtml);
      });

      // Render Global Academic Footer
      contentEl.insertAdjacentHTML('beforeend', this.generateGlobalFooterHtml());

      // Initialize interactive widgets
      this.initExecomInteractivity(contentEl);
      this.initAcademicHomeInteractivity(contentEl);
      this.initAcademicGalleryInteractivity(contentEl);
      this.initAcademicContactInteractivity(contentEl);
      this.initGlobalFooterInteractivity(contentEl);
    },

    renderNav(navItems, currentRoute) {
      const navEl = document.getElementById('header-nav');
      const mobileNavEl = document.getElementById('mobile-nav-links');

      const linksHtml = navItems
        .filter(item => item.isPublic !== false)
        .map(item => {
          const isActive = (item.path === currentRoute) ? 'active' : '';
          const hashUrl = item.path === '/' ? '#/' : `#${item.path}`;
          return `<a href="${hashUrl}" class="nav-link ${isActive}">${this.escapeHtml(item.label)}</a>`;
        })
        .join('');

      if (navEl) navEl.innerHTML = linksHtml;
      if (mobileNavEl) mobileNavEl.innerHTML = linksHtml;
    },

    generateBlockHtml(section, isAdminMode = false, pageSlug = '/') {
      const { id, type, layout = {}, content = {} } = section;

      let innerContent = '';

      if (type === 'academic-home') {
        innerContent = this.generateAcademicHomeHtml(isAdminMode);
      } else if (type === 'academic-contact') {
        innerContent = this.generateAcademicContactHtml(isAdminMode);
      } else if (type === 'execom-directory') {
        innerContent = this.generateExecomHtml(isAdminMode);
      } else if (type === 'academic-gallery') {
        innerContent = this.generateAcademicGalleryHtml(section, isAdminMode, pageSlug);
      } else {
        const secPath = `pages.${pageSlug}.sections.${id}.content`;

        switch (type) {
          case 'hero':
            const hasHeroCard = Boolean(content.cardTitle || content.cardSubtitle);
            const hasActions = Boolean(content.button1Text || content.button2Text);
            const hasTitle = Boolean(content.title && content.title.trim());
            const hasSubtitle = Boolean(content.subtitle && content.subtitle.trim());

            innerContent = `
              <div class="hero-block ${!hasHeroCard ? 'full-width-text' : ''}">
                <div class="hero-grid">
                  <div>
                    ${content.eyebrow || isAdminMode ? `<div class="badge-eyebrow" ${isAdminMode ? `data-edit-path="${secPath}.eyebrow" title="Click to edit badge"` : ''}>${this.escapeHtml(content.eyebrow || (isAdminMode ? 'Add Eyebrow Badge' : ''))}</div>` : ''}
                    ${hasTitle || isAdminMode ? `<h1 class="section-heading" ${isAdminMode ? `data-edit-path="${secPath}.title" title="Click to edit title"` : ''}>${this.escapeHtml(content.title || (isAdminMode ? 'Click to Add Heading' : ''))}</h1>` : ''}
                    ${hasSubtitle || isAdminMode ? `<p class="section-desc" ${isAdminMode ? `data-edit-path="${secPath}.subtitle" title="Click to edit description"` : ''}>${this.escapeHtml(content.subtitle || (isAdminMode ? 'Click to add detailed subtitle description...' : ''))}</p>` : ''}
                    ${hasActions || isAdminMode ? `
                      <div class="block-actions">
                        ${content.button1Text || isAdminMode ? `<a href="${content.button1Url || '#'}" class="btn btn-primary"><span ${isAdminMode ? `data-edit-path="${secPath}.button1Text" title="Click to edit button"` : ''}>${this.escapeHtml(content.button1Text || 'Button 1')}</span></a>` : ''}
                        ${content.button2Text || isAdminMode ? `<a href="${content.button2Url || '#'}" class="btn btn-outline"><span ${isAdminMode ? `data-edit-path="${secPath}.button2Text" title="Click to edit button"` : ''}>${this.escapeHtml(content.button2Text || 'Button 2')}</span></a>` : ''}
                      </div>
                    ` : ''}
                  </div>
                  ${hasHeroCard ? `
                    <div class="hero-visual-card">
                      <div class="hero-emblem-halo">
                        <img src="ishmt-logo.jpg" alt="ISHMT Emblem">
                      </div>
                      <div class="hero-card-meta">${this.escapeHtml(content.cardTitle || 'TKMCE Students Chapter')}</div>
                      <div class="hero-card-sub">${this.escapeHtml(content.cardSubtitle || 'Affiliated to ISHMT National Council')}</div>
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
            break;

          case 'grid-cards':
            innerContent = `
              ${content.eyebrow || isAdminMode ? `<div class="badge-eyebrow" ${isAdminMode ? `data-edit-path="${secPath}.eyebrow" title="Click to edit eyebrow"` : ''}>${this.escapeHtml(content.eyebrow || '')}</div>` : ''}
              <h2 class="section-heading" ${isAdminMode ? `data-edit-path="${secPath}.title" title="Click to edit heading"` : ''}>${this.escapeHtml(content.title || '')}</h2>
              <p class="section-desc" ${isAdminMode ? `data-edit-path="${secPath}.description" title="Click to edit description"` : ''}>${this.escapeHtml(content.description || '')}</p>
              <div class="cards-grid cols-${layout.columns || 2}" style="margin-top: 2rem;">
                ${(content.items || []).map((card, idx) => `
                  <div class="card-item ${isAdminMode ? 'studio-card-wrapper' : ''}">
                    ${isAdminMode ? `
                      <div class="studio-card-actions">
                        <button type="button" class="studio-card-btn btn-card-dup" data-card-type="event" data-section-id="${id}" data-card-id="${card.id}" title="Duplicate Card">❐ Duplicate</button>
                        <button type="button" class="studio-card-btn btn-card-delete" data-card-type="event" data-section-id="${id}" data-card-id="${card.id}" title="Delete Card">🗑 Delete</button>
                      </div>
                    ` : ''}
                    <div>
                      ${card.tag || isAdminMode ? `<span class="card-tag" ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.tag" title="Click to edit tag"` : ''}>${this.escapeHtml(card.tag || 'Tag')}</span>` : ''}
                      <h3 class="card-title" ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.title" title="Click to edit title"` : ''}>${this.escapeHtml(card.title || '')}</h3>
                      <p class="card-desc" ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.description" title="Click to edit description"` : ''}>${this.escapeHtml(card.description || '')}</p>
                    </div>
                    ${card.linkText || isAdminMode ? `<a href="${card.linkUrl || '#'}" class="card-link"><span ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.linkText" title="Click to edit link"` : ''}>${this.escapeHtml(card.linkText || 'Details →')}</span></a>` : ''}
                  </div>
                `).join('')}
                ${isAdminMode ? `
                  <div class="studio-add-card-placeholder" data-action="add-event-card" data-section-id="${id}">
                    <span style="font-size: 1.4rem; font-weight: 700; color: #8B1014;">+ Add New Event Card</span>
                    <span style="font-size: 0.85rem; color: #6B7280; margin-top: 4px;">Click to append a workshop, seminar, or competition card</span>
                  </div>
                ` : ''}
              </div>
            `;
            break;

          default:
            innerContent = `<div class="section-desc">Custom section: ${this.escapeHtml(type)}</div>`;
        }
      }

      const isCustomFullBleed = type === 'academic-home' || type === 'academic-contact' || type === 'execom-directory';
      const widthClass = layout.containerWidth || 'boxed';
      const padClass = `pad-${layout.paddingY || 'md'}`;
      const bgClass = `bg-${layout.bgType || 'canvas'}`;
      const alignClass = `align-${layout.alignment || 'left'}`;

      const renderedBlock = isCustomFullBleed ? innerContent : `
        <section class="page-section ${bgClass} ${padClass} ${alignClass}">
          <div class="block-container ${widthClass}">
            ${innerContent}
          </div>
        </section>
      `;

      if (isAdminMode) {
        return `
          <div class="canvas-block-wrapper" data-section-id="${id}">
            <div class="block-hover-toolbar">
              <span class="canvas-toolbar-btn" style="color: #9CA3AF;">[${type}]</span>
              <button class="canvas-toolbar-btn btn-action-move-up" data-section-id="${id}" title="Move Up">▲</button>
              <button class="canvas-toolbar-btn btn-action-move-down" data-section-id="${id}" title="Move Down">▼</button>
              <button class="canvas-toolbar-btn btn-action-edit" data-section-id="${id}" title="Edit in Inspector">✎ Inspector</button>
              <button class="canvas-toolbar-btn btn-action-duplicate" data-section-id="${id}" title="Duplicate Section">❐</button>
              <button class="canvas-toolbar-btn btn-delete btn-action-delete" data-section-id="${id}" title="Delete Section">🗑</button>
            </div>
            ${renderedBlock}
          </div>
        `;
      }

      return renderedBlock;
    },

    generateAcademicGalleryHtml(section, isAdminMode = false, pageSlug = '/gallery') {
      const { id, content = {} } = section;
      const secPath = `pages.${pageSlug}.sections.${id}.content`;
      const items = content.items || [];

      return `
        <div class="academic-gallery-wrapper">
          <div style="text-align: center; margin-bottom: 2rem;">
            ${content.eyebrow || isAdminMode ? `<div class="badge-eyebrow" style="margin-bottom: 0.75rem;" ${isAdminMode ? `data-edit-path="${secPath}.eyebrow" title="Click to edit eyebrow"` : ''}>${this.escapeHtml(content.eyebrow || 'Visual Archives')}</div>` : ''}
            <h2 class="section-heading" ${isAdminMode ? `data-edit-path="${secPath}.title" title="Click to edit title"` : ''}>${this.escapeHtml(content.title || 'Chapter Visual Archives & Activities')}</h2>
            <p class="section-desc align-center" ${isAdminMode ? `data-edit-path="${secPath}.subtitle" title="Click to edit description"` : ''}>${this.escapeHtml(content.subtitle || 'Explore chapter workshops, computational masterclasses, and industrial visits.')}</p>
            <div class="academic-crimson-bar mx-auto" style="margin-top: 1rem;"></div>
          </div>

          <!-- Category Filter Bar -->
          <div class="gallery-filter-bar">
            <button type="button" class="gallery-filter-btn active" data-filter="all">All Archives</button>
            <button type="button" class="gallery-filter-btn" data-filter="workshops">Workshops &amp; Bootcamps</button>
            <button type="button" class="gallery-filter-btn" data-filter="lectures">Distinguished Lectures</button>
            <button type="button" class="gallery-filter-btn" data-filter="visits">Industrial Visits</button>
            <button type="button" class="gallery-filter-btn" data-filter="labs">Hardware &amp; Labs</button>
          </div>

          <!-- Academic Gallery Cards Grid -->
          <div class="academic-gallery-grid">
            ${items.map((item, idx) => `
              <div class="academic-gallery-card ${isAdminMode ? 'studio-card-wrapper' : ''}" data-category="${item.category || 'workshops'}" data-item-id="${item.id}">
                ${isAdminMode ? `
                  <div class="studio-card-actions">
                    <button type="button" class="studio-card-btn btn-card-dup" data-card-type="gallery" data-section-id="${id}" data-card-id="${item.id}" title="Duplicate Card">❐ Duplicate</button>
                    <button type="button" class="studio-card-btn btn-card-delete" data-card-type="gallery" data-section-id="${id}" data-card-id="${item.id}" title="Delete Card">🗑 Delete</button>
                  </div>
                ` : ''}
                
                <div class="gallery-card-banner">
                  <div class="gallery-card-icon-halo">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      ${this.getCategoryIconSvg(item.category || 'workshops')}
                    </svg>
                  </div>
                  <span class="gallery-card-tag" ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.tag" title="Click to edit tag"` : ''}>${this.escapeHtml(item.tag || 'Chapter Event')}</span>
                  <span class="gallery-card-date" ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.date" title="Click to edit date"` : ''}>${this.escapeHtml(item.date || '2026–27')}</span>
                </div>

                <div class="gallery-card-body">
                  <h3 class="gallery-card-title" ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.title" title="Click to edit title"` : ''}>${this.escapeHtml(item.title || 'Untitled Event')}</h3>
                  <p class="gallery-card-desc" ${isAdminMode ? `data-edit-path="${secPath}.items.${idx}.description" title="Click to edit description"` : ''}>${this.escapeHtml(item.description || 'Activity documentation and technical summary.')}</p>
                  
                  <div class="gallery-card-footer">
                    <span>${this.escapeHtml(item.categoryLabel || 'Academic Archive')}</span>
                    <span style="font-size: 0.88rem; color: #8B0D1A;">🔍 View Details</span>
                  </div>
                </div>
              </div>
            `).join('')}

            ${isAdminMode ? `
              <div class="studio-add-card-placeholder" data-action="add-gallery-card" data-section-id="${id}">
                <span style="font-size: 1.4rem; font-weight: 700; color: #8B1014;">+ Add New Gallery Card</span>
                <span style="font-size: 0.85rem; color: #6B7280; margin-top: 4px;">Click to append a workshop, seminar, visit, or lab archive card</span>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    },

    getCategoryIconSvg(category) {
      switch (category) {
        case 'workshops':
          return '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>';
        case 'lectures':
          return '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>';
        case 'visits':
          return '<path d="M2 20h20"></path><path d="M5 20V8l7-5 7 5v12"></path><path d="M9 12h6"></path><path d="M9 16h6"></path>';
        case 'labs':
          return '<path d="M8.5 2h7l.5 4h-8z"></path><path d="M6 14a6 6 0 1 0 12 0"></path><path d="M12 2v10"></path>';
        default:
          return '<circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon>';
      }
    },

    initAcademicGalleryInteractivity(contentEl) {
      if (!contentEl) return;

      // Filter tabs switching
      const filterBtns = contentEl.querySelectorAll('.gallery-filter-btn');
      const cards = contentEl.querySelectorAll('.academic-gallery-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const filter = btn.getAttribute('data-filter');
          cards.forEach(card => {
            const cat = card.getAttribute('data-category');
            if (filter === 'all' || cat === filter) {
              card.style.display = 'flex';
              card.style.opacity = '1';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // Lightbox modal setup
      let modalOverlay = document.getElementById('gallery-lightbox-modal');
      if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'gallery-lightbox-modal';
        modalOverlay.className = 'gallery-modal-overlay';
        modalOverlay.innerHTML = `
          <div class="gallery-modal-card">
            <button type="button" class="gallery-modal-close-btn" id="gallery-modal-close" aria-label="Close modal">&times;</button>
            <div class="gallery-modal-header">
              <span id="gallery-modal-tag" class="gallery-card-tag" style="position: static; display: inline-block; margin-bottom: 0.5rem;">Event</span>
              <h3 id="gallery-modal-title" style="font-family: var(--theme-font-family); font-size: 1.5rem; font-weight: 700; color: #0B0B0B; margin: 0;"></h3>
              <p id="gallery-modal-date" style="font-size: 0.85rem; color: #8B1014; font-weight: 600; margin-top: 0.35rem;"></p>
            </div>
            <div class="gallery-modal-body">
              <p id="gallery-modal-desc" style="font-size: 1rem; color: #4B5563; line-height: 1.7; margin-bottom: 1.5rem;"></p>
              <div style="background: #F9FAFB; border-radius: 8px; padding: 1rem 1.25rem; border-left: 4px solid #8B1014; font-size: 0.88rem; color: #374151;">
                <strong>Archival Reference:</strong> Indian Society for Heat and Mass Transfer (ISHMT-RCT) Students Chapter, Department of Mechanical Engineering, TKM College of Engineering.
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(modalOverlay);

        const closeBtn = modalOverlay.querySelector('#gallery-modal-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => modalOverlay.classList.remove('open'));
        }
        modalOverlay.addEventListener('click', (e) => {
          if (e.target === modalOverlay) modalOverlay.classList.remove('open');
        });
      }

      cards.forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.studio-card-actions') || e.target.closest('.studio-add-card-placeholder')) return;

          const titleEl = card.querySelector('.gallery-card-title');
          const descEl = card.querySelector('.gallery-card-desc');
          const tagEl = card.querySelector('.gallery-card-tag');
          const dateEl = card.querySelector('.gallery-card-date');

          const modalTitle = document.getElementById('gallery-modal-title');
          const modalDesc = document.getElementById('gallery-modal-desc');
          const modalTag = document.getElementById('gallery-modal-tag');
          const modalDate = document.getElementById('gallery-modal-date');

          if (modalTitle && titleEl) modalTitle.textContent = titleEl.textContent;
          if (modalDesc && descEl) modalDesc.textContent = descEl.textContent;
          if (modalTag && tagEl) modalTag.textContent = tagEl.textContent;
          if (modalDate && dateEl) modalDate.textContent = dateEl.textContent;

          if (modalOverlay) modalOverlay.classList.add('open');
        });
      });
    },

    initAcademicHomeInteractivity(contentEl) {
      if (!contentEl) return;
      const aboutBtn = contentEl.querySelector('#academic-about-btn');
      if (aboutBtn) {
        aboutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    },

    generateAcademicHomeHtml(isAdminMode = false) {
      const blueprint = SiteStore.get();
      const home = blueprint.homeData || DEFAULT_HOME_DATA;

      return `
        <div class="academic-home-wrapper">
          <!-- SECTION A: HERO SECTION (FULL-WIDTH VIEWPORT WITH 40% BUILDING OPACITY) -->
          <section class="academic-hero-section">
            <div class="academic-hero-bg">
              <img
                src="tkmce-building.jpg"
                alt="TKM College of Engineering Administrative Building"
                class="academic-hero-bg-img"
                loading="eager"
              />
            </div>

            <!-- Centered Floating Welcome Card -->
            <div class="academic-hero-card">
              <!-- Eyebrow Badge -->
              <div class="academic-eyebrow-badge" ${isAdminMode ? 'data-edit-path="homeData.eyebrowBadge" title="Click to edit badge"' : ''}>
                <span>${this.escapeHtml(home.eyebrowBadge)}</span>
              </div>

              <!-- Main Serif Heading -->
              <h1 class="academic-hero-heading" ${isAdminMode ? 'data-edit-path="homeData.heroHeading" title="Click to edit heading"' : ''}>
                ${this.escapeHtml(home.heroHeading)}
              </h1>

              <!-- Academic Body Description -->
              <p class="academic-hero-body" ${isAdminMode ? 'data-edit-path="homeData.heroBody" title="Click to edit body text"' : ''}>
                ${this.escapeHtml(home.heroBody)}
              </p>

              <!-- CTA Buttons Row -->
              <div class="academic-cta-row">
                <a href="${home.primaryBtnUrl}" target="_blank" rel="noopener noreferrer" class="academic-btn-primary">
                  <span ${isAdminMode ? 'data-edit-path="homeData.primaryBtnText" title="Click to edit button label"' : ''}>${this.escapeHtml(home.primaryBtnText)}</span>
                  <svg class="academic-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <button type="button" class="academic-btn-outline" id="academic-about-btn" ${isAdminMode ? 'data-edit-path="homeData.secondaryBtnText" title="Click to edit button label"' : ''}>
                  ${this.escapeHtml(home.secondaryBtnText)}
                </button>
              </div>
            </div>
          </section>

          <!-- SECTION B: IMPACT & LEGACY STATISTICS BAR (CRIMSON BANNER) -->
          <section class="academic-stats-banner">
            <div class="academic-stats-container">
              ${(home.stats || []).map((s, idx) => `
                <div class="academic-stat-item ${isAdminMode ? 'studio-card-wrapper' : ''}">
                  ${isAdminMode ? `
                    <div class="studio-card-actions">
                      <button type="button" class="studio-card-btn btn-card-dup" data-card-type="stat" data-card-id="${s.id}" title="Duplicate Stat">❐</button>
                      <button type="button" class="studio-card-btn btn-card-delete" data-card-type="stat" data-card-id="${s.id}" title="Delete Stat">🗑</button>
                    </div>
                  ` : ''}
                  <div class="academic-stat-value" ${isAdminMode ? `data-edit-path="homeData.stats.${idx}.value" title="Click to edit number"` : ''}>${this.escapeHtml(s.value)}</div>
                  <div class="academic-stat-label" ${isAdminMode ? `data-edit-path="homeData.stats.${idx}.label" title="Click to edit label"` : ''}>${this.escapeHtml(s.label)}</div>
                </div>
              `).join('')}
              ${isAdminMode ? `
                <div class="studio-add-card-placeholder" data-action="add-stat" style="min-height: 80px; padding: 0.8rem 1.5rem; border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.08); color: #FFFFFF;">
                  <span style="font-weight: 700; font-size: 0.9rem;">+ Add Milestone Stat</span>
                </div>
              ` : ''}
            </div>
          </section>

          <!-- SECTION C: ABOUT THE CHAPTER SECTION (EDITORIAL CONTAINER) -->
          <section id="about" class="academic-about-section">
            <div class="academic-about-container">
              <h2 class="academic-section-heading" ${isAdminMode ? 'data-edit-path="homeData.aboutHeading" title="Click to edit heading"' : ''}>${this.escapeHtml(home.aboutHeading)}</h2>
              <div class="academic-crimson-bar"></div>
              <div class="academic-about-text">
                <p ${isAdminMode ? 'data-edit-path="homeData.aboutP1" title="Click to edit paragraph"' : ''}>${this.escapeHtml(home.aboutP1)}</p>
                <p ${isAdminMode ? 'data-edit-path="homeData.aboutP2" title="Click to edit paragraph"' : ''}>${this.escapeHtml(home.aboutP2)}</p>
              </div>
            </div>
          </section>

          <!-- SECTION D: WHAT WE OFFER SECTION (FEATURE CARDS GRID) -->
          <section class="academic-offer-section">
            <div class="academic-offer-container">
              <div class="academic-offer-header">
                <h2 class="academic-section-heading" ${isAdminMode ? 'data-edit-path="homeData.offersHeading" title="Click to edit heading"' : ''}>${this.escapeHtml(home.offersHeading)}</h2>
                <div class="academic-crimson-bar mx-auto"></div>
              </div>

              <div class="academic-offer-grid">
                ${(home.offers || []).map((o, idx) => `
                  <div class="academic-card ${isAdminMode ? 'studio-card-wrapper' : ''}">
                    ${isAdminMode ? `
                      <div class="studio-card-actions">
                        <button type="button" class="studio-card-btn btn-card-dup" data-card-type="offer" data-card-id="${o.id}" title="Duplicate Card">❐ Copy</button>
                        <button type="button" class="studio-card-btn btn-card-delete" data-card-type="offer" data-card-id="${o.id}" title="Delete Card">🗑 Del</button>
                      </div>
                    ` : ''}
                    <div class="academic-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <h3 class="academic-card-title" ${isAdminMode ? `data-edit-path="homeData.offers.${idx}.title" title="Click to edit card title"` : ''}>${this.escapeHtml(o.title)}</h3>
                    <p class="academic-card-desc" ${isAdminMode ? `data-edit-path="homeData.offers.${idx}.desc" title="Click to edit card description"` : ''}>${this.escapeHtml(o.desc)}</p>
                  </div>
                `).join('')}
                ${isAdminMode ? `
                  <div class="studio-add-card-placeholder" data-action="add-offer">
                    <span style="font-size: 1.4rem; font-weight: 700; color: #8B1014;">+ Add Initiative Card</span>
                    <span style="font-size: 0.85rem; color: #6B7280; margin-top: 4px;">Click to append a new offering / activity card</span>
                  </div>
                ` : ''}
              </div>
            </div>
          </section>
        </div>
      `;
    },

    initAcademicContactInteractivity(contentEl) {
      if (!contentEl) return;
      const form = contentEl.querySelector('#academic-contact-form');
      const feedback = contentEl.querySelector('#contact-form-feedback');
      const submitBtn = contentEl.querySelector('#contact-form-submit-btn');

      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (submitBtn) submitBtn.disabled = true;
          if (feedback) feedback.style.display = 'flex';
          form.reset();
          setTimeout(() => {
            if (submitBtn) submitBtn.disabled = false;
          }, 1500);
          setTimeout(() => {
            if (feedback) feedback.style.display = 'none';
          }, 7000);
        });
      }

      // Map toggle buttons
      const tabTkmce = contentEl.querySelector('#tab-map-tkmce');
      const tabRct = contentEl.querySelector('#tab-map-rct');
      const iframe = contentEl.querySelector('#academic-map-iframe');
      const caption = contentEl.querySelector('#map-caption');
      const extLink = contentEl.querySelector('#map-external-link');

      if (tabTkmce && tabRct && iframe) {
        tabTkmce.addEventListener('click', () => {
          tabTkmce.classList.add('active');
          tabRct.classList.remove('active');
          iframe.src = 'https://maps.google.com/maps?q=TKM+College+of+Engineering+Karicode+Kollam+Kerala+691005&t=&z=15&ie=UTF8&iwloc=&output=embed';
          if (caption) caption.textContent = 'Showing: TKM College of Engineering, Karicode, Kollam';
          if (extLink) extLink.href = 'https://maps.google.com/?q=TKM+College+of+Engineering+Kollam';
        });

        tabRct.addEventListener('click', () => {
          tabRct.classList.add('active');
          tabTkmce.classList.remove('active');
          iframe.src = 'https://maps.google.com/maps?q=Liquid+Propulsion+Systems+Centre+Valiamala+Thiruvananthapuram+Kerala+695547&t=&z=14&ie=UTF8&iwloc=&output=embed';
          if (caption) caption.textContent = 'Showing: Liquid Propulsion Systems Centre (LPSC), Valiamala, Trivandrum';
          if (extLink) extLink.href = 'https://maps.google.com/?q=Liquid+Propulsion+Systems+Centre+Valiamala+Trivandrum';
        });
      }
    },

    initGlobalFooterInteractivity(contentEl) {
      if (window.__ishmt_footer_scroll_fn) {
        window.removeEventListener('scroll', window.__ishmt_footer_scroll_fn);
        window.__ishmt_footer_scroll_fn = null;
      }
    },

    generateAcademicContactHtml(isAdminMode = false) {
      const blueprint = SiteStore.get();
      const contact = blueprint.contactData || DEFAULT_CONTACT_DATA;
      const s = contact.studentChapter || DEFAULT_CONTACT_DATA.studentChapter;
      const r = contact.regionalChapter || DEFAULT_CONTACT_DATA.regionalChapter;

      return `
        <div class="academic-contact-wrapper">
          <!-- 1. PAGE TITLE BANNER -->
          <section class="contact-page-banner">
            <h1 class="contact-banner-title" ${isAdminMode ? 'data-edit-path="contactData.bannerTitle" title="Click to edit title"' : ''}>${this.escapeHtml(contact.bannerTitle)}</h1>
            <p class="contact-banner-sub" ${isAdminMode ? 'data-edit-path="contactData.bannerSubtitle" title="Click to edit subtitle"' : ''}>${this.escapeHtml(contact.bannerSubtitle)}</p>
          </section>

          <!-- 2. MAIN TWO-COLUMN CONTACT SECTION -->
          <section class="contact-main-grid">
            <!-- Left Column: Minimalist Contact Form -->
            <div>
              <h2 class="contact-section-title" ${isAdminMode ? 'data-edit-path="contactData.formTitle" title="Click to edit heading"' : ''}>${this.escapeHtml(contact.formTitle)}</h2>
              <div class="contact-accent-bar"></div>
              <p style="font-size: 0.9rem; color: #4B5563; margin-bottom: 2rem; line-height: 1.6;" ${isAdminMode ? 'data-edit-path="contactData.formSubtitle" title="Click to edit description"' : ''}>
                ${this.escapeHtml(contact.formSubtitle)}
              </p>

              <div id="contact-form-feedback" class="contact-success-msg" style="display: none;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Thank you! Your inquiry has been sent to the ISHMT team. We will respond shortly.</span>
              </div>

              <form id="academic-contact-form">
                <div class="contact-minimal-field">
                  <input type="text" id="form-name" class="contact-minimal-input" placeholder="Name *" required />
                </div>
                <div class="contact-minimal-field">
                  <input type="email" id="form-email" class="contact-minimal-input" placeholder="Email *" required />
                </div>
                <div class="contact-minimal-field">
                  <input type="tel" id="form-telephone" class="contact-minimal-input" placeholder="Telephone" />
                </div>
                <div class="contact-minimal-field">
                  <input type="text" id="form-subject" class="contact-minimal-input" placeholder="Subject *" required />
                </div>
                <div class="contact-minimal-field">
                  <textarea id="form-message" class="contact-minimal-input" rows="5" placeholder="Message... *" required style="resize: vertical;"></textarea>
                </div>
                <button type="submit" class="contact-submit-btn" id="contact-form-submit-btn">
                  <span>Submit</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>

            <!-- Right Column: Chapter Addresses + Interactive Map -->
            <div>
              <h2 class="contact-section-title">Chapter Addresses</h2>
              <div class="contact-accent-bar"></div>

              <div class="address-cards-row">
                <!-- Student Chapter (TKMCE) -->
                <div class="address-info-card">
                  <div class="address-card-badge">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span ${isAdminMode ? 'data-edit-path="contactData.studentChapter.badge"' : ''}>${this.escapeHtml(s.badge)}</span>
                  </div>
                  <h3 class="address-card-title" ${isAdminMode ? 'data-edit-path="contactData.studentChapter.title"' : ''}>${this.escapeHtml(s.title)}</h3>
                  <address class="address-card-lines">
                    <span ${isAdminMode ? 'data-edit-path="contactData.studentChapter.line1"' : ''}>${this.escapeHtml(s.line1)}</span><br>
                    <span ${isAdminMode ? 'data-edit-path="contactData.studentChapter.line2"' : ''}>${this.escapeHtml(s.line2)}</span><br>
                    <span ${isAdminMode ? 'data-edit-path="contactData.studentChapter.line3"' : ''}>${this.escapeHtml(s.line3)}</span>
                  </address>
                </div>

                <!-- Regional Chapter (ISHMT-RCT) -->
                <div class="address-info-card">
                  <div class="address-card-badge">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                      <path d="M9 22v-4h6v4"></path>
                    </svg>
                    <span ${isAdminMode ? 'data-edit-path="contactData.regionalChapter.badge"' : ''}>${this.escapeHtml(r.badge)}</span>
                  </div>
                  <h3 class="address-card-title" ${isAdminMode ? 'data-edit-path="contactData.regionalChapter.title"' : ''}>${this.escapeHtml(r.title)}</h3>
                  <address class="address-card-lines">
                    <span ${isAdminMode ? 'data-edit-path="contactData.regionalChapter.line1"' : ''}>${this.escapeHtml(r.line1)}</span><br>
                    <span ${isAdminMode ? 'data-edit-path="contactData.regionalChapter.line2"' : ''}>${this.escapeHtml(r.line2)}</span><br>
                    <span style="display: block; margin-top: 0.35rem;">
                      <strong>Email: </strong><a href="mailto:${r.email}" style="color: #8B1014; text-decoration: underline;" ${isAdminMode ? 'data-edit-path="contactData.regionalChapter.email"' : ''}>${this.escapeHtml(r.email)}</a>
                    </span>
                  </address>
                </div>
              </div>

              <!-- Map Embed with Toggle Tabs -->
              <div class="map-wrapper">
                <div class="map-header-bar">
                  <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #4B5563;">
                    Interactive Geo-Location
                  </span>
                  <div class="map-tabs-group">
                    <button type="button" class="map-tab-btn active" id="tab-map-tkmce">TKMCE (Kollam)</button>
                    <button type="button" class="map-tab-btn" id="tab-map-rct">LPSC (Trivandrum)</button>
                  </div>
                </div>

                <div class="map-frame-container">
                  <iframe
                    id="academic-map-iframe"
                    title="ISHMT Location Map"
                    src="https://maps.google.com/maps?q=TKM+College+of+Engineering+Karicode+Kollam+Kerala+691005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    allowfullscreen=""
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #6B7280; margin-top: 0.5rem;">
                  <span id="map-caption">Showing: TKM College of Engineering, Karicode, Kollam</span>
                  <a
                    id="map-external-link"
                    href="https://maps.google.com/?q=TKM+College+of+Engineering+Kollam"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="color: #8B1014; text-decoration: underline;"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    },

    generateGlobalFooterHtml() {
      return `
        <footer class="global-footer-section">
          <div class="global-footer-inner">
            <div class="global-footer-grid">
              <!-- Column 1: Dual/Triple Emblem & Chapter Identity -->
              <div>
                <div class="footer-emblems-row">
                  <div class="footer-emblem-badge" title="National ISHMT Emblem">
                    <img src="ishmt-logo.jpg" alt="ISHMT Logo" class="footer-emblem-img" />
                  </div>
                  <a href="https://www.ishmtkerala.in/" target="_blank" rel="noopener noreferrer" class="footer-emblem-badge" title="ISHMT Regional Chapter Trivandrum (ISHMT-RCT)">
                    <img src="ishmt-rct-logo.png" alt="ISHMT Regional Chapter Trivandrum" class="footer-emblem-img" />
                  </a>
                </div>

                <h3 class="footer-column-title" style="font-size: 1.05rem; margin-bottom: 0.25rem;">
                  Indian Society for Heat and Mass Transfer (ISHMT)
                </h3>
                <div class="footer-meta-badge">TKMCE Student Chapter • Est. 2026</div>

                <p class="footer-desc-p">
                  Affiliated regionally with the ISHMT Trivandrum Regional Chapter (ISHMT-RCT) and anchored within the Department of Mechanical Engineering at Thangal Kunju Musaliar College of Engineering.
                </p>

                <div class="footer-contact-item">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href="mailto:ishmt@tkmce.ac.in" class="footer-link">ishmt@tkmce.ac.in</a>
                </div>
                <div class="footer-contact-item">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Karicode, Kollam — 691005, Kerala, India</span>
                </div>
              </div>

              <!-- Column 2: Quick Links & Academic Navigation -->
              <div>
                <h4 class="footer-col-heading">Chapter Navigation</h4>
                <div class="footer-accent-line"></div>
                <ul class="footer-links-list">
                  <li><a href="#/" class="footer-link">Home &amp; Welcome</a></li>
                  <li><a href="#/events" class="footer-link">Colloquiums &amp; Workshops</a></li>
                  <li><a href="#/team" class="footer-link">Executive Committee 2026–27</a></li>
                  <li><a href="#/gallery" class="footer-link">Chapter Gallery</a></li>
                  <li><a href="#/contact" class="footer-link">Contact &amp; Inquiries</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="footer-link" style="color: #8B1014; font-weight: 700;">Join as Student Member ↗</a></li>
                </ul>
              </div>

              <!-- Column 3: Institutional Affiliations & Parent Bodies -->
              <div>
                <h4 class="footer-col-heading">Institutional Affiliations</h4>
                <div class="footer-accent-line"></div>
                <ul class="footer-links-list">
                  <li>
                    <a href="https://www.ishmtkerala.in/" target="_blank" rel="noopener noreferrer" class="footer-link">
                      <strong>ISHMT-RCT Portal:</strong> Official Regional Site ↗
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Column 4: Parent Chapter Regional Office Address -->
              <div>
                <h4 class="footer-col-heading">Regional Chapter</h4>
                <div class="footer-accent-line"></div>
                <div class="footer-rct-box">
                  <div class="footer-rct-tag">REGIONAL CHAPTER TRIVANDRUM (RCT)</div>
                  <p class="footer-rct-address">
                    Indian Society for Heat and Mass Transfer<br />
                    PRS Entity, LPSC, Valiamala<br />
                    Thiruvananthapuram, Kerala — 695 547
                  </p>
                  <p class="footer-rct-portal">
                    Official Regional Chapter Portal:<br />
                    <a href="https://www.ishmtkerala.in/" target="_blank" rel="noopener noreferrer" class="footer-rct-link">
                      https://www.ishmtkerala.in/ ↗
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Global Bottom Copyright Bar -->
            <div class="footer-bottom-bar">
              <div class="footer-copy-text">
                &copy; 2026–2027 ISHMT Students Chapter, TKM College of Engineering, Kollam. Affiliated to ISHMT Regional Chapter Trivandrum.
              </div>
            </div>
          </div>
        </footer>
      `;
    },

    generateExecomHtml(isAdminMode = false) {
      const blueprint = SiteStore.get();
      const data = blueprint.execomData || DEFAULT_EXECOM_DATA;
      const peakLeader = data.seniorExecom.find(m => m.id === 'sen-1') || data.seniorExecom[0];
      const coreAdminLeaders = data.seniorExecom.filter(m => (m.id === 'sen-2' || m.id === 'sen-3') || (m.isCore && m.id !== peakLeader?.id));
      const functionalLeads = data.seniorExecom.filter(m => !m.isCore && m.isLead);
      const functionalMembers = data.seniorExecom.filter(m => !m.isCore && !m.isLead);
      const totalCount = (data.roster || []).length;

      return `
        <div class="execom-section select-none" ${!isAdminMode ? 'oncontextmenu="return false;" oncopy="return false;" oncut="return false;" ondragstart="return false;"' : ''}>
          <!-- A. Minimalist Header & Stats -->
          <div class="execom-header">
            <div class="execom-badge-sub" ${isAdminMode ? 'data-edit-path="execomData.meta.department"' : ''}>${this.escapeHtml(data.meta.department)} • TKMCE</div>
            <h1 class="execom-title" ${isAdminMode ? 'data-edit-path="execomData.meta.chapterName"' : ''}>${this.escapeHtml(data.meta.chapterName)}</h1>
            <p class="execom-subtitle">
              Session ${this.escapeHtml(data.meta.session)} • ${this.escapeHtml(data.meta.institution)} • Mentored by Regional Chapter Thiruvananthapuram (RCT)
            </p>

            <!-- 3-Metric Centered Grid -->
            <div class="execom-metrics-row">
              <div class="execom-metric-box">
                <div class="execom-metric-val crimson">${data.seniorExecom.length}</div>
                <div class="execom-metric-lbl">Senior Execom</div>
              </div>
              <div class="execom-metric-box">
                <div class="execom-metric-val black">${data.juniorExecom.length}</div>
                <div class="execom-metric-lbl">Junior Execom</div>
              </div>
              <div class="execom-metric-box">
                <div class="execom-metric-val crimson">${totalCount}</div>
                <div class="execom-metric-lbl">General Members</div>
              </div>
            </div>

            <!-- Minimalist Navigation Tabs -->
            <div class="execom-tabs">
              <button type="button" class="execom-tab-btn active" data-tab="all">All Sections View</button>
              <button type="button" class="execom-tab-btn" data-tab="senior">Senior Execom (${data.seniorExecom.length})</button>
              <button type="button" class="execom-tab-btn" data-tab="junior">Junior Execom (${data.juniorExecom.length})</button>
              <button type="button" class="execom-tab-btn" data-tab="roster">General Members (${totalCount})</button>
            </div>
          </div>

          <!-- B. Tier 1: Senior Executive Leadership (4 Distinct Vertical Tiers) -->
          <div id="section-senior" class="execom-tier-wrap">
            <div class="execom-tier-header">
              <div>
                <div class="execom-tier-tag">Tier 1 • Senior Execom</div>
                <h2 class="execom-tier-h2">Senior Executive Leadership</h2>
                <div class="execom-tier-desc">${data.seniorExecom.length} appointed executive positions across Core Leadership and Functional Tracks.</div>
              </div>
              <div class="execom-mandate-ref">${data.seniorExecom.length} Appointed Positions</div>
            </div>

            <!-- Tier 1 (Peak): Chairperson / President Centered Alone -->
            <div class="execom-pyramid-row-1">
              ${peakLeader ? (() => {
                const l = peakLeader;
                const fullIdx = data.seniorExecom.findIndex(m => m.id === l.id);
                return `
                  <div class="execom-leader-card member-card-interactive ${isAdminMode ? 'studio-card-wrapper' : ''}" data-member-id="${l.id}" data-member-type="senior" draggable="false" title="Click to view member profile">
                    ${isAdminMode ? `
                      <div class="studio-card-actions">
                        <button type="button" class="studio-card-btn btn-card-photo" data-card-type="senior" data-card-id="${l.id}" title="Upload / Adjust Photo">📷 Photo</button>
                        <button type="button" class="studio-card-btn btn-card-dup" data-card-type="senior" data-card-id="${l.id}" title="Duplicate Member">❐ Copy</button>
                        <button type="button" class="studio-card-btn btn-card-delete" data-card-type="senior" data-card-id="${l.id}" title="Delete Member">🗑 Del</button>
                      </div>
                    ` : ''}
                    <div>
                      <div class="execom-leader-top">
                        <span class="execom-lead-pill" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.team"` : ''}>${this.escapeHtml(l.team)}</span>
                        <span class="execom-tier-sub">Core • Tier 1</span>
                      </div>
                      <div class="execom-avatar-wrap">
                        <div class="execom-avatar-container">
                          ${l.avatarUrl ? `
                            <img src="${this.escapeHtml(l.avatarUrl)}" alt="${this.escapeHtml(l.name)}" class="execom-avatar-img pointer-events-none select-none" draggable="false">
                          ` : `
                            <div class="execom-avatar-initials">${this.escapeHtml(l.avatar || 'PR')}</div>
                          `}
                          <div class="avatar-shield" aria-hidden="true"></div>
                        </div>
                        <div>
                          <h3 class="execom-leader-name" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.name" title="Click to edit name"` : ''}>${this.escapeHtml(l.name)}</h3>
                          <div class="execom-leader-role" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.role" title="Click to edit role"` : ''}>${this.escapeHtml(l.role)}</div>
                        </div>
                      </div>
                      <div class="execom-academic-info">
                        <span ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.badge"` : ''}>${this.escapeHtml(l.badge)}</span>
                      </div>
                    </div>
                    <div class="execom-card-footer">
                      <span>Appointed Executive</span>
                      <span>Session 2026–27</span>
                    </div>
                  </div>
                `;
              })() : ''}
            </div>

            <!-- Tier 2 (Core Admin): Vice President & General Secretary Centered in 2 Columns -->
            <div class="execom-pyramid-row-2">
              ${coreAdminLeaders.map(l => {
                const fullIdx = data.seniorExecom.findIndex(m => m.id === l.id);
                return `
                  <div class="execom-leader-card member-card-interactive ${isAdminMode ? 'studio-card-wrapper' : ''}" data-member-id="${l.id}" data-member-type="senior" draggable="false" title="Click to view member profile">
                    ${isAdminMode ? `
                      <div class="studio-card-actions">
                        <button type="button" class="studio-card-btn btn-card-photo" data-card-type="senior" data-card-id="${l.id}" title="Upload / Adjust Photo">📷 Photo</button>
                        <button type="button" class="studio-card-btn btn-card-dup" data-card-type="senior" data-card-id="${l.id}" title="Duplicate Member">❐ Copy</button>
                        <button type="button" class="studio-card-btn btn-card-delete" data-card-type="senior" data-card-id="${l.id}" title="Delete Member">🗑 Del</button>
                      </div>
                    ` : ''}
                    <div>
                      <div class="execom-leader-top">
                        <span class="execom-lead-pill" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.team"` : ''}>${this.escapeHtml(l.team)}</span>
                        <span class="execom-tier-sub">Core • Tier 2</span>
                      </div>
                      <div class="execom-avatar-wrap">
                        <div class="execom-avatar-container">
                          ${l.avatarUrl ? `
                            <img src="${this.escapeHtml(l.avatarUrl)}" alt="${this.escapeHtml(l.name)}" class="execom-avatar-img pointer-events-none select-none" draggable="false">
                          ` : `
                            <div class="execom-avatar-initials">${this.escapeHtml(l.avatar || 'EX')}</div>
                          `}
                          <div class="avatar-shield" aria-hidden="true"></div>
                        </div>
                        <div>
                          <h3 class="execom-leader-name" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.name" title="Click to edit name"` : ''}>${this.escapeHtml(l.name)}</h3>
                          <div class="execom-leader-role" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.role" title="Click to edit role"` : ''}>${this.escapeHtml(l.role)}</div>
                        </div>
                      </div>
                      <div class="execom-academic-info">
                        <span ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.badge"` : ''}>${this.escapeHtml(l.badge)}</span>
                      </div>
                    </div>
                    <div class="execom-card-footer">
                      <span>Appointed Executive</span>
                      <span>Session 2026–27</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Tier 3 (Functional Leads): Dedicated row mapping ONLY members with LEAD badge -->
            <div class="execom-tier-subheading">
              <span>Tier 3 • Functional Leads</span>
              <span class="execom-subheading-tag">${functionalLeads.length} Lead Positions</span>
            </div>
            <div class="execom-tier3-leads-grid">
              ${functionalLeads.map(m => {
                const fullIdx = data.seniorExecom.findIndex(item => item.id === m.id);
                return `
                  <div class="execom-func-card is-lead member-card-interactive ${isAdminMode ? 'studio-card-wrapper' : ''}" data-member-id="${m.id}" data-member-type="senior" draggable="false" title="Click to view member profile">
                    ${isAdminMode ? `
                      <div class="studio-card-actions">
                        <button type="button" class="studio-card-btn btn-card-photo" data-card-type="senior" data-card-id="${m.id}" title="Upload / Adjust Photo">📷 Photo</button>
                        <button type="button" class="studio-card-btn btn-card-dup" data-card-type="senior" data-card-id="${m.id}" title="Duplicate Member">❐ Copy</button>
                        <button type="button" class="studio-card-btn btn-card-delete" data-card-type="senior" data-card-id="${m.id}" title="Delete Member">🗑 Del</button>
                      </div>
                    ` : ''}
                    <div>
                      <div class="execom-func-top">
                        <span class="execom-func-team" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.team"` : ''}>${this.escapeHtml(m.team)}</span>
                        <span class="execom-lead-tag">Lead</span>
                      </div>
                      <div class="execom-func-mid">
                        <div class="execom-avatar-container mini">
                          ${m.avatarUrl ? `
                            <img src="${this.escapeHtml(m.avatarUrl)}" alt="${this.escapeHtml(m.name)}" class="execom-avatar-img pointer-events-none select-none" draggable="false">
                          ` : `
                            <div class="execom-avatar-initials">${this.escapeHtml(m.avatar || 'FL')}</div>
                          `}
                          <div class="avatar-shield" aria-hidden="true"></div>
                        </div>
                        <div>
                          <h4 class="execom-func-name" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.name" title="Click to edit name"` : ''}>${this.escapeHtml(m.name)}</h4>
                          <div class="execom-func-role" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.role" title="Click to edit role"` : ''}>${this.escapeHtml(m.role)}</div>
                        </div>
                      </div>
                      <div class="execom-academic-info">
                        <span ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.badge"` : ''}>${this.escapeHtml(m.badge)}</span>
                      </div>
                    </div>
                    <div class="execom-func-footer">
                      <span>Functional Lead</span>
                      <span>2026–27</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Tier 4 (Functional Members): Dedicated row beneath Leads mapping ONLY members with MEMBER badge -->
            <div class="execom-tier-subheading">
              <span>Tier 4 • Functional Members</span>
              <span class="execom-subheading-tag">${functionalMembers.length} Appointed Members</span>
            </div>
            <div class="execom-tier4-members-grid">
              ${functionalMembers.map(m => {
                const fullIdx = data.seniorExecom.findIndex(item => item.id === m.id);
                return `
                  <div class="execom-func-card member-card-interactive ${isAdminMode ? 'studio-card-wrapper' : ''}" data-member-id="${m.id}" data-member-type="senior" draggable="false" title="Click to view member profile">
                    ${isAdminMode ? `
                      <div class="studio-card-actions">
                        <button type="button" class="studio-card-btn btn-card-photo" data-card-type="senior" data-card-id="${m.id}" title="Upload / Adjust Photo">📷 Photo</button>
                        <button type="button" class="studio-card-btn btn-card-dup" data-card-type="senior" data-card-id="${m.id}" title="Duplicate Member">❐ Copy</button>
                        <button type="button" class="studio-card-btn btn-card-delete" data-card-type="senior" data-card-id="${m.id}" title="Delete Member">🗑 Del</button>
                      </div>
                    ` : ''}
                    <div>
                      <div class="execom-func-top">
                        <span class="execom-func-team" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.team"` : ''}>${this.escapeHtml(m.team)}</span>
                        <span class="execom-lead-tag" style="background: rgba(107, 114, 128, 0.1); color: #4B5563; border-color: rgba(107, 114, 128, 0.2);">Member</span>
                      </div>
                      <div class="execom-func-mid">
                        <div class="execom-avatar-container mini">
                          ${m.avatarUrl ? `
                            <img src="${this.escapeHtml(m.avatarUrl)}" alt="${this.escapeHtml(m.name)}" class="execom-avatar-img pointer-events-none select-none" draggable="false">
                          ` : `
                            <div class="execom-avatar-initials">${this.escapeHtml(m.avatar || 'FM')}</div>
                          `}
                          <div class="avatar-shield" aria-hidden="true"></div>
                        </div>
                        <div>
                          <h4 class="execom-func-name" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.name" title="Click to edit name"` : ''}>${this.escapeHtml(m.name)}</h4>
                          <div class="execom-func-role" ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.role" title="Click to edit role"` : ''}>${this.escapeHtml(m.role)}</div>
                        </div>
                      </div>
                      <div class="execom-academic-info">
                        <span ${isAdminMode ? `data-edit-path="execomData.seniorExecom.${fullIdx}.badge"` : ''}>${this.escapeHtml(m.badge)}</span>
                      </div>
                    </div>
                    <div class="execom-func-footer">
                      <span>Functional Member</span>
                      <span>2026–27</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            ${isAdminMode ? `
              <div class="studio-add-card-placeholder" data-action="add-senior-member" style="margin-top: 1.5rem;">
                <span style="font-size: 1.3rem; font-weight: 700; color: #8B1014;">+ Add Senior Executive Member</span>
                <span style="font-size: 0.85rem; color: #6B7280; margin-top: 4px;">Click to append a new appointed senior member to this roster</span>
              </div>
            ` : ''}
          </div>

          <!-- C. Tier 2: Junior Executive Committee -->
          <div id="section-junior" class="execom-tier-wrap">
            <div class="execom-tier-header">
              <div>
                <div class="execom-tier-tag">Tier 2 • Junior Execom</div>
                <h2 class="execom-tier-h2">Junior Executive Operational Tracks</h2>
                <div class="execom-tier-desc">${data.juniorExecom.length} appointed junior executives dedicated to technical simulation toolkits, stage ops, venue logistics, and audit archival.</div>
              </div>
              <div class="execom-mandate-ref">${data.juniorExecom.length} Appointed Members</div>
            </div>

            <div class="execom-junior-grid">
              ${data.juniorExecom.map((j, idx) => `
                <div class="execom-junior-card member-card-interactive ${isAdminMode ? 'studio-card-wrapper' : ''}" data-member-id="${j.id}" data-member-type="junior" draggable="false" title="Click to view member profile">
                  ${isAdminMode ? `
                    <div class="studio-card-actions">
                      <button type="button" class="studio-card-btn btn-card-photo" data-card-type="junior" data-card-id="${j.id}" title="Upload / Adjust Photo">📷 Photo</button>
                      <button type="button" class="studio-card-btn btn-card-dup" data-card-type="junior" data-card-id="${j.id}" title="Duplicate Track">❐ Copy</button>
                      <button type="button" class="studio-card-btn btn-card-delete" data-card-type="junior" data-card-id="${j.id}" title="Delete Track">🗑 Del</button>
                    </div>
                  ` : ''}
                  <div>
                    <span class="execom-track-pill" ${isAdminMode ? `data-edit-path="execomData.juniorExecom.${idx}.track" title="Click to edit track"` : ''}>${this.escapeHtml(j.track)}</span>
                    <div class="execom-junior-mid">
                      <div class="execom-avatar-container mini">
                        ${j.avatarUrl ? `
                          <img src="${this.escapeHtml(j.avatarUrl)}" alt="${this.escapeHtml(j.name)}" class="execom-avatar-img pointer-events-none select-none" draggable="false">
                        ` : `
                          <div class="execom-avatar-initials">${this.escapeHtml(j.avatar || 'JR')}</div>
                        `}
                        <div class="avatar-shield" aria-hidden="true"></div>
                      </div>
                      <div>
                        <h4 class="execom-junior-name" ${isAdminMode ? `data-edit-path="execomData.juniorExecom.${idx}.name" title="Click to edit name"` : ''}>${this.escapeHtml(j.name)}</h4>
                        <div class="execom-junior-role">Junior Executive</div>
                      </div>
                    </div>
                    <div class="execom-academic-info">
                      <span ${isAdminMode ? `data-edit-path="execomData.juniorExecom.${idx}.badge" title="Click to edit badge"` : ''}>${this.escapeHtml(j.badge)}</span>
                    </div>
                  </div>
                  <div class="execom-junior-footer">
                    <span>Mentored by Senior Leads</span>
                    <span>Session 2026–27</span>
                  </div>
                </div>
              `).join('')}
            </div>

            ${isAdminMode ? `
              <div class="studio-add-card-placeholder" data-action="add-junior-member" style="margin-top: 1.5rem;">
                <span style="font-size: 1.3rem; font-weight: 700; color: #8B1014;">+ Add Junior Operational Track</span>
                <span style="font-size: 0.85rem; color: #6B7280; margin-top: 4px;">Click to append a new junior executive track card</span>
              </div>
            ` : ''}
          </div>

          <!-- D. Tier 3: Student Chapter Directory -->
          <div id="section-roster" class="execom-tier-wrap">
            <div class="execom-tier-header">
              <div>
                <div class="execom-tier-tag">Tier 3 • Directory</div>
                <h2 class="execom-tier-h2">Student Chapter General Members</h2>
                <div class="execom-tier-desc">Complete directory of all ${totalCount} registered undergraduate & postgraduate members.</div>
              </div>
              <div id="execom-live-count" class="execom-mandate-ref execom-mandate-crimson">
                Showing ${totalCount} General Members
              </div>
            </div>

            <!-- Interactive Minimalist Control Panel -->
            <div class="execom-ctrl-panel">
              <div class="execom-ctrl-row-1">
                <input type="text" id="execom-search" class="execom-search-input" placeholder="Search by student name, semester, department..." />
                
                <div class="execom-dept-wrap">
                  <span class="execom-filter-lbl">Department:</span>
                  <select id="execom-dept-select" class="execom-dept-select">
                    <option value="All">All Departments</option>
                    <option value="Mechanical Engineering">Mechanical Engineering (44)</option>
                    <option value="Chemical Engineering">Chemical Engineering (4)</option>
                  </select>
                </div>
              </div>

              <div class="execom-ctrl-row-2">
                <div class="execom-filter-pills">
                  <span class="execom-filter-lbl">Semester:</span>
                  <button type="button" class="execom-pill-btn active" data-sem="All">All</button>
                  <button type="button" class="execom-pill-btn" data-sem="Ph.D.">Ph.D.</button>
                  <button type="button" class="execom-pill-btn" data-sem="S7">S7</button>
                  <button type="button" class="execom-pill-btn" data-sem="S5">S5</button>
                  <button type="button" class="execom-pill-btn" data-sem="S3">S3</button>
                </div>
              </div>
            </div>

            <!-- Dynamic Table Container -->
            <div id="execom-roster-display" class="execom-table-wrap"></div>
          </div>
        </div>
      `;
    },

    initExecomInteractivity(container) {
      if (!container) return;

      const searchInput = container.querySelector('#execom-search');
      const deptSelect = container.querySelector('#execom-dept-select');
      const pillBtns = container.querySelectorAll('.execom-pill-btn[data-sem]');
      const tabBtns = container.querySelectorAll('.execom-tab-btn');
      const displayEl = container.querySelector('#execom-roster-display');
      const countEl = container.querySelector('#execom-live-count');

      if (!displayEl) return;

      let state = {
        query: '',
        sem: 'All',
        dept: 'All',
        activeTab: 'all'
      };

      const renderRoster = () => {
        const blueprint = SiteStore.get();
        const activeData = blueprint.execomData || DEFAULT_EXECOM_DATA;
        const rosterList = activeData.roster || [];

        const filtered = rosterList.filter(m => {
          if (state.query) {
            const q = state.query.toLowerCase();
            const matchName = m.name.toLowerCase().includes(q);
            const matchDept = m.department.toLowerCase().includes(q);
            const matchSem = m.semester.toLowerCase().includes(q);
            if (!matchName && !matchDept && !matchSem) return false;
          }
          if (state.sem !== 'All') {
            if (state.sem === 'Ph.D.' && m.semester !== 'Ph.D.') return false;
            if (state.sem !== 'Ph.D.' && m.semester !== state.sem) return false;
          }
          if (state.dept !== 'All') {
            if (m.department !== state.dept) return false;
          }
          return true;
        });

        if (countEl) {
          countEl.textContent = `Showing ${filtered.length} of ${rosterList.length} General Members`;
        }

        if (filtered.length === 0) {
          displayEl.innerHTML = `
            <div class="execom-empty-box">
              <h4 class="execom-empty-title">No matching student records found</h4>
              <p class="execom-empty-desc">Try clearing search terms or resetting the department/semester filter.</p>
            </div>
          `;
          return;
        }

        displayEl.innerHTML = `
          <table class="execom-table">
            <thead>
              <tr>
                <th style="width: 45px;">#</th>
                <th>Student Name</th>
                <th>Programme</th>
                <th>Department</th>
                <th style="text-align: center;">Semester</th>
                <th>Member Status</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map((m, idx) => `
                <tr>
                  <td class="execom-td-num">${idx + 1}</td>
                  <td class="execom-td-name">${PublicRenderer.escapeHtml(m.name)}</td>
                  <td>${PublicRenderer.escapeHtml(m.programme)}</td>
                  <td>${PublicRenderer.escapeHtml(m.department)}</td>
                  <td style="text-align: center;"><span class="execom-sem-tag">${m.semester}</span></td>
                  <td>
                    <span class="execom-general-status">General Member</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      };

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          state.query = e.target.value.trim();
          renderRoster();
        });
      }

      if (deptSelect) {
        deptSelect.addEventListener('change', (e) => {
          state.dept = e.target.value;
          renderRoster();
        });
      }

      pillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          pillBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.sem = btn.dataset.sem || 'All';
          renderRoster();
        });
      });

      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const tab = btn.dataset.tab;
          const secSenior = container.querySelector('#section-senior');
          const secJunior = container.querySelector('#section-junior');
          const secRoster = container.querySelector('#section-roster');

          if (secSenior) secSenior.style.display = (tab === 'all' || tab === 'senior') ? 'block' : 'none';
          if (secJunior) secJunior.style.display = (tab === 'all' || tab === 'junior') ? 'block' : 'none';
          if (secRoster) secRoster.style.display = (tab === 'all' || tab === 'roster') ? 'block' : 'none';
        });
      });

      // Strict Anti-Copy & Anti-Download Event Interception on Public View
      container.addEventListener('contextmenu', (e) => {
        if (!container.closest('#admin-studio')) {
          e.preventDefault();
          return false;
        }
      });
      container.addEventListener('copy', (e) => {
        if (!container.closest('#admin-studio')) {
          e.preventDefault();
          return false;
        }
      });
      container.addEventListener('cut', (e) => {
        if (!container.closest('#admin-studio')) {
          e.preventDefault();
          return false;
        }
      });
      container.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
      });

      // Interactive Member Card Click -> Open Detail Popup Modal
      container.addEventListener('click', (e) => {
        if (e.target.closest('.studio-card-actions') || e.target.closest('.studio-add-card-placeholder')) {
          return;
        }
        const card = e.target.closest('.member-card-interactive');
        if (card && card.dataset.memberId) {
          MemberDetailModal.open(card.dataset.memberId, card.dataset.memberType || 'senior');
        }
      });

      renderRoster();
    },

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  };

  // ==========================================================================
  // 6B. ADMIN PHOTO MANAGEMENT & CIRCULAR CROPPER CONTROLLER
  // ==========================================================================
  const PhotoCropper = {
    activeMember: null, // { type: 'senior' | 'junior', id: string, name: string }
    image: null,
    zoom: 1.0,
    rotation: 0,
    panX: 0,
    panY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    initialPanX: 0,
    initialPanY: 0,

    init() {
      const fileInput = document.getElementById('cropper-file-input');
      const pickBtn = document.getElementById('cropper-pick-file-btn');
      const stage = document.getElementById('cropper-stage');
      const zoomRange = document.getElementById('cropper-zoom-range');
      const zoomVal = document.getElementById('cropper-zoom-val');
      const rotCcwBtn = document.getElementById('cropper-rotate-ccw');
      const rotCwBtn = document.getElementById('cropper-rotate-cw');
      const resetBtn = document.getElementById('cropper-reset-btn');
      const removeBtn = document.getElementById('cropper-remove-avatar-btn');
      const saveBtn = document.getElementById('cropper-save-btn');

      if (pickBtn && fileInput) {
        pickBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            this.loadFile(e.target.files[0]);
          }
        });
      }

      if (zoomRange) {
        zoomRange.addEventListener('input', () => {
          this.zoom = parseFloat(zoomRange.value) || 1.0;
          if (zoomVal) zoomVal.textContent = `${this.zoom.toFixed(1)}×`;
          this.renderStage();
        });
      }

      if (rotCcwBtn) {
        rotCcwBtn.addEventListener('click', () => this.rotate(-90));
      }
      if (rotCwBtn) {
        rotCwBtn.addEventListener('click', () => this.rotate(90));
      }
      if (resetBtn) {
        resetBtn.addEventListener('click', () => this.reset());
      }
      if (removeBtn) {
        removeBtn.addEventListener('click', () => this.removePhoto());
      }
      if (saveBtn) {
        saveBtn.addEventListener('click', () => this.saveCroppedPhoto());
      }

      // Close handlers for PhotoCropper modal
      const modal = document.getElementById('photo-cropper-modal');
      if (modal) {
        modal.querySelectorAll('[data-close="photo-cropper-modal"]').forEach(btn => {
          btn.addEventListener('click', () => this.close());
        });
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.close();
        });
      }

      // Mouse drag-to-pan on stage
      if (stage) {
        stage.addEventListener('mousedown', (e) => {
          if (!this.image) return;
          this.isDragging = true;
          this.dragStartX = e.clientX;
          this.dragStartY = e.clientY;
          this.initialPanX = this.panX;
          this.initialPanY = this.panY;
          stage.classList.add('is-dragging');
        });

        window.addEventListener('mousemove', (e) => {
          if (!this.isDragging) return;
          const deltaX = e.clientX - this.dragStartX;
          const deltaY = e.clientY - this.dragStartY;
          this.panX = this.initialPanX + deltaX;
          this.panY = this.initialPanY + deltaY;
          this.renderStage();
        });

        window.addEventListener('mouseup', () => {
          if (this.isDragging) {
            this.isDragging = false;
            if (stage) stage.classList.remove('is-dragging');
          }
        });

        // Touch drag-to-pan for mobile/tablets
        stage.addEventListener('touchstart', (e) => {
          if (!this.image || e.touches.length === 0) return;
          this.isDragging = true;
          this.dragStartX = e.touches[0].clientX;
          this.dragStartY = e.touches[0].clientY;
          this.initialPanX = this.panX;
          this.initialPanY = this.panY;
        }, { passive: true });

        stage.addEventListener('touchmove', (e) => {
          if (!this.isDragging || e.touches.length === 0) return;
          const deltaX = e.touches[0].clientX - this.dragStartX;
          const deltaY = e.touches[0].clientY - this.dragStartY;
          this.panX = this.initialPanX + deltaX;
          this.panY = this.initialPanY + deltaY;
          this.renderStage();
        }, { passive: true });

        stage.addEventListener('touchend', () => {
          this.isDragging = false;
        });
      }
    },

    open(memberType, memberId) {
      if (!AuthService.isAuthenticated()) {
        App.showToast('Access restricted: Authenticated Admin session required.');
        return;
      }

      const blueprint = SiteStore.get();
      const data = blueprint.execomData || DEFAULT_EXECOM_DATA;
      const list = memberType === 'senior' ? data.seniorExecom : data.juniorExecom;
      const member = list.find(m => m.id === memberId);
      if (!member) {
        App.showToast('Executive member not found.');
        return;
      }

      this.activeMember = { type: memberType, id: memberId, name: member.name };
      this.zoom = 1.0;
      this.rotation = 0;
      this.panX = 0;
      this.panY = 0;
      this.isDragging = false;

      const titleEl = document.getElementById('cropper-modal-title');
      const labelEl = document.getElementById('cropper-member-label');
      const fileNameEl = document.getElementById('cropper-file-name');
      const fileInput = document.getElementById('cropper-file-input');
      const zoomRange = document.getElementById('cropper-zoom-range');
      const zoomVal = document.getElementById('cropper-zoom-val');
      const removeBtn = document.getElementById('cropper-remove-avatar-btn');

      if (fileInput) fileInput.value = '';
      if (titleEl) titleEl.textContent = `Adjust Photo: ${member.name}`;
      if (labelEl) labelEl.textContent = `${member.role || member.track || 'Executive Member'} • 1:1 Circular Avatar`;
      if (zoomRange) zoomRange.value = '1';
      if (zoomVal) zoomVal.textContent = '1.0×';

      if (member.avatarUrl) {
        if (fileNameEl) fileNameEl.textContent = 'Current active photo loaded';
        if (removeBtn) removeBtn.style.display = 'inline-block';
        const img = new Image();
        img.onload = () => {
          this.image = img;
          this.renderStage();
        };
        img.src = member.avatarUrl;
      } else {
        if (fileNameEl) fileNameEl.textContent = 'No photo uploaded (using initials badge)';
        if (removeBtn) removeBtn.style.display = 'none';
        this.image = null;
        this.renderStage();
      }

      const modal = document.getElementById('photo-cropper-modal');
      if (modal) modal.classList.remove('hidden');
    },

    close() {
      const modal = document.getElementById('photo-cropper-modal');
      if (modal) modal.classList.add('hidden');
      this.activeMember = null;
      this.image = null;
    },

    loadFile(file) {
      if (!file) return;

      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      const fileExt = file.name.split('.').pop().toLowerCase();
      if (!validTypes.includes(file.type.toLowerCase()) && !['jpg', 'jpeg', 'png', 'webp'].includes(fileExt)) {
        alert('Invalid file format. Please upload a .jpg, .jpeg, .png, or .webp image.');
        return;
      }

      // Max file size: 10MB
      const MAX_BYTES = 10 * 1024 * 1024;
      if (file.size > MAX_BYTES) {
        alert(`File size exceeds 10MB limit (Current: ${(file.size / (1024 * 1024)).toFixed(2)}MB). Please choose a compressed or smaller image.`);
        return;
      }

      const fileNameEl = document.getElementById('cropper-file-name');
      if (fileNameEl) {
        fileNameEl.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          this.image = img;
          this.zoom = 1.0;
          this.rotation = 0;
          this.panX = 0;
          this.panY = 0;
          const zoomRange = document.getElementById('cropper-zoom-range');
          const zoomVal = document.getElementById('cropper-zoom-val');
          if (zoomRange) zoomRange.value = '1';
          if (zoomVal) zoomVal.textContent = '1.0×';
          const removeBtn = document.getElementById('cropper-remove-avatar-btn');
          if (removeBtn) removeBtn.style.display = 'inline-block';
          this.renderStage();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    renderStage() {
      const canvas = document.getElementById('cropper-display-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;  // 320
      const h = canvas.height; // 320

      ctx.clearRect(0, 0, w, h);

      if (!this.image) {
        ctx.fillStyle = '#0F172A';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Click "Select New Photo" to begin', w / 2, h / 2 - 10);
        ctx.fillStyle = '#64748B';
        ctx.font = '11px sans-serif';
        ctx.fillText('Accepts .jpg, .png, .webp (max 10MB)', w / 2, h / 2 + 14);
        return;
      }

      ctx.save();
      ctx.translate(w / 2 + this.panX, h / 2 + this.panY);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(this.zoom, this.zoom);

      // Scale image so minimum dimension covers circular crop area (diameter 240px)
      const cropDiameter = 240;
      const imgRatio = this.image.width / this.image.height;
      let drawW, drawH;
      if (imgRatio >= 1) {
        drawH = cropDiameter;
        drawW = cropDiameter * imgRatio;
      } else {
        drawW = cropDiameter;
        drawH = cropDiameter / imgRatio;
      }

      ctx.drawImage(this.image, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();
    },

    rotate(deltaDeg) {
      if (!this.image) return;
      this.rotation = (this.rotation + deltaDeg) % 360;
      if (this.rotation < 0) this.rotation += 360;
      this.renderStage();
    },

    reset() {
      this.zoom = 1.0;
      this.rotation = 0;
      this.panX = 0;
      this.panY = 0;
      const zoomRange = document.getElementById('cropper-zoom-range');
      const zoomVal = document.getElementById('cropper-zoom-val');
      if (zoomRange) zoomRange.value = '1';
      if (zoomVal) zoomVal.textContent = '1.0×';
      this.renderStage();
    },

    removePhoto() {
      if (!this.activeMember) return;
      if (!confirm(`Are you sure you want to remove the custom photo for ${this.activeMember.name} and revert to initials badge?`)) return;

      const blueprint = SiteStore.get();
      const data = blueprint.execomData || DEFAULT_EXECOM_DATA;
      const list = this.activeMember.type === 'senior' ? data.seniorExecom : data.juniorExecom;
      const member = list.find(m => m.id === this.activeMember.id);
      if (member) {
        member.avatarUrl = null;
        member.avatarFileId = null;
        SiteStore.save(blueprint, true);
        App.showToast(`Reverted ${this.activeMember.name} to initials badge.`);
        AdminStudio.renderLiveCanvas();
        if (AdminStudio && AdminStudio.activeSectionId === 'execom-directory') {
          AdminStudio.renderInspector('execom-directory');
        }
        this.close();
      }
    },

    saveCroppedPhoto() {
      if (!this.activeMember) return;
      if (!this.image) {
        alert('Please select a photo before saving.');
        return;
      }

      // Draw cropped region onto strictly 200x200 canvas
      // This canvas re-encoding automatically strips all hidden camera EXIF metadata,
      // GPS coordinates, and device serial numbers before saving.
      const exportCanvas = document.createElement('canvas');
      exportCanvas.width = 200;
      exportCanvas.height = 200;
      const expCtx = exportCanvas.getContext('2d');

      // The circular mask on the 320x320 stage has diameter 240px.
      // We map that 240px circle to 200px export size.
      const scaleToExport = 200 / 240;

      expCtx.save();
      expCtx.translate(100 + (this.panX * scaleToExport), 100 + (this.panY * scaleToExport));
      expCtx.rotate((this.rotation * Math.PI) / 180);
      expCtx.scale(this.zoom * scaleToExport, this.zoom * scaleToExport);

      const cropDiameter = 240;
      const imgRatio = this.image.width / this.image.height;
      let drawW, drawH;
      if (imgRatio >= 1) {
        drawH = cropDiameter;
        drawW = cropDiameter * imgRatio;
      } else {
        drawW = cropDiameter;
        drawH = cropDiameter / imgRatio;
      }

      expCtx.drawImage(this.image, -drawW / 2, -drawH / 2, drawW, drawH);
      expCtx.restore();

      // Export as WebP compressed to 0.85
      let sanitizedDataUrl;
      try {
        sanitizedDataUrl = exportCanvas.toDataURL('image/webp', 0.85);
      } catch (e) {
        sanitizedDataUrl = exportCanvas.toDataURL('image/jpeg', 0.85);
      }

      const blueprint = SiteStore.get();
      const data = blueprint.execomData || DEFAULT_EXECOM_DATA;
      const list = this.activeMember.type === 'senior' ? data.seniorExecom : data.juniorExecom;
      const member = list.find(m => m.id === this.activeMember.id);
      if (member) {
        member.avatarUrl = sanitizedDataUrl;
        member.avatarFileId = `exec-avatar-${member.id}.webp`;
        SiteStore.save(blueprint, true);
        App.showToast(`Saved sanitized avatar for ${member.name} (EXIF purged, 200×200 WebP).`);
        AdminStudio.renderLiveCanvas();
        if (AdminStudio && AdminStudio.activeSectionId === 'execom-directory') {
          AdminStudio.renderInspector('execom-directory');
        }
        this.close();
      }
    }
  };

  // ==========================================================================
  // 6C. INTERACTIVE MEMBER DETAIL POPUP MODAL CONTROLLER
  // ==========================================================================
  const MemberDetailModal = {
    modalEl: null,
    containerEl: null,
    currentMember: null,
    currentType: 'senior',

    init() {
      this.modalEl = document.getElementById('member-detail-modal');
      this.containerEl = document.getElementById('member-detail-container');
      if (!this.modalEl) return;

      // Close button
      const closeBtn = this.modalEl.querySelector('[data-close="member-detail-modal"]');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.close());
      }

      // Backdrop click to close
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) {
          this.close();
        }
      });

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modalEl && !this.modalEl.classList.contains('hidden')) {
          this.close();
        }
      });

      // Admin Save Bio handler
      this.modalEl.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'modal-save-bio-btn') {
          this.saveBio();
        }
      });
    },

    open(memberId, memberType = 'senior') {
      if (!this.modalEl) this.init();
      if (!this.modalEl) return;

      const blueprint = SiteStore.get();
      const exeData = blueprint.execomData || DEFAULT_EXECOM_DATA;
      let member = null;

      if (memberType === 'junior') {
        member = (exeData.juniorExecom || []).find(m => m.id === memberId);
      } else {
        member = (exeData.seniorExecom || []).find(m => m.id === memberId);
        if (!member) {
          member = (exeData.juniorExecom || []).find(m => m.id === memberId);
          if (member) memberType = 'junior';
        }
      }

      if (!member) return;

      this.currentMember = member;
      this.currentType = memberType;

      const isAdmin = AuthService.isAuthenticated();

      // 1. Left Column (Full Image - md:col-span-5): Uncropped vertical/rectangular portrait
      // Strict anti-copy: draggable="false", oncontextmenu="return false;", pointer-events: none;
      const imgWrap = document.getElementById('member-modal-img-wrap');
      if (imgWrap) {
        if (member.avatarUrl) {
          imgWrap.innerHTML = `
            <img 
              src="${PublicRenderer.escapeHtml(member.avatarUrl)}" 
              alt="${PublicRenderer.escapeHtml(member.name)}" 
              class="member-portrait-img" 
              draggable="false" 
              oncontextmenu="return false;"
              style="pointer-events: none;"
            />
            <div class="member-portrait-shield" aria-hidden="true" oncontextmenu="return false;"></div>
          `;
        } else {
          imgWrap.innerHTML = `
            <div class="member-portrait-fallback" oncontextmenu="return false;">
              <div class="fallback-emblem-seal">${PublicRenderer.escapeHtml(member.avatar || member.name.substring(0, 2).toUpperCase())}</div>
              <div class="fallback-seal-name">${PublicRenderer.escapeHtml(member.name)}</div>
              <div class="fallback-seal-dept">${PublicRenderer.escapeHtml(member.badge || member.track || 'ISHMT TKMCE')}</div>
            </div>
          `;
        }
      }

      // 2. Right Column (Member Data - md:col-span-7)
      const tierPill = document.getElementById('member-modal-tier-pill');
      if (tierPill) {
        if (memberType === 'junior') {
          tierPill.textContent = 'JUNIOR EXECOM';
        } else if (member.isCore) {
          tierPill.textContent = 'CORE LEADERSHIP';
        } else if (member.isLead) {
          tierPill.textContent = 'FUNCTIONAL LEAD';
        } else {
          tierPill.textContent = 'FUNCTIONAL MEMBER';
        }
      }

      const nameEl = document.getElementById('member-modal-name');
      if (nameEl) nameEl.textContent = member.name;

      const roleEl = document.getElementById('member-modal-role');
      if (roleEl) {
        roleEl.textContent = member.role || member.focus || member.track || 'Executive Member';
      }

      const badgeEl = document.getElementById('member-modal-academic-badge');
      if (badgeEl) {
        badgeEl.textContent = member.badge || 'B.Tech • Mechanical Engineering';
      }

      const descTextEl = document.getElementById('member-modal-desc-text');
      const bioText = member.bio || (memberType === 'junior' ? `${member.focus || 'Active operational track'} across chapter operations.` : 'Appointed member of the ISHMT TKMCE Student Chapter Executive Committee for 2026–27.');
      if (descTextEl) {
        descTextEl.textContent = bioText;
      }

      // 3. Admin-Only Editor & Public Security
      const adminEditor = document.getElementById('member-modal-admin-editor');
      const container = document.getElementById('member-detail-container');

      if (isAdmin) {
        if (adminEditor) {
          adminEditor.classList.remove('hidden');
          const textarea = document.getElementById('modal-admin-bio-textarea');
          if (textarea) textarea.value = member.bio || '';
        }
        if (container) {
          container.classList.remove('member-modal-public-readonly', 'select-none');
          container.removeAttribute('oncopy');
        }
      } else {
        if (adminEditor) {
          adminEditor.classList.add('hidden');
        }
        if (container) {
          container.classList.add('member-modal-public-readonly', 'select-none');
          container.setAttribute('oncopy', 'return false;');
        }
      }

      // Show Modal
      this.modalEl.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    },

    saveBio() {
      if (!this.currentMember || !AuthService.isAuthenticated()) return;
      const textarea = document.getElementById('modal-admin-bio-textarea');
      if (!textarea) return;

      const newBio = textarea.value.trim();
      const blueprint = SiteStore.get();
      const exeData = blueprint.execomData || DEFAULT_EXECOM_DATA;

      let targetList = this.currentType === 'junior' ? exeData.juniorExecom : exeData.seniorExecom;
      const item = targetList.find(m => m.id === this.currentMember.id);
      if (item) {
        item.bio = newBio;
        SiteStore.save(blueprint, true);
        this.currentMember.bio = newBio;

        const descTextEl = document.getElementById('member-modal-desc-text');
        if (descTextEl) descTextEl.textContent = newBio;

        App.showToast(`Updated public description for ${item.name}.`);
      }
    },

    close() {
      if (!this.modalEl) return;
      this.modalEl.classList.add('hidden');
      document.body.style.overflow = '';
      this.currentMember = null;
      this.currentType = 'senior';
    }
  };

  // ==========================================================================
  // 7. PHASE 2: PROTECTED MASTER CONTROL STUDIO (#/admin)
  // ==========================================================================
  const AdminStudio = {
    activePageSlug: '/',
    activeSectionId: null,
    saveDebounceTimer: null,
    activeEditingEl: null,

    init() {
      this.bindEvents();
      this.bindInlineEditor();
    },

    open() {
      const blueprint = SiteStore.get();
      if (!blueprint.pages[this.activePageSlug]) {
        this.activePageSlug = Object.keys(blueprint.pages)[0] || '/';
      }

      this.populatePageSelect();
      this.renderSectionsOutline();
      this.renderPagesManager();
      this.populateThemeForm();
      this.renderLiveCanvas();
    },

    populatePageSelect() {
      const select = document.getElementById('admin-page-select');
      if (!select) return;

      const blueprint = SiteStore.get();
      select.innerHTML = Object.keys(blueprint.pages).map(slug => {
        const page = blueprint.pages[slug];
        const isSelected = slug === this.activePageSlug ? 'selected' : '';
        return `<option value="${slug}" ${isSelected}>${PublicRenderer.escapeHtml(page.title)} (${slug})</option>`;
      }).join('');
    },

    renderLiveCanvas() {
      const renderEl = document.getElementById('admin-live-render');
      if (!renderEl) return;

      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug] || { sections: [] };

      renderEl.innerHTML = '';

      // Direct Click-to-Edit Visual Guide Banner at the top of canvas
      renderEl.insertAdjacentHTML('beforeend', `
        <div class="studio-guide-banner">
          <div class="guide-banner-text">
            <span class="guide-banner-icon">⚡</span>
            <span><strong>Direct Click-to-Edit Mode:</strong> Click directly on ANY text or card on this preview canvas to edit words instantly. Hover over cards to duplicate or delete.</span>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <span class="sync-indicator synced" id="canvas-sync-status"><span class="status-dot"></span> Synced</span>
          </div>
        </div>
      `);

      if (!page.sections || page.sections.length === 0) {
        renderEl.insertAdjacentHTML('beforeend', `
          <div style="padding: 6rem 2rem; text-align: center; color: #94A3B8;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📄</div>
            <h3 style="font-size: 1.4rem; color: #1E293B; margin-bottom: 0.5rem;">This page has no sections</h3>
            <p style="font-size: 0.95rem; margin-bottom: 1.5rem;">Click below or use the sidebar to add your first content block.</p>
            <button class="btn btn-primary" onclick="document.getElementById('btn-open-block-library').click()">+ Add Block</button>
          </div>
        `);
        return;
      }

      page.sections.forEach(section => {
        const html = PublicRenderer.generateBlockHtml(section, true, this.activePageSlug);
        renderEl.insertAdjacentHTML('beforeend', html);
      });

      // Highlight active section if selected
      if (this.activeSectionId) {
        const activeBlock = renderEl.querySelector(`[data-section-id="${this.activeSectionId}"]`);
        if (activeBlock) activeBlock.classList.add('active-editing');
      }

      // Re-initialize widgets inside admin canvas preview
      PublicRenderer.initExecomInteractivity(renderEl);
      PublicRenderer.initAcademicHomeInteractivity(renderEl);
      PublicRenderer.initAcademicGalleryInteractivity(renderEl);
      PublicRenderer.initAcademicContactInteractivity(renderEl);
    },

    bindInlineEditor() {
      // Ensure floating inline formatting toolbar exists in DOM
      let toolbar = document.getElementById('studio-inline-toolbar');
      if (!toolbar) {
        toolbar = document.createElement('div');
        toolbar.id = 'studio-inline-toolbar';
        toolbar.className = 'studio-inline-toolbar';
        toolbar.innerHTML = `
          <button type="button" class="studio-tb-btn" data-cmd="bold" title="Bold (Ctrl+B)"><b>B</b></button>
          <button type="button" class="studio-tb-btn" data-cmd="italic" title="Italic (Ctrl+I)"><i>I</i></button>
          <button type="button" class="studio-tb-btn" data-cmd="underline" title="Underline (Ctrl+U)"><u>U</u></button>
          <button type="button" class="studio-tb-btn" data-cmd="crimson" title="Brand Crimson Red" style="color: #8B1014; font-weight: 800;">● Red</button>
          <button type="button" class="studio-tb-btn" data-cmd="createLink" title="Insert Link">🔗</button>
          <button type="button" class="studio-tb-btn" data-cmd="removeFormat" title="Clear Formatting">✕</button>
          <button type="button" class="studio-tb-btn btn-save-inline" data-cmd="done" title="Finish Editing">✓ Done</button>
        `;
        document.body.appendChild(toolbar);
      }

      // Handle Toolbar Button Clicks
      toolbar.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent blur of the active editing element
        const btn = e.target.closest('.studio-tb-btn');
        if (!btn) return;

        const cmd = btn.getAttribute('data-cmd');
        if (cmd === 'bold' || cmd === 'italic' || cmd === 'underline' || cmd === 'removeFormat') {
          document.execCommand(cmd, false, null);
        } else if (cmd === 'crimson') {
          document.execCommand('foreColor', false, '#8B1014');
        } else if (cmd === 'createLink') {
          const url = prompt('Enter destination link URL:', 'https://');
          if (url) document.execCommand('createLink', false, url);
        } else if (cmd === 'done') {
          if (this.activeEditingEl) {
            this.activeEditingEl.blur();
          }
        }
      });

      const updateSyncStatus = (status) => {
        const topbarIndicator = document.getElementById('sync-status-indicator');
        const canvasIndicator = document.getElementById('canvas-sync-status');
        const text = status === 'saving' ? 'Saving...' : 'Synced';
        const cls = status === 'saving' ? 'sync-indicator saving' : 'sync-indicator synced';

        if (topbarIndicator) {
          topbarIndicator.className = cls;
          const label = topbarIndicator.querySelector('.status-text');
          if (label) label.textContent = text;
        }
        if (canvasIndicator) {
          canvasIndicator.className = cls;
          canvasIndicator.innerHTML = `<span class="status-dot"></span> ${text}`;
        }
      };

      // Click-to-edit listener inside #admin-live-render
      const renderEl = document.getElementById('admin-live-render');
      if (!renderEl) return;

      renderEl.addEventListener('click', (e) => {
        // 1. Direct editable text click
        const editEl = e.target.closest('[data-edit-path]');
        if (editEl) {
          e.preventDefault();
          e.stopPropagation();

          if (this.activeEditingEl && this.activeEditingEl !== editEl) {
            this.activeEditingEl.removeAttribute('contenteditable');
            this.activeEditingEl.classList.remove('studio-active-editing');
          }

          this.activeEditingEl = editEl;
          editEl.setAttribute('contenteditable', 'true');
          editEl.classList.add('studio-active-editing');
          editEl.focus();

          // Position floating toolbar above the element
          const rect = editEl.getBoundingClientRect();
          toolbar.classList.add('visible');
          const tbTop = Math.max(10, rect.top - 46);
          const tbLeft = Math.max(10, Math.min(window.innerWidth - 300, rect.left));
          toolbar.style.top = `${tbTop}px`;
          toolbar.style.left = `${tbLeft}px`;
          return;
        }

        // 2. Duplicate Card Button
        const dupBtn = e.target.closest('.btn-card-dup');
        if (dupBtn) {
          e.preventDefault();
          e.stopPropagation();
          const cardType = dupBtn.getAttribute('data-card-type');
          const cardId = dupBtn.getAttribute('data-card-id');
          const blueprint = SiteStore.get();

          if (cardType === 'senior') {
            const list = blueprint.execomData.seniorExecom;
            const idx = list.findIndex(m => m.id === cardId);
            if (idx !== -1) {
              const orig = list[idx];
              const dup = { ...deepClone(orig), id: `sen-${Date.now()}`, name: `${orig.name} (Copy)` };
              list.splice(idx + 1, 0, dup);
              SiteStore.save(blueprint, true);
              App.showToast(`Duplicated member "${orig.name}".`);
              this.renderLiveCanvas();
            }
          } else if (cardType === 'junior') {
            const list = blueprint.execomData.juniorExecom;
            const idx = list.findIndex(m => m.id === cardId);
            if (idx !== -1) {
              const orig = list[idx];
              const dup = { ...deepClone(orig), id: `jun-${Date.now()}`, name: `${orig.name} (Copy)` };
              list.splice(idx + 1, 0, dup);
              SiteStore.save(blueprint, true);
              App.showToast(`Duplicated junior track "${orig.name}".`);
              this.renderLiveCanvas();
            }
          } else if (cardType === 'event') {
            const secId = dupBtn.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content && sec.content.items) {
              const idx = sec.content.items.findIndex(i => i.id === cardId);
              if (idx !== -1) {
                const orig = sec.content.items[idx];
                const dup = { ...deepClone(orig), id: `ev-${Date.now()}`, title: `${orig.title} (Copy)` };
                sec.content.items.splice(idx + 1, 0, dup);
                SiteStore.save(blueprint, true);
                App.showToast('Event card duplicated.');
                this.renderLiveCanvas();
              }
            }
          } else if (cardType === 'gallery') {
            const secId = dupBtn.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content && sec.content.items) {
              const idx = sec.content.items.findIndex(i => i.id === cardId);
              if (idx !== -1) {
                const orig = sec.content.items[idx];
                const dup = { ...deepClone(orig), id: `gal-${Date.now()}`, title: `${orig.title} (Copy)` };
                sec.content.items.splice(idx + 1, 0, dup);
                SiteStore.save(blueprint, true);
                App.showToast('Gallery archive card duplicated.');
                this.renderLiveCanvas();
              }
            }
          } else if (cardType === 'offer') {
            const list = blueprint.homeData.offers;
            const idx = list.findIndex(o => o.id === cardId);
            if (idx !== -1) {
              const orig = list[idx];
              const dup = { ...deepClone(orig), id: `offer-${Date.now()}`, title: `${orig.title} (Copy)` };
              list.splice(idx + 1, 0, dup);
              SiteStore.save(blueprint, true);
              App.showToast('Initiative card duplicated.');
              this.renderLiveCanvas();
            }
          } else if (cardType === 'stat') {
            const list = blueprint.homeData.stats;
            const idx = list.findIndex(s => s.id === cardId);
            if (idx !== -1) {
              const orig = list[idx];
              const dup = { ...deepClone(orig), id: `stat-${Date.now()}` };
              list.splice(idx + 1, 0, dup);
              SiteStore.save(blueprint, true);
              App.showToast('Milestone stat duplicated.');
              this.renderLiveCanvas();
            }
          }
          return;
        }

        // 3. Delete Card Button
        const delBtn = e.target.closest('.btn-card-delete');
        if (delBtn) {
          e.preventDefault();
          e.stopPropagation();
          const cardType = delBtn.getAttribute('data-card-type');
          const cardId = delBtn.getAttribute('data-card-id');
          if (!confirm('Are you sure you want to delete this card?')) return;

          const blueprint = SiteStore.get();
          if (cardType === 'senior') {
            blueprint.execomData.seniorExecom = blueprint.execomData.seniorExecom.filter(m => m.id !== cardId);
            SiteStore.save(blueprint, true);
            App.showToast('Senior member deleted.');
          } else if (cardType === 'junior') {
            blueprint.execomData.juniorExecom = blueprint.execomData.juniorExecom.filter(m => m.id !== cardId);
            SiteStore.save(blueprint, true);
            App.showToast('Junior track deleted.');
          } else if (cardType === 'event') {
            const secId = delBtn.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content && sec.content.items) {
              sec.content.items = sec.content.items.filter(i => i.id !== cardId);
              SiteStore.save(blueprint, true);
              App.showToast('Event card deleted.');
            }
          } else if (cardType === 'gallery') {
            const secId = delBtn.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content && sec.content.items) {
              sec.content.items = sec.content.items.filter(i => i.id !== cardId);
              SiteStore.save(blueprint, true);
              App.showToast('Gallery archive card deleted.');
            }
          } else if (cardType === 'offer') {
            blueprint.homeData.offers = blueprint.homeData.offers.filter(o => o.id !== cardId);
            SiteStore.save(blueprint, true);
            App.showToast('Card deleted.');
          } else if (cardType === 'stat') {
            blueprint.homeData.stats = blueprint.homeData.stats.filter(s => s.id !== cardId);
            SiteStore.save(blueprint, true);
            App.showToast('Stat item deleted.');
          }
          this.renderLiveCanvas();
          return;
        }

        // 3.5. Photo Cropper Button
        const photoBtn = e.target.closest('.btn-card-photo');
        if (photoBtn) {
          e.preventDefault();
          e.stopPropagation();
          const cardType = photoBtn.getAttribute('data-card-type');
          const cardId = photoBtn.getAttribute('data-card-id');
          PhotoCropper.open(cardType, cardId);
          return;
        }

        // 4. Add Card Placeholders
        const addPlaceholder = e.target.closest('.studio-add-card-placeholder');
        if (addPlaceholder) {
          e.preventDefault();
          e.stopPropagation();
          const action = addPlaceholder.getAttribute('data-action');
          const blueprint = SiteStore.get();

          if (action === 'add-senior-member') {
            const newId = `sen-${Date.now()}`;
            blueprint.execomData.seniorExecom.push({
              id: newId,
              name: 'New Appointed Member',
              role: 'Executive Member',
              team: 'Functional Team',
              isLead: false,
              isCore: false,
              badge: 'B.Tech • 2026–27 Session',
              avatar: 'NM',
              bio: 'Click and type to edit operational focus, research background, and responsibilities.'
            });
            SiteStore.save(blueprint, true);
            App.showToast('New senior member added. Click to edit!');
            this.renderLiveCanvas();
            setTimeout(() => {
              const idx = blueprint.execomData.seniorExecom.length - 1;
              const el = document.querySelector(`[data-edit-path="execomData.seniorExecom.${idx}.name"]`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.click();
              }
            }, 120);
          } else if (action === 'add-junior-member') {
            const newId = `jun-${Date.now()}`;
            blueprint.execomData.juniorExecom.push({
              id: newId,
              name: 'New Junior Executive',
              track: 'Operational Track',
              focus: 'Click and type to customize operational duties and mentorship scope.',
              badge: 'B.Tech • S3',
              avatar: 'JE',
              color: 'cyan'
            });
            SiteStore.save(blueprint, true);
            App.showToast('New junior track added. Click to edit!');
            this.renderLiveCanvas();
            setTimeout(() => {
              const idx = blueprint.execomData.juniorExecom.length - 1;
              const el = document.querySelector(`[data-edit-path="execomData.juniorExecom.${idx}.name"]`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.click();
              }
            }, 120);
          } else if (action === 'add-offer') {
            const newId = `offer-${Date.now()}`;
            if (!blueprint.homeData.offers) blueprint.homeData.offers = [];
            blueprint.homeData.offers.push({
              id: newId,
              icon: 'bootcamp',
              title: 'New Chapter Initiative',
              desc: 'Click and type to describe this workshop, lecture series, or hands-on R&D initiative.'
            });
            SiteStore.save(blueprint, true);
            App.showToast('New initiative card added.');
            this.renderLiveCanvas();
            setTimeout(() => {
              const idx = blueprint.homeData.offers.length - 1;
              const el = document.querySelector(`[data-edit-path="homeData.offers.${idx}.title"]`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.click();
              }
            }, 120);
          } else if (action === 'add-stat') {
            const newId = `stat-${Date.now()}`;
            if (!blueprint.homeData.stats) blueprint.homeData.stats = [];
            blueprint.homeData.stats.push({
              id: newId,
              value: '100%',
              label: 'New Chapter Milestone'
            });
            SiteStore.save(blueprint, true);
            App.showToast('New milestone stat added.');
            this.renderLiveCanvas();
          } else if (action === 'add-event-card') {
            const secId = addPlaceholder.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content) {
              if (!sec.content.items) sec.content.items = [];
              const newId = `ev-${Date.now()}`;
              sec.content.items.push({
                id: newId,
                tag: 'Workshop',
                title: 'New Technical Colloquium',
                description: 'Click and type to detail the workshop schedule, guest speakers, and registration instructions.',
                linkText: 'Register Now →',
                linkUrl: '#/contact'
              });
              SiteStore.save(blueprint, true);
              App.showToast('New event card added.');
              this.renderLiveCanvas();
              setTimeout(() => {
                const idx = sec.content.items.length - 1;
                const secPath = `pages.${this.activePageSlug}.sections.${secId}.content`;
                const el = document.querySelector(`[data-edit-path="${secPath}.items.${idx}.title"]`);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.click();
                }
              }, 120);
            }
          } else if (action === 'add-gallery-card') {
            const secId = addPlaceholder.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content) {
              if (!sec.content.items) sec.content.items = [];
              const newId = `gal-${Date.now()}`;
              sec.content.items.push({
                id: newId,
                category: 'workshops',
                categoryLabel: 'Workshops & Bootcamps',
                title: 'New Chapter Activity Archive',
                date: 'Academic Session 2026–27',
                tag: 'Chapter Event',
                description: 'Click and type directly to document this workshop, keynote lecture, or industrial visit.'
              });
              SiteStore.save(blueprint, true);
              App.showToast('New gallery archive card added. Click to edit!');
              this.renderLiveCanvas();
              setTimeout(() => {
                const idx = sec.content.items.length - 1;
                const secPath = `pages.${this.activePageSlug}.sections.${secId}.content`;
                const el = document.querySelector(`[data-edit-path="${secPath}.items.${idx}.title"]`);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.click();
                }
              }, 120);
            }
          }
        }
      });

      // Typing (input) event in editable elements
      renderEl.addEventListener('input', (e) => {
        const editEl = e.target.closest('[data-edit-path]');
        if (!editEl) return;

        updateSyncStatus('saving');
        clearTimeout(this.saveDebounceTimer);

        this.saveDebounceTimer = setTimeout(() => {
          const path = editEl.getAttribute('data-edit-path');
          if (!path) return;

          let val;
          if (editEl.children.length === 0 || editEl.tagName === 'SPAN' || editEl.tagName === 'H1' || editEl.tagName === 'H2' || editEl.tagName === 'H3' || editEl.tagName === 'H4') {
            val = editEl.innerText.trim();
          } else {
            val = editEl.innerHTML;
          }

          const blueprint = SiteStore.get();
          setDeepValue(blueprint, path, val);
          SiteStore.save(blueprint, false);
          updateSyncStatus('synced');

          // Two-way sync to Inspector input if visible
          this.syncInspectorField(path, val);
        }, 200);
      });

      // Blur event on editable elements
      renderEl.addEventListener('focusout', (e) => {
        const editEl = e.target.closest('[data-edit-path]');
        if (!editEl) return;

        setTimeout(() => {
          if (document.activeElement !== editEl && !toolbar.contains(document.activeElement)) {
            editEl.removeAttribute('contenteditable');
            editEl.classList.remove('studio-active-editing');
            toolbar.classList.remove('visible');

            const path = editEl.getAttribute('data-edit-path');
            if (path) {
              const val = (editEl.children.length === 0) ? editEl.innerText.trim() : editEl.innerHTML;
              const blueprint = SiteStore.get();
              setDeepValue(blueprint, path, val);
              SiteStore.save(blueprint, false);
              updateSyncStatus('synced');
            }
          }
        }, 150);
      });
    },

    syncInspectorField(path, value) {
      const input = document.querySelector(`[data-inspector-path="${path}"]`);
      if (input && input !== document.activeElement) {
        input.value = value;
      }
    },

    renderSectionsOutline() {
      const outlineEl = document.getElementById('sections-outline-list');
      if (!outlineEl) return;

      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug] || { sections: [] };

      if (!page.sections || page.sections.length === 0) {
        outlineEl.innerHTML = `<p style="font-size: 0.85rem; color: var(--studio-text-muted); text-align: center; padding: 1.5rem;">No sections on this page.</p>`;
        return;
      }

      outlineEl.innerHTML = page.sections.map((section, index) => {
        const isSelected = section.id === this.activeSectionId ? 'selected' : '';
        const titlePreview = (section.content && (section.content.title || section.content.heading)) || section.type;
        const isVisible = section.layout && section.layout.visible !== false;

        return `
          <div class="section-outline-item ${isSelected}" data-section-id="${section.id}">
            <div class="outline-left">
              <span class="outline-badge">${section.type}</span>
              <span class="outline-title" title="${PublicRenderer.escapeHtml(titlePreview)}">${PublicRenderer.escapeHtml(titlePreview)}</span>
            </div>
            <div class="outline-actions">
              <button class="outline-btn btn-action-toggle-vis" data-section-id="${section.id}" title="Toggle Visibility">${isVisible ? '👁' : '🚫'}</button>
              <button class="outline-btn btn-action-move-up" data-section-id="${section.id}" title="Move Up" ${index === 0 ? 'disabled style="opacity:0.3;"' : ''}>▲</button>
              <button class="outline-btn btn-action-move-down" data-section-id="${section.id}" title="Move Down" ${index === page.sections.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>▼</button>
              <button class="outline-btn btn-action-duplicate" data-section-id="${section.id}" title="Duplicate Section">❐</button>
              <button class="outline-btn btn-delete btn-action-delete" data-section-id="${section.id}" title="Delete Section">🗑</button>
            </div>
          </div>
        `;
      }).join('');
    },

    renderPagesManager() {
      const pagesListEl = document.getElementById('pages-manager-list');
      const navListEl = document.getElementById('nav-manager-list');
      if (!pagesListEl || !navListEl) return;

      const blueprint = SiteStore.get();

      // Pages List
      pagesListEl.innerHTML = Object.keys(blueprint.pages).map(slug => {
        const page = blueprint.pages[slug];
        const isActive = slug === this.activePageSlug;
        return `
          <div class="section-outline-item ${isActive ? 'selected' : ''}">
            <div>
              <strong style="color: #FFFFFF; font-size: 0.9rem;">${PublicRenderer.escapeHtml(page.title)}</strong>
              <div style="font-size: 0.75rem; color: var(--studio-text-muted);">${slug} • ${(page.sections || []).length} Sections</div>
            </div>
            <div class="outline-actions">
              <button class="outline-btn btn-switch-page" data-page-slug="${slug}" title="Edit this Page">✎ Edit</button>
              ${slug !== '/' ? `<button class="outline-btn btn-delete btn-delete-page" data-page-slug="${slug}" title="Delete Page">🗑</button>` : ''}
            </div>
          </div>
        `;
      }).join('');

      // Navigation reorder
      navListEl.innerHTML = blueprint.navigation.map((item, idx) => {
        return `
          <div class="section-outline-item" style="cursor: default;">
            <div>
              <strong style="color: #FFFFFF; font-size: 0.9rem;">${PublicRenderer.escapeHtml(item.label)}</strong>
              <div style="font-size: 0.75rem; color: var(--studio-text-muted);">${item.path}</div>
            </div>
            <div class="outline-actions">
              <button class="outline-btn btn-nav-up" data-nav-idx="${idx}" title="Move Left/Up" ${idx === 0 ? 'disabled style="opacity:0.3;"' : ''}>▲</button>
              <button class="outline-btn btn-nav-down" data-nav-idx="${idx}" title="Move Right/Down" ${idx === blueprint.navigation.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>▼</button>
            </div>
          </div>
        `;
      }).join('');
    },

    populateThemeForm() {
      const blueprint = SiteStore.get();
      const theme = blueprint.globalTheme || {};

      const primaryInput = document.getElementById('theme-primary-color');
      const primaryHex = document.getElementById('theme-primary-hex');
      const charcoalInput = document.getElementById('theme-charcoal-color');
      const charcoalHex = document.getElementById('theme-charcoal-hex');
      const canvasInput = document.getElementById('theme-canvas-bg');
      const canvasHex = document.getElementById('theme-canvas-hex');
      const gradientInput = document.getElementById('theme-header-gradient');
      const gradientPreview = document.getElementById('theme-gradient-preview');
      const fontSelect = document.getElementById('theme-font-family');
      const radiusSelect = document.getElementById('theme-border-radius');

      if (primaryInput) {
        primaryInput.value = theme.primaryColor || '#8B0D1A';
        if (primaryHex) primaryHex.textContent = primaryInput.value;
      }
      if (charcoalInput) {
        charcoalInput.value = theme.charcoalColor || '#0B0B0B';
        if (charcoalHex) charcoalHex.textContent = charcoalInput.value;
      }
      if (canvasInput) {
        canvasInput.value = theme.canvasBg || '#F5F2ED';
        if (canvasHex) canvasHex.textContent = canvasInput.value;
      }
      if (gradientInput) {
        gradientInput.value = theme.headerGradient || '';
        if (gradientPreview) gradientPreview.style.background = gradientInput.value;
      }
      if (fontSelect) fontSelect.value = theme.fontFamily || "'Oswald', sans-serif";
      if (radiusSelect) radiusSelect.value = theme.borderRadius || '12px';
    },

    selectSection(sectionId) {
      this.activeSectionId = sectionId;
      this.renderSectionsOutline();
      this.renderLiveCanvas();
      this.renderInspector(sectionId);

      // Switch to Content tab automatically
      const contentTabBtn = document.querySelector('.tab-btn[data-tab="tab-content"]');
      if (contentTabBtn) contentTabBtn.click();
    },

    renderInspector(sectionId) {
      const containerEl = document.getElementById('inspector-container');
      if (!containerEl) return;

      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug] || { sections: [] };
      const section = (page.sections || []).find(s => s.id === sectionId);

      if (!section) {
        containerEl.innerHTML = `
          <div class="empty-inspector-state">
            <h4>Select a Section to Customize</h4>
            <p>Click on any section card in the Structure tab to open detailed properties.</p>
          </div>
        `;
        return;
      }

      const { type, layout = {}, content = {} } = section;

      // 1. EXECUTIVE TEAM INSPECTOR
      if (type === 'execom-directory') {
        const data = blueprint.execomData || DEFAULT_EXECOM_DATA;
        containerEl.innerHTML = `
          <div class="inspector-card">
            <div class="inspector-card-title">Executive Committee &amp; Roster Controls</div>
            <div style="font-size: 0.82rem; color: #9CA3AF; margin-bottom: 1.25rem;">
              Direct dual-sync controls for official chapter mandate and appointed execom tiers.
            </div>

            <div class="form-group">
              <label>Chapter Institution / Session</label>
              <input type="text" class="form-input" data-inspector-path="execomData.meta.session" value="${PublicRenderer.escapeHtml(data.meta.session)}">
            </div>

            <div class="form-group">
              <label>Notification Reference / Date</label>
              <input type="text" class="form-input" data-inspector-path="execomData.meta.notificationDate" value="${PublicRenderer.escapeHtml(data.meta.notificationDate)}">
            </div>

            <div class="form-group">
              <label>Official Mandate Text</label>
              <textarea class="form-textarea" rows="4" data-inspector-path="execomData.meta.mandate">${PublicRenderer.escapeHtml(data.meta.mandate)}</textarea>
            </div>

            <div style="display: flex; gap: 8px; margin-top: 1rem;">
              <button type="button" class="btn btn-primary btn-block" onclick="document.querySelector('[data-action=\\'add-senior-member\\']').click()">+ Add Senior Member</button>
              <button type="button" class="btn btn-secondary btn-block" onclick="document.querySelector('[data-action=\\'add-junior-member\\']').click()">+ Add Junior Track</button>
            </div>
          </div>

          <div class="inspector-card">
            <div class="inspector-card-title">Executive Member Photo Management</div>
            <div style="font-size: 0.82rem; color: #9CA3AF; margin-bottom: 1.25rem;">
              Admin-only photo upload, 1:1 circular cropping, alignment, and automated EXIF stripping (WebP 200&times;200).
            </div>

            <div style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; color: #8B1014; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              Senior Execom (${data.seniorExecom.length})
            </div>
            <div style="max-height: 240px; overflow-y: auto; padding-right: 4px; margin-bottom: 1.25rem;">
              ${data.seniorExecom.map((m, idx) => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 36px; height: 36px; border-radius: 50%; overflow: hidden; background: #1E293B; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; color: #FFFFFF; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.15);">
                      ${m.avatarUrl ? `<img src="${m.avatarUrl}" alt="${PublicRenderer.escapeHtml(m.name)}" style="width: 100%; height: 100%; object-fit: cover;">` : (m.avatar || m.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase())}
                    </div>
                    <div>
                      <div style="font-size: 0.85rem; font-weight: 600; color: #FFFFFF;">${PublicRenderer.escapeHtml(m.name)}</div>
                      <div style="font-size: 0.72rem; color: #94A3B8;">${PublicRenderer.escapeHtml(m.role)}</div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-sm btn-ghost btn-member-photo-trigger" data-member-type="senior" data-member-id="${m.id}" title="Upload / Adjust Photo">
                    📷 ${m.avatarUrl ? 'Adjust' : 'Upload'}
                  </button>
                </div>
              `).join('')}
            </div>

            <div style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; color: #0284C7; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              Junior Execom (${data.juniorExecom.length})
            </div>
            <div style="max-height: 180px; overflow-y: auto; padding-right: 4px;">
              ${data.juniorExecom.map((m, idx) => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 36px; height: 36px; border-radius: 50%; overflow: hidden; background: #1E293B; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; color: #FFFFFF; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.15);">
                      ${m.avatarUrl ? `<img src="${m.avatarUrl}" alt="${PublicRenderer.escapeHtml(m.name)}" style="width: 100%; height: 100%; object-fit: cover;">` : (m.avatar || m.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase())}
                    </div>
                    <div>
                      <div style="font-size: 0.85rem; font-weight: 600; color: #FFFFFF;">${PublicRenderer.escapeHtml(m.name)}</div>
                      <div style="font-size: 0.72rem; color: #94A3B8;">${PublicRenderer.escapeHtml(m.track || 'Junior Track')}</div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-sm btn-ghost btn-member-photo-trigger" data-member-type="junior" data-member-id="${m.id}" title="Upload / Adjust Photo">
                    📷 ${m.avatarUrl ? 'Adjust' : 'Upload'}
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="inspector-card">
            <div class="inspector-card-title">Senior Execom Roster (${data.seniorExecom.length})</div>
            <div style="max-height: 380px; overflow-y: auto; padding-right: 4px;">
              ${data.seniorExecom.map((m, idx) => `
                <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding: 8px 0;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <strong style="color: #FFFFFF; font-size: 0.85rem;">#${idx + 1} ${PublicRenderer.escapeHtml(m.name)}</strong>
                    <span style="font-size: 0.72rem; color: #8B1014; font-weight: 700;">${PublicRenderer.escapeHtml(m.role)}</span>
                  </div>
                  <input type="text" class="form-input" style="margin-bottom: 4px; font-size: 0.8rem;" data-inspector-path="execomData.seniorExecom.${idx}.name" value="${PublicRenderer.escapeHtml(m.name)}" placeholder="Member Name">
                  <input type="text" class="form-input" style="font-size: 0.8rem;" data-inspector-path="execomData.seniorExecom.${idx}.role" value="${PublicRenderer.escapeHtml(m.role)}" placeholder="Executive Role">
                </div>
              `).join('')}
            </div>
          </div>
        `;
        this.bindInspectorSync(containerEl);

        // Bind Photo Cropper triggers inside inspector
        containerEl.querySelectorAll('.btn-member-photo-trigger').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const memberType = btn.getAttribute('data-member-type');
            const memberId = btn.getAttribute('data-member-id');
            PhotoCropper.open(memberType, memberId);
          });
        });
        return;
      }

      // 2. ACADEMIC HOME INSPECTOR
      if (type === 'academic-home') {
        const home = blueprint.homeData || DEFAULT_HOME_DATA;
        containerEl.innerHTML = `
          <div class="inspector-card">
            <div class="inspector-card-title">Academic Home Showcase</div>

            <div class="form-group">
              <label>Eyebrow Badge</label>
              <input type="text" class="form-input" data-inspector-path="homeData.eyebrowBadge" value="${PublicRenderer.escapeHtml(home.eyebrowBadge)}">
            </div>

            <div class="form-group">
              <label>Hero Heading</label>
              <input type="text" class="form-input" data-inspector-path="homeData.heroHeading" value="${PublicRenderer.escapeHtml(home.heroHeading)}">
            </div>

            <div class="form-group">
              <label>Hero Body Description</label>
              <textarea class="form-textarea" rows="4" data-inspector-path="homeData.heroBody">${PublicRenderer.escapeHtml(home.heroBody)}</textarea>
            </div>

            <div class="form-group">
              <label>Primary Button Label</label>
              <input type="text" class="form-input" data-inspector-path="homeData.primaryBtnText" value="${PublicRenderer.escapeHtml(home.primaryBtnText)}">
            </div>

            <div class="form-group">
              <label>Primary Button Link URL</label>
              <input type="text" class="form-input" data-inspector-path="homeData.primaryBtnUrl" value="${PublicRenderer.escapeHtml(home.primaryBtnUrl)}">
            </div>

            <div class="form-group">
              <label>Secondary Button Label</label>
              <input type="text" class="form-input" data-inspector-path="homeData.secondaryBtnText" value="${PublicRenderer.escapeHtml(home.secondaryBtnText)}">
            </div>
          </div>

          <div class="inspector-card">
            <div class="inspector-card-title">Chapter Statistics &amp; Editorial</div>

            <div class="form-group">
              <label>About Heading</label>
              <input type="text" class="form-input" data-inspector-path="homeData.aboutHeading" value="${PublicRenderer.escapeHtml(home.aboutHeading)}">
            </div>

            <div class="form-group">
              <label>About Paragraph 1</label>
              <textarea class="form-textarea" rows="3" data-inspector-path="homeData.aboutP1">${PublicRenderer.escapeHtml(home.aboutP1)}</textarea>
            </div>

            <div class="form-group">
              <label>About Paragraph 2</label>
              <textarea class="form-textarea" rows="3" data-inspector-path="homeData.aboutP2">${PublicRenderer.escapeHtml(home.aboutP2)}</textarea>
            </div>
          </div>
        `;
        this.bindInspectorSync(containerEl);
        return;
      }

      // 3. ACADEMIC CONTACT INSPECTOR
      if (type === 'academic-contact') {
        const contact = blueprint.contactData || DEFAULT_CONTACT_DATA;
        containerEl.innerHTML = `
          <div class="inspector-card">
            <div class="inspector-card-title">Contact Us &amp; Addresses</div>

            <div class="form-group">
              <label>Page Title</label>
              <input type="text" class="form-input" data-inspector-path="contactData.bannerTitle" value="${PublicRenderer.escapeHtml(contact.bannerTitle)}">
            </div>

            <div class="form-group">
              <label>Page Subtitle</label>
              <input type="text" class="form-input" data-inspector-path="contactData.bannerSubtitle" value="${PublicRenderer.escapeHtml(contact.bannerSubtitle)}">
            </div>

            <div class="form-group">
              <label>Form Heading</label>
              <input type="text" class="form-input" data-inspector-path="contactData.formTitle" value="${PublicRenderer.escapeHtml(contact.formTitle)}">
            </div>

            <div class="form-group">
              <label>Form Subtitle</label>
              <textarea class="form-textarea" rows="2" data-inspector-path="contactData.formSubtitle">${PublicRenderer.escapeHtml(contact.formSubtitle)}</textarea>
            </div>

            <div class="form-group">
              <label>Regional Chapter Email</label>
              <input type="email" class="form-input" data-inspector-path="contactData.regionalChapter.email" value="${PublicRenderer.escapeHtml(contact.regionalChapter.email)}">
            </div>
          </div>
        `;
        this.bindInspectorSync(containerEl);
        return;
      }

      // 4. GENERIC HERO / GRID BLOCKS INSPECTOR
      const secPath = `pages.${this.activePageSlug}.sections.${sectionId}.content`;
      containerEl.innerHTML = `
        <div class="inspector-card">
          <div class="inspector-card-title">Layout &amp; Structure (${type.toUpperCase()})</div>
          
          <div class="form-group">
            <label>Container Width</label>
            <select class="form-select" id="insp-layout-width">
              <option value="boxed" ${layout.containerWidth === 'boxed' ? 'selected' : ''}>Boxed (1200px)</option>
              <option value="wide" ${layout.containerWidth === 'wide' ? 'selected' : ''}>Wide (1440px)</option>
              <option value="full" ${layout.containerWidth === 'full' ? 'selected' : ''}>Full Width (100%)</option>
            </select>
          </div>

          <div class="form-group">
            <label>Vertical Padding</label>
            <select class="form-select" id="insp-layout-pad">
              <option value="sm" ${layout.paddingY === 'sm' ? 'selected' : ''}>Compact (Small)</option>
              <option value="md" ${layout.paddingY === 'md' ? 'selected' : ''}>Balanced (Medium)</option>
              <option value="lg" ${layout.paddingY === 'lg' ? 'selected' : ''}>Spacious (Large)</option>
              <option value="xl" ${layout.paddingY === 'xl' ? 'selected' : ''}>Heroic (Extra Large)</option>
            </select>
          </div>

          <div class="form-group">
            <label>Background Style</label>
            <select class="form-select" id="insp-layout-bg">
              <option value="canvas" ${layout.bgType === 'canvas' ? 'selected' : ''}>Pure White Canvas</option>
              <option value="subtle" ${layout.bgType === 'subtle' ? 'selected' : ''}>Soft Surface Gray</option>
              <option value="crimson-tint" ${layout.bgType === 'crimson-tint' ? 'selected' : ''}>Crimson Gradient Tint</option>
              <option value="dark" ${layout.bgType === 'dark' ? 'selected' : ''}>Dark Slate / Charcoal</option>
            </select>
          </div>
        </div>

        <div class="inspector-card">
          <div class="inspector-card-title">Content &amp; Text Editor</div>
          
          <div class="form-group">
            <label>Eyebrow Badge Text</label>
            <input type="text" class="form-input" data-inspector-path="${secPath}.eyebrow" value="${PublicRenderer.escapeHtml(content.eyebrow || '')}">
          </div>

          <div class="form-group">
            <label>Main Heading</label>
            <input type="text" class="form-input" data-inspector-path="${secPath}.title" value="${PublicRenderer.escapeHtml(content.title || '')}">
          </div>

          <div class="form-group">
            <label>Description / Subtitle</label>
            <textarea class="form-textarea" rows="3" data-inspector-path="${secPath}.subtitle">${PublicRenderer.escapeHtml(content.subtitle || content.description || '')}</textarea>
          </div>
        </div>
      `;

      this.bindInspectorSync(containerEl);
    },

    bindInspectorSync(containerEl) {
      containerEl.addEventListener('input', (e) => {
        const input = e.target;
        const path = input.getAttribute('data-inspector-path');
        if (!path) return;

        const val = input.value;
        const blueprint = SiteStore.get();
        setDeepValue(blueprint, path, val);
        SiteStore.save(blueprint, false);

        // Update canvas in real-time
        const liveEl = document.querySelector(`.admin-live-render [data-edit-path="${path}"]`);
        if (liveEl) {
          if (liveEl.children.length === 0) liveEl.innerText = val;
          else liveEl.innerHTML = val;
        }
      });
    },

    bindEvents() {
      // Sidebar Tab Switching
      document.querySelectorAll('.sidebar-tabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.sidebar-tabs .tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

          btn.classList.add('active');
          const panelId = btn.getAttribute('data-tab');
          const targetPanel = document.getElementById(panelId);
          if (targetPanel) targetPanel.classList.add('active');
        });
      });

      // Page Switcher Dropdown
      const pageSelect = document.getElementById('admin-page-select');
      if (pageSelect) {
        pageSelect.addEventListener('change', (e) => {
          this.activePageSlug = e.target.value;
          this.activeSectionId = null;
          this.renderSectionsOutline();
          this.renderLiveCanvas();
        });
      }

      // Device Preview Toggles
      document.querySelectorAll('.device-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const device = btn.getAttribute('data-device');
          const canvas = document.getElementById('canvas-viewport');
          if (canvas) {
            canvas.className = `canvas-viewport ${device}`;
          }
        });
      });

      // Quick New Page Button
      const quickNewPageBtn = document.getElementById('btn-quick-new-page');
      if (quickNewPageBtn) {
        quickNewPageBtn.addEventListener('click', () => {
          document.getElementById('create-page-modal').classList.remove('hidden');
        });
      }

      // Open Block Library Modal
      const addBlockBtn = document.getElementById('btn-open-block-library');
      if (addBlockBtn) {
        addBlockBtn.addEventListener('click', () => {
          document.getElementById('block-library-modal').classList.remove('hidden');
        });
      }

      // Block Template Selection
      document.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', () => {
          const blockType = card.getAttribute('data-block-type');
          this.addSectionToCurrentPage(blockType);
          document.getElementById('block-library-modal').classList.add('hidden');
        });
      });

      // Modal Close Handlers
      document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
          const modalId = btn.getAttribute('data-close');
          const modal = document.getElementById(modalId);
          if (modal) modal.classList.add('hidden');
        });
      });

      // JSON Blueprint Modal
      const schemaModalBtn = document.getElementById('btn-open-schema-modal');
      const schemaModal = document.getElementById('schema-modal');
      const jsonTextarea = document.getElementById('json-blueprint-textarea');

      if (schemaModalBtn && schemaModal && jsonTextarea) {
        schemaModalBtn.addEventListener('click', () => {
          jsonTextarea.value = JSON.stringify(SiteStore.get(), null, 2);
          schemaModal.classList.remove('hidden');
        });

        document.getElementById('btn-copy-blueprint-json').addEventListener('click', () => {
          navigator.clipboard.writeText(jsonTextarea.value);
          App.showToast('Blueprint JSON copied to clipboard.');
        });

        document.getElementById('btn-apply-imported-json').addEventListener('click', () => {
          try {
            const parsed = JSON.parse(jsonTextarea.value);
            SiteStore.save(parsed, true);
            schemaModal.classList.add('hidden');
            this.open();
            App.showToast('Master Blueprint JSON successfully updated!');
          } catch (err) {
            alert('Invalid JSON syntax: ' + err.message);
          }
        });

        document.getElementById('btn-reset-default-blueprint').addEventListener('click', () => {
          if (confirm('Reset site blueprint to default ISHMT TKMCE structure? Custom edits will be restored to defaults.')) {
            SiteStore.resetToDefault();
            schemaModal.classList.add('hidden');
            this.activePageSlug = '/';
            this.open();
            App.showToast('Site restored to original blueprint.');
          }
        });
      }

      // Publish Live Changes Button
      const publishBtn = document.getElementById('btn-publish-live');
      if (publishBtn) {
        publishBtn.addEventListener('click', () => {
          SiteStore.save(SiteStore.get(), true);
          App.showToast('🚀 Changes published live! All open tabs are now updated.');
        });
      }

      // Preview as User Mode Button
      const previewUserBtn = document.getElementById('btn-preview-user-mode');
      if (previewUserBtn) {
        previewUserBtn.addEventListener('click', () => {
          window.location.hash = this.activePageSlug === '/' ? '#/' : `#${this.activePageSlug}`;
        });
      }

      // Admin Logout Button
      const logoutBtn = document.getElementById('btn-admin-logout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          AuthService.logout();
          window.location.hash = '#/';
          App.showToast('Logged out of Admin Studio.');
        });
      }

      // Theme Form Controls
      const themeForm = document.querySelector('.theme-controls-form');
      if (themeForm) {
        ['theme-primary-color', 'theme-charcoal-color', 'theme-canvas-bg'].forEach(id => {
          const input = document.getElementById(id);
          if (input) {
            input.addEventListener('input', () => {
              const hexSpan = document.getElementById(id.replace('-color', '-hex').replace('-bg', '-hex'));
              if (hexSpan) hexSpan.textContent = input.value;
            });
          }
        });

        const gradientInput = document.getElementById('theme-header-gradient');
        if (gradientInput) {
          gradientInput.addEventListener('input', () => {
            const preview = document.getElementById('theme-gradient-preview');
            if (preview) preview.style.background = gradientInput.value;
          });
        }

        document.getElementById('btn-save-theme').addEventListener('click', () => {
          const blueprint = SiteStore.get();
          if (!blueprint.globalTheme) blueprint.globalTheme = {};

          blueprint.globalTheme.primaryColor = document.getElementById('theme-primary-color').value;
          blueprint.globalTheme.charcoalColor = document.getElementById('theme-charcoal-color').value;
          blueprint.globalTheme.canvasBg = document.getElementById('theme-canvas-bg').value;
          blueprint.globalTheme.headerGradient = document.getElementById('theme-header-gradient').value;
          blueprint.globalTheme.fontFamily = document.getElementById('theme-font-family').value;
          blueprint.globalTheme.borderRadius = document.getElementById('theme-border-radius').value;

          SiteStore.save(blueprint, true);
          App.showToast('Global theme updated.');
        });

        document.getElementById('btn-reset-theme').addEventListener('click', () => {
          const blueprint = SiteStore.get();
          blueprint.globalTheme = deepClone(DEFAULT_BLUEPRINT.globalTheme);
          SiteStore.save(blueprint, true);
          this.populateThemeForm();
          App.showToast('Theme reset to default brand palette.');
        });
      }

      // Delegate Section Actions (Move Up, Move Down, Delete, Duplicate, Edit)
      document.addEventListener('click', (e) => {
        // Outline Item Selection
        const outlineItem = e.target.closest('.section-outline-item');
        if (outlineItem && !e.target.closest('.outline-actions')) {
          const sectionId = outlineItem.getAttribute('data-section-id');
          if (sectionId) this.selectSection(sectionId);
          return;
        }

        // Move Up
        const moveUpBtn = e.target.closest('.btn-action-move-up');
        if (moveUpBtn) {
          e.stopPropagation();
          this.moveSection(moveUpBtn.getAttribute('data-section-id'), -1);
          return;
        }

        // Move Down
        const moveDownBtn = e.target.closest('.btn-action-move-down');
        if (moveDownBtn) {
          e.stopPropagation();
          this.moveSection(moveDownBtn.getAttribute('data-section-id'), 1);
          return;
        }

        // Duplicate Section
        const dupBtn = e.target.closest('.btn-action-duplicate');
        if (dupBtn) {
          e.stopPropagation();
          this.duplicateSection(dupBtn.getAttribute('data-section-id'));
          return;
        }

        // Delete Section
        const delBtn = e.target.closest('.btn-action-delete');
        if (delBtn) {
          e.stopPropagation();
          this.deleteSection(delBtn.getAttribute('data-section-id'));
          return;
        }

        // Toggle Visibility
        const visBtn = e.target.closest('.btn-action-toggle-vis');
        if (visBtn) {
          e.stopPropagation();
          this.toggleSectionVisibility(visBtn.getAttribute('data-section-id'));
          return;
        }

        // Edit
        const editBtn = e.target.closest('.btn-action-edit');
        if (editBtn) {
          e.stopPropagation();
          this.selectSection(editBtn.getAttribute('data-section-id'));
          return;
        }

        // Canvas Block Click (Only if NOT clicking text or card action)
        const canvasBlock = e.target.closest('.canvas-block-wrapper');
        if (canvasBlock && !e.target.closest('.block-hover-toolbar') && !e.target.closest('[data-edit-path]') && !e.target.closest('.studio-card-actions') && !e.target.closest('.studio-add-card-placeholder')) {
          const sId = canvasBlock.getAttribute('data-section-id');
          if (sId && sId !== this.activeSectionId) {
            this.selectSection(sId);
          }
          return;
        }

        // Nav Up / Down
        const navUpBtn = e.target.closest('.btn-nav-up');
        if (navUpBtn) {
          this.moveNav(parseInt(navUpBtn.getAttribute('data-nav-idx'), 10), -1);
          return;
        }
        const navDownBtn = e.target.closest('.btn-nav-down');
        if (navDownBtn) {
          this.moveNav(parseInt(navDownBtn.getAttribute('data-nav-idx'), 10), 1);
          return;
        }

        // Switch Page
        const switchPageBtn = e.target.closest('.btn-switch-page');
        if (switchPageBtn) {
          this.activePageSlug = switchPageBtn.getAttribute('data-page-slug');
          this.populatePageSelect();
          this.renderSectionsOutline();
          this.renderLiveCanvas();
          return;
        }
      });
    },

    addSectionToCurrentPage(type) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      if (!page) return;

      if (!page.sections) page.sections = [];

      const newId = `sec-${type}-${Date.now()}`;
      let newSection = {
        id: newId,
        type: type,
        layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'left', visible: true },
        content: {
          eyebrow: 'New Section',
          title: 'Section Headline',
          subtitle: 'Click directly on this text in the preview canvas to edit words.'
        }
      };

      if (type === 'grid-cards') {
        newSection.content.items = [
          { id: `ev-${Date.now()}`, tag: 'Featured', title: 'New Item Card', description: 'Click to customize card details.', linkText: 'Learn More →', linkUrl: '#/contact' }
        ];
      }

      page.sections.push(newSection);
      SiteStore.save(blueprint, true);
      this.activeSectionId = newId;
      this.renderSectionsOutline();
      this.renderLiveCanvas();
      this.renderInspector(newId);
      App.showToast(`Added ${type} block to page.`);
    },

    moveSection(sectionId, dir) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      if (!page || !page.sections) return;

      const idx = page.sections.findIndex(s => s.id === sectionId);
      if (idx === -1) return;

      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= page.sections.length) return;

      const temp = page.sections[idx];
      page.sections[idx] = page.sections[newIdx];
      page.sections[newIdx] = temp;

      SiteStore.save(blueprint, true);
      this.renderSectionsOutline();
      this.renderLiveCanvas();
    },

    duplicateSection(sectionId) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      if (!page || !page.sections) return;

      const idx = page.sections.findIndex(s => s.id === sectionId);
      if (idx === -1) return;

      const orig = page.sections[idx];
      const dup = deepClone(orig);
      dup.id = `sec-${orig.type}-${Date.now()}`;

      page.sections.splice(idx + 1, 0, dup);
      SiteStore.save(blueprint, true);
      this.activeSectionId = dup.id;
      this.renderSectionsOutline();
      this.renderLiveCanvas();
      this.renderInspector(dup.id);
      App.showToast('Section duplicated.');
    },

    deleteSection(sectionId) {
      if (!confirm('Are you sure you want to delete this section?')) return;
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      if (!page || !page.sections) return;

      page.sections = page.sections.filter(s => s.id !== sectionId);
      if (this.activeSectionId === sectionId) this.activeSectionId = null;

      SiteStore.save(blueprint, true);
      this.renderSectionsOutline();
      this.renderLiveCanvas();
      this.renderInspector(null);
      App.showToast('Section removed.');
    },

    toggleSectionVisibility(sectionId) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      if (!page || !page.sections) return;

      const sec = page.sections.find(s => s.id === sectionId);
      if (!sec) return;

      if (!sec.layout) sec.layout = {};
      sec.layout.visible = (sec.layout.visible === false) ? true : false;

      SiteStore.save(blueprint, true);
      this.renderSectionsOutline();
      this.renderLiveCanvas();
    },

    moveNav(idx, dir) {
      const blueprint = SiteStore.get();
      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= blueprint.navigation.length) return;

      const temp = blueprint.navigation[idx];
      blueprint.navigation[idx] = blueprint.navigation[newIdx];
      blueprint.navigation[newIdx] = temp;

      SiteStore.save(blueprint, true);
      this.renderPagesManager();
      App.showToast('Header navigation reordered.');
    }
  };

  // ==========================================================================
  // 8. ROUTER & APPLICATION ORCHESTRATOR
  // ==========================================================================
  const App = {
    currentRoute: '/',

    init() {
      SiteStore.init();
      AdminStudio.init();
      PhotoCropper.init();
      MemberDetailModal.init();
      this.bindLogin();

      window.addEventListener('hashchange', () => this.handleRoute());
      window.addEventListener('resize', () => {
        IntroMotion.calculateMetrics();
      });

      // Logo click in header replays intro animation in public mode
      const lockupContainer = document.getElementById('lockup-container');
      if (lockupContainer) {
        lockupContainer.addEventListener('click', () => {
          if (this.currentRoute !== '/login' && this.currentRoute !== '/admin') {
            IntroMotion.play(() => {
              PublicRenderer.render(this.currentRoute);
            });
          }
        });
      }

      // Secret Admin Symbol Unlock: Ctrl + Shift + CapsLock
      let shortcutFired = false;
      const pressedKeys = new Set();

      function toggleAdminLock() {
        const adminBtn = document.getElementById('admin-lock-btn');
        if (!adminBtn) return;

        const isCurrentlyHidden = adminBtn.classList.contains('admin-hidden') || getComputedStyle(adminBtn).display === 'none';
        if (isCurrentlyHidden) {
          adminBtn.classList.remove('admin-hidden');
          adminBtn.classList.add('admin-visible');
          adminBtn.classList.add('pulse');
          setTimeout(() => adminBtn.classList.remove('pulse'), 1200);
          App.showToast('Admin Portal symbol unlocked (Ctrl+Shift+CapsLock)');
        } else {
          adminBtn.classList.remove('admin-visible');
          adminBtn.classList.add('admin-hidden');
          App.showToast('Admin Portal symbol hidden');
        }
      }

      window.addEventListener('keydown', (e) => {
        pressedKeys.add(e.code);

        const isCaps = e.code === 'CapsLock' || e.key === 'CapsLock' || e.keyCode === 20;
        const hasCtrl = e.ctrlKey || e.metaKey || pressedKeys.has('ControlLeft') || pressedKeys.has('ControlRight');
        const hasShift = e.shiftKey || pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight');

        if ((isCaps && hasCtrl && hasShift) || (pressedKeys.has('CapsLock') && hasCtrl && hasShift)) {
          if (!shortcutFired) {
            shortcutFired = true;
            setTimeout(() => { shortcutFired = false; }, 800);
            e.preventDefault();
            toggleAdminLock();
          }
        }
      });

      window.addEventListener('keyup', (e) => {
        pressedKeys.delete(e.code);
        if (e.code === 'CapsLock' || e.key === 'CapsLock' || e.code === 'ControlLeft' || e.code === 'ControlRight' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          shortcutFired = false;
        }
      });

      // Keyboard replay in public mode ('R' key; Space is preserved for native page scroll)
      window.addEventListener('keydown', (e) => {
        if ((e.key === 'r' || e.key === 'R') &&
            this.currentRoute !== '/login' && this.currentRoute !== '/admin' &&
            document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          IntroMotion.play(() => {
            PublicRenderer.render(this.currentRoute);
          });
        }
      });

      // Recalculate metrics once custom fonts (Oswald) are fully rendered
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          IntroMotion.calculateMetrics();
        });
      }

      // Mobile Navigation Drawer Toggle & Link Binding
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
      if (mobileMenuBtn && mobileNavDrawer) {
        mobileMenuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          mobileNavDrawer.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
          if (!mobileNavDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileNavDrawer.classList.remove('open');
          }
        });

        mobileNavDrawer.addEventListener('click', (e) => {
          if (e.target.closest('.nav-link') || e.target.closest('.mobile-rct-link')) {
            mobileNavDrawer.classList.remove('open');
          }
        });
      }

      // Handle Initial Route
      this.handleRoute(true);
    },

    handleRoute(isInitial = false) {
      let hash = window.location.hash || '#/';
      let route = hash.replace(/^#/, '');
      if (!route.startsWith('/')) route = '/' + route;
      this.currentRoute = route;

      const publicView = document.getElementById('public-view');
      const loginView = document.getElementById('login-view');
      const adminStudio = document.getElementById('admin-studio');
      const headerBar = document.getElementById('header-bar');

      // Hide all main containers first
      if (publicView) publicView.classList.add('hidden');
      if (loginView) loginView.classList.add('hidden');
      if (adminStudio) adminStudio.classList.add('hidden');

      if (route === '/admin') {
        // Protected Admin Route
        if (!AuthService.isAuthenticated()) {
          window.location.hash = '#/login';
          return;
        }

        if (adminStudio) adminStudio.classList.remove('hidden');
        if (headerBar) headerBar.classList.add('hidden'); // Studio has its own topbar
        AdminStudio.open();
        return;
      }

      if (route === '/login') {
        // Admin Login Route
        if (AuthService.isAuthenticated()) {
          window.location.hash = '#/admin';
          return;
        }

        if (loginView) loginView.classList.remove('hidden');
        if (headerBar) headerBar.classList.remove('hidden');
        IntroMotion.setInstantDocked();
        return;
      }

      // Public User View
      if (publicView) publicView.classList.remove('hidden');
      if (headerBar) headerBar.classList.remove('hidden');

      PublicRenderer.render(route);

      // If direct navigation to a sub-route (e.g. #/team, #/events, #/gallery, #/contact), dock instantly so users see content without delay
      const isSubRoute = route !== '/' && route !== '';
      if (isInitial && !IntroMotion.hasPlayedIntro && !isSubRoute) {
        IntroMotion.play();
      } else {
        IntroMotion.setInstantDocked();
      }

      // Guarantee body scroll unlock regardless of browser state
      setTimeout(() => {
        document.body.classList.remove('loading-state');
      }, isInitial ? 2000 : 50);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    bindLogin() {
      const loginForm = document.getElementById('admin-login-form');
      const errorMsg = document.getElementById('login-error-msg');

      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const user = document.getElementById('admin-username').value;
          const pass = document.getElementById('admin-password').value;

          if (AuthService.login(user, pass)) {
            if (errorMsg) errorMsg.classList.add('hidden');
            loginForm.reset();
            window.location.hash = '#/admin';
            this.showToast('Welcome back, Admin!');
          } else {
            if (errorMsg) errorMsg.classList.remove('hidden');
          }
        });
      }
    },

    onBlueprintUpdated() {
      if (this.currentRoute === '/admin') {
        AdminStudio.renderSectionsOutline();
        AdminStudio.renderLiveCanvas();
        AdminStudio.renderPagesManager();
      } else if (this.currentRoute !== '/login') {
        PublicRenderer.render(this.currentRoute);
      }
    },

    showToast(message) {
      const toast = document.getElementById('toast-notification');
      if (!toast) return;

      toast.textContent = message;
      toast.classList.add('active');

      setTimeout(() => {
        toast.classList.remove('active');
      }, 3500);
    }
  };

  // Ensure DOM is ready before initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }
})();
