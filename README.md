# 🌐 Portfolio Website

> Personal portfolio website built with HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.

[![Live Site](https://img.shields.io/badge/🌍_Live_Site-Visit_Portfolio-blue?style=for-the-badge)](https://nawazwangde.github.io)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?style=for-the-badge&logo=github)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-Personal-orange?style=for-the-badge)](LICENSE)

---

## 🚀 Tech Stack

<div align="center">

| Technology | Description |
|:----------:|-------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Semantic markup |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Custom Properties, Flexbox, Grid, Animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Vanilla JS, Intersection Observer API |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white) | Icons v6.4.0 |

</div>

---

## 📁 Project Structure

```
📦 nawazwangde.github.io
┣ 📄 index.html          # Single-page application
┣ 🎨 style.css           # All styling with CSS variables
┣ ⚡ script.js           # Navigation, scroll effects, animations
┣ 📂 assets/
┃ ┣ 🖼️ profile.jpeg     # Profile image
┃ ┗ 📋 Resume.pdf       # CV download
┗ 📖 README.md
```

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design
- 🌙 **Dark Theme** with animated gradient background
- ✨ **Glassmorphism UI** with backdrop blur effects
- 🎭 **Smooth Animations** via Intersection Observer
- 📱 **Fully Responsive** - Mobile-first approach

</td>
<td width="50%">

### ⚡ Performance
- 🚫 **Zero Dependencies** - Pure vanilla JavaScript
- 📦 **No Build Process** - Static HTML/CSS/JS
- 🚀 **Fast Loading** - Optimized assets
- 💨 **GPU Accelerated** - CSS animations

</td>
</tr>
</table>

---

## 🛠️ Local Development

### 📥 Quick Start

```bash
# Clone the repository
git clone https://github.com/nawazwangde/nawazwangde.github.io.git
cd nawazwangde.github.io
```

### 🌐 Open in Browser

<details>
<summary><b>🪟 Windows</b></summary>

```bash
start index.html
```
</details>

<details>
<summary><b>🍎 macOS</b></summary>

```bash
open index.html
```
</details>

<details>
<summary><b>🐧 Linux</b></summary>

```bash
xdg-open index.html
```
</details>

### 🔥 Using Local Server (Recommended)

<table>
<tr>
<td><b>🐍 Python</b></td>
<td>

```bash
python -m http.server 8000
```
</td>
</tr>

<tr>
<td><b>📦 Node.js</b></td>
<td>

```bash
npx http-server -p 8000
```
</td>
</tr>

<tr>
<td><b>💻 VS Code</b></td>
<td>

1. Install **Live Server** extension
2. Right-click `index.html`
3. Select **"Open with Live Server"**

</td>
</tr>
</table>

Then visit: **http://localhost:8000** 🎉

---

## 🏗️ Architecture

### 🎯 Single-Page Static Site
- ✅ No build tools or transpilation
- ✅ Direct HTML/CSS/JS served to browser
- ✅ All content in one HTML file for simplicity

### 🎨 CSS Organization
- 🎭 CSS custom properties for theming
- 📱 Mobile-first responsive breakpoints
- 🏷️ Modular class naming convention

### ⚙️ JavaScript Features
- 📌 Sticky navigation with scroll detection
- 🍔 Mobile hamburger menu toggle
- 🎬 Intersection Observer for fade-in animations
- 📊 Skill bar animations on scroll

---

## 🚀 Deployment

### 📤 Auto-Deploy Workflow

```mermaid
graph LR
    A[💻 Push to main] --> B[⚙️ GitHub Actions]
    B --> C[🏗️ Build & Deploy]
    C --> D[🌍 Live Site]
```

**Steps:**
1. 📝 Commit changes to `main` branch
2. ⬆️ Push to GitHub
3. ⏳ Wait 5-10 minutes for deployment
4. 🔄 Hard refresh browser (`Ctrl+Shift+R`)

**Live URL**: [nawazwangde.github.io](https://nawazwangde.github.io)

---

## 📱 Responsive Breakpoints

| 🖥️ Device | 📏 Width | 🎨 Layout |
|:--------:|:-------:|----------|
| 💻 Desktop | >900px | Full grid, horizontal nav |
| 📱 Tablet | ≤900px | Simplified grids |
| 📲 Mobile | ≤720px | Hamburger menu, stacked |
| 🔬 Small Mobile | ≤480px | Optimized spacing |

---

## 🔧 Making Changes

| Step | Action | File |
|:----:|--------|------|
| 1️⃣ | Edit content | `index.html` |
| 2️⃣ | Modify styling | `style.css` |
| 3️⃣ | Update behavior | `script.js` |
| 4️⃣ | Test locally | Open in browser |
| 5️⃣ | Commit & push | Deploy to GitHub |

---

## ⚡ Performance Metrics

<div align="center">

| Metric | Status |
|:------:|:------:|
| 🎯 **Dependencies** | ![Zero](https://img.shields.io/badge/External-1_(Font_Awesome)-blue) |
| 📦 **Bundle Size** | ![Small](https://img.shields.io/badge/Size-Minimal-green) |
| ⚡ **Load Time** | ![Fast](https://img.shields.io/badge/Speed-Optimized-success) |
| 🎨 **Animations** | ![Smooth](https://img.shields.io/badge/GPU-Accelerated-orange) |

</div>

---

## 🌐 Browser Support

<div align="center">

![Chrome](https://img.shields.io/badge/Chrome-✅_Latest-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-✅_Latest-0078D7?style=for-the-badge&logo=microsoftedge&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-✅_Latest-FF7139?style=for-the-badge&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-✅_Latest-000000?style=for-the-badge&logo=safari&logoColor=white)

</div>

**Mobile Browsers:** iOS Safari, Chrome Mobile, Samsung Internet

---

## 📜 License

**Personal Portfolio** - Code available for reference and learning purposes.

---

<div align="center">

### 🔗 Quick Links

[![Website](https://img.shields.io/badge/🌐_Website-Visit_Now-blue?style=for-the-badge)](https://nawazwangde.github.io)
[![Email](https://img.shields.io/badge/📧_Email-Contact_Me-red?style=for-the-badge)](mailto:wangdenawaz@gmail.com)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/nawazwangde)
[![GitHub](https://img.shields.io/badge/💻_GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/nawazwangde)

---

**Last Updated:** December 2025 • **Built with:** Claude AI Assistance

⭐ **Star this repo** if you find it helpful!

</div>
