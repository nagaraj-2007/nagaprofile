document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // ----- COMMON ANIMATIONS FOR ALL PAGES -----
    gsap.from("header", {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  
    gsap.from("footer", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  
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
  