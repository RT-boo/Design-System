# Korn Ferry Style — Design System

A **KF-style rebrand of the original full-featured system**. All the existing capabilities remain: websites and app UI, accessible design tokens, editable PowerPoint generation, 7 semantic slide layouts / 48 composition archetypes, visual QA, interactive 3D demos, mechanical simulations and automated tests.

**This is based on public Korn Ferry material and a user-supplied consultant style brief, not an official corporate PowerPoint master.** No licensed corporate logo artwork, font files, internal client information or endorsement is included.

## Quick start

```bash
npm install
npm test
npm run slides:build:example
npm run slides:gallery
npm run docs
npm start
```

The editable sample deck is written to `generator/output/kf-example-deck.pptx`. For web UI, use `<html data-brand="korn-ferry" data-theme="light">` or `data-theme="dark"`. The branded stylesheet is `dist/css/kf-design-system.css`; the old CSS file path is also written for compatibility.

## Interactive 3D is preserved

`npm run 3d:test` checks the mechanism and theme bridge. `npm run 3d:build` and `npm run 3d:qa` require the reviewed pinned external runtime, as before; see `skills/robo-3d-teardown/demo/README.md`. The Three.js scene, model, controls, exploded/cutaway views, accessibility handling and screenshot QA have not been deleted.

## Visual language

- Forest Green `#00634F`, Dark Forest Green `#053328`.
- White slide bodies, restrained light-green labels and gray takeaway band; pale pink only sparingly.
- Arial for Latin text and numbers; Yu Gothic system fallback for Japanese.
- Conclusion-oriented slide headlines, single takeaway per content slide, explicit sources.
- Text-only “Korn Ferry” brand marker in outputs until authorized logo assets are provided.

The existing source paths and older brand-token files remain internally for backward compatibility, but new docs and examples use KF styling. The original `LICENSE` and repository history continue to apply to the code and historical assets. This does not grant rights to use protected trademarks or redistribute proprietary historical content. Do not commit confidential client data to a public repository.

See [KF brand guidance](BRAND_FOUNDATIONS.md), [skills](skills/README.md) and [sources](KF_SOURCES.md).
