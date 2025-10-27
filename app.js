// Typing Animation
const phrases = [
  'Aspiring Software Engineer',
  'Coding Enthusiast',
  'Web Developer',
  'Java Developer'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50;

function typeEffect() {
  const typedElement = document.getElementById('typed');
  const currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting) {
    // Typing
    typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    
    if (charIndex === currentPhrase.length) {
      // Pause at end
      isDeleting = true;
      typingSpeed = 500;
    } else {
      typingSpeed = 60;
    }
  } else {
    // Deleting
    typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 50;
    } else {
      typingSpeed = 50;
    }
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 1000);
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = progress + '%';
});

// Particle System
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// Scroll Animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('[data-aos]');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
      element.classList.add('aos-animate');
      
      // Animate skill bars when they come into view
      if (element.classList.contains('glass-card')) {
        const skillBars = element.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          if (!bar.classList.contains('animate')) {
            bar.classList.add('animate');
          }
        });
      }
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(102, 126, 234, 0.9)';
    navbar.style.backdropFilter = 'blur(20px)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    navbar.style.backdropFilter = 'blur(10px)';
  }
});

// Intersection Observer for Fade-In Effects
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
      
      // Animate skill bars when cards come into view
      if (entry.target.classList.contains('glass-card')) {
        const skillBars = entry.target.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          if (!bar.classList.contains('animate')) {
            bar.classList.add('animate');
          }
        });
      }
    }
  });
}, observerOptions);

// Observe all elements with data-aos attributes
document.querySelectorAll('[data-aos]').forEach(element => {
  fadeInObserver.observe(element);
});

// Observe all cards, sections, and boxes for fade-in effect
document.querySelectorAll('.glass-card, .education-card, .project-card, .category-card').forEach(element => {
  fadeInObserver.observe(element);
});

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-content');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
  
  // Navbar Background on Scroll
  const navbar = document.querySelector('.navbar');
  if (scrolled > 50) {
    navbar.style.background = 'rgba(10, 25, 47, 0.9)';
    navbar.style.backdropFilter = 'blur(20px)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    navbar.style.backdropFilter = 'blur(10px)';
  }
});