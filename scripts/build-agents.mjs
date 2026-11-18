#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const ROOT=process.cwd();
const names=["layouts","components","variants","brands","storytelling","archetypes"];
const d=Object.fromEntries(names.map(name=>[name,JSON.parse(fs.readFileSync(path.join(ROOT,"contracts",name+".json"),"utf8"))]));
const createAgent=function createAgent(d){
 const {layouts,components,variants,brands,storytelling,archetypes}=d;
 const b=brands.brands[0];
 const lines=[
 "<!-- GENERATED from contracts/*.json by scripts/build-agents.mjs — do not edit by hand. -->",
 "# Korn Ferry Presentation OS — agent authoring contract",
 "",
 "The active brand is Korn Ferry. The existing editable PowerPoint, web UI and interactive 3D mechanisms are preserved. This is a public-source approximation, not an official internal KF template.",
 "",
 "## KF brand presentation standards",
 "- PowerPoint 16:9. Forest Green #00634F and Dark Forest Green #053328, white content backgrounds, Arial for Latin characters, and a Japanese system-font fallback.",
 "- Write the headline list first. A slide title must express the conclusion and be supported by its evidence.",
 "- One bottom takeaway band per content slide, no more than two lines; sources and assumptions must be visibly distinguished.",
 "- Footer convention: page number and copyright at lower left, Korn Ferry text-only marker at lower right. Do not fake the official logo.",
 "- No invented client data, results, quotes, sources, or internal brand assets. Use only authorized content.",
 "",
 "## Workflow",
 ...storytelling.workflow.map((x,i)=>`${i+1}. **${x.label}** — ${x.rule}`),
 "",
 "## Story-first headlines",
 ...storytelling.headline.rules.map(x=>"- "+x),
 "",
 "## Storyline",
 ...storytelling.storyline.rules.map(x=>"- "+x),
 "",
 "## Evidence",
 ...storytelling.evidence.rules.map(x=>"- "+x),
 "",
 "## Brand identity",
 `- Name: ${b.name}`,
 `- Essence: ${b.essence}`,
 `- Motif: ${b.motif}`,
 ...b.principles.map(x=>"- "+x),
 "",
 "## Variants",
 "| ID | Scheme | Use |",
 "|---|---|---|",
 ...variants.variants.map(v=>`| \`${v.id}\` | ${v.scheme} | ${v.fit} |`),
 "",
 "## 7 semantic renderer layouts",
 "| ID | Question | Required fields |",
 "|---|---|---|",
 ...layouts.layouts.map(x=>`| \`${x.id}\` | ${x.answers} | ${Object.entries(x.fields).filter(([,v])=>v.required).map(([k])=>k).join(", ")} |`),
 "",
 "## Communication intents",
 "| ID | Question |",
 "|---|---|",
 ...archetypes.intents.map(x=>`| \`${x.id}\` | ${x.question} |`),
 "",
 "## 48 composition archetypes",
 "Archetypes are planning guides; use an existing semantic renderer for each slide.",
 "| ID | Intent | Name | Render hints |",
 "|---|---|---|---|",
 ...archetypes.archetypes.map(x=>`| \`${x.id}\` | \`${x.intent}\` | ${x.label} | ${x.rendererHints.join(", ")} |`),
 "",
 "## Reusable components",
 ...components.components.map(x=>`- \`${x.id}\`: ${x.purpose}`),
 "",
 "## Web / 3D",
 "- For app interfaces, use `data-brand=\"korn-ferry\"` in the existing token-driven CSS engine. The path `skills/robo-frontend-design/` is retained for compatibility.",
 "- For 3D demos, run `npm run 3d:test`; the existing Three.js/teardown workflow and mechanics are preserved. The path `skills/robo-3d-teardown/` is retained for compatibility.",
 "- Original company logos in historical assets must not appear in new KF-facing outputs.",
 "",
 "## QA commands",
 "```bash",
 "npm run build",
 "npm run check:contrast",
 "npm run slides:contracts:check",
 "npm run slides:qa",
 "npm run slides:gallery",
 "npm run 3d:test",
 "```",
 ""
 ];
 return lines.join("\n")+"\n";
};
const output=createAgent(d);
const file=path.join(ROOT,"AGENTS.md");
if(process.argv.includes("--check")){
  if(!fs.existsSync(file)||fs.readFileSync(file,"utf8")!==output){
    console.error("AGENTS.md out of sync with contracts. Run npm run slides:contracts");
    process.exit(1);
  }
  console.log("AGENTS.md is up to date.");
}else{
  fs.writeFileSync(file,output,"utf8");
  console.log("WROTE AGENTS.md");
}
