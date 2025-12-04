// =============================================
// MODERN PORTFOLIO - JAVASCRIPT
// =============================================

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Initialize all features
  initNavbar();
  initMobileNav();
  initScrollAnimations();
  initSkillBarsAnimation();
});

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
  });

  // Smooth scroll to sections
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  // Handle hero section
  if (window.pageYOffset < 300) {
    currentSection = 'home';
  }

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// =============================================
// MOBILE NAVIGATION
// =============================================

function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// =============================================
// SCROLL ANIMATIONS
// =============================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);

  // Observe all elements with data-aos attribute
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach(el => observer.observe(el));
}

// =============================================
// SKILL BARS ANIMATION
// =============================================

function initSkillBarsAnimation() {
  const skillsSection = document.getElementById('skills');

  if (!skillsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillsSection);
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');

  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.style.width;
      bar.style.width = '0%';

      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }, index * 100);
  });
}

// =============================================
// LOGO CLICK - SCROLL TO TOP
// =============================================

const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// =============================================
// BUTTON RIPPLE EFFECT ENHANCEMENT
// =============================================

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transform: translate(-50%, -50%);
      animation: ripple-effect 0.6s ease-out;
      pointer-events: none;
    `;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple-effect {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// =============================================
// SMOOTH PAGE LOAD
// =============================================

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// =============================================
// CONSOLE MESSAGE (Easter Egg)
// =============================================

console.log(
  '%c👋 Hello Developer!',
  'color: #3b82f6; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(59, 130, 246, 0.3);'
);
console.log(
  '%cThanks for checking out my portfolio!',
  'color: #8b5cf6; font-size: 14px;'
);
console.log(
  '%cInterested in collaborating? Reach out at wangdenawaz@gmail.com',
  'color: #10b981; font-size: 12px;'
);
console.log(
  '%c🚀 Built with HTML, CSS, JavaScript - No frameworks, pure performance!',
  'color: #06b6d4; font-size: 12px;'
);
