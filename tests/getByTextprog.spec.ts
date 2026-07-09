import {test,expect} from '@playwright/test'

test("get by text",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    console.log(await page.getByText('getByText()').isVisible());
    console.log(await page.getByText('Locate elements by their text content.',{exact:true}).isVisible());
    console.log(await page.getByText('Locate elements').count());
    console.log(await page.getByText('Locate elements').allTextContents());
    console.log(await page.getByText('This paragraph contains some important text that you might want to locate.').isVisible());
    console.log(await page.getByText('Another paragraph with colored text for demonstration.').isVisible());
    console.log(await page.getByText('Submit Form').isVisible());
    await expect(page.getByText('Click the button above to submit your information.')).toBeVisible();
    






});