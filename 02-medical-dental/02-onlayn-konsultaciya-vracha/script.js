// ---------- Mobile menu ----------
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach((item) => {
  const trigger = item.querySelector('.faq-trigger');
  trigger.addEventListener('click', () => {
    const wasOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });
});

// ---------- GSAP scroll motion ----------
gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  ScrollTrigger.batch('.reveal', {
    start: 'top 90%',
    once: true,
    onEnter: (elements) =>
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.09,
        overwrite: true,
      }),
  });
});

/* ---------- Flourishes ---------- */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    const upd = () => { const h = document.documentElement; const m = h.scrollHeight - h.clientHeight; bar.style.width = (m > 0 ? (h.scrollTop / m) * 100 : 0) + '%'; };
    upd(); window.addEventListener('scroll', upd, { passive: true });
  }
  if (!reduce) {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const s = 0.075;
      el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * s}px, ${(e.clientY - r.top - r.height / 2) * s}px)`; });
      el.addEventListener('pointerleave', () => { el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'; });
    });
    if (window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('[data-tilt]').forEach((el) => {
        const mx = 4;
        el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5; const py = (e.clientY - r.top) / r.height - 0.5; el.style.transform = `perspective(900px) translateY(-6px) rotateY(${px * mx}deg) rotateX(${-py * mx}deg)`; });
        el.addEventListener('pointerleave', () => { el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'; });
      });
    }
  }
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    document.querySelectorAll('[data-count]').forEach((el) => {
      const raw = el.dataset.count; const target = parseFloat(raw); const dec = (raw.split('.')[1] || '').length;
      const pre = el.dataset.prefix || ''; const suf = el.dataset.suffix || '';
      const fmt = (v) => pre + v.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + suf;
      if (reduce) { el.textContent = fmt(target); return; }
      const o = { v: 0 };
      ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => gsap.to(o, { v: target, duration: 1.4, ease: 'power2.out', onUpdate: () => { el.textContent = fmt(o.v); } }) });
    });
  }
})();

/* ---------- Perf: pause offscreen infinite animations ---------- */
(function () {
  const els = document.querySelectorAll('.blob-drift, .blob-drift-2, .marquee__track, .gradient-text, .bubble-float, .bubble-float-2, .bubble-float-3');
  if (!('IntersectionObserver' in window) || !els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { e.target.style.animationPlayState = e.isIntersecting ? 'running' : 'paused'; });
  }, { rootMargin: '120px' });
  els.forEach((el) => io.observe(el));
})();


/* ---------- Tilt smoothing (transition only while interacting, avoids reveal conflict) ---------- */
document.querySelectorAll('[data-tilt]').forEach((el) => {
  el.addEventListener('pointerenter', () => { el.style.transition = 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease'; });
});