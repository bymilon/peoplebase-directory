# SOP: OKF Knowledge Base Initialization

## Objective
Bootstrap a Git-native project knowledge base following the Open Knowledge Format (OKF) to ensure durable context for humans and AI agents.

## Prerequisites
- A new or un-documented project repository exists.
- Write access to the project root.

## Inputs
- Project vision, scope, and initial architecture details.

## Outputs
- A populated `.wiki/` directory containing standardized markdown files and subdirectories.

## Procedure (Checkpoints)
1. **Create Root Directory**: Generate the `.wiki/` folder in the project root.
2. **Generate Core Documents**: Create the following files, ensuring every file starts with OKF-compliant YAML frontmatter (id, title, type, status, created, updated, owner, tags):
   - `README.md` (Purpose and contribution rules)
   - `index.md` (Master navigation)
   - `project.md` (Vision, scope, goals, constraints)
   - `architecture.md` (System boundaries, stack)
   - `conventions.md` (Coding and UI standards)
   - `glossary.md` (Terminology definitions)
3. **Generate Subdirectories**: Create the following folders, each containing a minimal `README.md` explaining its purpose:
   - `decisions/` (Architecture Decision Records)
   - `workflows/` (Repeatable processes)
   - `runbooks/` (Operational guides)
   - `references/` (External specs)
   - `templates/` (Boilerplate documents)
4. **Link Documents**: Ensure `index.md` contains relative links to all generated core documents and subdirectories.

## Failure Modes
- **Missing Frontmatter**: Creating markdown files without YAML frontmatter. *Mitigation: Always use the document template.*
- **Bloat/Duplication**: Storing temporary notes, chat transcripts, or duplicating info. *Mitigation: Enforce the "Durable Facts Only" rule.*
- **Broken Links**: Renaming files without updating `index.md`. *Mitigation: Validate cross-links after any file structure changes.*

## Acceptance Criteria
- `.wiki/` directory exists with all required files and subdirectories.
- Every markdown file contains valid YAML frontmatter.
- A new developer or AI agent can read `index.md` and navigate the entire knowledge base.

## References
- [SOP: Project Metadata Configuration](project-metadata-configuration.md)
- Prompt: `okf-knowledge-base.md`
