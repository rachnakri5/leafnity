const navbarHTML = `
<nav class="fixed top-0 left-0 right-0 h-20 w-full flex capitalize bg-gray-800 justify-between items-center px-4 py-4 shadow-xl z-50">
  <!-- Logo -->
  <div class="flex items-center">
    <img src="./image/logo.png" alt="Leafnity Solution Logo" class="h-16 w-auto pl-7">
  </div>

  <!-- Mobile Menu Button -->
  <button id="mobile-menu-btn"
    class="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40"
    aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- Right-side Mobile Drawer -->
  <div id="mobile-menu"
    class="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-gray-900 shadow-2xl flex flex-col items-start p-8 z-[60] transform translate-x-full transition-transform duration-500 ease-in-out">

    <!-- Close Button -->
    <button id="mobile-menu-close-btn"
      class="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 transition-all duration-300"
      aria-label="Close menu">
      <span class="text-white text-2xl">&times;</span>
    </button>

    <!-- Title -->
    <h2 class="text-white text-xl font-bold mb-8">Menu</h2>

    <!-- Links -->
    <ul class="flex flex-col font-semibold text-white space-y-6 w-full">
      <li><a href="index.html" class="nav-link text-lg transition-colors duration-300 hover:text-orange-400">Home</a></li>
      <li><a href="about.html" class="nav-link text-lg transition-colors duration-300 hover:text-orange-400">About Us</a></li>
      <li>
        <a href="#" id="services-link-mobile" class="nav-link text-lg transition-colors duration-300 hover:text-orange-400 flex items-center">
          <span>Services</span>
          <svg class="w-5 h-5 ml-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </li>
      <li><a href="contact.html" class="nav-link text-lg transition-colors duration-300 hover:text-orange-400">Contact</a></li>
    </ul>

    <!-- CTA -->
    <a href="chat.html"
      class="mt-10 font-semibold text-white px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:scale-105">
      Let's Talk
    </a>
  </div>

  <!-- Overlay -->
  <div id="mobile-menu-overlay"
    class="overlay fixed inset-0 bg-black/70 backdrop-blur-sm opacity-0 invisible transition-all duration-300 z-50"></div>

  <!-- Desktop Nav -->
  <div class="hidden lg:block text-[17px]">
    <ul class="flex font-semibold text-gray-100">
      <li class="mx-4 relative group">
        <a href="index.html" class="nav-link transition-colors duration-300 hover:text-orange-400">Home</a>
        <span class="absolute left-0 -bottom-1 h-1 w-full bg-orange-400 rounded-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </li>
      <li class="mx-4 relative group">
        <a href="about.html" class="nav-link transition-colors duration-300 hover:text-orange-400">About Us</a>
        <span class="absolute left-0 -bottom-1 h-1 w-full bg-orange-400 rounded-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </li>
      <li class="mx-4 relative group">
        <a href="#" id="services-link-desktop" class="nav-link transition-colors duration-300 hover:text-orange-400 flex items-center">
          <span>Services</span>
          <svg class="w-4 h-4 ml-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
        <span class="absolute left-0 -bottom-1 h-1 w-full bg-orange-400 rounded-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </li>
      <li class="mx-4 relative group">
        <a href="contact.html" class="nav-link transition-colors duration-300 hover:text-orange-400">Contact</a>
        <span class="absolute left-0 -bottom-1 h-1 w-full bg-orange-400 rounded-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </li>

    </ul>
  </div>

  <!-- Desktop CTA -->
  <a href="chat.html"
    class="hidden lg:block font-semibold text-white px-5 py-2 mr-7 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg border border-transparent transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:shadow-orange-500/50 active:scale-95">
    Let's Talk
  </a>
</nav>
`;

// Inject + wire up
document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar HTML
  const mount = document.getElementById('nav-placeholder');
  if (mount) mount.innerHTML = navbarHTML;

  // Elements
  const mobileBtn   = document.getElementById('mobile-menu-btn');
  const mobileMenu  = document.getElementById('mobile-menu');
  const closeBtn    = document.getElementById('mobile-menu-close-btn');
  const overlay     = document.getElementById('mobile-menu-overlay');

  // Open mobile menu
  const openMenu = () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    overlay.classList.remove('opacity-0','invisible');
    overlay.classList.add('opacity-100','visible');
    mobileBtn.classList.add('open'); // for burger animation
    document.body.style.overflow = 'hidden';
    mobileBtn.setAttribute('aria-expanded', 'true');
  };

  // Close mobile menu
  const closeMenu = () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    overlay.classList.add('opacity-0','invisible');
    overlay.classList.remove('opacity-100','visible');
    mobileBtn.classList.remove('open');
    document.body.style.overflow = '';
    mobileBtn.setAttribute('aria-expanded', 'false');
  };

  // Event listeners
  if (mobileBtn)  mobileBtn.addEventListener('click', openMenu);
  if (closeBtn)   closeBtn.addEventListener('click', closeMenu);
  if (overlay)    overlay.addEventListener('click', closeMenu);

  // Close nav when clicking links (mobile)
  document.querySelectorAll('#mobile-menu .nav-link').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // ESC key closes mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Active link highlight (works for both desktop + mobile)
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const hrefFile = href.split('/').pop(); // get filename only
      if (hrefFile === currentPage) {
        link.classList.add('text-orange-500', 'font-bold');
      }
    }
  });
});
