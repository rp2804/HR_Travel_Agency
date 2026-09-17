import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Reporter */
  reporter: [["list"], ["html", { open: "never" }]],
  /* Shared settings for all projects */
  use: {
    baseURL: "http://localhost:5173",
    /* Collect trace when retrying the failed test */
    trace: "on-first-retry",
    /* Take a screenshot on test failure */
    screenshot: "only-on-failure",
    /* Headless by default */
    headless: true,
    /* Viewport */
    viewport: { width: 1280, height: 800 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* Run dev server before running tests if not already running */
  webServer: {
    command: "npm run dev",
    port: 5173,
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
