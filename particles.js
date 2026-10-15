/**
 * ISHMT TKMCE – Heat & Mass Transfer Background Particle System v2
 *
 * Renders small 3D-shaded floating micro-objects on a full-page canvas
 * behind all UI content. Objects are science-grounded representations:
 *   • heat-orb   – glowing thermal gas bubble (convective particle)
 *   • molecule   – H₂O / CO₂ bonded-atom cluster
 *   • droplet    – fluid-phase teardrop (phase-change / condensation)
 *   • ion        – charged species with orbital ring (mass transfer)
 *   • thermal    – sinusoidal infrared heat-wave front with arrow
 *
 * Transparency: ~50% (globalAlpha 0.25–0.52 per particle)
 * Interaction : repels from mouse & touch pointer (radius 110 px)
 * Performance : rAF loop, tab-visibility pause, count scales with viewport
 */
(function () {
  'use strict';

  /* ─── Canvas Setup ──────────────────────────────────────────────────────── */
  const canvas = document.getElementById('hmt-particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  /* ─── Pointer Tracking (mouse + touch) ─────────────────────────────────── */
  const ptr = { x: -9999, y: -9999 };

  function setPtr(e) {
    const src = e.touches ? e.touches[0] : e;
    ptr.x = src.clientX;
    ptr.y = src.clientY;
  }
  function clearPtr() { ptr.x = -9999; ptr.y = -9999; }

  window.addEventListener('mousemove',  setPtr,   { passive: true });
  window.addEventListener('touchmove',  setPtr,   { passive: true });
  window.addEventListener('mouseleave', clearPtr, { passive: true });
  window.addEventListener('touchend',   clearPtr, { passive: true });

  /* ─── Helpers ───────────────────────────────────────────────────────────── */
  function rand(a, b)    { return a + Math.random() * (b - a); }
  function randInt(a, b) { return Math.floor(rand(a, b + 1)); }

  /* ─── Particle Types ────────────────────────────────────────────────────── */
  const TYPES = ['heat-orb', 'molecule', 'droplet', 'ion', 'thermal'];

  /* ─── Particle Class ────────────────────────────────────────────────────── */
  class Particle {
    constructor(scatter) {
      this._scatter = scatter;
      this.init();
    }

    init() {
      // Depth gives parallax illusion: closer = larger + faster rise
      this.depth = rand(0.35, 1.0);
      this.type  = TYPES[randInt(0, TYPES.length - 1)];
      this.r     = rand(4, 10) * this.depth;   // radius (mm-scale on screen)
      this.x     = rand(0, W);
      this.y     = this._scatter ? rand(0, H) : H + this.r + rand(0, 60);
      this.vx    = rand(-0.35, 0.35);
      this.vy    = -rand(0.28, 0.72) * this.depth;  // float upward
      this.alpha = rand(0.25, 0.52);                 // ≈50% transparency band
      this.rot   = rand(0, Math.PI * 2);
      this.rotV  = rand(-0.012, 0.012);
      this.wob   = rand(0, Math.PI * 2);
      this.wobV  = rand(0.018, 0.046);

      const hues = {
        'heat-orb': rand(5,   38),
        'molecule': rand(12,  32),
        'droplet':  rand(195, 225),
        'ion':      rand(270, 310),
        'thermal':  rand(18,  55),
      };
      this.hue    = hues[this.type];
      this._scatter = false;
    }

    update() {
      this.wob += this.wobV;
      this.rot += this.rotV;
      this.x   += this.vx + Math.sin(this.wob) * 0.4;
      this.y   += this.vy;

      // Pointer repulsion
      const dx   = this.x - ptr.x;
      const dy   = this.y - ptr.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 110 && dist > 0) {
        const f = (110 - dist) / 110;
        this.x += (dx / dist) * f * 2.8;
        this.y += (dy / dist) * f * 2.8;
      }

      // Recycle when off-screen
      if (this.y < -this.r * 3 || this.x < -this.r * 3 || this.x > W + this.r * 3) {
        this.init();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = this.alpha;

      switch (this.type) {
        case 'heat-orb': this._drawHeatOrb();  break;
        case 'molecule': this._drawMolecule(); break;
        case 'droplet':  this._drawDroplet();  break;
        case 'ion':      this._drawIon();       break;
        case 'thermal':  this._drawThermal();  break;
      }
      ctx.restore();
    }

    /* ── Heat Orb: glowing sphere with specular highlight ─────────────────── */
    _drawHeatOrb() {
      const r = this.r;
      const g = ctx.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.05, 0, 0, r);
      g.addColorStop(0,   `hsla(${this.hue + 45}, 100%, 92%, 0.95)`);
      g.addColorStop(0.4, `hsla(${this.hue},      100%, 62%, 0.85)`);
      g.addColorStop(1,   `hsla(${this.hue - 15},  80%, 28%, 0.10)`);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle  = g;
      ctx.shadowColor = `hsla(${this.hue}, 100%, 58%, 0.40)`;
      ctx.shadowBlur  = r * 2.2;
      ctx.fill();
      ctx.shadowBlur  = 0;
    }

    /* ── Molecule: central atom + 2 bonded atoms (H₂O geometry) ──────────── */
    _drawMolecule() {
      const r   = this.r * 0.55;
      const arm = r * 2.4;
      const sr  = r * 0.72;

      // Central atom
      const gc = ctx.createRadialGradient(-r * 0.25, -r * 0.25, r * 0.08, 0, 0, r);
      gc.addColorStop(0, `hsla(${this.hue + 35}, 85%, 88%, 0.92)`);
      gc.addColorStop(1, `hsla(${this.hue},      75%, 38%, 0.22)`);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = gc;
      ctx.fill();

      // Bonded atoms at ±104.5° (water-like)
      [Math.PI * 0.72, -Math.PI * 0.72].forEach(a => {
        const bx = Math.cos(a) * arm;
        const by = Math.sin(a) * arm;
        ctx.strokeStyle = `hsla(${this.hue}, 55%, 55%, 0.55)`;
        ctx.lineWidth   = 1.4;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(bx, by);
        ctx.stroke();
        const gs = ctx.createRadialGradient(bx - sr * 0.2, by - sr * 0.2, sr * 0.05, bx, by, sr);
        gs.addColorStop(0, 'hsla(210, 80%, 90%, 0.92)');
        gs.addColorStop(1, 'hsla(210, 80%, 42%, 0.18)');
        ctx.beginPath();
        ctx.arc(bx, by, sr, 0, Math.PI * 2);
        ctx.fillStyle = gs;
        ctx.fill();
      });
    }

    /* ── Fluid Droplet: teardrop with specular glint ─────────────────────── */
    _drawDroplet() {
      const r = this.r;
      const g = ctx.createRadialGradient(-r * 0.28, -r * 0.45, r * 0.04, 0, 0, r);
      g.addColorStop(0,   `hsla(${this.hue}, 65%, 96%, 0.92)`);
      g.addColorStop(0.5, `hsla(${this.hue}, 75%, 62%, 0.78)`);
      g.addColorStop(1,   `hsla(${this.hue}, 85%, 30%, 0.15)`);
      ctx.beginPath();
      ctx.moveTo(0, -r * 1.45);
      ctx.bezierCurveTo( r * 0.85, -r * 0.45,  r,  r * 0.42, 0,  r);
      ctx.bezierCurveTo(-r,         r * 0.42, -r * 0.85, -r * 0.45, 0, -r * 1.45);
      ctx.fillStyle = g;
      ctx.fill();
      // Specular glint
      ctx.beginPath();
      ctx.ellipse(-r * 0.2, -r * 0.65, r * 0.14, r * 0.27, -0.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.42)';
      ctx.fill();
    }

    /* ── Ion: charged sphere with orbital ring + charge symbol ───────────── */
    _drawIon() {
      const r = this.r;
      const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.04, 0, 0, r);
      g.addColorStop(0,   `hsla(${this.hue}, 55%, 94%, 0.90)`);
      g.addColorStop(0.5, `hsla(${this.hue}, 65%, 68%, 0.72)`);
      g.addColorStop(1,   `hsla(${this.hue}, 75%, 36%, 0.10)`);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      // Orbital ring
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.55, r * 0.55, Math.PI / 5, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${this.hue}, 65%, 60%, 0.28)`;
      ctx.lineWidth   = 1.0;
      ctx.stroke();
      // ± symbol
      const s = r * 0.38;
      ctx.strokeStyle = `hsla(${this.hue}, 40%, 28%, 0.62)`;
      ctx.lineWidth   = 1.5;
      ctx.lineCap     = 'round';
      ctx.beginPath();
      ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
      ctx.moveTo(0, -s); ctx.lineTo(0, s);
      ctx.stroke();
    }

    /* ── Thermal Wave: sinusoidal IR wavefront with direction arrow ───────── */
    _drawThermal() {
      const r      = this.r;
      const steps  = 5;
      const sw     = r * 0.62;
      const amp    = r * 0.52;
      const totalW = steps * sw;

      ctx.strokeStyle = `hsla(${this.hue}, 88%, 58%, 0.80)`;
      ctx.lineWidth   = 1.8;
      ctx.lineCap     = 'round';
      ctx.lineJoin    = 'round';
      ctx.shadowColor = `hsla(${this.hue}, 90%, 60%, 0.32)`;
      ctx.shadowBlur  = 4;

      ctx.beginPath();
      ctx.moveTo(-totalW / 2, 0);
      for (let i = 0; i < steps; i++) {
        const cx = -totalW / 2 + i * sw + sw / 2;
        const cy = (i % 2 === 0) ? -amp : amp;
        ctx.quadraticCurveTo(cx, cy, -totalW / 2 + (i + 1) * sw, 0);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Arrowhead indicating propagation direction
      const ax = totalW / 2 + 3;
      ctx.strokeStyle = `hsla(${this.hue}, 88%, 58%, 0.58)`;
      ctx.lineWidth   = 1.2;
      ctx.beginPath();
      ctx.moveTo(ax - 5, -3); ctx.lineTo(ax, 0); ctx.lineTo(ax - 5, 3);
      ctx.stroke();
    }
  }

  /* ─── Pool ──────────────────────────────────────────────────────────────── */
  let pool = [];

  function buildPool() {
    pool = [];
    const count = Math.min(90, Math.max(40, Math.floor(W * H / 10500)));
    for (let i = 0; i < count; i++) {
      pool.push(new Particle(true));
    }
  }

  /* ─── Animation Loop ────────────────────────────────────────────────────── */
  let rafId = null;

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < pool.length; i++) {
      pool[i].update();
      pool[i].draw();
    }
    rafId = requestAnimationFrame(tick);
  }

  /* ─── Bootstrap ─────────────────────────────────────────────────────────── */
  function start() {
    resize();
    buildPool();
    if (rafId) cancelAnimationFrame(rafId);
    tick();
  }

  window.addEventListener('resize', () => { resize(); buildPool(); }, { passive: true });

  // Pause when tab is hidden (saves CPU/battery)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    } else {
      if (!rafId) tick();
    }
  });

  start();
})();