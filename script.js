<<<<<<< HEAD
// ===== PORTFOLIO SCRIPT 2025 =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== INITIALIZE AOS ANIMATIONS =====
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
=======
document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // ----- COMMON ANIMATIONS FOR ALL PAGES -----
    gsap.from("header", {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
>>>>>>> 96a6607502167e830bacd7bb7546b0dc7214e330
    });

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-btn');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add smooth transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
<<<<<<< HEAD
    
    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // ===== SMOOTH SCROLLING FOR NAVIGATION =====
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(this);
            }
        });
    });

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active navigation based on scroll position
        updateActiveNavOnScroll();
        
        lastScrollTop = scrollTop;
    });

    // ===== UPDATE ACTIVE NAVIGATION ON SCROLL =====
    function updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (correspondingNavLink) {
                    updateActiveNavLink(correspondingNavLink);
                }
            }
        });
    }
    
    function updateActiveNavLink(activeLink) {
        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to current link
        activeLink.classList.add('active');
    }

    // ===== FORM HANDLING =====
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '16px 24px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'success' ? '#10B981' : '#EF4444'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // ===== BUTTON HOVER EFFECTS =====
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===== PROJECT CARD INTERACTIONS =====
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== SKILL TAG ANIMATIONS =====
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // ===== PARALLAX EFFECT FOR HERO BLOBS =====
    const blobs = document.querySelectorAll('.gradient-blob');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.3;
            blob.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // ===== TYPING ANIMATION FOR HERO TITLE =====
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 1000);
    }

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // ===== MOBILE MENU TOGGLE (for future mobile menu implementation) =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // ===== PERFORMANCE OPTIMIZATION =====
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Scroll-dependent functions here
        }, 10);
    });

    // ===== PRELOAD IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ===== EASTER EGG: KONAMI CODE =====
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.toString() === konamiSequence.toString()) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });

    // ===== CONSOLE MESSAGE =====
    console.log(`
    🚀 Welcome to Naga Raj's Portfolio!
    
    Built with modern web technologies:
    • Semantic HTML5
    • CSS Grid & Flexbox
    • Vanilla JavaScript
    • AOS Animation Library
    • Responsive Design
    
    Interested in the code? Check out the source!
    `);
});

// ===== CSS ANIMATIONS (added via JavaScript) =====
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .notification {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
=======
  
    // Hover animations (nav links)
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { scale: 1.1, duration: 0.2 });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { scale: 1, duration: 0.2 });
      });
    });
  
    // Hover animations (buttons)
    document.querySelectorAll(".btn, .btn-outline").forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { 
          y: -5, 
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { 
          y: 0, 
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
    
    // Tech stack hover animations
    document.querySelectorAll(".tech-item").forEach(item => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, { scale: 1.1, duration: 0.2 });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, { scale: 1, duration: 0.2 });
      });
    });
    
    // Feature card hover animations
    document.querySelectorAll(".feature-card, .info-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".feature-icon, .info-icon"), {
          scale: 1.2,
          rotation: 10,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".feature-icon, .info-icon"), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  
    // ----- PAGE-SPECIFIC ANIMATIONS -----
    const bodyHTML = document.body.innerHTML;
  
    // Home Page
    if (document.querySelector(".home-section")) {
      gsap.from(".greeting", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3
      });
      
      gsap.from(".name-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
      
      gsap.from(".role-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7
      });
  
      gsap.from(".description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9
      });
      
      gsap.from(".tech-item", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 1.1
      });
  
      gsap.from(".buttons a", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 1.3,
        stagger: 0.2
      });
  
      gsap.from(".home-image img", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8
      });
      
      gsap.from(".image-glow", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1
      });
  
      // Floating effects
      gsap.to(".home-image img", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to(".image-glow", {
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Features section animation
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%"
        }
      });
      
      // Skills section animations for home page
      gsap.from(".skills-tech-section h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-tech-section",
          start: "top 80%"
        }
      });
      
      gsap.from(".tech-category", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".tech-categories",
          start: "top 80%"
        }
      });
      
      gsap.from(".tech-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".tech-categories",
          start: "top 70%"
        }
      });
    }
  
    // About Page
    if (document.querySelector(".about-section")) {
      // Hero section animations
      gsap.from(".about-image img", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 0.3
      });
      
      gsap.from(".image-overlay", {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      });
  
      gsap.from(".greeting", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6
      });
      
      gsap.from(".name", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
      });
      
      gsap.from(".title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1
      });
      
      gsap.from(".description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.2
      });
      
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 1.4
      });
      
      // Skills section animations
      gsap.from(".skills-section h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%"
        }
      });
      
      gsap.from(".skill-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%"
        }
      });
      
      // CTA section animations
      gsap.from(".cta-section", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%"
        }
      });
      
      // Continuous animations
      gsap.to(".about-image img", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to(".image-overlay", {
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Skill card hover effects
      document.querySelectorAll(".skill-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card.querySelector(".skill-icon"), {
            scale: 1.2,
            rotation: 10,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card.querySelector(".skill-icon"), {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
      
      // Stats counter animation
      document.querySelectorAll(".stat-number").forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue);
        
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: "power2.out",
          delay: 1.6,
          snap: { textContent: 1 },
          onUpdate: function() {
            stat.textContent = Math.ceil(this.targets()[0].textContent) + "+";
          }
        });
      });
    }
  
    // Projects Page
    if (document.querySelector(".projects-section")) {
      gsap.from(".projects-hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      });
      
      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
      });
      
      gsap.from(".filter-btn", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.7
      });
      
      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.9
      });
      
      // Filter functionality
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          const filter = btn.dataset.filter;
          const cards = document.querySelectorAll('.project-card');
          
          cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
              gsap.to(card, { opacity: 1, scale: 1, duration: 0.3 });
            } else {
              gsap.to(card, { opacity: 0.3, scale: 0.95, duration: 0.3 });
            }
          });
        });
      });
      
      // Skills section animations
      gsap.from(".skills-tech-section h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-tech-section",
          start: "top 80%"
        }
      });
      
      gsap.from(".tech-category", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".tech-categories",
          start: "top 80%"
        }
      });
      
      gsap.from(".tech-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".tech-categories",
          start: "top 70%"
        }
      });
    }

    // Contact Page
    if (document.querySelector(".contact-section")) {
      gsap.from(".contact-hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      });
      
      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
      });
      
      gsap.from(".info-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.7
      });
      
      gsap.from(".contact-form-wrapper", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9
      });
      
      gsap.from(".form-group", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 1.1
      });
      
      // Skills section animations for contact page
      gsap.from(".contact-section .skills-tech-section h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section .skills-tech-section",
          start: "top 80%"
        }
      });
      
      gsap.from(".contact-section .tech-category", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-section .tech-categories",
          start: "top 80%"
        }
      });
      
      gsap.from(".contact-section .tech-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".contact-section .tech-categories",
          start: "top 70%"
        }
      });
    }
  
  });
  
>>>>>>> 96a6607502167e830bacd7bb7546b0dc7214e330
