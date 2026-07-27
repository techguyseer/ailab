document.addEventListener('DOMContentLoaded', () => {
    // Scarcity Counter Logic
    let slots = 50; 
    const counterElement = document.querySelector('.slots-count');

    function updateCounter() {
        if (slots > 5) {
            slots -= Math.floor(Math.random() * 2);
            counterElement.innerText = slots;
        }
    }
    setInterval(updateCounter, 15000);

    // Intersection Observer for Reveal Animation
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

    // Smooth Scroll for CTA
    document.querySelector('.btn-primary').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#checkout').scrollIntoView({ behavior: 'smooth' });
    });
});
