document.addEventListener('DOMContentLoaded', () => {
    // Calculator Logic
    const buttons = document.querySelectorAll('.condition-selector button');
    const display = document.getElementById('credit-value');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Value with Count-up
            const targetValue = parseInt(btn.getAttribute('data-value'));
            animateValue(display, parseInt(display.innerText), targetValue, 400);
        });
    });

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Waitlist Form Logic
    const form = document.getElementById('waitlist-form');
    const successMsg = document.getElementById('form-success');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        successMsg.classList.remove('hidden');
    });

    // Intersection Observer for Reveal Animations
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

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
