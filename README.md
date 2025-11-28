# Agrobank Business Copilot Pitch Deck

Static slide-show style landing page that mirrors the hackathon storyline in `plan.md`.

## Preview

Open `index.html` in a modern browser (Chrome, Edge, Firefox, Safari). No build step required.

## Controls

- `Next ▸` / `◂ Prev` buttons or keyboard arrows/PageUp/PageDown to cycle slides.
- Touch swipe (left/right) is supported on mobile.
- "See the Solution Slide" button jumps directly to the solution section.

## Structure

- `index.html` – semantic slides + mocked hero/feature content.
- `styles.css` – neon-on-dark visual language with responsive layout.
- `script.js` – lightweight controller for slide navigation and progress bar.
- `assets/` – simple SVG illustrations used as stand-ins for product visuals.

## Customizing Quickly

- Update copy inside each `<section class="slide">` block.
- Replace SVGs in `assets/` with screenshots or richer illustrations when available.
- Extend slides by duplicating a section and updating `data-index`; script reads them automatically.
