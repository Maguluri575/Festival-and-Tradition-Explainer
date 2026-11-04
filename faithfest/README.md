# FaithFest — Interactive Religious Festival & Cultural Heritage Explorer

FaithFest is a database-backed, responsive cultural heritage web application. The current implementation starts with three religion paths in the required order:

1. 🕉️ Hinduism
2. ☪️ Islam
3. ✝️ Christianity

Selecting a religion loads only that religion's published festivals/observances. Selecting a festival opens its complete profile: history, significance, celebration, food, clothing, music/dance, decorations/symbols, regional variations, calendar data, media and references.

## Current implementation

- Real Node.js HTTP backend
- SQLite persistent database using Node's built-in `node:sqlite`
- JWT-style authentication with password hashing
- User and admin roles
- Database-driven religion/festival navigation
- Search and category/religion filtering
- Festival detail pages
- Learning mode + persistent progress
- Quiz scoring + quiz history
- Favorites
- Reminder preferences
- Badges
- Admin statistics
- Admin festival creation
- Admin child-content API for history, food, clothing, music, decorations, symbols, regions, media, references and quiz questions
- Dynamic calendar API
- Supplied Hindu calendar dataset imported as calendar events
- Leaflet/OpenStreetMap map integration
- Multilingual UI selector scaffold (English/Tamil/Telugu/Hindi)
- Browser text-to-speech
- Festival comparison
- PWA manifest/service worker
- Responsive mobile/tablet/desktop UI
- Loading/empty/error-friendly states
- Source/reference fields and content-status model

## Hindu calendar dataset

The supplied `hindu_calendar_1900_2100.csv` is stored under:

`data/hindu_calendar/hindu_calendar_1900_2100.csv`

It is treated as **calendar/event data**, not as a list of festival pages. This prevents tithis and calendar observances from being incorrectly converted into festivals. The dataset is imported into the `calendar_events` table on first database initialization.

## Run locally

Requirements: Node.js 22+

```bash
npm start
```

Open:

`http://localhost:3000`

Run smoke tests:

```bash
npm test
```

## Demo accounts

User:

- Email: `demo@faithfest.local`
- Password: `Demo@12345`

Admin:

- Email: `admin@faithfest.local`
- Password: `Admin@12345`

Change these credentials before any public deployment.

## Project structure

```text
faithfest/
├── server.js
├── db.js
├── schema.sql
├── package.json
├── data/
│   └── hindu_calendar/
│       └── hindu_calendar_1900_2100.csv
├── public/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   ├── manifest.json
│   └── sw.js
└── tests/
    └── smoke.js
```

## Important content workflow

Religious/historical content should be reviewed before public deployment. The database supports source/reference records and festival status (`draft` / `published`). Only published festival records are exposed by the public festival APIs.

The uploaded Hindu calendar is suitable for dynamic calendar/event display. Rich festival content should be supplied through the festival content data/admin workflow so that the project does not fabricate historical, religious, food, clothing or regional claims.

## Advanced integrations

The application has integration points for an external AI assistant, but it does not pretend that AI is configured when no provider credentials are present. Configure `AI_API_URL` and `AI_API_KEY` only when a real provider/service is available.

Leaflet uses OpenStreetMap tiles in the map view. An internet connection is required for live map tiles.
