function initFloatingButtons() {
    // Check if Font Awesome is already loaded
    if (!document.querySelector('link[href*="font-awesome"]') && !document.querySelector('link[href*="fontawesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }

    // Create the CSS styles
    const style = document.createElement('style');
    style.textContent = `
        html {
            scroll-behavior: smooth;
        }

        .floating-btn-base {
            width: 50px;
            height: 50px;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden; 
            white-space: nowrap; 
            transition: all 0.3s ease-in-out; 
            position: relative; 
            z-index: 1000;
        }

        .floating-btn-base.expanded {
            width: 180px; 
            padding: 0 15px; 
            justify-content: space-between; 
        }

        .floating-btn-base .btn-text {
            display: none;
            opacity: 0;
            transition: opacity 0.2s ease-in-out 0.1s; 
            margin-right: 10px; 
        }

        .floating-btn-base.expanded .btn-text {
            display: block;
            opacity: 1;
        }

        .floating-buttons-container {
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            transform: translateX(0);
            opacity: 1;
        }

        .floating-buttons-container.hidden-buttons {
            transform: translateX(calc(100% + 1rem));
            opacity: 0;
            pointer-events: none;
        }

        #floating-toggle-btn.hovered .fas {
            transform: rotate(90deg);
        }

        #floating-toggle-btn.active .fas {
            transform: rotate(180deg); 
        }
        
        #floating-toggle-btn .fas {
            transition: transform 0.3s ease-in-out;
        }
    `;
    document.head.appendChild(style);

    // Create the HTML structure
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end';
    buttonsContainer.innerHTML = `
        <div class="floating-buttons-container flex flex-col gap-3 items-end">
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="group floating-btn-base bg-[#25D366] text-white shadow-lg">
                <span class="btn-text text-lg">WhatsApp</span>
                <i class="fab fa-whatsapp text-2xl"></i>
            </a>

            <a href="tel:+91XXXXXXXXXX" class="group floating-btn-base bg-red-600 text-white shadow-lg">
                <span class="btn-text text-lg">Call Us</span>
                <i class="fas fa-phone-alt text-2xl"></i>
            </a>
        </div>

        <a href="#" id="floating-toggle-btn" class="floating-btn-base bg-gray-700 text-white shadow-lg">
            <i class="fas fa-arrow-left text-2xl"></i>
        </a>
    `;

    // Add to the body
    document.body.appendChild(buttonsContainer);

    // Add the JavaScript functionality
    const actionButtonsContainer = document.querySelector('.floating-buttons-container');
    const toggleButton = document.getElementById('floating-toggle-btn');
    const whatsappButton = buttonsContainer.querySelector('.bg-\\[\\#25D366\\]');
    const phoneButton = buttonsContainer.querySelector('.bg-red-600');

    // Function to toggle expansion of WhatsApp/Phone buttons
    function toggleExpansion(button, isExpanded) {
        if (isExpanded) {
            button.classList.add('expanded');
        } else {
            button.classList.remove('expanded');
        }
    }

    // Hover effect for WhatsApp and Phone buttons
    whatsappButton.addEventListener('mouseenter', () => toggleExpansion(whatsappButton, true));
    whatsappButton.addEventListener('mouseleave', () => toggleExpansion(whatsappButton, false));
    phoneButton.addEventListener('mouseenter', () => toggleExpansion(phoneButton, true));
    phoneButton.addEventListener('mouseleave', () => toggleExpansion(phoneButton, false));

    // Hover effect for the Toggle Arrow button (rotation)
    toggleButton.addEventListener('mouseenter', () => {
        if (!toggleButton.classList.contains('active')) {
            toggleButton.classList.add('hovered');
        }
    });
    toggleButton.addEventListener('mouseleave', () => {
        toggleButton.classList.remove('hovered');
    });

    // Click effect for the Toggle Arrow button (hide/show other buttons)
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        actionButtonsContainer.classList.toggle('hidden-buttons');
        this.classList.toggle('active');
        this.classList.remove('hovered');

        // Ensure WhatsApp/Phone buttons reset their expanded state if they were being hovered
        toggleExpansion(whatsappButton, false);
        toggleExpansion(phoneButton, false);
    });
}

// Initialize the buttons when the DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingButtons);
} else {
    initFloatingButtons();
}