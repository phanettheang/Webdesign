# Mahob Taste - Beginner Guide

This is a multi-page restaurant website project built with HTML, Tailwind CSS (CLI), and a little JavaScript.
It is beginner-friendly and runs as a static website (no backend required).

## 1. Project overview

This project includes:
- Responsive layout (mobile, tablet, desktop)
- Dark/Light mode toggle
- Multi-page site structure
- Local assets (fonts, images, CSS, JS)

Main pages:
1. `index.html` - Home
2. `menu.html` - Menu listing
3. `detail.html` - Food details
4. `auth.html` - Login/Register UI
5. `about.html` - About page
6. `contact.html` - Contact page

## 2. Tools you need (first time setup)

Install these first:
1. [Node.js LTS](https://nodejs.org/) (includes npm)
2. A code editor (recommended: VS Code)
3. A modern browser (Chrome, Edge, Firefox)

Check your installation:

```bash
node -v
npm -v
```

If both commands show version numbers, you are ready.

## 3. Project structure explained

```text
Project-Webdesign/
|- index.html
|- menu.html
|- detail.html
|- auth.html
|- about.html
|- contact.html
|- package.json
|- package-lock.json
|- README.md
|- assets/
|  |- css/
|  |  |- input.css      # Tailwind source file (you edit this)
|  |  |- output.css     # Generated CSS file (build output)
|  |- js/
|  |  |- main.js        # Theme toggle, mobile menu, menu filters
|  |- fonts/            # Local fonts (Khmer + display fonts)
|  |- images/           # Local image assets
|- docs/
|  |- PROJECT_REPORT.md
|  |- PRESENTATION_GUIDE.md
```

## 4. How to run the project

From the project root folder:

```bash
npm install
npm run build
```

Then open `index.html` in your browser.

## 5. Development workflow (recommended)

When you edit styles often, run Tailwind in watch mode:

```bash
npm run dev:css
```

What this does:
- Watches `assets/css/input.css`
- Regenerates `assets/css/output.css` automatically after changes

For production/minified CSS:

```bash
npm run build:css
```

## 6. How to edit safely (beginner steps)

1. Edit one file at a time.
2. Save your file.
3. Refresh browser.
4. If style changes do not appear, make sure `npm run dev:css` is running.
5. Keep image paths relative, for example: `assets/images/us.jpg`.

## 7. Common issues and fixes

### A) Styles not updating
Possible causes:
- `dev:css` is not running
- `output.css` is outdated

Fix:
1. Run `npm run dev:css`
2. Refresh browser with hard reload (`Ctrl+F5`)

### B) Page looks broken suddenly
Possible causes:
- HTML syntax error
- Merge conflict markers like `<<<<<<<`, `=======`, `>>>>>>>`

Fix:
1. Check the edited file for broken tags
2. Remove any conflict markers
3. Save and refresh

### C) Images not showing
Possible causes:
- Wrong filename or path
- Case mismatch in file name

Fix:
1. Verify file exists in `assets/images/`
2. Verify exact same name in HTML

## 8. Deployment (GitHub Pages)

1. Push project to GitHub repository.
2. Open repository `Settings`.
3. Go to `Pages`.
4. Set:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
5. Save and wait for deployment URL.

## 9. Beginner project report (short)

### Goal
Build a Khmer food website that is responsive, visually clear, and easy to navigate.

### What was implemented
- 6 static pages
- Tailwind CSS build workflow
- Dark/Light mode toggle
- Mobile menu behavior
- Category-based filtering on menu page
- Localized Khmer content and local font files

### Challenges found
- Merge conflict markers can break HTML rendering
- Inconsistent list formatting in some detail sections
- Category UI needed JavaScript to become functional

### Solutions applied
- Cleaned conflict markers
- Standardized UI elements (including bullet consistency in ingredient sections)
- Added interactive filtering logic in `main.js`

### Current status
Project is functional as a static front-end website and ready for presentation or GitHub Pages deployment.

## 10. Notes

- `auth.html` form is UI only (no real authentication backend yet).
- `contact.html` is static (no API submission yet).
- This project is ideal for front-end practice, then later upgrade to backend integration.
