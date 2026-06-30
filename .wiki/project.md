---
id: project-overview
title: Project Overview
type: overview
status: active
created: 2026-06-30
updated: 2026-06-30
owner: Engineering
tags: [vision, scope, goals]
---

# Project Overview

## Vision
To provide a fast, responsive, and visually polished dashboard application with a reusable, accessible UI component library, specifically featuring an M3 Navigation Rail.

## Scope
- Frontend client-side application (React, Vite, Tailwind CSS).
- Reusable UI components (Sidebar, Dashboard layout, Data visualisations).

## Goals
- Maintain a clean, minimal design aesthetic using Tailwind Semantic Tokens.
- Ensure performant and responsive layouts across all device sizes.
- Provide clear data visualizations using Recharts.
- Ensure the codebase is friendly to AI coding agents through structured knowledge and conventions.

## Constraints
- Must run in the AI Studio container environment (Port 3000).
- Must use Tailwind CSS for all styling.
- Must use standard React functional components and hooks.

## Non-Goals
- Full-scale custom backend (unless explicitly required and configured in `server.ts`).
- Supporting outdated browsers without modern CSS features.
