/**
 * ISHMT TKMCE — Heat & Mass Transfer Background Particle System
 * Floating micro-objects: flames, isotherms, molecules, convection arrows,
 * hex fins, boundary layers, radiation nodes, diffusion curves, diamonds, deltas.
 * 50% opacity | Mouse/touch interactive repulsion | Off-white canvas #F5F2ED
 */
(function () {
  'use strict';

  var CFG = {
    COUNT: 72,
    BASE_OPACITY: 0.50,
    HOVER_RADIUS: 110,
    HOVER_FORCE: 0.38,
    DRIFT_MAX: 0.38,
    SIZE_MIN: 9,
    SIZE_MAX: 22,
    WOBBLE_SPEED: 0.008,
    COLORS: [
      'rgba(139,13,26,VAL)',
      'rgba(11,11,11,VAL)',
      'rgba(180,60,60,VAL)',
      'rgba(90,20,30,VAL)',
      'rgba(60,60,80,VAL)'
    ]
  };

  var DRAW_FNS = [
    drawFlame, drawWave, drawMolecule, drawArrow, drawHex,
    drawBoundaryLayer, drawRadiation, drawDiffusion, drawDiamond, drawDelta
  ];

  /* ---------- Canvas setup ---------- */
  var canvas = document.createElement('canvas');
  canvas.id = 'hmt-particle-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  document.body.insertBefore(canvas, document.body.firstChild);

  var ctx = canvas.getContext('2d');
  var W = 0, H = 0;
  var mouse = { x: -9999, y: -9999 };
  var particles = [];
  var raf;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  /* ---------- Pointer tracking ---------- */
  window.addEventListener('mousemove', function(e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  window.addEventListener('touchmove', function(e) {
    var t = e.touches[0]; mouse.x = t.clientX; mouse.y = t.clientY;
  }, { passive: true });
  window.addEventListener('touchend', function() {
    setTimeout(function() { mouse.x = -9999; mouse.y = -9999; }, 800);
  }, { passive: true });

  /* ---------- Helpers ---------- */
  function rand(a, b) { return a + Math.random() * (b - a); }

  /* ---------- Particle ---------- */
  function Particle() { this.reset(true); }
  Particle.prototype.reset = function(init) {
    this.x = rand(0, W);
    this.y = init ? rand(0, H) : (Math.random() < 0.5 ? -30 : H + 30);
    this.vx = rand(-CFG.DRIFT_MAX, CFG.DRIFT_MAX);
    this.vy = rand(-CFG.DRIFT_MAX * 0.6, CFG.DRIFT_MAX * 0.6);
    this.size = rand(CFG.SIZE_MIN, CFG.SIZE_MAX);
    this.wobble = rand(0, Math.PI * 2);
    this.wobbleAmp = rand(0.3, 1.1);
    this.rotation = rand(0, Math.PI * 2);
    this.rotSpeed = rand(-0.007, 0.007);
    this.drawFn = DRAW_FNS[Math.floor(Math.random() * DRAW_FNS.length)];
    var col = CFG.COLORS[Math.floor(Math.random() * CFG.COLORS.length)];
    var op = Math.min(CFG.BASE_OPACITY * rand(0.7, 1.3), 1);
    this.color = col.replace('VAL', op.toFixed(2));
  };

  Particle.prototype.update = function() {
    this.wobble += CFG.WOBBLE_SPEED;
    this.x += this.vx + Math.sin(this.wobble) * this.wobbleAmp * 0.3;
    this.y += this.vy + Math.cos(this.wobble * 0.8) * this.wobbleAmp * 0.2;
    this.rotation += this.rotSpeed;
    var dx = this.x - mouse.x, dy = this.y - mouse.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < CFG.HOVER_RADIUS && dist > 0.5) {
      var f = (CFG.HOVER_RADIUS - dist) / CFG.HOVER_RADIUS * CFG.HOVER_FORCE;
      this.x += (dx / dist) * f * 12;
      this.y += (dy / dist) * f * 12;
    }
    var pad = 40;
    if (this.x < -pad)   this.x = W + pad;
    if (this.x > W + pad) this.x = -pad;
    if (this.y < -pad)   this.y = H + pad;
    if (this.y > H + pad) this.y = -pad;
  };

  Particle.prototype.render = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.strokeStyle = this.color;
    ctx.fillStyle   = this.color;
    ctx.lineWidth   = Math.max(1, this.size * 0.08);
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    this.drawFn(ctx, this.size);
    ctx.restore();
  };

  /* ---------- Symbol drawers ---------- */
  function drawFlame(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(0, s);
    ctx.bezierCurveTo(-s*0.55, s*0.4, -s*0.4, -s*0.2, 0, -s);
    ctx.bezierCurveTo(s*0.4, -s*0.2, s*0.55, s*0.4, 0, s);
    ctx.closePath();
    ctx.globalAlpha = 0.22;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.stroke();
  }

  function drawWave(ctx, s) {
    for (var i = -1; i <= 1; i++) {
      var y = i * s * 0.38;
      ctx.beginPath();
      ctx.moveTo(-s, y);
      ctx.bezierCurveTo(-s*0.5, y-s*0.28, s*0.5, y+s*0.28, s, y);
      ctx.stroke();
    }
  }

  function drawMolecule(ctx, s) {
    ctx.beginPath(); ctx.arc(0, 0, s*0.28, 0, Math.PI*2); ctx.stroke();
    for (var i = 0; i < 3; i++) {
      var a = (i/3)*Math.PI*2 - Math.PI/6;
      var ex = Math.cos(a)*s*0.78, ey = Math.sin(a)*s*0.78;
      ctx.beginPath(); ctx.moveTo(Math.cos(a)*s*0.28, Math.sin(a)*s*0.28); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.beginPath(); ctx.arc(ex, ey, s*0.18, 0, Math.PI*2); ctx.stroke();
    }
  }

  function drawArrow(ctx, s) {
    ctx.beginPath(); ctx.moveTo(0, s); ctx.lineTo(0, -s*0.55); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s*0.32, -s*0.28); ctx.lineTo(0, -s); ctx.lineTo(s*0.32, -s*0.28); ctx.stroke();
  }

  function drawHex(ctx, s) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      var a = (Math.PI/180)*(60*i-30);
      var px = s*0.85*Math.cos(a), py = s*0.85*Math.sin(a);
      i===0 ? ctx.moveTo(px,py) : ctx.lineTo(px,py);
    }
    ctx.closePath(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, s*0.12, 0, Math.PI*2); ctx.fill();
  }

  function drawBoundaryLayer(ctx, s) {
    for (var i = 0; i < 4; i++) {
      var y = -s + (i/3)*s*2;
      var l = s*(0.4 + (i/3)*0.6);
      ctx.beginPath(); ctx.moveTo(-l, y); ctx.lineTo(l, y); ctx.stroke();
    }
  }

  function drawRadiation(ctx, s) {
    ctx.beginPath(); ctx.arc(0, 0, s*0.55, 0, Math.PI*2); ctx.stroke();
    for (var i = 0; i < 4; i++) {
      var a = (i/4)*Math.PI*2;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a)*s*0.6, Math.sin(a)*s*0.6);
      ctx.lineTo(Math.cos(a)*s, Math.sin(a)*s);
      ctx.stroke();
    }
  }

  function drawDiffusion(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(-s, s*0.5);
    ctx.bezierCurveTo(-s*0.3, s*0.5, s*0.3, -s*0.5, s, -s*0.5);
    ctx.stroke();
    for (var i = -1; i <= 1; i++) {
      var t = (i+1)*0.5;
      var cx = -s + t*2*s, cy = s*0.5 - t*s;
      ctx.beginPath(); ctx.moveTo(cx, cy-s*0.22); ctx.lineTo(cx, cy+s*0.22); ctx.stroke();
    }
  }

  function drawDiamond(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(0,-s); ctx.lineTo(s*0.6,0); ctx.lineTo(0,s); ctx.lineTo(-s*0.6,0);
    ctx.closePath(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0,-s*0.45); ctx.lineTo(s*0.28,0); ctx.lineTo(0,s*0.45); ctx.lineTo(-s*0.28,0);
    ctx.closePath(); ctx.stroke();
  }

  function drawDelta(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(0, -s); ctx.lineTo(s*0.85, s*0.6); ctx.lineTo(-s*0.85, s*0.6);
    ctx.closePath(); ctx.stroke();
  }

  /* ---------- Animation loop ---------- */
  function init() {
    particles = [];
    for (var i = 0; i < CFG.COUNT; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].render(ctx);
    }
    raf = requestAnimationFrame(animate);
  }

  function start() { init(); animate(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) cancelAnimationFrame(raf);
    else animate();
  });
})();