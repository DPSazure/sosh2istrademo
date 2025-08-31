// Disclaimer Modal Logic
const disclaimerModal = document.getElementById('disclaimerModal');
const agreeButton = document.getElementById('agreeButton');
const leaveButton = document.getElementById('leaveButton');

// Check if user has already agreed
if (!localStorage.getItem('disclaimerAgreed')) {
    disclaimerModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

agreeButton.addEventListener('click', function() {
    disclaimerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    localStorage.setItem('disclaimerAgreed', 'true');
});

leaveButton.addEventListener('click', function() {
    window.location.href = 'https://schkola2-istra.edumsko.ru/';
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Simple animation for feature cards on scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.feature-card, .news-card');
    
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(cardPosition < screenPosition) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.feature-card, .news-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);