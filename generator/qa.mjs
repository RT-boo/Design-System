import fs from "node:fs";
import { fileURLToPath } from "node:url";
const definitions=JSON.parse(fs.readFileSync(fileURLToPath(new URL("../contracts/layouts.json",import.meta.url)),"utf8")).layouts;
export const LAYOUTS=new Map(definitions.map(l=>[l.id,l]));
const GENERIC=/^(概要|目的|結果|課題|まとめ|説明|背景|総括|overview|results|summary|introduction)$/i;
const LEGACY=/robo[ _-]?(?:co[ _-]?op|lab|university)|co[ _-]?op[ _-]?lab|support together/i;
export const contentSlide=s=>!["cover","agenda","appendix","reference"].includes(s.type);
export function validateDeck(deck){
 const errors=[],warnings=[];
 if(!deck||typeof deck!=="object") return {errors:["Deck must be an object."],warnings};
 if(!deck.meta?.title) errors.push("meta.title is required");
 if(deck.meta?.brand!=="korn-ferry") errors.push("meta.brand must be korn-ferry");
 if(deck.meta?.preset&&!["kf-core","kf-cover"].includes(deck.meta.preset)) errors.push("Only kf-core and kf-cover are supported");
 if(!Array.isArray(deck.slides)||!deck.slides.length) errors.push("slides must be a non-empty array");
 if(errors.length) return {errors,warnings};
 if(LEGACY.test(JSON.stringify(deck)))errors.push("Previous brand name appears in deck content");
 const story=deck.slides.filter(contentSlide);
 if(!Array.isArray(deck.meta.headlineList)||deck.meta.headlineList.length!==story.length) errors.push("meta.headlineList must include each content slide title in order");
 else story.forEach((s,i)=>{if(deck.meta.headlineList[i]!==s.title) errors.push("headlineList mismatch at content slide "+(i+1));});
 if(deck.slides[0].type!=="cover") warnings.push("The first slide is not a cover");
 const seen=new Set();
 deck.slides.forEach((s,i)=>{
   const id=i+1,layout=LAYOUTS.get(s.type);
   if(!layout){errors.push("Slide "+id+": unsupported layout "+s.type);return;}
   for(const key of layout.required){
     const v=s[key];
     if(v===null||v===undefined||v===""||(Array.isArray(v)&&!v.length))errors.push("Slide "+id+": missing "+key);
   }
   if(typeof s.title==="string"){
     if(seen.has(s.title))warnings.push("Slide "+id+": repeated title");seen.add(s.title);
     if(contentSlide(s)&&GENERIC.test(s.title.trim()))warnings.push("Slide "+id+": topic-only title; write a conclusion");
     if(s.title.length>76)warnings.push("Slide "+id+": headline may overflow at 20pt");
   }
   if(s.footMessage!==undefined){
      if(typeof s.footMessage!=="string")errors.push("Slide "+id+": footMessage must be a string");
      else if(s.footMessage.split("\\n").length>2||s.footMessage.length>90)errors.push("Slide "+id+": footMessage must fit two lines");
   }else if(contentSlide(s))warnings.push("Slide "+id+": no footMessage");
   if(s.type==="comparison"&&(!Array.isArray(s.columns)||s.columns.length!==2)) errors.push("Slide "+id+": comparison requires exactly two columns");
   if(s.type==="matrix"&&(!Array.isArray(s.rows)||s.rows.length!==3||!Array.isArray(s.columns)||s.columns.length!==3||!Array.isArray(s.cells)||s.cells.length!==3||!s.cells.every(row=>Array.isArray(row)&&row.length===3)))errors.push("Slide "+id+": matrix requires 3x3 cells and row/column labels");
   if(s.type==="group-table"&&(!Array.isArray(s.headers)||!Array.isArray(s.rows)||s.headers.length>5||s.rows.length>7))errors.push("Slide "+id+": group table maximum five columns / seven rows");
   if(s.type==="schedule"&&(!Array.isArray(s.periods)||s.periods.length>8||!Array.isArray(s.workstreams)||s.workstreams.length>6))errors.push("Slide "+id+": schedule max eight periods / six workstreams");
   if(s.type==="metrics"&&(!Array.isArray(s.metrics)||s.metrics.length>4))errors.push("Slide "+id+": four metrics maximum");
   if(s.type==="process"&&(!Array.isArray(s.steps)||s.steps.length>6))errors.push("Slide "+id+": six steps maximum");
   if(s.type==="costs"&&!s.source)warnings.push("Slide "+id+": costs need source / assumptions");
   if(s.source&&String(s.source).length>140)warnings.push("Slide "+id+": source text may overflow");
 });
 return {errors,warnings};
}
export const formatQa=r=>[...r.errors.map(e=>"FAIL "+e),...r.warnings.map(e=>"WARN "+e),r.errors.length?"FAIL "+r.errors.length+" errors":"PASS "+r.warnings.length+" warnings"].join("\\n");
