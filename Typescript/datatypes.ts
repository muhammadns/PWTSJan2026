// https://github.com/Praveenroy05/PWTSJan26/tree/master/Typescript

// Data type - define what type of data a variable is storing.

// Syntax
// keyword(var/let/const) variable name: datatype(optional) = value

// There are 2 type of datatype:
// Primitive - store only have single value
    // number, string, boolean, null, undefined, union, any
    // union (|) : combination of datatype (numeric| string)

// Note :  By default any type of variable will have a value as "undefined" and datatype will be "any"

// number - combination of integer (98, -90) and floating point number (34.45, 12345.56789)

let num6: number = 100 // Type Annotation
let num7 = 1234.56789 // Type Inference

// whenever define the datatype of a variable explicitly, is known as Type Annotation
// whenever TS & JS is able to identify datatype of a variable implicitly, is known as Type Inference

// Non-Primitive - can store more than one value
    // Function, array, object

// what is difference between Type Annotation and Type Inference

// 02/02/2026

// string - combination of character inside single quote '' (string literal) or double quote "" (string literal) and
//  backtick `` (template literal).

let singleQuote = 'Single quote string'
let doubleeQuote = "Double quote strin"

// There are 2 purpose for backtick, multi line string and string Parameterization(Template literal) for data driven testing.

// Multi line string
let multiLineStr = `This is
multiple line
string`
console.log(multiLineStr)

// String Parameterization - $(variable name)
let age = 20
let message = `Your age is ${age}`
console.log(message)


// Boolean data type - true/false
let isAdmin = false
let isEmployee = true

// null data type - Intentional absence of a value
let num1 = null
console.log(num1)

// undefined - defined a variable but have not assigned a value to it.
let any1
console.log(any1)

let undefinedVar : undefined = undefined
// undefinedVar = 5

// union ( | ) - combination of multiple data type

// Example 1
let num2 : (number | string) = 10
num2 = "TS"

// Example 2
let num3 : (string | boolean | number) = "Noman"
console.log(num3)
num3 = true
console.log(num3)
num3 = 5
console.log(num3)

// any - Free to acccept any kind of data type
let any2 :any = 10
console.log(any2)
any2 = "TS"
console.log(any2)
any2 = true
console.log(any2)
any2 = null
console.log(any2)
any2 = undefined
console.log(any2)

// void - nothing - it is used inside the function as a return
function add(): void{
    console.log("Welcome to addition")
}
