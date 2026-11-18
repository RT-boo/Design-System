#!/usr/bin/env node
import fs from "node:fs";
import {validateDeck,formatQa} from "./qa.mjs";
const file=process.argv[2];
if(!file){console.error("Usage: node generator/qa-deck.mjs <deck.json>");process.exit(2);}
const result=validateDeck(JSON.parse(fs.readFileSync(file,"utf8")));
console.log(formatQa(result));process.exit(result.errors.length?1:0);
