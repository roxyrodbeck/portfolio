function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function copyEmail() {
    const emailElement = document.querySelector(".copy-email");
    const emailText = emailElement.textContent || emailElement.innerText;
    navigator.clipboard.writeText(emailText).then(() => {

    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

/* ============================================
   INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Create Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation
                entry.target.classList.add('in-view');
                // Optional: stop observing after animation completes
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Observe all details containers
    const detailsContainers = document.querySelectorAll('.details-container');
    detailsContainers.forEach(el => {
        observer.observe(el);
    });

    // Observe gallery items for staggered effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((el, index) => {
        observer.observe(el);
    });

    // Add smooth scroll spy for navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.style.color = 'rgb(194, 193, 193)');
                
                // Add highlight to current section's link
                const currentLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );
                if (currentLink) {
                    currentLink.style.color = '#D568A8';
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

/* ============================================
   PARALLAX EFFECT ON SCROLL (Optional Enhancement)
   ============================================ */

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Subtle parallax on profile section
    const profileSection = document.querySelector('#profile');
    if (profileSection) {
        const rect = profileSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            profileSection.style.backgroundPosition = `center ${scrollY * 0.5}px`;
        }
    }
});