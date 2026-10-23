import React from 'react';
import {
  ArrowRight,
  GraduationCap,
  Cpu,
  Flame,
  Award,
  Users,
  Calendar,
  Layers,
  History
} from 'lucide-react';

/**
 * HomePage Component for ISHMT Student Chapter at TKM College of Engineering
 * Design Theme: Deep Crimson (#8B1014), Crisp White (#FFFFFF), Light Warm Gray (#F9FAFB)
 * Typography: Playfair Display (Serif Headings) & Inter / Plus Jakarta Sans (Sans Body)
 */
  const handleScrollToAbout = (e) => {
    if (e) e.preventDefault();
    const aboutSection = document.getElementById('about-us') || document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, null, '#about-us');
      }
    }
  };

  const stats = [
    {
      stat: '50+',
      label: 'Student Members & Alumni',
      icon: Users
    },
    {
      stat: '1973',
      label: 'National ISHMT Scientific Legacy',
      icon: History
    }
  ];

  const offerings = [
    {
      id: 'lectures',
      title: 'Distinguished Lecture Series',
      description:
        'Expert technical seminars led by ISHMT fellows, aerospace scientists, and industry leaders.',
      icon: GraduationCap
    },
    {
      id: 'bootcamps',
      title: 'Simulation & Tool Bootcamps',
      description:
        'Practical training in OpenFOAM, ANSYS Fluent, meshing, and numerical heat transfer.',
      icon: Cpu
    },
    {
      id: 'hardware',
      title: 'Hardware & R&D Projects',
      description:
        'Prototyping heat pipes, phase-change thermal storage units, and solar collectors in TKMCE labs.',
      icon: Flame
    },
    {
      id: 'conference',
      title: 'Conference Mentorship',
      description:
        'Guidance for publishing papers and participating in the biennial ISHMT-ASTFE International Conference (IHMTC).',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#8B1014] selection:text-white">
      {/* =====================================================================
          SECTION A: HERO SECTION (FULL-WIDTH VIEWPORT WITH 40% BUILDING OPACITY)
          ===================================================================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Isolated Architectural Background Layer (Exactly 40% Opacity) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-white pointer-events-none select-none">
          <img
            src="tkmce-building.jpg"
            alt="TKM College of Engineering Administrative Building"
            className="w-full h-full object-cover object-center opacity-40"
            loading="eager"
          />
        </div>

        {/* Centered Floating Welcome Card (Unaffected by Background Opacity) */}
        <div className="relative z-10 max-w-3xl mx-4 my-12 md:my-16 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 text-center border border-gray-100">
          {/* Eyebrow Badge with Crimson Underline */}
          <div className="inline-block mb-5">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8B1014] pb-1.5 border-b-2 border-[#8B1014]">
              WELCOME TO ISHMT-TKMCE STUDENT CHAPTER
            </span>
          </div>

          {/* Main Serif Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Welcome to the ISHMT Student Chapter at TKM College of Engineering
          </h1>

          {/* CTA Buttons Row Directly Beneath Heading */}
          <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#800000] text-white font-medium text-base rounded-full shadow-lg shadow-maroon-900/20 hover:-translate-y-0.5 transition-transform duration-200 group cursor-pointer"
            >
              <span>Become a Member</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#about-us"
              onClick={handleScrollToAbout}
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-[#800000] border border-maroon-800 font-medium text-base rounded-full hover:bg-maroon-50 transition-all duration-200 cursor-pointer"
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION B: DEDICATED ABOUT US SECTION (EDITORIAL CONTAINER)
          ===================================================================== */}
      <section id="about-us" className="max-w-4xl mx-auto px-6 py-16 text-center bg-white scroll-mt-24">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#800000] tracking-tight">
          About Our Chapter
        </h2>
        {/* Subtle maroon dividing line */}
        <div className="w-16 h-1 bg-[#800000] mx-auto mt-4 mb-8 rounded"></div>

        <div className="space-y-6 text-stone-700 text-lg sm:text-xl leading-relaxed font-sans max-w-3xl mx-auto text-center">
          <p>
            We warmly welcome students, faculty, researchers, and engineering innovators to the Indian Society for Heat and Mass Transfer (ISHMT-RCT) Students Chapter at Thangal Kunju Musaliar College of Engineering, Kollam. Anchored in the Department of Mechanical Engineering, our chapter is your community to explore thermal sciences, energy transition, and computational fluid dynamics through hands-on workshops, lab research, and national academic collaborations.
          </p>
          <p className="text-base sm:text-lg text-stone-600">
            The Indian Society for Heat and Mass Transfer (ISHMT) is India’s foremost professional body dedicated to disseminating science and engineering across heat transfer, mass transport, thermodynamics, and energy systems. Affiliated regionally with ISHMT-RCT (Trivandrum), the student chapter at TKM College of Engineering serves as a technical hub bridging foundational engineering coursework with modern research and industrial applications.
          </p>
          <p className="text-base sm:text-lg text-stone-600">
            We nurture a collaborative culture where students engage directly with peer researchers, faculty mentors, and visiting scientists from premier organizations like ISRO/VSSC, national laboratories, and academic institutions.
          </p>
        </div>
      </section>

      {/* =====================================================================
          SECTION C: IMPACT & LEGACY STATISTICS BAR (CRIMSON BANNER)
          ===================================================================== */}
      <section className="bg-[#8B1014] text-white py-8 px-6 shadow-inner">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-2">
              <span className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
                {item.stat}
              </span>
              <span className="text-sm text-white/90 font-sans mt-1.5 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION D: WHAT WE OFFER SECTION (FEATURE CARDS GRID)
          ===================================================================== */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-[#8B1014] mx-auto mt-3"></div>
          </div>

          {/* 4-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white rounded-lg p-6 border border-gray-200 border-t-4 border-t-[#8B1014] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Crimson Icon Container */}
                    <div className="w-12 h-12 rounded-lg bg-[#8B1014]/10 text-[#8B1014] flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-[#8B1014]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif font-bold text-lg text-gray-900 mb-2 leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
