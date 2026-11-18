#!/usr/bin/env node
/** KF-facing documentation page; original rich Robo docs builder is retained for compatibility. */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const ROOT=join(dirname(fileURLToPath(import.meta.url)),"..");
const tokens=JSON.parse(readFileSync(join(ROOT,"dist/tokens.json"),"utf8"));
const brands=JSON.parse(readFileSync(join(ROOT,"contracts/brands.json"),"utf8"));
const variants=JSON.parse(readFileSync(join(ROOT,"contracts/variants.json"),"utf8"));
const brand=tokens.brands["korn-ferry"];
if(!brand)throw new Error("Missing KF tokens; run npm run tokens.");
const colors=brand.palette;
const swatches=Object.entries(colors).map(([key,data])=>`<div class="swatch"><span style="background:${data.value}"></span><div><strong>${key}</strong><small>${data.value}</small></div></div>`).join("");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const variantsHtml=variants.variants.map(v=>`<article class="mode"><strong>${esc(v.label)}</strong><p>${esc(v.fit)}</p><code>${esc(v.id)}</code></article>`).join("");
const steps=["Start with the headline list","Select intent and layout","Build editable slides","QA sources and foot messages","Review rendered slides"].map((step,i)=>`<li><b>${i+1}.</b> ${esc(step)}</li>`).join("");
const page=`<!doctype html><html lang="en" data-brand="korn-ferry" data-theme="light">
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Korn Ferry Style — Design System</title>
<link rel="stylesheet" href="../dist/css/kf-design-system.css">
<style>
body{background:#fff;color:#17392E;font-family:Arial,"Yu Gothic",sans-serif;margin:0}
header{background:#053328;color:#fff;padding:72px clamp(24px,6vw,96px)}
header small{text-transform:uppercase;letter-spacing:.2em;color:#D4E7DD}
header h1{font-size:clamp(32px,4vw,54px);margin:20px 0}
header p{max-width:680px;line-height:1.65}
main{max-width:1180px;padding:52px 24px;margin:auto}
section{margin-bottom:52px}
h2{color:#00634F;border-bottom:2px solid #00634F;padding-bottom:14px}
.note{background:#F1F2F1;padding:17px;line-height:1.6}
.swatches{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px}
.swatch,.mode{border:1px solid #C5D7CD;padding:14px;background:#fff}
.swatch span{height:60px;display:block;border:1px solid #ddd;margin-bottom:12px}
.swatch strong,.swatch small{display:block}
.swatch small{color:#41564E;margin-top:5px}
.modes{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}
.mode p{color:#41564E;line-height:1.6}
code,pre{font-family:Consolas,monospace}
pre{white-space:pre-wrap;background:#E7F0E4;padding:20px}
li{margin:10px 0}
footer{border-top:1px solid #C5D7CD;padding:24px;color:#41564E}
</style>
<header><small>Design system · public-source adaptation</small><h1>Korn Ferry Style</h1>
<p>Presentation OS + web UI + interactive 3D demos. All capabilities retained; the active brand styling is Korn Ferry-inspired. This is not an official company template.</p></header>
<main><section><h2>Brand color palette</h2><div class="swatches">${swatches}</div></section>
<section><h2>Presentation variants</h2><div class="modes">${variantsHtml}</div></section>
<section><h2>Consulting workflow</h2><ol>${steps}</ol><p class="note">One conclusion per slide. A single takeaway in the lower gray band (two lines maximum). Make assumptions and sources explicit. Typography: Arial for Latin text and Yu Gothic system fallback for Japanese.</p></section>
<section><h2>Commands</h2><pre>npm run build
npm run check:contrast
npm run slides:qa
npm run slides:build:example
npm run slides:gallery
npm run 3d:test
# 3d:build requires pinned third-party checkout</pre></section>
<section><h2>Scope and limitations</h2><p>These colors and layout rules are drawn from public material and the user's guidance. The repository does not contain an authorized corporate PowerPoint master or official logo. The original codebase and tool directories remain for compatibility.</p></section>
</main><footer>© 2026 Korn Ferry — text-only placeholder; no official logo supplied.</footer></html>`;
mkdirSync(join(ROOT,"docs"),{recursive:true});
writeFileSync(join(ROOT,"docs/index.html"),page,"utf8");
console.log("WROTE docs/index.html (Korn Ferry Style)");
