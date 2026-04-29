/*
The file name should not have any space and contain ".spec.ts" or "test.ts" and always in test folder
Example: filename.spec.ts, file_name.spec.ts, filename.test.ts, file_name.test.ts

first line always import tool or method or function

 npx playwright test -g "Login to TOLLSQA app"
*/

import{test, expect} from '@playwright/test'

test("Login to TOOLSQA app", async function({page}) {
    // launch the URL
    await page.goto("https://demoqa.com/automation-practice-form")

    // filll the First Name using the fill() function
    await page.getByPlaceholder("First Name").fill("Noman")

    // filll the Last Name using the fill() function
    await page.getByPlaceholder("Last Name").fill("Siddiqui")

    // filll the Email using the fill() function
    await page.getByPlaceholder("name@example.com").fill("muhammadns@msn.com")

    // Click on Male for Gender 
    await page.locator("#gender-radio-1").check()

    //toBeChecked() - it will validate the element is checked or not
    await expect(page.locator("#gender-radio-1")).toBeChecked()
    await page.waitForTimeout(2000)

    // Click on Male for Gender 
    await page.locator("#gender-radio-1").check()

    //toBeChecked() - it will validate the element is checked or not
    await expect(page.locator("#gender-radio-1")).toBeChecked()

    // Click on Female for Gender 
    await page.locator("#gender-radio-2").check()

    //toBeChecked() - it will validate the element is checked or not
    await expect(page.locator("#gender-radio-2")).toBeChecked()
    await page.waitForTimeout(2000)

    // Click on Other for Gender 
    await page.locator("#gender-radio-3").check()

    //toBeChecked() - it will validate the element is checked or not
    await expect(page.locator("#gender-radio-3")).toBeChecked()
    await page.waitForTimeout(2000)

    // filll the Mobile Number using the fill() function
    await page.getByPlaceholder("Mobile Number").fill("1234567890")

    // Click on Date oof Birth 
    await page.locator("#dateOfBirth-wrapper").fill("12/12/2000")
    await page.waitForTimeout(2000)
})
