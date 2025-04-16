// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-items a');
    for (const link of navLinks) {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
    
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    
    // Card flip functionality
    const execCards = document.querySelectorAll('.executive-card');
    
    function handleCardFlip() {
        const cardInner = this.querySelector('.card-inner');
        cardInner.classList.toggle('flipped');
    }
    
    for (const card of execCards) {
        card.addEventListener('click', handleCardFlip);
    }
});
