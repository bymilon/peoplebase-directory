---
category: UI Engineering
description: Prompt to safely refine UI aesthetics within an existing design system.
related: [ui-component-extraction.md, mobile-responsiveness.md]
---

# UI Aesthetic Refinement Prompt

**Usage Guidance:** Use this prompt when you need to polish a specific UI element's appearance (e.g., stroke, color, sizing) without breaking the established design system or semantic token usage.

```text
Refine the aesthetic of the [TARGET_UI_ELEMENT], maintaining the current design system.

Requirements:
- Adjust properties like stroke hardness, background color, or border radius to match the provided reference or description.
- Strictly adhere to the project's existing semantic tokens (e.g., Tailwind classes). Do not introduce arbitrary hex codes.
- Ensure the changes properly support both light and dark mode variants if applicable.
- Ensure visual consistency with surrounding components.
```
