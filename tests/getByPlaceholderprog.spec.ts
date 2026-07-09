import {test,expect} from '@playwright/test'

test("get by text",async({page})=>{
    await page.goto("https://testautomationpractice.blogspt.com/p/playwrightpractice.html");
    let fullNamelocator= page.getByPlaceholder('Enter your full name')
    let phonenumberlocator= page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    let messagelocator= page.getByPlaceholder('Type your message here...');
    let searchlocator= page.getByPlaceholder('Search products...');

    await fullNamelocator.fill('Chandana Bolla');
    console.log("entered txt: ", await fullNamelocator.inputValue());
    await phonenumberlocator.fill('98411111111');
    await messagelocator.fill('testing 123');
    await searchlocator.fill('shampoo');


});