/*
Pure test case and assertions

*/

import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'

test.describe.configure({mode: 'serial', timeout: 10000, retries: 4})

let url = "https://rahulshettyacademy.com/client"
let email= "testnHNK@gmail.com"
let password= "Testing@1234"
let IncorrectPwd= "test"

let lp: LoginPage

test.beforeEach(async ({page}) =>{
    lp = new LoginPage(page)
    await lp.launchURL(url)
})

test.skip("Valid login test",{tag: ['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test.skip("Invalid login test",{tag:  '@regression'}, async ()=>{
    await lp.loginIntoApplication(email, IncorrectPwd)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password");
    
})