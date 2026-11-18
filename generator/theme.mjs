import fs from "node:fs";
import { fileURLToPath } from "node:url";
export const BRAND = JSON.parse(fs.readFileSync(fileURLToPath(new URL("../contracts/brand.json",import.meta.url)),"utf8"));
export function loadTheme(meta={}){
 if(meta.brand!=="korn-ferry")throw new Error("meta.brand must be korn-ferry.");
 if(meta.preset&&!["kf-core","kf-cover"].includes(meta.preset))throw new Error("Unknown KF preset: "+meta.preset);
 return {colors:BRAND.colors,fonts:BRAND.fonts,design:BRAND.presentation};
}
