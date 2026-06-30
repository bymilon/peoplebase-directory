# PeopleBase Directory

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=flat&logo=buy-me-a-coffee)](https://buymeacoffee.com/milonspace)
[![X Follow](https://img.shields.io/badge/Follow-%40milonspace-black.svg?style=flat&logo=x)](https://x.com/milonspace)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-milonai-0A66C2?logo=linkedin)](https://www.linkedin.com/in/milonai)
[![Instagram](https://img.shields.io/badge/Instagram-%40withmilon-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/withmilon)
[![Facebook](https://img.shields.io/badge/Facebook-%40withmilon-1877F2?logo=facebook&logoColor=white)](https://www.facebook.com/withmilon)
[![Threads](https://img.shields.io/badge/Threads-%40withmilon-000000?logo=threads)](https://www.threads.net/@withmilon)

> A compact React dashboard workspace for people, payroll, HR, reporting, and outreach analytics interfaces.

PeopleBase Directory is a frontend-first dashboard scaffold built with React, Vite, TypeScript, Tailwind CSS, Lucide React, and Recharts. It is designed to be easy for engineers and AI coding agents to inspect, modify, and extend without hiding the product shape behind a large component framework.

## Definition

PeopleBase Directory is a client-side single-page application for dashboard and directory-style product experiences. The current workspace ships a PeopleBase-branded app shell with sidebar navigation, a sticky header, KPI cards, communication funnel charts, outreach conversion metrics, sequence activity, and message volume visualizations.

## Shareable Summary

A PeopleBase dashboard starter with a responsive navigation rail, TypeScript React components, Tailwind token styling, Recharts data visualizations, and an OKF-style `.wiki/` knowledge base for agent-assisted maintenance.

## What Is PeopleBase Directory?

PeopleBase Directory is not a backend HRIS, payroll processor, CRM, or employee database. It is the UI foundation for those kinds of internal tools.

The app currently focuses on the dashboard layer:

- A collapsible sidebar with Home, Employees, Payroll, Reports, HR, and Workflow sections.
- A main reports dashboard with KPI cards and analytics panels.
- Reusable chart components built around Recharts.
- A theme provider for light and dark UI modes.
- Project knowledge files under `.wiki/` and design guidance in `DESIGN.md`.

## Why PeopleBase Directory?

Many dashboard templates start with heavy UI kits, generic sample sections, or undocumented design choices. PeopleBase Directory keeps the surface area small so the workspace can be adapted quickly while staying readable.

The project is useful when you need:

- A React/Vite dashboard shell that is already organized into practical components.
- A UI that can be rebranded or connected to real people, payroll, HR, or reporting data.
- A design system that is explicit enough for AI-assisted edits.
- A repository structure that keeps product notes close to the code.

## Architecture

| Area | Current Choice |
| --- | --- |
| App model | Client-side React SPA |
| Framework | React 19 with TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 4 with project tokens |
| Icons | Lucide React |
| Charts | Recharts |
| Motion | Motion |
| Type check | `tsc --noEmit` via `npm run lint` |

## Workspace Structure

```text
.
├── .prompts/               # Reusable prompts for agent workflows
├── .wiki/                  # Project knowledge base and conventions
├── public/                 # Static assets
├── src/
│   ├── components/         # Dashboard, sidebar, header, charts, and UI pieces
│   ├── lib/                # Shared utilities
│   ├── App.tsx             # Main application shell and navigation state
│   ├── index.css           # Global styles and Tailwind tokens
│   └── main.tsx            # React DOM entrypoint
├── DESIGN.md               # Design-system guidance
├── package.json            # Scripts and dependencies
└── wrangler.json           # Cloudflare compatibility-date pin
```

## Quick Start

Clone the repository:

```bash
git clone <repository-url>
cd peoplebase-directory
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite serves the app on port `3000` by default.

## Commands Overview

| Command | Description |
| --- | --- |
| `npm run dev` | Starts Vite on `0.0.0.0:3000`. |
| `npm run build` | Builds the production frontend into `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs TypeScript checking with `tsc --noEmit`. |
| `npm run clean` | Removes generated `dist` and `server.js` artifacts. |

## Examples

Add a chart:

1. Create a component in `src/components/`.
2. Use Recharts for the visualization layer.
3. Mount it in `src/components/Dashboard.tsx`.
4. Keep spacing, color, and typography aligned with `src/index.css` and `DESIGN.md`.

Add a navigation item:

1. Add a Lucide icon import in `src/App.tsx`.
2. Extend the `navItems` array.
3. Handle the selected state through `activeItemName`.

Connect live data:

1. Replace static component data with API-backed state.
2. Keep API and transformation logic outside presentational chart components.
3. Document new data contracts in `.wiki/` when they become stable.

## PeopleBase Directory vs Typical Dashboard Templates

| Concern | PeopleBase Directory | Typical Dashboard Templates |
| --- | --- | --- |
| Product shape | People, payroll, HR, reporting, and outreach dashboard shell | Generic admin screens |
| Styling | Tailwind tokens and explicit local CSS | Large UI kit defaults or scattered custom CSS |
| Charts | Focused Recharts components | Sample cards or vendor-specific widgets |
| Agent maintenance | `.wiki/`, `.prompts/`, and `DESIGN.md` keep context near code | Context often lives outside the repo |
| Backend assumptions | None by default | Often tied to a demo API or platform |

## Cost Control

The app is currently a static client-side frontend, so it can be hosted on low-cost static hosting or CDN-backed platforms. The repository does not require a long-running backend service unless one is added for real product data.

## Human Approval Gates

Use human review for changes that affect:

- `DESIGN.md`
- `.wiki/` conventions or decisions
- Global tokens in `src/index.css`
- Navigation structure in `src/App.tsx`
- Shared chart/data contracts

Those files define how future changes should be made, so mistakes there can spread through the workspace.

## Who PeopleBase Directory Is For

- Frontend engineers who want a small React dashboard base.
- Product teams prototyping internal people operations tools.
- AI coding agents that need a readable component and knowledge structure.
- Maintainers who prefer explicit local patterns over a large third-party dashboard framework.

## Roadmap

- Replace remaining mock/static chart data with documented data contracts.
- Add real route handling for the sidebar sections.
- Add a license file before public open-source release.
- Add `CONTRIBUTING.md` and issue templates.
- Add CI once local verification commands are stable.
- Expand the dashboard with reusable employee, payroll, HR, and workflow views.

## FAQ

### Is this a complete HR product?

No. It is a frontend dashboard workspace. It can become part of an HR, payroll, or people operations product, but it does not ship production backend workflows by itself.

### Is it tied to a backend?

No. The current app is a client-side React SPA. You can connect it to REST, GraphQL, serverless functions, or another backend later.

### Why keep `.wiki/` and `DESIGN.md`?

They make design and maintenance decisions explicit. That helps humans review changes and helps AI agents avoid inventing new patterns when the repo already has guidance.

### Can I deploy it to Cloudflare?

The repository includes `wrangler.json` with a pinned compatibility date for Cloudflare tooling. The frontend still needs the appropriate build/deploy workflow for your target Cloudflare setup.

### Is the project open-source ready?

Not fully. The README is now structured for public use, but the repository still needs a committed license file, contribution guide, and release verification before it should be presented as a mature OSS project.

## Contributing

Contributions should make the workspace clearer, smaller, or easier to adapt.

Before opening a pull request, review `DESIGN.md` and the relevant `.wiki/` notes. Update the knowledge base when a change introduces a durable pattern, data contract, or maintenance convention.

## License

No license file is currently committed. Add one before publishing or accepting external contributions.
