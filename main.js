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

// ═══════════════════════════════════════
// Lightbox — click to enlarge photos
// ═══════════════════════════════════════
function openLightbox(src) {
    let lb = document.querySelector('.lightbox');
    if (!lb) {
        lb = document.createElement('div');
        lb.className = 'lightbox';
        lb.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="Enlarged photo">';
        document.body.appendChild(lb);
        lb.addEventListener('click', () => lb.classList.remove('active'));
    }
    lb.querySelector('img').src = src;
    lb.classList.add('active');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lb = document.querySelector('.lightbox');
        if (lb) lb.classList.remove('active');
    }
});
