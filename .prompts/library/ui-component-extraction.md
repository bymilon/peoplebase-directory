---
category: UI Engineering
description: General prompt to refactor a hardcoded UI component into a reusable, prop-driven component.
related: [ui-refinement.md, external-component-import.md]
---

# UI Component Extraction Prompt

**Usage Guidance:** Use this prompt when you have a hardcoded component that needs to be abstracted for reuse across different projects or views.

```text
Refactor the [COMPONENT_NAME] component to make it a fully reusable UI component.

Requirements:
- Remove hardcoded data and replace it with a flexible Props interface.
- Extract any embedded configurations (like navigation items, brand names, or state) and pass them in as props.
- Implement event handlers (e.g., `onItemClick`) to bubble interactions up to the parent component.
- Ensure the component remains stateless where possible, relying on the parent for state management.
- Maintain existing styling and animations.
- Update the parent component to pass the necessary props to demonstrate the abstraction.
```
