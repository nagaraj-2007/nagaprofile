# 🚀 Modern Portfolio Website 2025

A clean, modern, and fully responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and a professional design.

## ✨ Features

- **Modern 2025 Design**: Clean layout with soft colors and professional typography
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: AOS library integration for scroll-triggered animations
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation
- **SEO Optimized**: Meta tags and OpenGraph support
- **Performance Optimized**: Lazy loading and debounced scroll events

## 🎨 Design System

### Color Palette
- **Primary**: #1A1F2B (Dark Blue)
- **Accent**: #FFB673 (Orange)
- **Background**: #F8F9FD (Light Gray)
- **Text**: #1F1F1F (Dark Gray)

### Typography
- **Headings**: Poppins (300, 400, 500, 600, 700)
- **Body Text**: Inter (300, 400, 500, 600)

## 📁 Project Structure

```
myportfolio/
├── index.html          # Main portfolio page
├── style.css           # Modern CSS styles
├── script.js           # Interactive JavaScript
├── README.md           # Project documentation
└── assert/             # Images and assets
    ├── 1718731305386.jpg
    ├── Screenshot 2025-07-23 193540.png
    └── [other project images]
```

## 🔧 Sections Included

1. **Hero Section**
   - Animated greeting with profile image
   - Call-to-action buttons
   - Gradient background with floating elements

2. **About Me Section**
   - Three informative cards (Who I Am, What I Do, What I'm Learning)
   - Interactive timeline (2023 → 2025)

3. **Skills Section**
   - Categorized skill tags
   - Languages, Frameworks, Tools, Other

4. **Projects Section**
   - Grid layout with project cards
   - Screenshots, descriptions, tech stacks
   - Live preview and source code buttons

5. **Experience Section**
   - Developer journey timeline
   - Professional milestones

6. **Contact Section**
   - Contact form with validation
   - Social media links
   - Responsive layout

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Update Images**: Replace images in the `assert/` folder with your own
3. **Customize Content**: Edit the HTML content in `index.html`
4. **Modify Colors**: Update CSS variables in `style.css`
5. **Add Projects**: Update the projects section with your own work
6. **Deploy**: Upload to your web hosting service

## 🎯 Customization Guide

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary: #1A1F2B;     /* Your primary color */
    --accent: #FFB673;      /* Your accent color */
    --background: #F8F9FD;  /* Background color */
    --text: #1F1F1F;        /* Text color */
}
```

### Adding New Projects
Copy this structure in the projects section:
```html
<div class="project-card" data-aos="fade-up" data-aos-delay="100">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description here...</p>
        <div class="project-tech">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
        <div class="project-buttons">
            <a href="#" class="btn btn-small">Live Preview</a>
            <a href="#" class="btn btn-outline-small">Source Code</a>
        </div>
    </div>
</div>
```

### Updating Personal Information
1. Replace profile images in the `assert/` folder
2. Update the hero title and subtitle
3. Modify the about cards content
4. Update skills and technologies
5. Add your social media links
6. Update contact information

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔗 Dependencies

- **AOS (Animate On Scroll)**: https://unpkg.com/aos@2.3.1/dist/aos.css
- **Google Fonts**: Poppins & Inter
- **No JavaScript frameworks** - Pure vanilla JS

## 🌟 Performance Features

- Lazy loading for images
- Debounced scroll events
- CSS-only animations where possible
- Optimized asset loading
- Minimal JavaScript footprint

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

This is a static website that can be deployed to:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any web hosting service**

Simply upload the files to your hosting provider's public folder.

## 📞 Support

For questions or customization help, feel free to reach out!

---

**Built with ❤️ by Naga Raj | 2025**