# API Documentation

*Currently, the API is entirely simulated via `window.RP.api` in `script.js` using LocalStorage.*

## Authentication API
- `RP.api.login()`
- `RP.api.logout()`
- `RP.api.isLoggedIn()`
- `RP.api.currentUser()`

## Roadmap API
- `RP.api.getRoadmaps()`: Returns all available roadmaps.
- `RP.api.getEnrolled()`: Returns roadmaps the user is currently taking.

## Progress API
- `RP.api.getProgress(roadmapId)`: Returns `{ pct, doneCount, total, done: [] }`.
- `RP.api.setTopicDone(roadmapId, topicIndex, isDone)`: Updates the progress of a specific topic.

## Analytics API
- `RP.api.getXP()`: Returns `{ total, today }`.
- `RP.api.getStreak()`: Returns `{ current, longest }`.
- `RP.api.getLevelProgress()`: Returns current Level and XP needed for next.
- `RP.api.getWeeklyData()`, `RP.api.getMonthlyData()`: For Chart.js.
- `RP.api.getHeatmapData()`: For consistency graphs.
- `RP.api.getActivityLog()`: Recent activities.

## Future Backend APIs
Once migrated, these will map to:
- `POST /api/auth/login`
- `GET /api/roadmaps`
- `POST /api/progress/:roadmapId`
- `GET /api/analytics`
