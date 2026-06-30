---
id: adr-0003
title: Define Product Boundaries via PRODUCTS.md
type: decision
status: accepted
created: 2026-06-30
owner: Product & Engineering
tags: [product, ai-agents, boundaries]
---

# ADR 0003: Define Product Boundaries via PRODUCTS.md

## Context
As the project utilizes AI coding agents for rapid development, there is a risk of architectural drift. Agents naturally try to be helpful and may introduce unrequested features, full-scale backends, or heavy UI frameworks (e.g., Material UI) if explicit constraints are not provided. 

## Decision
1. Establish a `PRODUCTS.md` file in the project root to serve as the ultimate source of truth for the product vision.
2. Explicitly define "Core Capabilities" to set the functional scope.
3. Explicitly define "Product Boundaries (Non-Goals)" to strictly forbid agents from generating implicit backends, heavy UI libraries, or unrequested telemetry/authentication features.

## Consequences
- **Positive**: AI agents have a clear, parsable boundary that prevents feature creep and bloated generation ("AI slop").
- **Negative**: Any new major feature must be deliberately added to `PRODUCTS.md` before an agent is instructed to build it, adding a slight overhead to the specification process.
