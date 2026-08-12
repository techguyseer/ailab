document.addEventListener('DOMContentLoaded', () => {
    // 1. Process Slider Logic
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;
        
        slides[currentSlide].classList.add('active');
    }

    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

    // 2. Impact Counter Logic
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100; // 100 ticks
        
        let count = 0;
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    };

    // 3. Intersection Observer for animations
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }
                // Add other scroll animations here
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counter.style.transition = 'all 0.6s ease-out';
        observer.observe(counter);
    });
});
