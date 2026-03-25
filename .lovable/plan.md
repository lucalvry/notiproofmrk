

## Hero Section — Tighter Copy + Wider Demo + More Notifications

### Problems
1. **Hero copy takes too much vertical space** — `section-padding` adds `py-20 md:py-28`, plus `mb-6` on badge, `mb-6` on H1, `mb-8` on subtitle, `mt-14` gap before demo. The demo is pushed well below the fold.
2. **Demo width capped at `max-w-4xl` (896px)** — on a 1069px viewport this leaves ~170px of dead space on each side. The browser mockup feels small.
3. **Only 4 notification types** — missing key product features like video testimonials, announcements, and review aggregation.

### Changes

**1. Reduce hero vertical spacing (`Index.tsx`)**
- Replace `section-padding` on hero with tighter padding: `py-12 md:py-16`
- Reduce H1 from `text-4xl md:text-5xl lg:text-6xl` to `text-3xl md:text-4xl lg:text-5xl`
- Reduce margins: badge `mb-4`, H1 `mb-4`, subtitle `mb-6`, gap to demo `mt-10`
- Remove the "↓ See it in action" label (the demo speaks for itself)
- Remove `max-w-4xl` cap on demo — use `max-w-5xl` (1024px) so it fills more width

**2. Expand demo width (`NotificationDemo.tsx`)**
- Change outer container from `max-w-lg` to `w-full` (inherits parent width)
- Increase mock website height from `h-72 sm:h-80` to `h-80 sm:h-96` for more breathing room
- Increase notification toast width from `sm:w-72` to `sm:w-80`

**3. Add more notification types (7 total)**
- Keep existing 4: purchase, signup, visitor count, review
- Add: **Video testimonial** (Play icon, "Emma from Toronto shared a video testimonial")
- Add: **Announcement bar** (Megaphone icon, "Flash Sale: 30% off ends tonight")
- Add: **Review aggregation** (ThumbsUp icon, "4.9★ average from 2,847 reviews on Google")

### Files to Edit
- `src/pages/Index.tsx` — hero section spacing and demo container width
- `src/components/NotificationDemo.tsx` — wider layout, more notifications

