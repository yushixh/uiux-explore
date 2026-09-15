#!/usr/bin/env python3
"""Restore exact audited extraction inputs, without network requests."""
from pathlib import Path
import gzip, hashlib, json
root=Path(__file__).resolve().parents[1]
snapshots=root/'archive/snapshots'
cache=root/'archive/evidence'
cache.mkdir(parents=True,exist_ok=True)
for item in json.loads((snapshots/'manifest.json').read_text()):
    data=(snapshots/item['snapshot']).read_bytes()
    if item['compressed']: data=gzip.decompress(data)
    assert hashlib.sha256(data).hexdigest()==item['sha256']
    (cache/item['cachePath']).write_bytes(data)
print('Restored exact public-source extraction inputs.')
