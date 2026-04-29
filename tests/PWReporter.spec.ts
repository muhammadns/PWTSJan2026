/*
Playwright reports:
Built-in report: 
npx playwright test -g '@smoke' --reporter=dot

Custom PW reports: Allure report ...
PW does not support automatic, need to install liabraries and needs Java 21 version on the machine

    Install Allure reporter:
    npm install --save-dev allure-commandline

    Install Allure PW Adaptor:
    npm install --save-dev allure-playwright

    update playwright.config.ts file:
    reporter: [['html'],['line'],['allure-playwright]],

    run test:
    npx playwright test
    it will generate 'allure-result' folder
    use the command below to generate report in the browser:
    npx allure serve allure-results


*/