

## Hero Background + Interactive Homepage Sections

### 1. Hero Background Enhancement (`Index.tsx`)
- Add a subtle gradient mesh/glow background to the hero `<section>`: a radial gradient with soft primary/blue blurs positioned behind the content using pseudo-elements or absolutely-positioned divs
- Add a faint grid pattern overlay (CSS background-image with a repeating dot or line grid at low opacity) for texture
- This gives the hero visual depth without competing with the demo

### 2. Integrations Bar — Animated Marquee (`Index.tsx`)
- Replace the static `flex-wrap` integration list with an auto-scrolling horizontal marquee using CSS `@keyframes` (translate loop)
- Duplicate the list for seamless looping; pause on hover

### 3. Problem Section — Animated Counters + Icons (`Index.tsx`)
- Add a relevant icon to each problem card (e.g., `XCircle`, `Clock`, `EyeOff`)
- Add a hover effect that subtly scales and changes border color
- Add staggered entrance animations (already have `fadeUp`, add per-card delay)

### 4. Features Section — Interactive Hover States (`Index.tsx`)
- On hover, show a gradient border glow (ring-primary/20) and scale the icon up
- Add a subtle gradient background shift on hover (bg-gradient-to-br from-primary/5)

### 5. Testimonials — Auto-rotating Carousel Feel (`Index.tsx`)
- Add avatar initials circle (colored by index) to each testimonial
- Add hover lift effect with shadow-xl transition

### 6. Pricing Section — Interactive Hover + Scale (`Index.tsx`)
- Add hover scale (1.02) and shadow-xl on pricing cards
- Animate the "Most Popular" badge with a subtle pulse

### 7. Installation Section — Copy Button (`Index.tsx`)
- Add a "Copy" button to the code block that copies the snippet to clipboard
- Show a brief "Copied!" feedback using state toggle

### Files
- `src/pages/Index.tsx` — all section enhancements
- `src/index.css` — hero background gradient, marquee keyframes

