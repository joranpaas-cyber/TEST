// Kleine upgrades: mobiel menu, smooth scroll en eenvoudige form-handling
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks){
  menuToggle.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    menuToggle.setAttribute('aria-expanded', String(!open));
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href').slice(1);
    const el = document.getElementById(targetId);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Form validatie (demo)
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message){
      statusEl.textContent = 'Vul alle velden in.';
      statusEl.style.color = '#ffb4b4';
      return;
    }
    // Demo: normaal zou je hier een backend of service aanroepen.
    statusEl.textContent = 'Bedankt! Je bericht is verzonden (demo).';
    statusEl.style.color = '#b4ffc4';
    form.reset();
  });
}
