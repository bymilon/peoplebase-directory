---
category: Documentation & Setup
description: Prompt to update project metadata and entry HTML files.
related: [okf-knowledge-base.md]
---

# Project Metadata Configuration Prompt

**Usage Guidance:** Use this prompt when the project's core identity or scope has been finalized to ensure metadata reflects the current state.

```text
Update the project's core configuration files to reflect its final identity.

Requirements:
- Refactor `index.html` to update the document `<title>` to match the project name.
- Refactor `metadata.json` (or equivalent manifest) to update the `name` and `description` fields.
- Ensure the description accurately summarizes the core feature set and architectural patterns used in the project.
- Do not modify existing capabilities or permissions arrays unless explicitly instructed.
```
