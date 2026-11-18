<!-- GENERATED from contracts/*.json by scripts/build-agents.mjs — do not edit by hand. -->
# Korn Ferry Presentation OS — agent authoring contract

The active brand is Korn Ferry. The existing editable PowerPoint, web UI and interactive 3D mechanisms are preserved. This is a public-source approximation, not an official internal KF template.

## KF brand presentation standards
- PowerPoint 16:9. Forest Green #00634F and Dark Forest Green #053328, white content backgrounds, Arial for Latin characters, and a Japanese system-font fallback.
- Write the headline list first. A slide title must express the conclusion and be supported by its evidence.
- One bottom takeaway band per content slide, no more than two lines; sources and assumptions must be visibly distinguished.
- Footer convention: page number and copyright at lower left, Korn Ferry text-only marker at lower right. Do not fake the official logo.
- No invented client data, results, quotes, sources, or internal brand assets. Use only authorized content.

## Workflow
1. **Frame the decision** — Define the audience, decision or action, evidence boundary, and required output before slide design.
2. **Write the governing claim** — State the deck conclusion first, then write one conclusion-oriented headline per slide before drawing.
3. **Build the headline ledger** — For multi-slide decks, verify that headlines form a coherent argument and that peer slides use one consistent split.
4. **Choose intent and archetype** — Select the slide's communication intent first, then select a numbered archetype, then map it to the closest supported semantic layout.
5. **Apply semantic layout and brand grammar** — Use the semantic layout as the rendering contract and the Korn Ferry brand as the visual grammar.
6. **Measure and verify** — Run structural QA, render the deck, and inspect overflow, collisions, hierarchy, consistency, and evidence traceability.

## Story-first headlines
- One slide has one governing message.
- Prefer a complete claim with an explicit judgment or implication over a topic label.
- Keep evidence and judgment in the same headline when it remains readable.
- Use sentence-pattern variety across adjacent slides.
- Do not use the headline to count elements; use it to state what the elements mean.
- Move secondary evidence into the body before weakening the claim.
- Draft a complete headline list before composing the PowerPoint.

## Storyline
- Headlines read alone should reconstruct the core argument.
- Adjacent slides should have an explicit logical bridge such as cause, consequence, contrast, or evidence.
- Sibling slides should share one segmentation logic and comparable granularity.
- Decision decks should identify the questions that require an explicit choice.
- The final decision slide should resolve decisions, owners or timing rather than merely summarize.

## Evidence
- Every material number needs a source, a stated calculation basis, or an explicit placeholder.
- Facts, assumptions, estimates, recommendations, and decisions must remain distinguishable.
- Each major clause in a headline should be supported by a visible body element.
- Do not fabricate screenshots, quotes, system output, customer names, or measured results.
- For client deliverables, separate estimated figures, facts, assumptions, options, and decisions.

## Brand identity
- Name: Korn Ferry
- Essence: Clear, human-centered consulting recommendations supporting organizational decisions.
- Motif: kf-rule
- Draft the headline list before slide composition.
- Use conclusion-oriented titles and a single takeaway in the bottom band.
- Use simple geometry, generous whitespace and Arial in Latin text.
- Use Forest Green for key structure and Dark Forest Green for strong brand framing.
- Do not represent public-source approximations as official internal templates.

## Variants
| ID | Scheme | Use |
|---|---|---|
| `kf-core` | light | Client consulting and board/leadership decision decks. |
| `kf-cover` | dark | Green-first covers, section dividers and leadership communication. |

## 7 semantic renderer layouts
| ID | Question | Required fields |
|---|---|---|
| `cover` | What is this presentation about? | title |
| `statement` | What is the single idea the audience should remember? | title, body |
| `metrics` | What changed numerically or operationally? | title, metrics |
| `comparison` | How do the options differ? | title, columns |
| `process` | How does the work move from start to finish? | title, steps |
| `architecture` | What connects to what? | title, layers |
| `demo` | What should the audience notice during the demo? | title, steps, screen |

## Communication intents
| ID | Question |
|---|---|
| `decide` | What should the audience decide, prioritize, or carry forward? |
| `decompose` | What creates the total, loss, value, or outcome? |
| `compare` | How do alternatives differ on a common basis? |
| `change` | What changes while the frame of reference stays stable? |
| `relationship` | Where do entities sit and how are variables or groups related? |
| `time` | How does work, governance, or value move over time? |
| `map` | How is a system, organization, ecosystem, or value chain structured? |

## 48 composition archetypes
Archetypes are planning guides; use an existing semantic renderer for each slide.
| ID | Intent | Name | Render hints |
|---|---|---|---|
| `01` | `decide` | Section / navigation | cover, statement |
| `02` | `decide` | Executive decision summary | statement, comparison |
| `03` | `decide` | Decision close | statement, process |
| `04` | `decide` | Repeatable catalog | comparison |
| `05` | `decide` | KPI timeline | metrics, process |
| `06` | `decide` | Priority bubble map | comparison, metrics |
| `07` | `decompose` | Waterfall bridge | metrics, process |
| `08` | `decompose` | Funnel loss | process, metrics |
| `09` | `decompose` | Value-chain economics | process, architecture |
| `10` | `decompose` | Distribution cascade | process, metrics |
| `11` | `decompose` | Logic tree | architecture |
| `12` | `decompose` | Formula driver tree | architecture, metrics |
| `13` | `decompose` | Active vs waiting band | metrics, comparison |
| `46` | `decompose` | Vertical issue tree | architecture |
| `14` | `compare` | Aligned small multiples | comparison, metrics |
| `15` | `compare` | Shared-process comparison | comparison, process |
| `16` | `compare` | Common-scale structure | comparison |
| `17` | `compare` | Mirrored flow | comparison, process |
| `18` | `compare` | Mirrored organization | comparison, architecture |
| `19` | `compare` | Risk footprint map | comparison, metrics |
| `45` | `compare` | Evidence-to-implication table | comparison, statement |
| `20` | `change` | Anchored before / after | comparison |
| `21` | `change` | Area recomposition | comparison, metrics |
| `22` | `change` | Assumption shift table | comparison, statement |
| `23` | `relationship` | Area-efficiency map | metrics, comparison |
| `24` | `relationship` | Quantitative area grid | metrics, comparison |
| `25` | `relationship` | Trajectory scatter | metrics |
| `26` | `relationship` | Cycle scatter | metrics |
| `27` | `relationship` | Reference-line scatter | metrics |
| `28` | `relationship` | Scatter small multiples + table | metrics, comparison |
| `29` | `relationship` | Interval scatter | metrics |
| `30` | `relationship` | Overlap / Venn | architecture, comparison |
| `31` | `relationship` | Actual-to-forecast stacked area | metrics |
| `32` | `relationship` | Decision 2x2 | comparison |
| `33` | `relationship` | Lifecycle + policy | process, comparison |
| `34` | `relationship` | Complementary fit | comparison, architecture |
| `35` | `time` | Horizon swimlanes | process |
| `36` | `time` | Modular plan | process |
| `37` | `time` | Phase plan | process |
| `38` | `time` | Dual-level plan | process, architecture |
| `39` | `time` | Governance handoffs | process, architecture |
| `40` | `time` | Value / cash crossing | process, architecture |
| `47` | `time` | Role swimlane flow | process, demo |
| `41` | `map` | Layered ecosystem map | architecture |
| `42` | `map` | Value-chain coverage map | architecture, process |
| `43` | `map` | Organization classification map | architecture |
| `44` | `map` | Overview + detail zoom | architecture, comparison |
| `48` | `map` | Stakeholder network | architecture |

## Reusable components
- `code-header`: Machine-readable section context.
- `metric-card`: One metric plus a short interpretation.
- `terminal-window`: Show real agent, API, prompt, command, or system activity.
- `system-node`: Represent a human, agent, service, data source, or system in a flow.
- `evidence-strip`: Show source, assumption, status, or evidence metadata at low visual weight.

## Web / 3D
- For app interfaces, use `data-brand="korn-ferry"` in the existing token-driven CSS engine. The path `skills/robo-frontend-design/` is retained for compatibility.
- For 3D demos, run `npm run 3d:test`; the existing Three.js/teardown workflow and mechanics are preserved. The path `skills/robo-3d-teardown/` is retained for compatibility.
- Original company logos in historical assets must not appear in new KF-facing outputs.

## QA commands
```bash
npm run build
npm run check:contrast
npm run slides:contracts:check
npm run slides:qa
npm run slides:gallery
npm run 3d:test
```

