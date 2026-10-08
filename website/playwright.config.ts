import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: process.env.SITE_BASE ? '**/preview.spec.ts' : '**/site.spec.ts',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://127.0.0.1:4388', trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run preview -- --port 4388 --ignore-lock',
    url: `http://127.0.0.1:4388${process.env.SITE_BASE || ''}/`,
    reuseExistingServer: false,
  },
});
