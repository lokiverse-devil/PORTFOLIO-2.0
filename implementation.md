# The Los Santos Protocol — Implementation Reference

## Stack
- **Next.js 15** (App Router, JavaScript, no TypeScript)
- **Tailwind CSS 3**
- **GSAP 3** — all animation timelines
- **Howler.js 2** — all audio

## Project Structure

```
/app
  layout.js         Root layout
  page.js           Phase state machine orchestrator
  globals.css       Font-face, keyframes, base reset

/components
  ColdBoot.jsx      Phase 1: Black + canvas film grain (1.5s)
  WantedStars.jsx   Phase 2: 5 stars GSAP stagger + audio (3.0s)
  CityReveal.jsx    Phase 3: City fade-in, drift, vignette, HUD (2.0s)
  WarningScreen.jsx Phase 4: Warning text, ENTER key, white flash
  LoadingFlow.jsx   Phase 5: Image slideshow, nonlinear bar, ambience
  DecisionPhase.jsx Phase 6: Q1/Q2 cinematic cards, localStorage
  MissionResult.jsx Phase 6: Passed/Failed flash + text overlay
  LandingPage.jsx   Phase 7: City bg zoom, GET THE WORK DONE, menu

/public
  /images           intro_city.jpg, loading_1-3.jpg, landing_city.jpg
  /sounds           siren_loop, star_ping, star_final_hit, warning_accept,
                    loading_ambience, mission_passed, mission_failed (.mp3)
  /fonts            ChaletLondon1960.woff2, ChaletComprime1960.woff2
```

## Phase Sequence

| # | Phase | Duration | Trigger |
|---|-------|----------|---------|
| 1 | Cold Boot | 1.5s | Auto |
| 2 | Wanted Stars | ~3.0s | Auto |
| 3 | City Reveal | 2.0s | Auto |
| 4 | Warning Screen | User input | ENTER key |
| 5 | Loading Flow | ~12s | Auto |
| 6 | Decision Q1 | User input | YES/NO |
| 6a | Mission Passed | ~3s | YES → Landing |
| 6b | Mission Failed + Q2 | User input | NO → Q2 |
| 6c | Q2 Result | ~3s | YES → Landing |
| 6d | Failed → Redirect | 1.2s | NO → Loading |
| 7 | Landing Page | ∞ | Persists |

## Decision Branch Logic

```
Q1: ARE YOU A PROGRAMMER?
  YES → MISSION PASSED (ACCESS GRANTED) → Landing
  NO  → MISSION FAILED (ACCESS DENIED)  → Q2

Q2: ARE YOU INTERESTED IN MY PROFILE?
  YES → MISSION PASSED (PORTFOLIO LOADED) → Landing
  NO  → MISSION FAILED (REDIRECTING…)    → Back to Loading
```

## localStorage Keys
- `programmerAnswer` — "yes" | "no"
- `profileInterest`  — "yes" | "no"

## Typography
- `ChaletLondon1960` — Headlines, decision questions, mission results
- `ChaletComprime1960` — Condensed UI: subtitles, loading bar, menu, HUD

## Audio Map

| File | Used In |
|------|---------|
| siren_loop.mp3 | Cold Boot → fades out after City Reveal |
| star_ping.mp3 | Stars 1–4 appear |
| star_final_hit.mp3 | Star 5 appears |
| warning_accept.mp3 | ENTER pressed on Warning screen |
| loading_ambience.mp3 | Loading screen (loops) |
| mission_passed.mp3 | Passed result overlay |
| mission_failed.mp3 | Failed result overlay |

## Running Locally
```bash
npm run dev
# Open http://localhost:3000
```
