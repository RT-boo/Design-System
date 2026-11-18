# Korn Ferry Style — Brand and Design Foundations

This repository applies a user-guided, public-reference Korn Ferry visual language to the existing presentation, web and 3D generation engines. It is not an exact reproduction of the internal corporate master template.

| Role | Color |
|---|---|
| Primary Forest Green | `#00634F` |
| Dark Forest Green | `#053328` |
| Light green / hypothesis boxes | `#E7F0E4` (approximate) |
| Gray foot-message band | `#F1F2F1` (approximate) |
| Optional pale pink | `#F5E7E9` (approximate) |

Use Arial for Latin text/numerals and Yu Gothic as the system Japanese fallback. PowerPoint is 16:9, with a conclusion-oriented title, clear evidence and source notes, at most one foot message in a gray band, and a consistent page/copyright/footer.

## Preserved workflows

- Presentation OS: `generator/`, `contracts/`, `AGENTS.md`, `grade/`.
- Frontend/UI: `src/css/` and `skills/robo-frontend-design/` (path kept for compatibility).
- Mechanical 3D: `skills/robo-3d-teardown/` (original model, WebGL and QA retained).

Both the light and dark themes are available as `data-brand="korn-ferry"`. The 3D bridge reads the same computed KF semantic tokens.

Original brand asset files and license notices remain subject to their previous rights. Legacy implementation paths are not an endorsement. No official KF logo artwork or proprietary font is distributed.
