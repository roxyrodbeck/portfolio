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

/* ============================================
   LIGHTBOX / CLICK-TO-EXPAND GALLERY
   ============================================ */
/* lightbox removed per user request */

/* ============================================
   HOVER-ENLARGE OVERLAY (lets enlarged image escape scroll container)
   ============================================ */

(function hoverEnlarge() {
    let activeClone = null;
    let removeTimer = null;

    function createClone(img, scale = 1.5) {
        const rect = img.getBoundingClientRect();
        const clone = img.cloneNode(false);
        clone.classList.add('hover-enlarge');
        // initial position matching the original image
        clone.style.position = 'fixed';
        clone.style.left = `${rect.left}px`;
        clone.style.top = `${rect.top}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        clone.style.transform = 'scale(1)';
        clone.style.transformOrigin = 'center center';
        clone.style.transition = 'transform 180ms cubic-bezier(.2,.9,.2,1), left 180ms ease, top 180ms ease, width 180ms ease, height 180ms ease, box-shadow 180ms ease';
        clone.style.zIndex = 20000;
        clone.style.pointerEvents = 'none';
        document.body.appendChild(clone);

        // compute target position so the scaled image stays centered over original
        const targetWidth = rect.width * scale;
        const targetHeight = rect.height * scale;
        const targetLeft = rect.left - (targetWidth - rect.width) / 2;
        const targetTop = rect.top - (targetHeight - rect.height) / 2;

        // ensure the clone stays within viewport (optional clamp)
        const clampLeft = Math.max(8, Math.min(targetLeft, window.innerWidth - targetWidth - 8));
        const clampTop = Math.max(8, Math.min(targetTop, window.innerHeight - targetHeight - 8));

        // animate to scaled size/position
        requestAnimationFrame(() => {
            clone.style.left = `${clampLeft}px`;
            clone.style.top = `${clampTop}px`;
            clone.style.width = `${targetWidth}px`;
            clone.style.height = `${targetHeight}px`;
            clone.style.boxShadow = '0 30px 80px rgba(0,0,0,0.6)';
            clone.style.transform = 'scale(1)';
        });

        return clone;
    }

    function removeClone() {
        if (!activeClone) return;
        const c = activeClone;
        activeClone = null;
        // shrink then remove
        c.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
        c.style.transition = 'transform 160ms ease, opacity 160ms ease';
        c.style.opacity = '0';
        removeTimer = setTimeout(() => {
            if (c && c.parentNode) c.parentNode.removeChild(c);
        }, 180);
    }

    function attach() {
        const imgs = document.querySelectorAll('.gallery-item img');
        imgs.forEach(img => {
            // Avoid attaching multiple handlers
            if (img._hoverAttached) return;
            img.addEventListener('mouseenter', (e) => {
                if (removeTimer) { clearTimeout(removeTimer); removeTimer = null; }
                if (activeClone) {
                    // remove existing then create new
                    if (activeClone.parentNode) activeClone.parentNode.removeChild(activeClone);
                    activeClone = null;
                }
                activeClone = createClone(img, 1.5);
            });

            img.addEventListener('mouseleave', () => {
                // small delay to avoid flicker when moving between img and clone
                removeTimer = setTimeout(removeClone, 120);
            });

            // If user scrolls while enlarged, remove clone to avoid visual mismatch
            img.addEventListener('wheel', () => removeClone(), { passive: true });
            img._hoverAttached = true;
        });

        // remove clone on page scroll or resize
        window.addEventListener('scroll', () => { if (activeClone) removeClone(); }, { passive: true });
        window.addEventListener('resize', () => { if (activeClone) removeClone(); });
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        attach();
    } else {
        document.addEventListener('DOMContentLoaded', attach);
    }

})();

