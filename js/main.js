document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    updateThemeIcon();
  }
  
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    updateThemeIcon();
    
    // Save theme preference
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
  
  function updateThemeIcon() {
    if (body.classList.contains('dark-mode')) {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  }
  
  // Search Toggle
  const searchToggle = document.getElementById('search-toggle');
  const searchOverlay = document.querySelector('.search-overlay');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');
  
  searchToggle.addEventListener('click', function() {
    searchOverlay.style.display = 'flex';
    setTimeout(() => {
      searchInput.focus();
    }, 100);
  });
  
  closeSearch.addEventListener('click', function() {
    searchOverlay.style.display = 'none';
  });
  
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });
  
  // Custom Cursor
  const cursor = document.querySelector('.cursor-follower');
  
  if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
    
    document.addEventListener('mouseup', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  }
  
  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  const formFeedback = document.querySelector('.form-feedback');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      
      // Simulate form submission
      formFeedback.textContent = 'Thanks for subscribing!';
      formFeedback.style.color = '#6c63ff';
      newsletterForm.reset();
      
      // Reset feedback after 3 seconds
      setTimeout(() => {
        formFeedback.textContent = '';
      }, 3000);
    });
  }
  
  // Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }
});
