/*
Pure test case and assertions

*/

import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import logInData from '../testdata/login.json'

let lp: LoginPage

test.beforeEach(async ({page}) =>{
    lp = new LoginPage(page)
    await lp.launchURL(logInData.url)
})

test("Valid login test",{tag: ['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(logInData.email, logInData.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Invalid login test",{tag:  '@regression'}, async ()=>{
    await lp.loginIntoApplication(logInData.email, logInData.IncorrectPwd)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.");
    
})
