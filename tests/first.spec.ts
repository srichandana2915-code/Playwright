import { test, expect } from "@playwright/test";

test("First Test case", async ({ page }) => {

  await page.goto("https://playwright.dev");
  console.log(await page.title());

//   await page.goto("https://www.amazon.com/");
//   await page.goBack();

//   let expectedTitle = "Fast and reliable end-to-end testing for modern web apps | Playwright";
//   let originalTitle = await page.title();

//   if (expectedTitle === originalTitle) {
//     console.log("original title and expected title matched");
//   } else {
//     console.log("original title and expected title not matched");
//   }

  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('.getStarted_Sjon')).toHaveText('Get started');
  await page.locator(".getStarted_Sjon").click();
  await expect(page.locator(".breadcrumbHomeIcon_YNFT")).toBeVisible();

//   await page.goForward();
//   await page.waitForTimeout(3000);
  await page.reload();
//   await page.waitForTimeout(3000);

  console.log(page.url());

//   let tile = await page.title();
//   console.log(tile);

  let size = page.viewportSize();
  console.log(size?.width);
  console.log(size?.height);

  //console.log(await page.content());
});