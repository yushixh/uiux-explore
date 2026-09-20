const token =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|('(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`(?:\\.|[^`\\])*`)|\b(import|from|export|const|let|new|return|function|type|interface|as|await|async|if|else|true|false|null|undefined)\b|\b(\d+(?:\.\d+)?)\b/g;
const kinds = ['comment', 'string', 'keyword', 'number'] as const;

/** Colours a TypeScript sample. The text content stays identical, so copying and selection are unaffected. */
export function highlight(code: string): DocumentFragment {
  const fragment = document.createDocumentFragment();
  let last = 0;
  for (const match of code.matchAll(token)) {
    fragment.append(code.slice(last, match.index));
    const span = document.createElement('span');
    span.className = `tok-${kinds[match.slice(1).findIndex(group => group !== undefined)]}`;
    span.textContent = match[0];
    fragment.append(span);
    last = match.index + match[0].length;
  }
  fragment.append(code.slice(last));
  return fragment;
}
