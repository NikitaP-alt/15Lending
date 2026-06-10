// ---------- Sticky nav scroll state ----------
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

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

// ---------- Before / After slider ----------
const baSlider = document.getElementById('ba-slider');
if (baSlider) {
  const beforeWrap = baSlider.querySelector('.ba-before');
  const beforeImg = beforeWrap.querySelector('img');
  const handle = baSlider.querySelector('.ba-handle');
  let dragging = false;

  const sizeImage = () => { beforeImg.style.width = baSlider.offsetWidth + 'px'; };
  sizeImage();
  window.addEventListener('resize', sizeImage);

  const setPosition = (clientX) => {
    const rect = baSlider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    beforeWrap.style.width = pct + '%';
    handle.style.left = pct + '%';
  };

  baSlider.addEventListener('pointerdown', (e) => {
    dragging = true;
    baSlider.setPointerCapture(e.pointerId);
    setPosition(e.clientX);
  });
  baSlider.addEventListener('pointermove', (e) => {
    if (dragging) setPosition(e.clientX);
  });
  baSlider.addEventListener('pointerup', () => { dragging = false; });
  baSlider.addEventListener('pointercancel', () => { dragging = false; });
}

// ---------- Lead form ----------
const leadForm = document.getElementById('lead-form');
const formSuccess = document.getElementById('form-success');

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = leadForm.querySelector('#name');
  const phone = leadForm.querySelector('#phone');
  const phonePattern = /^[\d\s()+-]{10,}$/;
  let isValid = true;

  [name, phone].forEach((field) => {
    const errorEl = field.closest('div').querySelector('.error-text');
    const value = field.value.trim();
    let message = '';
    if (!value) message = 'Заполните это поле';
    else if (field === phone && !phonePattern.test(value)) message = 'Проверьте номер телефона';

    if (message) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
      field.classList.add('ring-2', 'ring-amber-300');
      isValid = false;
    } else {
      errorEl.classList.add('hidden');
      field.classList.remove('ring-2', 'ring-amber-300');
    }
  });

  if (isValid) {
    leadForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');
  }
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