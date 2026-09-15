import React, { useLayoutEffect, useRef, useState } from 'react';
import { renderers, SharedFilters } from '../../public/archive/bencho/runtime/components.js';

// Keep the archived implementation intact. This wrapper adds keyboard/focus
// behavior to the Create menu and keeps its collapsed rows out of the tab order.
export default function BenchoRuntimeDemo({ id }) {
  const host = useRef(null);
  const [version, setVersion] = useState(0);
  const restoreFocus = useRef(false);
  useLayoutEffect(() => {
    if (id !== 'bencho--liq-create') return;
    const root = host.current;
    const stage = root.querySelector('.crt-stage');
    const trigger = root.querySelector('.crt-pill');
    const panel = root.querySelector('.crt-panel');
    const items = [...root.querySelectorAll('.crt-item button')];
    if (!stage || !trigger || !panel) return;
    let focusOnOpen = null;
    const open = () => stage.dataset.open === 'true';
    panel.id = 'create-menu-options';
    panel.setAttribute('role', 'menu');
    panel.setAttribute('aria-label', 'Create');
    trigger.setAttribute('aria-haspopup', 'menu');
    trigger.setAttribute('aria-controls', panel.id);
    items.forEach(item => item.setAttribute('role', 'menuitem'));
    const sync = () => {
      const expanded = open();
      if (!expanded && panel.contains(document.activeElement)) trigger.focus();
      panel.inert = !expanded;
      panel.setAttribute('aria-hidden', String(!expanded));
      if (expanded && focusOnOpen !== null) {
        items[focusOnOpen]?.focus(); focusOnOpen = null;
      }
    };
    sync();
    if (restoreFocus.current) { trigger.focus(); restoreFocus.current = false; }
    const observer = new MutationObserver(sync);
    observer.observe(stage, { attributes: true, attributeFilter: ['data-open'] });
    const keydown = event => {
      if (event.key === 'Escape' && (open() || stage.dataset.sink)) {
        event.preventDefault(); event.stopPropagation();
        restoreFocus.current = true; setVersion(v => v + 1); return;
      }
      if (event.target === trigger && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
        focusOnOpen = event.key === 'ArrowUp' ? items.length - 1 : 0;
        if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); trigger.click(); }
        return;
      }
      if (!open() || !items.includes(document.activeElement)) return;
      const index = items.indexOf(document.activeElement);
      const next = event.key === 'ArrowDown' ? (index + 1) % items.length
        : event.key === 'ArrowUp' ? (index - 1 + items.length) % items.length
        : event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : null;
      if (next !== null) { event.preventDefault(); items[next].focus(); }
    };
    root.addEventListener('keydown', keydown);
    return () => { observer.disconnect(); root.removeEventListener('keydown', keydown); };
  }, [id, version]);
  return <div ref={host} className="bencho-runtime-preview" style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
    <SharedFilters />
    <React.Fragment key={version}>{renderers[id]()}</React.Fragment>
  </div>;
}
