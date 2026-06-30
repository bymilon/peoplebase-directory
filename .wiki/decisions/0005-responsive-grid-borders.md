---
id: adr-0005
title: Responsive Grid Borders via gap-px
type: decision
status: accepted
created: 2026-06-30
owner: UI Engineering
tags: [css, tailwind, responsiveness, grid]
---

# ADR 0005: Responsive Grid Borders via gap-px

## Context
Adding internal dividers (borders) to a CSS Grid layout traditionally requires complex conditional logic based on the element's index (e.g., adding `border-r` and `border-b` to specific items). When the grid columns shift responsively (e.g., going from 4 columns on desktop to 2 on tablet, and 1 on mobile), the border logic breaks, resulting in missing borders or double borders at the edges.

## Decision
Instead of conditional borders, we adopted a composition-based approach for grid inner borders:
1. Apply a background color to the parent grid container that matches the desired border color (e.g., `bg-gray-200 dark:bg-gray-800`).
2. Add a 1px gap to the parent grid container (`gap-px`).
3. Apply a solid background color to all child elements (e.g., `bg-white dark:bg-slate-900`).

## Consequences
- **Positive**: Borders perfectly scale and wrap across any responsive breakpoint without requiring index-based JavaScript logic or conditional Tailwind classes.
- **Negative**: Grid items cannot have transparent backgrounds, as they rely on a solid background color to mask the container's background.
