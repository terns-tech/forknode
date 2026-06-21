---
version: 1.0.0
name: Nexura Visual System
description: Performance-oriented dark mode system for creative service providers.
colors:
  background: "#0B0F19"
  surface: "#1C1F26"
  surfaceHover: "#262A34"
  primary: "#FFFFFF"
  accentBlue: "#3B82F6"
  accentPurple: "#A855F7"
  accentEmerald: "#10B981"
  accentOrange: "#F97316"
  textMuted: "#9CA3AF"
  border: "rgba(255, 255, 255, 0.05)"
typography:
  display:
    family: "DotGothic16, sans-serif"
    weight: "400"
    usage: "Hero titles and section headings"
  interface:
    family: "JetBrains Mono, monospace"
    weight: "400-700"
    usage: "Primary UI text and body copy"
  tracking:
    tight: "-0.025em"
    wide: "0.1em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
components:
  nav:
    type: "fixed-header"
    blur: "8px"
    border: "1px solid rgba(255,255,255,0.05)"
  buttons:
    primary: "pill-shaped, black on white, high elevation glow"
    ghost: "pill-shaped, white on glass, 1px border"
  cards:
    feature: "gradient-border, dark surface, 24px internal padding"
    testimonial: "solid surface, border-top accent, left-aligned"
  kanban:
    container: "horizontal scroll, dark contrast columns, task chips with status pills"
motion:
  reveal:
    transform: "translateY(20px)"
    filter: "blur(8px)"
    duration: "800ms"
---
## Overview
Nexura is a high-contrast dark mode system designed to project speed and technical authority. It utilizes a "Retro-Mono" aesthetic, combining low-fidelity pixelated headers with high-fidelity monospaced interface elements.

## Colors
The palette is rooted in a deep navy background (#0B0F19) with a tiered surface architecture using variations of charcoal and slate. Accents are used sparingly for status indication: Blue (Task), Purple (UGC), and Emerald (Success/Stats). All surfaces use a subtle 5% white border to define depth against the void.

## Typography
Two distinct families are used:
- **DotGothic16**: Reserved for H1 and H2 tags to provide a "digital blueprint" feel.
- **JetBrains Mono**: Used for all functional text, emphasizing the high-performance and data-driven nature of the service.

## Spacing
The system adheres to an 8px grid. Section padding is aggressive (96px+) to create a high-end, uncluttered agency experience. UI components like the Kanban board use tighter 4px-8px spacing to maintain a data-dense utility feel.

## Layout
- **Layer Stacks**: Uses a background video layer with a `mix-blend-screen` overlay for texture.
- **Dashboard View**: Employs a centered max-width (1024px) container with a `z-index: 20` to overlap hero content.
- **Grid Systems**: Features a 12-column responsive grid and a custom "Bento" grid for feature highlights with varied column spans (3, 4, 6, and 12).

## Elevation & Depth
Depth is communicated through transparency rather than shadows.
- **Foreground**: Pure white or bright accent text.
- **Midground**: Surfaces with `backdrop-blur-md` and `1px border`.
- **Background**: Deep gradients and grid patterns (`grid-bg`).
- **Glows**: Hero buttons use `box-shadow: 0 0 20px rgba(255,255,255,0.2)`.

## Shapes
Rounded corners are significant and varied:
- Large containers (Dashboard, Bento) use `3xl` (approx 24px-32px).
- Internal cards use `2xl` (16px).
- Interactive elements like buttons and status badges use `full` (pill-shape).

## Components
- **Task Kanban**: Features horizontal scrolling (`overflow-x-auto`) and vertical task stacking. Includes status indicators and avatars with `ring-2` borders.
- **Feature Grid**: Uses a `p-[1px]` gradient border technique to create a "glowing edge" effect.
- **Hero Section**: Centered flex layout with a pulse-animated status badge and dual-call-to-action buttons.
- **Stat Row**: Minimalist border-separated metrics with DotGothic font.

## Motion
- **Scroll Reveals**: Elements fade and translate in from the bottom, left, or right as they enter the viewport.
- **Stagger**: The design system supports `data-delay` attributes to sequence animations (e.g., 100ms, 200ms increments).
- **Feedback**: Hover states on cards use `transition-all` with slight border color shifts.

## Do's and Don'ts
- **Do**: Use monospaced fonts for all numeric data.
- **Do**: Use the `grid-bg` linear gradient for subtle texture on large dark surfaces.
- **Don't**: Use solid bright colors for backgrounds; always prefer semi-transparent glass effects.
- **Don't**: Use standard sans-serif fonts; it breaks the technical agency aesthetic.

## Accessibility
- **Contrast**: Maintain a high ratio by using pure white or bright tints against the #0B0F19 background.
- **Focus**: Interactive elements use `transition-all` and backdrop changes for visual feedback.
- **Semantics**: Use `header`, `main`, `section`, and `footer` landmarks to organize the single-page flow.