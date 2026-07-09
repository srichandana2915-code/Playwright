import {expect,test} from "@playwright/test"

test("table automation",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    let headers= page.locator("//table[@name='BookTable']/child::tbody/child::tr/child::th")
    console.log(await headers.count());
    console.log("headers are: ", await headers.allInnerTexts());
   let tableValues= page.locator("//table[@name='BookTable']/child::tbody/child::tr/child::td");
   console.log("table values: ", await tableValues.allInnerTexts());
//identifying  a particular table value
let value= page.locator("//td[text()='Animesh']/following-sibling::td[1]")
console.log("value: ", await value.allInnerTexts());
});