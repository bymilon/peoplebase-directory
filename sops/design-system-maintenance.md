# SOP: Design System Maintenance

## Objective
Update and maintain the project's LLM-safe design system ensuring consistency across documentation and code.

## Prerequisites
- Familiarity with Tailwind CSS v4 `@theme` configuration.
- Access to `DESIGN.md` and `src/index.css`.

## Inputs
- New visual requirement (e.g., a new "Warning" color or modified border radius).

## Outputs
- Updated `DESIGN.md`.
- Updated `src/index.css` with native Tailwind custom properties.
- Updated UI components using the new tokens.

## Procedure (Checkpoints)
1. **Define in Documentation**: Add the new rule or token abstractly into `DESIGN.md` under the relevant section. Avoid arbitrary values; use semantic names (e.g., "Warning Orange").
2. **Translate to Tailwind Tokens**: Open `src/index.css`. Inside the `@theme` directive, add the new custom property mapping to an existing color palette variable (e.g., `--color-warning: var(--color-orange-500);`).
3. **Audit Existing Code**: Search the codebase (`grep`) for hardcoded or incorrect values that the new token should replace.
4. **Refactor**: Replace the hardcoded values with the new semantic utility classes (e.g., `bg-warning`).
5. **Verify**: Ensure the UI renders correctly in both light and dark modes.

## Failure Modes
- **Arbitrary Hex Injection**: Bypassing `DESIGN.md` and adding `bg-[#FFA500]` directly into a component. *Mitigation: Always start the workflow from DESIGN.md.*
- **Unused Tokens**: Adding tokens to `index.css` but never applying them.

## Acceptance Criteria
- `DESIGN.md` reflects the change.
- `src/index.css` contains the semantic token.
- No arbitrary hex codes are used for the new requirement.

## References
- [ADR 0001: LLM-Safe Design System](../.wiki/decisions/0001-llm-safe-design-system.md)
- Prompt: `design-system-sync.md`
