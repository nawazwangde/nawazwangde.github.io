# Portfolio Website

Personal portfolio website built with HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.

🔗 **Live Site**: [nawazwangde.github.io](https://nawazwangde.github.io)

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid, Animations)
- Vanilla JavaScript (Intersection Observer API)
- Font Awesome 6.4.0
- GitHub Pages (Hosting)

## Project Structure

```
nawazwangde.github.io/
├── index.html          # Single-page application
├── style.css           # All styling with CSS variables
├── script.js           # Navigation, scroll effects, animations
├── assets/
│   ├── profile.jpeg    # Profile image
│   └── Resume.pdf      # CV download
└── README.md
```

## Features

- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Animated gradient background with floating orbs
- **Glassmorphism UI** - Backdrop blur effects on cards
- **Smooth Animations** - Intersection Observer for scroll-triggered animations
- **No Dependencies** - Pure vanilla JavaScript, no frameworks
- **Static Site** - No build process required

## Local Development

### Quick Start

Clone and open in browser:

```bash
git clone https://github.com/nawazwangde/nawazwangde.github.io.git
cd nawazwangde.github.io
```

#### Windows
```bash
start index.html
```

#### macOS
```bash
open index.html
```

#### Linux
```bash
xdg-open index.html
```

### Using Local Server (Optional)

For better development experience:

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

**VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then visit: `http://localhost:8000`

## Architecture

### Single-Page Static Site
- No build tools or transpilation
- Direct HTML/CSS/JS served to browser
- All content in one HTML file for simplicity

### CSS Organization
- CSS custom properties for theming
- Mobile-first responsive breakpoints
- Modular class naming

### JavaScript Features
- Sticky navigation with scroll detection
- Mobile hamburger menu toggle
- Intersection Observer for fade-in animations
- Skill bar animations on scroll

## Deployment

Automatically deploys via GitHub Pages:

1. Push to `main` branch
2. GitHub Actions builds and deploys
3. Wait 5-10 minutes for deployment
4. Hard refresh browser (`Ctrl+Shift+R`) to clear cache

**Deployment URL**: `https://nawazwangde.github.io`

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Desktop | >900px | Full grid, horizontal nav |
| Tablet | ≤900px | Simplified grids |
| Mobile | ≤720px | Hamburger menu, stacked |
| Small Mobile | ≤480px | Optimized spacing |

## Making Changes

1. Edit `index.html` for content
2. Modify `style.css` for styling
3. Update `script.js` for behavior
4. Test locally before pushing
5. Commit and push to deploy

## Performance

- No external dependencies (except Font Awesome CDN)
- Optimized images
- CSS animations with GPU acceleration
- Minimal JavaScript for fast load times

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Personal portfolio - code available for reference and learning.

---

**Last Updated**: December 2025
**Built with**: Claude AI assistance
