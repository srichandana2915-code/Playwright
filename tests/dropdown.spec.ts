import {test,expect} from '@playwright/test'



test('dropdown and radio button @smoke',async({page})=>{
//hello
    await page.goto('https://practice-automation.com/form-fields/');
    await page.getByRole("textbox",{name:"Name"}).fill('test user');
    await page.getByRole("textbox",{name:'Password'}).fill("password");
    await page.getByRole("checkbox",{name:'Water'}).check();
    await page.getByRole("checkbox",{name:'Water'}).uncheck();
    await expect(page.getByRole("checkbox",{name:'Water'})).not.toBeChecked(); 
    let checkboxes= page.locator('//input[@type="checkbox"]'); 
    let count= await page.locator('//input[@type="checkbox"]').count();
    await checkboxes.first().check();
    for (let i=0; i<count; i++){
        await checkboxes.nth(i).check();
    }
    console.log(await page.getByRole("textbox",{name:'Password'}).inputValue());

   



});