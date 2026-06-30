# M3 Navigation Rail Implementation Tasks

## Phase 1: Structure and Dimensions
- [x] Read `Sidebar.tsx` and understand current state.
- [x] Convert the `260px` sidebar into an `80px` wide Navigation Rail (on desktop).
- [x] Remove nested sub-items from the rail (Navigation Rails typically only show top-level destinations).
- [x] Adjust padding and spacing to match M3 specs (e.g., `8dp` padding on top/bottom).

## Phase 2: Navigation Items & Active State
- [x] Stack icon and label vertically.
- [x] Implement the M3 active indicator: a pill shape (`width: 56px`, `height: 32px`) centered behind the icon.
- [x] Apply M3 typography for rail labels (`12px` font size, `medium` weight).
- [x] Ensure correct colors and contrast for active/inactive states based on M3 (or existing app theme adapted to M3).

## Phase 3: Brand Refactoring
- [x] Simplify `Brand.tsx` or inline the brand logo.
- [x] Remove "Acme Corp Enterprise" text to eliminate bloat.
- [x] Center a clean, sharp logo mark within the 80px rail.
- [x] Adjust header actions (like the menu/collapse button) to fit the rail pattern.

## Phase 4: Footer Actions
- [x] Adapt theme toggle, profile, and help buttons to fit the rail layout (icon only, or stacked).
- [x] Mark tasks as complete.
