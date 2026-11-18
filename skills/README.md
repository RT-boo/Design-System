# Design capabilities — Korn Ferry style

The original functionality is retained. **Only the active visual brand is Korn Ferry.** For backwards compatibility, the original skill directory paths remain unchanged.

## Web / frontend design

Use [frontend design skill](robo-frontend-design/SKILL.md) and `data-brand="korn-ferry"`. The token pipeline supports light and dark themes. Build with `npm run build`, preview with `npm start`, and run contrast checks with `npm run check:contrast`.

## 3D visualizations

Use [interactive 3D teardown skill](robo-3d-teardown/SKILL.md). Orbit, explodes, cutaway, live model state, replay, WebGL and mobile/desktop QA are preserved.

```bash
npm run tokens
node skills/robo-3d-teardown/scripts/export-theme.mjs --brand korn-ferry --theme light
npm run 3d:test
# 3d:build and 3d:qa require the pinned upstream dependency; see demo README.
```

## PowerPoint slides

Use `AGENTS.md`, `contracts/` and `generator/`. Editable PowerPoint generation, story-first layouts, archetypes, PDF/PNG rendering and visual checks remain available.

This is a **public-source, KF-inspired** theme; it does not bundle a licensed internal template, official wordmark artwork, or trademark rights.
