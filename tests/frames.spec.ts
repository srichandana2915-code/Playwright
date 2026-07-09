import {expect,test} from "@playwright/test"

test("frames automation",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/iframe");
    console.log(await page.frameLocator('.tox-edit-area__iframe').locator('//p[text()="Your content goes here."]').innerText());




});