import { test, expect } from "@playwright/test";

test.describe("Enquiry Modal & Contact Form E2E Tests", () => {
  test("opens enquiry modal when clicking Plan My Trip", async ({ page }) => {
    await page.goto("/");
    const planTripBtn = page.getByRole("button", { name: "Plan My Trip" }).first();
    await planTripBtn.click();

    // Check modal visibility
    await expect(page.getByRole("heading", { name: "Plan Your Dream Journey" })).toBeVisible();

    // Fill form fields
    await page.getByPlaceholder("e.g. Ramesh Sundaram").fill("John Doe");
    await page.getByPlaceholder("+91 98401 00000").fill("9876543210");

    // Close modal
    const closeBtn = page.getByRole("button", { name: "Close modal" });
    await closeBtn.click();
    await expect(page.getByRole("heading", { name: "Plan Your Dream Journey" })).not.toBeVisible();
  });
});
