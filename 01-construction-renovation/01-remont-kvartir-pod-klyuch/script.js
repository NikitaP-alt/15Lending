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

    if (!value) {
      message = 'Заполните это поле';
    } else if (field === phone && !phonePattern.test(value)) {
      message = 'Проверьте номер телефона';
    }

    if (message) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
      field.classList.add('ring-2', 'ring-rose-400');
      isValid = false;
    } else {
      errorEl.classList.add('hidden');
      field.classList.remove('ring-2', 'ring-rose-400');
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
  document.querySelectorAll('.reveal').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
      },
    });
  });

  gsap.to('.hero-image', {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-image-wrap',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
});
