/*
 Drop Down - 
2 types of DD
    1. Static drop down - the value will never change - Gender / country
        a. sigle select DD
        b. Multi select DD

    2. Dynamic drop down - the valye will be changeable - electronics at the store shelf
        a. sigle select DD
        b. Multi select DD

Development of the DD
    1. <select> tag
    2. NON select tag - div, span, li, ul...

    1. DD developed using <select> tag
    Step by step procedure to select the value from DD

    1. launch the URL
    2. locate the drop down element by writing locator
    3. get the value from the dropdown using - selectOption("value or {lable or value or index}")
    Example: page.locator("#dd").selectOption("saab", {index: 2} or {label: "Opel"} or {value: 'audi'})
    4. if the dropdown is multi-select - selectOption(["AS", "BS", "CS"] or [{label: "India"}])

    2. DD developed using NON select tag
        Step by step procedure to select the value from DD

    1. launch the URL
    2. locate the drop down element by writing locator
    3. Click on the drop down element in step #2
    4. Identify and click on the element that you wamt to select from the dropdown
    
    https://rahulshettyacademy.com/client/#/auth/login
*/

import{test, expect} from '@playwright/test'

// How to get the text value from an element
test("Getting Dropdown from an element", async ({page})=>{
    
    /*
    await page.goto("https://practice.expandtesting.com/dropdown/")
    const countryDD = await page.locator("#country")
    await countryDD.selectOption("BS")
    await page.waitForTimeout(2000)

    await countryDD.selectOption({value: "CN"})
    await page.waitForTimeout(2000)

    await countryDD.selectOption({label: "New Zealand"})
    await page.waitForTimeout(2000)

    await countryDD.selectOption({index: 156})
    await page.waitForTimeout(2000)
*/

    await page.goto("https://demoqa.com/select-menu/")
    await page.locator("#cars").selectOption(["volvo", "audi"])
    await page.waitForTimeout(2000)

    await page.locator("#cars").selectOption([{label:"Opel"}, {index: 1}])
    await page.waitForTimeout(2000)
})