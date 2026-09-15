import fs from 'node:fs';
import path from 'node:path';
import {build,transform} from 'esbuild';
import {parseAst} from 'rollup/parseAst';
import * as sass from 'sass';
const root=path.resolve('public/archive'),out=path.join(root,'previews');
const records=JSON.parse(fs.readFileSync(path.join(root,'library-records.json'),'utf8'));
const raw=fs.readFileSync(path.join(root,'halaska/halaska-kit.jsx'),'utf8');
const compiled=(await transform(raw,{loader:'jsx',jsx:'transform'})).code;
const ast=parseAst(compiled);
function walk(n,fn){if(!n||typeof n!=='object')return;fn(n);for(const v of Object.values(n))if(Array.isArray(v))v.forEach(x=>walk(x,fn));else if(v&&typeof v==='object')walk(v,fn);}
const mappings={
  TextInput:'DemoFormInputs',TextArea:'DemoFormInputs',SearchInput:'DemoFormInputs',CopyInput:'DemoFormInputs',Select:'DemoFormInputs',Combobox:'DemoFormInputs',
  Checkbox:'DemoTogglesSelections',SwitchToggle:'DemoTogglesSelections',RadioGroup:'DemoTogglesSelections',SegmentedControl:'DemoTogglesSelections',
  InputOTP:'DemoFormExtras',Slider:'DemoInputsExtended',SpringSlider:'DemoInputsExtended',SpringToggle:'DemoInputsExtended',Toggle:'DemoInputsExtended',ToggleGroup:'DemoInputsExtended',Choicebox:'DemoInputsExtended',DatePicker:'DemoInputsExtended',Calendar:'DemoInputsExtended',Rating:'DemoInputsExtended',
  Tabs:'DemoNavigation',SubtleTabs:'DemoNavigation',Accordion:'DemoNavigation',Collapsible:'DemoNavigation',ContextMenu:'DemoNavigation',Menubar:'DemoNavigation',CommandPalette:'DemoNavigation',Pagination:'DemoTable',DataTable:'DemoTable',
  Snippet:'DemoDevSurfaces',FileTree:'DemoDevSurfaces',BeforeAfterToggle:'DemoAIElements',ZoomControl:'DemoAIElements',
};
const extra=[],entries=[],manifest=[];
for(const [name,demo] of Object.entries(mappings)){
  const fn=ast.body.find(n=>n.type==='FunctionDeclaration'&&n.id.name===demo);
  let target;
  walk(fn,n=>{if(!target&&n.type==='CallExpression'&&n.callee?.object?.name==='React'&&n.callee?.property?.name==='createElement'&&n.arguments[0]?.name===name)target=n;});
  if(!target)throw Error('Missing original example '+name);
  const ret=fn.body.body.find(n=>n.type==='ReturnStatement');
  const copied=compiled.slice(fn.start,ret.start).replace('function '+demo+'(', 'function Archive'+name+'(')+'return '+compiled.slice(target.start,target.end)+';\n}';
  extra.push(copied);entries.push(`"halaska--${name}":()=>React.createElement(Archive${name},{theme:'light'})`);
  manifest.push({id:'halaska--'+name,sourceFile:'halaska/halaska-kit.jsx',demo,origin:'upstream-source',interaction:true});
}
for(const r of records.filter(r=>r.source==='halaska'&&r.kind==='pattern'&&!['ContextSourcesPattern','ToolStreamPattern','TaskboardPattern'].includes(r.exportName))){
 entries.push(`${JSON.stringify(r.id)}:()=>React.createElement(${r.exportName},{theme:'light'})`);
 manifest.push({id:r.id,sourceFile:'halaska/halaska-kit.jsx',demo:r.exportName,origin:'upstream-source',interaction:true});
}
// The copied demo hooks and JSX keep the author's values and event handlers.
// Only the surrounding catalogue is removed. The original archive stays intact.
const kit=path.join(out,'halaska-original.js');
fs.writeFileSync(kit,`import React from 'react';\n`+compiled+extra.join('\n')+`\nconst archiveRenderers={${entries.join(',')}};\nexport function ArchiveHalaska({id,project=false}){useEffect(()=>injectStyles(),[]);return React.createElement(AccentContext.Provider,{value:project?'#64849b':'#555555'},archiveRenderers[id]());}\n`);
const benchoIds=records.filter(r=>r.source==='bencho').map(r=>r.id);
manifest.push(...benchoIds.map(id=>({id,origin:'upstream-bundle',sourceFile:'bencho/runtime/components.js',interaction:true})));
const ownExisting=new Set(JSON.parse(fs.readFileSync(path.join(out,'manifest.json'),'utf8')));
const benchoCSS=fs.readFileSync(path.join(root,'bencho/runtime/upstream.css'),'utf8').replaceAll('/assets/Inter-Medium-CDhBSFyE.woff2','/archive/bencho/runtime/Inter-Medium.woff2');
fs.writeFileSync(path.join(out,'bencho-original.css'),benchoCSS+'\nhtml,body{margin:0;min-height:100%}#root,.original-stage{min-height:100svh}.original-stage{display:grid;place-content:center;overflow:hidden;padding:24px;box-sizing:border-box;background:rgba(var(--ink-rgb),.06)}');
const entry=`import React,{Component} from 'react';import {createRoot} from 'react-dom/client';
import {renderers,SharedFilters} from ${JSON.stringify(path.join(root,'bencho/runtime/components.js'))};
import {ArchiveHalaska} from ${JSON.stringify(kit)};
const id=document.body.dataset.id,project=document.body.dataset.variant==='project';
const style=document.createElement('style');style.textContent=id.startsWith('bencho--')?${JSON.stringify(benchoCSS)}:'';document.head.append(style);
const frame=document.createElement('style');frame.textContent='html,body{margin:0;min-height:100%;}#root{min-height:100svh;display:grid;place-items:center;} .original-stage{padding:24px;box-sizing:border-box;width:100%;min-height:100svh;display:grid;align-content:center;justify-items:center;} .original-stage>div{max-width:100%;}';document.head.append(frame);
class Boundary extends Component{state={error:false};static getDerivedStateFromError(){return{error:true}}componentDidCatch(e){document.body.dataset.previewStatus='error';console.error(e)}render(){return this.state.error?React.createElement('p',null,'预览加载失败'):this.props.children}}
const content=id.startsWith('bencho--')?React.createElement(React.Fragment,null,React.createElement(SharedFilters),renderers[id]()):React.createElement(ArchiveHalaska,{id,project});
createRoot(document.getElementById('root')).render(React.createElement(Boundary,null,React.createElement('div',{className:'original-stage','data-fill':id.startsWith('bencho--')?'light':undefined,'data-surface':id.startsWith('bencho--')?'flat':undefined,style:project?{background:'#f5f6f8'}:id.startsWith('bencho--')?{background:'rgba(var(--ink-rgb),.06)'}:undefined},content)));document.body.dataset.previewStatus='ready';`;
// Redirect only the stylesheet import; keep author CSS, animation and token values.
const fontPlugin={name:'local-fonts',setup(b){b.onLoad({filter:/halaska-original\.js$/},args=>({contents:fs.readFileSync(args.path,'utf8').replace(/@import url\('https:\/\/fonts.googleapis.com\/css2\?[^']+'\);/g,''),loader:'js'}));}};
await build({plugins:[fontPlugin],stdin:{contents:entry,resolveDir:process.cwd(),loader:'jsx'},bundle:true,format:'iife',platform:'browser',target:'es2022',minify:true,outfile:path.join(out,'original-runtime.js'),define:{'process.env.NODE_ENV':'"production"'},logLevel:'warning'});
for(const m of manifest){
 m.originalPreviewUrl='/archive/previews/'+m.id+'.original.html';
 m.localPreviewUrl='/archive/previews/'+m.id+'.html';
 const html=variant=>`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/archive/previews/fonts/fonts.css"><title>${m.id} · ${variant}</title></head><body data-id="${m.id}" data-variant="${variant}"><div id="root"></div><script src="./original-runtime.js"></script></body></html>`;
 const originalHTML=m.id.startsWith('bencho--')?`<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="./bencho-original.css"><title>${m.id} · original</title></head><body data-id="${m.id}"><div id="root"></div><script src="../bencho/runtime/exact-runtime.js"></script></body></html>`:html('original');
 fs.writeFileSync(path.join(out,m.id+'.original.html'),originalHTML);
 if(!ownExisting.has(m.id)){fs.writeFileSync(path.join(out,m.id+'.html'),html('project'));ownExisting.add(m.id);}
}
// One TextMorph card aggregates the framework exports; the original is the
// author's interactive spring comparison from the public examples page.
const torphSite=path.join(root,'torph/upstream/site/src');
const torphEntry=`import React from 'react';import {createRoot} from 'react-dom/client';
import ${JSON.stringify(path.join(torphSite,'styles/globals.scss'))};
import {Spring} from ${JSON.stringify(path.join(torphSite,'surfaces/demos/control.tsx'))};
class Boundary extends React.Component{state={error:false};static getDerivedStateFromError(){return{error:true}}componentDidCatch(e){document.body.dataset.previewStatus='error';console.error(e)}render(){return this.state.error?React.createElement('p',null,'预览加载失败'):this.props.children}}
createRoot(document.getElementById('root')).render(React.createElement(Boundary,null,React.createElement(Spring)));document.body.dataset.previewStatus='ready';`;
await build({stdin:{contents:torphEntry,resolveDir:process.cwd(),loader:'jsx'},plugins:[{name:'upstream-scss',setup(b){b.onLoad({filter:/\.scss$/},args=>({contents:sass.compile(args.path,{silenceDeprecations:['legacy-js-api','import']}).css.replace(/@import url\([^)]*\);/g,''),loader:args.path.includes('.module.')?'local-css':'css',resolveDir:path.dirname(args.path)}));}}],alias:{'@':torphSite,'torph/react':path.join(root,'torph/upstream/packages/torph/src/react/TextMorph.tsx')},bundle:true,format:'iife',platform:'browser',target:'es2022',minify:true,jsx:'automatic',outfile:path.join(out,'torph-original.js'),define:{'process.env.NODE_ENV':'"production"'},logLevel:'warning'});
fs.writeFileSync(path.join(out,'torph--react.original.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="./torph-original.css"><link rel="stylesheet" href="./fonts/torph.css"><style>#root{min-height:100svh;display:grid;place-content:center;padding:24px}</style><title>TextMorph · original</title></head><body data-id="torph--react"><div id="root"></div><script src="./torph-original.js"></script></body></html>`);
manifest.push({id:'torph--react',originalPreviewUrl:'/archive/previews/torph--react.original.html',localPreviewUrl:'/archive/previews/torph--react.html',origin:'upstream-source',interaction:true,sourceFile:'torph/upstream/site/src/surfaces/demos/control.tsx',demo:'Spring'});
fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify([...ownExisting],null,2)+'\n');
fs.writeFileSync(path.join(out,'variants.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('Built '+manifest.length+' original local variants');
