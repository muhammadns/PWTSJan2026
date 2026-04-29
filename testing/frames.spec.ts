/*
Frames -

In an html page CANNOT create another html page, instead use <iframe> ... <html> .. </html> ...</iframe>, 
it help intergrating an html page into another html page

*/

import{test, expect} from '@playwright/test'

// How to get the text value from an element
test("Handling Frames", async ({page})=>{

        await page.goto("https://demo.automationtesting.in/Frames.html")
        // https://ui.vision/demo/webtest/frames/
        
        // frameLocator() - which help in entering inside the iframm to select the elements
        const framePage = page.frameLocator("#Single iframe")
        await framePage.locator("div.col-xs-6 input").first().fill("Testing")
        await expect(framePage.locator("div.col-xs-6 input").first()).toHaveValue("Testing")
        await page.waitForTimeout(2000)

        await page.getByText("Iframe with in an Iframe").click()

        const outerFrame = page.frameLocator("#Multiple iframe")
        const innerFrame = outerFrame.frameLocator(".iframe-container iframe")
        await innerFrame.locator("[type='text']").first().fill("Inner Frame")
        await expect(innerFrame.locator("[type='text']").first()).toHaveValue("Inner Frame")
        await page.waitForTimeout(2000)

        // Comeback to main/original page and perform any action
        await page.getByText("Home", {exact: true}).click()
        await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})
