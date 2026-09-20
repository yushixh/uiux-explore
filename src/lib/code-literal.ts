/** Prints data the way the surrounding samples are written: single quotes, bare keys, two-space indent. */
export function codeLiteral(value: unknown, indent = ''): string {
  if (typeof value === 'string') return `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;
  if (Array.isArray(value)) return `[${value.map(item => codeLiteral(item, indent)).join(', ')}]`;
  if (value && typeof value === 'object') {
    const inner = `${indent}  `;
    const rows = Object.entries(value).map(([key, item]) => {
      const name = /^[A-Za-z_$][\w$]*$/.test(key) ? key : codeLiteral(key);
      return `${inner}${name}: ${codeLiteral(item, inner)},`;
    });
    return rows.length ? `{\n${rows.join('\n')}\n${indent}}` : '{}';
  }
  return String(value);
}
