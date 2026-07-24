import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

function versionServiceWorker() {
  let serviceWorkerPath = '';
  const buildVersion = Date.now().toString(36);

  return {
    name: 'version-service-worker',
    apply: 'build' as const,
    configResolved(config: { root: string; build: { outDir: string } }) {
      serviceWorkerPath = resolve(config.root, config.build.outDir, 'sw.js');
    },
    async closeBundle() {
      const source = await readFile(serviceWorkerPath, 'utf8');
      await writeFile(
        serviceWorkerPath,
        source.split('__ORAYA_BUILD_VERSION__').join(buildVersion),
        'utf8',
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), versionServiceWorker()],
  build: {
    sourcemap: true,
  },
});
