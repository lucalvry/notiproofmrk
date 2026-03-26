

## Fix: Notification Getting Clipped in Browser Frame

### Problem
The mock website container has `overflow-hidden` on a fixed height (`h-80 sm:h-96`), and the notification sits at `bottom-8` — but the product grid cards with `aspect-square` push content tall enough that the notification toast gets clipped at the bottom edge.

### Solution — `src/components/NotificationDemo.tsx`

1. **Remove `overflow-hidden`** from the mock website container (line 134) and replace with `overflow-visible` — let the notification "float" naturally without being clipped
2. **Wrap only the mock content** (nav, hero text, product grid) in a separate `overflow-hidden` div so the page content stays contained but the notification can escape
3. **Alternatively (simpler)**: Reduce the product grid card sizes so everything fits within the frame height, and raise the notification to `bottom-10` or `bottom-12`

**Recommended approach**: Keep `overflow-hidden` on the outer frame (needed for the rounded corners), but increase the frame height from `h-80 sm:h-96` to `h-96 sm:h-[28rem]` so there's room for the notification + progress bar + "Powered by" text to render fully visible. Also raise notification from `bottom-8` to `bottom-10`.

### Changes
- Line 134: Change `h-80 sm:h-96` → `h-96 sm:h-[28rem]`
- Line 166: Change `bottom-8` → `bottom-10`

