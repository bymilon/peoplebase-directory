---
id: architecture-overview
title: Architecture Overview
type: architecture
status: active
created: 2026-06-30
updated: 2026-06-30
owner: Engineering
tags: [architecture, system, boundaries]
---

# Architecture Overview

## System Boundaries
The current application is a client-side Single Page Application (SPA).

## Major Components
- **React (v18+)**: Core UI framework.
- **Vite**: Build tool and development server.
- **Tailwind CSS**: Utility-first styling framework.
- **Lucide React**: Icon library.
- **Recharts**: Data visualization library.

## Layout Structure
- **Sidebar**: Material Design 3 Navigation Rail pattern, expandable for larger screens, acts as the primary navigation hub.
- **Header**: Top-level context and mobile menu trigger.
- **Dashboard**: Main content area housing KPI cards, charts, and data tables.
