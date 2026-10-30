// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  }));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
}

// Gallery filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-grid figure');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  lightboxImg.addEventListener('click', (e) => e.stopPropagation());
  lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
}

// Contact form -> opens WhatsApp chat + prefilled email, both with full details
const CONTACT_PHONE = '917780063493';
const CONTACT_EMAIL = 'crowncrafte@gmail.com';
const LEADS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxJTnVT2sttikXcdbgHlce7YkQntmFdBTEzSyGwytgFWKliQ5OGT-mKVbRwPBsTB4U/exec';
const contactForm = document.getElementById('contactForm');

function sendLead(data) {
  fetch(LEADS_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(data)
  }).catch(() => {});
}

if (contactForm) {
  const nameField = document.getElementById('cf-name');
  const phoneField = document.getElementById('cf-phone');

  // Progressive capture: whenever focus leaves the form entirely (visitor
  // tabs away, clicks elsewhere, or abandons the page) with name + phone
  // filled, save a snapshot of everything filled in so far.
  let formSubmitted = false;
  let lastPartialSnapshot = '';
  contactForm.addEventListener('focusout', (e) => {
    if (formSubmitted || contactForm.contains(e.relatedTarget)) return;
    const name = nameField.value.trim();
    const phone = phoneField.value.trim();
    if (!name || !phone) return;
    const data = {
      name, phone,
      eventType: document.getElementById('cf-event').value,
      date: document.getElementById('cf-date').value,
      message: document.getElementById('cf-message').value.trim(),
      status: 'partial'
    };
    const snapshot = JSON.stringify(data);
    if (snapshot === lastPartialSnapshot) return;
    lastPartialSnapshot = snapshot;
    sendLead(data);
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmitted = true;
    const name = nameField.value.trim();
    const phone = phoneField.value.trim();
    const eventType = document.getElementById('cf-event').value;
    const date = document.getElementById('cf-date').value;
    const message = document.getElementById('cf-message').value.trim();

    sendLead({ name, phone, eventType, date, message, status: 'submitted' });

    const lines = [
      `Hi Crowncraft Events, I'm ${name}.`,
      `I'd like to enquire about a ${eventType}.`,
      date ? `Preferred date: ${date}.` : '',
      phone ? `My contact number: ${phone}.` : '',
      message
    ].filter(Boolean);
    const fullMessage = lines.join(' ');

    window.open(`https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(fullMessage)}`, '_blank');

    const subject = `Event Enquiry: ${eventType} - ${name}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
  });
}
