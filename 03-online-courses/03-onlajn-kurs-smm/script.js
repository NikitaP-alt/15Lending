const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Scroll progress bar ----------
const progress = document.getElementById('scroll-progress');
if (progress) {
  const updProgress = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  updProgress();
  window.addEventListener('scroll', updProgress, { passive: true });
}

// ---------- Sticky nav scroll state ----------
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------- Mobile menu ----------
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
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
}

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach((item) => {
  const trigger = item.querySelector('.faq-trigger');
  trigger.addEventListener('click', () => {
    const wasOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });
});

// ---------- Magnetic buttons ----------
if (!reduceMotion) {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = 0.075;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'; });
  });
}

// ---------- Tilt cards ----------
if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    const max = 2;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) translateY(-3px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'; });
  });
}

// ---------- Lead form ----------
const leadForm = document.getElementById('lead-form');
const formSuccess = document.getElementById('form-success');
if (leadForm) {
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
        field.classList.add('ring-2', 'ring-red-400');
        isValid = false;
      } else {
        errorEl.classList.add('hidden');
        field.classList.remove('ring-2', 'ring-red-400');
      }
    });

    if (isValid) {
      leadForm.classList.add('hidden');
      formSuccess.classList.remove('hidden');
    }
  });
}

// ---------- GSAP motion ----------
gsap.registerPlugin(ScrollTrigger);

// Headline word reveal
function splitWords(el) {
  if (el.dataset.split) return;
  el.dataset.split = '1';
  const nodes = Array.from(el.childNodes);
  el.innerHTML = '';
  nodes.forEach((node) => {
    if (node.nodeType === 3) {
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (part.trim() === '') {
          el.appendChild(document.createTextNode(part));
        } else {
          const s = document.createElement('span');
          s.className = 'word';
          s.textContent = part;
          el.appendChild(s);
        }
      });
    } else {
      node.classList.add('word');
      el.appendChild(node);
    }
  });
}

// Count-up numbers
function initCount(el) {
  const raw = el.dataset.count;
  const target = parseFloat(raw);
  const decimals = (raw.split('.')[1] || '').length;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const fmt = (v) => prefix + v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + suffix;
  if (reduceMotion) { el.textContent = fmt(target); return; }
  const obj = { v: 0 };
  ScrollTrigger.create({
    trigger: el, start: 'top 92%', once: true,
    onEnter: () => gsap.to(obj, { v: target, duration: 1.4, ease: 'power2.out', onUpdate: () => { el.textContent = fmt(obj.v); } }),
  });
}

gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  document.querySelectorAll('.word-reveal').forEach(splitWords);
  gsap.to('.word-reveal .word', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.035, delay: 0.15 });

  ScrollTrigger.batch('.reveal', {
    start: 'top 90%',
    once: true,
    onEnter: (elements) => gsap.to(elements, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.09, overwrite: true }),
  });
});

document.querySelectorAll('[data-count]').forEach(initCount);

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