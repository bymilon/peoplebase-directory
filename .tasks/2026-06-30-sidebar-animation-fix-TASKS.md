# Sidebar Animation Fix

> **Context**: The user reported that when expanding and collapsing the navigation rail, the animation adds borders at icons and nav items, making it look chaotic. We need to fix this animation and border glitch.

## Phase 1: Investigation & Fix (P1)
- [x] **SIDEBAR-01**: Investigate `Sidebar.tsx` for border and transition classes on navigation items that cause visual glitches during the expand/collapse animation.
- [x] **SIDEBAR-02**: Adjust the CSS classes to ensure smooth transitions without layout shifts, border pop-ins, or chaotic artifacts. Unify the DOM for `isExpanded` so widths transition natively.
- [x] **SIDEBAR-03**: Verify the collapsed and expanded states work seamlessly.
