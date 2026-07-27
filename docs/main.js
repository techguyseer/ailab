document.addEventListener('DOMContentLoaded', () => {
    const sourcingData = {
        'upper': {
            origin: 'Organic Cotton',
            region: 'Sourced from GOTS certified farms in India',
            impact: 'Reduced water consumption by 80% compared to conventional cotton.'
        },
        'laces': {
            origin: 'Recycled PET',
            region: 'Recovered ocean plastic from South East Asia',
            impact: 'Prevents 12 plastic bottles from entering the ocean per pair.'
        },
        'sole': {
            origin: 'Natural Rubber & Algae Bloom',
            region: 'Sustainably harvested from Brazil',
            impact: 'Carbon-negative footprint through algae sequestration.'
        }
    };

    const hotspots = document.querySelectorAll('.hotspot');
    const infoPanel = document.getElementById('info-panel');

    hotspots.forEach(spot => {
        spot.addEventListener('click', () => {
            // Update active state
            hotspots.forEach(s => s.classList.remove('active'));
            spot.classList.add('active');

            const part = spot.getAttribute('data-part');
            const data = sourcingData[part];

            // Update panel content with a smooth transition
            infoPanel.style.opacity = '0';
            
            setTimeout(() => {
                infoPanel.innerHTML = `
                    <h3 style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">${part}</h3>
                    <p><strong>Sourcing:</strong> ${data.origin}</p>
                    <p><strong>Region:</strong> ${data.region}</p>
                    <p style="margin-top: 15px; color: #6B6B6B; font-size: 0.9rem;">${data.impact}</p>
                `;
                infoPanel.style.opacity = '1';
            }, 300);
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
