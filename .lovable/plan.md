

## Raise Notifications + Hover-to-Pause

### Problem
Notifications sit at `bottom-4` inside the mock website frame, making them feel buried under the product grid. No hover interaction exists.

### Changes — `src/components/NotificationDemo.tsx` only

**1. Raise notification position**
- Change `bottom-4` to `bottom-8` so the toast floats higher above the frame's bottom edge
- Add a stronger shadow (`shadow-2xl`) and a subtle ring/glow to make it pop visually

**2. Hover to pause + scale up**
- Add `isHovered` state, toggled by `onMouseEnter`/`onMouseLeave` on the notification container
- When hovered: pause the cycle interval (clear it, restart on leave) and pause the progress bar
- Add `whileHover={{ scale: 1.03 }}` on the motion.div for a subtle pop-up effect
- Show `cursor-pointer` on hover

**3. Implementation detail**
- Refactor the interval `useEffect` to depend on `isHovered` — when `true`, don't set the interval
- Refactor the progress `useEffect` to freeze elapsed time when hovered and resume from where it left off

