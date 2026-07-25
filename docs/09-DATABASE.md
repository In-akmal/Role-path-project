# Database Documentation

*Currently using LocalStorage schema.*

## Storage Keys
- `rolepath_user`: `{"name":"User","email":"...","id":"..."}`
- `rolepath_enrolled`: Array of string roadmap IDs.
- `rolepath_progress`: Object mapping roadmap ID to array of booleans `{"full-stack": [true, false, false]}`.
- `rolepath_xp`: Number representing total XP.
- `rolepath_streak`: `{"current": 1, "longest": 1, "lastActive": "YYYY-MM-DD"}`
- `rolepath_purchased`: Array of roadmap IDs unlocked with premium.

## Future Supabase Schema

### Users Table
- `id` (UUID, PK)
- `email`
- `name`
- `created_at`

### Roadmaps Table
- `id` (String, PK)
- `title`
- `description`
- `category`
- `price`
- `topics` (JSONB)

### UserProgress Table
- `user_id` (FK)
- `roadmap_id` (FK)
- `completed_topics` (JSONB array of indices)
- `enrolled_at`

### UserStats Table
- `user_id` (FK)
- `total_xp`
- `current_streak`
- `longest_streak`
- `last_active_date`
