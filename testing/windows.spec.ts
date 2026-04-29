/*
Multiple tabs or windows - popup event - page.waitForEvent()
step by step process to handle multiple tab/windows using PW:
    1. Launch the URL
    2. Wait for popup event tp appear on the page - page.waitFor Event("popup")
    3. Identify and click on the element which is respomsible for generation of popup event on the wepage
    4. We can store the final result of const newPage = await page.waitForEvent("popup")
    5. Perform any action on the new tab/window, we must use newPage object.
    6. Come back to the main/original page and perofrm any action using "page" fixture
*/

import{test, expect} from '@playwright/test'

// How to get the text value from an element
test("Multiple tabs or windows handling", async ({page})=>{
    
    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup")
    //console.log(page1)

    // click on the button which is responsible for generating of popup event
    await page.locator("#Tabbed button").click()
    //console.log(page1)

    // Waiting for the final result for waitForEvent("popup")
    const newPage = await page1
    //console.log(newPage)

    // perform any action on the new tab/window
    await newPage.getByText("Downloads", {exact: true}).click()
    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")

    // Just to show that control comeback to main page
    await page.bringToFront()
    await page.waitForTimeout(2000)

    // Comeback to main/original page and perform any action
    await page.getByText("Home", {exact: true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})