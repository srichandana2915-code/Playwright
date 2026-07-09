import {test,expect} from '@playwright/test'

test("locator practice",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page.getByRole('heading',{name:'PlaywrightPractice'})).toBeVisible();
    await expect(page.getByRole('heading',{name:'getByRole()'})).toBeVisible();
    await page.getByRole('button',{name:'Primary Action'}).click();
    await page.getByRole('button',{name:'Toggle Button'}).click();
    await page.getByRole('textbox',{name:'Username:'}).fill('hello');
    await page.getByRole('button',{name:'Div with button role'}).hover();
    const acceptTermsCheckbox=page.getByRole('checkbox',{name:'Accept terms'});
    await acceptTermsCheckbox.check();
    await expect(acceptTermsCheckbox).toBeChecked();
    await page.getByRole('menuitem',{name:'Home'}).click();
    const products= page.getByRole('menuitem',{name:'Products'});
    await products.click();
    const contact= page.getByRole('menuitem',{name:'Contact'});
    await contact.click();
    const alertMessage=page.getByRole('alert',{name:'This is an important alert message!'});
    await expect(alertMessage).toHaveText(/This is an important alert message!/)



});

test("get by label locator",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.getByLabel("Email Address:").fill('test@test.com');
    await page.getByLabel("Password:").fill("testing");
    await page.getByLabel('Your Age:').fill('32');
    await expect(page.getByRole('group',{name:'Shipping Method'})).toBeVisible();
    await page.getByLabel('Standard').check();
    await page.getByLabel('Express').check();
    await expect(page.getByLabel('Express')).toBeChecked();
});