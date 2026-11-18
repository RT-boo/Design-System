---
name: kf-3d-teardown-compat
description: Build KF-styled interactive 3D mechanical explainers while keeping the original WebGL rendering, model and QA pipeline. The directory name is retained for backward compatibility.
---

# Korn Ferry 3D Teardown

Build an inspectable, usable 3D mechanism demo while keeping **Korn Ferry Style Design System** the authority for visual identity. This is a KF-specific integration workflow inspired by [elvarofficial/teardown](https://github.com/elvarofficial/teardown), **not** a bundled copy of its runtime. Its executable generator and examples must be installed separately after source/security review. See `references/upstream.md`.

## 1. Scope and source of truth

- This skill concerns **mechanical or spatial explanations with meaningful 3D interaction**. Do not add 3D to a slide or landing page just for decoration.
- For ordinary web UI use `skills/robo-frontend-design/SKILL.md`; for editable PowerPoint use root `AGENTS.md` and `contracts/`. This skill does not modify those systems.
- Read `tokens/brands/korn-ferry.json`, `tokens/core.json`, `BRAND_FOUNDATIONS.md`, and `contracts/brands.json`. Use the KF light/dark semantic theme appropriate to the requested 3D UI.
- Never copy another brand's logo, palette, typeface, or trademark into the output. Use an authorized logo asset only; otherwise use a clearly text-only Korn Ferry label without claiming to reproduce the official mark.

## 2. Require engineering evidence before modeling

1. Identify the user task, target audience, brand, device(s), reference asset rights, and whether the result is a learning illustration, product demo, or verified engineering model.
2. Ask for one real reference photo/cutaway **and** mechanism information such as drawings, dimensions, ratios, linkage constraints and degrees of freedom when accuracy matters. If unavailable, label unknown internals **illustrative / inferred**, never measured or verified.
3. Define a **single source-of-truth mechanism state** (angle, stroke, velocity, etc.). Every part transform, numeric gauge, callout, and timeline event must read this same model. No independently hardcoded gauge animation.
4. Confirm the operation and purpose of each detachable subsystem. Keep a manifest mapping part ID, name, input, motion range, and evidence source.
5. Never present an image-generated internal assembly as actual engineering documentation, safety instruction, or evidence of physical feasibility without independent validation.

## 3. Build a live, inspectable scene

Use **Three.js** or a suitable existing renderer. For the integrated Robo example, use `demo/main.js` and the external runtime build pinned in `references/upstream.md`; `npm run 3d:build` runs its build pipeline after a separately reviewed upstream checkout is provided via `TEARDOWN_DIR`. Do not claim the third-party runtime is vendored.

- Implement orbit/zoom, component selection, exploded/cutaway view, reset, play/pause, and explicit navigation between subsystems.
- Keep the moving component visibly identifiable; connect changes to real operational state and readable callouts.
- Stage **and HUD** must use brand/theme tokens. Resolve tokens via `npm run tokens`, then export a portable theme with `node skills/robo-3d-teardown/scripts/export-theme.mjs --brand korn-ferry --theme light --out kf-3d-theme.json`. See `references/brand-bridge.md`.
- Follow `prefers-reduced-motion`, keyboard focus, meaningful control labels, and touch targets. Provide a static fallback or transcript where 3D is unavailable.
- Prefer progressive loading and quality tiers for mobile/integrated GPUs; do not assume 60 fps or sub-1 MB size without measurement.

## 4. Review before delivery

- Compare reference image and renders side by side. Inspect overview, cutaway, exploded, and at least one active pose; review actual rendered images, not just source code.
- Validate dimensions and one complete mechanism cycle. Check part contact, collisions, mesh clipping, labels, and state/gauge synchronization.
- Test keyboard and mobile interaction, device/GPU performance, contrast and legibility, reduced motion, and offline operation **only if offline is a requirement**.
- If recording a film, use the same model/timeline as the live app; review the captured frames. The upstream tool may require Chromium, ffmpeg and Python.
- Report what is **verified**, **assumed**, and **not tested**, including the original reference and third-party dependency versions.

## Deliverables

Provide (a) the live interactive HTML/app or its verified build path, (b) a part/behavior manifest, (c) the KF theme and exported color roles, (d) screenshots or a verified demo, and (e) the QA/accuracy caveats. Only offer a video when capture has actually succeeded. For a live example, run `npm run 3d:test`, then `npm run 3d:build` and `npm run 3d:qa` with an authorized upstream checkout; see `demo/README.md`. The GitHub Actions workflow `robo-3d-teardown.yml` produces and tests the self-contained offline HTML.

Example request:

> Build a Korn Ferry **Forest Green** interactive 3D teardown of this robotic arm, using the attached photo and manufacturer's joint dimensions. Let learners isolate the motor, gear and gripper. Mark undocumented internal geometry as illustrative; keep the UI in our Korn Ferry light theme and inspect mobile screenshots.

## Attribution and installation boundary

Original inspiration/runtime: `elvarofficial/teardown` (MIT; author Elvar and whaleyxbt), with some CC0 audio samples. This wrapper does not vendor third-party executable code or assets. See `references/upstream.md` for pinned reviewed upstream version and license obligations. Review upgrades before running third-party install scripts.
