# Navigation Rail Expansion Tasks

## Phase 1: Expansion State Management
- [x] Introduce `isExpanded` state in `Sidebar.tsx`.
- [x] Toggle between 260px (expanded) and 80px (collapsed) width.
- [x] Update Menu button to trigger the expansion toggle on desktop.
- [x] Balance the vertical spacing and padding in the collapsed rail to avoid scrollbars.

## Phase 2: Expanded View UI
- [x] Restore text labels in the Brand component when expanded.
- [x] Render navigation items as horizontal rows (icon + text) in the expanded state.
- [x] Update footer actions to display text and proper row layouts in the expanded state.

## Phase 3: Collapsed View UI
- [x] Maintain the stacked icon + label layout in the 80px rail state.
- [x] Maintain the pill active state for the icon.
- [x] Maintain icon-only footer actions in the rail state.

## Phase 4: Branding Refinement
- [x] Create a minimal, geometric brand icon.
- [x] Rename generic brand name to `PeopleBase` and `Directory`.
- [x] Update tasks file.
