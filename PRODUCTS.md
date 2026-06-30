# Product Specification (PRODUCTS.md)

This document serves as the product specification for **PeopleBase Directory**, structured to provide immediate, actionable context for AI coding agents and human developers. It defines what we are building, for whom, and what our boundaries are.

## 1. Product Vision
PeopleBase Directory is a minimal, data-centric dashboard boilerplate. It provides a foundational, highly scalable, and LLM-safe frontend architecture optimized for rapid prototyping, internal tools, and AI-assisted development.

## 2. Target Audience
- **Frontend Engineers**: Seeking a clean, unopinionated starting point without vendor lock-in.
- **Product Teams**: Needing to rapidly prototype internal tools or B2B dashboards.
- **AI Coding Agents**: Requiring explicit constraints, structured documentation, and a predictable design system to generate consistent, production-ready code.

## 3. Core Capabilities
- **Navigation Structure**: Material Design 3 (M3) inspired collapsible navigation rail that degrades gracefully on mobile.
- **Data Visualization**: Integrated Recharts components explicitly configured to consume semantic Tailwind tokens for seamless light/dark mode support.
- **Responsive Layouts**: Mobile-first flexbox constraints ensuring accessible touch targets, no horizontal overflow, and proper truncation on smaller viewports.
- **LLM-Safe Styling**: Centralized design system (`DESIGN.md`) mapping to Tailwind CSS variables (`src/index.css`), preventing arbitrary hex injections or magic numbers.
- **Knowledge Base**: Git-native OKF (Open Knowledge Format) documentation in the `.wiki/` directory for robust context retention.

## 4. Product Boundaries (Non-Goals)
To prevent feature creep, bloat, and architectural drift, AI agents **MUST** respect the following non-goals:
- **No Implicit Backends**: Do not generate full-scale backend architectures, ORMs, or databases unless explicitly requested by the user. The project defaults to a client-side SPA.
- **No Heavy UI Libraries**: Do not introduce monolithic UI frameworks (e.g., Material UI, Ant Design, Bootstrap). Rely purely on native Tailwind CSS.
- **No AI Slop**: Avoid decorative gradients, arbitrary styling, unnecessary animations, or "tech-larping" UI elements.
- **No Unrequested Features**: Do not add telemetry, user tracking, authentication flows, or premium features unless strictly directed.

## 5. Agent Operating Instructions
When proposing, designing, or implementing new features, AI coding agents should follow this sequence:
1. **Check Alignment**: Verify the requested feature aligns with the *Core Capabilities* and does not violate the *Product Boundaries*.
2. **Consult the Design System**: Read `DESIGN.md` before generating any new UI components or layouts.
3. **Use Established SOPs**: Refer to the `sops/` directory for validated patterns regarding UI component extraction and mobile responsiveness.
4. **Update Context**: If a major architectural or product decision is made, document it as an ADR in `.wiki/decisions/`.

## 6. Definition of Quality
A feature is considered complete when:
- It uses zero arbitrary magic strings or hex codes.
- It is fully responsive from 320px up to 1440px.
- It functions seamlessly in both light and dark modes via semantic tokens.
- The corresponding documentation, if altered, has been synchronized.
