// Functions - It is a set of instructions to perform a specific task.
// when a function decleared inside a class it is called FUNCTION but 
// when it is decleared outside of a class then it is a METHOD.
// Duplication, Maintenance, Reusability.

// Types of Function in TS/JS
//  1. Named Function - Function decleration - a function declear along with the name known as Function decleration
//  Decleration:
/*
    Syntax:

    JS:
    function functionName(parameter){
        block of code to be executed
        return - will return a value
    }
    functionName(argument)

    TS:
    function functionName(parameter: datatype(optional)): returnRype(optional){
        block of code to be executed
        return
    }   void - No return type
*/
// a. Non-Parameterized and non-returning function
function greet(){
    console.log("Welcome to TypeScript.")
}
greet()

// b. Parameterized and non-returning function
function addition(a:number,b:number){
    console.log(a+b)
}
addition(20,30)

// c. Parameterized and returning function
function add(a:number,b:number){
    return a+b // return key word should be the LAST statement of the condition
}
const result = add(10,20)
console.log(result)

// d. Non-Parameterized and returning function
function greetings(){
    return "Welcome to TypeScript again."
}
const result1 = greetings()
console.log(result1)


//  2. Anonymus Function - Function Expression: this function declear WITHOUT any name and it will be stored inside a 
// variable known as function expression and this variable becomes the name of the function.

//Syntax
/*
let functionName = function (param: datatype(optional)): returnType(optional){
    code to be executed
    return...
}
const result = functionName(argument)
*/
// when declear a function as a parameter of another function is known as call back function
let message = function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`)
}
message("Noman", 28)

// Call back function - a function which will be utilised as a parameter of another function

//  3. Arrow Function (=>) - Lambda Function - ES6 version (Year 2015)
//      a. It is also part of anonymus function and will not have any name.
//      b. This function will declear by using (=>) sumbol after the parameter.
//      c. Main pupose is to reduce the number of code lines.
//      d. If there is only one line of code inside the function then skip the {} and return keyword, it
//          implicitly return the value from the function
//      e. If ther is only one parameter for the function skip the () to define the parameter
//Syntax:
/*
(param:datatype)=>
    code to execute
*/
//Example1:
let add1 = (a:number,b:number)=>{
    console.log(a-b)
}
add1(10,5)

//Example2:
let sum1 = (a:number, b:number, c:number)=> console.log(a+b+c)
sum1(2,3,4)

let sum2 = (a:number, b:number, c:number)=> (a+b+c)
let sum1Result = sum2(20,30,40)
console.log(sum1Result)

//Example3:
let square = (a:number) => console.log(a**2)
square(10)

//  4. Constructor Function - Will explain with Class concept

// Method Overloading - A method have same name but different parameter
/*
function name1(a:number){

}
function name1(a:number, b:number){
    
}
*/

//Default parameter and Optional parameter
//  Default parameter: parameter with default value is know as default parameter and SHOULD be after mandatory parameter.
//Example:
function name1(a:number, b:number=5){
    console.log(a+b)
}
name1(10)
name1 (10,10) // it will overwrite the default parameter

//Optional parameter - parameter with a ? mark like (age?)
//Example:
function display(name:string, age?:number){
    console.log(name, age)
}
display("Noman")
display("Noman", 50)

