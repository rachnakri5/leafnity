document.addEventListener('DOMContentLoaded', function () {

    // --- DOM Element Selection ---
    // Text Animation
    const animatedTextElement = document.getElementById('animated-text');

    // Contact Form Modal
    const contactModal = document.getElementById('contact-modal');
    const contactModalTrigger = document.getElementById('contact-modal-trigger');
    const closeContactModalBtn = document.getElementById('close-modal');
    const contactForm = document.getElementById('contact-form');
    const contactSuccessMessage = document.getElementById('success-message');
    const closeSuccessBtn = document.getElementById('close-success');

    // View All Technologies
    const viewAllBtn = document.getElementById('view-all-btn');
    const expandedTechSection = document.getElementById('expanded-tech');

    // Services Modal & Mobile Menu
    const servicesLinkDesktop = document.getElementById('services-link-desktop');
    const servicesLinkMobile = document.getElementById('services-link-mobile');
    const servicesModal = document.getElementById('services-modal');
    const closeServicesModalBtn = document.getElementById('close-modal-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');


    // --- Function Definitions ---

    // Text Animation Functionality
    const animateText = () => {
        const text = "Let us show you how we unleash knowledge unlimited power";
        if (!animatedTextElement) return;

        animatedTextElement.innerHTML = '';
        const baseDuration = 500;
        const charDelay = 40;
        const wordDelay = 120;
        const words = text.split(' ');

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'inline-block mx-1 md:mx-2 whitespace-nowrap';

            Array.from(word).forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.className = 'inline-block opacity-0 translate-y-10 rotate-5 scale-50';
                charSpan.textContent = char;
                charSpan.style.transition = `all ${baseDuration}ms cubic-bezier(0.68,-0.55,0.265,1.55)`;
                charSpan.style.transitionDelay = `${(wordIndex * wordDelay) + (charIndex * charDelay)}ms`;
                wordSpan.appendChild(charSpan);

                setTimeout(() => {
                    charSpan.classList.add(
                        'opacity-100',
                        'translate-y-0',
                        'rotate-0',
                        'scale-100'
                    );
                }, (wordIndex * wordDelay) + (charIndex * charDelay));
            });

            animatedTextElement.appendChild(wordSpan);
            if (wordIndex < words.length - 1) {
                animatedTextElement.appendChild(document.createTextNode(' '));
            }
        });

        // Set up the shake animation interval
        setInterval(() => {
            animatedTextElement.style.animation = 'none';
            void animatedTextElement.offsetWidth;
            animatedTextElement.style.animation = 'shake 0.8s ease-in-out';
        }, 5000);
    };

    // Contact Modal Functionality
    const openContactModal = () => {
        contactModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeContactModal = () => {
        contactModal.classList.add('hidden');
        document.body.style.overflow = '';
        if (contactForm) {
            contactForm.classList.remove('hidden');
            contactForm.reset();
        }
        if (contactSuccessMessage) {
            contactSuccessMessage.classList.add('hidden');
        }
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        contactForm.classList.add('hidden');
        contactSuccessMessage.classList.remove('hidden');
    };

    // Services Modal Functionality
    const openServicesModal = () => {
        servicesModal.classList.add('active');
    };

    const closeServicesModal = () => {
        servicesModal.classList.remove('active');
    };

    // Mobile Menu Functionality
    const toggleMobileMenu = (open) => {
        if (open) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            mobileMenuOverlay.classList.add('active');
            mobileMenuBtn.classList.add('open');
        } else {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('open');
        }
    };


    // --- Event Listeners ---

    // Initialise text animation
    animateText();

    // Contact Form Modal Listeners
    if (contactModalTrigger) contactModalTrigger.addEventListener('click', openContactModal);
    if (closeContactModalBtn) closeContactModalBtn.addEventListener('click', closeContactModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeContactModal);
    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) closeContactModal();
        });
    }
    if (contactForm) contactForm.addEventListener('submit', handleContactFormSubmit);

    // View All Technologies Listeners
    if (viewAllBtn && expandedTechSection) {
        let isExpanded = false;
        viewAllBtn.addEventListener('click', () => {
            if (!isExpanded) {
                expandedTechSection.classList.remove('h-0', 'opacity-0');
                expandedTechSection.classList.add('h-auto', 'opacity-100', 'grid');
                viewAllBtn.textContent = 'View Less';
            } else {
                expandedTechSection.classList.remove('h-auto', 'opacity-100', 'grid');
                expandedTechSection.classList.add('h-0', 'opacity-0');
                viewAllBtn.textContent = 'View All Technologies';
            }
            isExpanded = !isExpanded;
        });
    }

    // Services Modal & Mobile Menu Listeners
    if (servicesLinkDesktop) servicesLinkDesktop.addEventListener('mouseenter', openServicesModal);
    if (servicesModal) servicesModal.addEventListener('mouseleave', closeServicesModal);
    if (servicesLinkMobile) {
        servicesLinkMobile.addEventListener('click', (e) => {
            e.preventDefault();
            openServicesModal();
            toggleMobileMenu(false); // Close mobile menu after clicking the link
        });
    }
    if (closeServicesModalBtn) closeServicesModalBtn.addEventListener('click', closeServicesModal);
    if (servicesModal) {
        servicesModal.addEventListener('click', (e) => {
            if (e.target === servicesModal) closeServicesModal();
        });
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', () => toggleMobileMenu(false));

    // Listen for resize to handle mobile menu closing on larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            toggleMobileMenu(false);
        }
    });

});

// smooth scroll on wach page
// Enable manual scroll restoration so we can control it
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// When the page is shown (load or back/forward)
window.addEventListener('pageshow', (event) => {
  // Only if there is a saved scroll position
  if (event.persisted || window.performance.getEntriesByType("navigation")[0].type === "back_forward") {
    const scrollY = sessionStorage.getItem('scrollY') || 0;
    window.scrollTo({
      top: parseInt(scrollY),
      behavior: 'smooth'
    });
  }
});

// Save scroll position before leaving page
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollY', window.scrollY);
});
