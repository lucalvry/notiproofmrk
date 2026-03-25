

## Hero Section — Single Column Centered Layout

### Rationale
A centered single-column hero creates a stronger visual flow: badge → headline → subtext → CTAs → demo. The visitor reads top-to-bottom without splitting attention. The browser mockup becomes a full-width showpiece rather than being cramped into half the grid.

### Changes

**`src/pages/Index.tsx` (hero section, lines 105-136)**
- Replace `grid lg:grid-cols-2` with a single centered column layout
- Center-align all text (badge, H1, subtitle, CTA buttons, disclaimer)
- Constrain headline/subtitle width with `max-w-3xl mx-auto`
- Center the CTA button group
- Move `NotificationDemo` below the text block, full width (capped at `max-w-4xl`)
- Add "See it in action" micro-label above the demo

**`src/components/NotificationDemo.tsx`**
- No structural changes needed — the browser mockup already scales to its container width

### Result Layout
```text
         [Badge: Conversion Optimization Platform]
    Increase Conversions by 10–35% With Real-Time
                  Social Proof
  NotiProof helps businesses boost conversions by...

     [Start Free 14-Day Trial]  [View Pricing]
       No credit card required · Setup in 60s

              ↓ See it in action

  ┌─────────────────────────────────────────────┐
  │ ● ● ●    yourstore.com                      │
  ├─────────────────────────────────────────────┤
  │         [Mock website + notifications]       │
  └─────────────────────────────────────────────┘
```

