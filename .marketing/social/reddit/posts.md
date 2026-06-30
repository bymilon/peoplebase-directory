# Reddit Posts

## Announcement
**Title:** I got tired of bloated dashboard templates, so I open-sourced a minimal React/Tailwind boilerplate designed for AI coding agents.

**Body:**
Hey r/reactjs,

Every time I start a new dashboard project, I end up fighting with massive UI libraries or ripping out hundreds of lines of unused code from "premium" templates. I wanted a clean, unopinionated starting point.

So, I built and open-sourced **PeopleBase Directory**.

It's a lightweight Single Page Application built with React, Vite, and Tailwind CSS. It provides a solid foundation—a responsive navigation rail, standard data tables, and Recharts integrations—without dictating your backend architecture.

But the biggest difference is how it handles styling. I built an **"LLM-safe" design system**.

If you use AI coding agents (like Cursor, Copilot, or standard LLMs), you know they love to invent random hex codes and arbitrary padding values. To fix this, PeopleBase uses a strict `DESIGN.md` file as the source of truth, mapped directly to native Tailwind CSS custom properties. 

By banning arbitrary values and forcing the use of semantic tokens (e.g., `var(--color-brand-primary)`), both human developers and AI agents are constrained to the defined design system.

The repository also includes:
*   A `.wiki/` directory following the Open Knowledge Format (OKF) for Architecture Decision Records (ADRs).
*   A `.prompts/` library containing reusable prompts for common UI tasks.
*   A `sops/` directory with Standard Operating Procedures for onboarding.

It's designed to be a clean slate that you can actually understand and scale. 

I'd love for you to check it out, fork it, and let me know your thoughts on the LLM-safe design approach.

Link: [LINK]

## Feature
**Title:** How we built an "LLM-safe" design system using Tailwind CSS variables.

**Body:**
Hey r/webdev,

We've all been there: you ask an AI coding agent to generate a new component, and it spits back a button with `bg-[#4A90E2]` and `p-[13px]`. Suddenly, your codebase is littered with magic numbers and inconsistent styling.

For our open-source project, PeopleBase Directory, we decided to tackle this problem at the architectural level. We built an "LLM-safe" design system.

Here is how we did it:

1.  **The Source of Truth (`DESIGN.md`)**: We created a single markdown file at the root of the repository that explicitly defines our brand colors, typography, spacing, and interaction states. It uses semantic names, not just hex codes.
2.  **Tailwind Semantic Tokens**: In our `src/index.css`, we use Tailwind v4's `@theme` directive to map these semantic concepts to CSS custom properties.
    ```css
    @theme {
      --color-brand-primary: var(--color-sky-500);
      --color-surface-light: var(--color-white);
    }
    ```
3.  **Banning Arbitrary Values**: We enforce a strict rule (documented in our SOPs and wiki) that neither humans nor AI agents are allowed to use arbitrary Tailwind brackets (e.g., `bg-[#123456]`). They must use the semantic classes (e.g., `bg-brand-primary`).

**The Result:**
When an AI agent reads the repository, it parses `DESIGN.md` and `index.css`. Because the constraints are explicit and centralized, the AI consistently generates UI components that perfectly match our design system. 

It sounds simple, but establishing these explicit guardrails completely changed how effectively we can use AI tools in our workflow.

Have you tried any similar approaches to keep AI code generation consistent?

Link to the repo: [LINK]

## Educational
**Title:** Stop treating AI coding agents like magic. Treat them like junior developers who need good documentation.

**Body:**
Hey r/programming,

A lot of the frustration surrounding AI coding tools stems from expecting them to understand the implicit context of a project. They don't. If you drop an AI into a messy, undocumented codebase, it will generate messy, inconsistent code.

In building PeopleBase Directory (an open-source React dashboard), we realized we needed to onboard our AI agents the same way we would onboard a new junior developer.

We adopted the **Open Knowledge Format (OKF)**.

We created a `.wiki/` directory that serves as the project's Git-native second brain. Here is what it contains:

*   `architecture.md`: High-level system boundaries and constraints.
*   `conventions.md`: Strict rules for coding, UI, and Git commits.
*   `decisions/`: A directory of Architecture Decision Records (ADRs) explaining *why* we chose certain patterns.
*   `sops/`: Standard Operating Procedures for repeatable tasks (like how to extract a reusable component).
*   `.prompts/`: A library of validated, context-rich prompts.

**Why this matters:**
When we start a new task, we point the AI agent to the relevant wiki documents first. By providing explicit constraints, definitions, and operating procedures, the AI spends less time guessing and more time executing exactly what we need.

Good documentation has always been important, but in the era of AI-assisted development, it's the defining factor between a maintainable codebase and total chaos.

Check out our OKF setup here: [LINK]

## Release
**Title:** Release: PeopleBase Directory v1.0 - A minimal React dashboard boilerplate optimized for AI workflows.

**Body:**
Hey r/reactjs,

Today we are releasing v1.0 of **PeopleBase Directory**, an open-source dashboard boilerplate designed from the ground up for modern, AI-assisted development workflows.

**What it is:**
A lightweight Single Page Application built with React 18, Vite, and Tailwind CSS. It includes a responsive navigation rail, standard data table layouts, and Recharts integrations.

**Why we built it:**
We were tired of heavy dashboard templates that lock you into massive component libraries and are impossible for AI coding agents to modify safely without breaking things.

**Key Features:**

1.  **LLM-Safe Design System**: Styling is strictly controlled via semantic Tailwind variables defined in a centralized `DESIGN.md` spec. This prevents AI agents from injecting magic hex codes and arbitrary spacing.
2.  **Git-Native Knowledge Base**: The repository includes a `.wiki/` directory following the Open Knowledge Format (OKF), containing ADRs, coding conventions, and a glossary.
3.  **Operational Tooling**: We've included a `.prompts/` library and a `sops/` directory containing Standard Operating Procedures for common development tasks.
4.  **No Bloat**: Pure functional React components. No vendor lock-in. No generic AI slop.

It is designed to be the cleanest possible starting point for your next internal tool or dashboard project.

We'd love for the community to try it out, fork it, and provide feedback on the architecture!

GitHub Repository: [LINK]
