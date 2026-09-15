import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parseAst } from 'rollup/parseAst';
import { analyze } from 'eslint-scope';
import { transform } from 'esbuild';

// Statically select component declarations from the saved public bundle.
// Never evaluate the bundle or include its app startup, account or analytics code.
const root = path.resolve('public/archive');
const raw = fs.readFileSync('archive/evidence/bencho.js', 'utf8');
const bundleHash = crypto.createHash('sha256').update(raw).digest('hex');
if (bundleHash !== 'f5e1a85831371c487ec7907503ddc4683fc76e2b5ec3c0ab24111d94fc197226') {
  throw new Error('Bencho bundle changed: review the dependency aliases before extracting a new version.');
}
const ast = parseAst(raw);
const catalogNodes = new Map();
function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type) node.range = [node.start, node.end];
  if (node.type === 'ObjectExpression') {
    const props = new Map(node.properties.filter(p => p.type === 'Property').map(p => [p.key.name, p.value]));
    const id = props.get('id')?.quasis?.[0]?.value.cooked;
    if (id && props.has('render') && props.has('css')) catalogNodes.set(id, props.get('render'));
  }
  for (const [key, value] of Object.entries(node)) {
    if (key === 'range') continue;
    if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') walk(value);
  }
}
walk(ast);
const scopes = analyze(ast, { ecmaVersion: 2024, sourceType: 'module' });
const moduleScope = scopes.scopes.find(s => s.type === 'module');
const variables = new Map(moduleScope.variables.map(v => [v.name, v]));
const refs = scopes.scopes.flatMap(s => s.references).filter(r => r.resolved?.scope === moduleScope);
// These aliases were verified against their declarations in this pinned bundle.
const imports = `import * as y from 'react';
import * as U from 'react/jsx-runtime';
import * as Ap from 'react-dom';
import {motion as K, useMotionValue as ku, useTransform as Mu, AnimatePresence as Lc} from 'framer-motion';
import {createLucideIcon as q} from 'lucide-react';
import {Liquid as zm} from 'liquid-gooey';
// The original site's global sound preference is not part of a component preview.
const J = () => {};
`;
const external = new Set(['y', 'U', 'Ap', 'K', 'ku', 'Mu', 'Lc', 'q', 'zm', 'J']);
const declarations = new Map();
function pull(node) {
  for (const ref of refs) {
    if (ref.identifier.start < node.start || ref.identifier.end > node.end) continue;
    const name = ref.identifier.name;
    if (external.has(name)) continue;
    const definition = variables.get(name)?.defs[0]?.node;
    if (!definition) throw new Error('Missing declaration: ' + name);
    if (declarations.has(definition.start)) continue;
    declarations.set(definition.start, definition);
    pull(definition);
  }
}
const records = JSON.parse(fs.readFileSync(path.join(root, 'library-records.json'), 'utf8'));
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'bencho/catalog.json'), 'utf8'));
const snippets = records.filter(r => r.source === 'bencho');
const renderers = [];
for (const record of snippets) {
  const id = record.id.replace('bencho--', '');
  const render = catalogNodes.get(id);
  if (!render) throw new Error('Missing public renderer: ' + id);
  pull(render);
  const params = Object.fromEntries((catalog.find(c => c.id === id)?.params ?? []).map(p => [p.id, p.default]));
  renderers.push(`${JSON.stringify(record.id)}: () => (${raw.slice(render.start, render.end)})(${JSON.stringify(params)})`);
}
const defs = variables.get('hd').defs[0].node;
declarations.set(defs.start, defs); pull(defs);
const ordered = [...declarations.values()].sort((a, b) => a.start - b.start);
const fragments = ordered.map(n => (n.type === 'VariableDeclarator' ? 'var ' : '') + raw.slice(n.start, n.end) + ';').join('\n');
const folder = path.join(root, 'bencho/runtime'); fs.mkdirSync(folder, { recursive: true });
const header = `// Bencho — Lorenzo Cabra — https://bencho.dev/\n// Extracted from the public production bundle; not the original authoring TSX.\n// Dependency imports and sound handling are local preview adapters.\n`;
fs.writeFileSync(path.join(folder, 'original-declarations.js.txt'), header + fragments + '\n');
const code = imports + fragments + `\nexport const renderers = {${renderers.join(',\n')}};\nexport {hd as SharedFilters};\n`;
const formatted = await transform(code, { loader: 'js', format: 'esm', target: 'es2022' });
fs.writeFileSync(path.join(folder, 'components.js'), header + formatted.code);
fs.copyFileSync('archive/evidence/bencho.css', path.join(folder, 'upstream.css'));
fs.writeFileSync(path.join(folder, 'provenance.json'), JSON.stringify({
  source: 'https://bencho.dev/assets/index-DkISJD_p.js', author: 'Lorenzo Cabra',
  sha256: bundleHash,
  entryIds: snippets.map(r => r.id),
  declarations: ordered.map(n => ({ start: n.start, end: n.end })),
  adapters: [...external],
}, null, 2) + '\n');
for (const record of snippets) {
  const dir = 'bencho/' + record.id.replace('bencho--', '');
  const entry = dir + '/runtime-entry.js';
  fs.writeFileSync(path.join(root, entry), header + `import {renderers} from '../runtime/components.js';\nexport default renderers[${JSON.stringify(record.id)}];\n`);
  record.files = [entry, ...record.files.filter(f => !f.includes('/runtime/') && !f.endsWith('/runtime-entry.js')), 'bencho/runtime/components.js', 'bencho/runtime/upstream.css', 'bencho/runtime/provenance.json'];
  if (record.status === 'snippet') record.previewOrigin = 'upstream-bundle';
}
fs.writeFileSync(path.join(root, 'library-records.json'), JSON.stringify(records, null, 2) + '\n');
console.log(`Extracted ${snippets.length} public renderers, ${ordered.length} declarations, ${fragments.length} bytes.`);

// Original previews also retain the exact bundled dependency implementations.
// The adapted module above remains exclusive to the project version.
external.clear();declarations.clear();
for(const record of snippets)pull(catalogNodes.get(record.id.replace('bencho--','')));
for(const name of ['hd','md','Wc','ud']){const def=variables.get(name).defs[0].node;declarations.set(def.start,def);pull(def);}
const exactOrdered=[...declarations.values()].sort((a,b)=>a.start-b.start);
const exactFragments=exactOrdered.map(n=>(n.type==='VariableDeclarator'?'var ':'')+raw.slice(n.start,n.end)+';').join('\n');
const exactEntry=`\nconst archiveId=document.body.dataset.id;\nconst archiveRenderers={${renderers.join(',\n')}};\nclass ArchiveBoundary extends y.Component{constructor(p){super(p);this.state={error:false}}static getDerivedStateFromError(){return{error:true}}componentDidCatch(e){document.body.dataset.previewStatus='error';console.error(e)}render(){return this.state.error?U.jsx('p',{children:'预览加载失败'}):this.props.children}}\nmd.createRoot(document.getElementById('root')).render(U.jsx(ArchiveBoundary,{children:U.jsx(Wc,{reducedMotion:'user',children:U.jsx(ud.Provider,{value:{weight:'regular',color:'currentColor'},children:U.jsxs('div',{className:'original-stage','data-fill':'light','data-surface':'flat',children:[U.jsx(hd,{}),archiveRenderers[archiveId]()]})})})}));document.body.dataset.previewStatus='ready';\n`;
fs.writeFileSync(path.join(folder,'exact-runtime.js'),`// Exact public Bencho declarations and dependencies. Catalogue/startup excluded.\n// Lorenzo Cabra — https://bencho.dev/\n`+exactFragments+exactEntry);
fs.writeFileSync(path.join(folder,'exact-provenance.json'),JSON.stringify({source:'https://bencho.dev/assets/index-DkISJD_p.js',sha256:bundleHash,author:'Lorenzo Cabra',dependencyReplacements:[],entryIds:snippets.map(r=>r.id),declarations:exactOrdered.map(n=>({start:n.start,end:n.end}))},null,2)+'\n');
console.log(`Preserved exact original dependencies: ${exactOrdered.length} declarations, ${exactFragments.length} bytes.`);
