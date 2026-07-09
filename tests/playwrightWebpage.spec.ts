import { test, expect } from "@playwright/test";

test("Playwright First Test case", async ({ page }) => {

  await page.goto("https://playwright.dev");
  console.log(await page.title());

  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('.getStarted_Sjon')).toHaveText('Get started');
  console.log(page.url());
});

test("Playwright Second Test case", async ({ page }) => {

  await page.goto("https://playwright.dev");
  console.log(await page.title());

  await page.locator(".getStarted_Sjon").click();
  await expect(page.locator(".breadcrumbHomeIcon_YNFT")).toBeVisible();

});