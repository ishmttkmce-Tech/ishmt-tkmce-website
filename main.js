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
      { id: 'nav-home', label: 'Home', path: '/', isPublic: true },
      { id: 'nav-events', label: 'Events & Workshops', path: '/events', isPublic: true },
      { id: 'nav-research', label: 'Research & Labs', path: '/research', isPublic: true },
      { id: 'nav-team', label: 'Executive Team', path: '/team', isPublic: true },
      { id: 'nav-gallery', label: 'Gallery', path: '/gallery', isPublic: true },
      { id: 'nav-contact', label: 'Contact', path: '/contact', isPublic: true }
    ],
    pages: {
      '/': {
        title: 'Home',
        slug: '/',
        sections: [
          {
            id: 'sec-hero',
            type: 'hero',
            layout: { containerWidth: 'wide', paddingY: 'lg', bgType: 'canvas', alignment: 'left', visible: true },
            content: {
              eyebrow: 'INDIAN SOCIETY FOR HEAT AND MASS TRANSFER',
              title: 'Empowering Thermal & Fluid Engineering Innovation',
              subtitle: 'Regional Chapter Thiruvananthapuram (RCT) Students Chapter at TKM College of Engineering, Kollam. Driving hands-on excellence in computational heat transfer, thermodynamics, fluid dynamics, and aerospace thermal protection.',
              button1Text: 'Explore Technical Events',
              button1Url: '#/events',
              button2Text: 'Join Student Chapter',
              button2Url: '#/contact',
              cardTitle: 'TKMCE Students Chapter',
              cardSubtitle: 'Est. 2021 • Department of Mechanical Engineering'
            }
          },
          {
            id: 'sec-stats',
            type: 'stats-banner',
            layout: { containerWidth: 'wide', paddingY: 'sm', bgType: 'crimson-tint', alignment: 'center', visible: true },
            content: {
              items: [
                { id: 'stat-1', number: '500+', label: 'Active Student Members' },
                { id: 'stat-2', number: '28+', label: 'National Workshops & Conclaves' },
                { id: 'stat-3', number: '16+', label: 'Research Publications' },
                { id: 'stat-4', number: 'Rank #1', label: 'Regional Student Chapter' }
              ]
            }
          },
          {
            id: 'sec-about',
            type: 'split-content',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'left', visible: true },
            content: {
              eyebrow: 'About Our Chapter',
              title: 'Bridging Fundamental Thermodynamics & Aerospace Engineering',
              body: 'The ISHMT RCT Students Chapter at TKMCE was established to foster collaborative research and practical engineering knowledge in heat and mass transfer. Our chapter provides students direct exposure to world-class faculty mentors, ISRO/DRDO scientists, and industry leaders in power generation, EV thermal management, and cryogenics.',
              buttonText: 'View Executive Council',
              buttonUrl: '#/team',
              imageUrl: 'ishmt-logo.jpg',
              reversed: false
            }
          },
          {
            id: 'sec-domains',
            type: 'grid-cards',
            layout: { columns: 3, containerWidth: 'boxed', paddingY: 'md', bgType: 'subtle', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Core Focus Areas',
              title: 'Technical Domains & Research Tracks',
              description: 'Undergraduate and postgraduate students at TKMCE collaborate across multidisciplinary thermal science specializations.',
              items: [
                {
                  id: 'card-1',
                  tag: 'Simulation',
                  title: 'Computational Fluid Dynamics (CFD)',
                  description: 'Turbulence modeling, aerodynamic drag reduction, and multiphase simulations using OpenFOAM and ANSYS Fluent.',
                  linkText: 'Learn more →',
                  linkUrl: '#/research'
                },
                {
                  id: 'card-2',
                  tag: 'Energy',
                  title: 'Battery Thermal Management (BTMS)',
                  description: 'Phase change material (PCM) integration and liquid cold plate designs for next-generation electric vehicles.',
                  linkText: 'Learn more →',
                  linkUrl: '#/research'
                },
                {
                  id: 'card-3',
                  tag: 'Aerospace',
                  title: 'Cryogenics & Rocket Propulsion',
                  description: 'Thermal boundary layer analysis, regeneratively cooled thrust chambers, and cryogenic propellant heat transfer.',
                  linkText: 'Learn more →',
                  linkUrl: '#/research'
                }
              ]
            }
          },
          {
            id: 'sec-timeline',
            type: 'timeline',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Chapter Journey',
              title: 'Key Milestones & Achievements',
              description: 'Tracing our legacy of technical excellence at TKM College of Engineering.',
              items: [
                { id: 'time-1', year: '2021', title: 'Charter Inception', description: 'Official inauguration under ISHMT Regional Chapter Thiruvananthapuram.' },
                { id: 'time-2', year: '2022', title: 'National CFD Conclave', description: 'Over 350 delegates from premier engineering colleges across India.' },
                { id: 'time-3', year: '2023', title: 'Best Regional Chapter Award', description: 'Honored by National ISHMT Council for technical outreach and innovation.' },
                { id: 'time-4', year: '2025–26', title: 'Innovation Thermal Lab', description: 'Establishment of dedicated hardware test rigs for microchannel heat sinks.' }
              ]
            }
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
      '/research': {
        title: 'Research & Labs',
        slug: '/research',
        sections: [
          {
            id: 'sec-research-hero',
            type: 'hero',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Applied Investigations',
              title: 'Cutting-Edge Heat & Mass Transfer Research',
              subtitle: 'Student-led research initiatives mentored by faculty in the Department of Mechanical Engineering at TKMCE.',
              button1Text: 'Submit Research Abstract',
              button1Url: '#/contact'
            }
          },
          {
            id: 'sec-research-grid',
            type: 'grid-cards',
            layout: { columns: 2, containerWidth: 'boxed', paddingY: 'md', bgType: 'subtle', alignment: 'left', visible: true },
            content: {
              eyebrow: 'Active Research Grants & Projects',
              title: 'Ongoing Student Investigations',
              description: 'Projects presented at international conferences and published in peer-reviewed journals.',
              items: [
                {
                  id: 'res-1',
                  tag: 'Nanomaterials',
                  title: 'Nanofluid Heat Transfer in Microchannels',
                  description: 'Investigating thermal conductivity enhancements of Al2O3 and graphene oxide aqueous dispersions in micro-scale heat sinks.',
                  linkText: 'Read Abstract →',
                  linkUrl: '#/contact'
                },
                {
                  id: 'res-2',
                  tag: 'Renewables',
                  title: 'Solar Desalination with Organic PCMs',
                  description: 'Evaluating latent heat energy storage in stepped solar stills for nocturnal freshwater generation.',
                  linkText: 'Read Abstract →',
                  linkUrl: '#/contact'
                },
                {
                  id: 'res-3',
                  tag: 'Gas Turbines',
                  title: 'Film Cooling in High-Pressure Turbine Vanes',
                  description: 'Numerical evaluation of shaped film hole geometries and blowing ratios on adiabatic cooling effectiveness.',
                  linkText: 'Read Abstract →',
                  linkUrl: '#/contact'
                },
                {
                  id: 'res-4',
                  tag: 'Electrification',
                  title: 'Liquid Cold Plate Optimization for Li-ion Packs',
                  description: 'CFD design of serpentine and mini-channel flow distributions to minimize temperature gradients in EV battery cells.',
                  linkText: 'Read Abstract →',
                  linkUrl: '#/contact'
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
            id: 'sec-team-hero',
            type: 'hero',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'crimson-tint', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Leadership & Mentorship',
              title: 'Executive Council 2025–2026',
              subtitle: 'Meet the faculty advisors and student leaders steering the ISHMT RCT Students Chapter at TKM College of Engineering.'
            }
          },
          {
            id: 'sec-team-grid',
            type: 'grid-cards',
            layout: { columns: 3, containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Council Members',
              title: 'Faculty Mentors & Student Office Bearers',
              description: 'Dedicated to upholding high technical standards and fostering professional growth.',
              items: [
                { id: 'team-1', tag: 'Faculty Advisor', title: 'Dr. K. E. Reby Roy', description: 'Professor, Department of Mechanical Engineering, TKMCE. Expert in advanced thermal sciences.' },
                { id: 'team-2', tag: 'Chapter Mentor', title: 'Dr. S. Jose', description: 'Thermal Engineering Specialist & Senior Member, National ISHMT Council.' },
                { id: 'team-3', tag: 'Student Chairperson', title: 'Arjun S. Nair', description: 'Final Year Mechanical Engineering. Leading chapter outreach and national conclaves.' },
                { id: 'team-4', tag: 'Technical Secretary', title: 'Ananya M. Pillai', description: 'Head of Technical Operations, Workshop Curriculums, and CFD training.' },
                { id: 'team-5', tag: 'Research Lead', title: 'Devanand K.', description: 'Coordinator for student research papers and experimental test bench setups.' },
                { id: 'team-6', tag: 'Outreach & Media', title: 'Sneha R.', description: 'Managing institutional partnerships, industry visits, and digital communications.' }
              ]
            }
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
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'canvas', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Memories & Moments',
              title: 'Chapter Photo Gallery',
              subtitle: 'Snapshots from our hands-on workshops, lab experiments, industrial visits, and national award ceremonies.'
            }
          },
          {
            id: 'sec-gallery-grid',
            type: 'image-gallery',
            layout: { containerWidth: 'boxed', paddingY: 'md', bgType: 'subtle', alignment: 'center', visible: true },
            content: {
              eyebrow: 'Photo Highlights',
              title: 'Campus Activities & Conclaves',
              description: 'Explore the vibrant student community at TKM College of Engineering.',
              items: [
                { id: 'img-1', title: 'National Conclave Keynote', caption: 'LPSC ISRO scientist addressing 350+ delegates in Jubilee Hall', imageUrl: 'ishmt-logo.jpg' },
                { id: 'img-2', title: 'Wind Tunnel Calibration', caption: 'Aerodynamics and convective heat transfer research group', imageUrl: 'ishmt-logo.jpg' },
                { id: 'img-3', title: 'CFD Lab Simulation Sprint', caption: 'Hands-on OpenFOAM meshing and solver workshops', imageUrl: 'ishmt-logo.jpg' },
                { id: 'img-4', title: 'NTPC Power Station Tour', caption: 'Industrial field visit exploring steam turbine surface condensers', imageUrl: 'ishmt-logo.jpg' },
                { id: 'img-5', title: 'Annual Chapter Assembly', caption: 'Felicitating technical paper presentation winners', imageUrl: 'ishmt-logo.jpg' },
                { id: 'img-6', title: 'Hands-on Hardware Test Rig', caption: 'Liquid cold plate temperature acquisition for EV cells', imageUrl: 'ishmt-logo.jpg' }
              ]
            }
          }
        ]
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
  const STORAGE_KEY = 'ishmt_site_blueprint_v1';
  const AUTH_KEY = 'ishmt_admin_session';

  const SiteStore = {
    blueprint: null,

    init() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          this.blueprint = JSON.parse(saved);
          if (this.blueprint && this.blueprint.globalTheme) {
            // Automatically upgrade stored theme to Crimson Red #8B0D1A / Black #0B0B0B / Off White #F5F2ED
            if (this.blueprint.globalTheme.primaryColor !== '#8B0D1A' || this.blueprint.globalTheme.charcoalColor !== '#0B0B0B' || this.blueprint.globalTheme.canvasBg !== '#F5F2ED') {
              this.blueprint.globalTheme.primaryColor = DEFAULT_BLUEPRINT.globalTheme.primaryColor;
              this.blueprint.globalTheme.charcoalColor = DEFAULT_BLUEPRINT.globalTheme.charcoalColor;
              this.blueprint.globalTheme.secondaryTextColor = DEFAULT_BLUEPRINT.globalTheme.secondaryTextColor;
              this.blueprint.globalTheme.canvasBg = DEFAULT_BLUEPRINT.globalTheme.canvasBg;
              this.blueprint.globalTheme.headerGradient = DEFAULT_BLUEPRINT.globalTheme.headerGradient;
              this.blueprint.globalTheme.headerBorderColor = DEFAULT_BLUEPRINT.globalTheme.headerBorderColor;
              this.save(this.blueprint, false);
            }
          }
        } else {
          this.blueprint = JSON.parse(JSON.stringify(DEFAULT_BLUEPRINT));
          this.save(this.blueprint, false);
        }
      } catch (e) {
        console.warn('Error reading from localStorage, using default blueprint:', e);
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
  // 5. PUBLIC VIEW RENDERER (Phase 1: 100% Read-Only)
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

      page.sections.forEach(section => {
        if (section.layout && section.layout.visible === false) return;
        const sectionHtml = this.generateBlockHtml(section, false);
        contentEl.insertAdjacentHTML('beforeend', sectionHtml);
      });

      // Render Clean Footer
      contentEl.insertAdjacentHTML('beforeend', `
        <footer class="site-footer">
          <div class="footer-content">
            <div>
              <div class="footer-brand">ISHMT RCT STUDENTS CHAPTER • TKMCE</div>
              <p style="font-size: 0.85rem; margin-top: 0.35rem; color: #64748B;">Department of Mechanical Engineering, TKM College of Engineering, Kollam, Kerala.</p>
            </div>
            <div style="font-size: 0.85rem;">
              © ${new Date().getFullYear()} ISHMT RCT Chapter TKMCE. All rights reserved.
            </div>
          </div>
        </footer>
      `);
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
      const widthClass = layout.containerWidth || 'boxed';
      const padClass = `pad-${layout.paddingY || 'md'}`;
      const bgClass = `bg-${layout.bgType || 'canvas'}`;
      const alignClass = `align-${layout.alignment || 'left'}`;

      let innerContent = '';

      switch (type) {
        case 'hero':
          innerContent = `
            <div class="hero-block">
              <div class="hero-grid">
                <div>
                  ${content.eyebrow ? `<div class="badge-eyebrow">${this.escapeHtml(content.eyebrow)}</div>` : ''}
                  <h1 class="section-heading">${this.escapeHtml(content.title || '')}</h1>
                  ${content.subtitle ? `<p class="section-desc">${this.escapeHtml(content.subtitle)}</p>` : ''}
                  <div class="block-actions">
                    ${content.button1Text ? `<a href="${content.button1Url || '#'}" class="btn btn-primary">${this.escapeHtml(content.button1Text)}</a>` : ''}
                    ${content.button2Text ? `<a href="${content.button2Url || '#'}" class="btn btn-outline">${this.escapeHtml(content.button2Text)}</a>` : ''}
                  </div>
                </div>
                <div class="hero-visual-card">
                  <div class="hero-emblem-halo">
                    <img src="ishmt-logo.jpg" alt="ISHMT Emblem">
                  </div>
                  <div class="hero-card-meta">${this.escapeHtml(content.cardTitle || 'TKMCE Students Chapter')}</div>
                  <div class="hero-card-sub">${this.escapeHtml(content.cardSubtitle || 'Affiliated to ISHMT National Council')}</div>
                </div>
              </div>
            </div>
          `;
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
