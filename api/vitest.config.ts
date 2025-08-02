/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    // runner: 'node',
    setupFiles: ['./test/setup/vitestSetup.ts'],
    include: ['./test/**/*.e2e-spec.ts', './src/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [tsconfigPaths()],
});
