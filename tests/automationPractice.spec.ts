import {test,expect} from "@playwright/test"

test("Dummy webiste",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(page.getByLabel("Username")).toBeVisible();
    await page.getByLabel("Username").fill('student');
   // await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await expect(page.locator("#submit")).toBeEnabled();
    await page.locator("#submit").click();
    await expect(page.locator(".post-title")).toBeVisible();
    await page.waitForTimeout(3000);
    console.log(await page.title());
    await expect(page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color")).toBeVisible();


});