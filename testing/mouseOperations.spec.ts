/*
click - click()
double click - dblclick()
right click - click({})
mouse hover - hover()
scroll down - 
drag and drop - locator.dragTo(Locator)

*/

import{test, expect} from '@playwright/test'

// How to get the text value from an element
test("Handling Double click and Right click operation", async ({page})=>{
    
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    // double click - dblclick() - Double click on an element
    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()
        
    // right click - click({button:'right'}) - click on an element
    await page.getByText("right click me").click({button: 'right'})
    await page.waitForTimeout(2000)
    await page.getByText("Delete", {exact:true}).click()
    await page.waitForTimeout(2000)
})

// How to get the text value from an element
test("Handling mouse hover for an element", async ({page})=>{

    await page.goto("https://www.spicejet.com/")
    await page.getByText("Travel Policies", {exact:true}).hover()
    await expect(page.getByTestId("test-id-Baggage Information")).toBeVisible()
    await expect(page.getByTestId("test-id-Baggage Information")).toContainText("Information")
})

// How to get the text value from an element
test("Handling scroll on the page", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // Playwright by default perform the scrolling on the page
    await page.getByText("Download Files", {exact:true}).click()

    // scollIntoViewIfNeeded can be use for scorlling the page
    //await page.getByText("Download Files", {exact:true}).scrollIntoViewIfNeeded()
    //await page.getByText("Download Files", {exact:true}).click()

    await page.waitForTimeout(2000)
    await page.locator('#input1').fill("Testing")
    await page.waitForTimeout(5000)

    await page.locator("#inputText").fill("Scroll up")
    await page.waitForTimeout(5000)
    await expect(page.locator("#inputText")).toHaveValue("Scroll up")

})

// How to get the text value from an element
test("Handling drag and drop", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = await page.locator("div#draggable")
    const targetElement = await page.locator("div#droppable")

    // dragTo(targetlocator)

    //await sourceElement.dragTo(targetElement)

    //manual way for above line 69
    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")
})