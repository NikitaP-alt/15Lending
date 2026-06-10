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
      field.classList.add('border-red-500');
      isValid = false;
    } else {
      errorEl.classList.add('hidden');
      field.classList.remove('border-red-500');
    }
  });

  if (isValid) {
    leadForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');
  }
});

// ---------- GSAP scroll motion (gentle, no blur) ----------
gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  ScrollTrigger.batch('.reveal', {
    start: 'top 90%',
    once: true,
    onEnter: (elements) =>
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.1,
        overwrite: true,
      }),
  });
});
