import {test,expect} from '@playwright/test'
import * as XLSX from 'xlsx'
import path from 'path';


const testdata = path.join(__dirname, '../excel sheets/test data.xlsx');
interface testdata{
    Username: string;
    Password: string;
}

test("2nd test case",async({page})=>{
 const workbook= XLSX.readFile(testdata);
 const worksheet=workbook.Sheets["Sheet1"];
 const xltojson= XLSX.utils.sheet_to_json<testdata>(worksheet);
 await page.goto("https://practicetestautomation.com/practice-test-login/")
  let username= page.getByLabel("Username");
  let password= page.getByLabel("Password");
  await username.fill(`${xltojson[1].Username}`);
  await password.fill(`${xltojson[1].Password}`)
  await page.getByRole("button",{name:"Submit"}).click();
  await expect(page.locator("#error")).toBeVisible();
  let actualerror= await page.locator("#error").innerText();
  let expecederror ='Your username is invalid!';
  if(actualerror == expecederror){
    console.log("test case passed, we got the error message")
  }else{
    console.log("testcase failed!")
  }
})
