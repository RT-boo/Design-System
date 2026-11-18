#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import PptxGenJS from "pptxgenjs";
import {loadTheme} from "./theme.mjs";
import {validateDeck,formatQa} from "./qa.mjs";
import {RENDERERS} from "./renderers.mjs";
const input=process.argv[2],output=process.argv[3]||"generator/output/kf-proposal.pptx";
if(!input){console.error("Usage: node generator/render-deck.mjs <deck.json> [output.pptx]");process.exit(2);}
const deck=JSON.parse(fs.readFileSync(input,"utf8"));const qa=validateDeck(deck);
console.log(formatQa(qa));if(qa.errors.length)process.exit(1);
const theme=loadTheme(deck.meta),pptx=new PptxGenJS();
pptx.layout="LAYOUT_WIDE";
pptx.author=deck.meta.author||"Consulting team";pptx.company="Korn Ferry";
pptx.subject=deck.meta.projectName||deck.meta.title;pptx.title=deck.meta.title;
pptx.lang=deck.meta.language==="en"?"en-US":"ja-JP";
pptx.theme={headFontFace:deck.meta.language==="en"?"Arial":theme.fonts.japanese,bodyFontFace:deck.meta.language==="en"?"Arial":theme.fonts.japanese,lang:pptx.lang};
deck.slides.forEach((spec,index)=>{const slide=pptx.addSlide();RENDERERS[spec.type]({pptx,slide,spec,index,meta:deck.meta,theme});});
fs.mkdirSync(path.dirname(path.resolve(output)),{recursive:true});
await pptx.writeFile({fileName:path.resolve(output)});
console.log("WROTE "+path.resolve(output));
