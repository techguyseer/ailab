document.addEventListener('DOMContentLoaded', () => {
    // Nav Transition
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Scroll Observer for fade-in
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-fade]').forEach(el => {
        observer.observe(el);
    });

    // Form Handling
    const form = document.getElementById('email-form');
    const thanks = document.getElementById('form-thanks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        thanks.classList.remove('hidden');
    });
});
