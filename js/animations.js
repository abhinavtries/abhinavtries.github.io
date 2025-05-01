document.addEventListener('DOMContentLoaded', function() {
  // Add page transition element
  const pageTransition = document.createElement('div');
  pageTransition.className = 'page-transition';
  document.body.appendChild(pageTransition);

  // Initialize page transition - hide it immediately
  setTimeout(() => {
    pageTransition.style.transform = 'translateY(-100%)';
  }, 100);

  // Add reveal class to elements
  const sections = document.querySelectorAll('section:not(.hero)');
  sections.forEach(section => {
    section.classList.add('reveal');
  });

  // Special handling for hero section
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    // Don't add the regular reveal class to hero

    // Add hero-reveal class to hero content elements
    const heroContent = heroSection.querySelector('.hero-content');
    const heroTitle = heroSection.querySelector('h1');
    const heroSubtitle = heroSection.querySelector('.subtitle');
    const heroCta = heroSection.querySelector('.hero-cta');

    if (heroContent) heroContent.classList.add('hero-reveal');
    if (heroTitle) heroTitle.classList.add('hero-reveal');
    if (heroSubtitle) heroSubtitle.classList.add('hero-reveal');
    if (heroCta) heroCta.classList.add('hero-reveal');

    // Activate hero elements immediately
    setTimeout(() => {
      const heroElements = heroSection.querySelectorAll('.hero-reveal');
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active');
        }, index * 200); // Stagger the animations
      });

      // Activate geometric shapes with a delay
      const shapes = heroSection.querySelectorAll('.geometric-shape');
      shapes.forEach((shape, index) => {
        setTimeout(() => {
          shape.classList.add('active');
        }, 500 + (index * 200)); // Start after content animation with staggered timing
      });
    }, 100);
  }

  // Add 3D card effect to post cards
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(card => {
    card.classList.add('card-3d');
    card.classList.add('hover-lift');
  });

  // Add gradient text to section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.classList.add('gradient-text');
  });

  // Add neon glow to logo
  const logo = document.querySelector('.logo-text');
  if (logo) {
    logo.classList.add('neon-glow');
  }

  // Particles Background (if particles.js is loaded)
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#6c63ff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#6c63ff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // Enhanced cursor follower
  const cursor = document.querySelector('.cursor-follower');
  if (cursor && window.innerWidth > 1024 && cursor.style) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
      cursor.style.background = 'rgba(108, 99, 255, 0.4)';
    });

    document.addEventListener('mouseup', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.background = 'rgba(108, 99, 255, 0.2)';
    });

    // Change cursor on hoverable elements
    const hoverableElements = document.querySelectorAll('a, button, .post-card, .category-card, .btn');
    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', function() {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.background = 'rgba(108, 99, 255, 0.1)';
        cursor.style.mixBlendMode = 'difference';
      });

      el.addEventListener('mouseleave', function() {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.background = 'rgba(108, 99, 255, 0.2)';
        cursor.style.mixBlendMode = 'difference';
      });
    });
  }

  // Reveal animation for elements
  const revealElements = document.querySelectorAll('.reveal, .hero-reveal:not(.active)');

  function checkIfInView() {
    revealElements.forEach(element => {
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      }
    });
  }

  // Initial check - run sooner to avoid flicker
  setTimeout(checkIfInView, 100);

  // Check on scroll
  window.addEventListener('scroll', checkIfInView);

  // Parallax effect for elements
  const parallaxElements = document.querySelectorAll('.hero-image, .post-card-image, .about-image');

  if (parallaxElements.length > 0) {
    parallaxElements.forEach(element => {
      if (element) {
        element.classList.add('parallax');
      }
    });

    window.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      parallaxElements.forEach(element => {
        if (element && element.style) {
          const offsetX = (mouseX - 0.5) * 30;
          const offsetY = (mouseY - 0.5) * 30;
          element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      });
    });
  }

  // Typing animation for subtitle
  const subtitle = document.querySelector('.subtitle');
  if (subtitle) {
    subtitle.classList.add('typing-animation');
  }

  // Add scroll-triggered animations to elements
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero && hero.style && hero.style.backgroundImage) {
      hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }

    // Scale effect for header on scroll
    const header = document.querySelector('header');
    if (header) {
      if (scrollPosition > 50) {
        header.style.padding = '10px 0';
        header.style.backdropFilter = 'blur(20px)';
      } else {
        header.style.padding = '20px 0';
        header.style.backdropFilter = 'blur(10px)';
      }
    }

    // Rotate geometric shapes on scroll
    const shapes = document.querySelectorAll('.geometric-shape');
    shapes.forEach((shape, index) => {
      if (shape && shape.style) {
        const rotateAmount = scrollPosition * 0.05 * (index + 1);
        shape.style.transform = `rotate(${rotateAmount}deg)`;
      }
    });
  });

  // Add page transition for links
  const links = document.querySelectorAll('a:not([target="_blank"])');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Only apply transition for internal links
      if (href && href.indexOf('#') !== 0 && href.indexOf('mailto:') !== 0 && href.indexOf('tel:') !== 0) {
        e.preventDefault();

        // Reset the transition position
        pageTransition.style.transition = 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)';
        pageTransition.style.transform = 'translateY(0)';
        pageTransition.classList.add('active');

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
});
