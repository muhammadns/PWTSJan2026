// Playwright - web and API automation tool but it is also a framework
/*
If any tool help with writing the test cases and assertion is a framework with builtin liabraries

test, expect are functions

we need installation of PW in our own or organization computer

1. Installation: 
    Nodejs & NPM (Node Packaging Manager) use to install
    Editor
    Typescript
    tsx - Typescript executor
    Playwright - test automation toll - npm command help for installation:
        npm init playwright - this command install latest version of Playwright - init(initialize)
            TypeScript
            tests - location of test cases
            GitHub action - 'N' , for now, can chose 'Y'
            Playwright browser - 'Y', can be done later, if chose 'N' with 'npx playwright install' command

        Successfull installation with message "Happy hacking!"
        
        fullyParallel means multiple workers are working at same time on a job/test

        fullyParallel(true or false) - workers(1 or >1)
        1. fullyParallel = true and workers = 1 - test execution is sequential order
        2. fullyParallel = true and workers > 1 - test execution is parallel order
        3. fullyParallel = false and workers = 1 - test execution is sequential order
        4. fullyParallel = false and workers > 1 - test execution is parallel order

        filename.spec.ts / filename.test.ts
        npx playwright test --reporter=list
        npx playwright test --headed
        npx playwright show-report
        npx playwright test -g "login"

2. Structure of PW framework
*/

// 02/25/2026
/*
1. Architecture of Playwright - how a technology or tool works - client is VS code use websocket connection and connect to
Nodejs server 
Once a connection eastablish between client and server, all the test and steps use the same connection:
    websocket one connection for all playwright tests/steps / http connection for selenium, multiple connection for multiple tests/steps
    launch the browser
    launch the URL
    fill the username
    fill the password
    click on the login button
    validate if login is successfull
    
2. test()
3. async - await - async at function level and await at step level but both MUST go togather.
    await is to complete that steps before moving to next step.
promise - pending, success, rejected
4. page - browser fixture - special type of object which help us in terms of auto setup(LAUNCH THE BROWSER)
and teardown()
browser is an instance or a context

*/

