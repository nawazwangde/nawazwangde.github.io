# GEMINI.md

This file provides a comprehensive overview of the project for the Gemini AI agent.

## Project Overview

This is a personal portfolio website for Nawaz Aslam Wangde, a Mechanical Engineer with a passion for software development. The website is a single-page application (SPA) built with pure HTML, CSS, and vanilla JavaScript. It is designed to be a visually rich, responsive, and performant showcase of his skills and experience.

### Key Technologies

*   **HTML5:** Semantic HTML5 for structuring the content.
*   **CSS3:** Modern CSS3 for styling, including custom properties, flexbox, grid, and animations.
*   **Vanilla JavaScript:** Used for all interactive features, with no external libraries other than Font Awesome.
*   **Font Awesome:** For icons.
*   **GitHub Pages:** The website is hosted on GitHub Pages.

### Architecture

The project follows a simple, static website architecture. There is no build process or backend. All content is served directly from the `index.html`, `style.css`, and `script.js` files. The JavaScript is modular, with functions for different features like navigation, scroll animations, and skill bar animations.

## Building and Running

This project does not have a build process. To run it locally, you can use a simple local server.

### Recommended (with Python)

1.  Open a terminal in the project's root directory.
2.  Run the following command:

    ```bash
    python -m http.server
    ```

3.  Open your browser and navigate to `http://localhost:8000`.

### Alternative (with Node.js)

1.  Make sure you have Node.js installed.
2.  Open a terminal in the project's root directory.
3.  Run the following command:

    ```bash
    npx http-server
    ```

4.  Open your browser and navigate to the address provided in the terminal (usually `http://localhost:8080`).

## Development Conventions

*   **Styling:** The project uses modern CSS with custom properties defined in the `:root` for colors, fonts, and other variables. The CSS is well-organized and commented.
*   **JavaScript:** The JavaScript is written in a modular way, with separate functions for each feature. It uses the Intersection Observer API for performance-optimized scroll animations.
*   **No Frameworks:** The project intentionally avoids using any JavaScript frameworks to maintain a small footprint and high performance.
*   **Responsive Design:** The website is fully responsive, with a mobile-first approach.
*   **File Structure:**
    *   `index.html`: The main HTML file.
    *   `style.css`: All styles for the website.
    *   `script.js`: All JavaScript for interactive features.
    *   `assets/`: Contains images and the resume PDF.
