// Calender Handling on a page:

import { test, expect } from '@playwright/test';


test("Calender Handling", async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

    await page.locator(".ui-datepicker-trigger").click()

    const targetDay = "5"
    const targetMonth = "March"
    const targetYear = "2027"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    /* Option-1:
    
    while(true){
        if((await monthPicker.textContent() === targetMonth) &&
        (await yearPicker.textContent() === targetYear))
        {
            await page.getByText(targetDay, {exact:true}).click()
            break;
        }
        else{
            await page.getByText("Next", {exact:true}).click()
        }
    }
    */ 

   // Option-2

    while(!((await monthPicker.textContent() === targetMonth) &&
    (await yearPicker.textContent() === targetYear)))
        {
            await page.getByText("Next", {exact:true}).click()
        }

        await page.getByText(targetDay, {exact:true}).last().click()
   

    /* Option-3

    while((await monthPicker.textContent() !== targetMonth) ||
    (await yearPicker.textContent() !== targetYear))
        {
            await page.getByText("Next", {exact:true}).click()
        }
        await page.getByText(targetDay, {exact:true}).last().click()
    */

    await page.waitForTimeout(2000)

})