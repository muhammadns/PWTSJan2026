// 02/04/2026

// Conditional Statement - iT allows use to execute diff block of code {...} based on diff condition.

// if statement - This will handle only +ve scenario
// if else statement - This will handle both +ve & -ve scenario
// if else if else - This will validate multiple conditions

// 02/05/2026

// switch statement - This will handle multiple conditions based on the expression
// Ternary operator - This is a short hand if else statement

// 1. if statement:
    /*
        if(condition){
            code to be executed if condition is true
        }
    */
   let age = 30
   if (age >=20){
    console.log("Age is greater than 18")
   }

   // 2. if else statement:
    /*
        if(condition){
            code to be executed if condition is true
        }
        else{
            code to be executed if condition is false
        }
    */
   let status1 = "failed"
   if (status1 === "passed"){
    console.log("Test has been passed")
   }
   else{
    console.log("Test has been failed")
   }

   // 3. if else if else statement:
    /*
        if(condition1){
            code to be executed if condition1 is true
        }
        else if (condition2){
            code to be executed if condition2 is true
        }
        else if (condition3){
            code to be executed if condition3 is true
        }
        else{
            code to be executed if all conditions are false
        }
    */
   let browser = "edge"
   if (browser === "chrome"){
    console.log("Launch chrome browser")
   }
   else if(browser === "firefox"){
    console.log("Launch firefox browse")
   }
   else if(browser === "safari"){
    console.log("Launch safari browse")
   }
   else{
    console.log("Please provide browser name")
   }

   // 4. switch statement
   /*
    switch(expression)
        case value1:
            code to be executed if expression match value1
            break;
        case value2:
            code to be executed if expression match value2
            break;
        case value3:
            code to be executed if expression match value3
            break;
        default:
           code to be executed if expression when NO value matches
   */

    let browsername = "edge"
      switch(browsername){
        case "chrome":
            console.log("Launch chrome browser")
            break;
        case "safari":
            console.log("Launch safari browser")
            break;
        case "firefox":
            console.log("Launch firefox browser")
            break;
        default:
           console.log("Please provide valid browser name")
      }

/* When to use if else if statement and when to use switch statemen
    1. condition have ranges (>80, >90, >70) - if else if
    2. Data type are different - name = "string", salary - number
    3. Logical operator (&&) or (||)
*/

// 5. Ternary operator (?:) - This is a short hand of if else statement
/*
(condition) ? (value if true) : (value if false)
      1. condition
      2. the value if the condition is true
      3. the value if the condition is false
*/
let age1 = 10;
(age1 > 18) ? console.log("Eligible") :console.log("Ineigible")
