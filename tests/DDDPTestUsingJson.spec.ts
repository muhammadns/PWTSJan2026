// Pure test case and assertions

import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ExcelUtils } from '../utils/ExcelUtils';
//import datas from '../testdata/dd.json'
import path from 'path'
import { cachedDataVersionTag } from 'v8';

const filepath = path.join(__dirname, "../testdata/excel.xlsx")
const sheetName = "Sheet3"

let datas: any
try{ 
    datas = ExcelUtils.getExcelData(filepath, sheetName)
}
catch(e){

}
console.log(datas)

let lp: LoginPage
let dp : DashboardPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
})

for(let data of datas){

    // Parmeterization of test title:
    test(`@regression validate the product details on the view page for ${data.productName}`, async ()=>{
        await lp.launchURL(data.url)
        await lp.loginIntoApplication(data.username, data.password)
        await expect(lp.homePageIdentifier).toBeVisible()
        await dp.searchProduct(data.productName, 0)
        await expect(dp.viewPageProductName).toHaveText(data.productName)
 
        })
    }
/*
    excel: xlsx liabrary needs to install: npm install --save-dev xlsx

*/