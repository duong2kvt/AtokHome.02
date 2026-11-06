# Atok Home 02 · Mobile PWA
Installable mobile web app implemented from Figma section Demo -02 (2060:70684), with the prototype starting at 1984:37146.

## Cloud workflow
GitHub Actions installs dependencies, materializes original Figma assets once, commits the assets and lockfile, runs the state-machine tests, builds the PWA and deploys it to GitHub Pages. No local build is required.

Preview: https://duong2kvt.github.io/AtokHome.02/
For Vercel, import this repository with Vite, build command `npm run build`, output `dist`, and leave PAGES_BASE unset.

## Product flow
Home → Details/Quest → All quest → Complete 3 Personal missions → Earn more ATOK sheet → Watch ad → Mission completion reward (1.624) → Collect → Quest completion reward (0.45) → Collect → completed quest list.

Reward animation uses the original Figma node tracks: 5-second quest reward timeline, 4-second return-to-list timeline, numeric reward text preset, and 2-second looping token. Reward animations play once per transition; reduced-motion users receive final states without motion.

## Install
On Android/Chromium, use Install app when available or the browser's install menu. On iPhone, open in Safari and use Share → Add to Home Screen. A manifest, original ATOK app icons, safe-area layout and a versioned offline service worker are included.

## Review
Open `?review=1` for reset, reward replay, and simulated-ad failure controls.

## Important scope
This is a functional prototype, not a real reward settlement service. Watch ad follows the supplied prototype directly with a simulated completion; no live advertising SDK or wallet transaction runs. Other game/referral destinations are not provided in this section. See public/behavior-specification.md for source evidence and open rules.

## Source
- src/main.tsx: mobile app and flow wiring
- src/flow.mjs: pure state transitions, receipt and collect guards
- src/quests.ts: exact visible quest copy and rewards
- src/design: design compositions, original motion tracks and resolved typography
- public/assets: original source assets and exported static quest illustrations
- tests/flow.test.mjs: transition and replay tests
- .github/workflows/cloud-build.yml: cloud tests, build and deployment
