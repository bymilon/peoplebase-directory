# SOP: Mobile Responsiveness Triage

## Objective
Diagnose and resolve layout overflows, overlaps, or rendering issues on mobile and smaller viewports.

## Prerequisites
- A layout bug is identified at a specific viewport width (e.g., < 768px).
- Development server is running and accessible.

## Inputs
- Target component or view containing the layout issue.
- Screen dimension constraints where the bug occurs.

## Outputs
- Modified CSS/Tailwind classes that resolve the overflow/overlap.
- Maintained structural integrity on desktop viewports.

## Procedure (Checkpoints)
1. **Identify the Bottleneck**: Inspect the DOM to find the specific container causing the overflow (usually a flex container missing wrapping or shrinking rules).
2. **Apply Flex Constraints**: 
   - Add `shrink-0` to elements that should never compress (e.g., icons, avatars, buttons).
   - Add `min-w-0` or `flex-1` to text containers that need to truncate (`truncate`) instead of pushing siblings out of bounds.
3. **Implement Breakpoints**: Use responsive prefixes (e.g., `md:hidden`, `lg:flex`) to hide non-essential text labels, secondary actions, or decorative elements on smaller screens.
4. **Verify Touch Targets**: Ensure any interactive elements on mobile remain at least 44px by 44px (e.g., `min-h-[44px] min-w-[44px]`).
5. **Test Viewports**: Resize the viewport from 320px up to 1440px to ensure smooth transitions without visual breakage.

## Failure Modes
- **Desktop Regression**: Fixing mobile layout accidentally breaks the desktop layout. *Mitigation: Always wrap mobile-specific overrides or ensure desktop uses the appropriate `md:` or `lg:` prefix.*
- **Inaccessible Tap Targets**: Making buttons too small to fit the screen. *Mitigation: Enforce minimum height/width and use padding effectively.*
- **Hidden Critical Content**: Hiding elements on mobile that are essential to user workflows. *Mitigation: Move critical elements to a dropdown or drawer rather than hiding them entirely.*

## Acceptance Criteria
- No horizontal scrolling occurs on screens down to 320px wide (unless explicitly intended, like a data table).
- No elements visually overlap.
- Touch targets are accessible.
- Desktop layout remains unchanged.

## References
- [SOP: Reusable UI Component Extraction](ui-component-extraction.md)
- Prompt: `mobile-responsiveness.md`
