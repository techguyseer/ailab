document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#scale-input');
    const display = document.querySelector('#level-display');
    
    const getColorForLevel = (val) => {
        const colors = {
            '1': '#000000',
            '2': '#330000',
            '3': '#FF0000'
        };
        return colors[val] || '#000000';
    };

    if (slider) {
        slider.oninput = function() {
            display.innerText = this.value;
            document.body.style.backgroundColor = getColorForLevel(this.value);
        }
    }

    // Wall of Fame - Mock UGC Feed
    const feedContainer = document.querySelector('#ugc-feed');
    if (feedContainer) {
        const mockVideos = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/challenge${i}/400/700`);
        
        mockVideos.forEach(url => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `<img src="${url}" alt="UGC Content" style="width:100%; height:100%; object-fit:cover;">`;
            feedContainer.appendChild(card);
        });
    }

    // Smooth Scroll for nav links
    document.querySelectorAll('.nav-content a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
