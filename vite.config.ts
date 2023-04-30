/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: 'hidden',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        'src/types.ts',
        'server.ts',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
        'none/lcov-report/**',
      ],
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
});
