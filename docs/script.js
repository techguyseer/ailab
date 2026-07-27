document.addEventListener('DOMContentLoaded', () => {
    // Waitlist Handler
    const waitlistBtn = document.getElementById('waitlistBtn');
    const footerWaitlist = document.getElementById('footerWaitlist');
    const toast = document.getElementById('toast');

    const showToast = () => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    };

    if (waitlistBtn) waitlistBtn.onclick = showToast;
    if (footerWaitlist) footerWaitlist.onclick = (e) => {
        e.preventDefault();
        showToast();
    };

    // Calculator Logic
    const slider = document.querySelector('#costSlider');
    const display = document.querySelector('#priceDisplay');

    if (slider && display) {
        slider.oninput = () => {
            const baseValue = 200;
            const multiplier = 10;
            const price = baseValue + (multiplier * parseInt(slider.value));
            display.innerText = `$${price.toFixed(2)}`;
        };
    }

    // Scroll Reveal Timeline
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-reveal]').forEach(el => {
        observer.observe(el);
    });
});
