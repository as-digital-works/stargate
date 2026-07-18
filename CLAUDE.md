## Color Scheme
- Primary green: #2EAF4A (buttons, active nav state, accents) — supersedes any earlier #4CAF50 reference
- Dark green (text/logo): #2E7D32
- White: #FFFFFF (backgrounds, nav)
- Off-white/light gray: #F8F9FA (section backgrounds, testimonial cards)
- Dark gray text: #1A1A1A / #333333
- Muted gray text: #6B7280 (subtext, meta info)

## Layout Reference
- Fixed top navbar: logo left, nav links center, phone + "Book Now" button right
- IATA Accredited Agent badge: top-right corner of navbar or hero, small, white background
- Rounded pill-style buttons and badges throughout (border-radius: 9999px)
- Hero: full-bleed background image/3D scene with dark gradient overlay for text legibility

## Site Structure (multi-page, React Router)
- / — Home
- /about — About
- /services — Services
- /destinations — Destinations
- /testimonials — Testimonials
- /contact — Contact

## Brand
- Company: Star Gate Tourism & Travel LLC
- Primary green: #2EAF4A
- White / light gray backgrounds, dark gray/black text
- Font: Poppins or Inter
- Logo used in Navbar (left) and Footer
- IATA Accredited Agent badge in navbar, top-right, near phone/Book Now

## Navbar
- Logo left, nav links center, phone number + green "Book Now" pill + IATA badge right
- Active route gets solid green pill background with white text
- Inactive links: gray text, subtle green-tint hover (no color-on-color contrast issues)
- Sticky, with backdrop-blur + shadow after scrolling past hero

## Global motion rules
- Page transitions: fade + slight vertical slide between routes (Framer Motion AnimatePresence)
- Every section uses scroll-triggered reveal (whileInView), staggered children
- Every page's hero/banner area gets a 3D react-three-fiber element relevant to its content
- Floating WhatsApp button, present on all pages, subtle bounce/pulse idle animation
