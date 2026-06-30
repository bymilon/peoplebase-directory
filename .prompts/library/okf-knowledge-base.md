---
category: Documentation & Setup
description: Prompt to bootstrap a standard Open Knowledge Format (OKF) workspace.
related: [project-metadata.md]
---

# OKF Knowledge Base Generation Prompt

**Usage Guidance:** Run this at the start of a new project to establish a durable, Git-native knowledge base that helps AI agents maintain context.

```text
Build a project workspace knowledge base in `.wiki/` following the Open Knowledge Format (OKF).

Objective:
Create a minimal, Git-native knowledge base that serves as the project's second brain for both humans and AI coding agents.

Requirements:
- Follow OKF principles: Markdown-first, YAML frontmatter, one concept per document, stable links.
- Every document must include standard YAML frontmatter (id, title, type, status, created, updated, owner, tags).
- Keep documents concise, factual, and durable. Link related documents instead of duplicating content.
- Do not store chat transcripts, prompts, scratch notes, or implementation logs.

Document types: overview, architecture, convention, decision, workflow, runbook, glossary, reference.

Minimum content to generate:
- `README.md`: purpose, contribution rules, and navigation.
- `index.md`: entry point linking all knowledge.
- `project.md`: vision, scope, goals, constraints, and non-goals.
- `architecture.md`: system overview, boundaries, and major components.
- `conventions.md`: coding, UI, Git, documentation, and review conventions.
- `glossary.md`: shared terminology.
- `decisions/`: directory with README.
- `workflows/`: directory with README.
- `runbooks/`: directory with README.
- `references/`: directory with README.
- `templates/`: directory with README and a basic document template.
```
