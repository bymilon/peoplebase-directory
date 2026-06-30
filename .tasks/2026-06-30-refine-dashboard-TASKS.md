# Dashboard Refinement Tasks

## Phase 1: Layout Audit
- [x] Review `App.tsx` and `Dashboard.tsx` layout structure and margins.
- [x] Ensure consistent gap and spacing rhythm.
- [x] Standardize main content container padding.

## Phase 2: Design System Audit
- [x] Standardize border colors and opacity (`border-gray-200`, `dark:border-gray-800/60`).
- [x] Standardize border radius across cards (`rounded-xl` or `rounded-2xl`) and controls (`rounded-lg`).
- [x] Standardize typography weights and sizes (especially in headers and table).

## Phase 3: Component Audit
- [x] `Sidebar.tsx`: Refine item padding, icon sizing, hover/active states, text baseline.
- [x] `Header.tsx`: Refine height, breadcrumb spacing, date picker alignment, upgrade button.
- [x] `KpiCards.tsx`: Refine inner padding, value typography weight, subtitle color contrast.
- [x] `CommunicationFunnel.tsx`: Refine progress bar height, label alignment, percentage text colors.
- [x] `OutreachConversion.tsx`: Refine pie chart thickness, legend spacing.
- [x] `SequenceStepActivity.tsx`: Refine table header padding, row border styles, avatar styles, right-alignment.
- [x] `MessageSentChart.tsx`: Refine bar radius, gridline opacity, legend spacing.

## Phase 4: Pixel Refinement
- [x] Ensure 1px borders are subtle and consistent.
- [x] Fix any text baseline misalignment (e.g., icons next to text).
- [x] Adjust shadow elevation to be very subtle (`shadow-sm` or custom subtle shadow).

## Phase 5 & 6: Surfaces & Interactive Controls
- [x] Add consistent hover/active transitions to all buttons and links.
- [x] Ensure focus rings are applied if necessary or rely on background changes.
- [x] Refine Dark mode transition cohesion.

## Phase 7: Responsive Refinement
- [x] Test and adjust grid columns for smaller desktop screens (lg, xl breakpoints).
- [x] Ensure the max-width and scaling feel appropriate.

## Phase 8 & 9: Visual Consistency & Code Quality
- [x] Refactor repetitive class strings where necessary.
- [x] Ensure a final pass across all components for visual cohesion.
- [x] Mark all tasks as complete.
