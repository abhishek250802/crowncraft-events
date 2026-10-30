document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', false);
}));

const WHATSAPP_NUMBER = '917780063493';
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('cf-name').value.trim();
  const event = document.getElementById('cf-event').value;
  const date = document.getElementById('cf-date').value;
  const message = document.getElementById('cf-message').value.trim();

  let text = `Hi Crowncraft Events, I'm ${name}.`;
  text += ` I'd like to enquire about a ${event}.`;
  if (date) text += ` Preferred date: ${date}.`;
  text += ` ${message}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
});
