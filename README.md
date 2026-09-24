# Optichain Solutions, Inc. — Website

A React + Tailwind CSS marketing site for **Optichain Solutions, Inc. (OCSI)**,
the Heli-forklift sister company of Prime Group / Prime Sales Inc.

## Stack

- React 19 + Vite
- Tailwind CSS 3
- No backend — the contact form is UI-only (see `src/components/Contact.jsx` for where to wire it up)

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host (Netlify, Vercel,
your own server, etc.).

## What to customize before launch

- `src/components/Contact.jsx` — replace the phone/email/address placeholders,
  and wire the form's `handleSubmit` to your email service, form backend, or CRM.
- `src/assets/ocsi-logo.png` — swap in a higher-resolution logo file if you have one.
- Copy throughout `src/components/*.jsx` — written as a starting point; adjust
  claims (unit counts, service hours, etc.) to match what OCSI can actually commit to.
- `index.html` — update the meta description / title if needed, and add a
  favicon (`public/favicon.ico` or `.svg`, then reference it in `<head>`).

## Project structure

```
src/
  assets/          logo
  components/
    Header.jsx      nav + logo
    Hero.jsx        landing headline
    About.jsx       OCSI / Prime Group relationship
    Equipment.jsx   Heli forklift lineup
    Solutions.jsx   full service grid (racking, cold chain, training, financing)
    WhyUs.jsx       differentiators + stats
    Contact.jsx     lead form + contact info
    Footer.jsx      footer + link back to Prime Group
  App.jsx
  main.jsx
  index.css        Tailwind + custom theme utilities
tailwind.config.js  color palette, fonts
```

## Color theme

Pulled from the OCSI logo (red/maroon gradient on near-black):

| Token       | Hex       | Use                      |
|-------------|-----------|---------------------------|
| `crimson`   | `#C1121F` | Primary red, buttons, links |
| `ember`     | `#E5383B` | Hover state, bright accent |
| `maroon`    | `#5C0A12` | Deep gradient stop |
| `ink`       | `#161312` | Dark section backgrounds |
| `steel`     | `#3D4451` | Secondary neutral |
| `paper`     | `#F6F3EF` | Light background |
