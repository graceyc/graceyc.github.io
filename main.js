// ═══════════════════════════════════════
// Scroll-triggered reveal animations
// ═══════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('vis');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ═══════════════════════════════════════
// Navbar — frosted glass on scroll
// ═══════════════════════════════════════
const nav = document.getElementById('navbar');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// ═══════════════════════════════════════
// Smooth scroll for anchor links
// ═══════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
