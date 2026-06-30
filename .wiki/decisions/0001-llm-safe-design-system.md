---
id: adr-0001
title: Adopt LLM-Safe Design System with Semantic Tailwind Tokens
type: decision
status: accepted
created: 2026-06-30
owner: Engineering
tags: [design-system, tailwind, styling]
---

# ADR 0001: Adopt LLM-Safe Design System

## Context
AI coding agents often struggle with design consistency because they lack a single source of truth for visual guidelines. When asked to create or modify components, they default to "magic" hex codes, arbitrary padding, and generic UI patterns that diverge from the brand identity.

## Decision
1. Establish `DESIGN.md` in the project root as the absolute source of truth for all visual identity rules.
2. Implement native Tailwind CSS custom properties (`@theme`) in `src/index.css` that directly map to the semantics defined in `DESIGN.md` (e.g., `--color-brand-primary`).
3. Forbid arbitrary values (e.g., `bg-[#123456]`) and enforce usage of defined semantic tokens.

## Consequences
- **Positive**: AI agents and new developers have an explicit, parsable specification to follow. UI consistency is mathematically enforced.
- **Negative**: Slight overhead when introducing entirely new colors, as they must be formally added to `DESIGN.md` and `index.css` first.
