---
kind: Document
type: adr
title: "Adopt Material Design 3 Navigation Rail for Desktop Layouts"
status: accepted
date: 2026-06-30
supersedes: ""
superseded_by: ""
---

# Adopt Material Design 3 Navigation Rail for Desktop Layouts

## Status

Accepted

## Context

The application initially featured a standard expansive sidebar for desktop layouts. As we audited the layout for spatial rhythm and content density, we found the standard sidebar occupied too much horizontal space for a dashboard that primarily focuses on data visualization and data tables. We needed a layout pattern that maximizes horizontal screen real estate while still providing clear, accessible navigation.

## Decision

We will adopt the Material Design 3 (M3) Navigation Rail pattern for our desktop layout, shifting away from a wide default sidebar to a collapsed, icon-first rail that expands elegantly upon interaction.

## Consequences

- **Easier:** The primary content area (Dashboard charts, KPI cards, lists) receives significantly more horizontal space, allowing data visualizations to breathe and preventing responsive crowding on smaller laptop screens (e.g., 13-inch MacBooks).
- **Easier:** The visual hierarchy is cleaner, drawing the user's focus immediately to the data rather than the navigation.
- **More difficult:** Requires careful management of CSS transitions and layout widths (`w-[72px]` vs `w-[260px]`) to ensure the expand/collapse animation is buttery smooth and does not cause chaotic layout shifts or text wrapping glitches.

## Alternatives Considered

- **Persistent Wide Sidebar (Default):** Familiar to most SaaS applications, but rejected because it reduces the available canvas width for complex data visualizations.
- **Top Navigation Bar:** Rejected because dashboards often have many modules that fit better in a vertical list, and a top bar consumes vertical space which is typically more constrained than horizontal space on modern 16:9 widescreen displays.
- **Hidden Drawer (Hamburger Menu Only):** Rejected for desktop because it completely hides the navigation context, requiring an extra click for every navigation action and reducing discoverability.
