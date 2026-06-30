---
kind: Document
type: adr
title: "Adopt Tailwind Semantic Tokens for Theming"
status: accepted
date: 2026-06-30
supersedes: ""
superseded_by: ""
---

# Adopt Tailwind Semantic Tokens for Theming

## Status

Accepted

## Context

During a technical audit (`impeccable audit`), we discovered that the codebase heavily relied on hard-coded hex colors (e.g., `bg-[#C2E7FF]`, `text-[#004A77]`, `border-[#0B0F19]`) mixed arbitrarily with Tailwind utility classes. This created "token indiscipline," making systematic theme changes (like Dark Mode) brittle, difficult to maintain, and prone to accessibility (contrast) failures in unexpected color modes.

## Decision

We will strictly adopt standard Tailwind semantic color tokens (e.g., `sky`, `slate`, `gray`, `purple`) across the entire application. Hard-coded arbitrary hex values inside square brackets (e.g., `[#123456]`) are banned for UI surfaces, borders, and typography.

## Consequences

- **Easier:** Implementing and maintaining a cohesive Dark Mode is drastically simpler, as we can rely on standard Tailwind class pairs (e.g., `bg-slate-50 dark:bg-slate-950`).
- **Easier:** The application's visual identity feels more consistent, predictable, and professional by relying on mathematical scales rather than arbitrary manual selections.
- **More difficult:** If a specific brand color is required that falls outside Tailwind's default palette, it must be officially configured in the CSS theme block rather than injected inline.

## Alternatives Considered

- **CSS Variables (Custom Properties):** Defining `--color-brand-primary` manually. While powerful, Tailwind's built-in scale is robust enough for our needs, and using Tailwind's semantic tokens (like `sky-500`) provides faster development velocity without manually managing a massive CSS variables file.
- **Continuing with Arbitrary Values:** Rejected because it leads to "AI slop", poor maintainability, and broken dark mode experiences.
