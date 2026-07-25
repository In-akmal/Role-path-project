# Roadmap Management

## Folder Structure
All roadmap data is currently stored locally in `js/script.js` under `window.RP.roadmaps`.

## How to Create a Roadmap
1. Open `js/script.js`.
2. Locate the `roadmaps` array.
3. Append a new roadmap object to the array following the JSON Format.

## Roadmap JSON Format
```json
{
  id: "roadmap-id",
  name: "Roadmap Title",
  desc: "Short description.",
  icon: "svg-path-data",
  category: "Category Name",
  price: 0, // 0 for free, 29 for premium
  topics: [
    "Topic 1",
    "Topic 2"
  ]
}
```

## Difficulty Levels
- Not strictly enforced in V1, but can be added to the roadmap object as `level: "Beginner"`.

## Categories
- Defined dynamically by scraping unique `category` strings from the roadmaps array.

## Duration
- Add `duration: "12 Weeks"` metadata.

## Skills
- Add `skills: ["HTML", "CSS"]` metadata.

## Prerequisites
- Add `prerequisites: ["Basic logic"]`.

## Learning Resources
- Future Phase: Each topic inside the `topics` array will become an object containing `resources: []`.

## Projects
- Future Phase: Special topics marked as `isProject: true`.

## Certifications
- Roadmaps with 100% completion automatically unlock a simulated certificate.

## Progress Tracking
- Handled by `RP.api.getProgress(id)`.
- Returns `{ total, doneCount, pct, done: [boolean] }`.

## Completion Logic
- When a user checks a topic (`.topic-row-premium`), it updates state.
- If `pct` hits 100, `RP.showConfetti()` is triggered.

## XP System
- Each topic completed grants +40 XP.
- Displayed via `RP.showXPToast(40)`.

## Achievement System
- Unlocks badges based on XP or completion milestones.

## Roadmap Update Guide

### How to edit an existing roadmap
- Modify the JSON object in `js/script.js`.

### How to add a new roadmap
- Append to the JSON array.

### How to remove roadmap
- Delete from the JSON array.

### Roadmap versioning
- Not currently implemented in the simulated API.

### Roadmap validation checklist
- Must have a unique `id`.
- Must have an SVG `icon` path.
- Must have at least 1 topic.
