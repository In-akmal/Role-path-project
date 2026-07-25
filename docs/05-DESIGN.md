# UI & Design System

## Color Palette
- Primary: #2563EB (Blue)
- Success: #22C55E (Green)
- Warning: #F59E0B (Amber)
- Error: #EF4444 (Red)
- Background (Light): #F9FAFB
- Background (Dark): #0B1120
- Card (Light): #FFFFFF
- Card (Dark): #131C31

## Typography
- Font Family: Inter, system-ui, sans-serif
- Headings: Bold, tight letter spacing
- Body: 14px - 16px, readable line height (1.5)

## Spacing
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

## Border Radius
- Small: 6px
- Default: 12px
- Large: 20px - 24px (used for Mission Control cards)
- Pill: 999px

## Animations
- `fadeInUp` (0.5s ease)
- Hover lifts (`transform: translateY(-4px)`)
- Custom Confetti logic for accomplishments
- Progress bar transitions (width 1s ease)

## Icons
- Inline SVGs (Lucide-style)

## Cards
- Default `.card` with borders and subtle shadow.
- Premium `.glass-card` with backdrop-filter blur.

## Dark Theme
- Toggleable via data-theme="dark" attribute on `<html>`.

## Dashboard Layout
- **Mission Control V2**: 
  - Hero banner with background illustration
  - Action-driven "Focus Row"
  - Premium 8-card statistics grid
  - Timeline and GitHub-style Activity Heatmap

## Component Library
- Pure CSS classes defined in `style.css`.
- `.btn-primary`, `.topic-row-premium`, `.glass-stat-card`

## Design Principles
- **Action-First:** The user should instantly know what to do next.
- **Micro-animations:** Elements should feel alive.

## Glassmorphism
- Heavily utilized in the premium layout to provide depth.
