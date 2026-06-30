# PeopleBase Directory

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)]()

> A modular, minimal, data-centric dashboard built with React, Vite, and Tailwind CSS.

![Hero Image Placeholder](https://via.placeholder.com/1200x600?text=PeopleBase+Directory+Dashboard)

**Repository**: [github.com/organization/peoplebase-directory](#) | **Documentation**: [`.wiki/`](.wiki/)

## Definition
PeopleBase Directory is a lightweight, frontend client-side application designed to serve as a clean starting point for dashboard interfaces and data visualizations.

## Shareable Summary
A dashboard boilerplate featuring a reusable Material Design 3 Navigation Rail, Recharts integrations, and an LLM-safe design system implemented with Tailwind CSS tokens.

## What it is
It is a production-ready Single Page Application (SPA) structured around a collapsible sidebar navigation, scalable data tables, and interactive charts. It relies on explicit, semantic Tailwind tokens rather than arbitrary values or hardcoded styles.

## Why it exists
Many dashboard templates suffer from bloat, vendor lock-in, or over-reliance on massive component libraries. PeopleBase Directory exists to provide a clean, accessible layout that is easy for both humans and AI coding agents to parse, modify, and extend without breaking the core design system.

## Core Workflow
1. **Component Extraction**: UI elements are built as pure, stateless React components, receiving all configuration via props.
2. **Design Tokens**: Tailwind CSS variables drive all styling (`--color-brand-primary`, `--color-surface-light`) inside `src/index.css`.
3. **Responsive Triage**: Mobile support is baked in, prioritizing accessible touch targets and proper flexbox constraints.

## Architecture Overview
- **Framework**: React 18+ (Functional components & Hooks)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Utility-first with semantic tokens)
- **Icons**: Lucide React
- **Visualizations**: Recharts

## Workspace Structure
```text
.
├── .wiki/                  # Open Knowledge Format (OKF) project second brain
├── .prompts/               # Library of reusable prompts for AI agents
├── sops/                   # Standard Operating Procedures for common tasks
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI modules (Sidebar, Header, etc.)
│   ├── App.tsx             # Main application layout entry
│   ├── index.css           # Global styles and Tailwind token definitions
│   └── main.tsx            # React DOM mounting
├── DESIGN.md               # Source of truth for the LLM-safe design system
└── package.json            # Dependencies and scripts
```

## Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/organization/peoplebase-directory.git
   cd peoplebase-directory
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Commands Overview
| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server on port 3000. |
| `npm run build` | Compiles the application for production deployment. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint to verify code quality. |

## Examples
- **Adding a new chart**: Create a new component using Recharts and drop it into the `Dashboard.tsx` grid layout.
- **Adding a sidebar item**: Extend the `navItems` array in the parent component and pass it into the `Sidebar` via props.

## Comparison
| Feature | PeopleBase Directory | Typical Dashboard Templates |
|---|---|---|
| **Styling** | Native Tailwind tokens | Custom CSS or massive UI libraries |
| **AI Compatibility** | Built for LLM parsing | Difficult for AI to maintain safely |
| **Knowledge Base** | OKF-compliant `.wiki/` included | Scattered or non-existent docs |
| **Responsiveness** | Mobile-first flex constraints | Desktop-focused |

## Cost Control & Efficiency
Because it relies entirely on client-side rendering and lightweight dependencies, it incurs minimal hosting costs. It is highly cacheable on CDNs.

## Human Approval Gates
When utilized with automated CI/CD or AI agents, it is recommended to require human review for changes affecting `DESIGN.md` or `.wiki/decisions/` to maintain the integrity of the design system.

## Target Users
- Frontend engineers needing a clean, unopinionated dashboard layout.
- AI coding agents executing structured updates.
- Product teams rapid-prototyping internal tools.

## Creator / Sponsor
Maintained by the Engineering Team. 

## Roadmap
- Dark mode toggle integration with local storage persistence.
- Additional Recharts visualization templates (Scatter, Radar).
- Backend integration hooks via a lightweight Express layer (if required).

## Non-Goals
- Full-scale custom backend out-of-the-box (unless explicitly required and configured in `server.ts`).
- Supporting outdated browsers without modern CSS features.
- Introducing a new, heavy component library.

## FAQ
**Is this tied to a specific backend?**
No. It is a client-side SPA. You can connect it to any REST or GraphQL API.

**Why use Tailwind tokens?**
To ensure an LLM-safe design system where changes are made explicitly via variables (`var(--color-brand-primary)`), avoiding arbitrary magic hex codes spread throughout the codebase.

## Contributing
Contributions are welcome. Please read the contribution guidelines in `.wiki/conventions.md` before opening a pull request. 
Ensure you update the OKF knowledge base and SOPs when introducing new patterns.

## License
[MIT License](LICENSE)
