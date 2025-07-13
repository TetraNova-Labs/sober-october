# 1) Project Description 📚

**October Challenge Tracker** is a mobile-first Progressive Web App (PWA)
designed to help individuals and groups set, track, and achieve their October
“sober month” fitness challenges (as together or against each other)
The challenge participants can define custom goals (running distance),
exercises, etc. —log daily progress (manually or via third-party APIs like Strava),
and capture photos or short videos of their activities.
The app works offline, syncs when back online, and provides progress visualizations,
leaderboards, and reminders to keep everyone motivated throughout October.

---

# 2) Tech Stack 🖥️

- **Frontend:**
    - Framework: Vite + React
    - Styling: primarily - React UI library(Mantine),
    - PWA Support:
        - Web App Manifest
        - Service Worker (Workbox)
- **State Management & Data:**
    - Redux
    - Local Cache: IndexedDB (via localForage or Dexie.js) _(or: _______)_
      - for "offline" mode when used as PWA
- **Authentication & APIs:**
    - Simple email/password
    - Eventually OAuth will replace email/password to omit validations, etc.
- **Backend & Storage:**
    - Server: NestJS
    - Database: mysql/supabase
    - File storage: TBD(Uploadthing/Firestore/S3)
- **Visualization & Media:**
    - Charts: ____
    - Maps: Deck gl /w mapbox
- **Notifications:**
    - Web Push API (Workbox)
- **Testing & CI/CD:**
    - Unit/E2E: Vitest + React Testing Library, Cypress _(or: _______)_
    - CI/CD: GitHub Actions → Vercel / Netlify

---

# 3) MVP Checklist 📋

1. **Project Setup & PWA Foundation**
   FE:
    - [ ] Scaffold Vite + React project
      - [ ] Project structure, ...
    - [ ] Configure Web App Manifest (PWA enable)
    - [ ] Create Figma + Some design system/components (mobile first)
    (Skip)- [ ] Register Service Worker (Workbox) & offline caching
   
   BE:
    - [ ] Scaffold NestJs App with mysql db
    - [ ] Init Password/Email module (register/login)
      - [ ] Db schema User
      - [ ] JWT (accessToken + refreshToken)

   DevOps:
    - [ ] Setup be + db dockerization for FE
    - [ ] Pipelines (tests)
    - [ ] Deployment


[//]: # ()
[//]: # (2. **Authentication & User Flow**)

[//]: # (    - [ ] Implement email/password auth)

[//]: # (    - [ ] Stub OAuth 2.0 flow for Strava &#40;no UI&#41;)

2. **Goal Definition & Data Model**
    - [ ] Design DB schema for users, teams, goals
    - [ ] Build “Create Challenge” & “Join Challenge” screens

3. **Manual Progress Logging**
    - [ ] Create form to log daily metrics (km, push-ups, plank time)
    - [ ] Store logs to database and display list

4. **Offline-First Sync**
    - [ ] Enable IndexedDB caching for logs when offline
    - [ ] Sync cached logs when back online

5. **Progress Visualization**
    - [ ] Display simple leaderboard (sorted by progress %)
    - [ ] Add a basic line chart for individual progress

6. **Media Capture & Gallery**
    - [ ] Integrate file picker / camera for photos & videos
    - [ ] Upload media to storage and display gallery

7. **Third-Party Data Import**
    - [ ] Connect to Strava API to fetch runs (basic token exchange)
    - [ ] Map imported runs to user’s daily logs

8. **Notifications & Reminders**
    - [ ] Set up web push notifications for daily logging reminders
    - [ ] Send weekly email digest of progress

9. . **Polish & Deployment**
    - [ ] Lighthouse PWA audit (score ≥ 90)
    - [ ] Accessibility check (a11y)
    - [ ] Deploy to Vercel/Netlify and configure custom domain
