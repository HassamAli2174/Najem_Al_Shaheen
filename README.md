# Najem Al Shaheen — Catalog Website

Single-page Angular 19 site for **Najem Al Shaheen Repairing of Equipment**.

## Run locally
```bash
npm install
npm start          # ng serve, http://localhost:4200
```

## Build for production
```bash
npm run build       # outputs to dist/najem-al-shaheen/browser
```

## Deploy
This is a static Angular app — works directly on **Vercel** or **Netlify**:
- Build command: `npm run build`
- Output directory: `dist/najem-al-shaheen/browser`
- Framework preset: Angular (both platforms auto-detect this)

## Structure
```
src/app/components/
  header/     sticky nav, mobile menu
  hero/       headline + animated coil/winding SVG (signature visual)
  about/      company description + equipment-nameplate motif
  services/   tabbed service groups (Electrical / Fabrication / Heavy-Duty)
  gallery/    real workshop photos, masonry-style grid
  contact/    contact details + form (sends to WhatsApp — no backend yet)
  footer/
```

## Editing content
- **Services list**: edit the `groups` array in `services/services.component.ts`
- **Gallery photos**: edit the `photos` array in `gallery/gallery.component.ts`, images live in `src/assets/images/`
- **Contact numbers**: update directly in `contact/contact.component.html` and `contact.component.ts` (WhatsApp link uses `971559199148`)
- **Colors/fonts**: all design tokens are CSS variables at the top of `src/styles.scss`

## Notes
- Contact form currently opens a pre-filled WhatsApp chat (no backend). Tell me if you want a real form submission (e.g. EmailJS, Formspree, or a Spring Boot endpoint) wired in instead.
- Gallery photos were cropped from your brochure images — replace with higher-res originals in `src/assets/images/` when you have them, same filenames will just work.
