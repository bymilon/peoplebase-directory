# Facebook Posts

## Announcement
We're excited to open-source PeopleBase Directory, a new kind of dashboard boilerplate built for modern development workflows.

Most dashboard templates try to do too much, locking you into heavy UI libraries and complex build steps. We took a different approach. PeopleBase is a minimal, data-centric Single Page Application built with React, Vite, and Tailwind CSS. 

What makes it unique is its "LLM-safe" design system. We use a central `DESIGN.md` specification mapped to native Tailwind variables, ensuring that both human developers and AI coding agents can contribute without breaking visual consistency. 

It's ready for you to fork and build upon. Check out the repository and let us know what you think: [LINK]

## Feature
Maintaining design consistency when working with AI coding tools can be incredibly frustrating. They love to invent new hex codes. 

To solve this in PeopleBase Directory, we implemented an LLM-safe design system. We banned arbitrary magic values in our Tailwind configuration. Instead, every color, radius, and spacing rule is explicitly defined in a `DESIGN.md` file and mapped to semantic CSS variables (like `--color-brand-primary`). 

When an agent needs to style a new component, it references the spec and uses the correct semantic token. It's a simple constraint that yields massive improvements in code quality.

Explore the design system here: [LINK]

## Educational
Building software with AI agents requires treating them like junior developers. They need context, constraints, and clear operating procedures.

For the PeopleBase Directory project, we adopted the Open Knowledge Format (OKF) to build a Git-native second brain. In our `.wiki/` directory, we store Architecture Decision Records (ADRs), coding conventions, and a glossary of terms. We also maintain a library of reusable prompts and Standard Operating Procedures (SOPs).

By providing this structured context, our AI tools spend less time hallucinating and more time writing useful code. 

Read more about our OKF implementation: [LINK]

## Behind the Scenes
A dashboard is only as good as its data visualizations. We've been working hard integrating Recharts into the PeopleBase Directory architecture.

The challenge wasn't just getting the charts to render; it was making sure they respected our strict design system. We had to ensure that chart axes, tooltips, and data series dynamically adapted to our Tailwind light and dark mode tokens. By passing our semantic CSS variables directly into the Recharts configuration, we achieved a seamless look across the entire application.

Take a look at the implementation details: [LINK]

## Progress Update
Our latest focus for PeopleBase Directory has been rigorous mobile responsiveness triage. 

Complex data tables and sidebars often break on small screens. We've implemented a series of strict flexbox constraints—utilizing `shrink-0`, `min-w-0`, and responsive hiding techniques—to ensure the layout remains functional on mobile devices without compromising the desktop experience. Every touch target is now properly sized for accessibility.

Test the mobile layout on the live preview: [LINK]

## Release
The wait is over: PeopleBase Directory v1.0 is officially released and open-source!

If you're looking for a clean, modular React dashboard that doesn't dictate your entire backend architecture, this is for you. It includes a scalable navigation rail layout, Recharts integrations, and a robust documentation structure tailored for human-AI collaboration.

We built the tool we wanted to use. We hope you find it useful too.

Fork the repository and start building today: [LINK]
