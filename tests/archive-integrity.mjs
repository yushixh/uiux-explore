import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { transform } from 'esbuild';
const root=path.resolve('public/archive');
const index=JSON.parse(fs.readFileSync(path.join(root,'index.json'),'utf8'));
const ids=new Set(index.records.map(r=>r.id));assert.equal(ids.size,index.records.length,'Stable IDs must be unique');
const files=new Set();
for(const r of index.records){
  assert(index.sources.some(s=>s.id===r.source),r.id+' source');
  assert(index.categories.some(c=>c.id===r.categoryId),r.id+' category');
  if(r.parentId)assert(ids.has(r.parentId),r.id+' parent');
  if(r.kind==='page')assert(!r.parentId,r.id+' pages are top level');
  if(r.status==='source')assert(r.files.length,r.id+' source cannot be empty');
  if(r.status==='locked')assert.equal(r.files.length,0,'Locked content must not be labeled as saved');
  for(const f of [...r.files,...r.prompts]){
    const absolute=path.resolve(root,f);assert(absolute.startsWith(root+path.sep));assert(fs.statSync(absolute).size>0,r.id+' '+f);files.add(f);
  }
}
for(const s of index.sources)assert.equal(s.count,index.records.filter(r=>r.source===s.id).length,s.id+' count');
assert.equal(index.records.filter(r=>r.source==='kage'&&r.kind==='reference').length,1358);
assert.equal(index.records.filter(r=>r.source==='kage'&&r.kind==='page').length,257);
assert.equal(index.records.filter(r=>r.source==='bencho').length,29);
const previews=JSON.parse(fs.readFileSync(path.join(root,'previews/manifest.json'),'utf8'));
for(const r of index.records){
  assert.equal(!!r.localPreviewUrl,previews.includes(r.id),r.id+' preview availability');
  if(r.localPreviewUrl){
    assert.equal(r.localPreviewUrl,'/archive/previews/'+encodeURIComponent(r.id)+'.html');
    assert(fs.existsSync(path.join(root,'previews',r.id+'.html')),r.id+' preview file');
  }
}
assert(index.records.filter(r=>r.source==='bencho').every(r=>r.localPreviewUrl),'All 29 Bencho items need runnable previews');
assert.equal(index.records.filter(r=>r.previewOrigin==='upstream-bundle').length,17);
assert(index.records.filter(r=>r.previewOrigin==='upstream-bundle').every(r=>r.status==='snippet'),'Compiled webpage extracts must remain distinct from original source packages');
assert.equal(index.records.filter(r=>r.source==='vantaui'&&r.status==='source').length,12);

const variants=JSON.parse(fs.readFileSync(path.join(root,'previews/variants.json'),'utf8'));
assert.equal(new Set(variants.map(v=>v.id)).size,variants.length);
for(const r of index.records){
 const original=variants.find(v=>v.id===r.id);
 assert.equal(r.section==='components',!!original?.interaction,r.id+' interactive classification');
 if(r.section==='components'){
   assert(r.localPreviewUrl&&r.originalPreviewUrl,r.id+' must have both local versions');
   assert.notEqual(r.localPreviewUrl,r.originalPreviewUrl);
   assert(fs.existsSync(path.join(root,r.originalPreviewUrl.replace('/archive/',''))),r.id+' original file');
 }
 if(['kage','builtbydesigners'].includes(r.source))assert.equal(r.section,'references');
}
for(const id of ['halaska--AccentContext','halaska--ThemeProvider','halaska--Text','halaska--ContextSourcesPattern','halaska--ToolStreamPattern','halaska--TaskboardPattern'])assert.equal(index.records.find(r=>r.id===id).section,'resources',id+' is not an interactive component');
const exact=JSON.parse(fs.readFileSync(path.join(root,'bencho/runtime/exact-provenance.json'),'utf8'));
assert.equal(exact.entryIds.length,29);assert.deepEqual(exact.dependencyReplacements,[]);

const integrity=JSON.parse(fs.readFileSync(path.join(root,'integrity.json'),'utf8'));
for(const f of integrity.files){const bytes=fs.readFileSync(path.join(root,f.path));assert.equal(bytes.length,f.bytes,f.path);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),f.sha256,f.path);}
let parsed=0;
for(const f of files)if((f.startsWith('bencho/')||f.startsWith('vantaui/')||f==='halaska/halaska-kit.jsx')&&/\.(tsx?|jsx?|css)$/.test(f)){
  await transform(fs.readFileSync(path.join(root,f),'utf8'),{loader:path.extname(f).slice(1),sourcefile:f});parsed++;
}
console.log(`PASS: ${index.records.length} entries, ${integrity.files.length} file hashes, ${files.size} referenced files, ${parsed} source syntax checks.`);
