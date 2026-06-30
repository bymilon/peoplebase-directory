# Design System Specification (DESIGN.md)

This document defines the LLM-safe design system for the application, mapping abstract visual concepts to concrete, repeatable Tailwind CSS utility patterns and semantic tokens.

## 1. Brand Identity
- **Personality**: Minimal, professional, data-centric, and focused.
- **Voice**: Objective and concise.
- **Vibe**: Clean dashboard interface relying on structural spacing and high contrast rather than decorative elements.

## 2. Core Tokens & Colors

### Surfaces
- **Light Mode**:
  - Background (App): `bg-slate-50`
  - Surface (Cards/Modals): `bg-white`
- **Dark Mode**:
  - Background (App): `bg-slate-950`
  - Surface (Cards/Modals): `bg-slate-900`

### Borders
- **Light Mode**: `border-gray-200`
- **Dark Mode**: `border-gray-800`

### Text & Typography
- **Font Family**: Plus Jakarta Sans (`font-sans`)
- **Primary Text**: `text-gray-900` (light), `text-white` (dark)
- **Secondary Text**: `text-gray-500` (light), `text-gray-400` (dark)
- **Accent Text**: `text-sky-600` (light), `text-sky-400` (dark)

### Actions & Brand Colors
- **Primary Brand**: `bg-sky-500` (used for main calls to action and active states)
- **Primary Hover**: `hover:bg-sky-600`
- **Destructive**: `bg-red-500 text-white`

## 3. Spacing & Sizing
- **Container Sizing**: `max-w-7xl` for main content areas to prevent ultra-wide stretching.
- **Density**: Comfortable padding. Typical container padding is `p-5 md:p-6`. Typical gap is `gap-4` or `gap-6`.

## 4. Radii & Shape
- **Cards, Containers, Charts**: `rounded-2xl`
- **Buttons, Badges, Small Interactive Elements**: `rounded-full` (for pills) or `rounded-lg` (for standard buttons).
- **Avatars/Icons**: `rounded-full`

## 5. Elevation & Shadows
- **Base Elements (Cards)**: `shadow-sm`
- **Floating Elements (Dropdowns, Dialogs)**: `shadow-lg`
- **Forbidden**: Heavy, blurred drop shadows (e.g., `shadow-2xl`).

## 6. Motion & Transitions
- **Duration**: `duration-200` or `duration-300`
- **Easing**: Standard `ease-in-out`
- **Property**: `transition-all` or `transition-colors`
- **Forbidden**: Unprompted bounce, exaggerated scaling, or slow fades.

## 7. Component Rules

### Interactive Focus States
- **Allowed**: `focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 focus:ring-offset-2 dark:focus:ring-offset-slate-900`
- **Forbidden**: Default browser blue outline.

### Buttons
- **Primary**: `bg-sky-500 text-white hover:bg-sky-600 rounded-full px-4 py-2 text-sm font-medium transition-colors`
- **Ghost/Outline**: `border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-full px-4 py-2 text-sm font-medium transition-colors`

### Cards & Chart Containers
- **Allowed Structure**: `bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col`

### Sidebar (M3 Navigation Rail)
- **Background**: `bg-slate-50 dark:bg-slate-950`
- **Active State**: `bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl`

### Inputs
- **Base**: `border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 bg-white dark:bg-slate-900 text-sm`

## 8. Custom Scrollbars
- Scrollbars should be minimal, unobtrusive, and match the theme.
- **Width**: `8px`
- **Thumb**: `bg-gray-300 dark:bg-gray-700 rounded-full`

## 9. Forbidden Patterns
- **No generic AI slop**: Do not use generic gradient backgrounds (`bg-gradient-to-r from-purple-500 to-blue-500`) unless explicitly requested.
- **No "Terminal" aesthetics**: Avoid monospace font stacks for general UI, green-on-black text, or raw HTML table aesthetics.
- **No arbitrary colors**: Do not use `bg-[#123456]` arbitrary values. Use established Tailwind tokens.
