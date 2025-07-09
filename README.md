# 1) Project Description 📚

**October Challenge Tracker** is a mobile-first Progressive Web App (PWA)
designed to help individuals and groups set, track, and achieve their October
“sober month” fitness challenges (as together or against each other)
The challenge participats can definte custom goals (running distance),
exercises, etc. —log daily progress (manually or via third-party APIs like Strava),
and capture photos or short videos of their activities.
The app works offline, syncs when back online, and provides progress visualizations,
leaderboards, and reminders to keep everyone motivated throughout October.

---

# 2) Tech Stack 🖥️

- **Frontend:**
    - Framework: Vite + React
    - Styling: styled-components
    - PWA Support:
        - Web App Manifest
        - Service Worker (Workbox)
- **State Management & Data:**
    - React Query / TanStack Query _(or: _______)_
    - Local Cache: IndexedDB (via localForage or Dexie.js) _(or: _______)_
- **Authentication & APIs:**
    - OAuth 2.0 (Strava, Google, Apple) _(or: _______)_
    - Email/Password (Firebase Auth, Auth0) _(or: _______)_
- **Backend & Storage:**
    - Server: NestJS _(or: ____)_
    - Database: mysql/supabase
    - File Storage: Firebase Storage / AWS S3 _(or: _______)_
- **Visualization & Media:**
    - Charts: ____
    - Maps: ____
- **Notifications:**
    - Web Push API (Workbox)
- **Testing & CI/CD:**
    - Unit/E2E: Vitest + React Testing Library, Cypress _(or: _______)_
    - CI/CD: GitHub Actions → Vercel / Netlify

---

# 3) MVP Checklist 📋

1. **Project Setup & PWA Foundation**
    - [ ] Scaffold Vite + React project
    - [ ] Add styled-components setup
    - [ ] Configure Web App Manifest
    - [ ] Register Service Worker (Workbox) & offline caching

2. **Authentication & User Flow**
    - [ ] Implement email/password auth
    - [ ] Stub OAuth 2.0 flow for Strava (no UI)

3. **Goal Definition & Data Model**
    - [ ] Design DB schema for users, teams, goals
    - [ ] Build “Create Challenge” & “Join Challenge” screens

4. **Manual Progress Logging**
    - [ ] Create form to log daily metrics (km, push-ups, plank time)
    - [ ] Store logs to database and display list

5. **Offline-First Sync**
    - [ ] Enable IndexedDB caching for logs when offline
    - [ ] Sync cached logs when back online

6. **Progress Visualization**
    - [ ] Display simple leaderboard (sorted by progress %)
    - [ ] Add a basic line chart for individual progress

7. **Media Capture & Gallery**
    - [ ] Integrate file picker / camera for photos & videos
    - [ ] Upload media to storage and display gallery

8. **Third-Party Data Import**
    - [ ] Connect to Strava API to fetch runs (basic token exchange)
    - [ ] Map imported runs to user’s daily logs

9. **Notifications & Reminders**
    - [ ] Set up web push notifications for daily logging reminders
    - [ ] Send weekly email digest of progress

10. **Polish & Deployment**
    - [ ] Lighthouse PWA audit (score ≥ 90)
    - [ ] Accessibility check (a11y)
    - [ ] Deploy to Vercel/Netlify and configure custom domain
