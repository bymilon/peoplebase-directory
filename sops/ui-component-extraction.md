# SOP: Reusable UI Component Extraction

## Objective
Convert a hardcoded, single-use UI component into a flexible, prop-driven, reusable module.

## Prerequisites
- A functioning, hardcoded UI component exists.
- The parent component or layout where this component is used is identified.

## Inputs
- Target component source code.
- Target use-cases for the generalized component.

## Outputs
- Updated component file with an explicit Props interface.
- Updated parent file(s) implementing the new prop structure.

## Procedure (Checkpoints)
1. **Analyze Component State**: Identify hardcoded data, text, configuration flags, and local state within the target component.
2. **Define Interface**: Create a TypeScript `interface` or `type` defining the properties (Props) the component will accept. 
   - *Tip: Include `active`, `items`, `onClick`, and display text overrides.*
3. **Lift State**: Move structural state (e.g., active item, open/closed boolean) to the parent component.
4. **Implement Props**: Replace hardcoded values inside the component with references to the newly defined props.
5. **Add Event Handlers**: Add callback props (e.g., `onItemClick`) to bubble user interactions back up to the parent.
6. **Refactor Parent**: Update the parent component to instantiate the child component with the required props and state variables.

## Failure Modes
- **Prop Drilling**: Passing props through too many layers. *Mitigation: Use context or composition if drilling exceeds 2 levels.*
- **Missing Defaults**: Component crashes if optional props are omitted. *Mitigation: Always assign default values to optional props in the component signature.*
- **State Duplication**: Keeping state in both the parent and child. *Mitigation: Ensure the child relies entirely on the parent's state for structural changes.*

## Acceptance Criteria
- Component contains no hardcoded business logic or fixed data arrays.
- Parent component fully controls the child component's state and data via props.
- Visual appearance and animations remain identical to the original hardcoded version.

## References
- [SOP: Mobile Responsiveness Triage](mobile-responsiveness-triage.md)
- Prompt: `ui-component-extraction.md`
