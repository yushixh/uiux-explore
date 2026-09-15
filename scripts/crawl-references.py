#!/usr/bin/env python3
"""Archive public reference pages. No login, hidden API, or remote code execution.

Uses the saved official sitemaps as the discovery boundary. Resumable, six
concurrent requests, conditional local cache, explicit failure report.
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from html.parser import HTMLParser
from urllib.parse import urlparse
import hashlib, json, re, subprocess, time

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / 'archive/evidence/pages'
OUT = ROOT / 'public/archive'

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.meta, self.links, self.pres = {}, [], {}
        self.active = None
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'meta': self.meta[a.get('property', a.get('name', ''))] = a.get('content', '')
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'pre':
            self.active = a.get('id', 'pre-' + str(len(self.pres)))
            self.pres[self.active] = ''
    def handle_endtag(self, tag):
        if tag == 'pre': self.active = None
    def handle_data(self, data):
        if self.active is not None: self.pres[self.active] += data

def fetch(url, path):
    if path.exists() and path.stat().st_size > 100: return path.read_text()
    path.parent.mkdir(parents=True, exist_ok=True)
    for attempt in range(3):
        r = subprocess.run(['curl', '-LsS', '--fail', '--max-time', '45', url], capture_output=True)
        if r.returncode == 0:
            text = r.stdout.decode('utf-8')
            if '<html' not in text.lower(): raise ValueError('Expected HTML')
            path.write_text(text)
            return text
        if attempt < 2: time.sleep(2 ** attempt)
    raise RuntimeError(r.stderr.decode().strip())

def process(url):
    source = 'kage' if 'kage.design' in url else 'vantaui'
    slug = urlparse(url).path.strip('/').replace('/', '--')
    raw = fetch(url, CACHE / source / (slug + '.html'))
    p = Page(raw)
    folder = OUT / source / slug
    folder.mkdir(parents=True, exist_ok=True)
    prompts = []
    for key, text in p.pres.items():
        if 'prompt' in key and text.strip():
            target = folder / (key + '.md')
            target.write_text(text.strip() + '\n')
            prompts.append(str(target.relative_to(OUT)))
    parent = next((x for x in p.links if x.startswith('/designs/')), '')
    product = next((x for x in p.links if x.startswith('/product/')), '')
    categories = [x.rsplit('/', 1)[-1] for x in p.links if x.startswith('/search?q=')]
    data = dict(id=source+'--'+slug, source=source, slug=slug, url=url,
        name=p.meta.get('og:title',slug), description=p.meta.get('og:description',''),
        image=p.meta.get('og:image',''), prompts=prompts, files=[],
        kind='reference' if source == 'kage' else 'component',
        parentUrl=('https://kage.design'+parent) if parent else '',
        product=product.rsplit('/',1)[-1], tags=categories,
        pageSha256=hashlib.sha256(raw.encode()).hexdigest())
    (folder/'metadata.json').write_text(json.dumps(data, ensure_ascii=False, indent=2)+'\n')
    return data

def main():
    urls = []
    for name in ['kage','vantaui']:
        sitemap=(ROOT/'archive/evidence'/f'{name}-sitemap.xml').read_text()
        urls += [u for u in re.findall(r'<loc>(.*?)</loc>',sitemap)
                 if (name=='kage' and ('/component/' in u or '/designs/' in u))
                 or (name=='vantaui' and re.search(r'/explore/(components|blocks)/[^/]+$',u))]
    urls=list(dict.fromkeys(urls))
    records, errors = [], []
    print(f'Archiving {len(urls)} public pages', flush=True)
    with ThreadPoolExecutor(max_workers=6) as pool:
        jobs={pool.submit(process,u):u for u in urls}
        for i,f in enumerate(as_completed(jobs),1):
            try: records.append(f.result())
            except Exception as e: errors.append(dict(url=jobs[f],error=str(e)))
            if i%50==0: print(f'{i}/{len(urls)}; failures: {len(errors)}',flush=True)
    OUT.mkdir(parents=True,exist_ok=True)
    (OUT/'reference-records.json').write_text(json.dumps(sorted(records,key=lambda x:x['id']),ensure_ascii=False,indent=2)+'\n')
    (OUT/'crawl-report.json').write_text(json.dumps(dict(discovered=len(urls),saved=len(records),errors=errors),indent=2)+'\n')
    print(json.dumps(dict(discovered=len(urls),saved=len(records),failed=len(errors))),flush=True)
    if errors: raise SystemExit(1)

if __name__=='__main__': main()
