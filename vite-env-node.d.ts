declare module 'node:fs/promises' {
  export function readFile(path: string, encoding: 'utf8'): Promise<string>;
  export function writeFile(path: string, data: string, encoding: 'utf8'): Promise<void>;
}

declare module 'node:path' {
  export function resolve(...paths: string[]): string;
}
