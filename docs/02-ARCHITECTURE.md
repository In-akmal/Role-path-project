# Project Architecture

## Folder Structure
```
RolePath/
├── css/             # CSS styling, tokens, and themes
├── js/              # JavaScript logic and mock API
├── pages/           # HTML templates
├── docs/            # AI Documentation
└── assets/          # Images and icons
```

## Frontend Architecture
- **Vanilla HTML/CSS/JS**: No frontend frameworks (React/Vue/Tailwind) are used currently, relying on highly optimized, modern CSS (flexbox, grid, custom properties) and modular vanilla JavaScript.
- **Design System**: Centralized CSS variables for colors, typography, spacing, and animations (`style.css`).

## Backend Architecture
- Currently simulated via `RP.api` inside `js/script.js`.
- All backend responses are synchronously returned from the simulated API.

## Database Architecture
- **LocalStorage**: Used to persist user sessions, enrolled roadmaps, completed topics, streaks, and XP across page reloads.

## Authentication Flow
- Simulated login via `RP.api.login()`. Sets active user in LocalStorage.
- Protected routes redirect to `login.html` if no user is found.

## API Flow
- UI calls `RP.api.<method>()`.
- Simulated API processes logic, updates state object.
- API commits to LocalStorage.
- UI triggers re-render (e.g. `renderProgress()`).

## State Management
- Managed globally by `RP.api`. 
- UI listens for DOM events, updates API, and re-renders specific components. No Virtual DOM is used.

## File Naming Convention
- kebab-case for HTML files (`roadmap-details.html`).
- camelCase or kebab-case for JS/CSS (`dashboard.js`, `style.css`).

## Component Structure
- HTML files act as the root views.
- Components are strictly structural (e.g. `.card`, `.glass-card`, `.topic-row-premium`).
- JS dynamically injects component HTML strings.

## Folder Responsibility
- `css/`: Pure visual presentation.
- `js/`: Business logic, state, interactions.
- `pages/`: Layout structure.

## Services
- `script.js` acts as the core service provider (`window.RP.api`).

## Utility Functions
- Confetti, XP Toasts, Reveal animations are housed in `script.js` as global utilities on `window.RP`.

## Deployment
- Can be deployed to any static host (Vercel, Netlify, GitHub Pages).

## Security
- Currently purely client-side; real security will be implemented in backend phase.

## Performance Strategy
- Zero-dependency frontend ensures ultra-fast load times.
- CSS transitions for 60fps animations.

## Error Handling
- Simulated API throws/returns false.
- UI displays custom toast notifications (`RP.showToast()`).

## Logging
- Standard `console.log` for development.

## Future Scalability
- The simulated `RP.api` is designed to be easily swapped out for asynchronous `fetch()` calls to a real REST/GraphQL API.
