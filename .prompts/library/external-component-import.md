---
category: UI Engineering
description: Prompt to import a pre-built component from an external source (e.g., GitHub).
related: [ui-component-extraction.md]
---

# External Component Import Prompt

**Usage Guidance:** Use this prompt to instruct an AI agent to fetch and integrate a pre-existing component from an external repository into the current project.

```text
Please implement the [FEATURE_NAME] using my pre-built, reusable component.

Here are the source files:
- Component: [INSERT_RAW_URL_1]
- Sub-component: [INSERT_RAW_URL_2]

Implementation Guidelines:
1. Download and save the code into the appropriate `src/components/` directories. Do not modify their internal structure or logic.
2. Integrate the component into the main layout or target view.
3. Manage any required state (e.g., open/close states, active items) in the parent component.
4. Pass the appropriate props to the component based on its interface.
5. Ensure all necessary dependencies (e.g., icon libraries) are installed and used correctly.
```
