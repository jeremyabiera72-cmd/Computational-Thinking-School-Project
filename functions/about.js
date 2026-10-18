// Mobile menu lives in functions/responsiveNav.js
const navLinks = document.getElementById('navLinks');

// Highlight the nav link for the section in view
const sectionLinks = [...navLinks.querySelectorAll('a[href^="#"]')].filter(l => l.getAttribute('href').length > 1);
const homeLink = navLinks.querySelector('a[href="#"]');
function setActive(link) {
  navLinks.querySelectorAll('a').forEach(l => l.classList.toggle('active', l === link));
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const match = sectionLinks.find(l => l.getAttribute('href') === '#' + entry.target.id);
      setActive(match || homeLink);
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
['about', 'concepts', 'daily-examples', 'sources', 'footer'].forEach(id => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});
window.addEventListener('scroll', () => { if (window.scrollY < 50) setActive(homeLink); });
setActive(homeLink);

// Concept cards: one open at a time
const concepts = document.querySelectorAll('.concept');
concepts.forEach(card => {
  card.addEventListener('click', () => {
    const open = card.getAttribute('aria-expanded') === 'true';
    concepts.forEach(c => c.setAttribute('aria-expanded', 'false'));
    card.setAttribute('aria-expanded', !open);
  });
});

