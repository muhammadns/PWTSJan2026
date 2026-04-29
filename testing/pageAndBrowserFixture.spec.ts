/*
page - browser 
fixture - special type of object which help us in terms of auto setup(LAUNCH THE BROWSER) and teardown(CLOSE THE BROWSER)


*/
import {test, expect} from '@playwright/test'

test("Page Fixture", async function({page}) {
    await page.goto("https://facebook.com")
    await page.goto("https://linkedin.com")
    
})

test("Browser Fixture", async function({browser}) {
    const context = await browser.newContext()  // Created an instance of a browser - browser contect
    const page = await context.newPage()  // Creates a new page of the browser
    const page1 = await context.newPage()
    await page.goto("https://google.com")
    await page1.goto("https://linkedin.com")
})