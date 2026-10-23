# Sok Yun — UX/UI Designer Portfolio

A responsive, single-page portfolio with three standalone project case studies. The product previews are made with HTML and CSS; no stock photography or image assets are required.

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension. Bootstrap 5 and DM Sans / DM Serif Display are loaded from CDNs, with local font and layout fallbacks if those services are unavailable.

## Project structure

```text
index.html
css/style.css
js/script.js
assets/
  images/
  projects/
  icons/
projects/
  passapp.html
  website-design.html
  design-system.html
```

## Before publishing

- In `index.html`, replace `YOUR_EMAIL@example.com` in the `mailto:` link with your real professional email address.
- Add real LinkedIn, Figma, Behance, and resume destinations in the contact area when available. They are shown as labeled text placeholders until you provide those URLs; no profiles or contact details have been invented.
- Replace each case study's role, tools, objective, audience, process, artifacts, and reflection placeholders with verified project information. The PassApp screen work is presented as a concept and does not claim research, testing, or measured outcomes.
- Add Figma exports and prototype links in the slots provided on each case study. Check the file's sharing permissions before publishing.
- The responsive website preview is a generic concept presentation, not a real client or named company.

## Implementation notes

- Bootstrap 5 supplies the responsive grid and basic layout utilities; `css/style.css` owns the visual system and responsive compositions.
- `js/script.js` controls the small-screen navigation, current footer year, and reduced-motion-aware reveal transitions.
- All page navigation and case study links are local anchors or local files. External portfolio and social links remain placeholders until actual URLs are available.
