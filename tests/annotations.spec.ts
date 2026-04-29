/*
Annotations: Adding some kind of information to test cases
    1. test.skip() - Marks the test as irrelevant, PW does not run such test.
    2. test.fail() - Marks the test as a failing test.
    3. test.fixme() - Marks the test as failing test, PW will not run such test.
    4. test.only() - PW will run only those test cases which have been marked as test.only().
    5. test.slow() - Marks the test as slow and tripples the test timeout.
    6. test.step() - Provide the test title in the report for the test step.
        await test.step(""), async () => {
        
        }
    7. test.describe() - Group the the test case and display the title of the describe inside the report
    8. test.describe().configure({mode: 'serial'})
*/

import {test, expect } from "@playwright/test"

test.skip("test1", async ()=>{
    console.log("Test1")

})

test.fixme("test2", async ()=>{
    console.log("Test2")

})

test.fail("test3", async ()=>{
    console.log("Test3")

})