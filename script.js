document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Navbar Scroll Effect ---
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- 2. Particles.js Configuration ---
    // A network-like geometry to fit the Data/AI theme
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#60a5fa" }, // primary-light
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": { "enable": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3b82f6", // primary
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 180,
                        "line_linked": { "opacity": 0.5 }
                    },
                    "push": { "particles_nb": 3 }
                }
            },
            "retina_detect": true
        });
    }

    // --- 3. Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // --- Hero typewriter + staggered reveal ---
    const heroTypewriter = document.getElementById('hero-typewriter');
    const typingCursor = document.querySelector('.typing-cursor');
    const heroFadeEls = document.querySelectorAll('.hero .fade-in-up');

    function revealHeroFadeIns() {
        const base = 80;
        heroFadeEls.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), base + i * 110);
        });
    }

    function setHeroHeadingStatic() {
        if (!heroTypewriter) return;
        heroTypewriter.innerHTML = 'Hello, I\'m <span class="highlight">Ezzat Alhalabi</span>';
        if (typingCursor) typingCursor.classList.add('is-done');
    }

    function runTypewriter() {
        if (!heroTypewriter) {
            revealHeroFadeIns();
            return;
        }

        const part1 = "Hello, I'm ";
        const part2 = 'Ezzat Alhalabi';
        const prefersReduced =
            window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReduced) {
            setHeroHeadingStatic();
            revealHeroFadeIns();
            return;
        }

        let i = 0;
        let nameSpan = null;
        const charMs = 52;

        function tick() {
            if (i < part1.length) {
                heroTypewriter.appendChild(document.createTextNode(part1[i]));
                i++;
                setTimeout(tick, charMs);
            } else if (i < part1.length + part2.length) {
                const j = i - part1.length;
                if (j === 0) {
                    nameSpan = document.createElement('span');
                    nameSpan.className = 'highlight';
                    heroTypewriter.appendChild(nameSpan);
                }
                nameSpan.appendChild(document.createTextNode(part2[j]));
                i++;
                setTimeout(tick, charMs);
            } else {
                if (typingCursor) typingCursor.classList.add('is-done');
                revealHeroFadeIns();
            }
        }

        tick();
    }

    runTypewriter();

    // Observe other sections
    document.querySelectorAll('.section .glass-card, .section-title').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    // --- 4. Chart.js Data Visualizations ---
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Outfit', sans-serif";

    // --- 5. Contact Form ---
    // Use native HTML form submission with FormSubmit for maximum reliability.
    // No JS interception needed.

});
