// Hooks - A special method which performs a setup and tear down process.
/*
test.beforAll() - it will be executed before running any of the test cases.
test.beforEach() - it will run before running each and every test case. Common steps for all the test cases
test()
test.afterEach() - it will run after running each and every test.
test.afterAll() - it will execute after execution of all the test cases, like close DB connection.


*/

import {test} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before All")
})

test.afterAll(async ()=>{
    console.log("After All")
})

test.beforeEach(async ()=>{
    console.log("Before each")
})

test.afterEach(async ()=>{
    console.log("After each")
})

test("Test1",async ()=>{
    console.log("Test- 1")
})

test("Test2",async ()=>{
    console.log("Test- 2")
})

test("Test3",async ()=>{
    console.log("Test- 3")
})