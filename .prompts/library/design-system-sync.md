---
category: UI Engineering
description: Prompt to safely implement a new visual token across the design system.
related: [ui-refinement.md]
---

# Design System Sync Prompt

**Usage Guidance:** Use this prompt when you need to introduce a new color, radius, or spacing rule into the project's established design system.

```text
Update the project's design system to include a new [TOKEN_TYPE] for [PURPOSE].

Requirements:
1. Update `DESIGN.md` to document the new semantic meaning and value.
2. Update `src/index.css` within the `@theme` directive to map this semantic concept to a native Tailwind variable (e.g., `--color-[name]: var(--color-[base]);`).
3. Search the project for existing hardcoded values related to [PURPOSE] and refactor them to use the newly created semantic class.
4. Ensure full support for dark and light modes if applicable.
5. Do not introduce arbitrary hex codes.
```
