import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
const root=path.resolve('public/archive');
const records=JSON.parse(fs.readFileSync(path.join(root,'library-records.json'),'utf8'));
const out=path.join(root,'previews');fs.mkdirSync(out,{recursive:true});
const imports=[], renderers=[], css={};
const quote=JSON.stringify;
const runtimeRecords=records.filter(r=>r.previewOrigin==='upstream-bundle');
imports.push(`import BenchoRuntimeDemo from ${quote(path.resolve('scripts/preview-adapters/bencho-runtime.jsx'))};`);
for(const r of runtimeRecords)renderers.push(`${quote(r.id)}:()=>React.createElement(BenchoRuntimeDemo,{id:${quote(r.id)}})`);
const runtimeCSS=fs.readFileSync(path.join(root,'bencho/runtime/upstream.css'),'utf8');
for(const r of records.filter(r=>r.source==='bencho'&&r.status==='source')) {
  const file=r.files.find(f=>f.endsWith('.tsx'));
  const raw=fs.readFileSync(path.join(root,file),'utf8');
  const match=raw.match(/export (default )?function (\w+)/);
  const variable='B'+imports.length;
  imports.push(`import ${match[1]?variable:'{'+match[2]+' as '+variable+'}'} from ${quote(path.join(root,file))};`);
  renderers.push(`${quote(r.id)}:()=>React.createElement(${variable},{})`);
  css[r.id]=fs.readFileSync(path.join(root,r.files.find(f=>f.endsWith('.css'))),'utf8');
}
imports.push(`import * as Kit from ${quote(path.join(root,'halaska/halaska-kit.jsx'))};`);
const props={
  Text:{children:'Good design makes room for the important things.',size:'lg'},Heading:{children:'A little more clarity.',level:2},Label:{children:'Project name'},Caption:{children:'Last edited just now'},Code:{children:'npm install'},
  Button:{children:'Continue'},LinkButton:{children:'View details'},TextInput:{placeholder:'Name your project',label:'Project name'},TextArea:{placeholder:'Write something…'},SearchInput:{placeholder:'Search your workspace'},
  Checkbox:{label:'Receive updates'},SwitchToggle:{},Slider:{value:55,min:0,max:100},SpringSlider:{value:55,min:0,max:100},SpringToggle:{},InputOTP:{length:4},
  Chip:{children:'Design'},Toggle:{children:'Bold'},CopyInput:{value:'https://example.com/share'},Rating:{value:3},Card:{children:'Everything in one place.'},Badge:{children:'New'},Tag:{children:'Design'},StatusBadge:{status:'success',children:'Ready'},StatusDot:{status:'success'},Avatar:{name:'Alex Kim'},Stat:{label:'Active projects',value:'128'},Kbd:{children:'⌘ K'},
  Progress:{value:65},ProgressCircle:{value:65},Skeleton:{width:180,height:28},Spinner:{},EmptyState:{title:'A fresh start',description:'Your projects will appear here.'},Orb:{size:64},StreamingText:{text:'A thoughtful interface, one word at a time.'},ThinkingIndicator:{},ConfidenceBar:{value:82},AISuggestionBadge:{},
};
for(const r of records.filter(r=>r.source==='halaska'&&(props[r.exportName]||r.kind==='pattern')))renderers.push(`${quote(r.id)}:()=>React.createElement(KitDemo,{name:${quote(r.exportName)},initial:${quote(props[r.exportName]??{})}})`);
imports.push(`import {TextMorph} from ${quote(path.join(root,'torph/upstream/packages/torph/src/react/TextMorph.tsx'))};`);
renderers.push(`"torph--react":()=>React.createElement(MorphDemo)`);
imports.push(`import {glue} from ${quote(path.join(root,'typehug/upstream/packages/all/src/index.ts'))};`);
for(const r of records.filter(r=>r.source==='typehug'))renderers.push(`${quote(r.id)}:()=>React.createElement(TypeDemo)`);
const ids=renderers.map(s=>JSON.parse(s.slice(0,s.indexOf(':'))));
const entry=`import React,{useState,Component} from 'react';import {createRoot} from 'react-dom/client';\n${imports.join('\n')}
const renderers={${renderers.join(',\n')}};
const styles=${quote(css)};
const runtimeIds=new Set(${quote(runtimeRecords.map(r=>r.id))});
const id=new URLSearchParams(location.search).get('id')||document.body.dataset.id;
if(runtimeIds.has(id)){const style=document.createElement('style');style.textContent=${quote(runtimeCSS)};document.head.append(style);}
const base=document.createElement('style');base.textContent=${quote(`*{box-sizing:border-box}body{margin:0;font:14px -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#39424c;background:#f5f6f8;--bg:#f5f6f8;--card:#fff;--surface-2:#eef0f3;--surface-3:#e4e7eb;--fill-slab:#e3e6ea;--pane:#fff;--pane-edge:#dfe3e8;--ink-2:#626b76;--ink-3:#818b96;--ink-4:#9ba4ad;--ink-5:#b7bec5;--font-num:ui-monospace,monospace;--on-ink:#fff;--on-slab:#fff;--slab:#e4e7eb;--ink:#303238;--ink-rgb:48,50,56;--ground:#f5f6f8;--board:#fff;--board-rgb:255,255,255;--fill:#e4e6e9;--fill-on:#363a42;--fill-on-rgb:54,58,66;--surface:#fff;--line:#dfe3e8;--muted:#969ba3;--font-ui:-apple-system,BlinkMacSystemFont,sans-serif;--font-mono:ui-monospace,monospace}#root{min-height:100svh;display:flex;align-items:center;justify-content:center;padding:34px 22px;overflow:auto}button,input,textarea,select{font:inherit}button{cursor:pointer}button:focus-visible,input:focus-visible{outline:2px solid #678da8;outline-offset:3px}.archive-preview-inner{width:100%;max-width:440px;display:grid;place-items:center}.preview-message{padding:20px;color:#7b8791;font-size:13px}.local-demo{display:grid;gap:24px;max-width:420px;width:100%;text-align:center}.local-demo button{border:1px solid #d9e0e5;border-radius:8px;background:#fff;padding:10px 18px;color:#47657b}.local-demo textarea{padding:14px;border:1px solid #d9e0e5;border-radius:8px;min-height:100px;width:100%;resize:vertical}.local-demo output{font-size:18px;line-height:1.8;padding:15px}.morph-text{font-size:30px;letter-spacing:-1px;color:#354455;min-height:50px}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.001ms!important;transition-duration:0.001ms!important}}`)}+(styles[id]||'');document.head.append(base);
class Boundary extends Component{state={error:false};static getDerivedStateFromError(){return{error:true}}componentDidCatch(error){document.body.dataset.previewStatus='error';console.error(error)}render(){return this.state.error?React.createElement('p',{className:'preview-message'},'此示例需要额外业务数据，请在源码中查看完整实现。'):this.props.children}}
function KitDemo({name,initial}){const [value,setValue]=useState(initial.value??''),[checked,setChecked]=useState(false),[pressed,setPressed]=useState(false);const controlled=['TextInput','TextArea','SearchInput','Slider','SpringSlider','Rating','InputOTP'].includes(name);const change=v=>{if(typeof v==='boolean')setChecked(v);else setValue(v?.target?v.target.value:v)};const properties={...initial,checked,pressed,onChange:change,onPress:setPressed};if(controlled)properties.value=value;return React.createElement(Kit[name],properties)}
function MorphDemo(){const [next,setNext]=useState(false);return React.createElement('div',{className:'local-demo'},React.createElement('div',{className:'morph-text'},React.createElement(TextMorph,null,next?'A little more clarity.':'Keep things simple.')),React.createElement('button',{onClick:()=>setNext(!next)},'切换文字'))}
function TypeDemo(){const [text,setText]=useState('I have a question. It costs 10 USD.'),[locale,setLocale]=useState('en');return React.createElement('div',{className:'local-demo'},React.createElement('textarea',{'aria-label':'输入排版文字',value:text,onChange:e=>setText(e.target.value)}),React.createElement('select',{'aria-label':'语言',value:locale,onChange:e=>setLocale(e.target.value)},React.createElement('option',{value:'en'},'English'),React.createElement('option',{value:'pl'},'Polski')),React.createElement('output',null,glue(text,{locale}).replaceAll('\\u00a0','⍽')),React.createElement('small',null,'⍽ 表示插入的不换行空格'))}
try{const render=renderers[id];if(!render)throw Error('Missing preview');createRoot(document.getElementById('root')).render(React.createElement(Boundary,null,React.createElement('div',{className:'archive-preview-inner'},render())));document.body.dataset.previewStatus='ready'}catch(error){document.body.dataset.previewStatus='error';document.getElementById('root').textContent='此示例需要额外数据，请查看源码。';console.error(error)}
`;
const placeholder = (i) => 'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="320" height="240" viewBox="0 0 320 240"><rect width="320" height="240" rx="24" fill="${['#b8cbd6','#c5c1d5','#cad0b5','#e0c7ab','#c7d9cf','#cfbbbd','#aec8ce'][i%7]}"/><circle cx="160" cy="110" r="55" fill="#ffffff" fill-opacity=".55"/><text x="160" y="132" text-anchor="middle" font-family="sans-serif" font-size="60" fill="#536577">${String.fromCharCode(65+i)}</text></svg>`);
const previewAssets = {name:'preview-assets',setup(build){build.onLoad({filter:/public\/archive\/bencho\/.*\.tsx$/},async args=>{let source=fs.readFileSync(args.path,'utf8');source=source.replace('const MARKS: string[] = [];','const MARKS: string[] = '+JSON.stringify(Array.from({length:7},(_,i)=>placeholder(i)))+';').replace('const SHOTS: { name: string; src: string }[] = [];','const SHOTS: { name: string; src: string }[] = '+JSON.stringify(Array.from({length:6},(_,i)=>({name:'Study '+(i+1),src:placeholder(i)})))+';').replace('const AVATARS: Record<string, string> = {};','const AVATARS: Record<string, string> = '+JSON.stringify(Object.fromEntries(['kai','mara','ines','sofia'].map((x,i)=>[x,placeholder(i)])))+';').replace(/const (BUTTERFLY|COVER|SHEEP): string = "";/g,(_,name)=>'const '+name+': string = '+JSON.stringify(placeholder(1))+';');return{contents:source,loader:'tsx'};});}};
await build({plugins:[previewAssets],stdin:{contents:entry,resolveDir:process.cwd(),loader:'jsx'},bundle:true,format:'iife',platform:'browser',target:'es2022',minify:true,outfile:path.join(out,'runtime.js'),jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},alias:{'@typehug/pl/profile':path.join(root,'typehug/upstream/packages/pl/src/profile.ts'),'@typehug/en/profile':path.join(root,'typehug/upstream/packages/en/src/profile.ts'),'@typehug/core':path.join(root,'typehug/upstream/packages/core/src/index.ts'),'@typehug/pl':path.join(root,'typehug/upstream/packages/pl/src/index.ts'),'@typehug/en':path.join(root,'typehug/upstream/packages/en/src/index.ts')},logLevel:'warning'});
for(const id of ids)fs.writeFileSync(path.join(out,id+'.html'),`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${id} local preview</title></head><body data-id="${id}"><div id="root"></div><script src="./runtime.js"></script></body></html>`);
fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify(ids,null,2)+'\n');
console.log('Built',ids.length,'local previews');
