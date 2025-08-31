// footer.js
document.addEventListener('DOMContentLoaded', () => {

    /**
     * The HTML content for the footer.
     * This is stored as a constant string to be injected directly.
     * @type {string}
     */
    const footerHTML = `
<footer class="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">

<div>
    <h3 class="text-lg font-semibold mb-4 relative">
        CONTACT US
        <span class="absolute left-0 -bottom-1 w-16 h-0.5 bg-orange-500"></span>
    </h3>
    <ul class="space-y-4 text-gray-300">
        <li class="flex items-start space-x-3 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <i class="fas fa-map-marker-alt text-orange-500 mt-1"></i>
            <a href="https://www.google.com/maps/search/?api=1&query=Budh+Vihar,+110044,+Badarpur,+Delhi" target="_blank" class="hover:text-orange-500 transition-colors duration-300">Budh Vihar, 110044, Badarpur, Delhi</a>
        </li>
        <li class="flex items-center space-x-3 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <i class="fas fa-phone-alt text-orange-500"></i>
            <a href="tel:+917255008283" class="hover:text-orange-500 transition-colors duration-300">+91 7255008283</a>
        </li>
        <li class="flex items-center space-x-3 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <i class="fas fa-envelope text-orange-500"></i>
            <a href="mailto:sales@leafnity.com" class="hover:text-orange-500 transition-colors duration-300">sales@leafnity.com</a>
        </li>
    </ul>
</div>

            <div>
                <h3 class="text-lg font-semibold mb-4 relative">
                    QUICK LINKS
                    <span class="absolute left-0 -bottom-1 w-16 h-0.5 bg-orange-500"></span>
                </h3>
                <ul class="space-y-3 text-gray-300">
                    <li><a href="about.html" class="hover:text-orange-500">About Us</a></li>
                    <li><a href="FAQ.html" class="hover:text-orange-500">FAQ’s</a></li>
                    <li><a  class="hover:text-orange-500">Our Blog</a></li>
                    <li><a href="contact.html" class="hover:text-orange-500">Contact us</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-semibold mb-4 relative">
                    PRODUCTS
                    <span class="absolute left-0 -bottom-1 w-16 h-0.5 bg-orange-500"></span>
                </h3>
                <ul class="space-y-3 text-gray-300">
                    <li><a class="hover:text-orange-500">E-Commerce</a></li>
                    <li><a class="hover:text-orange-500">CMS</a></li>
                    <li><a class="hover:text-orange-500">ERP</a></li>
                    <li><a class="hover:text-orange-500">CRM</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-semibold mb-4 relative">
                    STAY UPDATED
                    <span class="absolute left-0 -bottom-1 w-16 h-0.5 bg-orange-500"></span>
                </h3>
                <p class="text-gray-300 mb-4">
                    Subscribe to our newsletter and stay updated with the latest news, updates, and special offers.
                </p>
                <form class="flex flex-col sm:flex-row items-center sm:items-stretch">
                    <input type="email" placeholder="Your email" class="w-full px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none" />
                    <button class="flex items-center justify-center bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg w-full sm:w-auto mt-2 sm:mt-0">
                        <i class="fas fa-paper-plane mr-2"></i> Subscribe
                    </button>
                </form>
            </div>

        </div>

        <div class="border-t border-gray-700 mt-10 pt-6"></div>

        <div class="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p class="mb-4 md:mb-0">© 2025 Leafnity Solution. All Rights Reserved.</p>
            <div class="flex space-x-6">
                <a href="legal-policies.html#privacy-policy" class="hover:text-orange-500">Privacy Policy</a>
                <a href="legal-policies.html#terms-services" class="hover:text-orange-500">Terms of Service</a>
                <a href="legal-policies.html" class="hover:text-orange-500">Disclaimer</a>
                <a href="legal-policies.html#cookie-policy" class="hover:text-orange-500">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>
`;

    /**
     * The loader function to inject the local footerHTML string.
     * This replaces the old function that fetched an external file.
     * @param {string} id The ID of the HTML element where the content will be injected.
     * @param {string} htmlContent The HTML string to inject.
     */
    const injectHtml = (id, htmlContent) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = htmlContent;
        } else {
            console.error(`Element with ID '${id}' not found.`);
        }
    };

    // Inject the local footer HTML string into the page.
    injectHtml('footer-placeholder', footerHTML);

});