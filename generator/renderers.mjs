// All visual elements remain editable PowerPoint text or shapes. No external brand artwork.
const W=13.333,H=7.5;
function txt(slide,value,x,y,w,h,ctx,options={}){
 const {theme,meta}=ctx;
 slide.addText(String(value??""),{x,y,w,h,margin:0,color:theme.colors.text,fontSize:13,breakLine:false,fit:"shrink",fontFace:meta.language==="en"?"Arial":theme.fonts.japanese,...options});
}
function rect(pptx,slide,x,y,w,h,fill,line){
 slide.addShape(pptx.ShapeType.rect,{x,y,w,h,rectRadius:0,fill:{color:fill},line:{color:line||fill,width:line?0.6:0}});
}
function rule(pptx,slide,x,y,w,color,width=1){slide.addShape(pptx.ShapeType.line,{x,y,w,h:0,line:{color,width}});}
function base({pptx,slide,spec,index,theme,meta},cover=false){
 const c=theme.colors;slide.background={color:cover?c.darkForest:c.white};
 if(cover)return;
 txt(slide,spec.section||"KORN FERRY  |  CONSULTING",0.58,0.23,10,0.2,{theme,meta},{fontSize:9,color:c.forest,bold:true});
 txt(slide,spec.title,0.58,0.6,12.1,0.75,{theme,meta},{fontSize:22,bold:true,color:c.forest});
 if(spec.subtitle)txt(slide,spec.subtitle,0.59,1.39,12,0.32,{theme,meta},{fontSize:12,color:c.muted});
 rule(pptx,slide,0.58,1.81,12.18,c.border,0.8);
 if(spec.footMessage){
   rect(pptx,slide,0.58,6.3,12.17,0.43,c.grayBand);
   txt(slide,spec.footMessage,0.8,6.35,11.68,0.32,{theme,meta},{fontSize:12,color:c.darkForest,bold:true});
 }
 if(spec.source)txt(slide,"出典: "+spec.source,0.58,6.84,11.6,0.19,{theme,meta},{fontSize:8,color:c.muted});
 rule(pptx,slide,0.58,7.065,12.18,c.border,0.5);
 txt(slide,String(index+1).padStart(2,"0")+"  |  © "+(meta.copyrightYear||"2026")+" Korn Ferry",0.58,7.15,5.6,0.2,{theme,meta},{fontSize:8,color:c.muted});
 txt(slide,"Korn Ferry",10.72,7.11,2.0,0.25,{theme,meta},{fontSize:14,bold:true,color:c.forest,align:"right"});
}
function panel(pptx,slide,theme,x,y,w,h,light=false){rect(pptx,slide,x,y,w,h,light?theme.colors.lightGreen:theme.colors.white,theme.colors.border);}
function list(slide,items,x,y,w,ctx,{fontSize=13,step=0.55,max=7}={}){
 (items||[]).slice(0,max).forEach((v,i)=>txt(slide,"• "+(typeof v==="string"?v:v.title||v.body||""),x,y+i*step,w,step-0.06,ctx,{fontSize,color:ctx.theme.colors.text}));
}
export function cover(ctx){
 const{pptx,slide,spec,meta,theme}=ctx,c=theme.colors;base(ctx,true);
 rect(pptx,slide,0,0,0.22,H,c.forest);
 rule(pptx,slide,0.78,1.15,3.7,c.colors?.forest||c.forest,3);
 txt(slide,"Korn Ferry",0.78,0.54,7.3,0.55,ctx,{fontSize:26,bold:true,color:c.white});
 txt(slide,spec.title,0.78,1.62,11.55,1.55,ctx,{fontSize:34,bold:true,color:c.white});
 txt(slide,spec.subtitle||meta.projectName||"",0.8,3.55,10.9,0.72,ctx,{fontSize:17,color:c.white});
 txt(slide,(spec.clientName||meta.clientName||"")+"    "+(spec.materialType||meta.materialType||""),0.8,5.4,10.5,0.38,ctx,{fontSize:12,color:c.white});
 txt(slide,spec.date||meta.date||"",0.8,6.2,6.4,0.3,ctx,{fontSize:12,color:c.white});
}
export function agenda(ctx){
 const{slide,spec,theme,pptx}=ctx;base(ctx);
 (spec.items||[]).slice(0,7).forEach((item,i)=>{
 const title=typeof item==="string"?item:item.title; const level=typeof item==="string"?0:(item.level||0);
 const y=2.1+i*0.54;
 txt(slide,String(i+1).padStart(2,"0"),0.85+level*0.32,y,0.55,0.4,ctx,{fontSize:13,bold:true,color:theme.colors.forest});
 txt(slide,title,1.52+level*0.32,y,10.7-level*0.32,0.44,ctx,{fontSize:15-level,color:theme.colors.text});
 rule(pptx,slide,0.82,y+0.47,11.55,theme.colors.border,0.4);
 });
}
export function text(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 (spec.blocks||[]).slice(0,3).forEach((b,i)=>{
 const y=2.04+i*1.3;rect(pptx,slide,0.75,y,11.85,0.35,theme.colors.lightGreen);
 txt(slide,b.heading||"",0.97,y+0.055,11.4,0.24,ctx,{fontSize:13,bold:true,color:theme.colors.forest});
 if(b.body)txt(slide,b.body,0.97,y+0.52,11.4,0.66,ctx,{fontSize:13});
 else list(slide,b.items||[],0.97,y+0.46,11.2,ctx,{step:0.33,max:2,fontSize:12.5});
 });}
export function comparison(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 (spec.columns||[]).slice(0,2).forEach((col,i)=>{
 const x=0.68+i*6.25; panel(pptx,slide,theme,x,2.06,5.95,3.97);
 rect(pptx,slide,x,2.06,5.95,0.53,theme.colors.forest);
 txt(slide,col.title||"",x+0.2,2.16,5.5,0.34,ctx,{fontSize:15,bold:true,color:theme.colors.white});
 list(slide,col.points||[],x+0.26,2.84,5.35,ctx,{fontSize:13,step:0.65,max:4});
 });}
export function matrix(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 const rowX=0.74,top=2.06,colW=3.07,rowH=1.13;
 (spec.columns||[]).slice(0,3).forEach((v,j)=>{
 rect(pptx,slide,2.54+j*colW,top,colW-0.07,0.5,theme.colors.forest);
 txt(slide,v,2.68+j*colW,top+0.1,colW-0.32,0.32,ctx,{fontSize:12,bold:true,color:theme.colors.white,align:"center"});
 });
 (spec.rows||[]).slice(0,3).forEach((r,i)=>{
 const y=top+0.6+i*rowH;rect(pptx,slide,rowX,y,1.66,rowH-0.08,theme.colors.lightGreen);
 txt(slide,r,rowX+0.12,y+0.27,1.4,0.55,ctx,{fontSize:12,bold:true,color:theme.colors.forest});
 (spec.cells?.[i]||[]).slice(0,3).forEach((v,j)=>{
 const x=2.54+j*colW;panel(pptx,slide,theme,x,y,colW-0.07,rowH-0.08);
 txt(slide,v,x+0.16,y+0.2,colW-0.41,rowH-0.37,ctx,{fontSize:12,align:"center"});
 });
 });}
export function groupTable(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 const cols=Math.min((spec.headers||[]).length,5),width=11.9/cols,rowH=0.53;
 spec.headers.slice(0,cols).forEach((h,j)=>{
 const x=0.72+j*width;rect(pptx,slide,x,2.03,width-0.04,0.5,theme.colors.forest);
 txt(slide,h,x+0.1,2.16,width-0.21,0.3,ctx,{fontSize:12,bold:true,color:theme.colors.white});
 });
 (spec.rows||[]).slice(0,7).forEach((row,i)=>row.slice(0,cols).forEach((v,j)=>{
 const x=0.72+j*width,y=2.58+i*rowH;
 panel(pptx,slide,theme,x,y,width-0.04,rowH-0.035,i%2===0);
 txt(slide,v,x+0.12,y+0.095,width-0.24,0.37,ctx,{fontSize:11.2});
 }));}
export function schedule(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 const periods=(spec.periods||[]).slice(0,8),ws=(spec.workstreams||[]).slice(0,6),unit=9.4/Math.max(1,periods.length);
 periods.forEach((p,j)=>txt(slide,p,3.08+j*unit,2.12,unit-0.05,0.4,ctx,{fontSize:12,bold:true,color:theme.colors.forest,align:"center"}));
 ws.forEach((w,i)=>{
 const y=2.75+i*0.55;
 txt(slide,w.name||"",0.8,y,2.2,0.4,ctx,{fontSize:12.5,bold:true});
 periods.forEach((p,j)=>{
 const x=3.06+j*unit,active=(w.active||[]).includes(j);
 rect(pptx,slide,x,y,unit-0.05,0.39,active?theme.colors.forest:theme.colors.grayBand);
 });
 });}
export function costs(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 const widths=[5.2,2.2,4.5],starts=[0.7,5.9,8.1];
 ["項目","金額","前提／備考"].forEach((h,j)=>{
 rect(pptx,slide,starts[j],2.02,widths[j]-0.05,0.45,theme.colors.forest);
 txt(slide,h,starts[j]+0.13,2.11,widths[j]-0.27,0.28,ctx,{fontSize:12,bold:true,color:theme.colors.white});
 });
 (spec.items||[]).slice(0,6).forEach((item,i)=>{
 const y=2.53+i*0.53;
 [item.label,item.amount,item.basis||""].forEach((v,j)=>{
 panel(pptx,slide,theme,starts[j],y,widths[j]-0.05,0.5,i%2===0);
 txt(slide,v,starts[j]+0.12,y+0.1,widths[j]-0.24,0.3,ctx,{fontSize:11.5});
 });
 });
 if(spec.total)txt(slide,"合計: "+spec.total,8.6,5.88,3.9,0.35,ctx,{fontSize:15,bold:true,color:theme.colors.forest,align:"right"});
}
export function team(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 (spec.roles||[]).slice(0,7).forEach((role,i)=>{
 const leader=i===0;const x=leader?4.55:0.8+((i-1)%3)*4.15;const y=leader?2.08:3.72+Math.floor((i-1)/3)*1.15;const w=leader?4.28:3.92;
 panel(pptx,slide,theme,x,y,w,0.93,leader);
 txt(slide,role.title||"",x+0.13,y+0.12,w-0.26,0.3,ctx,{fontSize:13,bold:true,color:theme.colors.forest,align:"center"});
 txt(slide,role.name||role.responsibility||"",x+0.12,y+0.53,w-0.24,0.25,ctx,{fontSize:10.5,color:theme.colors.muted,align:"center"});
 });
 if((spec.roles||[]).length>1)rule(pptx,slide,2.65,3.49,8.0,theme.colors.forest,1);
}
export function appendix(ctx){const{pptx,slide,spec,theme}=ctx;base(ctx);
 rect(pptx,slide,0.72,2.19,11.85,2.75,theme.colors.darkForest);
 txt(slide,spec.title,1.08,3.05,11.06,1.0,ctx,{fontSize:30,bold:true,color:theme.colors.white});
}
export function reference(ctx){const{slide,spec}=ctx;base(ctx);list(slide,spec.notes||[],0.86,2.2,11.2,ctx,{fontSize:13,step:0.57,max:7});}
export function statement(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 panel(pptx,slide,theme,0.74,2.05,8.2,3.88,true);
 txt(slide,spec.body,1.09,2.55,7.45,2.85,ctx,{fontSize:22,bold:true,color:theme.colors.darkForest});
 if(spec.proof)txt(slide,spec.proof,9.18,2.66,3.16,2.4,ctx,{fontSize:14,color:theme.colors.text});
}
export function metrics(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 const ms=(spec.metrics||[]).slice(0,4),width=11.9/ms.length;
 ms.forEach((m,i)=>{
 const x=0.74+i*width;panel(pptx,slide,theme,x,2.2,width-0.13,3.38,i===0);
 txt(slide,m.label,x+0.22,2.51,width-0.55,0.5,ctx,{fontSize:12,color:theme.colors.forest,bold:true});
 txt(slide,m.value,x+0.22,3.24,width-0.55,0.72,ctx,{fontSize:27,color:theme.colors.darkForest,bold:true});
 txt(slide,m.note||"",x+0.22,4.44,width-0.55,0.65,ctx,{fontSize:11.7});
 });}
export function process(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 const steps=(spec.steps||[]).slice(0,6),w=11.9/steps.length;
 steps.forEach((s,i)=>{
 const x=0.7+i*w;
 txt(slide,String(i+1).padStart(2,"0"),x,2.16,w-0.15,0.36,ctx,{fontSize:12,bold:true,color:theme.colors.forest});
 rule(pptx,slide,x,2.64,w-0.25,theme.colors.forest,2);
 txt(slide,s.title||s,x,2.96,w-0.22,0.75,ctx,{fontSize:14,bold:true});
 txt(slide,s.body||"",x,3.99,w-0.26,1.35,ctx,{fontSize:11.5});
 });}
export function architecture(ctx){const{slide,spec,theme,pptx}=ctx;base(ctx);
 const layers=(spec.layers||[]).slice(0,4),w=11.9/layers.length;
 layers.forEach((l,i)=>{
 const x=0.72+i*w;
 txt(slide,l.title,x+0.07,2.14,w-0.2,0.4,ctx,{fontSize:12.5,bold:true,color:theme.colors.forest});
 (l.nodes||[]).slice(0,4).forEach((n,j)=>{
 const y=2.79+j*0.76;panel(pptx,slide,theme,x+0.05,y,w-0.17,0.64,j===0);
 txt(slide,typeof n==="string"?n:n.label,x+0.18,y+0.16,w-0.43,0.33,ctx,{fontSize:11.5,align:"center"});
 });
 });}
export const RENDERERS={cover,agenda,text,comparison,matrix,"group-table":groupTable,schedule,costs,team,appendix,reference,statement,metrics,process,architecture};
