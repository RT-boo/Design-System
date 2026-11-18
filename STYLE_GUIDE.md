# Korn Ferry consulting presentation style

## Workflow
1. Build a `meta.headlineList` of all content-slide titles and check the argument by reading titles alone.
2. Choose a layout for each slide based on the question it answers.
3. Write editable slide content; distinguish fact, estimate, assumption, option and recommendation.
4. QA content, evidence and graphic density.

## Design
- Wide 16:9, white content pages, dark green cover.
- Forest `#00634F`, Dark Forest `#053328`; light green for labels / hypothesis boxes; gray foot-message band; pale pink optional.
- Arial for Latin text and numerals. Japanese fallback Yu Gothic, replace with internal theme font if known.
- Minimum body target 12–14 pt; headline at least 20 pt; subtitle about 12 pt; small footer/notes.
- Footer: page and © 2026 Korn Ferry on left; text-only brand marker right.
- Avoid decorative Robo symbols, grids, fake monogram, and compressed unreadable slides.

## Slide fields
All layouts accept `title`, `subtitle`, `section`, `source` and `footMessage` unless intentionally omitted on cover / appendix / reference.
- `cover`: title, subtitle, clientName, projectName, date, materialType
- `agenda`: items (strings or {title, level})
- `text`: blocks ({heading, items} or {heading, body})
- `comparison`: columns (exactly two, {title, points})
- `matrix`: rows (three labels), columns (three labels), cells (3×3 strings)
- `group-table`: headers and rows (arrays of strings)
- `schedule`: periods and workstreams ({name, active:[indices], note})
- `costs`: items ({label, amount, basis}) and optional total
- `team`: roles ({title, name?, parent?, responsibility?})
- `appendix`: title only; `reference`: title, notes
- `statement`: body and optional proof
- `metrics`: metrics ({label,value,note}) up to four
- `process`: steps ({title,body}) up to six
- `architecture`: layers ({title,nodes})

## QA
- Do titles alone tell a logical storyline?
- Are evidence and assumptions labeled, with visible sources?
- Is the deck free from old brand references?
- Are headings, left page number, copyright and right text marker consistent?
- Is each bottom foot message one point, within two lines?
- Are layout types, brand, headlineList and content required fields valid?
