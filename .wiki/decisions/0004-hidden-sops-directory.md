---
id: adr-0004
title: Isolate Operating Procedures in .sops Directory
type: decision
status: accepted
created: 2026-06-30
owner: Engineering
tags: [workflows, conventions, ai-agents]
---

# ADR 0004: Isolate Operating Procedures in .sops Directory

## Context
Standard Operating Procedures (SOPs) are critical for human onboarding and AI agent alignment. However, keeping them in a visible, top-level `sops/` directory clutters the workspace and mixes meta-documentation with core application code.

## Decision
Relocate the `sops/` directory to `.sops/` (a hidden dotfile directory).

## Consequences
- **Positive**: Reduces visual clutter in the project root for human developers while keeping the procedures accessible and parsable for AI coding agents.
- **Negative**: Developers unfamiliar with the project structure might not immediately notice the `.sops/` directory unless they enable hidden files or read the project documentation.
