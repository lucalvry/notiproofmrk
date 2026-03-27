

## Hero Cleanup + Notification Repositioning

### Changes

**1. Remove badge pill (`Index.tsx`, line 108-110)**
Delete the "Conversion Optimization Platform" badge entirely.

**2. Shorten subtitle (`Index.tsx`, line 116-118)**
Replace with a tighter two-line version:
`"Boost conversions with real-time purchase alerts, testimonials, and engagement notifications. Set up in under 5 minutes."`
Also reduce `max-w-xl` to keep it compact.

**3. Move notification to top-left (`NotificationDemo.tsx`, line 164-166)**
Change positioning from `bottom-10` to `top-4` so the notification appears near the top of the mock website, immediately visible. Move progress bar and "Powered by" below the toast accordingly.

### Files
- `src/pages/Index.tsx` — remove badge, shorten subtitle
- `src/components/NotificationDemo.tsx` — reposition notification from bottom to top

