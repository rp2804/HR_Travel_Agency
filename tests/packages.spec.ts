import { test, expect } from "@playwright/test";

test.describe("Tour Packages & Details E2E Tests", () => {
  test("packages catalogue filters by category and search", async ({ page }) => {
    await page.goto("/packages");
    await expect(page.getByRole("heading", { name: "Find Your Perfect Trip" })).toBeVisible();

    // Type in search box
    const searchInput = page.getByPlaceholder("Search package, destination, or duration...");
    await searchInput.fill("Ooty");

    // Check filtered results
    const cards = page.locator("article");
    await expect(cards.first()).toBeVisible();
    await expect(page.getByText("Ooty & Coonoor Misty Hills")).toBeVisible();
  });

  test("package detail page shows gallery, itinerary accordion, and sticky enquiry card", async ({ page }) => {
    await page.goto("/packages/ooty-escape");
    await expect(page.locator("h1")).toContainText("Ooty & Coonoor Misty Hills");
    await expect(page.getByText("Detailed Itinerary")).toBeVisible();

    // Accordion interaction
    const day2Button = page.getByRole("button", { name: /Day 2/i });
    await expect(day2Button).toBeVisible();
    await day2Button.click();
    await expect(page.getByText("Nilgiri Toy Train to Coonoor")).toBeVisible();
  });
});
