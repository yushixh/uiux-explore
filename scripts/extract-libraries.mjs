import fs from 'node:fs';
import path from 'node:path';
import { parseAst } from 'rollup/parseAst';

const root = path.resolve('public/archive');
const read = p => fs.readFileSync(p, 'utf8');
function save(p, text) { const target=path.join(root,p); fs.mkdirSync(path.dirname(target),{recursive:true}); fs.writeFileSync(target,text); return p; }
const json = (p, data) => save(p, JSON.stringify(data,null,2)+'\n');
// Decode literals only. Downloaded scripts are never evaluated or imported.
function literal(n) {
  if (!n) return undefined;
  if (n.type==='Literal') return n.value;
  if (n.type==='TemplateLiteral' && !n.expressions.length) return n.quasis[0].value.cooked;
  if (n.type==='ArrayExpression') return n.elements.map(literal);
  if (n.type==='ObjectExpression') return Object.fromEntries(n.properties.filter(p=>p.type==='Property').map(p=>[p.key.name??p.key.value,literal(p.value)]).filter(([,v])=>v!==undefined));
  if (n.type==='UnaryExpression' && n.operator==='!') return !literal(n.argument);
}
function objects(raw) {
  const out=[];
  function visit(n) {
    if(!n || typeof n!=='object') return;
    if(n.type==='ObjectExpression') {
      const value=literal(n);
      const css=n.properties.find(p=>p.key?.name==='css');
      if(css?.value.type==='ArrowFunctionExpression') { value.css=raw.slice(css.value.start,css.value.end); value.cssTemplate=true; }
      out.push(value);
    }
    for(const value of Object.values(n)) {
      if(Array.isArray(value)) value.forEach(visit);
      else if(value && typeof value==='object') visit(value);
    }
  }
  visit(parseAst(raw)); return out;
}

const records=[];
const blockAst=parseAst(read('archive/evidence/bencho-blocks.js'));
const blocks=literal(blockAst.body[0].declarations[0].init);
const benchRaw=read('archive/evidence/bencho.js');
const bench=objects(benchRaw).filter(o=>typeof o.id==='string' && o.name && o.cat && o.css);
json('bencho/catalog.json',bench);
for(const entry of bench) {
  const folder='bencho/'+entry.id, block=blocks[entry.id];
  const name=entry.name.replace(/(^|[^a-z0-9])([a-z0-9])/gi,(_,a,b)=>b.toUpperCase());
  const files=[save(folder+(entry.cssTemplate?'/design-notes-template.js.txt':'/design-notes.txt'),entry.css+'\n')], prompts=[];
  if(block) {
    files.unshift(save(folder+'/'+name+'.tsx',block.tsx+'\n'),save(folder+'/styles.css',block.css+'\n'));
    files.push(json(folder+'/dependencies.json',{dependencies:block.deps,tokens:block.tokens,stubs:block.stubs}));
    // The text below reproduces the site's public Copy prompt template HE.
    const lines=[`Add the "${entry.name}" component from Bencho to my project.`,'','It is MIT licensed — bencho.dev/licence. Please:','','1. Create the component at a sensible path for this',`   project, named ${name}, from the source below.`,block.deps.length?`2. Install what it needs: npm i ${block.deps.join(' ')}`:'2. It needs nothing beyond React.',"3. Add the CSS to the project's stylesheet."];
    if(block.tokens.length) lines.push('','4. THE PART THAT NEEDS YOUR JUDGEMENT. The CSS reads','   these custom properties and does not define them:','',...block.tokens.map(x=>'     '+x),'',"   They are Bencho's design tokens. Map each one to",'   whatever this project already uses for the same','   job — its own ink, ground, surface and UI font —','   rather than defining them as new globals. If the','   project has no equivalent, define it locally on',"   the component's own root so nothing leaks out.",'   Anything ending -rgb wants three bare numbers,','   because the CSS builds rgba() from it.');
    if(block.stubs.length) lines.push('',`5. ${block.stubs.join(' and ')} ${block.stubs.length>1?'are stubs':'is a stub'}`,"   — Bencho's own pictures are not licensed to","   travel. Point it at this project's images, or",'   leave the placeholder and tell me.');
    lines.push('','Keep the comments. They say why the numbers are what','they are, and they are most of what makes this worth','copying rather than rewriting.','',`--- ${name}.tsx ---`,'',block.tsx.trim(),'','--- css ---','',block.css.trim(),'');
    prompts.push(save(folder+'/prompt.md',lines.join('\n')));
  }
  records.push({id:'bencho--'+entry.id,source:'bencho',name:entry.name,description:'',kind:'component',category:entry.cat,files,prompts,exportName:name,url:'https://bencho.dev/',status:block?'source':'snippet',promptOrigin:block?'upstream-template':'none',tags:[entry.cat,entry.kind],dependencies:block?.deps??[]});
}
const license=read('public/archive/halaska/upstream/LICENSE').replace('Halaska Studio','Lorenzo Cabra');
save('bencho/LICENSE',license);
save('bencho/prompt-template.js.txt',benchRaw.slice(benchRaw.indexOf('async function HE'),benchRaw.indexOf('async function UE')));

const products=objects(read('archive/evidence/builtbydesigners.js')).filter(o=>typeof o.id==='string'&&o.name&&o.url&&o.categoryLabel);
const uniqueProducts=[...new Map(products.map(p=>[p.id,p])).values()];
json('builtbydesigners/catalog.json',uniqueProducts);
for(const p of uniqueProducts) records.push({id:'builtbydesigners--'+p.id,source:'builtbydesigners',name:p.name,description:p.description,kind:'reference',category:'Product',url:'https://builtbydesigners.com/',productUrl:p.url,image:(p.shot2x||p.shot)?new URL(p.shot2x||p.shot,'https://builtbydesigners.com/').href:'',files:[],prompts:[],status:'reference',tags:p.categories??[],product:new URL(p.url).hostname.replace(/^www\./,''),metadataFile:json('builtbydesigners/'+p.id+'/metadata.json',p)});

save('halaska/halaska-kit.jsx',read('archive/evidence/halaska-kit.jsx'));
save('halaska/halaska-kit.d.ts',read('archive/evidence/halaska-kit.d.ts'));
save('halaska/llms.txt',read('archive/evidence/halaska-llms.txt'));
const api=read('archive/evidence/halaska-kit.jsx').split('// ─── PUBLIC API')[1];
let category='Foundations';
for(const line of api.split('\n')) {
  if(line.trim().startsWith('//')) { category=line.trim().slice(2).trim(); continue; }
  for(const name of line.trim().split(/[,\s]+/).filter(x=>/^[A-Z][a-zA-Z0-9]+$/.test(x))) {
    records.push({id:'halaska--'+name,source:'halaska',name,exportName:name,description:'Halaska Kit · '+category,kind:category.startsWith('UX patterns')?'pattern':'component',category,files:['halaska/halaska-kit.jsx','halaska/halaska-kit.d.ts','halaska/llms.txt'],prompts:[],url:'https://ui.halaska.com/',status:'source',tags:[category,'React'],line:read('archive/evidence/halaska-kit.jsx').split('\n').findIndex(l=>new RegExp('^(export )?function '+name+'[ (]').test(l))+1});
  }
}
function listFiles(dir) { return fs.readdirSync(path.join(root,dir),{withFileTypes:true}).flatMap(e=>e.isDirectory()?listFiles(dir+'/'+e.name):[dir+'/'+e.name]); }
for(const framework of ['react','vue','svelte','typescript']) {
  const prefix='torph/upstream/packages/torph/src/';
  const files=listFiles(prefix.slice(0,-1)).filter(p=>p.includes('/lib/')||p===prefix+'index.ts'||p.startsWith(prefix+framework+'/')).filter(p=>!p.includes('__tests__'));
  const primary=framework==='typescript'?prefix+'lib/text-morph/index.ts':prefix+framework+'/TextMorph.'+(framework==='react'?'tsx':framework==='svelte'?'svelte':'ts');
  records.push({id:'torph--'+framework,source:'torph',name:'TextMorph',description:'连续文字变形 · '+framework,kind:'component',category:'Typography',framework,files:[primary,...files.filter(p=>p!==primary),'torph/upstream/README.md'],prompts:[],url:'https://torph.lochie.me/',status:'source',tags:['text','motion',framework]});
}
const demoFiles=listFiles('torph/upstream/site/src/surfaces/demos').filter(p=>p.endsWith('.tsx')&&!p.split('/').pop().startsWith('use-'));
for(const file of demoFiles) records.push({id:'torph--demo-'+path.basename(file,'.tsx'),source:'torph',name:path.basename(file,'.tsx').replace(/^./,c=>c.toUpperCase()),description:'Torph 官方交互示例',kind:'example',category:'Typography',parentId:'torph--react',files:[file,...listFiles('torph/upstream/site/src/surfaces/demos').filter(p=>p!==file)],prompts:[],url:'https://torph.lochie.me/examples',status:'source',tags:['text','motion']});
for(const pkg of ['core','pl','en','all']) records.push({id:'typehug--'+pkg,source:'typehug',name:'Typehug / '+pkg,description:pkg==='core'?'排版规则引擎与 HTML 适配器':pkg==='all'?'英语与波兰语排版规则':pkg==='en'?'英语排版规则':'波兰语排版规则',kind:'library',category:'Typography',files:[...listFiles('typehug/upstream/packages/'+pkg+'/src'),'typehug/upstream/README.md','typehug/upstream/docs/api.md'],prompts:[],status:'source',url:'https://typehug.aliszu.com/',tags:['typography',pkg],parentId:pkg==='core'?'':'typehug--core'});
json('library-records.json',records);
console.log(JSON.stringify({records:records.length,bencho:bench.length,fullBlocks:Object.keys(blocks).length,products:uniqueProducts.length,halaska:records.filter(x=>x.source==='halaska').length,deps:[...new Set(Object.values(blocks).flatMap(b=>b.deps))]},null,2));
