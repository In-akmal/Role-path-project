# Product Requirements Document

## Project Overview
RolePath is a premium, action-driven career roadmap platform designed to guide users through structured learning paths. It helps learners track progress, visualize goals, and maintain consistency in their learning journey.

## Vision
To be the ultimate mission control center for anyone looking to transition into a new career or master a new skill, providing a clear path from novice to expert.

## Problem Statement
Learners often get lost in "tutorial hell" without a clear, structured path. They lose motivation without visible progress tracking, daily goals, and a gamified sense of achievement.

## Target Audience
- Aspiring developers, designers, and tech professionals
- Self-taught learners seeking structured curriculum
- Professionals looking to upskill or pivot careers

## User Personas
- **The Beginner:** Needs a step-by-step guide with zero ambiguity.
- **The Upskiller:** Already has basics, needs advanced topics and proof of progression (badges, XP).

## Features
### Core Features
- Action-first Dashboard
- Career Roadmaps Catalogue
- Dynamic Progress Tracking (Checklists)
- Localized state management (for current phase)

### Advanced Features
- Daily learning streaks and heatmap
- XP and level progression
- Achievement badges
- Confetti completion celebration

### Future Features
- Full backend integration (Supabase/PostgreSQL)
- AI-driven insights and learning recommendations
- Social activity feeds

## User Flow
1. User browses roadmaps
2. Enrolls in a free or premium roadmap
3. Lands on Mission Control Dashboard
4. Clicks "Continue Where You Left Off"
5. Completes topics, earns XP, maintains streak

## Business Goals
- Increase daily active users (DAU) through gamification
- Convert free users to premium (₹29/roadmap)

## Success Metrics
- 7-day retention rate
- Completion rate of roadmaps
- Average session length

## Competitors
- Roadmap.sh
- Codecademy
- Frontend Mentor

## Tech Stack
- Frontend: HTML5, CSS3 (Vanilla, custom design system), Vanilla JavaScript
- State: LocalStorage (Simulated API)
- Future Backend: Supabase / Node.js

## Constraints
- Must maintain a strict premium UI (glassmorphism, micro-animations)
- Existing functionality (like the green theme and original logic) must not be broken when enhancing.

## Future Scope
- AI mock interviews
- Resume builder integrated with roadmap completion
