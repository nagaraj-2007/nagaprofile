document.addEventListener("DOMContentLoaded", () => {
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
        gsap.to(btn, { y: -3, duration: 0.2 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { y: 0, duration: 0.2 });
      });
    });
  
    // ----- PAGE-SPECIFIC ANIMATIONS -----
    const bodyHTML = document.body.innerHTML;
  
    // Home Page
    if (document.querySelector(".home-section")) {
      gsap.from(".home-text h2", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      });
  
      gsap.from(".home-text p", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
  
      gsap.from(".buttons a", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.7,
        stagger: 0.2
      });
  
      gsap.from(".home-image img", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8
      });
  
      // Floating effect
      gsap.to(".home-image img", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  
    // About Page
    if (document.querySelector(".about-section")) {
      gsap.from(".about-image img", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
      });
  
      gsap.from(".about-text h2", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
  
      gsap.from(".about-text p", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.7
      });
  
      gsap.from(".about-text a.btn", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 1.1
      });
    }
  
    // Projects Page
    if (document.querySelector(".projects-section")) {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3
      });
    }
  
    // Contact Page
    // Contact Page
if (document.querySelector(".contact-section")) {
    gsap.from(".contact-section h2", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });
  
    gsap.from(".contact-section p", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  
    gsap.from(".contact-section form", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.7
    });
  }
  
  });
  