import * as path from 'path';

import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
