Shadow Design System

Overview
- Purpose: Provide consistent elevation, hierarchy, and focus clarity across the UI.
- Modes: Light and dark variants share the same scale with tuned opacity.
- Levels: Subtle, Medium, Strong, Emphasis.
- States: Base, Hover, Focus-visible.

Token Scale
- Subtle: Low elevation for quiet surfaces and separators.
- Medium: Default elevation for cards and panels.
- Strong: High elevation for prominent surfaces.
- Emphasis: Hero and primary callouts.

CSS Tokens
Light
- --shadow-subtle: 0 2px 6px rgba(15, 23, 36, 0.08)
- --shadow-medium: 0 10px 24px rgba(15, 23, 36, 0.12)
- --shadow-strong: 0 18px 44px rgba(15, 23, 36, 0.16)
- --shadow-emphasis: 0 24px 64px rgba(30, 99, 255, 0.2)
- --shadow-subtle-hover: 0 6px 14px rgba(15, 23, 36, 0.12)
- --shadow-medium-hover: 0 14px 34px rgba(15, 23, 36, 0.16)
- --shadow-strong-hover: 0 22px 56px rgba(15, 23, 36, 0.2)
- --shadow-emphasis-hover: 0 28px 72px rgba(30, 99, 255, 0.24)
- --shadow-focus: 0 0 0 3px rgba(30, 99, 255, 0.18), 0 12px 28px rgba(15, 23, 36, 0.14)

Dark
- --shadow-subtle: 0 6px 16px rgba(2, 6, 23, 0.5)
- --shadow-medium: 0 14px 34px rgba(2, 6, 23, 0.6)
- --shadow-strong: 0 22px 56px rgba(2, 6, 23, 0.72)
- --shadow-emphasis: 0 28px 72px rgba(30, 99, 255, 0.35)
- --shadow-subtle-hover: 0 10px 24px rgba(2, 6, 23, 0.6)
- --shadow-medium-hover: 0 18px 44px rgba(2, 6, 23, 0.7)
- --shadow-strong-hover: 0 26px 64px rgba(2, 6, 23, 0.82)
- --shadow-emphasis-hover: 0 32px 78px rgba(30, 99, 255, 0.42)
- --shadow-focus: 0 0 0 3px rgba(125, 180, 255, 0.2), 0 14px 32px rgba(2, 6, 23, 0.65)

Utility Classes
- shadow-subtle, shadow-medium, shadow-strong, shadow-emphasis
- shadow-subtle-hover, shadow-medium-hover, shadow-strong-hover, shadow-emphasis-hover
- shadow-focus

Usage Guidelines
- Subtle: Small badges, list items, separators, and low-priority UI.
- Medium: Default cards, panels, and content sections.
- Strong: Modals, drawers, and elevated overlays.
- Emphasis: Primary hero callouts, key CTAs, and featured cards.
- Hover: Apply the matching hover class for interactive elevation.
- Focus: Apply shadow-focus to interactive elements for accessibility.

Accessibility Notes
- Maintain visible focus rings using shadow-focus for keyboard users.
- Ensure shadows do not reduce contrast; pair with clear border or background tokens.
- Avoid stacking strong and emphasis shadows on small elements.

Interactive Examples
- See /shadow-system for cards, buttons, modals, and navigation examples.
