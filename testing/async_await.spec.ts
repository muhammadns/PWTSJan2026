import {test, expect} from '@playwright/test'

test("login", async function({page}){
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started'}).click();
    await expect(page.getByRole('heading', { name: 'Installation'})).toBeVisible();

})

