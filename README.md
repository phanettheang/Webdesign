# Mahob Taste - Web Design Assignment

A responsive restaurant website project (topic: **Restaurant**) built with **Tailwind CLI**.

## Assignment checklist

- [x] Minimum 5 pages (this project has 6 pages)
- [x] Tailwind CLI workflow
- [x] Dark/Light mode
- [x] GitHub-ready source structure
- [x] GitHub Pages-friendly static files
- [x] Responsive mobile/tablet/desktop layout

## Pages

1. `index.html` - Home/Landing
2. `menu.html` - Listing page
3. `detail.html` - Detail page
4. `auth.html` - Authentication (Login/Register)
5. `about.html` - About
6. `contact.html` - Contact

## Beginner-friendly folder structure

```text
y1s1b1_restaurants/
|- index.html
|- menu.html
|- detail.html
|- auth.html
|- about.html
|- contact.html
|- package.json
|- package-lock.json
|- assets/
|  |- css/
|  |  |- input.css      # Tailwind source
|  |  |- output.css     # Generated CSS file
|  |- js/
|  |  |- main.js        # Theme toggle + mobile menu
|  |- fonts/            # Local static fonts
|  |- images/           # Local static images
|- docs/
|  |- PROJECT_REPORT.md
|  |- PRESENTATION_GUIDE.md
```

## Install and run

```bash
npm install
npm run build
```

For development mode (auto-rebuild CSS):

```bash
npm run dev:css
```

Then open `index.html` in your browser.

## GitHub Pages deployment

1. Push this folder to a GitHub repository.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, select:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
4. Save, then wait for GitHub Pages URL.

## Design direction

- Inspired by [mahobkhmer.com](https://www.mahobkhmer.com/)
- Warm culinary color palette (spice, sand, forest tones)
- Elegant headline font + clean body font
- Soft gradients and card surfaces
- Simple motion (`fade-up` stagger)
- Khmer localization with local Khmer fonts (`Koulen` for headings, `Battambang` for body)

## Notes

- Forms are static UI only (no backend).
- Fonts and images are now fully local static assets (no Google Fonts or Unsplash runtime dependency).
