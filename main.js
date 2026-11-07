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
    heroBody: "",
    primaryBtnText: "Become a Member",
    primaryBtnUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform?usp=dialog",
    secondaryBtnText: "About Us",
    stats: [
      { id: "stat-1", value: "50+", label: "Student Members & Alumni" },
      { id: "stat-2", value: "1973", label: "National ISHMT Scientific Legacy" }
    ],
    aboutHeading: "About Our Chapter",
    aboutIntro: "We warmly welcome students, faculty, researchers, and engineering innovators to the Indian Society for Heat and Mass Transfer (ISHMT-RCT) Students Chapter at Thangal Kunju Musaliar College of Engineering, Kollam. Anchored in the Department of Mechanical Engineering, our chapter is your community to explore thermal sciences, energy transition, and computational fluid dynamics through hands-on workshops, lab research, and national academic collaborations.",
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

  const DEFAULT_EVENTS_DATA = {
    events: [
      {
        id: "evt-1",
        title: "Masterclass on Computational Heat & Fluid Mechanics (CFD 2026)",
        category: "Workshop",
        dateTime: "2026-11-12T10:00",
        deadline: "2026-11-10T23:59",
        venue: "Mechanical CAD Lab, TKMCE",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform",
        certificateUrl: "",
        description: "Hands-on computational workshop covering boundary layer discretization, meshing strategies, and finite volume thermal simulations using OpenFOAM and ANSYS Fluent.",
        status: "Upcoming",
        posterUrl: "",
        linkedGalleryPostId: "post-2",
        attachments: [
          {
            id: "att-101",
            type: "pdf",
            url: "#",
            name: "Masterclass Syllabus & CFD Rulebook (PDF)"
          }
        ],
        createdAt: "2026-10-23T10:00:00.000Z"
      },
      {
        id: "evt-2",
        title: "Cryogenic Cooling & Space Propulsion Thermal Management",
        category: "Webinar",
        dateTime: "2026-11-28T18:30",
        deadline: "2026-11-26T18:00",
        venue: "Google Meet (Hybrid Stream)",
        registrationLink: "https://meet.google.com/ishmt-tkmce-webinar",
        certificateUrl: "",
        description: "Distinguished guest lecture by scientists from ISRO LPSC covering thermal protection systems, liquid hydrogen boil-off mitigation, and regenerative rocket engine cooling.",
        status: "Upcoming",
        posterUrl: "",
        linkedGalleryPostId: "post-3",
        attachments: [
          {
            id: "att-201",
            type: "pdf",
            url: "#",
            name: "Webinar Schedule & Speaker Profile (PDF)"
          }
        ],
        createdAt: "2026-10-23T11:00:00.000Z"
      },
      {
        id: "evt-3",
        title: "Official Inauguration of ISHMT TKMCE Chapter 2026–27",
        category: "Inauguration",
        dateTime: "2026-09-23T14:30",
        deadline: "2026-09-21T18:00",
        venue: "APJ Abdul Kalam Auditorium, TKMCE",
        registrationLink: "",
        certificateUrl: "https://drive.google.com/drive/folders/ishmt-tkmce-inauguration-credentials",
        description: "Grand inaugural ceremony of the ISHMT Student Chapter at TKMCE, presided over by Regional Chapter dignitaries, faculty mentors, and mechanical engineering scholars.",
        status: "Completed",
        posterUrl: "",
        linkedGalleryPostId: "post-1",
        attachments: [
          {
            id: "att-301",
            type: "pdf",
            url: "#",
            name: "Inaugural Brochure & Chapter Charter (PDF)"
          }
        ],
        createdAt: "2026-09-20T10:00:00.000Z"
      }
    ]
  };

  const DEFAULT_GALLERY_DATA = {
    posts: [
      {
        id: "post-1",
        title: "Official Inauguration of the ISHMT-TKMCE Student Chapter",
        caption: "A monumental milestone! The Indian Society for Heat and Mass Transfer (ISHMT) Student Chapter was officially inaugurated at TKM College of Engineering, Kollam, in the presence of distinguished scientists from ISRO-LPSC and Department of Mechanical Engineering faculty mentors.",
        eventTag: "Inauguration 2026",
        hashtags: ["#Inauguration2026", "#ISHMT", "#TKMCE", "#HeatTransfer", "#ThermalSciences", "#MechanicalEngineering"],
        imageUrl: "ishmt-logo.jpg",
        mediaItems: [
          { type: "image", url: "ishmt-logo.jpg", name: "Inaugural Plaque & Crest" },
          { type: "image", url: "tkmce-building.jpg", name: "Auditorium Ceremony Gathering" },
          { type: "image", url: "ishmt-rct-logo.png", name: "Official Chapter Charter Handover" }
        ],
        date: "September 2026",
        likes: 184,
        likedByMe: false,
        comments: [
          {
            id: "c-101",
            name: "Dr. K. E. Reby Roy",
            text: "Congratulations to all student innovators and faculty coordinators. Let this chapter drive cutting-edge thermal research and industrial liaisons.",
            timestamp: "1 week ago"
          },
          {
            id: "c-102",
            name: "Alen Cherian",
            text: "Proud to be part of the founding executive committee! Excited for all the upcoming national webinars and workshops.",
            timestamp: "5 days ago"
          }
        ]
      },
      {
        id: "post-2",
        title: "Hands-on CFD & Thermal Finite Volume Simulation Masterclass",
        caption: "Deep dive into computational fluid mechanics! Students engaged in rigorous boundary layer discretization, grid independence studies, and turbulent heat transfer simulations using OpenFOAM and ANSYS Fluent in the CAD Lab.",
        eventTag: "Workshops",
        hashtags: ["#CFD", "#OpenFOAM", "#ANSYSFluent", "#Meshing", "#ThermalFluids", "#TKMCE"],
        imageUrl: "tkmce-building.jpg",
        mediaItems: [
          { type: "image", url: "tkmce-building.jpg", name: "CAD Lab Simulation Session" },
          { type: "image", url: "ishmt-logo.jpg", name: "ANSYS Turbulent Kinetic Energy Contours" }
        ],
        date: "October 2026",
        likes: 142,
        likedByMe: false,
        comments: [
          {
            id: "c-201",
            name: "Naveen V.",
            text: "The meshing best practices and y-plus boundary layer calculations were explained with crystal clarity. Super valuable session!",
            timestamp: "3 days ago"
          },
          {
            id: "c-202",
            name: "Gowri S.",
            text: "Hands-on OpenFOAM scripting was the highlight. Can we have an advanced two-phase flow session next month?",
            timestamp: "2 days ago"
          }
        ]
      },
      {
        id: "post-3",
        title: "Distinguished Lecture: Cryogenic Fuel Management in Space Launch Vehicles",
        caption: "Exploring extraterrestrial thermal engineering! Scientists from ISRO Liquid Propulsion Systems Centre (LPSC) delivered an eye-opening lecture on liquid hydrogen boil-off mitigation and regenerative cooling in semi-cryogenic rocket stages.",
        eventTag: "Conferences",
        hashtags: ["#ISRO", "#Cryogenics", "#SpacePropulsion", "#RegenerativeCooling", "#RocketScience", "#ThermalEngineering"],
        imageUrl: "ishmt-rct-logo.png",
        mediaItems: [
          { type: "image", url: "ishmt-rct-logo.png", name: "ISRO LPSC Guest Lecture Deck" },
          { type: "image", url: "tkmce-building.jpg", name: "Interactive Q&A Session" }
        ],
        date: "October 2026",
        likes: 215,
        likedByMe: false,
        comments: [
          {
            id: "c-301",
            name: "Muhammed R.",
            text: "Fascinating insights into cryogenic insulation and multi-layer insulation (MLI) blankets used in launch vehicles.",
            timestamp: "4 days ago"
          }
        ]
      },
      {
        id: "post-4",
        title: "Laboratory Exploration: Heat Exchanger Testing & Pool Boiling Phenomena",
        caption: "Bridging analytical equations with physical experimentation. Scholars conducted parametric testing on shell-and-tube heat exchangers, measuring critical heat flux (CHF) and nucleate boiling enhancement surfaces in the Heat Transfer Lab.",
        eventTag: "Lab Sessions",
        hashtags: ["#ThermalLab", "#HeatExchangers", "#Boiling", "#CriticalHeatFlux", "#ExperimentalThermodynamics", "#TKMCE"],
        imageUrl: "tkmce-building.jpg",
        mediaItems: [
          { type: "image", url: "tkmce-building.jpg", name: "Pool Boiling Test Rig" }
        ],
        date: "October 2026",
        likes: 98,
        likedByMe: false,
        comments: [
          {
            id: "c-401",
            name: "Sandra M.",
            text: "Observing nucleate boiling bubble departure frequencies in real time was incredible!",
            timestamp: "1 day ago"
          }
        ]
      },
      {
        id: "post-5",
        title: "Technical Liaison Tour: Vikram Sarabhai Space Centre (VSSC)",
        caption: "An inspiring academic expedition to ISRO VSSC Thiruvananthapuram. Student chapter delegates witnessed advanced composite testing, thermal protection tile manufacturing, and aerodynamic wind tunnel facilities.",
        eventTag: "Industrial Visits",
        hashtags: ["#IndustrialVisit", "#VSSC", "#ISRO", "#Aerospace", "#ThermalProtection", "#Trivandrum"],
        imageUrl: "ishmt-rct-logo.png",
        mediaItems: [
          { type: "image", url: "ishmt-rct-logo.png", name: "Delegation at VSSC Gate" },
          { type: "image", url: "tkmce-building.jpg", name: "Wind Tunnel Demonstration" }
        ],
        date: "November 2026",
        likes: 260,
        likedByMe: false,
        comments: [
          {
            id: "c-501",
            name: "Rohit Krishnan",
            text: "Unforgettable visit! The thermal protection materials used in the atmospheric re-entry capsule were breathtaking.",
            timestamp: "Just now"
          }
        ]
      },
      {
        id: "post-6",
        title: "Symposium on Phase Change Materials & Sustainable Microclimate Cooling",
        caption: "Pioneering green energy transitions! Our student delegates presented novel research on organic paraffin wax PCMs for passive building insulation and high-power battery thermal management systems (BTMS).",
        eventTag: "Conferences",
        hashtags: ["#PhaseChangeMaterials", "#EnergyTransition", "#BatteryThermal", "#Sustainability", "#GreenEnergy", "#ISHMT"],
        imageUrl: "ishmt-logo.jpg",
        mediaItems: [
          { type: "image", url: "ishmt-logo.jpg", name: "PCM Thermal Runaway Test Rig" }
        ],
        date: "November 2026",
        likes: 175,
        likedByMe: false,
        comments: [
          {
            id: "c-601",
            name: "Devika N.",
            text: "Great presentations! The latent heat thermal storage calculations were top notch.",
            timestamp: "2 hours ago"
          }
        ]
      }
    ]
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
      { id: 'nav-contact', label: 'CONTACT US', path: '/contact', isPublic: true },
      { 
        id: 'nav-join', 
        label: 'JOIN', 
        path: 'https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform?usp=dialog', 
        isExternal: true, 
        isCta: true, 
        isPublic: true 
      }
    ],
    execomData: DEFAULT_EXECOM_DATA,
    homeData: DEFAULT_HOME_DATA,
    contactData: DEFAULT_CONTACT_DATA,
    eventsData: DEFAULT_EVENTS_DATA,
    galleryData: DEFAULT_GALLERY_DATA,
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
            id: 'sec-academic-events',
            type: 'academic-events',
            layout: { containerWidth: 'full', paddingY: 'none', bgType: 'canvas', visible: true },
            content: {}
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
            id: 'sec-academic-gallery',
            type: 'academic-gallery',
            layout: { containerWidth: 'full', paddingY: 'none', bgType: 'canvas', visible: true },
            content: {}
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
  const STORAGE_KEY = 'ishmt_site_blueprint_v24_media_interconnect';
  const AUTH_KEY = 'ishmt_admin_session';

  // 100% Free Firebase Cloud Configuration for Real-time Multi-Device Sync
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAxbVq6P1oelzyTkcePm980wHFPImTUaGY",
    authDomain: "ishmt-tkmce.firebaseapp.com",
    databaseURL: "https://ishmt-tkmce-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ishmt-tkmce",
    storageBucket: "ishmt-tkmce.firebasestorage.app",
    messagingSenderId: "765540498580",
    appId: "1:765540498580:web:0e2b6ebc079d6270de8881"
  };

  const SiteStore = {
    blueprint: null,
    firebaseApp: null,
    firestoreDb: null,
    rtdb: null,
    isFirebaseReady: false,

    init() {
      // Initialize Firebase (supports both Firestore and RTDB)
      this.initFirebase();

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
          'ishmt_site_blueprint_v16_photo_cropper_security', 'ishmt_site_blueprint_v17_live_sync',
          'ishmt_site_blueprint_v18_hierarchical_modal', 'ishmt_site_blueprint_v19_hero_about',
          'ishmt_site_blueprint_v20_join_events', 'ishmt_site_blueprint_v21_dynamic_events',
          'ishmt_site_blueprint_v22_interactive', 'ishmt_site_blueprint_v23_interactive_suite'
        ];
        staleKeys.forEach(k => {
          try { localStorage.removeItem(k); } catch (e) {}
        });

        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            this.blueprint = deepMerge(deepClone(DEFAULT_BLUEPRINT), parsed);
            // Ensure galleryData exists with mediaItems
            if (!this.blueprint.galleryData || !Array.isArray(this.blueprint.galleryData.posts)) {
              this.blueprint.galleryData = deepClone(DEFAULT_GALLERY_DATA);
            } else {
              this.blueprint.galleryData.posts.forEach(post => {
                if (!post.mediaItems || !Array.isArray(post.mediaItems) || post.mediaItems.length === 0) {
                  post.mediaItems = [{ type: 'image', url: post.imageUrl || 'ishmt-logo.jpg', name: post.title || 'Slide 1' }];
                }
              });
            }
            // Ensure eventsData exists with new interconnect fields
            if (!this.blueprint.eventsData || !Array.isArray(this.blueprint.eventsData.events)) {
              this.blueprint.eventsData = deepClone(DEFAULT_EVENTS_DATA);
            } else {
              this.blueprint.eventsData.events.forEach(evt => {
                if (evt.deadline === undefined) evt.deadline = evt.dateTime || '';
                if (evt.certificateUrl === undefined) evt.certificateUrl = '';
                if (!Array.isArray(evt.attachments)) evt.attachments = [];
                if (evt.linkedGalleryPostId === undefined) evt.linkedGalleryPostId = '';
              });
            }
            // Ensure gallery route uses academic-gallery
            if (this.blueprint.pages && this.blueprint.pages['/gallery']) {
              this.blueprint.pages['/gallery'].sections = [
                {
                  id: 'sec-academic-gallery',
                  type: 'academic-gallery',
                  layout: { containerWidth: 'full', paddingY: 'none', bgType: 'canvas', visible: true },
                  content: {}
                }
              ];
            }
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

      // Initiate asynchronous cloud sync
      this.syncFromCloud();

      // If this session is an authenticated Admin, verify if cloud is empty and auto-seed if needed
      if (typeof AuthService !== 'undefined' && AuthService.isAuthenticated && AuthService.isAuthenticated()) {
        setTimeout(async () => {
          try {
            const checkRes = await fetch('https://ishmt-tkmce-default-rtdb.asia-southeast1.firebasedatabase.app/ishmt_master_blueprint.json');
            const data = await checkRes.json();
            if (!data && this.blueprint) {
              console.log('[SiteStore] Cloud is currently empty. Auto-seeding from admin session...');
              await this.syncToCloud(this.blueprint);
            }
          } catch (_) {}
        }, 1500);
      }

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

    initFirebase() {
      try {
        if (typeof window !== 'undefined' && window.firebase) {
          if (!window.firebase.apps || window.firebase.apps.length === 0) {
            this.firebaseApp = window.firebase.initializeApp(FIREBASE_CONFIG);
          } else {
            this.firebaseApp = window.firebase.app();
          }

          // Initialize Firestore
          try {
            this.firestoreDb = window.firebase.firestore();
          } catch (fsErr) {
            console.warn('[SiteStore] Firestore init warning:', fsErr);
          }

          // Also initialize Realtime Database as high-performance backup
          try {
            this.rtdb = window.firebase.database();
          } catch (rtErr) {
            console.warn('[SiteStore] Realtime Database init warning:', rtErr);
          }

          this.isFirebaseReady = Boolean(this.firestoreDb || this.rtdb);
          console.log('[SiteStore] Firebase connected for live real-time sync.');

          // Set up real-time listener: instantly updates whenever admin publishes
          this.listenToRealtimeCloudUpdates();
          this.updateCloudStatusBadge(true, 'Firebase Connected (Live)');
        } else {
          this.updateCloudStatusBadge(false, 'Local Storage Only');
        }
      } catch (err) {
        console.warn('[SiteStore] Firebase setup warning:', err);
        this.updateCloudStatusBadge(false, 'Firebase Init Failed');
      }
    },

    updateCloudStatusBadge(isConnected, message) {
      try {
        const badge = document.getElementById('cloud-sync-status-badge');
        const dot = document.getElementById('cloud-sync-dot');
        const text = document.getElementById('cloud-sync-text');
        if (!badge || !dot || !text) return;

        if (isConnected) {
          badge.style.background = 'rgba(16, 185, 129, 0.15)';
          badge.style.color = '#6EE7B7';
          badge.style.borderColor = 'rgba(16, 185, 129, 0.35)';
          dot.style.background = '#10B981';
          text.textContent = message || 'Cloud Connected';
        } else {
          badge.style.background = 'rgba(239, 68, 68, 0.15)';
          badge.style.color = '#FCA5A5';
          badge.style.borderColor = 'rgba(239, 68, 68, 0.35)';
          dot.style.background = '#EF4444';
          text.textContent = message || 'Permission Denied / Local Only';
        }
      } catch (_) {}
    },

    listenToRealtimeCloudUpdates() {
      // 1. Try Firestore real-time onSnapshot listener
      if (this.firestoreDb) {
        try {
          this.firestoreDb.collection('ishmt_site').doc('master_blueprint')
            .onSnapshot((doc) => {
              if (doc.exists) {
                const cloudData = doc.data();
                if (cloudData && cloudData.blueprint) {
                  this.applyIncomingCloudBlueprint(cloudData.blueprint, 'Firestore');
                }
              }
            }, (err) => {
              console.warn('[SiteStore] Firestore listener warning:', err.message);
            });
        } catch (_) {}
      }

      // 2. Also attach Realtime Database listener
      if (this.rtdb) {
        try {
          this.rtdb.ref('ishmt_master_blueprint').on('value', (snapshot) => {
            const val = snapshot.val();
            if (val) {
              const cloudBlueprint = typeof val === 'string' ? JSON.parse(val) : val;
              this.applyIncomingCloudBlueprint(cloudBlueprint, 'RealtimeDB');
            }
          });
        } catch (_) {}
      }
    },

    applyIncomingCloudBlueprint(cloudBlueprint, source = 'Cloud') {
      if (!cloudBlueprint) return;
      // Overwrite local blueprint with authoritative cloud blueprint
      this.blueprint = cloudBlueprint;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.blueprint));
      } catch (_) {}
      this.applyThemeVariables();
      App.onBlueprintUpdated();
      console.log(`[SiteStore] Real-time live update received and applied from ${source}.`);
    },

    async syncFromCloud() {
      // 1. Direct fetch from Firebase RTDB REST endpoint (instant, zero delay, works on every mobile browser)
      try {
        const rtdbRes = await fetch('https://ishmt-tkmce-default-rtdb.asia-southeast1.firebasedatabase.app/ishmt_master_blueprint.json');
        if (rtdbRes.ok) {
          const val = await rtdbRes.json();
          if (val) {
            const cloudBlueprint = typeof val === 'string' ? JSON.parse(val) : val;
            this.applyIncomingCloudBlueprint(cloudBlueprint, 'RTDB Direct REST');
            return;
          }
        }
      } catch (err) {
        console.warn('[SiteStore] RTDB REST fetch notice:', err.message);
      }

      // 2. If Firebase SDK is active, read the snapshot directly
      if (this.rtdb) {
        try {
          const snapshot = await this.rtdb.ref('ishmt_master_blueprint').once('value');
          const val = snapshot.val();
          if (val) {
            const cloudBlueprint = typeof val === 'string' ? JSON.parse(val) : val;
            this.applyIncomingCloudBlueprint(cloudBlueprint, 'RTDB Fetch');
            return;
          }
        } catch (_) {}
      }

      // 3. Fallback: check Firestore
      if (this.firestoreDb) {
        try {
          const doc = await this.firestoreDb.collection('ishmt_site').doc('master_blueprint').get();
          if (doc.exists) {
            const cloudData = doc.data();
            if (cloudData && cloudData.blueprint) {
              this.applyIncomingCloudBlueprint(cloudData.blueprint, 'Firestore Fetch');
              return;
            }
          }
        } catch (fsErr) {
          console.warn('[SiteStore] Firestore get notice:', fsErr.message);
        }
      }

      // 4. Secondary fallback: check /api/site-data
      try {
        const res = await fetch('/api/site-data');
        if (!res.ok) return;
        const json = await res.json();
        if (json && json.connected && json.hasData && json.data) {
          this.applyIncomingCloudBlueprint(json.data, 'Vercel API');
        }
      } catch (err) {
        console.warn('[SiteStore] Cloud sync check failed (offline or local dev):', err);
      }
    },

    async syncToCloud(blueprint) {
      if (!blueprint) return;
      let savedToFirebase = false;
      // Serialize blueprint to JSON string: prevents Firebase key path errors with forward slashes (e.g. '/events', '/team')
      const serialized = JSON.stringify(blueprint);

      // 1. Direct REST PUT to Firebase Realtime Database (100% reliable, immune to SDK errors & key path constraints)
      try {
        const restRes = await fetch('https://ishmt-tkmce-default-rtdb.asia-southeast1.firebasedatabase.app/ishmt_master_blueprint.json', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(serialized)
        });
        if (restRes.ok) {
          savedToFirebase = true;
          console.log('[SiteStore] Saved blueprint to Firebase RTDB via REST.');
        }
      } catch (restErr) {
        console.warn('[SiteStore] REST RTDB sync notice:', restErr.message);
      }

      // 2. Also save to Realtime Database SDK as string
      if (this.rtdb) {
        try {
          await this.rtdb.ref('ishmt_master_blueprint').set(serialized);
          savedToFirebase = true;
          console.log('[SiteStore] Saved blueprint to Firebase Realtime Database SDK.');
        } catch (rtErr) {
          console.warn('[SiteStore] RTDB write error:', rtErr.message);
        }
      }

      // 3. Save directly to Firestore if active
      if (this.firestoreDb) {
        try {
          await this.firestoreDb.collection('ishmt_site').doc('master_blueprint').set({
            blueprint,
            updatedAt: new Date().toISOString(),
            author: 'ISHMT Admin'
          });
          savedToFirebase = true;
          console.log('[SiteStore] Saved blueprint to Firebase Firestore.');
        } catch (fsErr) {
          console.warn('[SiteStore] Firestore write error:', fsErr.message);
        }
      }

      if (savedToFirebase) {
        App.showToast('✅ Saved & Synced Live to All Devices via Firebase!');
      }

      // 4. Also push to /api/site-data as secondary store
      try {
        await fetch('/api/site-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            blueprint,
            timestamp: new Date().toISOString()
          })
        });
      } catch (_) {}
    },

    get() {
      return this.blueprint || DEFAULT_BLUEPRINT;
    },

    save(newConfig, notify = true, syncCloud = true) {
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
      if (syncCloud && AuthService.isAuthenticated()) {
        this.syncToCloud(this.blueprint);
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
  // 3B. UNDO MANAGER (Instant Deletion + Ctrl+Z & In-Toast Undo)
  // ==========================================================================
  const UndoManager = {
    stack: [],

    push(action) {
      if (!action || typeof action.undo !== 'function') return;
      this.stack.push(action);
      if (this.stack.length > 50) this.stack.shift();
    },

    undo() {
      if (this.stack.length === 0) {
        App.showToast('Nothing to undo.');
        return false;
      }
      const action = this.stack.pop();
      try {
        action.undo();
        App.showToast(`↩️ Restored: ${action.description || 'Deleted item'}`);
        return true;
      } catch (err) {
        console.error('Undo execution error:', err);
        return false;
      }
    },

    hasUndo() {
      return this.stack.length > 0;
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

      // Temporarily lock body scroll during the intro animation
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

      // CRITICAL: Disable all transitions during Stage 1 so the emblem is instantly seated at center without any slide or motion from sides
      container.style.transition = 'none';
      container.style.transform = `translate(${this.lockupMetrics.centerTx}px, ${this.lockupMetrics.centerTy}px) scale(1)`;
      logoWrapper.style.transition = 'none';
      logoWrapper.style.transform = `translateX(${this.lockupMetrics.logoShift}px) scale(${this.lockupMetrics.introScale})`;
      textBlock.style.transition = 'none';
      textBlock.style.opacity = '0';
      textBlock.style.transform = 'translateX(-180px)';

      void container.offsetWidth; // Force reflow

      // Stage 1: Isolated Emblem Breathing in Center (Transitions strictly kept disabled)
      container.classList.add('stage-1');
      logoWrapper.classList.add('stage-1');
      textBlock.classList.add('stage-1');

      // Stage 2 (t=1100ms, relaxed speed decreased by ~30%): Emblem shifts to lockup origin, typography smoothly reveals
      setTimeout(() => {
        logoWrapper.classList.remove('stage-1');
        logoWrapper.classList.add('stage-2');
        logoWrapper.style.transition = 'transform 1.5s var(--ease-stage2), filter 1.5s var(--ease-stage2)';
        logoWrapper.style.transform = '';

        textBlock.classList.remove('stage-1');
        textBlock.classList.add('stage-2');
        textBlock.style.transition = 'transform 1.5s var(--ease-stage2) 0.08s, opacity 1.4s var(--ease-stage2) 0.08s, filter 1.4s var(--ease-stage2) 0.08s';
        textBlock.style.opacity = '';
        textBlock.style.transform = '';
      }, 1100);

      // Stage 3 (t=2450ms, decreased speed by ~30% with ultra-smooth 1.6s transition): Lockup glides into top header bar with fluid deceleration
      setTimeout(() => {
        container.classList.remove('centered', 'stage-1');
        container.classList.add('docked');
        container.style.transition = 'transform 1.6s var(--ease-stage3)';
        container.style.transform = `translate(0px, 0px) scale(${this.lockupMetrics.dockScale})`;

        logoWrapper.classList.add('docked');
        logoWrapper.style.transition = 'filter 1.4s var(--ease-stage3)';
        textBlock.classList.add('docked');
        textBlock.style.transition = 'text-shadow 1.4s var(--ease-stage3)';
        headerBar.classList.add('docked', 'visible');
      }, 2450);

      // Phase 4 (t=3250ms): Smooth transition after Phase 3 - page content glides in gracefully
      setTimeout(() => {
        if (publicView) {
          publicView.classList.add('visible');
        }

        // Unlock body scroll once the page content begins its smooth reveal
        document.body.classList.remove('loading-state');

        this.hasPlayedIntro = true;
        if (callback) callback();
      }, 3250);
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

      const cleanRoute = currentRoute.split('?')[0] || '/';

      // Render Header Navigation Links
      this.renderNav(blueprint.navigation, cleanRoute);

      // Resolve Page Data
      const page = blueprint.pages[cleanRoute] || blueprint.pages['/'] || { sections: [] };

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
        const sectionHtml = this.generateBlockHtml(section, false, cleanRoute);
        contentEl.insertAdjacentHTML('beforeend', sectionHtml);
      });

      // Render Global Academic Footer
      contentEl.insertAdjacentHTML('beforeend', this.generateGlobalFooterHtml());

      // Initialize interactive widgets
      this.initExecomInteractivity(contentEl);
      this.initAcademicHomeInteractivity(contentEl);
      this.initAcademicGalleryInteractivity(contentEl);
      this.initAcademicEventsInteractivity(contentEl);
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
          const isExternal = item.isExternal || (item.path && item.path.startsWith('http'));
          const href = isExternal ? item.path : (item.path === '/' ? '#/' : `#${item.path}`);
          const target = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
          const ctaClass = item.isCta ? 'nav-link-join' : '';
          return `<a href="${href}" ${target} class="nav-link ${ctaClass} ${isActive}" data-nav-id="${item.id}">${this.escapeHtml(item.label)}</a>`;
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
      } else if (type === 'academic-events') {
        innerContent = this.generateAcademicEventsHtml(isAdminMode);
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
              ${(content.items && content.items.length > 0) ? `
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
              </div>
            ` : `
              <div class="events-empty-state" style="text-align: center; padding: 3.5rem 2rem; background: #FFFFFF; border-radius: 12px; border: 1px dashed rgba(139, 13, 26, 0.22); box-shadow: 0 4px 16px rgba(0,0,0,0.02); margin-top: 1.5rem;">
                <div style="width: 52px; height: 52px; margin: 0 auto 1.25rem; border-radius: 50%; background: rgba(139, 13, 26, 0.08); display: flex; align-items: center; justify-content: center; color: #8B1014;">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 style="font-family: var(--theme-font-family); font-size: 1.35rem; font-weight: 700; color: #111827; margin: 0 0 0.5rem 0;">Upcoming Events to be Announced</h3>
                <p style="color: #6B7280; font-size: 0.95rem; max-width: 480px; margin: 0 auto; line-height: 1.6;">There are currently no active workshops or competitions scheduled. Program schedules and registration links will be posted here as dates are finalized.</p>
              </div>
            `}
            ${isAdminMode ? `
              <div class="studio-add-card-placeholder" data-action="add-event-card" data-section-id="${id}" style="margin-top: 1.5rem;">
                <span style="font-size: 1.4rem; font-weight: 700; color: #8B1014;">+ Add New Event Card</span>
                <span style="font-size: 0.85rem; color: #6B7280; margin-top: 4px;">Click to append a workshop, seminar, or competition card</span>
              </div>
            ` : ''}
          `;
          break;

          default:
            innerContent = `<div class="section-desc">Custom section: ${this.escapeHtml(type)}</div>`;
        }
      }

      const isCustomFullBleed = type === 'academic-home' || type === 'academic-events' || type === 'academic-contact' || type === 'execom-directory';
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
      const blueprint = SiteStore.get();
      const galleryData = (blueprint.galleryData && blueprint.galleryData.posts) ? blueprint.galleryData : deepClone(DEFAULT_GALLERY_DATA);
      const posts = galleryData.posts || [];

      // Extract unique categories for filter pills
      const rawCategories = posts.map(p => p.eventTag).filter(Boolean);
      const uniqueCategories = Array.from(new Set(['Workshops', 'Conferences', 'Inauguration 2026', 'Lab Sessions', 'Industrial Visits', ...rawCategories]));

      return `
        <div class="gallery-page-wrap" id="academic-gallery-section">
          <!-- Section Header -->
          <div style="text-align: center; margin-bottom: 2.5rem;">
            <div class="badge-eyebrow" style="margin-bottom: 0.75rem;">Visual Archives &amp; Moments</div>
            <h2 class="section-heading" style="color: #800000; font-family: var(--theme-font-family, 'Oswald', sans-serif); font-size: 2.35rem; font-weight: 700;">
              ISHMT Chapter Visual Archives
            </h2>
            <p class="section-desc align-center" style="max-width: 680px; margin: 0 auto; color: #4B5563; font-size: 1.05rem;">
              Explore computational workshops, distinguished lectures, cryogenic research interactions, and industrial expeditions captured across our chapter's journey.
            </p>
            <div class="academic-crimson-bar mx-auto" style="margin-top: 1.25rem;"></div>
          </div>

          <!-- PART 1: Admin Gallery Dashboard (Batch Upload & Moderation) -->
          ${isAdminMode ? this.generateGalleryAdminPanelHtml(posts) : ''}

          <!-- PART 2: Public Controls (Search, Categories & View Switcher) -->
          <div class="gallery-controls-container">
            <div class="gallery-top-controls">
              <!-- Real-time Search -->
              <div class="gallery-search-wrap">
                <svg class="gallery-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" id="gallery-search-input" class="gallery-search-input" placeholder="Search by event name, caption, or #hashtag..." />
                <button type="button" id="gallery-search-clear" class="gallery-search-clear" style="display: none;" title="Clear search">&times;</button>
              </div>

              <!-- View Switcher -->
              <div class="gallery-view-switcher">
                <button type="button" class="gallery-view-btn active" id="gallery-view-grid-btn" data-view="grid" title="Explore Grid View (3 Columns)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span>Grid</span>
                </button>
                <button type="button" class="gallery-view-btn" id="gallery-view-feed-btn" data-view="feed" title="Instagram Feed View (Single Column)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Feed</span>
                </button>
              </div>
            </div>

            <!-- Dynamic Category Filter Pills -->
            <div class="gallery-category-pills" id="gallery-category-pills-bar">
              <button type="button" class="gallery-category-pill active" data-category="all">
                <span>All Moments</span>
              </button>
              ${uniqueCategories.map(cat => `
                <button type="button" class="gallery-category-pill" data-category="${this.escapeHtml(cat)}">
                  <span>${this.escapeHtml(cat)}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Dynamic Posts Container (Explore Grid or Feed View) -->
          <div id="gallery-posts-container">
            ${this.generateGalleryExploreGridHtml(posts)}
          </div>
        </div>
      `;
    },

    generateGalleryAdminPanelHtml(posts) {
      return `
        <div class="gallery-admin-panel" id="gallery-admin-panel">
          <div class="gallery-admin-card">
            <div class="gallery-admin-header">
              <div class="gallery-admin-header-left">
                <span class="gallery-admin-badge">Admin Studio</span>
                <h3 class="gallery-admin-title">Gallery Single-Post Carousel Uploader (1 to 10 Slides)</h3>
              </div>
              <span style="font-size: 0.82rem; opacity: 0.9;">Direct Master Session</span>
            </div>

            <div class="gallery-admin-body">
              <form id="gallery-batch-upload-form" onsubmit="return false;">
                <!-- Drag & Drop Upload Zone -->
                <div class="events-upload-zone" id="gallery-upload-dropzone" style="margin-bottom: 1rem;">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#800000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <p class="events-upload-prompt" style="margin-top: 0.5rem; font-weight: 600; color: #1F2937;">
                    Click to select or drag &amp; drop 1 to 10 photos or videos (.jpg, .png, .webp, .mp4, .webm)
                  </p>
                  <p style="font-size: 0.78rem; color: #6B7280; margin-top: 0.25rem;">
                    All uploaded items will be grouped into <strong>ONE single carousel post</strong>. Slide 1 will serve as the Cover Thumbnail.
                  </p>
                  <input type="file" id="gallery-file-input" accept="image/*,video/mp4,video/webm" multiple style="display: none;" />
                </div>

                <!-- Carousel Limit & Counter Badge -->
                <div id="gallery-carousel-limit-badge" style="display: inline-block; background: #FDF2F2; border: 1px solid #FECACA; color: #800000; font-size: 0.82rem; font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 6px; margin-bottom: 1.25rem;">
                  Media in this Post: [ <span id="gallery-staged-count">0</span> / 10 ] (All uploaded items will be grouped into a single carousel post)
                </div>

                <!-- Reorderable Carousel Slides Preview Strip -->
                <div id="gallery-batch-previews-container" class="admin-carousel-strip" style="display: none; margin-bottom: 1.5rem;"></div>

                <div class="events-form-grid" style="margin-bottom: 1.5rem;">
                  <!-- Event Tag / Category -->
                  <div class="events-form-group">
                    <label class="events-form-label" for="gallery-new-tag">Event Category / Tag *</label>
                    <select id="gallery-new-tag" class="events-form-input">
                      <option value="Workshops">Workshops &amp; Bootcamps</option>
                      <option value="Conferences">Conferences &amp; Lectures</option>
                      <option value="Inauguration 2026">Inauguration 2026</option>
                      <option value="Lab Sessions">Lab Sessions &amp; Testing</option>
                      <option value="Industrial Visits">Industrial Visits &amp; Tours</option>
                      <option value="Student Achievements">Student Achievements</option>
                    </select>
                  </div>

                  <!-- Date / Month -->
                  <div class="events-form-group">
                    <label class="events-form-label" for="gallery-new-date">Date / Period *</label>
                    <input type="text" id="gallery-new-date" class="events-form-input" placeholder="e.g. October 2026" value="Academic Year 2026–27" required />
                  </div>
                </div>

                <!-- Caption -->
                <div class="events-form-group" style="margin-bottom: 1.25rem;">
                  <label class="events-form-label" for="gallery-new-caption">Photo / Carousel Caption *</label>
                  <textarea id="gallery-new-caption" class="events-form-input" rows="3" placeholder="Describe the chapter activity, participants, key outcomes, or research topics..." required></textarea>
                </div>

                <!-- Hashtags -->
                <div class="events-form-group" style="margin-bottom: 1.5rem;">
                  <label class="events-form-label" for="gallery-new-hashtags">Searchable Hashtags</label>
                  <input type="text" id="gallery-new-hashtags" class="events-form-input" placeholder="#CFD #Thermal #HeatTransfer #TKMCE #ISHMT" value="#ISHMT #TKMCE #ThermalEngineering" />
                  <span style="font-size: 0.75rem; color: #6B7280; margin-top: 0.25rem; display: block;">Separate with spaces or commas</span>
                </div>

                <!-- Submit Button -->
                <div style="display: flex; gap: 1rem; align-items: center;">
                  <button type="button" id="gallery-submit-batch-btn" class="events-btn-save" style="background: #800000; color: #fff; padding: 0.65rem 1.75rem; border-radius: 8px; font-weight: 700; border: none; cursor: pointer;">
                    Publish to Chapter Gallery
                  </button>
                  <span id="gallery-upload-status" style="font-size: 0.85rem; color: #4B5563;"></span>
                </div>
              </form>

              <!-- Gallery Moderation Roster -->
              <div style="margin-top: 2.5rem; border-top: 1px solid #E5E7EB; padding-top: 2rem;">
                <h4 style="font-size: 1.1rem; font-weight: 700; color: #111827; margin-bottom: 1rem;">
                  Active Posts &amp; Comment Moderation (<span id="gallery-admin-count">${posts.length}</span>)
                </h4>
                <div class="events-roster-wrap">
                  <table class="events-roster-table" id="gallery-moderation-table">
                    <thead>
                      <tr>
                        <th style="width: 70px;">Cover</th>
                        <th>Tag / Period</th>
                        <th>Slides / Media</th>
                        <th>Caption Summary</th>
                        <th style="text-align: center;">Likes</th>
                        <th style="text-align: center;">Comments</th>
                        <th style="text-align: right;">Actions</th>
                      </tr>
                    </thead>
                    <tbody id="gallery-moderation-tbody">
                      ${this.generateGalleryModerationRowsHtml(posts)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    generateGalleryModerationRowsHtml(posts) {
      if (!posts || !posts.length) {
        return `
          <tr>
            <td colspan="7" style="text-align: center; color: #6B7280; padding: 2rem;">
              No gallery items in archives yet. Use the upload zone above to publish photos.
            </td>
          </tr>
        `;
      }

      return posts.map(post => {
        const media = (post.mediaItems && post.mediaItems.length) ? post.mediaItems : [{ type: 'image', url: post.imageUrl }];
        const coverUrl = media[0].url;
        const totalSlides = media.length;
        const videoCount = media.filter(m => m.type === 'video').length;

        return `
          <tr data-post-id="${post.id}">
            <td>
              <div style="width: 50px; height: 50px; border-radius: 6px; overflow: hidden; background: #000;">
                <img src="${this.escapeHtml(coverUrl)}" alt="thumb" style="width: 100%; height: 100%; object-fit: cover;" draggable="false" />
              </div>
            </td>
            <td>
              <span class="gallery-feed-tag-badge">${this.escapeHtml(post.eventTag || 'General')}</span>
              <div style="font-size: 0.75rem; color: #6B7280; margin-top: 2px;">${this.escapeHtml(post.date || '')}</div>
            </td>
            <td>
              <span style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.78rem; font-weight: 700; color: #1F2937;">
                ${totalSlides} Slide${totalSlides > 1 ? 's' : ''} ${videoCount > 0 ? `(🎥 ${videoCount})` : ''}
              </span>
            </td>
            <td style="max-width: 260px;">
              <div style="font-size: 0.85rem; font-weight: 600; color: #1F2937; line-height: 1.3;" class="line-clamp-2">
                ${this.escapeHtml(post.caption || post.title || 'Untitled Post')}
              </div>
              ${post.hashtags && post.hashtags.length ? `
                <div style="font-size: 0.72rem; color: #800000; margin-top: 3px;">${this.escapeHtml(post.hashtags.join(' '))}</div>
              ` : ''}
            </td>
            <td style="text-align: center; font-weight: 700; color: #111827;">${post.likes || 0}</td>
            <td style="text-align: center; font-weight: 700; color: #111827;">${(post.comments && post.comments.length) || 0}</td>
            <td style="text-align: right;">
              <div style="display: inline-flex; gap: 0.5rem;">
                <button type="button" class="btn-roster-action gallery-admin-view-btn" data-post-id="${post.id}" title="Preview / Moderate Comments" style="color: #2563EB;">
                  💬 Moderate
                </button>
                <button type="button" class="btn-roster-action gallery-admin-del-btn" data-post-id="${post.id}" title="Delete Post" style="color: #DC2626;">
                  🗑 Delete
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    },

    generateGalleryExploreGridHtml(posts) {
      if (!posts || !posts.length) {
        return `
          <div style="text-align: center; padding: 4rem 1.5rem; background: #F9FAFB; border-radius: 12px; border: 1px dashed #D1D5DB;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.5" style="margin: 0 auto 0.75rem;">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: #374151;">No Moments Found</h4>
            <p style="font-size: 0.9rem; color: #6B7280; margin-top: 0.25rem;">Try adjusting your search criteria or category filter.</p>
          </div>
        `;
      }

      return `
        <div class="gallery-explore-grid" id="gallery-explore-grid">
          ${posts.map(post => {
            const media = (post.mediaItems && post.mediaItems.length) ? post.mediaItems : [{ type: 'image', url: post.imageUrl }];
            const coverUrl = media[0].url;
            const isCarousel = media.length > 1;
            const isVideo = media[0].type === 'video' || media.some(m => m.type === 'video');

            return `
              <div class="gallery-grid-card select-none" data-post-id="${post.id}" data-category="${this.escapeHtml(post.eventTag || '')}">
                <div class="image-protection-shield" aria-hidden="true" oncontextmenu="return false;"></div>
                ${post.eventTag ? `<span class="gallery-grid-tag-chip">${this.escapeHtml(post.eventTag)}</span>` : ''}

                <!-- Carousel Stack Icon / Video Indicator Badge in Top-Right Corner -->
                ${isCarousel ? `
                  <span class="gallery-carousel-badge" title="Carousel post with ${media.length} items">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>${media.length}</span>
                  </span>
                ` : (isVideo ? `
                  <span class="gallery-carousel-badge" style="background: rgba(128, 0, 0, 0.9);" title="Video post">
                    ▶ <span>VIDEO</span>
                  </span>
                ` : '')}

                <img src="${this.escapeHtml(coverUrl)}" alt="${this.escapeHtml(post.title || post.caption || 'ISHMT Chapter Moment')}" class="gallery-grid-thumbnail" draggable="false" oncontextmenu="return false;" loading="lazy" />
                <div class="gallery-grid-overlay">
                  <div class="gallery-overlay-stat">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span class="gallery-grid-like-val" id="grid-like-val-${post.id}">${post.likes || 0}</span>
                  </div>
                  <div class="gallery-overlay-stat">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span class="gallery-grid-comment-val" id="grid-comment-val-${post.id}">${(post.comments && post.comments.length) || 0}</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    },

    generateGalleryFeedHtml(posts) {
      if (!posts || !posts.length) {
        return `
          <div style="text-align: center; padding: 4rem 1.5rem; background: #F9FAFB; border-radius: 12px; border: 1px dashed #D1D5DB; max-width: 620px; margin: 0 auto;">
            <p style="color: #6B7280; font-size: 0.95rem;">No posts found matching the selected filter.</p>
          </div>
        `;
      }

      return `
        <div class="gallery-feed-view" id="gallery-feed-view">
          ${posts.map(post => {
            const media = (post.mediaItems && post.mediaItems.length) ? post.mediaItems : [{ type: 'image', url: post.imageUrl }];
            const totalSlides = media.length;

            return `
              <article class="gallery-feed-card" data-post-id="${post.id}" data-category="${this.escapeHtml(post.eventTag || '')}">
                <!-- Feed Card Header -->
                <div class="gallery-feed-header">
                  <div class="gallery-feed-author-wrap">
                    <img src="ishmt-logo.jpg" alt="ISHMT TKMCE" class="gallery-feed-avatar select-none" draggable="false" oncontextmenu="return false;" />
                    <div>
                      <div class="gallery-feed-username">
                        <span>ishmt_tkmce</span>
                        <span class="gallery-feed-tag-badge">${this.escapeHtml(post.eventTag || 'Chapter Activity')}</span>
                      </div>
                      <span class="gallery-feed-time" style="font-size: 0.72rem; color: #9CA3AF;">${this.escapeHtml(post.date || '')}</span>
                    </div>
                  </div>
                </div>

                <!-- Feed Card Image / Carousel Container -->
                <div class="gallery-feed-image-wrap select-none" data-feed-img-id="${post.id}" data-feed-slide-index="0" data-total-slides="${totalSlides}">
                  <div class="image-protection-shield" aria-hidden="true" oncontextmenu="return false;"></div>

                  <!-- Multi-Slide Carousel Container -->
                  <div class="gallery-carousel-frame feed-carousel-frame" id="feed-slides-frame-${post.id}">
                    ${media.map((item, idx) => `
                      <div class="gallery-carousel-slide ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
                        ${item.type === 'video' ? `
                          <video 
                            class="gallery-protected-video select-none" 
                            src="${item.url}" 
                            controls 
                            controlsList="nodownload" 
                            disablePictureInPicture 
                            oncontextmenu="return false;" 
                            playsinline
                          ></video>
                        ` : `
                          <img 
                            src="${this.escapeHtml(item.url)}" 
                            alt="${this.escapeHtml(post.title || post.caption || 'Slide')}" 
                            class="gallery-feed-img" 
                            draggable="false" 
                            oncontextmenu="return false;" 
                            loading="lazy" 
                          />
                        `}
                      </div>
                    `).join('')}
                  </div>

                  <!-- Navigation Arrows (If > 1 slide) -->
                  ${totalSlides > 1 ? `
                    <button type="button" class="gallery-carousel-arrow prev feed-arrow-prev" data-post-id="${post.id}" aria-label="Previous slide">&#8249;</button>
                    <button type="button" class="gallery-carousel-arrow next feed-arrow-next" data-post-id="${post.id}" aria-label="Next slide">&#8250;</button>
                    <span class="gallery-carousel-counter-pill" id="feed-counter-${post.id}">1 / ${totalSlides}</span>
                    <div class="gallery-carousel-dots" id="feed-dots-${post.id}">
                      ${media.map((_, i) => `<span class="gallery-carousel-dot ${i === 0 ? 'active' : ''}" data-post-id="${post.id}" data-slide="${i}"></span>`).join('')}
                    </div>
                  ` : ''}

                  <!-- Floating Heart Burst Overlay -->
                  <div class="gallery-heart-burst" id="feed-heart-burst-${post.id}">
                    <svg width="84" height="84" viewBox="0 0 24 24" fill="#EF4444" stroke="#EF4444" stroke-width="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                </div>

                <!-- Feed Actions Bar -->
                <div class="gallery-feed-actions">
                  <button type="button" class="gallery-action-btn feed-like-btn ${post.likedByMe ? 'liked' : ''}" data-post-id="${post.id}" title="Like">
                    <svg id="feed-like-icon-${post.id}" width="24" height="24" viewBox="0 0 24 24" fill="${post.likedByMe ? '#EF4444' : 'none'}" stroke="${post.likedByMe ? '#EF4444' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <button type="button" class="gallery-action-btn feed-comment-open-btn" data-post-id="${post.id}" title="View all comments">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                  <button type="button" class="gallery-action-btn feed-share-btn" data-post-id="${post.id}" title="Share post link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>

                <!-- Feed Body (Likes, Caption, Comments) -->
                <div class="gallery-feed-body">
                  <div class="gallery-feed-likes" id="feed-likes-${post.id}">
                    ${post.likes || 0} likes
                  </div>

                  <div class="gallery-feed-caption">
                    <span class="gallery-comment-author">ishmt_tkmce</span>
                    <span>${this.escapeHtml(post.caption || post.title || '')}</span>
                    ${post.hashtags && post.hashtags.length ? `
                      <div style="margin-top: 0.35rem;">
                        ${post.hashtags.map(t => `<span class="gallery-hashtag">${this.escapeHtml(t)}</span>`).join(' ')}
                      </div>
                    ` : ''}
                  </div>

                  <!-- Comments preview -->
                  ${post.comments && post.comments.length ? `
                    <button type="button" class="gallery-view-comments-btn feed-comment-open-btn" data-post-id="${post.id}">
                      View all ${post.comments.length} comments
                    </button>
                    <div class="gallery-comment-row" style="margin-bottom: 0.5rem;">
                      <div class="gallery-comment-content">
                        <span class="gallery-comment-author">${this.escapeHtml(post.comments[post.comments.length - 1].name)}</span>
                        <span class="gallery-comment-text">${this.escapeHtml(post.comments[post.comments.length - 1].text)}</span>
                      </div>
                    </div>
                  ` : ''}
                </div>

                <!-- Inline Quick Comment Form -->
                <form class="gallery-inline-comment-form feed-quick-comment-form" data-post-id="${post.id}">
                  <input type="text" class="gallery-inline-comment-input feed-quick-name" placeholder="Your Name" required maxlength="40" style="max-width: 110px;" />
                  <input type="text" class="gallery-inline-comment-input feed-quick-text" placeholder="Add a comment..." required maxlength="240" />
                  <button type="submit" class="gallery-inline-comment-btn">Post</button>
                </form>
              </article>
            `;
          }).join('')}
        </div>
      `;
    },

    processAndSanitizeGalleryMedia(file) {
      return new Promise((resolve, reject) => {
        if (!file) return reject(new Error('No file provided.'));
        const isVideo = file.type.startsWith('video/');
        const isImage = file.type.startsWith('image/');

        if (!isImage && !isVideo) {
          return reject(new Error('Unsupported file type. Please upload images or MP4/WebM videos.'));
        }

        const reader = new FileReader();

        if (isVideo) {
          reader.onload = (e) => {
            resolve({
              type: 'video',
              url: e.target.result,
              name: file.name
            });
          };
          reader.onerror = () => reject(new Error('Failed to read video file.'));
          reader.readAsDataURL(file);
          return;
        }

        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const maxWidth = 1920;
            let width = img.width;
            let height = img.height;
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            // Strips EXIF/GPS metadata by converting to clean WebP data URL
            const webpDataUrl = canvas.toDataURL('image/webp', 0.88);
            resolve({
              type: 'image',
              url: webpDataUrl,
              name: file.name
            });
          };
          img.onerror = () => reject(new Error('Failed to decode image data.'));
          img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('Failed to read image file.'));
        reader.readAsDataURL(file);
      });
    },

    processAndSanitizeGalleryImage(file) {
      return this.processAndSanitizeGalleryMedia(file);
    },

    initAcademicGalleryInteractivity(contentEl) {
      if (!contentEl) return;
      const gallerySec = contentEl.querySelector('#academic-gallery-section');
      if (!gallerySec) return;

      const blueprint = SiteStore.get();
      if (!blueprint.galleryData) {
        blueprint.galleryData = deepClone(DEFAULT_GALLERY_DATA);
        SiteStore.save(blueprint);
      }

      let currentView = 'grid'; // 'grid' | 'feed'
      let activeCategory = 'all';
      let searchQuery = '';
      let stagedGalleryMedia = []; // 1 to 10 items for a SINGLE carousel post

      // Elements
      const searchInput = gallerySec.querySelector('#gallery-search-input');
      const searchClear = gallerySec.querySelector('#gallery-search-clear');
      const gridBtn = gallerySec.querySelector('#gallery-view-grid-btn');
      const feedBtn = gallerySec.querySelector('#gallery-view-feed-btn');
      const categoryPills = gallerySec.querySelectorAll('.gallery-category-pill');
      const postsContainer = gallerySec.querySelector('#gallery-posts-container');

      // Shared Post Modal Elements
      const postModal = document.getElementById('gallery-post-modal');
      const modalSlidesWrap = document.getElementById('gallery-modal-slides-wrap');
      const modalPrevBtn = document.getElementById('gallery-modal-prev-btn');
      const modalNextBtn = document.getElementById('gallery-modal-next-btn');
      const modalCounterPill = document.getElementById('gallery-modal-counter-pill');
      const modalDots = document.getElementById('gallery-modal-dots');
      const modalTagBadge = document.getElementById('gallery-modal-tag-badge');
      const modalDate = document.getElementById('gallery-modal-date');
      const modalCloseBtn = document.getElementById('gallery-modal-close-btn');
      const modalCommentsList = document.getElementById('gallery-modal-comments-list');
      const modalLikeBtn = document.getElementById('gallery-modal-like-btn');
      const modalLikeIcon = document.getElementById('gallery-modal-like-icon');
      const modalLikesCount = document.getElementById('gallery-modal-likes-count');
      const modalShareBtn = document.getElementById('gallery-modal-share-btn');
      const modalCommentForm = document.getElementById('gallery-modal-comment-form');
      const modalNameInput = document.getElementById('gallery-modal-name-input');
      const modalTextInput = document.getElementById('gallery-modal-text-input');
      const modalHeartBurst = document.getElementById('gallery-modal-heart-burst');
      const modalImgCol = document.getElementById('gallery-modal-img-col');
      const modalFocusCommentBtn = document.getElementById('gallery-modal-focus-comment-btn');

      let modalActiveSlideIndex = 0;
      let modalActiveMediaList = [];

      // Helper: Filter Posts
      const getFilteredPosts = () => {
        const bp = SiteStore.get();
        const allPosts = (bp.galleryData && bp.galleryData.posts) || DEFAULT_GALLERY_DATA.posts;
        return allPosts.filter(post => {
          // Category filter
          if (activeCategory !== 'all' && post.eventTag !== activeCategory) {
            return false;
          }
          // Search query
          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            const titleMatch = (post.title || '').toLowerCase().includes(q);
            const captionMatch = (post.caption || '').toLowerCase().includes(q);
            const tagMatch = (post.eventTag || '').toLowerCase().includes(q);
            const hashtagMatch = (post.hashtags || []).some(h => h.toLowerCase().includes(q));
            if (!titleMatch && !captionMatch && !tagMatch && !hashtagMatch) {
              return false;
            }
          }
          return true;
        });
      };

      // Helper: Render Active View
      const renderPosts = () => {
        const filtered = getFilteredPosts();
        if (currentView === 'grid') {
          postsContainer.innerHTML = PublicRenderer.generateGalleryExploreGridHtml(filtered);
        } else {
          postsContainer.innerHTML = PublicRenderer.generateGalleryFeedHtml(filtered);
        }
        bindPostEventHandlers();
      };

      // Helper: Render Single Slide inside Modal Carousel
      const renderModalSlide = (targetIdx) => {
        if (!modalActiveMediaList.length) return;
        const total = modalActiveMediaList.length;
        modalActiveSlideIndex = (targetIdx + total) % total;
        const currentItem = modalActiveMediaList[modalActiveSlideIndex];

        if (modalSlidesWrap) {
          if (currentItem.type === 'video') {
            modalSlidesWrap.innerHTML = `
              <video 
                class="gallery-protected-video select-none" 
                src="${currentItem.url}" 
                controls 
                controlsList="nodownload" 
                disablePictureInPicture 
                oncontextmenu="return false;" 
                playsinline
              ></video>
            `;
          } else {
            modalSlidesWrap.innerHTML = `
              <img 
                id="gallery-modal-full-img" 
                class="gallery-modal-full-img select-none" 
                src="${currentItem.url}" 
                alt="ISHMT Gallery Media" 
                draggable="false" 
                oncontextmenu="return false;" 
              />
            `;
          }
        }

        // Counter Pill
        if (modalCounterPill) {
          if (total > 1) {
            modalCounterPill.style.display = 'block';
            modalCounterPill.textContent = `${modalActiveSlideIndex + 1} / ${total}`;
          } else {
            modalCounterPill.style.display = 'none';
          }
        }

        // Navigation Arrows
        if (modalPrevBtn && modalNextBtn) {
          if (total > 1) {
            modalPrevBtn.style.display = 'flex';
            modalNextBtn.style.display = 'flex';
          } else {
            modalPrevBtn.style.display = 'none';
            modalNextBtn.style.display = 'none';
          }
        }

        // Dots
        if (modalDots) {
          if (total > 1) {
            modalDots.style.display = 'flex';
            modalDots.innerHTML = modalActiveMediaList.map((_, i) => `
              <span class="gallery-carousel-dot ${i === modalActiveSlideIndex ? 'active' : ''}" data-modal-goto="${i}"></span>
            `).join('');
          } else {
            modalDots.style.display = 'none';
          }
        }
      };

      // Helper: Open Modal for a Post
      const openModal = (postId) => {
        if (!postModal) return;
        const bp = SiteStore.get();
        const post = (bp.galleryData && bp.galleryData.posts || []).find(p => p.id === postId);
        if (!post) return;

        postModal.setAttribute('data-current-post-id', postId);
        modalActiveMediaList = (post.mediaItems && post.mediaItems.length) ? post.mediaItems : [{ type: 'image', url: post.imageUrl }];
        modalActiveSlideIndex = 0;

        renderModalSlide(0);

        if (modalTagBadge) modalTagBadge.textContent = post.eventTag || 'Chapter Activity';
        if (modalDate) modalDate.textContent = post.date || '';

        // Render Comments List
        if (modalCommentsList) {
          let commentsHtml = `
            <!-- Admin Caption & Tags at Top -->
            <div class="gallery-comment-row" style="border-bottom: 1px solid #F3F4F6; padding-bottom: 0.85rem;">
              <div class="gallery-comment-avatar">IS</div>
              <div class="gallery-comment-content">
                <span class="gallery-comment-author">ishmt_tkmce</span>
                <span class="gallery-comment-text">${PublicRenderer.escapeHtml(post.caption || post.title || '')}</span>
                ${post.hashtags && post.hashtags.length ? `
                  <div style="margin-top: 0.35rem;">
                    ${post.hashtags.map(t => `<span class="gallery-hashtag">${PublicRenderer.escapeHtml(t)}</span>`).join(' ')}
                  </div>
                ` : ''}
                <div class="gallery-comment-time">${PublicRenderer.escapeHtml(post.date || 'Chapter Archive')}</div>
              </div>
            </div>
          `;

          if (post.comments && post.comments.length) {
            commentsHtml += post.comments.map(c => `
              <div class="gallery-comment-row" data-comment-id="${c.id}">
                <div class="gallery-comment-avatar" style="background: #4B5563;">
                  ${PublicRenderer.escapeHtml((c.name || 'U').charAt(0).toUpperCase())}
                </div>
                <div class="gallery-comment-content">
                  <span class="gallery-comment-author">${PublicRenderer.escapeHtml(c.name)}</span>
                  <span class="gallery-comment-text">${PublicRenderer.escapeHtml(c.text)}</span>
                  <div class="gallery-comment-time">${PublicRenderer.escapeHtml(c.timestamp || 'Recently')}</div>
                </div>
              </div>
            `).join('');
          } else {
            commentsHtml += `
              <div id="gallery-no-comments-msg" style="text-align: center; color: #9CA3AF; font-size: 0.85rem; padding: 2rem 0;">
                No comments yet. Be the first to share your thoughts!
              </div>
            `;
          }

          modalCommentsList.innerHTML = commentsHtml;
          modalCommentsList.scrollTop = 0;
        }

        // Like Button State
        updateModalLikeState(post);

        // Show Modal
        postModal.style.display = 'flex';
        requestAnimationFrame(() => postModal.classList.add('open'));

        // Update URL deep link (?post=id)
        try {
          const url = new URL(window.location);
          url.searchParams.set('post', postId);
          window.history.replaceState(null, '', url);
        } catch (_) {}
      };

      // Modal Carousel Navigation Handlers
      if (modalPrevBtn) {
        modalPrevBtn.onclick = (e) => {
          e.stopPropagation();
          renderModalSlide(modalActiveSlideIndex - 1);
        };
      }
      if (modalNextBtn) {
        modalNextBtn.onclick = (e) => {
          e.stopPropagation();
          renderModalSlide(modalActiveSlideIndex + 1);
        };
      }
      if (modalDots) {
        modalDots.onclick = (e) => {
          const dot = e.target.closest('[data-modal-goto]');
          if (!dot) return;
          e.stopPropagation();
          const targetSlide = parseInt(dot.getAttribute('data-modal-goto'), 10);
          renderModalSlide(targetSlide);
        };
      }

      // Helper: Update Modal Like State
      const updateModalLikeState = (post) => {
        if (!post) return;
        if (modalLikesCount) {
          modalLikesCount.textContent = `${post.likes || 0} likes`;
        }
        if (modalLikeBtn && modalLikeIcon) {
          if (post.likedByMe) {
            modalLikeBtn.classList.add('liked');
            modalLikeIcon.setAttribute('fill', '#EF4444');
            modalLikeIcon.setAttribute('stroke', '#EF4444');
          } else {
            modalLikeBtn.classList.remove('liked');
            modalLikeIcon.setAttribute('fill', 'none');
            modalLikeIcon.setAttribute('stroke', 'currentColor');
          }
        }
      };

      // Helper: Close Modal
      const closeModal = () => {
        if (!postModal) return;
        postModal.classList.remove('open');
        setTimeout(() => {
          postModal.style.display = 'none';
          if (modalSlidesWrap) modalSlidesWrap.innerHTML = '';
        }, 200);

        // Clear ?post= from URL
        try {
          const url = new URL(window.location);
          url.searchParams.delete('post');
          window.history.replaceState(null, '', url);
        } catch (_) {}
      };

      // Helper: Toggle Like on a Post (applies to carousel as a whole)
      const toggleLike = (postId, forceHeart = false) => {
        const bp = SiteStore.get();
        if (!bp.galleryData) bp.galleryData = deepClone(DEFAULT_GALLERY_DATA);
        const post = (bp.galleryData.posts || []).find(p => p.id === postId);
        if (!post) return;

        if (forceHeart) {
          if (!post.likedByMe) {
            post.likedByMe = true;
            post.likes = (post.likes || 0) + 1;
          }
        } else {
          if (post.likedByMe) {
            post.likedByMe = false;
            post.likes = Math.max(0, (post.likes || 1) - 1);
          } else {
            post.likedByMe = true;
            post.likes = (post.likes || 0) + 1;
          }
        }

        SiteStore.save(bp);

        // Update Modal if open
        if (postModal && postModal.getAttribute('data-current-post-id') === postId) {
          updateModalLikeState(post);
        }

        // Update Grid Item if exists
        const gridLikeVal = document.getElementById(`grid-like-val-${postId}`);
        if (gridLikeVal) gridLikeVal.textContent = post.likes || 0;

        // Update Feed Item if exists
        const feedLikes = document.getElementById(`feed-likes-${postId}`);
        if (feedLikes) feedLikes.textContent = `${post.likes || 0} likes`;
        const feedLikeIcon = document.getElementById(`feed-like-icon-${postId}`);
        const feedLikeBtn = gallerySec.querySelector(`.feed-like-btn[data-post-id="${postId}"]`);
        if (feedLikeBtn && feedLikeIcon) {
          if (post.likedByMe) {
            feedLikeBtn.classList.add('liked');
            feedLikeIcon.setAttribute('fill', '#EF4444');
            feedLikeIcon.setAttribute('stroke', '#EF4444');
          } else {
            feedLikeBtn.classList.remove('liked');
            feedLikeIcon.setAttribute('fill', 'none');
            feedLikeIcon.setAttribute('stroke', 'currentColor');
          }
        }
      };

      // Helper: Trigger Floating Heart Burst
      const triggerHeartBurst = (containerEl, burstEl) => {
        if (!burstEl) return;
        burstEl.classList.remove('animate');
        void burstEl.offsetWidth; // force reflow
        burstEl.classList.add('animate');
        setTimeout(() => burstEl.classList.remove('animate'), 900);
      };

      // Helper: Share Post
      const sharePost = (postId) => {
        const bp = SiteStore.get();
        const post = (bp.galleryData && bp.galleryData.posts || []).find(p => p.id === postId);
        const title = (post && post.title) || 'ISHMT Chapter Moment';
        const urlObj = new URL(window.location);
        urlObj.searchParams.set('post', postId);
        const shareUrl = urlObj.toString();

        if (navigator.share) {
          navigator.share({
            title: `ISHMT TKMCE - ${title}`,
            text: (post && post.caption) || 'Check out this moment from ISHMT TKMCE Student Chapter!',
            url: shareUrl
          }).catch(() => {
            copyShareUrl(shareUrl);
          });
        } else {
          copyShareUrl(shareUrl);
        }
      };

      const copyShareUrl = (url) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            App.showToast('Post link copied to clipboard!');
          }).catch(() => {
            App.showToast('Share Link: ' + url);
          });
        } else {
          App.showToast('Share Link: ' + url);
        }
      };

      // Helper: Bind Dynamic Event Handlers in Posts Container
      const bindPostEventHandlers = () => {
        // Grid Card Clicks
        const gridCards = postsContainer.querySelectorAll('.gallery-grid-card');
        gridCards.forEach(card => {
          card.addEventListener('click', (e) => {
            const postId = card.getAttribute('data-post-id');
            if (postId) openModal(postId);
          });
        });

        // Feed Double-Click Heart
        const feedImgWraps = postsContainer.querySelectorAll('.gallery-feed-image-wrap');
        feedImgWraps.forEach(wrap => {
          let lastTap = 0;
          const postId = wrap.getAttribute('data-feed-img-id');
          const heartBurst = wrap.querySelector('.gallery-heart-burst');

          // Double Click on Desktop
          wrap.addEventListener('dblclick', (e) => {
            e.preventDefault();
            triggerHeartBurst(wrap, heartBurst);
            toggleLike(postId, true);
          });

          // Double Tap on Mobile Touch
          wrap.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 300 && tapLength > 0) {
              e.preventDefault();
              triggerHeartBurst(wrap, heartBurst);
              toggleLike(postId, true);
            }
            lastTap = currentTime;
          });
        });

        // Feed Carousel Navigation (Arrows & Dots)
        const feedPrevBtns = postsContainer.querySelectorAll('.feed-arrow-prev');
        feedPrevBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const postId = btn.getAttribute('data-post-id');
            stepFeedSlide(postId, -1);
          });
        });

        const feedNextBtns = postsContainer.querySelectorAll('.feed-arrow-next');
        feedNextBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const postId = btn.getAttribute('data-post-id');
            stepFeedSlide(postId, 1);
          });
        });

        const stepFeedSlide = (postId, direction) => {
          const wrap = postsContainer.querySelector(`.gallery-feed-image-wrap[data-feed-img-id="${postId}"]`);
          if (!wrap) return;
          const total = parseInt(wrap.getAttribute('data-total-slides') || '1', 10);
          let current = parseInt(wrap.getAttribute('data-feed-slide-index') || '0', 10);
          const next = (current + direction + total) % total;

          wrap.setAttribute('data-feed-slide-index', next);
          const slides = wrap.querySelectorAll('.gallery-carousel-slide');
          slides.forEach((sl, idx) => {
            if (idx === next) sl.classList.add('active');
            else sl.classList.remove('active');
          });

          const counter = wrap.querySelector(`#feed-counter-${postId}`);
          if (counter) counter.textContent = `${next + 1} / ${total}`;

          const dots = wrap.querySelectorAll('.gallery-carousel-dot');
          dots.forEach((d, idx) => {
            if (idx === next) d.classList.add('active');
            else d.classList.remove('active');
          });
        };

        // Feed Action Buttons
        const feedLikeBtns = postsContainer.querySelectorAll('.feed-like-btn');
        feedLikeBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const postId = btn.getAttribute('data-post-id');
            if (postId) toggleLike(postId);
          });
        });

        const feedCommentOpenBtns = postsContainer.querySelectorAll('.feed-comment-open-btn');
        feedCommentOpenBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const postId = btn.getAttribute('data-post-id');
            if (postId) openModal(postId);
          });
        });

        const feedShareBtns = postsContainer.querySelectorAll('.feed-share-btn');
        feedShareBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const postId = btn.getAttribute('data-post-id');
            if (postId) sharePost(postId);
          });
        });

        // Feed Inline Quick Comment Forms
        const feedCommentForms = postsContainer.querySelectorAll('.feed-quick-comment-form');
        feedCommentForms.forEach(form => {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            const postId = form.getAttribute('data-post-id');
            const nameInput = form.querySelector('.feed-quick-name');
            const textInput = form.querySelector('.feed-quick-text');
            const name = (nameInput && nameInput.value.trim()) || 'Visitor';
            const text = (textInput && textInput.value.trim()) || '';

            if (!text) return;
            addCommentToPost(postId, name, text);
            form.reset();
            App.showToast('Comment posted!');
          });
        });
      };

      // Helper: Append Comment to Store
      const addCommentToPost = (postId, name, text) => {
        const bp = SiteStore.get();
        if (!bp.galleryData) bp.galleryData = deepClone(DEFAULT_GALLERY_DATA);
        const post = (bp.galleryData.posts || []).find(p => p.id === postId);
        if (!post) return;

        if (!post.comments) post.comments = [];
        const newComment = {
          id: 'c-' + Date.now(),
          name: name.slice(0, 40),
          text: text.slice(0, 240),
          timestamp: 'Just now'
        };
        post.comments.push(newComment);
        SiteStore.save(bp);

        // Update Modal if open
        if (postModal && postModal.getAttribute('data-current-post-id') === postId && modalCommentsList) {
          const noMsg = modalCommentsList.querySelector('#gallery-no-comments-msg');
          if (noMsg) noMsg.remove();

          const commentEl = document.createElement('div');
          commentEl.className = 'gallery-comment-row';
          commentEl.setAttribute('data-comment-id', newComment.id);
          commentEl.innerHTML = `
            <div class="gallery-comment-avatar" style="background: #4B5563;">
              ${PublicRenderer.escapeHtml((newComment.name || 'U').charAt(0).toUpperCase())}
            </div>
            <div class="gallery-comment-content">
              <span class="gallery-comment-author">${PublicRenderer.escapeHtml(newComment.name)}</span>
              <span class="gallery-comment-text">${PublicRenderer.escapeHtml(newComment.text)}</span>
              <div class="gallery-comment-time">Just now</div>
            </div>
          `;
          modalCommentsList.appendChild(commentEl);
          modalCommentsList.scrollTop = modalCommentsList.scrollHeight;
        }

        // Update comment counter in grid
        const gridCommentVal = document.getElementById(`grid-comment-val-${postId}`);
        if (gridCommentVal) gridCommentVal.textContent = post.comments.length;
      };

      // View Switcher Handlers
      if (gridBtn && feedBtn) {
        gridBtn.addEventListener('click', () => {
          currentView = 'grid';
          gridBtn.classList.add('active');
          feedBtn.classList.remove('active');
          renderPosts();
        });

        feedBtn.addEventListener('click', () => {
          currentView = 'feed';
          feedBtn.classList.add('active');
          gridBtn.classList.remove('active');
          renderPosts();
        });
      }

      // Search Handlers
      if (searchInput) {
        searchInput.addEventListener('input', () => {
          searchQuery = searchInput.value;
          if (searchClear) {
            searchClear.style.display = searchQuery ? 'flex' : 'none';
          }
          renderPosts();
        });
      }

      if (searchClear && searchInput) {
        searchClear.addEventListener('click', () => {
          searchInput.value = '';
          searchQuery = '';
          searchClear.style.display = 'none';
          searchInput.focus();
          renderPosts();
        });
      }

      // Category Pill Handlers
      categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
          categoryPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          activeCategory = pill.getAttribute('data-category') || 'all';
          renderPosts();
        });
      });

      // Modal Global Handlers
      if (postModal) {
        // Close Button
        if (modalCloseBtn) {
          modalCloseBtn.addEventListener('click', closeModal);
        }

        // Backdrop Click Closes Modal
        postModal.addEventListener('click', (e) => {
          if (e.target === postModal) closeModal();
        });

        // Double-Click Heart on Left Modal Image Column
        if (modalImgCol && modalHeartBurst) {
          let lastModalTap = 0;
          modalImgCol.addEventListener('dblclick', (e) => {
            e.preventDefault();
            const postId = postModal.getAttribute('data-current-post-id');
            if (postId) {
              triggerHeartBurst(modalImgCol, modalHeartBurst);
              toggleLike(postId, true);
            }
          });

          modalImgCol.addEventListener('touchend', (e) => {
            const curTime = new Date().getTime();
            const tapGap = curTime - lastModalTap;
            if (tapGap < 300 && tapGap > 0) {
              e.preventDefault();
              const postId = postModal.getAttribute('data-current-post-id');
              if (postId) {
                triggerHeartBurst(modalImgCol, modalHeartBurst);
                toggleLike(postId, true);
              }
            }
            lastModalTap = curTime;
          });
        }

        // Modal Swipe Gestures on Mobile
        if (modalImgCol) {
          let touchStartX = 0;
          modalImgCol.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches[0]) {
              touchStartX = e.touches[0].clientX;
            }
          }, { passive: true });

          modalImgCol.addEventListener('touchend', (e) => {
            if (e.changedTouches && e.changedTouches[0]) {
              const touchEndX = e.changedTouches[0].clientX;
              const diffX = touchEndX - touchStartX;
              if (diffX > 50) {
                // Swipe Right -> Prev
                renderModalSlide(modalActiveSlideIndex - 1);
              } else if (diffX < -50) {
                // Swipe Left -> Next
                renderModalSlide(modalActiveSlideIndex + 1);
              }
            }
          }, { passive: true });
        }

        // Modal Like Button
        if (modalLikeBtn) {
          modalLikeBtn.addEventListener('click', () => {
            const postId = postModal.getAttribute('data-current-post-id');
            if (postId) toggleLike(postId);
          });
        }

        // Modal Focus Comment Button
        if (modalFocusCommentBtn && modalTextInput) {
          modalFocusCommentBtn.addEventListener('click', () => {
            modalTextInput.focus();
          });
        }

        // Modal Share Button
        if (modalShareBtn) {
          modalShareBtn.addEventListener('click', () => {
            const postId = postModal.getAttribute('data-current-post-id');
            if (postId) sharePost(postId);
          });
        }

        // Modal Comment Form Submit
        if (modalCommentForm) {
          modalCommentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const postId = postModal.getAttribute('data-current-post-id');
            const name = (modalNameInput && modalNameInput.value.trim()) || 'Visitor';
            const text = (modalTextInput && modalTextInput.value.trim()) || '';

            if (!text || !postId) return;
            addCommentToPost(postId, name, text);
            if (modalTextInput) modalTextInput.value = '';
            App.showToast('Comment posted!');
          });
        }

        // Escape Key Closes Modal
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && postModal.classList.contains('open')) {
            closeModal();
          }
        });
      }

      // Initial binding of event handlers
      bindPostEventHandlers();

      // Deep link support: Check URL for ?post=[id] (both in window.location.search and hash query)
      try {
        const urlParams = new URLSearchParams(window.location.search);
        let deepPostId = urlParams.get('post');
        if (!deepPostId && window.location.hash.includes('?')) {
          const hashQuery = window.location.hash.split('?')[1];
          const hashParams = new URLSearchParams(hashQuery);
          deepPostId = hashParams.get('post');
        }
        if (deepPostId) {
          setTimeout(() => openModal(deepPostId), 350);
        }
      } catch (_) {}

      // =========================================================================
      // ADMIN PANEL INTERACTIVITY (Strict Single-Post Carousel Uploader with 1-10 Limit)
      // =========================================================================
      const adminPanel = gallerySec.querySelector('#gallery-admin-panel');
      if (adminPanel) {
        const dropzone = adminPanel.querySelector('#gallery-upload-dropzone');
        const fileInput = adminPanel.querySelector('#gallery-file-input');
        const previewsContainer = adminPanel.querySelector('#gallery-batch-previews-container');
        const submitBatchBtn = adminPanel.querySelector('#gallery-submit-batch-btn');
        const uploadStatus = adminPanel.querySelector('#gallery-upload-status');
        const stagedCountEl = adminPanel.querySelector('#gallery-staged-count');
        const newTagSelect = adminPanel.querySelector('#gallery-new-tag');
        const newDateInput = adminPanel.querySelector('#gallery-new-date');
        const newCaptionInput = adminPanel.querySelector('#gallery-new-caption');
        const newHashtagsInput = adminPanel.querySelector('#gallery-new-hashtags');

        if (dropzone && fileInput) {
          dropzone.addEventListener('click', () => {
            if (stagedGalleryMedia.length >= 10) {
              alert('Maximum 10 media items reached for this single carousel post.');
              return;
            }
            fileInput.click();
          });

          dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
          });

          dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
          });

          dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files && e.dataTransfer.files.length) {
              handleCarouselFiles(Array.from(e.dataTransfer.files));
            }
          });

          fileInput.addEventListener('change', () => {
            if (fileInput.files && fileInput.files.length) {
              handleCarouselFiles(Array.from(fileInput.files));
            }
          });
        }

        const handleCarouselFiles = async (files) => {
          if (!uploadStatus) return;
          const remainingSlots = 10 - stagedGalleryMedia.length;
          if (remainingSlots <= 0) {
            alert('A single post can hold a maximum of 10 photos or videos.');
            return;
          }

          const filesToProcess = files.slice(0, remainingSlots);
          if (files.length > remainingSlots) {
            App.showToast(`Notice: Limited to 10 slides per post (${filesToProcess.length} queued).`);
          }

          uploadStatus.textContent = `Processing and sanitizing ${filesToProcess.length} slide(s)...`;

          for (const file of filesToProcess) {
            try {
              const processedItem = await PublicRenderer.processAndSanitizeGalleryMedia(file);
              stagedGalleryMedia.push({
                id: 'media-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
                type: processedItem.type,
                url: processedItem.url,
                name: processedItem.name
              });
            } catch (err) {
              console.warn('Media upload error:', err);
            }
          }

          uploadStatus.textContent = `${stagedGalleryMedia.length} / 10 slide(s) attached to this single post.`;
          renderCarouselThumbnails();
        };

        const renderCarouselThumbnails = () => {
          if (stagedCountEl) stagedCountEl.textContent = stagedGalleryMedia.length;

          if (!previewsContainer) return;
          if (!stagedGalleryMedia.length) {
            previewsContainer.style.display = 'none';
            previewsContainer.innerHTML = '';
            return;
          }

          previewsContainer.style.display = 'grid';
          previewsContainer.innerHTML = stagedGalleryMedia.map((item, idx) => `
            <div class="admin-carousel-item ${idx === 0 ? 'is-cover' : ''}" data-index="${idx}">
              ${item.type === 'video' ? `
                <video class="admin-carousel-thumb" src="${item.url}" muted></video>
                <span class="gallery-carousel-badge" style="position: absolute; top: 4px; left: 4px; font-size: 0.62rem; padding: 0.1rem 0.35rem;">🎥 Video</span>
              ` : `
                <img src="${item.url}" alt="slide ${idx + 1}" class="admin-carousel-thumb" />
              `}
              <span class="admin-carousel-order-badge">
                ${idx === 0 ? '★ Slide 1 (Cover)' : `Slide ${idx + 1}`}
              </span>
              <div class="admin-carousel-item-actions">
                ${idx > 0 ? `<button type="button" class="admin-carousel-action-btn action-move-left" data-move-idx="${idx}" title="Move slide left">&#9664;</button>` : ''}
                ${idx < stagedGalleryMedia.length - 1 ? `<button type="button" class="admin-carousel-action-btn action-move-right" data-move-idx="${idx}" title="Move slide right">&#9654;</button>` : ''}
                <button type="button" class="admin-carousel-action-btn action-remove" data-remove-idx="${idx}" title="Remove slide">&times;</button>
              </div>
            </div>
          `).join('');

          // Bind reorder & remove handlers
          previewsContainer.querySelectorAll('.action-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              const idx = parseInt(btn.getAttribute('data-remove-idx'), 10);
              stagedGalleryMedia.splice(idx, 1);
              renderCarouselThumbnails();
            });
          });

          previewsContainer.querySelectorAll('.action-move-left').forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              const idx = parseInt(btn.getAttribute('data-move-idx'), 10);
              if (idx > 0) {
                const temp = stagedGalleryMedia[idx - 1];
                stagedGalleryMedia[idx - 1] = stagedGalleryMedia[idx];
                stagedGalleryMedia[idx] = temp;
                renderCarouselThumbnails();
              }
            });
          });

          previewsContainer.querySelectorAll('.action-move-right').forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              const idx = parseInt(btn.getAttribute('data-move-idx'), 10);
              if (idx < stagedGalleryMedia.length - 1) {
                const temp = stagedGalleryMedia[idx + 1];
                stagedGalleryMedia[idx + 1] = stagedGalleryMedia[idx];
                stagedGalleryMedia[idx] = temp;
                renderCarouselThumbnails();
              }
            });
          });
        };

        // Submit Form: Group ALL staged media into ONE single post
        if (submitBatchBtn) {
          submitBatchBtn.addEventListener('click', () => {
            const caption = (newCaptionInput && newCaptionInput.value.trim()) || '';
            const tag = (newTagSelect && newTagSelect.value) || 'Workshops';
            const dateStr = (newDateInput && newDateInput.value.trim()) || 'October 2026';
            const rawHashtags = (newHashtagsInput && newHashtagsInput.value.trim()) || '';

            if (!stagedGalleryMedia.length) {
              alert('Please select at least 1 photo or video (up to 10) to create a carousel post.');
              return;
            }
            if (!caption) {
              alert('Please provide a photo or carousel caption.');
              if (newCaptionInput) newCaptionInput.focus();
              return;
            }

            // Parse hashtags
            const hashtags = rawHashtags
              .split(/[\s,]+/)
              .filter(Boolean)
              .map(t => t.startsWith('#') ? t : `#${t}`);

            const bp = SiteStore.get();
            if (!bp.galleryData) bp.galleryData = deepClone(DEFAULT_GALLERY_DATA);
            if (!bp.galleryData.posts) bp.galleryData.posts = [];

            // Create ONE single gallery post containing all 1 to 10 media slides
            const newPost = {
              id: 'post-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
              title: caption.slice(0, 80),
              caption: caption,
              eventTag: tag,
              hashtags: hashtags,
              imageUrl: stagedGalleryMedia[0].url,
              mediaItems: stagedGalleryMedia.map(m => ({
                type: m.type,
                url: m.url,
                name: m.name || ''
              })),
              date: dateStr,
              likes: 0,
              likedByMe: false,
              comments: []
            };

            bp.galleryData.posts.unshift(newPost);
            SiteStore.save(bp);
            App.showToast(`Published 1 single carousel post with ${stagedGalleryMedia.length} slide(s)!`);

            // Reset form
            stagedGalleryMedia = [];
            renderCarouselThumbnails();
            if (newCaptionInput) newCaptionInput.value = '';
            if (uploadStatus) uploadStatus.textContent = '';
            if (fileInput) fileInput.value = '';

            // Refresh UI
            PublicRenderer.refreshGallerySection(contentEl);
          });
        }

        // Moderation Table Delegated Actions (Moderate / Delete)
        adminPanel.addEventListener('click', (e) => {
          const viewBtn = e.target.closest('.gallery-admin-view-btn');
          const delBtn = e.target.closest('.gallery-admin-del-btn');

          if (viewBtn) {
            const postId = viewBtn.getAttribute('data-post-id');
            if (postId) openModal(postId);
            return;
          }

          if (delBtn) {
            const postId = delBtn.getAttribute('data-post-id');
            if (!postId) return;

            const bp = SiteStore.get();
            if (bp.galleryData && Array.isArray(bp.galleryData.posts)) {
              const postIndex = bp.galleryData.posts.findIndex(p => p.id === postId);
              if (postIndex === -1) return;

              const deletedPost = bp.galleryData.posts[postIndex];

              // Delete immediately without any blocking confirm() popup
              bp.galleryData.posts.splice(postIndex, 1);
              SiteStore.save(bp);
              PublicRenderer.refreshGallerySection(contentEl);

              const undoRestore = () => {
                const curBp = SiteStore.get();
                if (!curBp.galleryData) curBp.galleryData = deepClone(DEFAULT_GALLERY_DATA);
                if (!Array.isArray(curBp.galleryData.posts)) curBp.galleryData.posts = [];
                curBp.galleryData.posts.splice(postIndex, 0, deletedPost);
                SiteStore.save(curBp);
                PublicRenderer.refreshGallerySection(contentEl);
              };

              UndoManager.push({
                description: `Gallery Post "${deletedPost.title || deletedPost.id}"`,
                undo: undoRestore
              });

              App.showToast(`Deleted gallery post.`, undoRestore);
            }
          }
        });
      }
    },

    refreshGallerySection(contentEl) {
      if (!contentEl) return;
      const bp = SiteStore.get();
      const posts = (bp.galleryData && bp.galleryData.posts) || DEFAULT_GALLERY_DATA.posts;

      // Update Moderation Table
      const tbody = contentEl.querySelector('#gallery-moderation-tbody');
      if (tbody) {
        tbody.innerHTML = this.generateGalleryModerationRowsHtml(posts);
      }
      const countEl = contentEl.querySelector('#gallery-admin-count');
      if (countEl) countEl.textContent = posts.length;

      // Update Posts Container
      const postsContainer = contentEl.querySelector('#gallery-posts-container');
      const activeViewBtn = contentEl.querySelector('.gallery-view-btn.active');
      const currentView = (activeViewBtn && activeViewBtn.getAttribute('data-view')) || 'grid';

      if (postsContainer) {
        if (currentView === 'grid') {
          postsContainer.innerHTML = this.generateGalleryExploreGridHtml(posts);
        } else {
          postsContainer.innerHTML = this.generateGalleryFeedHtml(posts);
        }
      }

      // Re-init interactivity
      this.initAcademicGalleryInteractivity(contentEl);
    },

    generateHomeAnnouncementBarHtml() {
      return `
        <!-- AUTOMATED LIVE EVENT ANNOUNCEMENT BAR -->
        <aside id="home-live-announcement-bar" class="home-announcement-bar" style="display: none;" aria-label="Live Event Registration Announcement">
          <div class="announcement-inner">
            <div class="announcement-badge">
              <span class="announcement-pulse-dot"></span>
              <span class="announcement-badge-text">LIVE REGISTRATION</span>
            </div>
            <div class="announcement-headline" id="announcement-headline">
              <!-- Populated dynamically from events database -->
            </div>
            <div class="announcement-actions">
              <a href="#/events" id="announcement-cta-btn" class="announcement-cta-pill" title="Register for this event">
                <span>Register Now</span>
                <span class="announcement-arrow">&rarr;</span>
              </a>
              <button type="button" id="announcement-dismiss-btn" class="announcement-dismiss-btn" aria-label="Dismiss announcement for this session" title="Dismiss announcement">&times;</button>
            </div>
          </div>
        </aside>
      `;
    },

    initAcademicHomeInteractivity(contentEl) {
      if (!contentEl) return;

      // 1. About Us Button Smooth Scroll
      const aboutBtn = contentEl.querySelector('#academic-about-btn');
      if (aboutBtn) {
        aboutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const aboutSection = document.getElementById('about-us') || document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            if (window.history && window.history.pushState) {
              window.history.pushState(null, null, '#about-us');
            }
          }
        });
      }

      // 2. Automated Live Event Announcement Bar
      const announcementBar = contentEl.querySelector('#home-live-announcement-bar');
      if (announcementBar) {
        // Clear any prior interval
        if (window.__ishmt_announcement_timer) {
          clearInterval(window.__ishmt_announcement_timer);
          window.__ishmt_announcement_timer = null;
        }

        const isDismissed = sessionStorage.getItem('ishmt_announcement_dismissed') === 'true';
        if (isDismissed) {
          announcementBar.style.display = 'none';
          return;
        }

        const blueprint = SiteStore.get();
        const eventsObj = (blueprint && blueprint.eventsData) || DEFAULT_EVENTS_DATA;
        const events = (eventsObj && Array.isArray(eventsObj.events)) ? eventsObj.events : (DEFAULT_EVENTS_DATA.events || []);

        const now = Date.now();
        // Filter active upcoming events where deadline or event date has not passed
        const activeUpcoming = events.filter(e => {
          if ((e.status || 'Upcoming') !== 'Upcoming') return false;
          const targetTime = e.deadline ? new Date(e.deadline).getTime() : (e.dateTime ? new Date(e.dateTime).getTime() : 0);
          return targetTime > now;
        });

        // Sort by nearest upcoming deadline
        activeUpcoming.sort((a, b) => {
          const tA = a.deadline ? new Date(a.deadline).getTime() : new Date(a.dateTime).getTime();
          const tB = b.deadline ? new Date(b.deadline).getTime() : new Date(b.dateTime).getTime();
          return tA - tB;
        });

        if (activeUpcoming.length === 0) {
          announcementBar.style.display = 'none';
          return;
        }

        const headlineEl = announcementBar.querySelector('#announcement-headline');
        const ctaBtn = announcementBar.querySelector('#announcement-cta-btn');
        const dismissBtn = announcementBar.querySelector('#announcement-dismiss-btn');

        let currentIndex = 0;

        const updateAnnouncementDisplay = (idx) => {
          const evt = activeUpcoming[idx];
          if (!evt) return;

          const category = evt.category || 'Workshop';
          const deadlineStr = evt.deadline ? PublicRenderer.formatEventDate(evt.deadline) : PublicRenderer.formatEventDate(evt.dateTime);

          if (headlineEl) {
            headlineEl.style.opacity = '0';
            headlineEl.style.transform = 'translateY(-4px)';
            setTimeout(() => {
              headlineEl.innerHTML = `Upcoming <strong>${PublicRenderer.escapeHtml(category)}</strong>: <strong>${PublicRenderer.escapeHtml(evt.title)}</strong> &mdash; Last Date to Register: <span class="announcement-deadline-tag">${PublicRenderer.escapeHtml(deadlineStr)}</span>`;
              headlineEl.style.opacity = '1';
              headlineEl.style.transform = 'translateY(0)';
            }, 180);
          }

          if (ctaBtn) {
            if (evt.registrationLink) {
              ctaBtn.href = evt.registrationLink;
              ctaBtn.target = '_blank';
              ctaBtn.rel = 'noopener noreferrer';
            } else {
              ctaBtn.href = `#/events`;
              ctaBtn.removeAttribute('target');
              ctaBtn.removeAttribute('rel');
            }
          }
        };

        // Initial render
        updateAnnouncementDisplay(0);
        announcementBar.style.display = 'block';

        // Rotate through events every 5 seconds if multiple upcoming exist
        if (activeUpcoming.length > 1) {
          window.__ishmt_announcement_timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % activeUpcoming.length;
            updateAnnouncementDisplay(currentIndex);
          }, 5000);
        }

        // Dismiss action
        if (dismissBtn) {
          dismissBtn.addEventListener('click', () => {
            announcementBar.style.display = 'none';
            sessionStorage.setItem('ishmt_announcement_dismissed', 'true');
            if (window.__ishmt_announcement_timer) {
              clearInterval(window.__ishmt_announcement_timer);
              window.__ishmt_announcement_timer = null;
            }
          });
        }
      }
    },

    generateAcademicHomeHtml(isAdminMode = false) {
      const blueprint = SiteStore.get();
      const home = blueprint.homeData || DEFAULT_HOME_DATA;

      return `
        <div class="academic-home-wrapper">
          <!-- TOP LIVE EVENT ANNOUNCEMENT BAR (AUTOMATIC DATA BINDING) -->
          ${this.generateHomeAnnouncementBarHtml()}

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

              <!-- CTA Buttons Row (Directly Beneath Main Heading) -->
              <div class="academic-cta-row">
                <a href="${home.primaryBtnUrl}" target="_blank" rel="noopener noreferrer" class="academic-btn-primary">
                  <span ${isAdminMode ? 'data-edit-path="homeData.primaryBtnText" title="Click to edit button label"' : ''}>${this.escapeHtml(home.primaryBtnText || 'Become a Member')}</span>
                  <span class="academic-arrow-symbol" aria-hidden="true">→</span>
                </a>
                <a href="#about-us" class="academic-btn-outline" id="academic-about-btn" ${isAdminMode ? 'data-edit-path="homeData.secondaryBtnText" title="Click to edit button label"' : ''}>
                  ${this.escapeHtml(home.secondaryBtnText || 'About Us')}
                </a>
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

          <!-- SECTION C: DEDICATED ABOUT US SECTION (EDITORIAL CONTAINER) -->
          <section id="about-us" class="academic-about-section">
            <div class="academic-about-container">
              <h2 class="academic-about-heading" ${isAdminMode ? 'data-edit-path="homeData.aboutHeading" title="Click to edit heading"' : ''}>${this.escapeHtml(home.aboutHeading || 'About Our Chapter')}</h2>
              <div class="academic-about-divider"></div>
              <div class="academic-about-text">
                <p class="academic-about-body" ${isAdminMode ? 'data-edit-path="homeData.aboutIntro" title="Click to edit intro paragraph"' : ''}>
                  ${this.escapeHtml(home.aboutIntro || "We warmly welcome students, faculty, researchers, and engineering innovators to the Indian Society for Heat and Mass Transfer (ISHMT-RCT) Students Chapter at Thangal Kunju Musaliar College of Engineering, Kollam. Anchored in the Department of Mechanical Engineering, our chapter is your community to explore thermal sciences, energy transition, and computational fluid dynamics through hands-on workshops, lab research, and national academic collaborations.")}
                </p>
                ${home.aboutP1 ? `
                  <p class="academic-about-subtext" ${isAdminMode ? 'data-edit-path="homeData.aboutP1" title="Click to edit paragraph"' : ''}>${this.escapeHtml(home.aboutP1)}</p>
                ` : ''}
                ${home.aboutP2 ? `
                  <p class="academic-about-subtext" ${isAdminMode ? 'data-edit-path="homeData.aboutP2" title="Click to edit paragraph"' : ''}>${this.escapeHtml(home.aboutP2)}</p>
                ` : ''}
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

    formatEventDate(dtStr) {
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
    },

    buildGoogleCalendarUrl(event) {
      if (!event || !event.dateTime) return '#';
      try {
        const startDt = new Date(event.dateTime);
        if (isNaN(startDt.getTime())) return '#';
        const endDt = new Date(startDt.getTime() + 2 * 60 * 60 * 1000);
        const toIsoClean = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
        const dates = `${toIsoClean(startDt)}/${toIsoClean(endDt)}`;
        const title = encodeURIComponent(event.title || 'ISHMT Event');
        const details = encodeURIComponent(event.description || '');
        const location = encodeURIComponent(event.venue || 'TKMCE');
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
      } catch (e) {
        return '#';
      }
    },

    processAndSanitizePoster(file, callback) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          // 16:9 aspect ratio, max-width 1280px
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

          // Export as compressed .webp data URL (strips all EXIF/GPS metadata)
          const webpDataUrl = canvas.toDataURL('image/webp', 0.88);
          if (typeof callback === 'function') {
            callback(webpDataUrl);
          }
        };
        img.onerror = () => {
          console.error('Failed to load image for sanitization.');
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    generateAcademicEventsHtml(isAdminMode = false) {
      const isAdmin = isAdminMode || AuthService.isAuthenticated();
      const blueprint = SiteStore.get();
      const eventsObj = (blueprint && blueprint.eventsData) || DEFAULT_EVENTS_DATA;
      const events = (eventsObj && Array.isArray(eventsObj.events)) ? eventsObj.events : (DEFAULT_EVENTS_DATA.events || []);

      const upcomingCount = events.filter(e => (e.status || 'Upcoming') === 'Upcoming').length;
      const completedCount = events.filter(e => (e.status || 'Upcoming') === 'Completed').length;

      return `
        <div class="events-page-wrap">
          <!-- HERO BANNER -->
          <section class="events-hero-section">
            <div class="events-hero-container">
              <div class="events-hero-eyebrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>ISHMT-TKMCE Student Chapter</span>
              </div>
              <h1 class="events-hero-title">Events &amp; Workshops</h1>
              <p class="events-hero-desc">Explore our flagship technical conferences, national webinars, computational fluid dynamics masterclasses, and thermal engineering symposia.</p>
            </div>
          </section>

          <!-- PART 1: ADMIN-ONLY EVENT MANAGEMENT INTERFACE -->
          ${isAdmin ? this.generateEventsAdminPanelHtml(events) : ''}

          <!-- PART 2: PUBLIC TABBED DISPLAY SECTION -->
          <section class="events-public-section">
            <!-- TABS -->
            <div class="events-tabs-container">
              <button type="button" class="events-tab-pill active" data-event-tab="upcoming">
                <span>Upcoming Events</span>
                <span class="events-tab-badge" id="badge-upcoming-count">${upcomingCount}</span>
              </button>
              <button type="button" class="events-tab-pill" data-event-tab="completed">
                <span>Past Events</span>
                <span class="events-tab-badge" id="badge-completed-count">${completedCount}</span>
              </button>
            </div>

            <!-- CARDS GRID -->
            <div id="events-grid-container" class="events-cards-grid">
              ${this.generateEventCardsListHtml(events, 'upcoming')}
            </div>
          </section>
        </div>
      `;
    },

    generateLinkedGalleryPostOptionsHtml(selectedId = '') {
      const blueprint = SiteStore.get();
      const galleryObj = (blueprint && blueprint.galleryData) || DEFAULT_GALLERY_DATA;
      const posts = (galleryObj && Array.isArray(galleryObj.posts)) ? galleryObj.posts : (DEFAULT_GALLERY_DATA.posts || []);
      return posts.map(p => {
        const isVid = (p.mediaItems && p.mediaItems.some(m => m.type === 'video')) || p.isVideo;
        const typeLabel = isVid ? '🎥 Video' : '📷 Photos';
        const postTitle = p.title || p.caption || ('Post ' + p.id);
        const shortTitle = postTitle.length > 50 ? postTitle.slice(0, 47) + '...' : postTitle;
        const isSelected = selectedId && selectedId === p.id ? 'selected' : '';
        return `<option value="${p.id}" ${isSelected}>[${typeLabel}] ${this.escapeHtml(shortTitle)} (ID: ${p.id})</option>`;
      }).join('');
    },

    generateEventsAdminPanelHtml(events) {
      return `
        <div class="events-admin-panel" id="events-admin-dashboard">
          <div class="events-admin-card">
            <div class="events-admin-header">
              <div class="events-admin-header-left">
                <span class="events-admin-badge">Admin Only</span>
                <h2 class="events-admin-title">Event Management Dashboard</h2>
              </div>
              <span style="font-size: 0.82rem; opacity: 0.85;">Strip EXIF • 16:9 WebP Auto-Sanitize</span>
            </div>

            <div class="events-admin-body">
              <form id="admin-event-form">
                <input type="hidden" id="admin-event-edit-id" value="" />
                <input type="hidden" id="admin-event-poster-data" value="" />

                <div class="events-form-grid">
                  <div class="events-form-field col-span-2">
                    <label class="events-form-label" for="admin-event-title">Event Title *</label>
                    <input type="text" id="admin-event-title" class="events-form-input" placeholder="e.g. Masterclass on Computational Heat &amp; Fluid Mechanics" required />
                  </div>

                  <div class="events-form-field">
                    <label class="events-form-label" for="admin-event-category">Event Category *</label>
                    <select id="admin-event-category" class="events-form-select">
                      <option value="Workshop">Workshop</option>
                      <option value="Webinar">Webinar</option>
                      <option value="Conference">Conference</option>
                      <option value="Inauguration">Inauguration</option>
                    </select>
                  </div>

                  <div class="events-form-field">
                    <label class="events-form-label" for="admin-event-datetime">Date &amp; Time *</label>
                    <input type="datetime-local" id="admin-event-datetime" class="events-form-input" required />
                  </div>

                  <div class="events-form-field">
                    <label class="events-form-label" for="admin-event-venue">Venue / Platform *</label>
                    <input type="text" id="admin-event-venue" class="events-form-input" placeholder="e.g. Seminar Hall or Google Meet" required />
                  </div>

                  <div class="events-form-field">
                    <label class="events-form-label" for="admin-event-status">Event Status *</label>
                    <select id="admin-event-status" class="events-form-select">
                      <option value="Upcoming">Upcoming</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div class="events-form-field">
                    <label class="events-form-label" for="admin-event-deadline">Registration Last Date / Deadline</label>
                    <input type="date" id="admin-event-deadline" class="events-form-input" />
                  </div>

                  <div class="events-form-field">
                    <label class="events-form-label" for="admin-event-cert-url">Certificate / Credential Link (URL)</label>
                    <input type="url" id="admin-event-cert-url" class="events-form-input" placeholder="https://drive.google.com/... or https://certifyme..." />
                  </div>

                  <div class="events-form-field col-span-2">
                    <label class="events-form-label" for="admin-event-linked-gallery">Linked Gallery Video / Post (Cross-Link)</label>
                    <select id="admin-event-linked-gallery" class="events-form-select">
                      <option value="">-- None (No linked gallery video) --</option>
                      ${this.generateLinkedGalleryPostOptionsHtml()}
                    </select>
                  </div>

                  <div class="events-form-field col-span-2">
                    <label class="events-form-label" for="admin-event-reg-link">Registration Link (URL)</label>
                    <input type="url" id="admin-event-reg-link" class="events-form-input" placeholder="https://forms.gle/... or https://meet.google.com/..." />
                  </div>

                  <div class="events-form-field col-span-2">
                    <label class="events-form-label" for="admin-event-desc">Short Description / Prerequisites</label>
                    <textarea id="admin-event-desc" class="events-form-textarea" rows="3" placeholder="Provide event highlights, prerequisites, speakers, or syllabus details..."></textarea>
                  </div>

                  <div class="events-form-field col-span-2">
                    <label class="events-form-label">Poster Image Upload (Canvas Sanitized to 16:9 WebP, max 1280px)</label>
                    <div class="events-poster-dropzone" id="admin-poster-dropzone">
                      <input type="file" id="admin-event-poster-file" accept="image/*" style="display: none;" />
                      <div id="admin-dropzone-prompt">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#800000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 0.5rem;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        <p style="margin: 0; font-weight: 600; color: #374151;">Click or drag an image here to upload event poster</p>
                        <p style="margin: 0.35rem 0 0; font-size: 0.8rem; color: #6B7280;">Canvas automatically strips EXIF/GPS metadata, centers to 16:9, and compresses to WebP</p>
                      </div>
                      <div class="events-poster-preview-wrap" id="admin-poster-preview-wrap" style="display: none;">
                        <img id="admin-poster-preview-img" class="events-poster-preview-img" alt="Poster preview" draggable="false" />
                      </div>
                    </div>
                  </div>

                  <div class="events-form-field col-span-2">
                    <label class="events-form-label">Multi-Format Media &amp; Document Attachments (PDF Brochures, Schedules, Rulebooks, Extra Media)</label>
                    <div class="events-poster-dropzone" id="admin-attachments-dropzone" style="cursor: pointer;">
                      <input type="file" id="admin-event-attachments-file" accept="image/*,video/mp4,video/webm,application/pdf" multiple style="display: none;" />
                      <div id="admin-attachments-prompt">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#800000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 0.4rem;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                        <p style="margin: 0; font-weight: 600; color: #374151; font-size: 0.88rem;">Click or drag files here to attach PDF Brochures, Schedules, or Extra Media</p>
                        <p style="margin: 0.3rem 0 0; font-size: 0.78rem; color: #6B7280;">Supports .pdf brochures, .jpg, .png, .webp, .mp4, and .webm files</p>
                      </div>
                    </div>
                    <div class="admin-attachments-list" id="admin-event-attachments-list"></div>
                  </div>
                </div>

                <div class="events-form-actions">
                  <button type="submit" class="events-btn-save" id="admin-event-submit-btn">Publish Event</button>
                  <button type="button" class="events-btn-cancel" id="admin-event-cancel-btn">Reset Form</button>
                </div>
              </form>

              <!-- EVENT ROSTER TABLE -->
              <div class="events-roster-section">
                <h3 class="events-roster-title">Current Event Roster (${events.length})</h3>
                <div class="events-roster-table-wrap">
                  <table class="events-roster-table">
                    <thead>
                      <tr>
                        <th>Poster</th>
                        <th>Title &amp; Category</th>
                        <th>Date &amp; Time</th>
                        <th>Venue</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="events-roster-tbody">
                      ${this.generateEventRosterRowsHtml(events)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    generateEventRosterRowsHtml(events) {
      if (!events || events.length === 0) {
        return `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: #6B7280;">No events in roster. Use the form above to add an event.</td></tr>`;
      }
      return events.map(evt => {
        const posterSrc = evt.posterUrl || '';
        const categoryClass = `category-${(evt.category || 'Workshop').toLowerCase()}`;
        const statusColor = evt.status === 'Completed' ? '#6B7280' : '#047857';
        return `
          <tr data-roster-event-id="${evt.id}">
            <td>
              ${posterSrc ? `
                <img src="${posterSrc}" alt="${this.escapeHtml(evt.title)}" class="events-table-poster" draggable="false" oncontextmenu="return false;" />
              ` : `
                <div class="events-table-poster" style="display: flex; align-items: center; justify-content: center; background: #800000; color: #fff; font-size: 0.65rem; font-weight: 700;">16:9</div>
              `}
            </td>
            <td>
              <div style="font-weight: 700; color: #111827; margin-bottom: 0.2rem;">${this.escapeHtml(evt.title)}</div>
              <span class="event-category-badge ${categoryClass}" style="position: static; display: inline-block; padding: 0.15rem 0.55rem; font-size: 0.7rem;">${this.escapeHtml(evt.category || 'Workshop')}</span>
            </td>
            <td style="white-space: nowrap;">${this.formatEventDate(evt.dateTime)}</td>
            <td>${this.escapeHtml(evt.venue || 'TBA')}</td>
            <td>
              <span style="display: inline-block; padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; background: ${evt.status === 'Completed' ? '#F3F4F6' : '#ECFDF5'}; color: ${statusColor};">
                ${this.escapeHtml(evt.status || 'Upcoming')}
              </span>
            </td>
            <td>
              <div class="events-table-actions">
                <button type="button" class="events-action-btn edit" data-action="edit-event" data-event-id="${evt.id}" title="Edit Event">Edit</button>
                <button type="button" class="events-action-btn complete-cert" data-action="end-program-cert" data-event-id="${evt.id}" title="End Program / Add Certificate Link">🎓 End Program / Certificate</button>
                <button type="button" class="events-action-btn delete" data-action="delete-event" data-event-id="${evt.id}" title="Delete Event">Delete</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    },

    generateEventCardsListHtml(events, tab = 'upcoming') {
      const isUpcomingTab = tab === 'upcoming';
      const filtered = events.filter(evt => {
        const status = evt.status || 'Upcoming';
        return isUpcomingTab ? (status === 'Upcoming') : (status === 'Completed');
      });

      if (filtered.length === 0) {
        return `
          <div class="events-empty-state-box" style="grid-column: 1 / -1;">
            <div class="events-empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h3 class="events-empty-state-title">${isUpcomingTab ? 'No Upcoming Events Scheduled' : 'No Past Events Archived'}</h3>
            <p class="events-empty-state-text">${isUpcomingTab ? 'Stay tuned! New technical workshops, guest seminars, and chapter conclaves will be published here.' : 'Archived event summaries and past chapter activity records will appear here.'}</p>
          </div>
        `;
      }

      return filtered.map(evt => this.generateSingleEventCardHtml(evt)).join('');
    },

    calculateEventCountdown(dateTimeStr) {
      if (!dateTimeStr) return { isLive: false, isEnded: true, text: '' };
      const target = new Date(dateTimeStr).getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        const hoursPast = (now - target) / (1000 * 60 * 60);
        if (hoursPast < 5) {
          return { isLive: true, isEnded: false, text: 'Live Now' };
        }
        return { isLive: false, isEnded: true, text: 'Concluded' };
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const pad = (n) => String(n).padStart(2, '0');

      return {
        isLive: false,
        isEnded: false,
        text: `[${pad(days)} Days] : [${pad(hours)} Hrs] : [${pad(minutes)} Mins]`,
        days,
        hours,
        minutes
      };
    },

    generateSingleEventCardHtml(evt) {
      const isUpcoming = (evt.status || 'Upcoming') === 'Upcoming';
      const category = evt.category || 'Workshop';
      const categoryClass = `category-${category.toLowerCase()}`;
      const formattedDate = this.formatEventDate(evt.dateTime);
      const calendarUrl = this.buildGoogleCalendarUrl(evt);
      const countdown = this.calculateEventCountdown(evt.dateTime);

      const posterHtml = evt.posterUrl ? `
        <img 
          src="${evt.posterUrl}" 
          alt="${this.escapeHtml(evt.title)}" 
          class="event-poster-img select-none"
          draggable="false"
          oncontextmenu="return false;"
          oncopy="return false;"
        />
      ` : `
        <div class="event-poster-fallback select-none" draggable="false" oncontextmenu="return false;" oncopy="return false;">
          <div class="event-poster-fallback-emblem">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
          </div>
          <h4 class="event-poster-fallback-title">${this.escapeHtml(evt.title)}</h4>
          <span class="event-poster-fallback-sub">ISHMT TKMCE • ${this.escapeHtml(category)}</span>
        </div>
      `;

      const hasAttachments = Array.isArray(evt.attachments) && evt.attachments.length > 0;
      const linkedGalleryPostId = evt.linkedGalleryPostId || '';

      return `
        <div class="event-display-card" data-event-id="${evt.id}">
          <!-- Poster Container (16:9 ratio, anti-drag/anti-copy with transparent protective shield) -->
          <div class="event-poster-container select-none" draggable="false" oncontextmenu="return false;" oncopy="return false;">
            <span class="event-category-badge ${categoryClass}">
              ${this.escapeHtml(category)}
            </span>
            ${linkedGalleryPostId ? `
              <a href="#/gallery?post=${linkedGalleryPostId}" class="event-video-overlay-badge" data-gallery-redirect="${linkedGalleryPostId}" title="Watch event video in Gallery">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Watch Video</span>
              </a>
            ` : ''}
            ${posterHtml}
            <div class="image-protection-shield select-none" aria-hidden="true" oncontextmenu="return false;"></div>
          </div>

          <!-- Card Body -->
          <div class="event-card-body">
            <h3 class="event-card-title">${this.escapeHtml(evt.title)}</h3>

            ${isUpcoming ? `
              <div class="event-countdown-bar" data-countdown-target="${evt.dateTime}">
                ${countdown.isLive ? `
                  <span class="event-live-now-badge">🔴 Live Now</span>
                ` : `
                  <div class="event-countdown-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span class="event-countdown-val">${countdown.text}</span>
                  </div>
                `}
              </div>
            ` : ''}

            <!-- Logistics Ribbon -->
            <div class="event-logistics-ribbon">
              <div class="event-logistics-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>${formattedDate}</span>
              </div>
              <div class="event-logistics-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${this.escapeHtml(evt.venue || 'TBA')}</span>
              </div>
            </div>

            <!-- Description (2-line clamped) -->
            <p class="event-card-description">${this.escapeHtml(evt.description || 'Join us for this premier technical initiative hosted by the ISHMT Student Chapter.')}</p>

            <!-- Multi-Format Attachments -->
            ${hasAttachments ? `
              <div class="event-attachments-wrap">
                ${evt.attachments.map(att => {
                  const isPdf = att.type === 'pdf' || (att.name && att.name.toLowerCase().endsWith('.pdf'));
                  const icon = isPdf ? '📄' : (att.type === 'video' ? '🎬' : '📷');
                  const label = isPdf ? (att.name || 'Download Brochure (PDF)') : (att.name || 'View Attachment');
                  return `
                    <a href="${att.url}" target="_blank" rel="noopener noreferrer" class="event-attachment-pill" download="${this.escapeHtml(att.name || 'document')}">
                      <span>${icon}</span>
                      <span>${this.escapeHtml(label)}</span>
                    </a>
                  `;
                }).join('')}
              </div>
            ` : ''}

            <!-- Cross-linked Gallery Video Link -->
            ${linkedGalleryPostId ? `
              <a href="#/gallery?post=${linkedGalleryPostId}" class="event-btn-gallery-link" data-gallery-redirect="${linkedGalleryPostId}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                <span>🎥 Watch in Gallery</span>
              </a>
            ` : ''}

            <!-- CTA Row -->
            <div class="event-card-cta-row">
              ${isUpcoming ? `
                <a 
                  href="${evt.registrationLink || '#'}" 
                  ${evt.registrationLink ? 'target="_blank" rel="noopener noreferrer"' : ''}
                  class="event-btn-register"
                >
                  <span>Register Now</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a 
                  href="${calendarUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="event-btn-calendar"
                  title="Add event to your Google Calendar"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><line x1="12" y1="14" x2="12" y2="18"></line><line x1="10" y1="16" x2="14" y2="16"></line></svg>
                  <span>Add to Google Calendar</span>
                </a>
              ` : `
                ${evt.certificateUrl ? `
                  <a href="${evt.certificateUrl}" target="_blank" rel="noopener noreferrer" class="event-btn-certificate">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    <span>🎓 Get Certificate / View Credentials</span>
                  </a>
                ` : `
                  <button type="button" class="event-btn-concluded" disabled>
                    Registration Closed / Event Concluded
                  </button>
                `}
              `}
            </div>
          </div>
        </div>
      `;
    },

    initAcademicEventsInteractivity(contentEl) {
      if (!contentEl) return;

      // 0. Live Countdown Timer Refresh (updates live every 10 seconds)
      if (window.__ishmt_event_countdown_timer) {
        clearInterval(window.__ishmt_event_countdown_timer);
      }
      window.__ishmt_event_countdown_timer = setInterval(() => {
        const countdownBars = contentEl.querySelectorAll('.event-countdown-bar[data-countdown-target]');
        countdownBars.forEach(bar => {
          const target = bar.getAttribute('data-countdown-target');
          if (!target) return;
          const cd = PublicRenderer.calculateEventCountdown(target);
          if (cd.isLive) {
            bar.innerHTML = '<span class="event-live-now-badge">🔴 Live Now</span>';
          } else if (!cd.isEnded) {
            const valEl = bar.querySelector('.event-countdown-val');
            if (valEl) valEl.textContent = cd.text;
          }
        });
      }, 10000);

      // 1. Tabbed Navigation Interaction
      const tabsContainer = contentEl.querySelector('.events-tabs-container');
      if (tabsContainer) {
        tabsContainer.addEventListener('click', (e) => {
          const tabPill = e.target.closest('[data-event-tab]');
          if (!tabPill) return;

          tabsContainer.querySelectorAll('.events-tab-pill').forEach(pill => pill.classList.remove('active'));
          tabPill.classList.add('active');

          const tab = tabPill.getAttribute('data-event-tab');
          const blueprint = SiteStore.get();
          const events = (blueprint.eventsData && blueprint.eventsData.events) || DEFAULT_EVENTS_DATA.events;
          const gridContainer = contentEl.querySelector('#events-grid-container');
          if (gridContainer) {
            gridContainer.innerHTML = PublicRenderer.generateEventCardsListHtml(events, tab);
          }
        });
      }

      // 2. Admin Dashboard Form & Sanitization (Only runs if Admin panel is rendered in DOM)
      const form = contentEl.querySelector('#admin-event-form');
      let stagedAttachments = [];

      const renderStagedAttachments = () => {
        const listEl = contentEl.querySelector('#admin-event-attachments-list');
        if (!listEl) return;
        if (!stagedAttachments || stagedAttachments.length === 0) {
          listEl.innerHTML = '';
          return;
        }
        listEl.innerHTML = stagedAttachments.map((att, idx) => {
          const isPdf = att.type === 'pdf' || (att.name && att.name.toLowerCase().endsWith('.pdf'));
          const icon = isPdf ? '📄' : (att.type === 'video' ? '🎬' : '📷');
          return `
            <div class="admin-attachment-row" data-attachment-index="${idx}">
              <div style="display: flex; align-items: center; gap: 0.5rem; overflow: hidden;">
                <span>${icon}</span>
                <span style="font-weight: 600; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 320px;">${PublicRenderer.escapeHtml(att.name || 'Attachment')}</span>
                <span style="color: #6B7280; font-size: 0.72rem; text-transform: uppercase;">(${PublicRenderer.escapeHtml(att.type || 'file')})</span>
              </div>
              <button type="button" class="admin-attachment-remove-btn" data-remove-attachment="${idx}" style="background: none; border: none; color: #DC2626; font-size: 0.85rem; font-weight: 700; cursor: pointer; padding: 0.2rem 0.5rem;" title="Remove attachment">✕</button>
            </div>
          `;
        }).join('');
      };

      if (form) {
        const dropzone = contentEl.querySelector('#admin-poster-dropzone');
        const fileInput = contentEl.querySelector('#admin-event-poster-file');
        const previewWrap = contentEl.querySelector('#admin-poster-preview-wrap');
        const previewImg = contentEl.querySelector('#admin-poster-preview-img');
        const posterDataInput = contentEl.querySelector('#admin-event-poster-data');
        const dropPrompt = contentEl.querySelector('#admin-dropzone-prompt');

        const attDropzone = contentEl.querySelector('#admin-attachments-dropzone');
        const attFileInput = contentEl.querySelector('#admin-event-attachments-file');

        const processIncomingAttachments = (files) => {
          if (!files || files.length === 0) return;
          Array.from(files).forEach(file => {
            const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
            const isVid = file.type.startsWith('video/') || file.name.toLowerCase().endsWith('.mp4') || file.name.toLowerCase().endsWith('.webm');
            const attType = isPdf ? 'pdf' : (isVid ? 'video' : 'image');

            const reader = new FileReader();
            reader.onload = (re) => {
              stagedAttachments.push({
                id: 'att-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
                type: attType,
                url: re.target.result,
                name: file.name
              });
              renderStagedAttachments();
              App.showToast(`Attached: ${file.name}`);
            };
            reader.readAsDataURL(file);
          });
        };

        if (attDropzone && attFileInput) {
          attDropzone.addEventListener('click', (e) => {
            if (e.target !== attFileInput) attFileInput.click();
          });
          attDropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            attDropzone.style.borderColor = '#800000';
            attDropzone.style.background = '#FBF5F5';
          });
          attDropzone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            attDropzone.style.borderColor = 'rgba(128, 0, 0, 0.3)';
            attDropzone.style.background = '#FAF9F6';
          });
          attDropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            attDropzone.style.borderColor = 'rgba(128, 0, 0, 0.3)';
            attDropzone.style.background = '#FAF9F6';
            processIncomingAttachments(e.dataTransfer.files);
          });
          attFileInput.addEventListener('change', () => {
            processIncomingAttachments(attFileInput.files);
          });
        }

        const handlePosterFile = (file) => {
          PublicRenderer.processAndSanitizePoster(file, (sanitizedUrl) => {
            if (posterDataInput) posterDataInput.value = sanitizedUrl;
            if (previewImg) previewImg.src = sanitizedUrl;
            if (previewWrap) previewWrap.style.display = 'block';
            if (dropPrompt) dropPrompt.style.display = 'none';
            App.showToast('Poster sanitized to 16:9 WebP (EXIF stripped).');
          });
        };

        if (dropzone && fileInput) {
          dropzone.addEventListener('click', (e) => {
            if (e.target !== fileInput) {
              fileInput.click();
            }
          });

          dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = '#800000';
            dropzone.style.background = '#FBF5F5';
          });

          dropzone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = 'rgba(128, 0, 0, 0.3)';
            dropzone.style.background = '#FDFBFB';
          });

          dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = 'rgba(128, 0, 0, 0.3)';
            dropzone.style.background = '#FDFBFB';
            const files = e.dataTransfer.files;
            if (files && files[0] && files[0].type.startsWith('image/')) {
              handlePosterFile(files[0]);
            }
          });

          fileInput.addEventListener('change', () => {
            if (fileInput.files && fileInput.files[0]) {
              handlePosterFile(fileInput.files[0]);
            }
          });
        }

        // Form Submit
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const editId = form.querySelector('#admin-event-edit-id').value;
          const title = form.querySelector('#admin-event-title').value.trim();
          const category = form.querySelector('#admin-event-category').value;
          const dateTime = form.querySelector('#admin-event-datetime').value;
          const venue = form.querySelector('#admin-event-venue').value.trim();
          const status = form.querySelector('#admin-event-status').value;
          const deadline = form.querySelector('#admin-event-deadline') ? form.querySelector('#admin-event-deadline').value : '';
          const certificateUrl = form.querySelector('#admin-event-cert-url') ? form.querySelector('#admin-event-cert-url').value.trim() : '';
          const linkedGalleryPostId = form.querySelector('#admin-event-linked-gallery') ? form.querySelector('#admin-event-linked-gallery').value : '';
          const registrationLink = form.querySelector('#admin-event-reg-link').value.trim();
          const description = form.querySelector('#admin-event-desc').value.trim();
          const posterUrl = form.querySelector('#admin-event-poster-data').value;

          if (!title || !dateTime || !venue) {
            alert('Please fill in all required fields (Title, Date & Time, Venue).');
            return;
          }

          const blueprint = SiteStore.get();
          if (!blueprint.eventsData) blueprint.eventsData = deepClone(DEFAULT_EVENTS_DATA);
          if (!Array.isArray(blueprint.eventsData.events)) blueprint.eventsData.events = [];

          if (editId) {
            const idx = blueprint.eventsData.events.findIndex(ev => ev.id === editId);
            if (idx !== -1) {
              blueprint.eventsData.events[idx] = {
                ...blueprint.eventsData.events[idx],
                title, category, dateTime, venue, status, registrationLink, description, posterUrl,
                deadline, certificateUrl, linkedGalleryPostId,
                attachments: [...stagedAttachments]
              };
              App.showToast('Event updated successfully!');
            }
          } else {
            const newEvt = {
              id: 'evt-' + Date.now(),
              title,
              category,
              dateTime,
              deadline,
              venue,
              status,
              registrationLink,
              certificateUrl,
              description,
              posterUrl,
              linkedGalleryPostId,
              attachments: [...stagedAttachments],
              createdAt: new Date().toISOString()
            };
            blueprint.eventsData.events.unshift(newEvt);
            App.showToast('Event published successfully!');
          }

          SiteStore.save(blueprint);

          // Reset form
          form.reset();
          form.querySelector('#admin-event-edit-id').value = '';
          form.querySelector('#admin-event-poster-data').value = '';
          if (form.querySelector('#admin-event-deadline')) form.querySelector('#admin-event-deadline').value = '';
          if (form.querySelector('#admin-event-cert-url')) form.querySelector('#admin-event-cert-url').value = '';
          if (form.querySelector('#admin-event-linked-gallery')) form.querySelector('#admin-event-linked-gallery').value = '';
          stagedAttachments = [];
          renderStagedAttachments();
          if (previewWrap) previewWrap.style.display = 'none';
          if (dropPrompt) dropPrompt.style.display = 'block';
          const submitBtn = form.querySelector('#admin-event-submit-btn');
          if (submitBtn) submitBtn.textContent = 'Publish Event';

          // Refresh UI
          PublicRenderer.refreshEventsSection(contentEl);
        });

        // Cancel / Reset Form
        const cancelBtn = contentEl.querySelector('#admin-event-cancel-btn');
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            form.reset();
            form.querySelector('#admin-event-edit-id').value = '';
            form.querySelector('#admin-event-poster-data').value = '';
            if (form.querySelector('#admin-event-deadline')) form.querySelector('#admin-event-deadline').value = '';
            if (form.querySelector('#admin-event-cert-url')) form.querySelector('#admin-event-cert-url').value = '';
            if (form.querySelector('#admin-event-linked-gallery')) form.querySelector('#admin-event-linked-gallery').value = '';
            stagedAttachments = [];
            renderStagedAttachments();
            if (previewWrap) previewWrap.style.display = 'none';
            if (dropPrompt) dropPrompt.style.display = 'block';
            const submitBtn = form.querySelector('#admin-event-submit-btn');
            if (submitBtn) submitBtn.textContent = 'Publish Event';
          });
        }
      }

      // 3. Event Roster Actions (Edit, Delete & End Program / Certificate) & Interactive Links
      contentEl.addEventListener('click', (e) => {
        // Remove Staged Attachment
        const removeAttBtn = e.target.closest('[data-remove-attachment]');
        if (removeAttBtn) {
          const idx = parseInt(removeAttBtn.getAttribute('data-remove-attachment'), 10);
          if (!isNaN(idx) && idx >= 0 && idx < stagedAttachments.length) {
            stagedAttachments.splice(idx, 1);
            renderStagedAttachments();
          }
          return;
        }

        // Gallery Redirect Links
        const galleryRedirect = e.target.closest('[data-gallery-redirect]');
        if (galleryRedirect) {
          const postId = galleryRedirect.getAttribute('data-gallery-redirect');
          if (postId) {
            window.location.hash = `#/gallery?post=${postId}`;
          }
          return;
        }

        // Edit Event
        const editBtn = e.target.closest('[data-action="edit-event"]');
        if (editBtn) {
          const eventId = editBtn.getAttribute('data-event-id');
          const blueprint = SiteStore.get();
          const events = (blueprint.eventsData && blueprint.eventsData.events) || DEFAULT_EVENTS_DATA.events;
          const evt = events.find(ev => ev.id === eventId);
          if (!evt) return;

          const form = contentEl.querySelector('#admin-event-form');
          if (!form) return;

          form.querySelector('#admin-event-edit-id').value = evt.id;
          form.querySelector('#admin-event-title').value = evt.title || '';
          form.querySelector('#admin-event-category').value = evt.category || 'Workshop';
          form.querySelector('#admin-event-datetime').value = evt.dateTime || '';
          form.querySelector('#admin-event-venue').value = evt.venue || '';
          form.querySelector('#admin-event-status').value = evt.status || 'Upcoming';
          if (form.querySelector('#admin-event-deadline')) form.querySelector('#admin-event-deadline').value = evt.deadline || '';
          if (form.querySelector('#admin-event-cert-url')) form.querySelector('#admin-event-cert-url').value = evt.certificateUrl || '';
          const gallerySelect = form.querySelector('#admin-event-linked-gallery');
          if (gallerySelect) {
            gallerySelect.innerHTML = '<option value="">-- None (No linked gallery video) --</option>' + PublicRenderer.generateLinkedGalleryPostOptionsHtml(evt.linkedGalleryPostId || '');
            gallerySelect.value = evt.linkedGalleryPostId || '';
          }
          form.querySelector('#admin-event-reg-link').value = evt.registrationLink || '';
          form.querySelector('#admin-event-desc').value = evt.description || '';
          form.querySelector('#admin-event-poster-data').value = evt.posterUrl || '';

          stagedAttachments = Array.isArray(evt.attachments) ? deepClone(evt.attachments) : [];
          renderStagedAttachments();

          const previewWrap = form.querySelector('#admin-poster-preview-wrap');
          const previewImg = form.querySelector('#admin-poster-preview-img');
          const dropPrompt = form.querySelector('#admin-dropzone-prompt');

          if (evt.posterUrl) {
            if (previewImg) previewImg.src = evt.posterUrl;
            if (previewWrap) previewWrap.style.display = 'block';
            if (dropPrompt) dropPrompt.style.display = 'none';
          } else {
            if (previewWrap) previewWrap.style.display = 'none';
            if (dropPrompt) dropPrompt.style.display = 'block';
          }

          const submitBtn = form.querySelector('#admin-event-submit-btn');
          if (submitBtn) submitBtn.textContent = 'Update Event';

          const dashboard = contentEl.querySelector('#events-admin-dashboard');
          if (dashboard) dashboard.scrollIntoView({ behavior: 'smooth' });
          return;
        }

        // End Program / Certificate Action in Roster Table (Non-blocking Custom Modal)
        const endProgBtn = e.target.closest('[data-action="end-program-cert"]');
        if (endProgBtn) {
          const eventId = endProgBtn.getAttribute('data-event-id');
          const blueprint = SiteStore.get();
          const events = (blueprint.eventsData && blueprint.eventsData.events) || DEFAULT_EVENTS_DATA.events;
          const evt = events.find(ev => ev.id === eventId);
          if (!evt) return;

          const modal = document.getElementById('end-program-cert-modal');
          if (modal) {
            const idInput = modal.querySelector('#end-program-target-event-id');
            const titleEl = modal.querySelector('#end-program-modal-event-title');
            const urlInput = modal.querySelector('#end-program-modal-cert-url');

            if (idInput) idInput.value = evt.id;
            if (titleEl) titleEl.textContent = evt.title;
            if (urlInput) urlInput.value = evt.certificateUrl || '';

            modal.classList.remove('hidden');
            setTimeout(() => {
              if (urlInput) {
                urlInput.focus();
                urlInput.select();
              }
            }, 60);
          }
          return;
        }

        // Delete Event (Instant Delete + Undo / Ctrl+Z)
        const deleteBtn = e.target.closest('[data-action="delete-event"]');
        if (deleteBtn) {
          const eventId = deleteBtn.getAttribute('data-event-id');
          const blueprint = SiteStore.get();
          if (!blueprint.eventsData) blueprint.eventsData = deepClone(DEFAULT_EVENTS_DATA);
          const eventIndex = (blueprint.eventsData.events || []).findIndex(ev => ev.id === eventId);
          if (eventIndex === -1) return;

          const deletedEvent = blueprint.eventsData.events[eventIndex];

          // Delete immediately without any blocking confirm() popup
          blueprint.eventsData.events.splice(eventIndex, 1);
          SiteStore.save(blueprint);
          PublicRenderer.refreshEventsSection(contentEl);

          // Register in UndoManager
          const undoRestore = () => {
            const currentBp = SiteStore.get();
            if (!currentBp.eventsData) currentBp.eventsData = deepClone(DEFAULT_EVENTS_DATA);
            if (!Array.isArray(currentBp.eventsData.events)) currentBp.eventsData.events = [];
            currentBp.eventsData.events.splice(eventIndex, 0, deletedEvent);
            SiteStore.save(currentBp);
            PublicRenderer.refreshEventsSection(contentEl);
          };

          UndoManager.push({
            description: `Event "${deletedEvent.title}"`,
            undo: undoRestore
          });

          App.showToast(`Deleted "${deletedEvent.title}".`, undoRestore);
          return;
        }
      });

      // Bind End Program & Certificate Modal Form Submit Handler
      const certModal = document.getElementById('end-program-cert-modal');
      const certForm = document.getElementById('end-program-cert-form');
      if (certModal && certForm && !certForm.dataset.bound) {
        certForm.dataset.bound = 'true';

        certForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const idInput = certForm.querySelector('#end-program-target-event-id');
          const urlInput = certForm.querySelector('#end-program-modal-cert-url');
          const targetId = idInput ? idInput.value : '';
          const certUrl = urlInput ? urlInput.value.trim() : '';

          const blueprint = SiteStore.get();
          const events = (blueprint.eventsData && blueprint.eventsData.events) || DEFAULT_EVENTS_DATA.events;
          const evt = events.find(ev => ev.id === targetId);

          if (evt) {
            evt.status = 'Completed';
            evt.certificateUrl = certUrl;
            SiteStore.save(blueprint);
            App.showToast(`"${evt.title}" marked as Completed with certificates enabled!`);
            PublicRenderer.refreshEventsSection(contentEl);
          }

          certModal.classList.add('hidden');
        });

        // Close when clicking modal backdrop
        certModal.addEventListener('click', (e) => {
          if (e.target === certModal) {
            certModal.classList.add('hidden');
          }
        });
      }
    },

    refreshEventsSection(contentEl) {
      if (!contentEl) return;
      const blueprint = SiteStore.get();
      const events = (blueprint.eventsData && blueprint.eventsData.events) || DEFAULT_EVENTS_DATA.events;

      // Update Roster Table
      const rosterTbody = contentEl.querySelector('#events-roster-tbody');
      if (rosterTbody) {
        rosterTbody.innerHTML = this.generateEventRosterRowsHtml(events);
      }

      // Update Roster Title
      const rosterTitle = contentEl.querySelector('.events-roster-title');
      if (rosterTitle) {
        rosterTitle.textContent = `Current Event Roster (${events.length})`;
      }

      // Update Tab Badges
      const upcomingCount = events.filter(e => (e.status || 'Upcoming') === 'Upcoming').length;
      const completedCount = events.filter(e => (e.status || 'Upcoming') === 'Completed').length;
      const upcomingBadge = contentEl.querySelector('#badge-upcoming-count');
      const completedBadge = contentEl.querySelector('#badge-completed-count');
      if (upcomingBadge) upcomingBadge.textContent = upcomingCount;
      if (completedBadge) completedBadge.textContent = completedCount;

      // Update Linked Gallery Dropdown if present
      const gallerySelect = contentEl.querySelector('#admin-event-linked-gallery');
      if (gallerySelect) {
        const curVal = gallerySelect.value;
        gallerySelect.innerHTML = '<option value="">-- None (No linked gallery video) --</option>' + this.generateLinkedGalleryPostOptionsHtml(curVal);
        gallerySelect.value = curVal;
      }

      // Update Card Grid
      const activeTabPill = contentEl.querySelector('.events-tab-pill.active');
      const currentTab = activeTabPill ? activeTabPill.getAttribute('data-event-tab') : 'upcoming';
      const gridContainer = contentEl.querySelector('#events-grid-container');
      if (gridContainer) {
        gridContainer.innerHTML = this.generateEventCardsListHtml(events, currentTab);
      }
    },

    initAcademicContactInteractivity(contentEl) {
      if (!contentEl) return;
      const form = contentEl.querySelector('#academic-contact-form');
      const feedback = contentEl.querySelector('#contact-form-feedback');
      const feedbackText = contentEl.querySelector('#contact-feedback-text');
      const errorBox = contentEl.querySelector('#contact-form-error');
      const errorContent = contentEl.querySelector('#contact-error-content');
      const submitBtn = contentEl.querySelector('#contact-form-submit-btn');

      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();

          const nameInput = form.querySelector('#form-name');
          const emailInput = form.querySelector('#form-email');
          const phoneInput = form.querySelector('#form-telephone');
          const subjectInput = form.querySelector('#form-subject');
          const messageInput = form.querySelector('#form-message');

          const name = (nameInput && nameInput.value.trim()) || '';
          const email = (emailInput && emailInput.value.trim()) || '';
          const telephone = (phoneInput && phoneInput.value.trim()) || '';
          const subject = (subjectInput && subjectInput.value.trim()) || '';
          const message = (messageInput && messageInput.value.trim()) || '';

          // Client Validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!name || name.length < 2) {
            alert('Please enter your full name.');
            if (nameInput) nameInput.focus();
            return;
          }
          if (!email || !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            if (emailInput) emailInput.focus();
            return;
          }
          if (!subject || subject.length < 3) {
            alert('Please enter a subject line.');
            if (subjectInput) subjectInput.focus();
            return;
          }
          if (!message || message.length < 5) {
            alert('Please enter your message (at least 5 characters).');
            if (messageInput) messageInput.focus();
            return;
          }

          // Reset previous notifications
          if (feedback) feedback.style.display = 'none';
          if (errorBox) errorBox.style.display = 'none';

          // Set sending state
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
              <span class="contact-btn-spinner"></span>
              <span>Sending...</span>
            `;
          }

          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({ name, email, telephone, subject, message })
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok && data.success) {
              // Success feedback
              if (feedbackText) {
                feedbackText.innerHTML = `Thank you, <strong>${PublicRenderer.escapeHtml(name)}</strong>! Your inquiry has been routed to the ISHMT Student Chapter Secretariat (<a href="mailto:ishmt@tkmce.ac.in" style="text-decoration: underline; color: inherit;">ishmt@tkmce.ac.in</a>). We will respond to your email promptly.`;
              }
              if (feedback) feedback.style.display = 'flex';
              form.reset();
              App.showToast('Inquiry delivered to ishmt@tkmce.ac.in');
            } else {
              throw new Error(data.message || 'Server returned an error status.');
            }
          } catch (err) {
            console.warn('Direct API submission notice:', err);
            // Fallback for static preview or serverless offline
            const mailtoUrl = `mailto:ishmt@tkmce.ac.in?subject=${encodeURIComponent('[ISHMT Inquiry] ' + subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\nPhone: ' + (telephone || 'N/A') + '\n\n' + message)}`;

            if (errorContent) {
              errorContent.innerHTML = `
                <div><strong>Notice:</strong> Automated backend mailer is currently unreachable.</div>
                <div style="margin-top: 0.35rem;">
                  Click here to send directly via your email app:
                  <a href="${mailtoUrl}" style="color: #800000; font-weight: 700; text-decoration: underline; margin-left: 0.25rem;">
                    Launch Email to ishmt@tkmce.ac.in &rarr;
                  </a>
                </div>
              `;
            }
            if (errorBox) errorBox.style.display = 'flex';
          } finally {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = `
                <span>Submit</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              `;
            }
          }
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
                <span id="contact-feedback-text">Thank you! Your inquiry has been sent to the ISHMT team. We will respond shortly.</span>
              </div>

              <div id="contact-form-error" class="contact-error-msg" style="display: none; align-items: flex-start; gap: 0.75rem;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div id="contact-error-content" style="font-size: 0.9rem; color: #991b1b; line-height: 1.5;"></div>
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
      const memberName = this.activeMember.name;
      const blueprint = SiteStore.get();
      const data = blueprint.execomData || DEFAULT_EXECOM_DATA;
      const list = this.activeMember.type === 'senior' ? data.seniorExecom : data.juniorExecom;
      const member = list.find(m => m.id === this.activeMember.id);
      if (member) {
        const oldAvatarUrl = member.avatarUrl;
        const oldAvatarFileId = member.avatarFileId;
        member.avatarUrl = null;
        member.avatarFileId = null;
        SiteStore.save(blueprint, true);
        AdminStudio.renderLiveCanvas();
        if (AdminStudio && AdminStudio.activeSectionId === 'execom-directory') {
          AdminStudio.renderInspector('execom-directory');
        }
        this.close();

        const undoRestore = () => {
          const curBp = SiteStore.get();
          const d = curBp.execomData || DEFAULT_EXECOM_DATA;
          const l = member.type === 'senior' ? d.seniorExecom : d.juniorExecom;
          const m = l.find(x => x.id === member.id);
          if (m) {
            m.avatarUrl = oldAvatarUrl;
            m.avatarFileId = oldAvatarFileId;
            SiteStore.save(curBp, true);
            AdminStudio.renderLiveCanvas();
          }
        };

        UndoManager.push({
          description: `Photo for ${memberName}`,
          undo: undoRestore
        });

        App.showToast(`Removed photo for ${memberName}.`, undoRestore);
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
      PublicRenderer.initAcademicEventsInteractivity(renderEl);
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

        // 3. Delete Card Button (Instant Delete + Undo / Ctrl+Z - No blocking confirm() popups)
        const delBtn = e.target.closest('.btn-card-delete');
        if (delBtn) {
          e.preventDefault();
          e.stopPropagation();
          const cardType = delBtn.getAttribute('data-card-type');
          const cardId = delBtn.getAttribute('data-card-id');

          const previousBlueprint = deepClone(SiteStore.get());
          const blueprint = SiteStore.get();
          let itemLabel = 'Item';

          if (cardType === 'senior') {
            blueprint.execomData.seniorExecom = blueprint.execomData.seniorExecom.filter(m => m.id !== cardId);
            itemLabel = 'Senior leader';
          } else if (cardType === 'junior') {
            blueprint.execomData.juniorExecom = blueprint.execomData.juniorExecom.filter(m => m.id !== cardId);
            itemLabel = 'Junior track member';
          } else if (cardType === 'event') {
            const secId = delBtn.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content && sec.content.items) {
              sec.content.items = sec.content.items.filter(i => i.id !== cardId);
            }
            itemLabel = 'Event card';
          } else if (cardType === 'gallery') {
            const secId = delBtn.getAttribute('data-section-id');
            const page = blueprint.pages[this.activePageSlug];
            const sec = (page.sections || []).find(s => s.id === secId);
            if (sec && sec.content && sec.content.items) {
              sec.content.items = sec.content.items.filter(i => i.id !== cardId);
            }
            itemLabel = 'Gallery card';
          } else if (cardType === 'offer') {
            blueprint.homeData.offers = blueprint.homeData.offers.filter(o => o.id !== cardId);
            itemLabel = 'Initiative card';
          } else if (cardType === 'stat') {
            blueprint.homeData.stats = blueprint.homeData.stats.filter(s => s.id !== cardId);
            itemLabel = 'Milestone stat';
          }

          SiteStore.save(blueprint, true);
          this.renderLiveCanvas();

          const undoRestore = () => {
            SiteStore.save(previousBlueprint, true);
            this.renderLiveCanvas();
          };

          UndoManager.push({
            description: `${itemLabel}`,
            undo: undoRestore
          });

          App.showToast(`Deleted ${itemLabel}.`, undoRestore);
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
              <input type="text" class="form-input" data-inspector-path="homeData.aboutHeading" value="${PublicRenderer.escapeHtml(home.aboutHeading || 'About Our Chapter')}">
            </div>

            <div class="form-group">
              <label>About Us Main / Intro Paragraph</label>
              <textarea class="form-textarea" rows="4" data-inspector-path="homeData.aboutIntro">${PublicRenderer.escapeHtml(home.aboutIntro || home.heroBody || '')}</textarea>
            </div>

            <div class="form-group">
              <label>About Paragraph 1</label>
              <textarea class="form-textarea" rows="3" data-inspector-path="homeData.aboutP1">${PublicRenderer.escapeHtml(home.aboutP1 || '')}</textarea>
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

      // 4. ACADEMIC EVENTS INSPECTOR
      if (type === 'academic-events') {
        containerEl.innerHTML = `
          <div class="inspector-card">
            <div class="inspector-card-title">Events &amp; Workshops System</div>
            <p style="font-size: 0.85rem; color: #4B5563; line-height: 1.5; margin-bottom: 1rem;">
              Manage chapter events, workshops, webinars, and symposiums using the on-page Event Management Dashboard above.
            </p>
            <div style="background: #F3F4F6; padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.82rem; color: #374151;">
              <strong>Poster Auto-Sanitization:</strong> 16:9 WebP compression &amp; EXIF stripping is active for all uploads.
            </div>
          </div>
        `;
        return;
      }

      // 5. GENERIC HERO / GRID BLOCKS INSPECTOR
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
        publishBtn.addEventListener('click', async () => {
          const bp = SiteStore.get();
          SiteStore.save(bp, true, true);
          await SiteStore.syncToCloud(bp);
          App.showToast('🚀 Changes published live to all devices via Firebase!');
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
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      if (!page || !page.sections) return;

      const secIndex = page.sections.findIndex(s => s.id === sectionId);
      if (secIndex === -1) return;
      const deletedSection = page.sections[secIndex];

      page.sections.splice(secIndex, 1);
      if (this.activeSectionId === sectionId) this.activeSectionId = null;

      SiteStore.save(blueprint, true);
      this.renderSectionsOutline();
      this.renderLiveCanvas();
      this.renderInspector(null);

      const undoRestore = () => {
        const curBp = SiteStore.get();
        const p = curBp.pages[this.activePageSlug];
        if (p && p.sections) {
          p.sections.splice(secIndex, 0, deletedSection);
          SiteStore.save(curBp, true);
          this.renderSectionsOutline();
          this.renderLiveCanvas();
        }
      };

      UndoManager.push({
        description: `Section "${deletedSection.title || deletedSection.type || sectionId}"`,
        undo: undoRestore
      });

      App.showToast(`Deleted section "${deletedSection.title || deletedSection.type}".`, undoRestore);
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

      // Global Ctrl+Z (or Cmd+Z) Undo Shortcut
      window.addEventListener('keydown', (e) => {
        const tag = (e.target.tagName || '').toLowerCase();
        const isEditingField = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;

        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) {
          if (!isEditingField && UndoManager.hasUndo()) {
            e.preventDefault();
            UndoManager.undo();
          }
        }
      });

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
      }, isInitial ? 3800 : 50);

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

    showToast(message, undoAction = null) {
      const toast = document.getElementById('toast-notification');
      if (!toast) return;

      if (window.__toast_timer) {
        clearTimeout(window.__toast_timer);
      }

      if (undoAction && typeof undoAction === 'function') {
        toast.innerHTML = `
          <span>${message}</span>
          <button type="button" class="toast-undo-btn" id="toast-undo-action-btn">↩️ Undo (Ctrl+Z)</button>
        `;
        const undoBtn = toast.querySelector('#toast-undo-action-btn');
        if (undoBtn) {
          undoBtn.addEventListener('click', () => {
            UndoManager.undo();
            toast.classList.remove('active');
          });
        }
      } else {
        toast.textContent = message;
      }

      toast.classList.add('active');

      window.__toast_timer = setTimeout(() => {
        toast.classList.remove('active');
      }, undoAction ? 6500 : 3500);
    }
  };

  // Ensure DOM is ready before initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }
})();
