import {test,expect} from '@playwright/test'

test("get by alt text",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    console.log(await page.getByAltText('logo image').isVisible());

});

test('amazon webpage',async({page})=>{

    await page.goto('https://www.amazon.com/');
    let image1= page.getByAltText('Clothing');
    await expect(image1).toBeVisible();
    console.log(await image1.getAttribute('src'));
    await expect(page.locator('#nav-logo-sprites')).toBeVisible();
    console.log(await page.locator('#nav-logo-sprites').getAttribute('aria-label'));
    let amazonbasic= page.getByText('Amazon Basics');
    await amazonbasic.click();
    console.log(page.url());



})