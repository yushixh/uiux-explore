export interface ArchiveRecord {
  id: string; source: string; name: string; description: string; kind: string;
  categoryId: string; family: string; files: string[]; prompts: string[]; tags: string[];
  url: string; status: string; parentId?: string; exportName?: string; framework?: string;
  image?: string; video?: string; product?: string; productUrl?: string; previewUrl?: string;
  accessNote?: string; promptOrigin?: string; line?: number; metadataFile?: string;
  localPreviewUrl?: string; originalPreviewUrl?: string; previewOrigin?: string; previewProvenance?: string;
  section: 'components' | 'references' | 'resources';
}
export interface ArchiveSource { id: string; name: string; url: string; license: string; note: string; count: number; sourceCount: number; promptCount: number }
export interface ArchiveIndex { fetchedAt: string; records: ArchiveRecord[]; sources: ArchiveSource[]; categories: {id:string;name:string}[]; duplicateGroups: {kind:string;digest:string;ids:string[]}[] }
