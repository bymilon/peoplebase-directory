---
id: coding-conventions
title: Coding & Development Conventions
type: convention
status: active
created: 2026-06-30
updated: 2026-06-30
owner: Engineering
tags: [conventions, coding, ui]
---

# Conventions

## Coding Conventions
- **TypeScript**: Use TypeScript for all components and utilities. Define interfaces for component props.
- **Functional Components**: Use React functional components and hooks.
- **Tailwind CSS Utility**: Use the `cn` utility (combining `clsx` and `tailwind-merge`) for dynamic class composition.

## UI & Styling Conventions
- **Tailwind Semantic Tokens**: Strictly use semantic color tokens (e.g., `sky-500`, `slate-900`). Hard-coded arbitrary hex values (`bg-[#123456]`) are banned for UI surfaces and typography.
- **Navigation**: Desktop layouts use the M3 Navigation Rail pattern.
- **Dark Mode**: Support light and dark modes natively via Tailwind's `dark:` variant and state toggle.

## Documentation Conventions
- **OKF Format**: All knowledge base documents must follow the Open Knowledge Format with YAML frontmatter.
- **ADRs**: Log significant technical choices in `.wiki/decisions/` or `.adr/`.
