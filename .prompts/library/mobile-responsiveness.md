---
category: UI Engineering
description: Prompt to fix overlapping or overflow issues on mobile screens.
related: [ui-refinement.md]
---

# Mobile Responsiveness Fix Prompt

**Usage Guidance:** Use this prompt when UI elements overlap, get cut off, or fail to shrink correctly on smaller viewports.

```text
Fix the layout rendering issues on mobile screens for the [TARGET_COMPONENT_OR_VIEW].

Requirements:
- Identify and resolve flexbox shrinking or wrapping issues (e.g., adding `shrink-0`, `min-w-0`, or adjusting flex properties).
- Use responsive design breakpoints (e.g., `sm:`, `md:`, `lg:`) to hide non-essential text or elements on small screens while preserving them on larger screens.
- Ensure tap targets remain accessible (minimum 44px) and elements do not overlap.
- Maintain the original aesthetic and layout structure on desktop viewports.
```
