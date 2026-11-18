# Korn Ferry Style — Consulting Presentation System

This is a **complete Korn Ferry-style replacement of the working tree** of the original multi-brand design system. It is focused on editable client-facing PowerPoint slides and a consistent web/CSS visual language. No active Robo-branded themes, assets, demo content, or generators remain in this tree.

**Status:** independently implemented, public-source brand-inspired approximation, **not** an official internal Korn Ferry template. The wordmark is rendered as editable text because no official logo artwork is bundled. Project history still preserves the original fork; repository metadata may continue to show that relationship.

## Defaults
- 16:9 PowerPoint, white content pages and Dark Forest Green covers.
- Forest Green `#00634F`, Dark Forest `#053328`.
- Arial for Latin/number text and Yu Gothic as Japanese fallback.
- Action-oriented headlines, explicit sources, restrained light green and pink.
- Gray foot-message band, one message per content slide, two lines maximum.
- Bottom-left page number / copyright; bottom-right text-only Korn Ferry stand-in.

## Usage

```bash
npm install
npm run check
npm run slides:build:example
npm run slides:gallery
```

An editable PPTX example is written to `generator/output/kf-proposal.pptx`. To use your own deck, edit `generator/examples/kf-proposal.json`, then run:

```bash
node generator/qa-deck.mjs my-deck.json
node generator/render-deck.mjs my-deck.json my-deck.pptx
```

The code renders 15 layouts: cover, agenda, text, comparison, matrix, group table, schedule, costs, team, appendix, reference, statement, metrics, process and architecture. Layout and brand contracts live in `contracts/`; web CSS in `src/css/`.

## Source & limitations
See `SOURCES.md` and `STYLE_GUIDE.md`. Screenshot-derived rules are user-supplied. Colors and Arial are also supported by official publicly reachable brand guidance. The additional light-green/gray/pink tones and exact positioning are implementation approximations. This is **not** a substitute for a licensed internal template or official logo assets.

Do not put client-confidential details or internal files in a public repository. Check the repository's visibility before committing live project content.
