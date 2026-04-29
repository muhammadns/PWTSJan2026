/*
Framework - a design principal, set of guidelines.
POM - Page Object Model - it is a design princiapla, it is a class whihc represents the page of
the application and contains locators and method of the page.
POM is a design pattern used in software testing to represent a web page as an object, it is a
way to organize and manage interaction with a web page by creating the properties ( variable - locator) and
methods (action - LoginIntoApplication(), launchURL(),...) of that particular page.

this approachhelps in reducing code duplication, improve readability and maintainability by encapsulating by page specific
properties and methods inside a particular class.

LoginPgae.ts - Locators related to login page, methods related to login page

POM framework from scratch: there are different layers that we have to create:
    1. PAGE LAYER - will create a package or folder (pages) - different class will be creating it over here - LoginPage.ts,
    DashboardPages.ts ...., this class will consists of locators and methods related to specific class.
        email, password, loginbtn - loginIntoApplication(), invalidLogin()

    2. TEST LAYER - will create a package or folder(tests) - pure test case and assertion, call the locators and methods from
    the page class to the test files. LoginPageTest.spec.ts, DahboardPageTest.spec.ts

    3. TEST DATA LAYER - will create a package or folder(testdata), json / excel file like TestData.json, TestData.excel

    4. CONFIGURATION LAYER - playwright.config.ts - global configuration file.

    5. UTILS LAYER - will create folder(utils) - custom function - screenshot(), scrollup(), scrolldown(), get the data from
    excel, API method - to get the authorization token.

    6. REPORT LAYER - HTML/Allure - we do NOT have to create is seperately. PW handle it.




*/