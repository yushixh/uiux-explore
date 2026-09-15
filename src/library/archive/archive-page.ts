import { createElement, query } from '../../lib/dom';
import { icon } from '../../lib/icons';
import { LibraryShell } from '../library-shell';
import type { ArchiveIndex, ArchiveRecord } from './types';
import './archive.css';

const statusNames: Record<string,string> = {source:'源码已存',snippet:'运行代码已存',prompt:'Prompt 已存',reference:'产品参考',locked:'需要 Plus',login:'需要登录'};
const sections = {components:'组件',references:'设计参考',resources:'源码与资料'};
type Section = keyof typeof sections;
type View = 'preview' | 'code' | 'prompt';
type Variant = 'original' | 'project';
const PAGE_SIZE=12;
function fileUrl(file: string) { return '/archive/'+file.split('/').map(encodeURIComponent).join('/'); }
function safeUrl(url: string | undefined) { try { const u = new URL(url??''); return ['http:','https:'].includes(u.protocol)?u.href:''; } catch { return ''; } }
function textNode(tag: string, text: string, className='') { const e=document.createElement(tag); e.textContent=text; e.className=className; return e; }

export function createArchivePage() {
  const shell=new LibraryShell(); shell.element.classList.add('archive-shell');
  const abort=new AbortController(), {signal}=abort;
  let data: ArchiveIndex | undefined, selected: ArchiveRecord | undefined;
  let section:Section='components',source='',category='',kind='',availability='',term='',selectedId='',view:View='preview',page=0;
  let version=0, copiedTimer: ReturnType<typeof setTimeout> | undefined;
  const contents=new Map<string,string>(),fileSelections=new Map<string,string>();
  const variantChoices=new Map<string,Variant>();
  const sectionRoutes=new Map<Section,string>();
  shell.actions.innerHTML='<span class="archive-date"></span><a class="archive-manifest" href="/archive/index.json" download title="下载归档索引">索引 ↓</a>';
  shell.sidebar.innerHTML='<h2 class="archive-side-title">资源库</h2><nav class="archive-sections" aria-label="资源分区"></nav><div class="archive-category-label">按用途</div><nav class="archive-categories" aria-label="资源分类"></nav><div class="archive-side-footer"><span class="archive-total"></span><button type="button" class="coverage-open">收录范围与来源 ↗</button></div>';
  shell.main.innerHTML=`<div class="archive-filters"><div class="archive-search">${icon('search')}<input type="search" placeholder="搜索组件…" aria-label="搜索资源" autocomplete="off"><kbd>/</kbd></div><select aria-label="来源站点"><option value="">全部来源</option></select><select aria-label="可用内容"><option value="">全部内容</option><option value="source">有源码</option><option value="prompt">有 Prompt</option><option value="missing">尚无源码</option></select></div><div class="archive-results-heading"><h1 class="archive-heading">组件</h1><span class="archive-count" role="status">正在读取本地归档…</span><button class="archive-clear" type="button">清除筛选</button></div><div class="archive-grid" aria-label="资源卡片"></div><div class="archive-pager"><button type="button" class="page-prev" aria-label="上一页">←</button><span></span><button type="button" class="page-next" aria-label="下一页">→</button></div><dialog class="archive-inspector" aria-label="资源内容"><button class="inspector-close" type="button" aria-label="关闭资源内容">×</button><section class="archive-detail"></section></dialog><dialog class="coverage-dialog"><div class="coverage-heading"><h2>收录范围与来源</h2><button class="coverage-close" type="button" aria-label="关闭收录范围">×</button></div><div class="coverage-content"></div></dialog>`;
  const search=query<HTMLInputElement>(shell.main,'input');
  const sourceSelect=query<HTMLSelectElement>(shell.main,'[aria-label="来源站点"]');
  const availabilitySelect=query<HTMLSelectElement>(shell.main,'[aria-label="可用内容"]');
  const detail=query(shell.main,'.archive-detail'),list=query(shell.main,'.archive-grid');
  const dialog=query<HTMLDialogElement>(shell.main,'.coverage-dialog');
  const inspector=query<HTMLDialogElement>(shell.main,'.archive-inspector');
  const categories=query(shell.sidebar,'.archive-categories');
  const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){const frame=e.target as HTMLIFrameElement;if(frame.dataset.src){frame.src=frame.dataset.src;delete frame.dataset.src;}observer.unobserve(frame);}},{rootMargin:'160px'});
  function readRoute() {
    const p=new URLSearchParams(location.hash.split('?')[1]??'');
    selectedId=p.get('id')??'';
    const requestedSection=p.get('section');
    section=requestedSection&&requestedSection in sections?requestedSection as Section:data?.records.find(r=>r.id===selectedId)?.section??'components';
    source=p.get('source')??'';category=p.get('category')??'';kind=p.get('kind')??'';
    availability=p.get('has')??'';term=p.get('q')??'';page=Math.max(0,Number(p.get('page'))||0);
    const rawView=p.get('view');view=rawView==='code'||rawView==='prompt'?rawView:'preview';
    search.value=term;availabilitySelect.value=availability;
  }
  function writeRoute(push=false) {
    const p=new URLSearchParams({section});
    for(const [k,v]of Object.entries({source,category,kind,has:availability,q:term,id:selectedId,page:page?String(page):''}))if(v)p.set(k,v);
    history[push?'pushState':'replaceState'](null,'','#archive?'+p);
    sectionRoutes.set(section,location.hash);
  }
  function matches(r:ArchiveRecord, includeCategory=true) {
    const words=term.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const haystack=[r.name,r.description,r.product,...r.tags,data?.categories.find(c=>c.id===r.categoryId)?.name,data?.sources.find(s=>s.id===r.source)?.name].join(' ').toLocaleLowerCase();
    return r.section===section&&(!source||r.source===source)&&(!includeCategory||!category||r.categoryId===category)&&(!kind||r.kind===kind)&&
      (!availability||(availability==='preview'?r.section==='components':availability==='source'?r.files.length>0:availability==='prompt'?r.prompts.length>0:availability==='snippet'?r.status==='snippet':!r.files.length))&&words.every(w=>haystack.includes(w));
  }
  function link(text:string,url:string,className='') { const a=document.createElement('a');a.textContent=text;a.href=safeUrl(url)||'#';a.target='_blank';a.rel='noopener noreferrer';a.className=className;return a; }
  function openContent(r:ArchiveRecord,nextView:View){selected=r;selectedId=r.id;view=nextView;writeRoute();void renderDetail();if(!inspector.open)inspector.showModal();}
  function relatedLink(r:ArchiveRecord,label?:string) { const a=document.createElement('a');a.href='#archive?'+new URLSearchParams({section:r.section,id:r.id});a.textContent=label??r.name;a.addEventListener('click',e=>{e.preventDefault();inspector.close();location.hash=a.hash;},{signal});return a; }
  function action(label:string,glyph:'code'|'eye',run:()=>void){const b=document.createElement('button');b.type='button';b.title=label;b.setAttribute('aria-label',label);b.innerHTML=icon(glyph);b.addEventListener('click',run,{signal});return b;}
  function renderCard(r:ArchiveRecord){
    const card=textNode('article','','archive-card');card.dataset.id=r.id;card.setAttribute('aria-label',r.name);card.classList.toggle('is-target',r.id===selectedId);
    const header=textNode('header','','archive-card-heading');
    const title=textNode('div','','archive-card-title');title.append(textNode('h2',r.name),textNode('span',data!.sources.find(s=>s.id===r.source)?.name??r.source));
    if(r.section!=='components'){const name=document.createElement('button');name.type='button';name.textContent=r.name;name.setAttribute('aria-label','查看 '+r.name+' 详情');name.addEventListener('click',()=>openContent(r,r.section==='references'?'preview':r.files.length?'code':'preview'),{signal});query(title,'h2').replaceChildren(name);}
    header.append(title);card.append(header);
    if(r.section==='components'){
      const controls=textNode('div','','archive-variants');controls.setAttribute('role','group');controls.setAttribute('aria-label',r.name+' 版本');
      const stage=textNode('div','','archive-card-stage');const frames=new Map<Variant,HTMLIFrameElement>();
      const buttons=new Map<Variant,HTMLButtonElement>();
      const selectVariant=(variant:Variant)=>{
        variantChoices.set(r.id,variant);
        for(const [v,b] of buttons)b.setAttribute('aria-pressed',String(v===variant));
        for(const [v,f] of frames)f.hidden=v!==variant;
        if(!frames.has(variant)){
          const frame=document.createElement('iframe');frame.title=r.name+' · '+(variant==='original'?'原始版':'本项目版');frame.setAttribute('sandbox','allow-scripts');frame.dataset.src=variant==='original'?r.originalPreviewUrl!:r.localPreviewUrl!;
          stage.append(frame);frames.set(variant,frame);observer.observe(frame);
        }
      };
      for(const [v,label] of [['original','原始版'],['project','本项目版']] as const){const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',()=>selectVariant(v),{signal});buttons.set(v,b);controls.append(b);}
      header.append(controls);card.append(stage);selectVariant(variantChoices.get(r.id)??'original');
    }else if(r.section==='references'&&safeUrl(r.image)){
      const image=document.createElement('img');image.src=safeUrl(r.image);image.alt=r.name;image.loading='lazy';image.referrerPolicy='no-referrer';image.className='archive-reference-image';
      image.addEventListener('error',()=>{image.remove();card.classList.add('image-unavailable');},{once:true});card.append(image);
    }else{
      const summary=textNode('div','','archive-card-summary');summary.append(textNode('p',r.description||r.name));
      summary.append(textNode('span',r.section==='resources'?(r.files.length?'已归档源码 · 暂无独立交互示例':r.accessNote??'原站目录条目'):'设计参考 · '+(r.prompts.length?'已保存 Prompt':'产品介绍')));card.append(summary);
    }
    const footer=textNode('footer','','archive-card-footer');
    const provenance=r.section==='components'?'本地运行':r.section==='references'?(r.kind==='page'?'整页设计':r.product||'设计参考'):r.kind==='library'?'工具库':r.files.length?'源码资料':'公开目录';
    footer.append(textNode('span',provenance,'archive-card-caption'));
    const actions=textNode('div','','archive-card-actions');
    if(r.files.length)actions.append(action('查看 '+r.name+' 源码','code',()=>openContent(r,'code')));
    if(r.prompts.length){const p=document.createElement('button');p.type='button';p.textContent='P';p.title='查看 Prompt';p.setAttribute('aria-label','查看 '+r.name+' Prompt');p.addEventListener('click',()=>openContent(r,'prompt'),{signal});actions.append(p);}
    if(r.section==='components')actions.append(action('放大 '+r.name,'eye',()=>openContent(r,'preview')));
    const origin=link('↗',r.url);origin.title='原网页';origin.setAttribute('aria-label',r.name+' 原网页');actions.append(origin);footer.append(actions);card.append(footer);return card;
  }
  function render(){
    if(!data)return;
    observer.disconnect();
    const sectionRecords=data.records.filter(r=>r.section===section);
    sourceSelect.replaceChildren(new Option('全部来源',''));
    for(const s of data.sources){const count=sectionRecords.filter(r=>r.source===s.id).length;if(count)sourceSelect.add(new Option(s.name+' · '+count,s.id));}
    if(source&&!sectionRecords.some(r=>r.source===source))source='';sourceSelect.value=source;
    const narrowed=data.records.filter(r=>matches(r,false)),results=narrowed.filter(r=>!category||r.categoryId===category);
    if(selectedId){const index=results.findIndex(r=>r.id===selectedId);if(index>=0)page=Math.floor(index/PAGE_SIZE);}
    page=Math.min(page,Math.max(0,Math.ceil(results.length/PAGE_SIZE)-1));
    const counts=new Map<string,number>();for(const r of narrowed)counts.set(r.categoryId,(counts.get(r.categoryId)??0)+1);
    const nav=query(shell.sidebar,'.archive-sections');nav.replaceChildren();
    for(const [id,name] of Object.entries(sections)){
      const b=createElement<HTMLButtonElement>('<button type="button"><span></span><small></small></button>');b.firstElementChild!.textContent=name;b.lastElementChild!.textContent=String(data.records.filter(r=>r.section===id).length);b.setAttribute('aria-pressed',String(section===id));
      b.addEventListener('click',()=>{sectionRoutes.set(section,location.hash);location.hash=sectionRoutes.get(id as Section)??'#archive?section='+id;},{signal});nav.append(b);
    }
    categories.replaceChildren();
    for(const c of [{id:'',name:'全部'+sections[section]},...data.categories.filter(c=>counts.has(c.id)||c.id===category)]){
      const b=createElement<HTMLButtonElement>('<button type="button"><span></span><small></small></button>');b.firstElementChild!.textContent=c.name;b.lastElementChild!.textContent=String(c.id?counts.get(c.id)??0:narrowed.length);b.setAttribute('aria-pressed',String(category===c.id));b.addEventListener('click',()=>{category=c.id;selectedId='';page=0;writeRoute(true);render();},{signal});categories.append(b);
    }
    search.placeholder='搜索'+sections[section]+'…';query(shell.main,'.archive-heading').textContent=category?data.categories.find(c=>c.id===category)?.name??sections[section]:sections[section];
    query(shell.main,'.archive-count').textContent=results.length.toLocaleString()+' 项';query(shell.sidebar,'.archive-total').textContent=`${data.sources.length} 个来源 · ${data.records.length.toLocaleString()} 项归档`;
    list.dataset.section=section;list.replaceChildren(...results.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE).map(renderCard));
    if(!results.length)list.append(textNode('p','没有匹配的'+sections[section]+'。试试其他关键词或清除筛选。','archive-empty'));
    query<HTMLButtonElement>(shell.main,'.page-prev').disabled=page===0;query<HTMLButtonElement>(shell.main,'.page-next').disabled=(page+1)*PAGE_SIZE>=results.length;
    query(shell.main,'.archive-pager span').textContent=results.length?`${page+1} / ${Math.ceil(results.length/PAGE_SIZE)}`:'0 / 0';writeRoute();
  }
  async function renderDetail() {
    const token=++version,r=selected;detail.replaceChildren();
    if(!r||!data){detail.append(textNode('p','选择一个资源查看源码和 Prompt。','archive-empty'));return;}
    const s=data.sources.find(s=>s.id===r.source)!;
    const header=createElement('<header class="archive-detail-heading"><p></p><h2></h2><div class="archive-meta"></div></header>');
    query(header,'p').textContent=`${s.name} / ${data.categories.find(c=>c.id===r.categoryId)?.name??''}`;
    query(header,'h2').textContent=r.name;
    const meta=query(header,'.archive-meta');meta.append(textNode('span',statusNames[r.status]??r.status,'status-pill '+r.status),textNode('span',r.section==='components'?'交互组件':r.section==='references'?'设计参考':'源码与资料'),link('原站 ↗',r.url));
    if(safeUrl(r.productUrl))meta.append(link('打开产品 ↗',r.productUrl!));
    detail.append(header);
    if(r.description)detail.append(textNode('p',r.description,'archive-description'));
    if(r.accessNote&&r.status!=='source')detail.append(textNode('p',r.accessNote,'archive-access-note'));
    const parent=data.records.find(x=>x.id===r.parentId);
    if(parent){const row=textNode('div','所属页面 / ','archive-parent');row.append(relatedLink(parent));detail.append(row);}
    const toolbar=createElement('<div class="archive-viewbar"><div class="archive-views" role="group" aria-label="查看内容"></div><span class="archive-file-count"></span></div>');
    for(const [v,label]of [['code','源码','code'],['prompt','Prompt','clipboard']] as const){
      const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',label);b.title=label;b.setAttribute('aria-pressed',String(view===v));
      b.innerHTML=v==='prompt'?'<span aria-hidden="true">P</span>':icon('code');
      b.addEventListener('click',()=>{view=v;writeRoute();void renderDetail();},{signal});query(toolbar,'.archive-views').append(b);
    }
    query(toolbar,'.archive-file-count').textContent=view==='code'?`${r.files.length} 个文件`:view==='prompt'?(r.prompts.length?'原站 Prompt':'未提供 Prompt'):'当前资源';
    detail.append(toolbar);
    const stage=textNode('div','','archive-content');detail.append(stage);
    if(view==='preview') {
      const preview=r.section==='components'?(variantChoices.get(r.id)==='project'?r.localPreviewUrl:r.originalPreviewUrl):'';
      if(token!==version||signal.aborted)return;
      if(preview){const frame=document.createElement('iframe');frame.title=r.name+' 本地预览';frame.src=preview;frame.setAttribute('sandbox','allow-scripts');stage.append(frame);stage.append(textNode('span',variantChoices.get(r.id)==='project'?'本项目版':'原始版 · 本地运行','preview-caption'));}
      else if(safeUrl(r.image)) {
        const img=document.createElement('img');img.src=safeUrl(r.image);img.alt=r.name+' 原站参考图';img.loading='lazy';img.referrerPolicy='no-referrer';
        img.addEventListener('error',()=>{img.remove();stage.append(textNode('p','原站参考图暂不可用，源码和 Prompt 仍可本地查看。','archive-empty'));},{once:true});
        stage.classList.add('image-content');stage.append(img,textNode('span','静态参考图 · 不支持交互 · 图片需要联网','preview-caption'));
      } else { stage.append(textNode('p',r.status==='source'?'尚未接入本地交互预览；已保存原站源码。':r.status==='snippet'?'尚未接入本地交互预览；目前已保存设计代码片段。':'此条目是参考目录，尚无本地交互预览。','archive-empty')); const actions=textNode('div','','archive-preview-actions'); if(r.files.length){const code=document.createElement('button');code.type='button';code.textContent='查看已保存代码';code.addEventListener('click',()=>{view='code';writeRoute();void renderDetail();},{signal});actions.append(code);}actions.append(link('到原站查看 ↗',r.url));stage.append(actions); }
    } else {
      const files=view==='prompt'?r.prompts:r.files;
      if(view==='code'&&r.previewOrigin==='upstream-bundle')stage.append(textNode('p','已保存原站设计片段与公开网页的 JavaScript 运行实现。运行入口经过依赖适配，并非作者原始 TSX。','preview-caption'));
      if(!files.length)stage.append(textNode('p',view==='prompt'?'原站未公开提供该资源的 Prompt。':r.accessNote??(r.status==='prompt'?'该条目提供设计 Prompt，原站未提供对应产品源码。':'原站未提供可归档的组件源码。'),'archive-empty'));
      else {
        const filebar=createElement('<div class="archive-filebar"><select aria-label="选择文件"></select><button type="button" class="archive-copy">复制</button><a class="archive-download" download>下载 ↓</a></div>');
        const select=query<HTMLSelectElement>(filebar,'select');for(const f of files)select.add(new Option(f.split('/').slice(-3).join('/'),f));
        const selectionKey=r.id+':'+view;const remembered=fileSelections.get(selectionKey);if(remembered&&files.includes(remembered))select.value=remembered;
        const pre=createElement<HTMLPreElement>('<pre tabindex="0"><code></code></pre>');stage.append(filebar,pre);
        let fileVersion=0;let currentText='';
        async function loadFile(){
          const fv=++fileVersion, f=select.value;currentText='';query(pre,'code').textContent='正在读取文件…';
          fileSelections.set(selectionKey,f);
          const copy=query<HTMLButtonElement>(filebar,'.archive-copy');copy.disabled=true;
          query<HTMLAnchorElement>(filebar,'a').href=fileUrl(f);
          try{let text=contents.get(f);if(text===undefined){const response=await fetch(fileUrl(f),{signal});if(!response.ok)throw Error('missing');text=await response.text();if(text.startsWith('<!DOCTYPE html>')||text.startsWith('<!doctype html>'))throw Error('missing');contents.set(f,text);}
            if(fv!==fileVersion||token!==version||signal.aborted)return;currentText=text;query(pre,'code').textContent=text;copy.disabled=false;
            if(r?.source==='halaska'&&r.line&&f.endsWith('.jsx'))pre.scrollTop=Math.max(0,(r.line-3)*19);
          }catch{if(!signal.aborted&&fv===fileVersion)query(pre,'code').textContent='文件未能读取。请检查本地归档或重新选择文件。';}
        }
        select.addEventListener('change',()=>{void loadFile();},{signal});
        query(filebar,'.archive-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(currentText);query(filebar,'.archive-copy').textContent='已复制';}catch{query(filebar,'.archive-copy').textContent='请选中文本复制';}if(copiedTimer)clearTimeout(copiedTimer);copiedTimer=setTimeout(()=>{if(filebar.isConnected)query(filebar,'.archive-copy').textContent='复制';},1800);},{signal});
        if(view==='prompt'&&r.promptOrigin==='upstream-template')stage.append(textNode('p',r.source==='vantaui'?'原站“阅读此页”询问模板，不是组件重建 Prompt。':'按原站公开 Copy prompt 模板生成，源码与说明保持原文。','preview-caption'));
        void loadFile();
      }
    }
    if(token!==version||signal.aborted)return;
    const children=data.records.filter(x=>x.parentId===r.id);
    const peers=data.records.filter(x=>x.id!==r.id&&x.section===r.section&&x.categoryId===r.categoryId&&x.kind!=='example').sort((a,b)=>Number(b.source!==r.source)-Number(a.source!==r.source)).slice(0,6);
    const related=textNode('div','','archive-related');
    if(children.length){related.append(textNode('h3',`包含 ${children.length} 个参考区块`));const links=textNode('div','','related-links');children.forEach(x=>links.append(relatedLink(x)));related.append(links);}
    else if(peers.length){related.append(textNode('h3',r.family==='text-morph'?'其他框架实现':r.section==='components'?'同类组件':'相关资料'));const links=textNode('div','','related-links');const entries=r.family==='text-morph'?data.records.filter(x=>x.family===r.family&&x.id!==r.id):peers;entries.forEach(x=>links.append(relatedLink(x,`${x.name} · ${data!.sources.find(s=>s.id===x.source)?.name}${x.framework?' / '+x.framework:''}`)));related.append(links);}
    detail.append(related);
  }

  function filter(){source=sourceSelect.value;availability=availabilitySelect.value;term=search.value;kind='';selectedId='';page=0;writeRoute();render();}
  search.addEventListener('input',filter,{signal});for(const select of [sourceSelect,availabilitySelect])select.addEventListener('change',filter,{signal});
  query(shell.main,'.archive-clear').addEventListener('click',()=>{source=category=kind=availability=term=selectedId='';search.value='';sourceSelect.value=availabilitySelect.value='';page=0;writeRoute(true);render();},{signal});
  function paginate(delta:number){page+=delta;selectedId='';writeRoute(true);render();query(shell.main,'.archive-results-heading').scrollIntoView({block:'start'});}
  query(shell.main,'.page-prev').addEventListener('click',()=>paginate(-1),{signal});query(shell.main,'.page-next').addEventListener('click',()=>paginate(1),{signal});
  query(shell.sidebar,'.coverage-open').addEventListener('click',()=>dialog.showModal(),{signal});query(dialog,'.coverage-close').addEventListener('click',()=>dialog.close(),{signal});dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();},{signal});
  query(inspector,'.inspector-close').addEventListener('click',()=>inspector.close(),{signal});inspector.addEventListener('click',e=>{if(e.target===inspector)inspector.close();},{signal});inspector.addEventListener('close',()=>{version++;detail.replaceChildren();},{signal});
  const route=()=>{if(location.hash.startsWith('#archive')){if(inspector.open)inspector.close();readRoute();render();}};window.addEventListener('hashchange',route,{signal});window.addEventListener('popstate',route,{signal});
  document.addEventListener('keydown',e=>{const editing=e.target instanceof HTMLElement&&(e.target.matches('input,textarea,select')||e.target.isContentEditable);if(e.key==='/'&&!editing&&!e.metaKey&&!e.ctrlKey&&!dialog.open&&!inspector.open){e.preventDefault();search.focus();}if(e.key==='Escape'&&document.activeElement===search){search.value='';filter();}},{signal});
  readRoute();
  void fetch('/archive/index.json',{signal}).then(async response=>{if(!response.ok)throw Error('index');data=await response.json() as ArchiveIndex;if(signal.aborted)return;readRoute();
    query(shell.actions,'.archive-date').textContent='本地归档 · '+data.fetchedAt.slice(0,10);
    const coverage=query(dialog,'.coverage-content');coverage.append(textNode('p','组件只收录可在本地实际操作的示例。原始版使用归档时的原站实现、样式和素材；本项目版保留本地适配。设计参考与源码资料独立浏览。'));
    for(const s of data.sources){const block=document.createElement('section');block.append(textNode('h3',`${s.name} · ${s.count}`),textNode('p',s.note),link('原站 ↗',s.url));coverage.append(block);}render();
  }).catch(()=>{if(!signal.aborted){query(shell.main,'.archive-count').textContent='归档索引未能读取';const retry=document.createElement('button');retry.textContent='重新加载';retry.addEventListener('click',()=>location.reload(),{signal});list.append(retry);}});
  return {element:shell.element,destroy(){abort.abort();observer.disconnect();version++;if(copiedTimer)clearTimeout(copiedTimer);}};
}
