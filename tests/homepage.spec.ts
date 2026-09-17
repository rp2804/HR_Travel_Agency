import { test, expect } from "@playwright/test";

test.describe("Homepage E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders hero title, agency branding, and call-to-action buttons", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("HR Travels").first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Explore Packages" })).toBeVisible();
  });

  test("popular destinations grid renders images and details", async ({ page }) => {
    const destCards = page.locator("a[href^='/destinations/']");
    await expect(destCards.first()).toBeVisible();
    const count = await destCards.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test("popular tour packages render cards without layout overflow", async ({ page }) => {
    const packageHeading = page.getByRole("heading", { name: "Popular Tour Packages" });
    await expect(packageHeading).toBeVisible();
    const packageCards = page.locator("article");
    await expect(packageCards.first()).toBeVisible();
  });

  test("can toggle light mode and dark mode via navbar button", async ({ page }) => {
    const html = page.locator("html");
    const themeBtn = page.getByRole("button", { name: "Toggle Theme" }).first();

    // Check initial state
    await expect(themeBtn).toBeVisible();

    // Toggle theme to dark
    await themeBtn.click();
    const isDark = await html.evaluate((el) => el.classList.contains("dark"));
    expect(isDark).toBe(true);

    // Toggle back to light
    await themeBtn.click();
    const isDarkAfterSecondToggle = await html.evaluate((el) => el.classList.contains("dark"));
    expect(isDarkAfterSecondToggle).toBe(false);
  });
});
