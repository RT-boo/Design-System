#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import {spawnSync} from "node:child_process";
const root=process.cwd(),source=path.join(root,"generator/examples/kf-proposal.json");
const out=path.join(root,"generator/output/kf-gallery.pptx");
const result=spawnSync(process.execPath,[path.join(root,"generator/render-deck.mjs"),source,out],{stdio:"inherit"});
if(result.status!==0)process.exit(result.status||1);
console.log("Gallery PPTX: "+out);
