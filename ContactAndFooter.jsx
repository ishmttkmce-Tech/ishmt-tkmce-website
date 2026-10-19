import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Building2,
  Mail,
  Phone,
  Send,
  ArrowUp,
  CheckCircle2,
  ExternalLink,
  Globe,
  Compass
} from 'lucide-react';

/**
 * Contact Us Section Component
 */
export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: ''
  });

  const [activeMap, setActiveMap] = useState('tkmce'); // 'tkmce' | 'rct'
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  const mapUrls = {
    tkmce:
      'https://maps.google.com/maps?q=TKM+College+of+Engineering+Karicode+Kollam+Kerala+691005&t=&z=15&ie=UTF8&iwloc=&output=embed',
    rct:
      'https://maps.google.com/maps?q=Liquid+Propulsion+Systems+Centre+Valiamala+Thiruvananthapuram+Kerala+695547&t=&z=14&ie=UTF8&iwloc=&output=embed'
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* =====================================================================
          1. PAGE TITLE BANNER
          ===================================================================== */}
      <section className="bg-[#F9F9F9] border-y border-gray-200 py-8 text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-[#8B1014] tracking-tight font-bold">
          Contact Us
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Indian Society for Heat and Mass Transfer • TKMCE Student Chapter &amp; Regional Chapter
        </p>
      </section>

      {/* =====================================================================
          2. MAIN TWO-COLUMN CONTACT SECTION
          ===================================================================== */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: MINIMALIST CONTACT FORM */}
          <div>
            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                Send an Inquiry
              </h2>
              <div className="w-12 h-1 bg-[#8B1014] mt-2 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect with our faculty coordinators, executive council, or regional liaisons for
                student membership, academic partnerships, or workshop inquiries.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3 text-green-800 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>
                  Thank you! Your message has been received. Our chapter team will get back to
                  you shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  className="w-full border-0 border-b border-gray-400 focus:border-[#8B1014] focus:ring-0 py-3 px-1 text-gray-800 placeholder-gray-500 transition-colors bg-transparent outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="w-full border-0 border-b border-gray-400 focus:border-[#8B1014] focus:ring-0 py-3 px-1 text-gray-800 placeholder-gray-500 transition-colors bg-transparent outline-none"
                />
              </div>

              {/* Telephone */}
              <div>
                <input
                  type="tel"
                  name="telephone"
                  id="contact-telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Telephone"
                  className="w-full border-0 border-b border-gray-400 focus:border-[#8B1014] focus:ring-0 py-3 px-1 text-gray-800 placeholder-gray-500 transition-colors bg-transparent outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  required
                  className="w-full border-0 border-b border-gray-400 focus:border-[#8B1014] focus:ring-0 py-3 px-1 text-gray-800 placeholder-gray-500 transition-colors bg-transparent outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message... *"
                  required
                  className="w-full border-0 border-b border-gray-400 focus:border-[#8B1014] focus:ring-0 py-3 px-1 text-gray-800 placeholder-gray-500 transition-colors bg-transparent outline-none resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8B1014] hover:bg-[#6e0c0f] active:bg-[#580a0c] text-white font-medium py-3.5 mt-6 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-75"
              >
                <span>{loading ? 'Submitting...' : 'Submit'}</span>
                {!loading && (
                  <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                )}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: CHAPTER & REGIONAL HEADQUARTERS DETAILS + MAP */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Chapter Addresses
              </h2>
              <div className="w-12 h-1 bg-[#8B1014] mt-2 mb-6"></div>
            </div>

            {/* Address Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Student Chapter (TKMCE) */}
              <div className="bg-[#FAF9F7] p-5 rounded-lg border border-gray-200 hover:border-[#8B1014]/50 transition-colors">
                <div className="flex items-center gap-2 text-[#8B1014] font-bold text-xs tracking-wider uppercase mb-2">
                  <MapPin className="w-4 h-4 text-[#8B1014]" />
                  <span>Student Chapter Base</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  ISHMT Student Chapter – TKMCE
                </h3>
                <address className="not-italic text-sm text-gray-600 leading-relaxed space-y-1">
                  <p>Department of Mechanical Engineering,</p>
                  <p>TKM College of Engineering,</p>
                  <p>Karicode, Kollam, Kerala – 691 005</p>
                </address>
              </div>

              {/* Card 2: Parent Regional Chapter (ISHMT-RCT) */}
              <div className="bg-[#FAF9F7] p-5 rounded-lg border border-gray-200 hover:border-[#8B1014]/50 transition-colors">
                <div className="flex items-center gap-2 text-[#8B1014] font-bold text-xs tracking-wider uppercase mb-2">
                  <Building2 className="w-4 h-4 text-[#8B1014]" />
                  <span>Regional Parent Chapter</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  ISHMT - Regional Chapter, Trivandrum
                </h3>
                <address className="not-italic text-sm text-gray-600 leading-relaxed space-y-1">
                  <p>PRS Entity, LPSC, Valiamala,</p>
                  <p>Trivandrum, Kerala – 695 547</p>
                  <p className="pt-1">
                    <span className="font-semibold text-gray-700">Email: </span>
                    <a
                      href="mailto:ishmtkerala@gmail.com"
                      className="text-[#8B1014] hover:underline"
                    >
                      ishmtkerala@gmail.com
                    </a>
                  </p>
                </address>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Interactive Geo-Location
                </span>
                {/* Map Toggle Tabs */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-md text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveMap('tkmce')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeMap === 'tkmce'
                        ? 'bg-[#8B1014] text-white shadow-xs'
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    TKMCE (Kollam)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMap('rct')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeMap === 'rct'
                        ? 'bg-[#8B1014] text-white shadow-xs'
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    LPSC (Trivandrum)
                  </button>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-72 rounded-md shadow-sm border border-gray-200 overflow-hidden bg-gray-100">
                <iframe
                  title="ISHMT Chapter Location Map"
                  src={mapUrls[activeMap]}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2 px-1">
                <span>
                  Showing:{' '}
                  {activeMap === 'tkmce'
                    ? 'TKM College of Engineering, Karicode, Kollam'
                    : 'Liquid Propulsion Systems Centre (LPSC), Valiamala, Trivandrum'}
                </span>
                <a
                  href={
                    activeMap === 'tkmce'
                      ? 'https://maps.google.com/?q=TKM+College+of+Engineering+Kollam'
                      : 'https://maps.google.com/?q=Liquid+Propulsion+Systems+Centre+Valiamala+Trivandrum'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8B1014] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Global Academic Footer Component
 */
export function GlobalFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const usefulLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/' },
    {
      label: 'Membership',
      href:
        'https://docs.google.com/forms/d/e/1FAIpQLSfH3luLyhH3tMrCvowuO3lTbTFaGgqscCxyy5SW82zbJjgJAA/viewform?usp=dialog',
      isExternal: true
    },
    { label: 'News & Events', href: '#/events' }
  ];

  return (
    <footer className="bg-[#F4F4F4] border-t border-gray-200 text-gray-700 py-14 px-6 relative font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12">
          {/* COLUMN 1: DUAL/TRIPLE EMBLEM & CHAPTER IDENTITY */}
          <div className="space-y-4">
            {/* Logos Row */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 shadow-xs bg-white p-0.5 flex items-center justify-center">
                <img
                  src="ishmt-logo.jpg"
                  alt="National ISHMT Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Regional RCT Emblem */}
              <a
                href="https://www.ishmtkerala.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 shadow-xs bg-white p-0.5 flex items-center justify-center hover:scale-105 transition-transform"
                title="ISHMT Regional Chapter Trivandrum (ISHMT-RCT)"
              >
                <img
                  src="ishmt-rct-logo.png"
                  alt="ISHMT Regional Chapter Trivandrum Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </a>

              {/* TKMCE Emblem Badge */}
              <div className="w-14 h-14 rounded-full border border-gray-300 bg-white p-1 flex flex-col items-center justify-center text-center shadow-xs">
                <span className="text-[9px] font-bold tracking-tight text-gray-900 leading-tight">
                  TKMCE
                </span>
                <span className="text-[7px] text-[#8B1014] font-semibold">MECH</span>
                <span className="text-[6px] text-gray-500">KOLLAM</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h3 className="font-serif font-bold text-base md:text-lg text-gray-900 leading-snug">
                Indian Society for Heat and Mass Transfer (ISHMT)
              </h3>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                Students Chapter – TKM College of Engineering, Kollam
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Affiliated with ISHMT Regional Chapter, Trivandrum
              </p>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed pt-1">
              Promoting scientific inquiry, heat transfer technologies, computational fluid dynamics,
              and thermal management education across Kerala.
            </p>
          </div>

          {/* COLUMN 2: USEFUL LINKS */}
          <div>
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Useful Links</h3>
            <ul className="space-y-2.5 text-sm">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="hover:text-[#8B1014] transition-colors duration-150 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-[#8B1014] transition-colors"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OFFICIAL CONTACT & REGISTRATION INFO */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Contact Us</h3>

            {/* Campus Location */}
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-[#8B1014] shrink-0 mt-0.5" />
              <div className="text-gray-700 leading-relaxed">
                <span className="font-semibold block text-gray-900">Campus Location:</span>
                Department of Mechanical Engineering, TKM College of Engineering, Kollam – 691 005
              </div>
            </div>

            {/* Regional Headquarters */}
            <div className="flex items-start gap-3 text-sm">
              <Building2 className="w-5 h-5 text-[#8B1014] shrink-0 mt-0.5" />
              <div className="text-gray-700 leading-relaxed">
                <span className="font-semibold block text-gray-900">Regional Headquarters:</span>
                Indian Society for Heat and Mass Transfer, Regional Chapter, Trivandrum
                <div className="text-xs text-gray-500 mt-0.5">Reg. No. TVM/TC/614/2016</div>
                <div>PRS Entity, Liquid Propulsion Systems Centre (LPSC), Thiruvananthapuram – 695 547</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-sm pt-1">
              <Mail className="w-5 h-5 text-[#8B1014] shrink-0" />
              <a
                href="mailto:ishmtkerala@gmail.com"
                className="text-gray-700 hover:text-[#8B1014] transition-colors font-medium"
              >
                ishmtkerala@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR & SCROLL-TO-TOP */}
        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 ISHMT Student Chapter TKMCE. All Rights Reserved.</p>
          <p className="text-gray-400">
            Affiliated to ISHMT National Council &amp; ISHMT-RCT (Trivandrum)
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 border border-[#8B1014] text-[#8B1014] bg-white hover:bg-[#8B1014] hover:text-white p-2.5 rounded shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}

/**
 * Combined Default Export: Contact Page with Global Footer
 */
export default function ContactAndFooter() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <ContactUs />
      <GlobalFooter />
    </div>
  );
}
