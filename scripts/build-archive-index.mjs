import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve('public/archive');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const write=(p,o)=>fs.writeFileSync(path.join(root,p),JSON.stringify(o,null,2)+'\n');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const libraries=read('library-records.json'), references=read('reference-records.json'), vanta=read('vantaui/catalog.json');
const vantaPublic=fs.existsSync(path.join(root,'vantaui/public-sources.json'))?read('vantaui/public-sources.json'):[];
const localPreviews=new Set(read('previews/manifest.json'));
const variants=new Map(read('previews/variants.json').map(v=>[v.id,v]));
for(const x of vanta) {
  let r=references.find(r=>r.url==='https://www.vantaui.com'+x.href);
  if(!r) { r={id:'vantaui--'+x.href.slice(1).replaceAll('/','--'),source:'vantaui',url:'https://www.vantaui.com'+x.href,files:[],prompts:[],tags:[]}; references.push(r); }
  Object.assign(r,{name:x.title,description:x.description,category:x.badge,kind:x.contentType,previewUrl:x.image,image:'',video:x.video,status:x.isFree?'login':'locked',isFree:x.isFree,accessNote:x.isFree?'官方标记免费；Registry 下载需要登录（HTTP 401）。':'源码与 prompt 需要 VantaUI Plus。'});
  const saved=vantaPublic.find(p=>p.url===r.url);
  if(saved)Object.assign(r,saved,{status:'source'});
}
const categoryRules=[
  ['agent','AI 与智能体',/agent|ai elements|ux patterns|chat|thinking|orb|prompt|streaming|confidence|citation|recommendation|autonomy|handoff|permission|artifact|digest|checkpoint|audit|insight|nudge|tool stream|modelcontext/i],
  ['button','按钮与操作',/button|confirm|action receipt/i],
  ['input','输入与选择',/input|select|toggle|switch|slider|picker|checkbox|radio|range|dial|wheel|rating|assignee|checklist|combobox|calendar|search|form|choicebox/i],
  ['text','文字与排版',/typography|text|heading|label|caption|morph|typehug|truncate|kbd/i],
  ['navigation','导航与菜单',/navigation|menu|toolbar|dock|breadcrumb|pagination|command|reorder|tabs|stepper|sidebar/i],
  ['feedback','反馈与状态',/feedback|status|toast|notify|progress|skeleton|spinner|alert|empty|pull.to.refresh|badge/i],
  ['overlay','浮层与对话框',/overlay|dialog|popover|tooltip|hovercard|sheet/i],
  ['hero','首屏 Hero',/hero/i],['feature','功能展示',/feature.grid|feature/i],['pricing','价格方案',/pricing/i],
  ['testimonial','评价与品牌',/testimonial|logo.cloud/i],['cta','行动引导',/^cta$|call.to.action/i],
  ['footer','页尾与 FAQ',/footer|faq/i],['data','数据展示',/table|chart|stats|stat$|sparkline|data.display|structured|comparison/i],
  ['media','图像与动效',/image|photo|gallery|carousel|tilt|drag|slosh|sound|playing|beam|metal|gooey|gradient|background|animation|palette|aspect/i],
  ['card','卡片与布局',/card|layout|stack|divider|list|scrollarea|avatar|dotgrid|banner|frame|panel|dev surfaces|code.block|snippet|filetree/i],
];
const categories=[...categoryRules.map(([id,name])=>({id,name})),{id:'page',name:'整页设计'},{id:'product',name:'产品参考'},{id:'other',name:'其他'}];
const records=[...libraries,...references].map(r=>{
  r.tags=(r.tags??[]).map(t=>decodeURIComponent(t.replace(/^search\?q=/,'').replaceAll('+',' ')));
  if(r.source==='kage') { r.kind=r.url.includes('/designs/')?'page':'reference'; r.status='prompt'; r.category=['navigation','hero','feature-grid','pricing-table','testimonials','logo-cloud','cta','stats','faq','form','footer','sidebar','table','card','tabs','gallery','code-block','banner','chart'].find(t=>new RegExp('-'+t+'(-\\d+)?$').test(r.url))||'page'; }
  const search=r.source==='kage'?r.category:r.source==='halaska'?r.name+' '+r.category:r.category+' '+r.name;
  r.categoryId=r.kind==='page'?'page':r.source==='builtbydesigners'?'product':categoryRules.find(([, , re])=>re.test(search))?.[0]??'other';
  if(r.source==='halaska'&&r.kind==='pattern')r.categoryId='agent';
  r.name=r.name.replace(/ - VantaUI$/,'');
  r.parentId=r.kind==='page'?'':r.parentId||recordsByUrl(r.parentUrl)?.id||'';
  r.family=r.name==='TextMorph'?'text-morph':r.categoryId;
  r.promptOrigin=r.prompts.length?(r.promptOrigin??'upstream'):'none';
  r.metadataFile=r.metadataFile||(r.slug?`${r.source}/${r.slug}/metadata.json`:'');
  r.localPreviewUrl=localPreviews.has(r.id)?'/archive/previews/'+encodeURIComponent(r.id)+'.html':'';
  const variant=variants.get(r.id);
  r.originalPreviewUrl=variant?.originalPreviewUrl??'';
  r.section=variant?.interaction?'components':['kage','builtbydesigners'].includes(r.source)?'references':'resources';
  r.previewProvenance=variant?.origin??'';
  if(variant?.sourceFile&&!r.files.includes(variant.sourceFile))r.files.push(variant.sourceFile);
  if(r.source==='bencho')for(const f of ['bencho/runtime/exact-runtime.js','bencho/runtime/exact-provenance.json'])if(!r.files.includes(f))r.files.push(f);
  if(r.id==='torph--react')for(const f of ['torph/upstream/site/src/surfaces/demos/inline.module.scss','torph/upstream/site/src/styles/modules/variables.scss'])if(!r.files.includes(f))r.files.push(f);
  const contentFiles=r.files.filter(p=>/\.(tsx?|jsx?|svelte|vue|css)$/.test(p));
  if(contentFiles.length) r.sourceHash=hash((r.exportName??'')+contentFiles.map(p=>fs.readFileSync(path.join(root,p),'utf8').replace(/\r\n/g,'\n')).join('\n'));
  if(r.prompts.length)r.promptHash=hash(r.prompts.map(p=>fs.readFileSync(path.join(root,p),'utf8')).join('\n'));
  return r;
});
function recordsByUrl(url){return references.find(r=>r.url===url);}
const sourceInfo=[
  ['halaska','Halaska','https://ui.halaska.com/','MIT','完整官方 Kit、138 个公开组件/模式导出；LLM API 文档单独保留。'],
  ['bencho','Bencho','https://bencho.dev/','MIT','29 项均可本地交互。12 项提供原始 TSX/CSS 和 Prompt；另 17 项保留设计片段，并从公开网页构建产物接入运行实现。'],
  ['torph','Torph','https://torph.lochie.me/','MIT','完整官方仓库；React、Vue、Svelte、TypeScript 实现及官方示例。'],
  ['typehug','Typehug','https://typehug.aliszu.com/','MIT','完整官方仓库；排版引擎、英语与波兰语规则。'],
  ['kage','Kage','https://kage.design/','原站条款','1,358 个组件参考、257 个整页设计的公开 prompt；不提供对应产品源码。'],
  ['builtbydesigners','Built by Designers','https://builtbydesigners.com/','原站条款','77 个产品参考；原站未提供统一组件源码或 prompt 下载。'],
  ['vantaui','VantaUI','https://www.vantaui.com/','原站条款','87 个组件/区块目录条目；12 个免费组件已保存公开源码，75 个需要 Plus。'],
];
const sources=sourceInfo.map(([id,name,url,license,note])=>({id,name,url,license,note,count:records.filter(r=>r.source===id).length,sourceCount:records.filter(r=>r.source===id&&r.status==='source').length,promptCount:records.filter(r=>r.source===id&&r.prompts.length).length}));
const duplicateGroups=[];
for(const key of ['sourceHash','promptHash']) {
  const groups=new Map();for(const r of records)if(r[key])groups.set(r[key],[...(groups.get(r[key])??[]),r.id]);
  for(const [digest,ids]of groups)if(ids.length>1)duplicateGroups.push({kind:key,digest,ids});
}
write('index.json',{schemaVersion:1,fetchedAt:JSON.parse(fs.readFileSync('archive/sources.json','utf8')).capturedAt,sources,categories,records,duplicateGroups});
// A complete file inventory checks that an archive is intact without executing it.
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root).filter(p=>!p.endsWith('/integrity.json')).map(p=>({path:path.relative(root,p),bytes:fs.statSync(p).size,sha256:hash(fs.readFileSync(p))}));
write('integrity.json',{files});
console.log(JSON.stringify({records:records.length,sources,duplicates:duplicateGroups.length,files:files.length},null,2));
