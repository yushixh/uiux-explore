import fs from 'node:fs';
import path from 'node:path';
const records=JSON.parse(fs.readFileSync('archive/evidence/vanta-public-dom.json','utf8'));
const results=[];
for(const r of records) {
  const folder='public/archive/vantaui/'+r.slug;
  fs.mkdirSync(folder,{recursive:true});const files=[];
  for(const b of r.blocks){
    if(!b.code||!b.label.includes('.'))continue;
    if(b.label.includes('..')||path.isAbsolute(b.label))throw Error('Unsafe source path');
    const target=path.join(folder,b.label);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,b.code+'\n');files.push(target.replace('public/archive/',''));
  }
  // Public "Open in ChatGPT" uses this exact buildChatPrompt template.
  fs.writeFileSync(folder+'/prompt.md',`Read ${r.url} and answer questions about it.\n`);
  fs.writeFileSync(folder+'/installation.txt',[r.installation,...r.blocks.filter(b=>b.label==='npm').map(b=>b.code)].filter(Boolean).join('\n')+'\n');
  files.push('vantaui/'+r.slug+'/installation.txt');
  const priority=f=>f.endsWith('/'+r.slug+'.tsx')?0:f.endsWith('/globals.css')?1:f.endsWith('/app/page.tsx')?3:f.endsWith('/installation.txt')?4:2;
  files.sort((a,b)=>priority(a)-priority(b));
  results.push({url:r.url,files,prompts:['vantaui/'+r.slug+'/prompt.md'],promptOrigin:'upstream-template',accessNote:'已保存原站公开 Manual 源码与用法。Prompt 为原站询问页面内容的模板。'});
}
fs.writeFileSync('public/archive/vantaui/public-sources.json',JSON.stringify(results,null,2)+'\n');
console.log('Saved',results.length,'public VantaUI components');
