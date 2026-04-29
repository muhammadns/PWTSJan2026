/*
End 2 End automation:

*/
let productName1 = "ZARA COAT 3"
let productName = "IPHONE 13 PRO"
let email = "testnHNK@gmail.com"
let password = "Testing@1234"
let country = "Singapore"
let country1 = "Spain"

import { test, expect } from '@playwright/test';

test("E2E Automation", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client")

    await page.getByPlaceholder("email@example.com").clear()
    await page.getByPlaceholder("email@example.com").fill(email)

    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button', {name:'login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()

    const products = page.locator("div.card-body")
    await products.nth(0).waitFor()

    const countOfProduct = await products.count()

    // find the number of products are available on the page
    // count() - Returns the number of elements matching within the locator

    /* In place of the following script the following line with filter() method will work:

    for(let i=0; i<countOfProduct; i++){
        const productText = await products.nth(i).locator("h5").textContent()
        if(productText === productName){
            await products.nth(i).locator("button").first().click()
            break;
        }
    }
    */
    await products.filter({hasText: `${productName}`}).locator("button").last().click()

    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")

    await page.locator("[routerlink='/dashboard/cart']").click()

    await page.getByRole("button",{name: 'Checkout'}).click()

    // Verify the email in Shipping Information field
    await expect(page.locator("div.user__name input").first()).toHaveValue(email)

    // input 'in' in country field
    await page.locator("div.user__name input").last().pressSequentially("in")

    // Select country 'Singapore'
    const ddResult = page.locator("section.ta-results button")
    await ddResult.nth(0).waitFor()
    await ddResult.filter({hasText:`${country}`}).click()

    //
    await page.getByText("Place Order").click()

    //
    await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")
    const orderText = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    const orderID = orderText?.replaceAll("|","").trim()

    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await expect(page.locator("table tbody")).toBeVisible()

    const rows = page.locator("table tbody tr")
    /*
    const rowsCount = await rows.count()
    for(let i=0; i<rowsCount; i++){
        const orderText = await rows.nth(i).locator("th").innerText()
        if(orderText === orderID){
            await rows.nth(i).locator("button").first().click()
            break
        }
    }
    */

    // In place of above commented lines 'filter' method will work:
    await rows.filter({hasText: `${orderID}`}).locator("button").first().click()

    await expect(page.locator("div.email-title")).toHaveText("order summary")

    // '!' will ignore the NULL check
    await expect(page.locator("div.col-text")).toHaveText(orderID!)

    //console.log(orderText)
    //console.log(orderID)


    //await page.waitForTimeout(2000)

})
