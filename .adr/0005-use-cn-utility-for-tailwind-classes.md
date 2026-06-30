---
kind: Document
type: adr
title: "Use cn Utility for Tailwind Classes"
status: accepted
date: 2026-06-30
supersedes: ""
superseded_by: ""
---

# Use cn Utility for Tailwind Classes

## Status

Accepted

## Context

When building complex React components with dynamic states (e.g., active vs. inactive, expanded vs. collapsed, dark vs. light mode), conditionally concatenating Tailwind CSS class strings using standard template literals (`\${condition ? 'bg-blue-500' : 'bg-transparent'}`) becomes messy, hard to read, and error-prone. Furthermore, conflicting Tailwind classes (e.g., passing `px-4` when `px-2` is already defined) can lead to unpredictable styling outcomes.

## Decision

We will standardize on using a `cn` utility function—which combines `clsx` and `tailwind-merge`—for all dynamic class name composition in React components.

## Consequences

- **Easier:** Component code is significantly cleaner and easier to read.
- **Easier:** `tailwind-merge` automatically resolves conflicting Tailwind classes, ensuring that the last defined class in the argument list wins (e.g., `cn('px-2', 'px-4')` resolves correctly to `px-4`).
- **Easier:** `clsx` allows for elegant conditional syntax (e.g., `cn('base-class', { 'active-class': isActive })`).
- **More difficult:** Requires importing the utility function into any component that needs dynamic styling, slightly increasing boilerplate compared to native template literals.

## Alternatives Considered

- **Native Template Literals:** Rejected because it becomes unreadable with multiple conditions and does not resolve Tailwind class conflicts.
- **classnames:** A popular library similar to `clsx`, but `clsx` is generally faster and smaller. Neither resolves Tailwind conflicts natively without `tailwind-merge`.
