// Vanilla JavaScript for Rumi Shoes Landing Page

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Shrink & Opacity on Scroll
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. IntersectionObserver for Scroll Reveal
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));

  // 3. Size Selector State Management
  const sizeOptionGroups = document.querySelectorAll('.size-options');
  sizeOptionGroups.forEach(group => {
    const buttons = group.querySelectorAll('.size-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // 4. Reserve Button Interaction
  const reserveButtons = document.querySelectorAll('.reserve-btn');
  reserveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const productName = card.querySelector('h3').textContent.trim();
      const selectedSize = card.querySelector('.size-btn.active')?.dataset.size || 'Medium';
      alert(`Pre-order reservation placed for ${productName} (Size: ${selectedSize}). Thank you!`);
    });
  });

  // 5. Newsletter Form Submission
  const subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = subscribeForm.querySelector('input[type="email"]');
      if (input && input.value) {
        alert(`Thank you for joining the Inner Circle, ${input.value}!`);
        input.value = '';
      }
    });
  }
});
