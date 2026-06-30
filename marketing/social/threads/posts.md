# Threads Posts

## Announcement
Dashboard boilerplates usually come with too much baggage. We built PeopleBase Directory to be the exact opposite. It's a lightweight React and Tailwind SPA designed around an "LLM-safe" design system. No massive component libraries, just clean code and explicit tokens. Perfect for rapid prototyping.

Repository is now public: [LINK]

## Feature
If you've ever had an AI agent generate a completely random shade of blue for a button, you'll appreciate this. PeopleBase Directory uses a strict `DESIGN.md` spec tied directly to Tailwind variables. This creates guardrails that keep AI-generated UI consistent with your brand. 

See the code: [LINK]

## Educational
How do you onboard an AI coding agent to a new codebase? The same way you onboard a human: with good documentation. We use the Open Knowledge Format (OKF) in our `.wiki/` directory to store architectural decisions, standard operating procedures, and reusable prompts. 

Read our OKF setup: [LINK]

## Behind the Scenes
Refactoring the PeopleBase sidebar taught us a lot about responsive design in a flexbox world. We moved away from hardcoded widths and embraced `shrink-0` and `min-w-0` to prevent mobile overflows. The result is a fluid navigation rail that degrades gracefully on small screens.

View the source: [LINK]

## Progress Update
We've been polishing the data visualization components in PeopleBase today. By abstracting Recharts configurations and mapping them to our semantic Tailwind tokens, we're ensuring that every new chart automatically matches the dashboard's dark/light mode themes. 

Check out the charts: [LINK]

## Release
It's launch day for PeopleBase Directory. We set out to build a clean, unopinionated React dashboard that plays nicely with AI coding workflows, and we're thrilled to open-source the result. It includes a reusable prompt library, SOPs, and an LLM-safe design system.

Start building: [LINK]
