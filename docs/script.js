document.addEventListener('DOMContentLoaded', () => {
    // Parallax Effect for Hero
    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.parallax-img');
        let offset = window.pageYOffset;
        if (parallax) {
            parallax.style.transform = `translateY(${offset * 0.4}px)`;
        }
    });

    // Reveal on Scroll (IntersectionObserver)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Hotspot Tooltips
    const hotspots = document.querySelectorAll('.hotspot');
    const tooltip = document.createElement('div');
    tooltip.className = 'hotspot-tooltip';
    document.body.appendChild(tooltip);

    hotspots.forEach(hs => {
        hs.addEventListener('mouseenter', (e) => {
            const info = hs.getAttribute('data-info');
            tooltip.innerText = info;
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
            
            // Position tooltip relative to mouse/hotspot
            const rect = hs.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - 40}px`;
        });

        hs.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
        });
    });

    // Form Submission (Simplified)
    const form = document.getElementById('email-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            alert(`Thank you for joining! We've recorded your email: ${email}`);
            form.reset();
        });
    }
});
