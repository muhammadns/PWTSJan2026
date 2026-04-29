/*
The file name should not have any space and contain ".spec.ts" or "test.ts" and always in test folder
Example: filename.spec.ts, file_name.spec.ts, filename.test.ts, file_name.test.ts

first line always import tool or method or function

https://rahulshettyacademy.com/client

*/

import{test, expect} from '@playwright/test'

test("Login to application", async function({page}) {
    // launch the URL
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // filll the username using the fill() function
    //await page.locator("#username").fill("student")
    await page.getByLabel("username").fill("student")

    // validate username is successfully entered
    // assertion method - toHaveValue("value") - check if an INPUT field is having the value as "value"
    // await expect(page.locator("#username")).toHaveValue("student")
    await expect.soft(page.getByLabel("username")).toHaveValue("student")

    // fill the password
    //await page.locator("Password").fill("Password123")
    await page.getByLabel("Password").fill("Password123")

    // click on Submit button using the click() function
    await page.getByRole("button", {name: "Submit"}).click()

    // validate if the login is successfull using toBeVisble() method
    await expect(page.locator(".wp-block-button a")).toBeVisible()

    // An element on the page should have text vale as "Logged In Successfully"
    // toHaveTest("text") - validate if an element have the test as "text"
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")

    // The page should have a specific URL
    // url() - function to get the url of current page.
    await expect(page.url()).toContain("logged-in-successfully")
})

test("Handling Radio Button and Checkbox", async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")

    // click - click on an element
    // check() - it validate if the element is already selected, if it is not selected then it click on the element
    await page.locator("#gender-radio-2").check()

    //toBeChecked() - it will validate the element is checked or not
    await expect(page.locator("#gender-radio-2")).toBeChecked()

    await page.locator("#hobbies-checkbox-3").check()
    await expect(page.locator("#hobbies-checkbox-3")).toBeChecked()

    await page.waitForTimeout(2000)
    await page.locator("#hobbies-checkbox-3").uncheck()
    await expect(page.locator("#hobbies-checkbox-3")).not.toBeChecked()

    await page.waitForTimeout(2000)
})

// How to get the text value from an element
test("Getting text from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const text = await page.locator("h1.title").innerText()
    console.log(text);

    const allTexts = await page.locator("h2.title").allTextContents()
    console.log(allTexts)

    //await page.waitForTimeout(5000)

})

