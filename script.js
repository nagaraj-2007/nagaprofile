// ===== PORTFOLIO SCRIPT 2025 =====

const SKILLS_URL = `https://opensheet.vercel.app/1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo/Skills`;
const PROJECTS_URL = `https://opensheet.vercel.app/1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo/Projects`;
const JOURNEY_URL = `https://opensheet.vercel.app/1FuTWOwO-A6KmxmrnyaeGSdnAvBxYKkRuIf6ZPF_IMNo/Journey`;

async function fetchSheetData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    console.log(`Fetched data from ${url}:`, data);
    return data;
  } catch (error) {
    console.error("Network error:", error);
    return [];
  }
}

async function renderSkills() {
  const skillsList = document.getElementById("skills-list");
  if (!skillsList) return;
  
  loadFallbackSkills();
  const data = await fetchSheetData(SKILLS_URL);
  
  if (data.length === 0) return;

  skillsList.innerHTML = "";
  const skillCategories = {};
  
  data.forEach(row => {
    const skill = (row.skill || row['skill '] || '').trim();
    const category = (row.category || row['category '] || '').trim();
    if (!skill || !category) return;
    if (!skillCategories[category]) {
      skillCategories[category] = [];
    }
    skillCategories[category].push(skill);
  });

  let delay = 100;
  Object.entries(skillCategories).forEach(([category, skills]) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category";
    categoryDiv.setAttribute("data-aos", "fade-up");
    categoryDiv.setAttribute("data-aos-delay", delay);
    
    categoryDiv.innerHTML = `
      <h3>${category}</h3>
      <div class="skill-tags">
        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    `;
    
    skillsList.appendChild(categoryDiv);
    delay += 100;
  });
}

function loadFallbackSkills() {
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = `
    <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
      <h3>Languages</h3>
      <div class="skill-tags">
        <span class="skill-tag">Dart</span>
        <span class="skill-tag">C++</span>
        <span class="skill-tag">JavaScript</span>
      </div>
    </div>
    <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
      <h3>Frameworks</h3>
      <div class="skill-tags">
        <span class="skill-tag">Flutter</span>
        <span class="skill-tag">Firebase</span>
      </div>
    </div>
    <div class="skill-category" data-aos="fade-up" data-aos-delay="300">
      <h3>Tools</h3>
      <div class="skill-tags">
        <span class="skill-tag">Git</span>
        <span class="skill-tag">VS Code</span>
      </div>
    </div>
  `;
}

async function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  
  loadFallbackProjects();
  let data = await fetchSheetData(PROJECTS_URL);
  
  if (data.length === 0) return;

  container.innerHTML = "";
  data = data.sort((a, b) => (Number(a.order || 0) - Number(b.order || 0)));

  let delay = 100;
  data.forEach(row => {
    const title = (row.title || row['title '] || '').trim();
    if (!title) return;
    
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", delay);

    const description = (row.description || row['description '] || '').trim();
    const stack = (row.stack || row['stack '] || '').trim();
    const techArray = stack ? stack.split(',').map(t => t.trim()) : [];

    card.innerHTML = `
      <div class="project-image">
        ${row.image ? `<img src="${row.image}" alt="${title}">` : `<div class="project-placeholder">🚀</div>`}
      </div>
      <div class="project-content">
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="project-tech">
          ${techArray.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-buttons">
          ${row.live ? `<a href="${row.live}" class="btn btn-small" target="_blank">Live Preview</a>` : ""}
          ${row.code ? `<a href="${row.code}" class="btn btn-outline-small" target="_blank">Source Code</a>` : ""}
        </div>
      </div>
    `;

    container.appendChild(card);
    delay += 100;
  });
}

function loadFallbackProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = `
    <div class="project-card" data-aos="fade-up" data-aos-delay="100">
      <div class="project-image">
        <div class="project-placeholder">📱</div>
      </div>
      <div class="project-content">
        <h3>Math Quiz App</h3>
        <p>Interactive quiz application built with Flutter and Google Sheets integration.</p>
        <div class="project-tech">
          <span>Flutter</span>
          <span>Google Sheets</span>
          <span>Dart</span>
        </div>
      </div>
    </div>
    <div class="project-card" data-aos="fade-up" data-aos-delay="200">
      <div class="project-image">
        <div class="project-placeholder">🎯</div>
      </div>
      <div class="project-content">
        <h3>Physics Quiz App</h3>
        <p>Educational quiz platform with advanced physics problems.</p>
        <div class="project-tech">
          <span>Flutter</span>
          <span>Firebase</span>
        </div>
      </div>
    </div>
  `;
}

async function renderJourney() {
  const container = document.getElementById("journey-container");
  if (!container) return;
  
  loadFallbackJourney();
  let data = await fetchSheetData(JOURNEY_URL);
  
  if (data.length === 0) return;

  container.innerHTML = "";
  data = data.sort((a, b) => (Number(a.order || 0) - Number(b.order || 0)));

  data.forEach(row => {
    const year = (row.year || row[' year'] || '').trim();
    const text = (row.text || row['text '] || '').trim();
    if (!year) return;
    
    const item = document.createElement("div");
    item.className = "timeline-item";

    item.innerHTML = `
      <div class="timeline-year">${year}</div>
      <div class="timeline-content">${text}</div>
    `;

    container.appendChild(item);
  });
}

function loadFallbackJourney() {
  const container = document.getElementById("journey-container");
  container.innerHTML = `
    <div class="timeline-item">
      <div class="timeline-year">2023</div>
      <div class="timeline-content">Started Coding</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2024</div>
      <div class="timeline-content">Flutter Projects</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2025</div>
      <div class="timeline-content">Cloud Architecture Learning</div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
    
    // Load data
    renderSkills();
    renderProjects();
    renderJourney();

    // Theme toggle
    const themeToggle = document.getElementById('theme-btn');
    const body = document.body;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }

    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }
});