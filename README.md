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

### 1. Project Setup & PWA Foundation

**Front-End**
- [x] Scaffold Vite + React + TypeScript project
  - Project structure, ...
- [ ] (optional) Configure Web App Manifest (icons, name, start_url) for PWA support
- [ ] Create initial design system in Figma (mobile-first): colors, typography, buttons
- (Skip)- [ ] Register Service Worker (Workbox) & offline caching

**Back-End**
- [ ] Scaffold NestJS application with TypeORM/MySQL setup
- [ ] Define `User` entity and generate migration
- [ ] Implement basic Auth module: email/password registration & login endpoints
  - JWTs, accessToken/refreshToken

**DevOps**
- [ ] Dockerize backend + MySQL; publish image to registry
- [ ] Write CI pipeline (lint, build, test) and CD for staging environment
- [ ] Provision staging environment (Docker Compose or Kubernetes) and deploy service

---

### 2. Goal Definition & Data Model

**Front-End**
- [ ] Build “Create Challenge” screen with form fields (name, start date, goal type)
- [ ] Build “Join Challenge” screen with code/input and validation
- [ ] Hook screens to backend endpoints for creation and joining

**Back-End**
- [ ] Design DB schema for `User`, `Team`, and `Challenge` entities; generate migrations
- [ ] Implement POST `/challenges` for creation and POST `/challenges/:id/join`
- [ ] Validate team membership limits and invite codes

---

### 3. Manual Progress Logging

**Front-End**
- [ ] Create daily log form UI to record metrics (km, push-ups, plank time)
- [ ] Display list of past logs with edit and delete controls
- [ ] Validate inputs (numbers, required fields)

**Back-End**
- [ ] Define `ProgressLog` entity; add migrations for fields (userId, date, type, value)
- [ ] Expose POST `/logs` to create and GET `/logs?challengeId={id}` to fetch logs
- [ ] Enforce one log per metric per day per user

**DevOps**
- [ ] Include `ProgressLog` table in backup and restore strategies
- [ ] Add integration tests for log endpoints in CI pipeline

---

### 4. Offline-First Sync

**Front-End**
- [ ] Cache new log entries in IndexedDB when offline
- [ ] Detect network status changes and sync cached logs on reconnect
- [ ] Show sync status indicators in UI

**Back-End**
- [ ] Timestamp incoming logs and return conflict details if duplicates
- [ ] Support bulk endpoint POST `/logs/sync` for batched inserts
- [ ] Handle idempotency keys to avoid duplicates

**DevOps**
- [ ] Add end-to-end tests covering offline-sync flows to CI
- [ ] Monitor sync errors and queue length via logging/alerts

---

### 5. Progress Visualization

**Front-End**
- [ ] Display leaderboard sorted by percent of goal achieved
- [ ] Build individual progress page with line chart showing metrics over time
- [ ] Create reusable chart component (e.g. using Recharts)

**Back-End**
- [ ] Provide GET `/challenges/:id/leaderboard` aggregating percent complete per user
- [ ] Provide GET `/challenges/:id/progress?userId={id}` returning time series data
- [ ] Cache heavy analytics queries for performance

**DevOps**
- [ ] Configure CDN/caching for analytics endpoints
- [ ] Set up alerts on high response times for visualization APIs

---

### 6. Media Capture & Gallery

**Front-End**
- [ ] Integrate file picker and camera API for daily photo/video capture
- [ ] Build gallery UI to display uploaded media per challenge
- [ ] Implement lazy-loading and thumbnail previews

**Back-End**
- [ ] Create media upload endpoint (POST `/challenges/:id/media`) with S3/local storage
- [ ] Store metadata (URL, userId, timestamp) and generate thumbnails
- [ ] Provide GET `/challenges/:id/media` to list media assets

**DevOps**
- [ ] Provision object storage bucket and define lifecycle policies
- [ ] Secure storage credentials in secrets manager and implement rotation

---

### 7. Third-Party Data Import

**Front-End**
- [ ] Add Strava import UI: connect/disconnect button and status
- [ ] Implement OAuth flow for Strava token exchange
- [ ] Map imported Runs to daily log form for user confirmation

**Back-End**
- [ ] Integrate Strava API: handle OAuth token exchange and refresh
- [ ] Fetch user activities and transform into `ProgressLog` entries
- [ ] Expose POST `/import/strava` webhooks or sync endpoint

**DevOps**
- [ ] Store Strava API credentials securely and manage rotations
- [ ] Monitor import job failures and set up retry logic alerts

---

### 8. Notifications & Reminders

**Front-End**
- [ ] Implement web-push subscription UI and handle permission flows
- [ ] Build Settings page to toggle daily reminders and weekly digest emails
- [ ] Show in-app toast notifications for successful log and achievements

**Back-End**
- [ ] Schedule daily push notifications via FCM/APNs for logging reminders
- [ ] Schedule weekly email digests via Mailgun/SES summarizing progress
- [ ] Expose endpoints for managing user notification preferences

**DevOps**
- [ ] Configure Kubernetes CronJob or serverless scheduler for notification jobs
- [ ] Ensure push certificates (APNs) and FCM server keys are valid
- [ ] Verify email domain authentication (SPF, DKIM, DMARC) and monitor deliverability

---

### 9. Polish & Deployment

**Front-End**
- [ ] Run Lighthouse PWA audit (target score ≥ 90) and fix issues
- [ ] Conduct accessibility (a11y) sweep and resolve violations
- [ ] Finalize responsive QA on key device breakpoints

**Back-End**
- [ ] Profile and optimize slow database queries and endpoints
- [ ] Harden API security: rate limiting, input validation, sanitize outputs
- [ ] Perform load testing on critical endpoints

**DevOps**
- [ ] Deploy to production environments (Vercel/Netlify for FE; cloud provider for BE)
- [ ] Configure custom domain, SSL certificates, and DNS settings
- [ ] Set up production monitoring and alerting (CPU, memory, error rates)

