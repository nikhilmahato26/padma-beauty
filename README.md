# Elegant Salon & Makeup Studio

A premium, production-grade React website for **Elegant Salon & Makeup Studio**, Jalandhar.

Built with: **React + Vite + Tailwind CSS + Framer Motion + React Icons + React Hook Form**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

---

## Folder Structure

```
elegant-salon/
├── index.html               # Vite entry HTML (loads Google Fonts)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # Section composition
    ├── index.css            # Tailwind + custom design tokens (grain, marquee, pill, etc.)
    ├── components/          # Reusable atoms (Navbar, Tick, Arrow, FloatingActions...)
    ├── sections/            # Page sections (Hero, About, Services, Bridal, ...)
    ├── constants/site.js    # Business info, services, testimonials, gallery
    ├── hooks/               # useScrolled (sticky-nav background)
    ├── utils/
    │   ├── motion.js        # Framer Motion variants
    │   └── links.js         # WhatsApp / tel / mailto helpers
    └── assets/              # (drop your real photos here)
```

---

## Customising Business Info

All business content (phone, address, services, packages, testimonials, gallery images) lives in **one file**:

> `src/constants/site.js`

Edit that file to update the whole site.

---

## Replacing Stock Images

The site currently uses Unsplash URLs for speed. To use real Elegant Salon photos:

1. Add your images to `src/assets/`
2. Import them in `src/constants/site.js`, e.g.:

```js
import bridal1 from '../assets/bridal-1.jpg'

export const FEATURED_SERVICES = [
  { title: 'Lips', n: '01', img: bridal1, alt: '...' },
  // ...
]
```

3. Replace the gallery URLs in `GALLERY` and the hero `<img src=...>` in `src/sections/Hero.jsx`.

---

## Sections

1. **Hero** — fullscreen bridal image, rotating spin badge, trust badges, stat cards
2. **Marquee** — infinite scrolling service strip
3. **About** — sticky text + image collage + 6 highlight cards
4. **Services** — 3 featured cards (Lips / Brows / Facials) + 5 category cards with Makeup highlighted in gold
5. **Bridal Atelier** — packages, pricing, includes card
6. **Testimonials** — 3 customer reviews on cream background
7. **Why Us** — 6 reasons grid
8. **Gallery** — 8-image masonry-style grid
9. **Meet The Expert** — bio for Versha
10. **Book Appointment** — react-hook-form → opens pre-filled WhatsApp message
11. **Contact** — embedded Google Map + studio hours + actions
12. **Footer** — full mega footer with social links

Plus:
- Sticky navbar with mobile menu
- Floating WhatsApp + Call buttons
- Scroll-reveal animations (Framer Motion `whileInView`)
- Image zoom on hover, ripple-style button underlines, grain overlay

---

## Design Tokens

Defined in `tailwind.config.js`:

```js
ink:        '#1A1714'   // deep charcoal
ink-deep:   '#0F0D0B'
cream:      '#F4EFE6'   // warm ivory
gold:       '#C9A961'   // refined gold
gold-soft:  '#E8D4A8'
rose:       '#E9C9C2'
```

Fonts (loaded in `index.html`): **Fraunces** (display serif), **Italiana** (refined accents), **Inter** (body).

---

## SEO

Meta tags optimised in `index.html` for:
- Best Salon in Jalandhar
- Bridal Makeup Artist in Jalandhar
- Salon Near KMV College
- Best Makeup Studio in Jalandhar
- Elegant Salon & Makeup Studio

---

## Deployment

```bash
npm run build
```

Then deploy the `dist/` folder to **Vercel**, **Netlify**, or any static host.

Made with care for **Elegant Salon & Makeup Studio**, Jalandhar.
