document.addEventListener('DOMContentLoaded', () => {
    // Entrance Animations
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

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Simple Checkout Simulation
    const cartCountEl = document.getElementById('cart-count');
    const totalPriceEl = document.getElementById('total-price');
    let count = 0;
    let total = 0;

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            count++;
            const price = parseFloat(card.querySelector('p').innerText.replace('$', ''));
            total += price;
            
            cartCountEl.innerText = count;
            totalPriceEl.innerText = `$${total.toFixed(2)}`;
            
            // Visual feedback
            card.style.borderColor = '#CCFF00';
            setTimeout(() => { card.style.borderColor = '#000000'; }, 200);
        });
    });

    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (count === 0) {
            alert('Your cart is empty!');
        } else {
            alert(`Order placed! Total: $${total.toFixed(2)}`);
            count = 0;
            total = 0;
            cartCountEl.innerText = count;
            totalPriceEl.innerText = '$0.00';
        }
    });
});
