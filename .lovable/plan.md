

## Hero Notification Demo — Make It Unmissable

### Problem
The current `NotificationDemo` is a single small card (`max-w-sm`) cycling through notifications with subtle fade animations. On a wide hero layout it's tiny, lacks visual context, and doesn't convey what the product actually does on a real website.

### Solution
Replace the simple cycling card with a **mock website browser frame** that shows notifications appearing in context — like they would on an actual e-commerce site. This gives visitors an instant "aha moment."

### Design

```text
┌─────────────────────────────────────────┐
│ ● ● ●    yourstore.com                  │  ← Browser chrome
├─────────────────────────────────────────┤
│                                         │
│   [Mock website content]                │
│   Hero image / product grid placeholder │
│                                         │
│  ┌──────────────────────────┐           │
│  │ 🛒 Sarah from NYC        │ ← Toast  │
│  │ just purchased Premium    │  slides  │
│  │ 2 minutes ago             │  in from │
│  └──────────────────────────┘  bottom-  │
│                                 left    │
└─────────────────────────────────────────┘
```

### Changes

**1. Rewrite `NotificationDemo.tsx`**
- Wrap in a **browser mockup frame** (rounded corners, dot traffic lights, URL bar showing "yourstore.com")
- Inside the frame: a subtle mock website background (gradient or simple product grid silhouette)
- Notification toasts slide in from the bottom-left corner of the frame, exactly like they'd appear on a real site
- Make notifications larger and bolder with a subtle glow/shadow
- Add a small "Powered by NotiProof" badge on the notification
- Add a progress bar or dot indicators showing notification rotation
- Keep the 4 notification types but increase cycle to 3.5s

**2. Update hero layout in `Index.tsx`**
- Remove `max-w-sm` constraint — let the demo take more space
- On desktop: demo fills the right column fully
- Add a subtle label above or below: "See it in action" or "Live Preview"

### Technical Details
- All changes contained to `NotificationDemo.tsx` and the hero section of `Index.tsx` (line 132)
- Browser frame built with Tailwind (rounded-xl, bg-gray-100 header bar, colored dots)
- Mock site content is a simple gradient + placeholder shapes (no images needed)
- Notifications animate from bottom-left with slide-up + fade-in via framer-motion
- Add dot indicators below the frame showing which notification is active

