# ISHMT RCT Students Chapter — TKMCE

Official web platform and dynamic visual Content Management System (CMS) for the **Indian Society for Heat and Mass Transfer (ISHMT) Students Chapter** at **TKM College of Engineering (TKMCE), Kollam** (Regional Chapter Thiruvananthapuram - RCT).

---

## 🚀 Key Highlights & Features

1. **3-Stage Intro Logo Motion & Docking Timeline**
   - Stage 1: Centered high-impact lockup with subtle radial backglow and breathing glow.
   - Stage 2: 3D zoom pulse with soft elevation shadow.
   - Stage 3: Smooth cubic-bezier transition seamlessly docking into the top-left persistent sticky navigation header.

2. **Phase 1: Public Read-Only User Experience**
   - Dynamic client-side rendering entirely driven by a master JSON Site Blueprint.
   - Zero hardcoded body blocks: Hero sections, stats banners, split content, domain research tracks, event carousels, executive boards, and contact portals render seamlessly.
   - Mobile-responsive layout, accessibility attributes, and high-performance vanilla architecture (zero bloated runtime dependencies).

3. **Phase 2: Full-Control Visual Admin CMS Studio (`#/admin`)**
   - Visual Page Builder & Canvas with live instant rendering.
   - Block library: Hero, Split Content, Feature Grid, Stats Banner, Event Cards, Team Grid, Timeline, Quote/Testimonial, FAQ, CTA Banner, and Custom HTML.
   - Theme Studio: Primary/secondary brand colors, typography scales, header gradients, and border-radius presets.
   - Navigation & Sub-Page Manager: Add, rename, hide, or reorder pages and routes dynamically.
   - Master JSON Blueprint modal: Live inspect, export, import, or reset master configuration.
   - Cross-tab real-time synchronization via `localStorage` and `storage` events.

---

## 🔐 Admin Authentication

Access the Admin Portal by clicking the discreet lock icon in the top header or navigating directly to `#/login`:

- **Route:** `#/login`
- **Username:** `admin`
- **Password:** `ishmt2026`

---

## 🧪 Production Build & Integrity Test

To verify code syntax, asset paths, and routing hooks:

```bash
npm test
# or
node verify-build.js
```

---

## 💻 Local Preview

You can open `index.html` directly in any modern browser, or run a local static server:

```bash
npx serve .
```

---

## 📄 License

MIT © ISHMT RCT Students Chapter — TKMCE.
