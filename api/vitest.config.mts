/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import swc from 'unplugin-swc';

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
    root: './',
    alias: {
      '~src': path.resolve(__dirname, './src'),
      test: path.resolve(__dirname, './test'),
    },
  },
  plugins: [
    tsconfigPaths(),
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
      jsc: {
        target: 'esnext',
        parser: {
          syntax: 'typescript',
          decorators: true,
        },
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      // Ensure Vitest correctly resolves TypeScript path aliases
      '~src': path.resolve(__dirname, './src'),
      test: path.resolve(__dirname, './test'),
    },
  },
});
