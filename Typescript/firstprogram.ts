// HOW TO PRINT ON THE CONSOLE.

console.log("Welcome to Typescript")

let i = 10
console.log(i)

// SINGLE LINE COMMENTS

/*
MULTIPLE LINE COMMENTS
*/

let language = "TS"

{
    console.log(language)

}
 // DAY 2: 01/27/2026

function add(){
    var i2 = 10 //local scope variable
}
//console.log(i2)

var i3 = 10
console.log(i3)

var flag = true

if(2>1) {
    var flag = false
}
console.log(flag)

// Re-Decleration
var num1 = 10  // initialization
var num1 = 200 // Re-Decleration

// Re-initialization
var num2 = 10  // initialization
num2 = 200 // Re-initialization

// Hoisting
//console.log(num3)
var num3 = 50

// let keyword
// 1. Scope - Global scope or Block level(local) scope {...}
// Variable using let keyword, it can be re-initalized but CANNOT be re-decleared.
let num4 = 90
num4 = 90*2

let num5 = 90
// let num5 = 90*2

// Hoisting - cannot access the variable before decleration
