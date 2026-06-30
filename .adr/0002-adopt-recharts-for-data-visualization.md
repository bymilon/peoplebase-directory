---
kind: Document
type: adr
title: "Adopt Recharts for Data Visualization"
status: accepted
date: 2026-06-30
supersedes: ""
superseded_by: ""
---

# Adopt Recharts for Data Visualization

## Status

Accepted

## Context

The application requires data visualization capabilities to display metrics such as "Outreach conversion" and "Message sent". We need a library that integrates well with React, supports responsive layouts, and allows custom styling to match our design system, including both light and dark modes.

## Decision

We will adopt `recharts` for all data visualizations in the application.

## Consequences

- **Easier:** Creating complex, responsive charts (Line, Pie, Bar, Area) becomes straightforward using composable React components.
- **Easier:** Customizing chart tooltips, colors, and axes to adhere to the application's Tailwind-based theming (including dark mode) is natively supported via custom SVG props.
- **More difficult:** Recharts has a learning curve for deep customizations, particularly when dealing with complex animations or extremely custom legend/tooltip renderers.

## Alternatives Considered

- **Chart.js (react-chartjs-2):** Excellent library, but uses Canvas for rendering, which makes it harder to seamlessly integrate with Tailwind CSS and CSS variables for dark/light mode switching compared to Recharts' SVG-based approach.
- **D3.js:** Provides maximum flexibility but has a steep learning curve and requires manually managing the DOM, which conflicts with React's declarative approach.
- **Nivo:** A strong alternative built on D3, but Recharts provides a slightly simpler API for our immediate needs (Pie charts, Area charts) and has a more extensive community footprint for basic dashboards.
