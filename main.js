/**
 * ISHMT RCT STUDENTS CHAPTER - TKMCE
 * Master Application Controller:
 * 1. Master SiteConfig JSON Blueprint (Interconnected Store & Cross-Tab Sync)
 * 2. Public Read-Only User Phase with 3-Stage Logo Motion & Header Docking
 * 3. Protected Admin Login (#/login) & Master Control Studio (#/admin)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. MASTER SITEDEFAULT BLUEPRINT SCHEMA
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
        sections: []
      },
      '/contact': {
        title: 'Contact',
        slug: '/contact',
        sections: [
          {
            id: 'sec-contact-hero',
            type: 'hero',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'crimson-tint', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Connect With Us',
              title: 'Join ISHMT RCT Students Chapter TKMCE',
              subtitle: 'Reach out for chapter membership, research collaborations, workshop registrations, or sponsorships.'
            }
          },
          {
            id: 'sec-contact-embed',
            type: 'custom-embed',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'left', visible: true },
            content: {
              heading: 'Chapter Headquarters & Inquiries',
              html: `
                <div class="contact-grid">
                  <div class="contact-info-card">
                    <h3 style="font-family: var(--theme-font-family); font-size: 1.6rem; color: var(--theme-charcoal); margin-bottom: 1.25rem;">Secretariat Office</h3>
                    <div class="info-item">
                      <div class="info-icon">📍</div>
                      <div>
                        <strong>Department of Mechanical Engineering</strong><br>
                        TKM College of Engineering, Karicode<br>
                        Kollam, Kerala, India - 691005
                      </div>
                    </div>
                    <div class="info-item">
                      <div class="info-icon">✉️</div>
                      <div>
                        <strong>Email Address</strong><br>
                        <a href="mailto:ishmt.chapter@tkmce.ac.in" style="color: var(--theme-primary); text-decoration: none; font-weight: 600;">ishmt.chapter@tkmce.ac.in</a>
                      </div>
                    </div>
                    <div class="info-item">
                      <div class="info-icon">🌐</div>
                      <div>
                        <strong>Affiliations</strong><br>
                        National ISHMT Council • ISHMT Regional Chapter Thiruvananthapuram (RCT)
                      </div>
                    </div>
                  </div>
                  <div class="contact-info-card" style="background: var(--theme-canvas); border: 2px solid rgba(139, 13, 26, 0.2);">
                    <h3 style="font-family: var(--theme-font-family); font-size: 1.6rem; color: var(--theme-charcoal); margin-bottom: 0.5rem;">Join the Student Chapter</h3>
                    <p style="font-size: 0.95rem; color: var(--theme-muted); margin-bottom: 1.5rem;">Undergraduate & postgraduate engineering students can register for annual chapter membership.</p>
                    <form onsubmit="event.preventDefault(); alert('Thank you for registering! The ISHMT Chapter Secretary will contact you with membership details.');" style="display: flex; flex-direction: column; gap: 1rem;">
                      <input type="text" placeholder="Full Student Name" required style="padding: 0.75rem; border-radius: 8px; border: 1px solid #D1D5DB; font-family: inherit;">
                      <input type="email" placeholder="Institutional Email (@tkmce.ac.in)" required style="padding: 0.75rem; border-radius: 8px; border: 1px solid #D1D5DB; font-family: inherit;">
                      <input type="text" placeholder="Branch & Semester (e.g. S6 Mechanical)" required style="padding: 0.75rem; border-radius: 8px; border: 1px solid #D1D5DB; font-family: inherit;">
                      <button type="submit" class="btn btn-primary" style="margin-top: 0.5rem;">Submit Membership Application</button>
                    </form>
                  </div>
                </div>
              `
            }
          }
        ]
      }
    }
  };

  // ==========================================================================
  // 2. CENTRAL DATA STORE (localStorage + Real-time Cross-tab Sync)
  // ==========================================================================
  const STORAGE_KEY = 'ishmt_site_blueprint_v5_academic';
  const AUTH_KEY = 'ishmt_admin_session';

  const SiteStore = {
    blueprint: null,

    init() {
      try {
        // Complete purge of all previous cache keys
        const staleKeys = [
          'ishmt_site_blueprint_v1',
          'ishmt_site_blueprint_v2',
          'ishmt_site_blueprint_v3',
          'ishmt_site_blueprint_2026',
          'ishmt_site_blueprint_2026_27_v1',
          'ishmt_site_blueprint_2026_27_live',
          'ishmt_site_blueprint_2026_27_minimal',
          'ishmt_site_blueprint_v4_minimal'
        ];
        staleKeys.forEach(k => {
          try { localStorage.removeItem(k); } catch (e) {}
        });

        // Always load and enforce fresh 2026-27 Executive Committee & Club Members blueprint
        this.blueprint = JSON.parse(JSON.stringify(DEFAULT_BLUEPRINT));
        this.save(this.blueprint, false);
      } catch (e) {
        console.warn('Error initializing SiteStore, using default blueprint:', e);
        this.blueprint = JSON.parse(JSON.stringify(DEFAULT_BLUEPRINT));
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
      return this.blueprint;
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
      this.blueprint = JSON.parse(JSON.stringify(DEFAULT_BLUEPRINT));
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
  // 3. AUTHENTICATION SERVICE (#/login)
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
  // 4. MOTION CONTROLLER (3-Stage Intro Animation)
  // ==========================================================================
  const IntroMotion = {
    hasPlayedIntro: false,
    timelineTimeouts: [],

    calculateMetrics() {
      const lockup = document.getElementById('lockup');
      const logoWrapper = document.getElementById('logo-wrapper');
      if (!lockup || !logoWrapper) return;

      const lockupWidth = lockup.offsetWidth;
      const lockupHeight = lockup.offsetHeight;
      const logoWidth = logoWrapper.offsetWidth;

      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;

      const dockLeft = 32;
      const dockTop = 16;

      const targetCenterX = viewportW / 2;
      const targetCenterY = viewportH / 2;

      const centerTx = targetCenterX - (lockupWidth / 2) - dockLeft;
      const centerTy = targetCenterY - (lockupHeight / 2) - dockTop;
      const logoShift = (lockupWidth / 2) - (logoWidth / 2);

      document.documentElement.style.setProperty('--center-tx', `${Math.round(centerTx)}px`);
      document.documentElement.style.setProperty('--center-ty', `${Math.round(centerTy)}px`);
      document.documentElement.style.setProperty('--logo-shift', `${Math.round(logoShift)}px`);
      document.documentElement.style.setProperty('--dock-scale', '0.32');
    },

    clearTimeline() {
      this.timelineTimeouts.forEach(t => clearTimeout(t));
      this.timelineTimeouts = [];
    },

    play(onDockedCallback) {
      this.clearTimeline();
      this.calculateMetrics();

      const container = document.getElementById('lockup-container');
      const logoWrapper = document.getElementById('logo-wrapper');
      const textBlock = document.getElementById('text-block');
      const headerBar = document.getElementById('header-bar');
      const publicView = document.getElementById('public-view');

      document.body.classList.add('loading-state');
      if (publicView) {
        publicView.classList.remove('visible');
      }

      // STAGE 1: Initial Center State (0.0s to 0.9s hold)
      // Emblem centered & scaled at 2.25x on pristine white canvas. Text block concealed behind.
      container.style.transition = 'none';
      logoWrapper.style.transition = 'none';
      textBlock.style.transition = 'none';
      headerBar.style.transition = 'none';

      container.classList.remove('docked');
      container.classList.add('centered');

      headerBar.classList.remove('docked');

      logoWrapper.classList.remove('stage-2', 'docked');
      logoWrapper.classList.add('stage-1');

      textBlock.classList.remove('stage-2', 'docked');
      textBlock.classList.add('stage-1');

      void container.offsetWidth;
      void logoWrapper.offsetWidth;

      container.style.transition = '';
      logoWrapper.style.transition = '';
      textBlock.style.transition = '';
      headerBar.style.transition = '';

      // STAGE 2: Center Lockup & Text Emergence with Dynamic Directional Shadow (0.9s – 2.0s)
      // Logo scales down to 1.0x & shifts left; text smoothly reveals from behind with shadow
      const tStartStage2 = setTimeout(() => {
        logoWrapper.classList.remove('stage-1');
        logoWrapper.classList.add('stage-2');

        textBlock.classList.remove('stage-1');
        textBlock.classList.add('stage-2');
      }, 900);
      this.timelineTimeouts.push(tStartStage2);

      // STAGE 3: Dock to Top-Left Header Bar (2.8s – 3.85s)
      // Lockup translates smoothly to top-left (scale 0.32), header bar emerges,
      // and public page body content smoothly fades in
      const tStartStage3 = setTimeout(() => {
        container.classList.remove('centered');
        container.classList.add('docked');

        headerBar.classList.add('docked');
        logoWrapper.classList.add('docked');
        textBlock.classList.add('docked');

        // Reveal the public content dynamically
        setTimeout(() => {
          document.body.classList.remove('loading-state');
          if (publicView) publicView.classList.add('visible');
          this.hasPlayedIntro = true;
          if (onDockedCallback) onDockedCallback();
        }, 1050);
      }, 2800);
      this.timelineTimeouts.push(tStartStage3);
    },

    setInstantDocked() {
      this.clearTimeline();
      this.calculateMetrics();

      const container = document.getElementById('lockup-container');
      const logoWrapper = document.getElementById('logo-wrapper');
      const textBlock = document.getElementById('text-block');
      const headerBar = document.getElementById('header-bar');
      const publicView = document.getElementById('public-view');

      document.body.classList.remove('loading-state');

      container.style.transition = 'none';
      logoWrapper.style.transition = 'none';
      textBlock.style.transition = 'none';
      headerBar.style.transition = 'none';

      container.classList.remove('centered');
      container.classList.add('docked');

      headerBar.classList.add('docked');

      logoWrapper.classList.remove('stage-1');
      logoWrapper.classList.add('stage-2', 'docked');

      textBlock.classList.remove('stage-1');
      textBlock.classList.add('stage-2', 'docked');

      void container.offsetWidth;

      container.style.transition = '';
      logoWrapper.style.transition = '';
      textBlock.style.transition = '';
      headerBar.style.transition = '';

      if (publicView) publicView.classList.add('visible');
      this.hasPlayedIntro = true;
    }
  };

  // ==========================================================================
  // 5. OFFICIAL 2026–27 EXECUTIVE COMMITTEE & STUDENT CHAPTER ROSTER
  // ==========================================================================
  const EXECOM_ROSTER_DATA = {
    meta: {
      chapterName: "Indian Society for Heat and Mass Transfer (ISHMT)",
      institution: "TKM College of Engineering, Kollam",
      department: "Department of Mechanical Engineering",
      session: "2026–27",
      notificationDate: "23 September 2026",
      mandate: "The appointed Senior and Junior Executive members will steer the technical events, regional seminars, computational workshops, and chapter operations under the direct mentorship of the ISHMT Trivandrum Regional Chapter for the 2026–2027 academic session."
    },
    seniorExecom: [
      { id: "sen-1", name: "Pranav R", role: "Chairperson / President", team: "Executive Leadership", isLead: true, isCore: true, badge: "B.Tech • Mechanical Engineering • S7", avatar: "PR", bio: "Steering chapter governance, ISHMT RCT coordination, and strategic academic initiatives for the 2026–27 tenure." },
      { id: "sen-2", name: "Rohit Mangalassery", role: "Vice Chairperson / Vice President", team: "Executive Leadership", isLead: true, isCore: true, badge: "B.Tech • Mechanical Engineering • S5", avatar: "RM", bio: "Assisting chapter operations, inter-departmental synergies, and workshop oversight." },
      { id: "sen-3", name: "Parthiv J Prasad", role: "General Secretary", team: "Executive Leadership", isLead: true, isCore: true, badge: "2026–27 Session", avatar: "PP", bio: "Managing institutional correspondence, council records, and general chapter logistics." },
      { id: "sen-4", name: "Amal S", role: "Technical Team Lead", team: "Technical Team", isLead: true, isCore: false, badge: "B.Tech • Mechanical Engineering • S7", avatar: "AS", bio: "Head of simulation toolkits, CFD masterclasses, and thermal hardware bench investigations." },
      { id: "sen-5", name: "Afnan", role: "Technical Team Member", team: "Technical Team", isLead: false, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AN", bio: "Supporting computational fluid simulations, code troubleshooting, and lab test rigs." },
      { id: "sen-6", name: "Amrutha R", role: "Program Coordination Lead", team: "Program Coordination Team", isLead: true, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AR", bio: "Directing event scheduling, conclaves, guest lecture curation, and venue execution." },
      { id: "sen-7", name: "Aafiya Junide", role: "Program Coordination Member", team: "Program Coordination Team", isLead: false, isCore: false, badge: "B.Tech • Chemical Engineering • S3", avatar: "AJ", bio: "Coordinating attendee check-ins, registration pipelines, and delegate hospitality." },
      { id: "sen-8", name: "M.Tech Nominee", role: "+1 Nominee (M.Tech Representative)", team: "Program Coordination Team", isLead: false, isCore: false, badge: "M.Tech Nominee • 2026–27 Session", avatar: "MT", bio: "Postgraduate liaison bringing advanced research synchronization to chapter programs." },
      { id: "sen-9", name: "Arjun R", role: "Media & Design Lead", team: "Media & Design Team", isLead: true, isCore: false, badge: "2026–27 Session", avatar: "AR", bio: "Art direction, technical infographics, poster design, and digital event branding." },
      { id: "sen-10", name: "Abhinav K", role: "Media & Design Member", team: "Media & Design Team", isLead: false, isCore: false, badge: "B.Tech • Mechanical Engineering • S5", avatar: "AK", bio: "Video production, motion graphics, and chapter social media creative assets." },
      { id: "sen-11", name: "Vinayak V", role: "Public Relations Lead", team: "Public Relations (PR) Team", isLead: true, isCore: false, badge: "2026–27 Session", avatar: "VV", bio: "Spearheading chapter outreach, industry liaison with ISRO/DRDO mentors, and press briefs." },
      { id: "sen-12", name: "Anugraha Asok", role: "Public Relations Member", team: "Public Relations (PR) Team", isLead: false, isCore: false, badge: "B.Tech • Chemical Engineering • S3", avatar: "AA", bio: "Student delegate relations, inter-college invitations, and chapter promotion drives." },
      { id: "sen-13", name: "Ashwa", role: "Finance & Documentation Lead", team: "Finance & Documentation", isLead: true, isCore: false, badge: "2026–27 Session", avatar: "AS", bio: "Overseeing budget allocations, voucher audits, annual chapter reports, and financial registry." }
    ],
    juniorExecom: [
      { id: "jun-1", name: "Amal Sebastian", track: "Technical Track", focus: "Simulation Toolkits & Lab Support", badge: "B.Tech • Mechanical Engineering • S3", avatar: "AS", color: "cyan" },
      { id: "jun-2", name: "Kashinathan M P", track: "Technical Track", focus: "Hands-on Setup & Code Troubleshooting", badge: "B.Tech • Mechanical Engineering • S5", avatar: "KM", color: "cyan" },
      { id: "jun-3", name: "Meenakshi D R", track: "Program Coordination (PC) Track", focus: "Venue Logistics & Attendee Check-In", badge: "B.Tech • Mechanical Engineering • S3", avatar: "MD", color: "rose" },
      { id: "jun-4", name: "Nidhin Sabu", track: "Program Coordination (PC) Track", focus: "Stage Management & Event Operations", badge: "B.Tech • Mechanical Engineering • S5", avatar: "NS", color: "rose" },
      { id: "jun-5", name: "Denny J Mangalathu", track: "Dual PC / Public Relations", focus: "Cross-Functional Operations & Outreach", badge: "B.Tech • Mechanical Engineering • S3", avatar: "DM", color: "amber" },
      { id: "jun-6", name: "Nithin Sunil Mathews", track: "Finance & Documentation Track", focus: "Audit Archival, Vouchers & Registry", badge: "B.Tech • Chemical Engineering • S3", avatar: "NM", color: "emerald" }
    ],
    roster: [
      { id: 1,  name: "Denny J Mangalathu",       programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: true,  execomRole: "Junior Execom (Dual PC / PR Track)", execomTier: "junior" },
      { id: 2,  name: "Akash S S",                programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 3,  name: "Mohamed jalib P I",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 4,  name: "Pranav R",                 programme: "B.Tech", department: "Mechanical Engineering", semester: "S7", isExecom: true,  execomRole: "Chairperson / President", execomTier: "senior" },
      { id: 5,  name: "Nithin Sunil Mathews",     programme: "B.Tech", department: "Chemical Engineering",   semester: "S3", isExecom: true,  execomRole: "Junior Execom (Finance & Docs Track)", execomTier: "junior" },
      { id: 6,  name: "Samson V Philipose",       programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 7,  name: "Adithyan M Rajesh",        programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: false, execomRole: null, execomTier: null },
      { id: 8,  name: "Meenakshi D R",            programme: "B.Tech", department: "Mechanical Engineering", semester: "S3", isExecom: true,  execomRole: "Junior Execom (PC Track)", execomTier: "junior" },
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
    ]
  };

  // ==========================================================================
  // 6. PUBLIC VIEW RENDERER (Phase 1: 100% Read-Only)
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
        // If Admin leaves the body empty, keep the canvas completely blank white (#FFFFFF)
        contentEl.innerHTML = '<div style="height: 100vh; background: var(--theme-canvas);"></div>';
        return;
      }

      // Render Clean Sections
      page.sections.forEach(section => {
        if (section.layout && section.layout.visible === false) return;
        const sectionHtml = this.generateBlockHtml(section, false);
        contentEl.insertAdjacentHTML('beforeend', sectionHtml);
      });

      // Initialize interactive widgets for Execom Directory & Academic Home
      this.initExecomInteractivity(contentEl);
      this.initAcademicHomeInteractivity(contentEl);
    },

    renderNav(navItems, currentRoute) {
      const navEl = document.getElementById('header-nav');
      if (!navEl) return;

      navEl.innerHTML = navItems
        .filter(item => item.isPublic !== false)
        .map(item => {
          const isActive = (item.path === currentRoute) ? 'active' : '';
          const hashUrl = item.path === '/' ? '#/' : `#${item.path}`;
          return `<a href="${hashUrl}" class="nav-link ${isActive}">${this.escapeHtml(item.label)}</a>`;
        })
        .join('');
    },

    generateBlockHtml(section, isAdminMode = false) {
      const { id, type, layout = {}, content = {} } = section;
      if (type === 'academic-home') {
        return this.generateAcademicHomeHtml();
      }

      const widthClass = layout.containerWidth || 'boxed';
      const padClass = `pad-${layout.paddingY || 'md'}`;
      const bgClass = `bg-${layout.bgType || 'canvas'}`;
      const alignClass = `align-${layout.alignment || 'left'}`;

      let innerContent = '';

      switch (type) {
        case 'execom-directory':
          innerContent = this.generateExecomHtml();
          break;

        case 'hero':
          const hasHeroCard = Boolean(content.cardTitle || content.cardSubtitle);
          const hasActions = Boolean(content.button1Text || content.button2Text);
          const hasTitle = Boolean(content.title && content.title.trim());
          const hasSubtitle = Boolean(content.subtitle && content.subtitle.trim());

          if (!hasHeroCard && !hasTitle && !hasSubtitle && !hasActions) {
            // Clean minimal pill badge layout
            innerContent = `
              <div class="hero-block">
                ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
              </div>
            `;
          } else {
            innerContent = `
              <div class="hero-block ${!hasHeroCard ? 'full-width-text' : ''}">
                <div class="hero-grid">
                  <div>
                    ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
                    ${hasTitle ? `<h1 class="section-heading">${this.escapeHtml(content.title)}</h1>` : ''}
                    ${hasSubtitle ? `<p class="section-desc">${this.escapeHtml(content.subtitle)}</p>` : ''}
                    ${hasActions ? `
                      <div class="block-actions">
                        ${content.button1Text ? `<a href="${content.button1Url || '#'}" class="btn btn-primary">${this.escapeHtml(content.button1Text)}</a>` : ''}
                        ${content.button2Text ? `<a href="${content.button2Url || '#'}" class="btn btn-outline">${this.escapeHtml(content.button2Text)}</a>` : ''}
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
          }
          break;

        case 'stats-banner':
          innerContent = `
            <div class="stats-banner-grid">
              ${(content.items || []).map(stat => `
                <div class="stat-item">
                  <span class="stat-number">${this.escapeHtml(stat.number || '')}</span>
                  <span class="stat-label">${this.escapeHtml(stat.label || '')}</span>
                </div>
              `).join('')}
            </div>
          `;
          break;

        case 'split-content':
          innerContent = `
            <div class="split-grid ${content.reversed ? 'reversed' : ''}">
              <div>
                ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
                <h2 class="section-heading">${this.escapeHtml(content.title || '')}</h2>
                <p class="section-desc">${this.escapeHtml(content.body || '')}</p>
                ${content.buttonText ? `<a href="${content.buttonUrl || '#'}" class="btn btn-primary">${this.escapeHtml(content.buttonText)}</a>` : ''}
              </div>
              <div class="split-image-card">
                <img src="${content.imageUrl || 'ishmt-logo.jpg'}" alt="${this.escapeHtml(content.title || 'ISHMT')}">
              </div>
            </div>
          `;
          break;

        case 'grid-cards':
          innerContent = `
            ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
            <h2 class="section-heading">${this.escapeHtml(content.title || '')}</h2>
            ${content.description ? `<p class="section-desc">${this.escapeHtml(content.description)}</p>` : ''}
            <div class="cards-grid cols-${layout.columns || 3}" style="margin-top: 2rem;">
              ${(content.items || []).map(card => `
                <div class="card-item">
                  <div>
                    ${card.tag ? `<span class="card-tag">${this.escapeHtml(card.tag)}</span>` : ''}
                    <h3 class="card-title">${this.escapeHtml(card.title || '')}</h3>
                    <p class="card-desc">${this.escapeHtml(card.description || '')}</p>
                  </div>
                  ${card.linkText ? `<a href="${card.linkUrl || '#'}" class="card-link">${this.escapeHtml(card.linkText)}</a>` : ''}
                </div>
              `).join('')}
            </div>
          `;
          break;

        case 'timeline':
          innerContent = `
            ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
            <h2 class="section-heading">${this.escapeHtml(content.title || '')}</h2>
            ${content.description ? `<p class="section-desc">${this.escapeHtml(content.description)}</p>` : ''}
            <div class="timeline-track" style="margin-top: 2.5rem;">
              ${(content.items || []).map(node => `
                <div class="timeline-node">
                  <div class="timeline-year">${this.escapeHtml(node.year || '')}</div>
                  <h3 class="timeline-title">${this.escapeHtml(node.title || '')}</h3>
                  <p class="section-desc" style="margin-bottom: 0;">${this.escapeHtml(node.description || '')}</p>
                </div>
              `).join('')}
            </div>
          `;
          break;

        case 'image-gallery':
          innerContent = `
            ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
            <h2 class="section-heading">${this.escapeHtml(content.title || '')}</h2>
            ${content.description ? `<p class="section-desc">${this.escapeHtml(content.description)}</p>` : ''}
            <div class="gallery-grid" style="margin-top: 2rem;">
              ${(content.items || []).map(item => `
                <div class="gallery-card">
                  <img src="${item.imageUrl || 'ishmt-logo.jpg'}" alt="${this.escapeHtml(item.title || '')}">
                  <div class="gallery-overlay">
                    <div class="gallery-title">${this.escapeHtml(item.title || '')}</div>
                    <div class="gallery-caption">${this.escapeHtml(item.caption || '')}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
          break;

        case 'rich-text':
          innerContent = `
            ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
            <h2 class="section-heading">${this.escapeHtml(content.title || '')}</h2>
            <div class="section-desc" style="font-size: 1.15rem; line-height: 1.8;">
              ${(content.body || '').split('\n').map(p => `<p style="margin-bottom: 1.25rem;">${this.escapeHtml(p)}</p>`).join('')}
            </div>
          `;
          break;

        case 'custom-embed':
          innerContent = `
            ${content.heading ? `<h2 class="section-heading" style="margin-bottom: 1.5rem;">${this.escapeHtml(content.heading)}</h2>` : ''}
            <div class="custom-embed-wrap">
              ${content.html || ''}
            </div>
          `;
          break;

        default:
          innerContent = `<div>Unknown block type: ${this.escapeHtml(type)}</div>`;
      }

      if (isAdminMode) {
        return `
          <div class="canvas-block-wrapper" data-section-id="${id}">
            <div class="block-hover-toolbar">
              <span class="canvas-toolbar-btn" style="color: #9CA3AF;">[${type}]</span>
              <button class="canvas-toolbar-btn btn-action-move-up" data-section-id="${id}" title="Move Up">▲</button>
              <button class="canvas-toolbar-btn btn-action-move-down" data-section-id="${id}" title="Move Down">▼</button>
              <button class="canvas-toolbar-btn btn-action-edit" data-section-id="${id}" title="Edit in Inspector">✎ Edit</button>
              <button class="canvas-toolbar-btn btn-action-duplicate" data-section-id="${id}" title="Duplicate">❐</button>
              <button class="canvas-toolbar-btn btn-delete btn-action-delete" data-section-id="${id}" title="Delete">🗑</button>
            </div>
            <section class="block-section ${padClass} ${bgClass} ${alignClass}">
              <div class="block-container ${widthClass}">
                ${innerContent}
              </div>
            </section>
          </div>
        `;
      }

      return `
        <section id="${id}" class="block-section ${padClass} ${bgClass} ${alignClass}">
          <div class="block-container ${widthClass}">
            ${innerContent}
          </div>
        </section>
      `;
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

    generateAcademicHomeHtml() {
      return `
        <div class="academic-home-wrapper">
          <!-- =====================================================================
               SECTION A: HERO SECTION (FULL-WIDTH VIEWPORT WITH 40% BUILDING OPACITY)
               ===================================================================== -->
          <section class="academic-hero-section">
            <!-- Isolated Architectural Background Layer (Exactly 40% Opacity) -->
            <div class="academic-hero-bg">
              <img
                src="tkmce-building.jpg"
                alt="TKM College of Engineering Administrative Building"
                class="academic-hero-bg-img"
                loading="eager"
              />
            </div>

            <!-- Centered Floating Welcome Card (Unaffected by Background Opacity) -->
            <div class="academic-hero-card">
              <!-- Eyebrow Badge with Crimson Underline -->
              <div class="academic-eyebrow-badge">
                <span>WELCOME TO ISHMT-TKMCE STUDENT CHAPTER</span>
              </div>

              <!-- Main Serif Heading -->
              <h1 class="academic-hero-heading">
                Welcome to the ISHMT Student Chapter at TKM College of Engineering
              </h1>

              <!-- Academic Body Description -->
              <p class="academic-hero-body">
                We warmly welcome students, faculty, researchers, and engineering innovators to the Indian Society for Heat and Mass Transfer (ISHMT-RCT) Students Chapter at Thangal Kunju Musaliar College of Engineering, Kollam. Anchored in the Department of Mechanical Engineering, our chapter is your community to explore thermal sciences, energy transition, and computational fluid dynamics through hands-on workshops, lab research, and national academic collaborations.
              </p>

              <!-- CTA Buttons Row -->
              <div class="academic-cta-row">
                <a href="#/contact" class="academic-btn-primary">
                  <span>Become a Member</span>
                  <svg class="academic-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <button type="button" class="academic-btn-outline" id="academic-about-btn">
                  About Us
                </button>
              </div>
            </div>
          </section>

          <!-- =====================================================================
               SECTION B: IMPACT & LEGACY STATISTICS BAR (CRIMSON BANNER)
               ===================================================================== -->
          <section class="academic-stats-banner">
            <div class="academic-stats-container">
              <div class="academic-stat-item">
                <div class="academic-stat-value">450+</div>
                <div class="academic-stat-label">Student Members &amp; Alumni</div>
              </div>
              <div class="academic-stat-item">
                <div class="academic-stat-value">20+</div>
                <div class="academic-stat-label">Hands-On Workshops &amp; Seminars</div>
              </div>
              <div class="academic-stat-item">
                <div class="academic-stat-value">15+</div>
                <div class="academic-stat-label">Research Projects &amp; Test Rigs</div>
              </div>
              <div class="academic-stat-item">
                <div class="academic-stat-value">1973</div>
                <div class="academic-stat-label">National ISHMT Scientific Legacy</div>
              </div>
            </div>
          </section>

          <!-- =====================================================================
               SECTION C: ABOUT THE CHAPTER SECTION (EDITORIAL CONTAINER)
               ===================================================================== -->
          <section id="about" class="academic-about-section">
            <div class="academic-about-container">
              <h2 class="academic-section-heading">About the Chapter</h2>
              <!-- Crimson Accent Bar -->
              <div class="academic-crimson-bar"></div>
              <div class="academic-about-text">
                <p>
                  The Indian Society for Heat and Mass Transfer (ISHMT) is India’s foremost professional body dedicated to disseminating science and engineering across heat transfer, mass transport, thermodynamics, and energy systems. Affiliated regionally with ISHMT-RCT (Trivandrum), the student chapter at TKM College of Engineering serves as a technical hub bridging foundational engineering coursework with modern research and industrial applications.
                </p>
                <p>
                  We nurture a collaborative culture where students engage directly with peer researchers, faculty mentors, and visiting scientists from premier organizations like ISRO/VSSC, national laboratories, and academic institutions. Our focus spans from fundamental convective and radiative transport to high-performance computing, clean fuels, and thermal management for next-generation mobility.
                </p>
              </div>
            </div>
          </section>

          <!-- =====================================================================
               SECTION D: WHAT WE OFFER SECTION (FEATURE CARDS GRID)
               ===================================================================== -->
          <section class="academic-offer-section">
            <div class="academic-offer-container">
              <div class="academic-offer-header">
                <h2 class="academic-section-heading">What We Offer</h2>
                <div class="academic-crimson-bar mx-auto"></div>
              </div>

              <div class="academic-offer-grid">
                <!-- Card 1: Distinguished Lecture Series -->
                <div class="academic-card">
                  <div class="academic-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <h3 class="academic-card-title">Distinguished Lecture Series</h3>
                  <p class="academic-card-desc">
                    Expert technical seminars led by ISHMT fellows, aerospace scientists, and industry leaders.
                  </p>
                </div>

                <!-- Card 2: Simulation & Tool Bootcamps -->
                <div class="academic-card">
                  <div class="academic-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </div>
                  <h3 class="academic-card-title">Simulation &amp; Tool Bootcamps</h3>
                  <p class="academic-card-desc">
                    Practical training in OpenFOAM, ANSYS Fluent, meshing, and numerical heat transfer.
                  </p>
                </div>

                <!-- Card 3: Hardware & R&D Projects -->
                <div class="academic-card">
                  <div class="academic-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                  </div>
                  <h3 class="academic-card-title">Hardware &amp; R&amp;D Projects</h3>
                  <p class="academic-card-desc">
                    Prototyping heat pipes, phase-change thermal storage units, and solar collectors in TKMCE labs.
                  </p>
                </div>

                <!-- Card 4: Conference Mentorship -->
                <div class="academic-card">
                  <div class="academic-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                    </svg>
                  </div>
                  <h3 class="academic-card-title">Conference Mentorship</h3>
                  <p class="academic-card-desc">
                    Guidance for publishing papers and participating in the biennial ISHMT-ASTFE International Conference (IHMTC).
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    },

    generateExecomHtml() {
      const data = EXECOM_ROSTER_DATA;
      const coreLeaders = data.seniorExecom.filter(m => m.isCore);
      const functionalMembers = data.seniorExecom.filter(m => !m.isCore);
      const generalCount = data.roster.filter(m => !m.isExecom).length;
      const totalCount = data.roster.length;

      return `
        <div class="execom-section">
          <!-- A. Minimalist Header & Mandate Callout -->
          <div class="execom-header">
            <div class="execom-badge-sub">${this.escapeHtml(data.meta.department)} • TKMCE</div>
            <h1 class="execom-title">Executive Committee &amp; Chapter Members</h1>
            <p class="execom-subtitle">
              Session 2026–27 • ${this.escapeHtml(data.meta.institution)} • Mentored by Regional Chapter Thiruvananthapuram (RCT)
            </p>

            <!-- Minimalist Mandate Notice -->
            <div class="execom-mandate-card">
              <div class="execom-mandate-header">
                <span class="execom-mandate-tag">Official Mandate • ${this.escapeHtml(data.meta.notificationDate)}</span>
                <span class="execom-mandate-ref">REF: ISHMT-TKMCE-2026</span>
              </div>
              <p class="execom-mandate-text">"${this.escapeHtml(data.meta.mandate)}"</p>
            </div>

            <!-- Minimalist 4-Metric Grid -->
            <div class="execom-metrics-row">
              <div class="execom-metric-box">
                <div class="execom-metric-val crimson">13</div>
                <div class="execom-metric-lbl">Senior Execom</div>
              </div>
              <div class="execom-metric-box">
                <div class="execom-metric-val black">6</div>
                <div class="execom-metric-lbl">Junior Execom</div>
              </div>
              <div class="execom-metric-box">
                <div class="execom-metric-val crimson">48</div>
                <div class="execom-metric-lbl">Roster Members</div>
              </div>
              <div class="execom-metric-box">
                <div class="execom-metric-val black">100%</div>
                <div class="execom-metric-lbl">Peer Verified</div>
              </div>
            </div>

            <!-- Minimalist Navigation Tabs -->
            <div class="execom-tabs">
              <button type="button" class="execom-tab-btn active" data-tab="all">All Sections View</button>
              <button type="button" class="execom-tab-btn" data-tab="senior">Senior Execom (13)</button>
              <button type="button" class="execom-tab-btn" data-tab="junior">Junior Execom (6)</button>
              <button type="button" class="execom-tab-btn" data-tab="roster">Chapter Roster (48)</button>
            </div>
          </div>

          <!-- B. Tier 1: Senior Executive Committee -->
          <div id="section-senior" class="execom-tier-wrap">
            <div class="execom-tier-header">
              <div>
                <div class="execom-tier-tag">Tier 1 • Senior Execom</div>
                <h2 class="execom-tier-h2">Senior Executive Leadership</h2>
                <div class="execom-tier-desc">13 appointed executive positions across Core Leadership and Functional Tracks.</div>
              </div>
              <div class="execom-mandate-ref">13 Appointed Positions</div>
            </div>

            <!-- Core Leadership Spotlight -->
            <div class="execom-core-grid">
              ${coreLeaders.map(l => `
                <div class="execom-leader-card">
                  <div>
                    <div class="execom-leader-top">
                      <span class="execom-lead-pill">Executive Leadership</span>
                      <span class="execom-tier-sub">Core</span>
                    </div>
                    <div class="execom-avatar-wrap">
                      <div class="execom-avatar-inner">${l.avatar}</div>
                      <div>
                        <h3 class="execom-leader-name">${this.escapeHtml(l.name)}</h3>
                        <div class="execom-leader-role">${this.escapeHtml(l.role)}</div>
                      </div>
                    </div>
                    <p class="execom-leader-bio">${this.escapeHtml(l.bio)}</p>
                  </div>
                  <div class="execom-card-footer">
                    <span>${this.escapeHtml(l.badge)}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Functional Teams Grid -->
            <div class="execom-func-grid">
              ${functionalMembers.map(m => `
                <div class="execom-func-card ${m.isLead ? 'is-lead' : ''}">
                  <div>
                    <div class="execom-func-top">
                      <span class="execom-func-team">${this.escapeHtml(m.team)}</span>
                      <span class="execom-lead-tag">${m.isLead ? 'Lead' : 'Member'}</span>
                    </div>
                    <div class="execom-func-mid">
                      <div class="execom-mini-avatar">${m.avatar}</div>
                      <div>
                        <h4 class="execom-func-name">${this.escapeHtml(m.name)}</h4>
                        <div class="execom-func-role">${this.escapeHtml(m.role)}</div>
                      </div>
                    </div>
                    <p class="execom-func-bio">${this.escapeHtml(m.bio)}</p>
                  </div>
                  <div class="execom-func-badge">${this.escapeHtml(m.badge)}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- C. Tier 2: Junior Executive Committee -->
          <div id="section-junior" class="execom-tier-wrap">
            <div class="execom-tier-header">
              <div>
                <div class="execom-tier-tag">Tier 2 • Junior Execom</div>
                <h2 class="execom-tier-h2">Junior Executive Operational Tracks</h2>
                <div class="execom-tier-desc">6 appointed junior executives dedicated to technical simulation toolkits, stage ops, venue logistics, and audit archival.</div>
              </div>
              <div class="execom-mandate-ref">6 Appointed Members</div>
            </div>

            <div class="execom-junior-grid">
              ${data.juniorExecom.map(j => `
                <div class="execom-junior-card">
                  <div>
                    <span class="execom-track-pill">${this.escapeHtml(j.track)}</span>
                    <div class="execom-junior-mid">
                      <div class="execom-mini-avatar">${j.avatar}</div>
                      <div>
                        <h4 class="execom-junior-name">${this.escapeHtml(j.name)}</h4>
                        <div class="execom-junior-badge">${this.escapeHtml(j.badge)}</div>
                      </div>
                    </div>
                    <div class="execom-focus-box">
                      <span class="execom-focus-lbl">Operational Focus:</span>
                      ${this.escapeHtml(j.focus)}
                    </div>
                  </div>
                  <div class="execom-junior-footer">
                    <span>Mentored by Senior Leads</span>
                    <span>Session 2026–27</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- D. Tier 3: Student Chapter Directory -->
          <div id="section-roster" class="execom-tier-wrap">
            <div class="execom-tier-header">
              <div>
                <div class="execom-tier-tag">Tier 3 • Directory</div>
                <h2 class="execom-tier-h2">Student Chapter Members Roster</h2>
                <div class="execom-tier-desc">Complete cross-referenced registry of 48 registered undergraduate & postgraduate members.</div>
              </div>
              <div id="execom-live-count" class="execom-mandate-ref execom-mandate-crimson">
                Showing 34 General Members
              </div>
            </div>

            <!-- Interactive Minimalist Control Panel -->
            <div class="execom-ctrl-panel">
              <div class="execom-ctrl-row-1">
                <input type="text" id="execom-search" class="execom-search-input" placeholder="Search by student name, semester, department..." />
                
                <div class="execom-toggle-group">
                  <button type="button" class="execom-toggle-btn active" data-filter="general">General Members Only (${generalCount})</button>
                  <button type="button" class="execom-toggle-btn" data-filter="all">Show All Members (${totalCount})</button>
                </div>

                <div class="execom-view-btns">
                  <button type="button" class="execom-view-btn execom-pill-btn active" data-mode="grid">Grid</button>
                  <button type="button" class="execom-view-btn execom-pill-btn" data-mode="table">Table</button>
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

                <div class="execom-dept-wrap">
                  <span class="execom-filter-lbl">Department:</span>
                  <select id="execom-dept-select" class="execom-dept-select">
                    <option value="All">All Departments</option>
                    <option value="Mechanical Engineering">Mechanical Engineering (44)</option>
                    <option value="Chemical Engineering">Chemical Engineering (4)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Dynamic Members List Container -->
            <div id="execom-members-display" class="execom-roster-grid"></div>
          </div>
        </div>
      `;
    },

    initExecomInteractivity(container) {
      const searchInput = container.querySelector('#execom-search');
      const deptSelect = container.querySelector('#execom-dept-select');
      const displayEl = container.querySelector('#execom-members-display');
      const countEl = container.querySelector('#execom-live-count');
      const toggleBtns = container.querySelectorAll('.execom-toggle-btn');
      const pillBtns = container.querySelectorAll('.execom-pill-btn');
      const tabBtns = container.querySelectorAll('.execom-tab-btn');
      const viewModeBtns = container.querySelectorAll('.execom-view-btn');

      if (!displayEl) return;

      let state = {
        query: '',
        sem: 'All',
        dept: 'All',
        showAll: false,
        viewMode: 'grid',
        activeTab: 'all'
      };

      const renderRoster = () => {
        const filtered = EXECOM_ROSTER_DATA.roster.filter(m => {
          if (!state.showAll && m.isExecom) return false;
          if (state.query) {
            const q = state.query.toLowerCase();
            const matchName = m.name.toLowerCase().includes(q);
            const matchDept = m.department.toLowerCase().includes(q);
            const matchSem = m.semester.toLowerCase().includes(q);
            const matchRole = m.execomRole ? m.execomRole.toLowerCase().includes(q) : false;
            if (!matchName && !matchDept && !matchSem && !matchRole) return false;
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
          countEl.textContent = `Showing ${filtered.length} ${state.showAll ? 'Total Members' : 'General Members'}`;
        }

        if (filtered.length === 0) {
          displayEl.innerHTML = `
            <div class="execom-empty-box">
              <h4 class="execom-empty-title">No members match your criteria</h4>
              <p class="execom-empty-desc">Try clearing search keywords or selecting 'All' in semester and department filters.</p>
            </div>
          `;
          return;
        }

        if (state.viewMode === 'grid') {
          displayEl.className = 'execom-roster-grid';
          displayEl.innerHTML = filtered.map(m => `
            <div class="execom-student-card ${m.isExecom ? 'is-execom' : ''}">
              <div>
                <div class="execom-card-top-sem">
                  <span class="execom-sem-tag">${m.semester}</span>
                  ${m.isExecom ? `<span class="execom-exe-status">${m.execomTier === 'senior' ? 'Senior Execom' : 'Junior Execom'}</span>` : ''}
                </div>
                <div class="execom-student-info-row">
                  <div class="execom-student-monogram">
                    ${m.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <div style="min-width: 0;">
                    <div class="execom-student-name" title="${PublicRenderer.escapeHtml(m.name)}">${PublicRenderer.escapeHtml(m.name)}</div>
                    <div class="execom-student-meta">${PublicRenderer.escapeHtml(m.programme)} • ${PublicRenderer.escapeHtml(m.department)}</div>
                  </div>
                </div>
              </div>
              ${m.isExecom ? `<div class="execom-role-ribbon">${PublicRenderer.escapeHtml(m.execomRole)}</div>` : ''}
            </div>
          `).join('');
        } else {
          displayEl.className = 'execom-table-wrap';
          displayEl.innerHTML = `
            <table class="execom-table">
              <thead>
                <tr>
                  <th style="width: 45px;">#</th>
                  <th>Student Name</th>
                  <th>Programme</th>
                  <th>Department</th>
                  <th style="text-align: center;">Semester</th>
                  <th>Executive Status</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map((m, idx) => `
                  <tr class="${m.isExecom ? 'is-execom' : ''}">
                    <td class="execom-td-num">${idx + 1}</td>
                    <td class="execom-td-name">${PublicRenderer.escapeHtml(m.name)}</td>
                    <td>${PublicRenderer.escapeHtml(m.programme)}</td>
                    <td>${PublicRenderer.escapeHtml(m.department)}</td>
                    <td style="text-align: center;"><span class="execom-sem-tag">${m.semester}</span></td>
                    <td>
                      ${m.isExecom
                        ? `<span class="execom-exe-status">${PublicRenderer.escapeHtml(m.execomRole)}</span>`
                        : `<span class="execom-general-status">General Member</span>`}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `;
        }
      };

      // Search event
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          state.query = e.target.value.trim();
          renderRoster();
        });
      }

      // Dept event
      if (deptSelect) {
        deptSelect.addEventListener('change', (e) => {
          state.dept = e.target.value;
          renderRoster();
        });
      }

      // General / All toggle
      toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          toggleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.showAll = (btn.dataset.filter === 'all');
          renderRoster();
        });
      });

      // Semester pills
      pillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          pillBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.sem = btn.dataset.sem || 'All';
          renderRoster();
        });
      });

      // View mode (grid vs table)
      viewModeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          viewModeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.viewMode = btn.dataset.mode || 'grid';
          renderRoster();
        });
      });

      // Section Jump Tabs
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

      // Initial roster render
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
  // 6. PHASE 2: PROTECTED MASTER CONTROL STUDIO (#/admin)
  // ==========================================================================
  const AdminStudio = {
    activePageSlug: '/',
    activeSectionId: null,

    init() {
      this.bindEvents();
    },

    open() {
      const blueprint = SiteStore.get();
      if (!blueprint.pages[this.activePageSlug]) {
        this.activePageSlug = Object.keys(blueprint.pages)[0] || '/';
      }

      // Populate Page Switcher Dropdown
      this.populatePageSelect();

      // Render Sidebar Sections Outline
      this.renderSectionsOutline();

      // Render Pages & Nav in Domain 3
      this.renderPagesManager();

      // Populate Theme Controls
      this.populateThemeForm();

      // Render Live Canvas
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
      if (!page.sections || page.sections.length === 0) {
        renderEl.innerHTML = `
          <div style="padding: 6rem 2rem; text-align: center; color: #94A3B8;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📄</div>
            <h3 style="font-size: 1.4rem; color: #1E293B; margin-bottom: 0.5rem;">This page has no sections</h3>
            <p style="font-size: 0.95rem; margin-bottom: 1.5rem;">Click below or use the sidebar to add your first content block.</p>
            <button class="btn btn-primary" onclick="document.getElementById('btn-open-block-library').click()">+ Add Block</button>
          </div>
        `;
        return;
      }

      page.sections.forEach(section => {
        const html = PublicRenderer.generateBlockHtml(section, true);
        renderEl.insertAdjacentHTML('beforeend', html);
      });

      // Highlight active section if any
      if (this.activeSectionId) {
        const activeBlock = renderEl.querySelector(`[data-section-id="${this.activeSectionId}"]`);
        if (activeBlock) activeBlock.classList.add('active-editing');
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
              <button class="outline-btn btn-action-move-up" data-section-id="${section.id}" title="Move Up" ${index === 0 ? 'disabled style="opacity:0.3;"' : ''}>▲</button>
              <button class="outline-btn btn-action-move-down" data-section-id="${section.id}" title="Move Down" ${index === page.sections.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>▼</button>
              <button class="outline-btn btn-action-toggle-vis" data-section-id="${section.id}" title="${isVisible ? 'Hide Section' : 'Show Section'}">${isVisible ? '👁' : '🚫'}</button>
              <button class="outline-btn btn-action-delete" data-section-id="${section.id}" title="Delete" style="color: #EF4444;">✕</button>
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

      // Pages list
      pagesListEl.innerHTML = Object.keys(blueprint.pages).map(slug => {
        const page = blueprint.pages[slug];
        const count = (page.sections && page.sections.length) || 0;
        const isHome = slug === '/';
        return `
          <div class="section-outline-item" style="cursor: default;">
            <div>
              <strong style="color: #FFFFFF; font-size: 0.95rem;">${PublicRenderer.escapeHtml(page.title)}</strong>
              <div style="font-size: 0.75rem; color: var(--studio-text-muted);">${slug} • ${count} sections</div>
            </div>
            <div class="outline-actions">
              <button class="outline-btn btn-switch-page" data-page-slug="${slug}" title="Edit this page">✎</button>
              ${!isHome ? `<button class="outline-btn btn-delete-page" data-page-slug="${slug}" title="Delete page" style="color: #EF4444;">🗑</button>` : ''}
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
      const page = blueprint.pages[this.activePageSlug];
      const section = (page.sections || []).find(s => s.id === sectionId);

      if (!section) {
        containerEl.innerHTML = `
          <div class="empty-inspector-state">
            <h4>Section Not Found</h4>
            <p>Please select another section from the Structure tab.</p>
          </div>
        `;
        return;
      }

      const { type, layout = {}, content = {} } = section;

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

          <div class="form-group">
            <label>Alignment</label>
            <select class="form-select" id="insp-layout-align">
              <option value="left" ${layout.alignment === 'left' ? 'selected' : ''}>Left Aligned</option>
              <option value="center" ${layout.alignment === 'center' ? 'selected' : ''}>Centered</option>
            </select>
          </div>

          ${(type === 'grid-cards') ? `
            <div class="form-group">
              <label>Columns (1 to 4)</label>
              <select class="form-select" id="insp-layout-cols">
                <option value="1" ${layout.columns === 1 ? 'selected' : ''}>1 Column</option>
                <option value="2" ${layout.columns === 2 ? 'selected' : ''}>2 Columns</option>
                <option value="3" ${layout.columns === 3 ? 'selected' : ''}>3 Columns</option>
                <option value="4" ${layout.columns === 4 ? 'selected' : ''}>4 Columns</option>
              </select>
            </div>
          ` : ''}
        </div>

        <div class="inspector-card">
          <div class="inspector-card-title">Content &amp; Text Editor</div>
          
          ${content.eyebrow !== undefined ? `
            <div class="form-group">
              <label>Eyebrow Badge Text</label>
              <input type="text" class="form-input" id="insp-content-eyebrow" value="${PublicRenderer.escapeHtml(content.eyebrow || '')}">
            </div>
          ` : ''}

          ${content.title !== undefined ? `
            <div class="form-group">
              <label>Main Heading</label>
              <input type="text" class="form-input" id="insp-content-title" value="${PublicRenderer.escapeHtml(content.title || '')}">
            </div>
          ` : ''}

          ${content.subtitle !== undefined ? `
            <div class="form-group">
              <label>Subtitle / Lead</label>
              <textarea class="form-textarea" rows="3" id="insp-content-subtitle">${PublicRenderer.escapeHtml(content.subtitle || '')}</textarea>
            </div>
          ` : ''}

          ${content.body !== undefined ? `
            <div class="form-group">
              <label>Body Description</label>
              <textarea class="form-textarea" rows="4" id="insp-content-body">${PublicRenderer.escapeHtml(content.body || '')}</textarea>
            </div>
          ` : ''}

          ${content.description !== undefined ? `
            <div class="form-group">
              <label>Section Description</label>
              <textarea class="form-textarea" rows="2" id="insp-content-desc">${PublicRenderer.escapeHtml(content.description || '')}</textarea>
            </div>
          ` : ''}

          ${content.button1Text !== undefined ? `
            <div class="form-group">
              <label>Primary Button Label</label>
              <input type="text" class="form-input" id="insp-content-btn1-text" value="${PublicRenderer.escapeHtml(content.button1Text || '')}">
            </div>
            <div class="form-group">
              <label>Primary Button Link URL</label>
              <input type="text" class="form-input" id="insp-content-btn1-url" value="${PublicRenderer.escapeHtml(content.button1Url || '')}">
            </div>
          ` : ''}

          ${content.button2Text !== undefined ? `
            <div class="form-group">
              <label>Secondary Button Label</label>
              <input type="text" class="form-input" id="insp-content-btn2-text" value="${PublicRenderer.escapeHtml(content.button2Text || '')}">
            </div>
            <div class="form-group">
              <label>Secondary Button Link URL</label>
              <input type="text" class="form-input" id="insp-content-btn2-url" value="${PublicRenderer.escapeHtml(content.button2Url || '')}">
            </div>
          ` : ''}

          ${content.imageUrl !== undefined ? `
            <div class="form-group">
              <label>Featured Image URL</label>
              <input type="text" class="form-input" id="insp-content-img" value="${PublicRenderer.escapeHtml(content.imageUrl || '')}">
            </div>
          ` : ''}

          ${content.html !== undefined ? `
            <div class="form-group">
              <label>Custom HTML / Embed Snippet</label>
              <textarea class="form-textarea" rows="6" id="insp-content-html">${PublicRenderer.escapeHtml(content.html || '')}</textarea>
            </div>
          ` : ''}

          <button id="btn-save-inspector-content" class="btn btn-primary btn-block" style="margin-top: 1rem;">Apply Changes</button>
        </div>
      `;

      // Attach apply handler
      document.getElementById('btn-save-inspector-content').addEventListener('click', () => {
        this.saveInspectorChanges(sectionId);
      });
    },

    saveInspectorChanges(sectionId) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      const section = (page.sections || []).find(s => s.id === sectionId);
      if (!section) return;

      const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value : null;
      };

      // Update layout
      if (!section.layout) section.layout = {};
      const width = getVal('insp-layout-width');
      const pad = getVal('insp-layout-pad');
      const bg = getVal('insp-layout-bg');
      const align = getVal('insp-layout-align');
      const cols = getVal('insp-layout-cols');

      if (width) section.layout.containerWidth = width;
      if (pad) section.layout.paddingY = pad;
      if (bg) section.layout.bgType = bg;
      if (align) section.layout.alignment = align;
      if (cols) section.layout.columns = parseInt(cols, 10);

      // Update content
      if (!section.content) section.content = {};
      const eyebrow = getVal('insp-content-eyebrow');
      const title = getVal('insp-content-title');
      const subtitle = getVal('insp-content-subtitle');
      const body = getVal('insp-content-body');
      const desc = getVal('insp-content-desc');
      const btn1Text = getVal('insp-content-btn1-text');
      const btn1Url = getVal('insp-content-btn1-url');
      const btn2Text = getVal('insp-content-btn2-text');
      const btn2Url = getVal('insp-content-btn2-url');
      const img = getVal('insp-content-img');
      const html = getVal('insp-content-html');

      if (eyebrow !== null) section.content.eyebrow = eyebrow;
      if (title !== null) section.content.title = title;
      if (subtitle !== null) section.content.subtitle = subtitle;
      if (body !== null) section.content.body = body;
      if (desc !== null) section.content.description = desc;
      if (btn1Text !== null) section.content.button1Text = btn1Text;
      if (btn1Url !== null) section.content.button1Url = btn1Url;
      if (btn2Text !== null) section.content.button2Text = btn2Text;
      if (btn2Url !== null) section.content.button2Url = btn2Url;
      if (img !== null) section.content.imageUrl = img;
      if (html !== null) section.content.html = html;

      SiteStore.save(blueprint, true);
      App.showToast('Section updated successfully.');
      this.renderSectionsOutline();
      this.renderLiveCanvas();
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

      // Create Page Form Submission
      const createPageForm = document.getElementById('create-page-form');
      if (createPageForm) {
        createPageForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const title = document.getElementById('new-page-title').value.trim();
          let slug = document.getElementById('new-page-slug').value.trim();
          if (!slug.startsWith('/')) slug = '/' + slug;
          const addToNav = document.getElementById('new-page-add-nav').checked;

          const blueprint = SiteStore.get();
          if (blueprint.pages[slug]) {
            alert('A page with this slug already exists.');
            return;
          }

          blueprint.pages[slug] = {
            title: title,
            slug: slug,
            sections: [
              {
                id: `sec-${Date.now()}`,
                type: 'hero',
                layout: { containerWidth: 'boxed', paddingY: 'lg', bgType: 'canvas', alignment: 'center', visible: true },
                content: {
                  eyebrow: 'New Chapter Page',
                  title: title,
                  subtitle: `Welcome to the ${title} section of the ISHMT RCT Students Chapter at TKMCE.`
                }
              }
            ]
          };

          if (addToNav) {
            blueprint.navigation.push({
              id: `nav-${Date.now()}`,
              label: title,
              path: slug,
              isPublic: true
            });
          }

          SiteStore.save(blueprint, true);
          document.getElementById('create-page-modal').classList.add('hidden');
          createPageForm.reset();

          this.activePageSlug = slug;
          this.open();
          App.showToast(`Page "${title}" created successfully.`);
        });
      }

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
          if (confirm('Reset site blueprint to default ISHMT TKMCE structure? Custom pages and edits will be restored.')) {
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

      // Global Theme Form Controls
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
          blueprint.globalTheme.headerBorderColor = document.getElementById('theme-header-border').value;
          blueprint.globalTheme.fontFamily = document.getElementById('theme-font-family').value;
          blueprint.globalTheme.borderRadius = document.getElementById('theme-border-radius').value;

          SiteStore.save(blueprint, true);
          App.showToast('Global theme updated.');
        });

        document.getElementById('btn-reset-theme').addEventListener('click', () => {
          const blueprint = SiteStore.get();
          blueprint.globalTheme = JSON.parse(JSON.stringify(DEFAULT_BLUEPRINT.globalTheme));
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

        // Duplicate
        const dupBtn = e.target.closest('.btn-action-duplicate');
        if (dupBtn) {
          e.stopPropagation();
          this.duplicateSection(dupBtn.getAttribute('data-section-id'));
          return;
        }

        // Delete
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

        // Canvas Block Click
        const canvasBlock = e.target.closest('.canvas-block-wrapper');
        if (canvasBlock && !e.target.closest('.block-hover-toolbar')) {
          this.selectSection(canvasBlock.getAttribute('data-section-id'));
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

        // Delete Page
        const delPageBtn = e.target.closest('.btn-delete-page');
        if (delPageBtn) {
          this.deletePage(delPageBtn.getAttribute('data-page-slug'));
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
        layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'center', visible: true },
        content: {}
      };

      // Populate default content based on block type
      switch (type) {
        case 'hero':
          newSection.content = {
            eyebrow: 'ISHMT RCT STUDENTS CHAPTER',
            title: 'New Section Headline',
            subtitle: 'Add an inspiring description highlighting engineering initiatives at TKM College of Engineering.',
            button1Text: 'Primary Action',
            button1Url: '#/'
          };
          break;
        case 'grid-cards':
          newSection.layout.columns = 3;
          newSection.content = {
            eyebrow: 'Domain Focus',
            title: 'New Card Grid',
            description: 'Explore the key specializations and workshop initiatives.',
            items: [
              { id: 'c-1', tag: 'Core', title: 'Card Item 1', description: 'Description of key topic.' },
              { id: 'c-2', tag: 'Lab', title: 'Card Item 2', description: 'Description of key topic.' },
              { id: 'c-3', tag: 'Research', title: 'Card Item 3', description: 'Description of key topic.' }
            ]
          };
          break;
        case 'stats-banner':
          newSection.layout.bgType = 'crimson-tint';
          newSection.content = {
            items: [
              { id: 's-1', number: '100+', label: 'Participants' },
              { id: 's-2', number: '12+', label: 'Sessions' },
              { id: 's-3', number: '100%', label: 'Hands-on Learning' }
            ]
          };
          break;
        case 'split-content':
          newSection.content = {
            eyebrow: 'Highlight',
            title: 'Detailed Story & Visual',
            body: 'Detailed narrative description of thermal and fluid investigations conducted at TKMCE.',
            buttonText: 'Read Report',
            buttonUrl: '#/',
            imageUrl: 'ishmt-logo.jpg'
          };
          break;
        case 'timeline':
          newSection.content = {
            eyebrow: 'Roadmap',
            title: 'Chapter Milestones',
            items: [
              { id: 't-1', year: 'Phase 1', title: 'Initial Phase', description: 'Launch of technical curriculum.' },
              { id: 't-2', year: 'Phase 2', title: 'Conclave Execution', description: 'Hands-on practical execution.' }
            ]
          };
          break;
        case 'image-gallery':
          newSection.content = {
            eyebrow: 'Media',
            title: 'Event Photography',
            items: [
              { id: 'g-1', title: 'Session Memory', caption: 'Student delegates', imageUrl: 'ishmt-logo.jpg' },
              { id: 'g-2', title: 'Lab Setup', caption: 'Experimental apparatus', imageUrl: 'ishmt-logo.jpg' }
            ]
          };
          break;
        case 'rich-text':
          newSection.content = {
            eyebrow: 'Publication',
            title: 'Editorial Overview',
            body: 'Detailed documentation and research guidelines for student engineers.'
          };
          break;
        case 'custom-embed':
          newSection.content = {
            heading: 'Custom Information Widget',
            html: '<div style="padding: 2rem; background: #F8FAFC; border-radius: 8px; text-align: center;">Custom HTML / Form Widget</div>'
          };
          break;
      }

      page.sections.push(newSection);
      SiteStore.save(blueprint, true);
      this.selectSection(newId);
      App.showToast(`New [${type}] section added.`);
    },

    moveSection(sectionId, delta) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      const idx = page.sections.findIndex(s => s.id === sectionId);
      if (idx === -1) return;

      const targetIdx = idx + delta;
      if (targetIdx < 0 || targetIdx >= page.sections.length) return;

      const temp = page.sections[idx];
      page.sections[idx] = page.sections[targetIdx];
      page.sections[targetIdx] = temp;

      SiteStore.save(blueprint, true);
      this.renderSectionsOutline();
      this.renderLiveCanvas();
    },

    duplicateSection(sectionId) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      const section = page.sections.find(s => s.id === sectionId);
      if (!section) return;

      const cloned = JSON.parse(JSON.stringify(section));
      cloned.id = `sec-${cloned.type}-${Date.now()}`;
      if (cloned.content && cloned.content.title) cloned.content.title += ' (Copy)';

      const idx = page.sections.indexOf(section);
      page.sections.splice(idx + 1, 0, cloned);

      SiteStore.save(blueprint, true);
      this.selectSection(cloned.id);
      App.showToast('Section duplicated.');
    },

    deleteSection(sectionId) {
      if (!confirm('Are you sure you want to delete this section?')) return;

      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      page.sections = page.sections.filter(s => s.id !== sectionId);

      if (this.activeSectionId === sectionId) {
        this.activeSectionId = null;
        const inspectorEl = document.getElementById('inspector-container');
        if (inspectorEl) {
          inspectorEl.innerHTML = `
            <div class="empty-inspector-state">
              <h4>Select a Section to Edit</h4>
              <p>Click on any block in the canvas or choose a section from the Structure tab.</p>
            </div>
          `;
        }
      }

      SiteStore.save(blueprint, true);
      this.renderSectionsOutline();
      this.renderLiveCanvas();
      App.showToast('Section deleted.');
    },

    toggleSectionVisibility(sectionId) {
      const blueprint = SiteStore.get();
      const page = blueprint.pages[this.activePageSlug];
      const section = page.sections.find(s => s.id === sectionId);
      if (!section) return;

      if (!section.layout) section.layout = {};
      section.layout.visible = section.layout.visible === false ? true : false;

      SiteStore.save(blueprint, true);
      this.renderSectionsOutline();
      this.renderLiveCanvas();
    },

    moveNav(idx, delta) {
      const blueprint = SiteStore.get();
      const targetIdx = idx + delta;
      if (targetIdx < 0 || targetIdx >= blueprint.navigation.length) return;

      const temp = blueprint.navigation[idx];
      blueprint.navigation[idx] = blueprint.navigation[targetIdx];
      blueprint.navigation[targetIdx] = temp;

      SiteStore.save(blueprint, true);
      this.renderPagesManager();
      App.showToast('Navigation reordered.');
    },

    deletePage(slug) {
      if (slug === '/') {
        alert('Home page cannot be deleted.');
        return;
      }
      if (!confirm(`Permanently delete page "${slug}"?`)) return;

      const blueprint = SiteStore.get();
      delete blueprint.pages[slug];
      blueprint.navigation = blueprint.navigation.filter(item => item.path !== slug);

      SiteStore.save(blueprint, true);
      this.activePageSlug = '/';
      this.open();
      App.showToast(`Page "${slug}" deleted.`);
    }
  };

  // ==========================================================================
  // 7. ROUTER & APPLICATION ORCHESTRATOR
  // ==========================================================================
  const App = {
    currentRoute: '/',

    init() {
      SiteStore.init();
      AdminStudio.init();
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

      // Keyboard replay in public mode (Space or R)
      window.addEventListener('keydown', (e) => {
        if ((e.code === 'Space' || e.key === ' ' || e.key === 'r' || e.key === 'R') &&
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

      if (isInitial && !IntroMotion.hasPlayedIntro) {
        // Run full 3-stage intro motion on initial visit
        IntroMotion.play();
      } else {
        // Instant docked mode when navigating between sub-pages
        IntroMotion.setInstantDocked();
      }

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
