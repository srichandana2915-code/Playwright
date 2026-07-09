import {test,expect} from '@playwright/test'
import * as XLSX from 'xlsx'
import * as path from 'path'
const testdata= path.join(__dirname, '../excel sheets/test data.xlsx');
interface testdata{
    Username: string;
    Password: string;
}
test('positive test',async({page})=>{
    const workbook=XLSX.readFile(testdata);
    const sheet= workbook.Sheets["Sheet1"];
    const xltoJson= XLSX.utils.sheet_to_json<testdata>(sheet);
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    let username= page.getByLabel("Username");
    let password= page.getByLabel("Password");
    await username.fill(`${xltoJson[0].Username}`);
    await password.fill(`${xltoJson[0].Password}`);
    await page.getByRole("button",{name:"Submit"}).click();
})